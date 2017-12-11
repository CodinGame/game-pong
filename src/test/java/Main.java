import java.net.URISyntaxException;
import java.util.Properties;

import com.codingame.gameengine.runner.GameRunner;

public class Main {
    public static void main(String[] args) throws URISyntaxException {
        Properties properties = new Properties();
        properties.setProperty("seed", "42");
        
        GameRunner gameRunner = new GameRunner(properties);
        gameRunner.addJavaPlayer(Player1.class);
        gameRunner.addJavaPlayer(Player2.class);

        // gameRunner.addCommandLinePlayer("python3 /home/user/player.py");
        
        gameRunner.start();
    }
}
