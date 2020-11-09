import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { Text } from '../_enums/text.enum'
import './Search.scss';
import SearchIcon from '@material-ui/icons/Search';
import Debounce from '../_services/Debounce'
import ApiService from '../_services/api.service'

//filterOptions moze byc niei potrzebne biorac pod uwage Autocomplete unsplash Api
const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: any) => option.query,
  });

export const Search = () => {
    const [ autocomplete, setAutocomplete ] = useState([]);
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');

  const debouncedQuery = Debounce(inputValue);

  useEffect(() => {
      if(debouncedQuery) {
        if(debouncedQuery.length > 2) {
            (async () => {
                const queryList:any = await ApiService.getAutocomplete(debouncedQuery);
                setAutocomplete(queryList.autocomplete)
                console.log(queryList)
            })()
            // .then((response: any) => {
            //     console.log(response.autocomplete)
            //     console.log(typeof response['autocomplete'])
            //     setAutocomplete(response.autocomplete)
            // })
        }
      } else {
          console.log('nvm')
          setAutocomplete([])
      }

  }, [debouncedQuery])

    // const inputHanler = (newInputValue: string) => {
    //     setInputValue(newInputValue)
    //     console.log(inputValue)
    //     // Najpierw debounce pozniej sprawdzanie lenghtu.
    //     // Debounce(newInputValue);
    //     // debounce(newInputValue);
    //     // if(newInputValue.length > 2) {
    //     //     console.log('at least 3, debounce that mofo')

    //     // }
    // }

    // const [search, setSearch, {signal, debouncing}] = useDebounce('')



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

    // getOptionLabel={(option: any) => {
    //     if(option.query)
    //         return option.query
    //     return ''
    // } }

    // getOptionLabel={(option) => option?.query}


    // freeSolo
    return (
        <div className="inputContainer">
            <Autocomplete
                fullWidth
                freeSolo
                options = { autocomplete }
                getOptionLabel={(option: any) => {
                    if(option.query)
                        return option.query
                    return ''
                } }

                onChange={(event, newValue: any) => {
                    console.log('TERAZ')
                    setValue(newValue)
                  }}
                value={ value }
                onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                getOptionSelected={(option, value) => option.query === value.query}
                filterOptions={filterOptions}
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


