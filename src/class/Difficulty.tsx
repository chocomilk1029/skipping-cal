import { DiffBtn } from "../components/DifficultyButton.tsx";
import React from "react";

export const Difficulty = ( {totalScore, setTotalScore}: {
    totalScore: number,
    setTotalScore: ( newVal: number ) => void
} ) =>
{
    const levelLimit = 8;

    const levelList: number[] = Array.from(
        {length: levelLimit},
        ( _, i ) => i
    );

    let levelBtns = levelList.map( ( diffLevel, index ) =>
        {
            return (
                <span key={ diffLevel + 1 }>
                    <DiffBtn levelSet={ diffLevel } oriSum={ totalScore } setSum={ setTotalScore }/>
                </span>
            )
        }
    );

    return (
        <div className="grid-container">
            <span key={ -0.5 }>
                <DiffBtn levelSet={ -0.5 } oriSum={ totalScore } setSum={ setTotalScore }/>
            </span>
            { levelBtns }
        </div>
    )
}

