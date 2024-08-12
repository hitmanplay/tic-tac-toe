import React from 'react';
import Squares from "@pages/Main/components/Squares";
import './Board.css'

const Board = () => {
    return (
        <div className="board">
            <Squares />
            <Squares />
            <Squares />
            <Squares />
            <Squares />
            <Squares />
            <Squares />
            <Squares />
            <Squares />
        </div>
    );
};

export default Board;