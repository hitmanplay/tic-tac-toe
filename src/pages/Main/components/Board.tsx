import React, { useState } from 'react';
import Squares from "@pages/Main/components/Squares";
import './Board.css'



const checkWinner = (squares: string | null[]) => {
    const winComb = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i = 1; i < winComb.length; i++) {
        let [a, b ,c] = winComb[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null
}

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isNext, setIsNext] = useState(true)

    const [info, setInfo] = useState(`Next - ${isNext ? 'x' : 'o'}`)




    const setSquareValue = (index: number) => {
        let newSquares = squares.slice();
        newSquares[index] = (isNext) ? 'x' : 'o';
        setIsNext(!isNext)
        setSquares(newSquares);
        const winner = checkWinner(newSquares);
        console.log(winner);
        if (winner){
            setInfo(`Winner - ${winner}`);
        }
    }

    return (
        <div>
            <h1 className='info'>{info}</h1>
            <div className="board">
                {squares.map((square, i: number) => (
                    <Squares key={i} value={square} onSelect={() => setSquareValue(i)}/>
                ))}
            </div>
        </div>
    )
        ;
};

export default Board;