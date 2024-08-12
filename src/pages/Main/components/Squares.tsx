import React, {FC, PropsWithChildren} from 'react';
import './Squares.css'

type Props = {
    value: string,
    onSelect: (value: string) => void,
}

const Squares: FC<Props> = ({value, onSelect}) => {
    const handleSelect = () => {
        if (!value){
            onSelect(value);
        }
    }
    return (
        <div>
            <button className="squares" onClick={handleSelect}>{value}</button>
        </div>
    );
};

export default Squares;