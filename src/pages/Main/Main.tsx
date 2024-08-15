import React, {useState} from 'react';
import './Main.css'
import Game from "@pages/Main/components/Game";
import Modal from "@pages/Main/components/Modal";


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