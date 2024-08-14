import React, {useState} from 'react';
import './Main.css'
import Modal from "@pages/Main/components/Modal";
import Game from "@pages/Main/components/Game";

const Main = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Game />
            <Modal visible={visible} setVisible={setVisible}/>
        </div>
    );
};

export default Main;