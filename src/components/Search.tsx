import React from 'react'
import Input  from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { Text } from '../_enums/text.enum'
import InputAdornment from '@material-ui/core/InputAdornment';
import './Search.scss';
import SearchIcon from '@material-ui/icons/Search';

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: any) => option.title,
  });

const filler:any = [
    {title: 'one'},
    {title: 'two'}
]


export const Search = () => {

    // const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValues({ ...values, [prop]: event.target.value });
    //   };

    return (
        <div className="inputContainer">
            <Autocomplete 
                freeSolo
                options = { filler }
                getOptionLabel={(option) => option.title}
                filterOptions={filterOptions} 
                fullWidth
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


