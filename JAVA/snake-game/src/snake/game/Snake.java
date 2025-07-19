package snake.game;

import javax.swing.*;

public class Snake extends JFrame {
    
    Snake() {
        super("Snake Game");
        add(new Game());
        pack();
        
        setLocationRelativeTo(null);
        setResizable(false);
    }
    
    public static void main(String[] args) {
        new Snake().setVisible(true);
    }            
}
