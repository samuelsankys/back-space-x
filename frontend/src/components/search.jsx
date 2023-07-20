import { Box, Button, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => (
  <Box sx={{ width: '100%', ml: { xs: 0 }, my:5 }}>
    <FormControl sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', width: '100%' }}>
        <OutlinedInput
            size="small"
            id="header-search"
            startAdornment={
            <InputAdornment position="start" sx={{ mr: -0.5 }}>
                <SearchIcon />
            </InputAdornment>
            }
            aria-describedby="header-search-text"
            inputProps={{
            'aria-label': 'weight'
            }}
        />
            <Box sx={{ml:2 }}>
                <Button>Buscar</Button>
            </Box>
        </Box>
    </FormControl>
  </Box>
);

export default Search;