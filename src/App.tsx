import React, { useState } from 'react'
import './App.css'
import { Difficulty } from "./class/Difficulty.tsx";
import { CreativitySlider } from "./components/CreativityButton.tsx";

function App()
{
    // The follow code should contain 5 parts
    // 1. DifficultyButton level buttons
    // 2. Creativity marks setting
    // 3. Require element check box
    // 4. Submit button
    // 5. Total score display

    // Here will establish the data storage first
    const [difficulty, setDifficulty] = useState<number>( 0 );
    const [creativity, setCreativity] = useState<number>( 1 );
    const [requireElement, setRequireElement] = useState<number>( 0 );

    // loop through the list and create the difficulty list

    return (
        <>
            <h1> Total Score: { (difficulty * creativity).toFixed( 3 ) }</h1>
            <h2> D: { difficulty.toFixed( 3 ) }</h2>
            <h2> P: { creativity.toFixed( 3 ) }</h2>


            <div key={ 'difficulty' }>
                <Difficulty totalScore={ difficulty } setTotalScore={ setDifficulty }/>
            </div>
            <div key="creativity">
                <CreativitySlider value={ creativity } setValue={ setCreativity }/>
            </div>
        </>
    )


}

export default App
