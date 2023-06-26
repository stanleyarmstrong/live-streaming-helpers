import {Dispatch, SetStateAction, useState, MouseEvent} from 'react';

const Record = () => {
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [allowDraws, setAllowDraws] = useState(true);
    const [draws, setDraws] = useState(0);
    const addWins = (e: MouseEvent<HTMLButtonElement>) => {
        setWins(wins + 1);
        e.preventDefault();
    }
    const addLosses = (e: MouseEvent<HTMLButtonElement>) => {
        setLosses(losses + 1);
        e.preventDefault();
    }
    const addDraw = (e: MouseEvent<HTMLButtonElement>) => {
        setDraws(draws + 1);
        e.preventDefault();
    }

    return (
        <div>
            <h1>
                Current Record: {wins} - {losses} {allowDraws ? (' - '.concat(draws.toString())): ''}
            </h1>
            <div>
                <button onClick={addWins}>
                    Add Win
                </button>
                <button onClick={addLosses}>
                    Add Loss
                </button>
                {
                    allowDraws ?
                    <button onClick={addDraw}> Add Draw </button>
                    : <div></div>
                }
            </div>
            
                   
        </div>
    )

}

export default Record;