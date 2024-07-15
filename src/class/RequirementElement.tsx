import React from "react";
import { ElementCheckBox } from "../components/RequireElementButton.tsx";
import Grid from "@mui/material/Grid";

export const RequirementElement = ( {totalScore, setScore}: {
    totalScore: number,
    setScore: ( newVal: number ) => void
} ) =>
{
    return (
        <Grid container alignItems={"center"} justifyContent="center">
            <Grid className="grid-container" item style={{width :"100%"}}>
                <ElementCheckBox labelName="Multiples" oriSum={ totalScore } setSum={ setScore }/>
                <ElementCheckBox labelName="Gymnastics / Power" oriSum={ totalScore } setSum={ setScore }/>
                <ElementCheckBox labelName="Wraps / Releases" oriSum={ totalScore } setSum={ setScore }/>
            </Grid>
        </Grid>
    )
}
