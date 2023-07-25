import { Box, Button, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Search = ({onSearch}) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
      setSearchValue(event.target.value);
    };
  
    const handleSearchClick = () => {
      onSearch(searchValue);
    };

    return (
    <Box sx={{ width: '100%', mr: { xs: 'auto' }, my:5 }}>
        <FormControl sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', width: '100%' }}>
            <OutlinedInput
                size="small"
                id="header-search"
                value={searchValue}
                onChange={handleSearchChange}
                startAdornment={
                <InputAdornment position="start" sx={{ mr: 1 }}>
                    <SearchIcon />
                </InputAdornment>
                }
                aria-describedby="header-search-text"
                inputProps={{
                'aria-label': 'weight'
                }}
            />
                <Box sx={{ml:2 }}>
                    <Button  onClick={handleSearchClick}>Buscar</Button>
                </Box>
            </Box>
        </FormControl>
    </Box>
    )
}

export default Search;