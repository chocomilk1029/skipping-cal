import * as React from 'react';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

export const CreativitySlider = ( {value, setValue}: { value: number, setValue: ( value : number) => void } ) =>
{
    const initValue = 1.0;
    const [creativeness, setCreativeness] = React.useState( initValue );

    const handleSliderChange = ( event: Event, newValue: number | number[] ) =>
    {
        const newCreativeness = newValue as number;
        setCreativeness( newCreativeness );
        setValue( value / creativeness * newCreativeness );
    };

    const handleInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) =>
    {
        const targetValue = event.target.value === '' ? 0 : Number( event.target.value );
        setValue( value / creativeness * targetValue );
        setCreativeness( targetValue );
    };


    return (
        <>
            <Grid container spacing={ 2 } alignItems="center">
                <Grid item xs>
                    <Slider
                        defaultValue={ initValue }
                        min={ 0.0 }
                        max={ 2.8 }
                        step={ 0.01 }
                        value={ !isNaN(creativeness) ? creativeness : 0.0}
                        onChange={ handleSliderChange }
                        aria-labelledby="input-slider"
                    />
                </Grid>
                <Grid item>
                    <MuiInput
                        value={ creativeness }
                        onChange={ handleInputChange }
                        inputProps={ {
                            step: 0.1,
                            min: 0.0,
                            max: 2.8,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        } }
                    />
                </Grid>
            </Grid>
        </>
    );
}