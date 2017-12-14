package com.codingame.game;

import com.codingame.gameengine.core.AbstractPlayer;
import com.codingame.gameengine.module.entities.Line;

public class Player extends AbstractPlayer {
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
