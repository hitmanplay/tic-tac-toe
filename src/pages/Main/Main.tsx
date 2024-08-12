import React from 'react';
import './Main.css'
import Modal from "@pages/Main/components/Modal";
import Game from "@pages/Main/components/Game";

const Main = () => {
    return (
        <div>
            <Modal />
            <Game />
        </div>
    );
};

export default Main;