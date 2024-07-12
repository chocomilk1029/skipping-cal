import React, { useState } from 'react'
import './App.css'
import { Difficulty } from "./class/Difficulty.tsx";
import { CreativitySlider, InputSlider } from "./components/CreativityButton.tsx";

function App()
{
    // The follow code should contain 5 parts
    // 1. DifficultyButton level buttons
    // 2. Creativity marks setting
    // 3. Require element check box
    // 4. Submit button
    // 5. Total score display

    // Here will establish the data storage first
    const [totalScore, setTotalScore] = useState<number>( 0 );
    // loop through the list and create the difficulty list

    return (
        <>
            <h1> Total Score: { totalScore.toFixed( 3 ) }</h1>
            <div key={ 'difficulty' }>
                <Difficulty totalScore={ totalScore } setTotalScore={ setTotalScore }/>
            </div>
            <div key="creativity">
                <InputSlider></InputSlider>
                <CreativitySlider value={ totalScore } setValue={ setTotalScore } />
            </div>
        </>
    )


}

export default App
