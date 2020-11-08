import React, { useState } from 'react'
import Input  from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { Text } from '../_enums/text.enum'
import './Search.scss';
import SearchIcon from '@material-ui/icons/Search';
import { IResponse } from '../_models/IResponse.interface'

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: any) => option.title,
  });

const filler: any = [
    {title: 'one'},
    {title: 'two'}
]


export const Search = () => {

    const [ state, setState ] = useState([
            {title: 'one'},
            {title: 'two'}
        ]);
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    // const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValues({ ...values, [prop]: event.target.value });
    //   };

    // inputValue = { state.selected }
    // onChange = { (e) => setValue(e.target.value) }

    // onChange={(event, newValue) => {
    //     setValue(newValue);
    //   }}
    //   inputValue={inputValue}
    // getOptionLabel={(option) => option.title}
    
    // freeSolo
    return (
        <div className="inputContainer">
            <Autocomplete 
                fullWidth
                freeSolo
                options = { state }
                getOptionLabel={(option: any) => {
                    if(option.title) 
                        return option.title
                    return ''
                } }
                filterOptions={filterOptions} 
                onChange={(event, newValue) => {
                    setValue(newValue)
                    console.log(value)
                  }}
                value={ value }
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue)
                    console.log(inputValue)
                  }}
                
                getOptionSelected={(option, value) => option.title === value.title}
                renderInput={(params) => 
                <TextField 
                    {...params}
                    placeholder= { Text.Input }
                    variant="outlined" 
                    margin="normal"
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <React.Fragment>
                                <SearchIcon />
                            </React.Fragment>
                          ),
                      }}

                />
               
                }
            />
            
        </div>
    )
}

// onChange : (e) => setValue(e.target.value) ,


// options={filler.map((option: any) => option.title)}

// style={{ width: 300 }}
// renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}


// <Autocomplete 
// options={ filler } 
// getOptionLabel={(option) => option.title}
// filterOptions={filterOptions} 
// fullWidth
// renderInput={(params) =>
//      <Input 
//      {...params}
//     placeholder = { Text.Input }
//       />
//     }
// />


