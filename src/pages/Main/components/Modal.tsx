import React, {FC}from 'react';
import './Modal.css'

interface IModal{
    visible: boolean,
    setVisible: (visible: boolean) => void,
}

const Modal: FC<IModal> = ({visible, setVisible}) => {
    return (
        <div className={visible ? 'modal' : 'modal active'}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <p className="subtitle">Выберите игрока</p>
                <button className="chooseBtn" onClick={() => setVisible(true)}>Игрок 2</button>
                <button className="chooseBtn" onClick={() => setVisible(true)}>ИИ Бот</button>
            </div>
        </div>
    )
}

export default Modal;