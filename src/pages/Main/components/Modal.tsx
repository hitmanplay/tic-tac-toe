import React, {FC, useMemo}from 'react';
import './Modal.css'

interface IModal{
    visible: boolean,
    setVisible: (visible: boolean) => void,
}

const Modal: FC<IModal> = ({visible, setVisible}) => {
    const rootClasses = useMemo(() => {
        if(visible){
            return 'modal'
        }
        return 'modal.active'
    },[visible])
    return (
        <div className={rootClasses} onClick={() => setVisible(false)}>
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h1 className='subtitle'>Выберите Игрока</h1>
            <button className='chooseBtn' onClick={() => setVisible(true)}>Игрок</button>
            <button className='chooseBtn' onClick={() => setVisible(true)}>ИИ Бота</button>
            </div>
        </div>
    );
};

export default Modal;