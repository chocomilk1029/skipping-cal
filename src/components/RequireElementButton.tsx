import React from "react";
import { Checkbox, FormControl, FormGroup } from "@mui/material";

// 2.5% of the total score
const elementFactor : number = 0.025


export const ElementCheckBox = ( {labelName, oriSum, setSum}: {
    labelName: string,
    oriSum: number,
    setSum: ( newVal: number ) => void
} ) =>
{
    const onBoxChange = ( event: React.ChangeEvent<HTMLInputElement> ) =>
    {
        if ( event.target.checked )
            setSum( oriSum + elementFactor);
        else
            setSum( oriSum - elementFactor );
    }
    
    return (
        <>
            <FormControl fullWidth={true}>
                <h2>{ labelName }</h2>
                <FormGroup row={true}>
                    <Checkbox defaultChecked onChange={onBoxChange} />
                    <Checkbox defaultChecked onChange={onBoxChange} />
                    <Checkbox defaultChecked onChange={onBoxChange} />
                    <Checkbox defaultChecked onChange={onBoxChange} />
                </FormGroup>
            </FormControl>
        </>
    )
}