import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";

export const calMarks = ( level: number ) : number=>
{
    return ( 0.1 * Math.pow( 1.5, level ) )
}

const AddBtn = ( {level, oriSum, setSum, oriCount, setCount}: {
    level: number,
    oriSum: number,
    setSum( newVal: number ): void,
    oriCount: number,
    setCount( newVal: number ): void
} ) =>
{
    let newVal = oriSum + calMarks( level );

    const onClick = () =>
    {
        setSum( newVal );
        setCount( oriCount + 1 );
    }
    
    return (
        <Button id="+" onClick={ onClick }>+</Button>
    )
}

const MinusBtn = ( {level, oriSum, setSum, oriCount, setCount}: {
    level: number,
    oriSum: number,
    setSum( newVal: number ): void,
    oriCount: number,
    setCount( newVal: number ): void
} ) =>
{
    let newVal = oriSum - calMarks( level ) >= 0 ? oriSum - calMarks( level ) : 0 ;
    // if ( oriCount <= 0 )
    //     newVal = oriSum;
    //
    // setCount( oriCount - 1 )

    const onClick = () =>
    {
        let newCount = oriCount - 1;
        if ( oriCount <= 0 )
        {
            newVal = oriSum;
            newCount  = oriCount;
        }

        setSum( newVal );
        setCount( newCount );
    }
    
    return (
        <Button id="-" onClick={ onClick }>-</Button>
    )
}

export const DiffBtn = ( {levelSet, oriSum, setSum}: {
    levelSet: number,
    oriSum: number,
    setSum: ( newVal: number ) => void
} ) =>
{
    const [count, setCount] = useState<number>( 0 );
    const level = levelSet + 1;
    return (
        <>
            <h3>Level { level } - { count }</h3>
            <ButtonGroup variant="contained">
                <AddBtn level={ level } oriSum={ oriSum } setSum={ setSum } oriCount={ count } setCount={ setCount }/>
                <MinusBtn level={ level } oriSum={ oriSum } setSum={ setSum } oriCount={ count } setCount={ setCount }/>
            </ButtonGroup>
        </>
    )
}

