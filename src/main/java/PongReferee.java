import java.util.List;
import java.util.Properties;

import com.codingame.gameengine.core.AbstractPlayer;
import com.codingame.gameengine.core.AbstractPlayer.TimeoutException;
import com.codingame.gameengine.core.GameManager;
import com.codingame.gameengine.core.Referee;
import com.codingame.gameengine.core.Tooltip;
import com.codingame.gameengine.module.entities.Circle;
import com.codingame.gameengine.module.entities.EntityManager;
import com.codingame.gameengine.module.entities.Line;
import com.google.inject.Inject;

class PongPlayer extends AbstractPlayer {
    int y;
    Line paddle;
    boolean lost;
    public int previousY;

    int getAction() throws NumberFormatException, TimeoutException {
        return Integer.parseInt(this.getOutputs().get(0));
    }

    @Override
    public int getExpectedOutputLines() {
        return 1;
    }
}

public class PongReferee implements Referee {
    private static int WIDTH = 1920;
    private static int HEIGHT = 1080;
    private static int BALL_RADIUS = 20;
    private static int PADDLE_WIDTH = 15;
    private static int PADDLE_HEIGHT = 150;

    @Inject private GameManager<PongPlayer> gameManager;
    @Inject private EntityManager entityManager;

    private int ballX, ballY;
    private int ballVX, ballVY;
    private Circle ball;

    private int clamp(int val, int min, int max) {
        return Math.max(min, Math.min(max, val));
    }

    private void sendPlayerInputs() {
        List<PongPlayer> allPlayers = gameManager.getPlayers();
        for (PongPlayer p : gameManager.getActivePlayers()) {
            p.sendInputLine(String.valueOf(p.y));
            p.sendInputLine(String.valueOf(allPlayers.get((p.getIndex() + 1) % 2).y));
            p.sendInputLine(String.format("%d %d", ballX, ballY));
            p.sendInputLine(String.format("%d %d", ballVX, ballVY));
            p.execute();
        }
    }

    private double min(double... values) {
        double m = values[0];
        for (double v : values) {
            m = Math.min(m, v);
        }
        return m;
    }

    private void moveBall() {
        double t = 0;
        while (t < 1) {
            double timeCollisionTop = ballVY < 0 ? (BALL_RADIUS - ballY) / (double) ballVY : 1;
            double timeCollisionBottom = ballVY > 0 ? (HEIGHT - BALL_RADIUS - ballY) / (double) ballVY : 1;
            double timeCollisionLeft = ballVX < 0 ? (BALL_RADIUS + PADDLE_WIDTH - ballX) / (double) ballVX : 1;
            double timeCollisionRight = ballVX > 0 ? (WIDTH - PADDLE_WIDTH - BALL_RADIUS - ballX) / (double) ballVX : 1;

            if (ballX <= BALL_RADIUS + PADDLE_WIDTH && gameManager.getPlayer(0).lost) {
                timeCollisionLeft = 1;
            }
            if (ballX >= WIDTH - BALL_RADIUS - PADDLE_WIDTH && gameManager.getPlayer(1).lost) {
                timeCollisionRight = 1;
            }

            double delta = min(timeCollisionTop, timeCollisionBottom, timeCollisionLeft, timeCollisionRight, 1 - t);
            t += delta;

            ballX += ballVX * delta;
            ballY += ballVY * delta;

            if (ballVY < 0 && ballY <= BALL_RADIUS || ballVY > 0 && this.ballY >= HEIGHT - BALL_RADIUS) {
                this.ballVY *= -1;
            }

            if (ballVX < 0 && ballX <= BALL_RADIUS + PADDLE_WIDTH) {
                PongPlayer p = gameManager.getPlayer(0);
                double paddleY = (p.previousY * (1 - t)) + p.y * t;
                if (ballY > paddleY - PADDLE_HEIGHT / 2 && ballY < paddleY + PADDLE_HEIGHT / 2) {
                    ballVX *= -1;
                    gameManager.addTooltip(new Tooltip(p.getIndex(), "Ping"));
                } else {
                    p.lost = true;
                }
            }
            if (ballVX > 0 && ballX >= WIDTH - BALL_RADIUS - PADDLE_WIDTH) {
                PongPlayer p = gameManager.getPlayer(1);
                double paddleY = (p.previousY * (1 - t)) + p.y * t;
                if (ballY > paddleY - PADDLE_HEIGHT / 2 && ballY < paddleY + PADDLE_HEIGHT / 2) {
                    ballVX *= -1;
                    gameManager.addTooltip(new Tooltip(p.getIndex(), "Pong"));
                } else {
                    p.lost = true;
                }
            }

            ball.setX(ballX).setY(ballY);
            entityManager.commitEntityState(ball, t);
        }
    }

    @Override
    public Properties init(int playerCount, Properties gameProperties) {
        gameManager.setFrameDuration(300);

        ballX = WIDTH / 2;
        ballY = HEIGHT / 2;
        ballVX = 148;
        ballVY = 132;

        entityManager.createSprite().setImage("background").setScale(2);

        for (PongPlayer p : gameManager.getPlayers()) {
            p.previousY = p.y = HEIGHT / 2;

            p.paddle = entityManager.createLine()
                    .setLineWidth(PADDLE_WIDTH)
                    .setX(p.getIndex() == 0 ? PADDLE_WIDTH / 2 : WIDTH - PADDLE_WIDTH / 2)
                    .setY(p.y - PADDLE_HEIGHT / 2)
                    .setX2(p.getIndex() == 0 ? PADDLE_WIDTH / 2 : WIDTH - PADDLE_WIDTH / 2)
                    .setY2(p.y + PADDLE_HEIGHT / 2);
        }

        ball = entityManager.createCircle()
                .setRadius(BALL_RADIUS)
                .setFillColor(0xffffff)
                .setX(ballX)
                .setY(ballY);

        return gameProperties;
    }

    @Override
    public void gameTurn(int turn) {
        // Send new inputs with the updated positions
        sendPlayerInputs();

        // Update new positions
        for (PongPlayer p : gameManager.getActivePlayers()) {
            int deltaMove;
            try {
                deltaMove = p.getAction() - p.y;

                deltaMove = clamp(deltaMove, -120, 120);
                int newPosY = p.y + deltaMove;

                p.previousY = p.y;
                p.y = clamp(newPosY, PADDLE_HEIGHT / 2, HEIGHT - PADDLE_HEIGHT / 2);
                p.paddle.setY(p.y - PADDLE_HEIGHT / 2);
                p.paddle.setY2(p.y + PADDLE_HEIGHT / 2);
            } catch (NumberFormatException | TimeoutException e) {
                p.deactivate("Eliminated!");
            }
        }

        moveBall();

        if (ballX < 0) {
            gameManager.getPlayer(0).deactivate();
        } else if (ballX >= WIDTH) {
            gameManager.getPlayer(1).deactivate();
        }

        if (gameManager.getActivePlayers().size() < 2) {
            gameManager.endGame();
        }
    }

    @Override
    public void onEnd() {
        for (AbstractPlayer p : gameManager.getPlayers()) {
            p.setScore(p.isActive() ? 1 : 0);
        }
    }
}
