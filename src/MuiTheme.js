import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {main: '#585858'},
      secondary: {main: '#989898'},
    },
    status: {
      danger: {main: '#dd4c11'},
    },
    overrides: {
        MuiLink: {
            root: {
                textTransform: 'uppercase',
                paddingRight: '50px',
                cursor: 'pointer',
                letterSpacing: '4px'
            }
        }
    }
    
  });

export default theme