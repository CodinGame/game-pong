import java.util.Properties;

import com.codingame.gameengine.runner.MultiplayerGameRunner;

public class Main {
    public static void main(String[] args) {
        Properties properties = new Properties();
        properties.setProperty("seed", "42");
        
        MultiplayerGameRunner gameRunner = new MultiplayerGameRunner();
        gameRunner.setGameParameters(properties);
        
        gameRunner.addAgent(Player1.class);
        gameRunner.addAgent(Player2.class);

        // gameRunner.addAgent("python3 /home/user/player.py");
        
        gameRunner.start();
    }
}
