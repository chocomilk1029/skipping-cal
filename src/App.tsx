import React, { useState } from 'react'
import './App.css'
import { Difficulty } from "./class/Difficulty.tsx";
import { CreativitySlider } from "./components/CreativityButton.tsx";
import { RequirementElement } from "./class/RequirementElement.tsx";
import { Divider } from "@mui/material";

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
    const [requireElement, setRequireElement] = useState<number>( 1 );

    // loop through the list and create the difficulty list

    return (
        <>
            <h2> Result(R) = Difficulty(D) x Presentation(P) x Deduction(M) x Required elements(Q) </h2>
            <h2> Result = { difficulty.toFixed( 3 ) } x { creativity.toFixed( 3 ) } x 1.000
                x { requireElement.toFixed( 3 ) } </h2>
            <h2> Total Score = { (difficulty * creativity * requireElement).toFixed( 3 ) } </h2>
            <Divider>
                <h2>Difficulty</h2>
            </Divider>
            <div key="difficulty">
                <Difficulty totalScore={ difficulty } setTotalScore={ setDifficulty }/>
            </div>
            <Divider>
                <h2>Presentation</h2>
            </Divider> 
            <div key="creativity">
                <CreativitySlider value={ creativity } setValue={ setCreativity }/>
            </div>
            <Divider>
                <h2>Required Element</h2>
            </Divider>
            <div key="requireElement">
                <RequirementElement totalScore={ requireElement } setScore={ setRequireElement }/>
            </div>
        </>
    )


}

export default App
