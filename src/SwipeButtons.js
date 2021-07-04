import React from 'react';
import './SwipeButtons.css';

import { Replay as ReplayIcon, Close, StarRate, Favorite, FlashOn } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat">
                <ReplayIcon fontsize="large" />
            </IconButton>
            <IconButton className="swipeButtons_left">
                <Close fontsize="large" />
            </IconButton>
            <IconButton className="swipeButtons_star">
                <StarRate fontsize="large" />
            </IconButton>
            <IconButton className="swipeButtons_right">
                <Favorite fontsize="large" />
            </IconButton>
            <IconButton className="swipeButtons_lightning">
                <FlashOn fontsize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons;
