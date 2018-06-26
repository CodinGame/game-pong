import java.util.Scanner;

public class Agent1 {
    private static final int WIDTH = 1920;
    private static final int HEIGHT = 1080;
    private static final int BALL_RADIUS = 20;
    private static final int PADDLE_WIDTH = 15;
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            int y = scanner.nextInt();
            int oppY = scanner.nextInt();
            int ballX = scanner.nextInt();
            int ballY = scanner.nextInt();
            int speedX = scanner.nextInt();
            int speedY = scanner.nextInt();
            
            double t;
            
            if (speedX > 0) {
                t = (WIDTH - ballX - BALL_RADIUS - PADDLE_WIDTH) / (double) speedX;
            } else if (speedX < 0) {
                t = (BALL_RADIUS + PADDLE_WIDTH - ballX) / (double) speedX;
            } else {
                System.out.println(ballY);
                continue;
            }
            
            int targetY = (int) Math.round(ballY + speedY * t);
            
            if (targetY > HEIGHT - BALL_RADIUS) {
                targetY = HEIGHT - BALL_RADIUS - (targetY - HEIGHT - BALL_RADIUS);
            }
            if (targetY < BALL_RADIUS) {
                targetY = BALL_RADIUS + (BALL_RADIUS - targetY);
            }
            
            System.err.println(t);
            System.out.println(targetY);
        }
    }
}


    
    
    