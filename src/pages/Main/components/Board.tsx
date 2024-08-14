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
    const [isNext, setIsNext] = useState<boolean>(true)
    const [isGameEnd, setIsGameEnd] = useState<boolean>(false)
    const [scoreX, setScoreX] = useState<number>(0)
    const [scoreY, setScoreY] = useState<number>(0)

    const [info, setInfo] = useState(`Next - ${isNext ? 'x' : 'o'}`)

    const handleRestart = () =>{
        setIsGameEnd(false);
        setSquares(Array(9).fill(null));
        setIsNext(true)
    }


    const setSquareValue = (index: number) => {
        if(isGameEnd){
            return
        }
        let newSquares = squares.slice();
        newSquares[index] = (isNext) ? 'x' : 'o';
        setIsNext(!isNext)
        setSquares(newSquares);
        const winner = checkWinner(newSquares);
        console.log(winner);
        if (winner === 'x'){
            setInfo(`Winner - x`);
            setIsGameEnd(true)
            setScoreX((score: number) => score + 1)
        }else if(newSquares.every((item: string | null) => {
            return !!item
        })){
            setIsGameEnd(true)
            setInfo('Draw')
            setScoreX((score: number) => score + 1)
            setScoreY((score: number) => score + 1)
        }else{
            setInfo(`Next - ${!isNext ? 'x' : 'o'}`);
        }
        if(winner === 'o'){
            setInfo('Winner - o');
            setIsGameEnd(true)
            setScoreY((score: number) => score + 1)
        }
    }

    return (
        <div>
            <h1 className='info'>{info}</h1>
            <h2 className='info'>X: {scoreX}</h2>
            <h2 className='info'>O: {scoreY}</h2>
            <div className="board">
                {squares.map((square, i: number) => (
                    <Squares key={i} value={square} onSelect={() => setSquareValue(i)}/>
                ))}
            </div>
            {isGameEnd && <button className='restartBtn' onClick={handleRestart}>RESTART</button>}
        </div>
    )
        ;
};

export default Board;