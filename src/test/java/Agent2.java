import java.util.Scanner;

public class Agent2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            int y = scanner.nextInt();
            int oppY = scanner.nextInt();
            int ballX = scanner.nextInt();
            int ballY = scanner.nextInt();
            int speedX = scanner.nextInt();
            int speedY = scanner.nextInt();

            int targetY = (int) Math.round(ballY + speedY * 1);

            System.out.println(targetY);
        }
    }
}
