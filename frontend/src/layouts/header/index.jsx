import { useTheme } from '@mui/material/styles';
import { AppBar,  Toolbar, Typography} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { common } from '@mui/material/colors';

const Header = () => {
  const theme = useTheme();

  const mainHeader = (
    <Toolbar
    sx={{
      display: 'flex',
      justifyContent: 'center',
    }}
    >
    <RocketLaunchIcon sx={{ fontSize: 40, color: common.white }} />
    <Typography variant='h1' sx={{ml: 2}} color={common.white}>Space X</Typography>
    </Toolbar>
  );

  const appBar = {
    position: 'fixed',
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`
    }
  };

  return (
    <>
        <AppBar {...appBar}>{mainHeader}</AppBar>
    </>
  );
};

export default Header;