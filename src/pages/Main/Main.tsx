import React, {useState} from 'react';
import './Main.css'
import Game from "@pages/Main/components/Game";
import Modal from './components/Modal';

const Main = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Modal visible={visible} setVisible={setVisible}/>
            <Game />
        </div>
    );
};

export default Main;