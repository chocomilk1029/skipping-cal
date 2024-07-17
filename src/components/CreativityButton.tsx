import * as React from 'react';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import { ButtonGroup, IconButton } from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline, CheckCircleOutline } from "@mui/icons-material";

export const CreativitySlider = ( {value, setValue}: { value: number, setValue: ( value: number ) => void } ) =>
{
    const initValue = 1.0;
    const [creativeness, setCreativeness] = React.useState( initValue );

    const handleSliderChange = ( event: Event, newValue: number | number[] ) =>
    {
        const newCreativeness = newValue as number;
        setCreativeness( newCreativeness );
        setValue( value / creativeness * newCreativeness );
    };

    return (
        <>
            <Grid container spacing={ 2 } alignItems="center" className="grid-container">
                <Grid item xs>
                    <Slider
                        defaultValue={ initValue }
                        min={ 0.0 }
                        max={ 2.8 }
                        step={ 0.01 }
                        value={ !isNaN( value ) ? value : 0.0 }
                        onChange={ handleSliderChange }
                        aria-labelledby="input-slider"
                        disabled={ true }
                    />
                </Grid>
                <Grid item>
                    <h2>{ value.toFixed(3) }</h2>
                </Grid>
            </Grid>

            <div className="grid-container">
                <span>
                    <h2>Form and Execution</h2>
                    <CreativityButton factor={ 0.5 * 0.6 } value={ value } setValue={ setValue }/>
                </span>
                <span>
                    <h2>Entertainment</h2>
                    <CreativityButton factor={ 0.25 * 0.6 } value={ value } setValue={ setValue }/>
                </span>
                <span>
                    <h2>Musicality</h2>
                    <CreativityButton factor={ 0.25 * 0.6 } value={ value } setValue={ setValue }/>
                </span>
            </div>
        </>
    );
}

export const CreativityButton = ( {factor, value, setValue}: {
    factor: number,
    value: number,
    setValue: ( value: number ) => void
} ) =>
{
    const [add, setAdd] = React.useState( 0 );
    const [normal, setNormal] = React.useState( 0 );
    const [minus, setMinus] = React.useState( 0 );

    const totalCount = add + normal + minus;
    const totalValue = add * 3 + minus * -3;

    return (
        <>
            <ButtonGroup>
                <IconButton color="primary" size="large" onClick={ ( event ) =>
                {
                    const oldValue: number = totalValue / (totalCount === 0 ? 1 : totalCount);
                    const newValue: number = (totalValue + 3) / (totalCount === 0 ? 1 : totalCount + 1);
                    setValue( value - (oldValue - newValue) * factor );
                    setAdd( add + 1 );
                } }>
                    <AddCircleOutline fontSize="inherit"/>
                </IconButton>
                <h3> { add } </h3>
                <IconButton color="primary" size="large" onClick={ ( event ) =>
                {
                    const oldValue: number = totalValue / (totalCount === 0 ? 1 : totalCount);
                    const newValue: number = totalValue / (totalCount === 0 ? 1 : totalCount + 1);
                    setValue( value - (oldValue - newValue) * factor );
                    setNormal( normal + 1 );
                } }>
                    <CheckCircleOutline fontSize="inherit"/>
                </IconButton>
                <h3> { normal } </h3>
                <IconButton color="primary" size="large" onClick={ ( event ) =>
                {
                    const oldValue: number = totalValue / (totalCount === 0 ? 1 : totalCount);
                    const newValue: number = (totalValue - 3) / (totalCount === 0 ? 1 : totalCount + 1);
                    setValue( value - (oldValue - newValue) * factor );
                    setMinus( minus + 1 );
                } }>
                    <RemoveCircleOutline fontSize="inherit"/>
                </IconButton>
                <h3> { minus } </h3>
            </ButtonGroup>
        </>
    );
}