import {
    createMuiTheme,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#e6b3cc',
            main: '#cc6699',
            dark: '#993366',
            contrastText: '#fff',
        },
        secondary: {
            light: '#cce6ff',
            main: '#80bfff',
            dark: '#3366ff',
            contrastText: '#fff',
        },
    },
});

export default theme;
