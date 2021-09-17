import { Stack } from '@mui/material';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import * as MdIcons from 'react-icons/md'

const theme = createTheme({
  palette: {
    default: {
      main: '#E0E0E0',
      contrastText: '#3f3f3f',
    },
    secondary: {
      main: '#455A64'
    }
  }
})

const textStyle = {
  textTransform: 'none',
  fontFamily: 'Noto Sans',
  fontWeight: 'Bold'
}
const sxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  marginBottom: '50px'
}
function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>
      <ThemeProvider theme={theme}>
        <Stack direction='row' spacing={2} sx={sxStyle}>
          <Button variant="contained" color="default" style={textStyle}>Default</Button>
          <Button variant="outlined" style={textStyle}>Outlined</Button>
          <Button variant="text" style={textStyle}>Text</Button>
        </Stack>
        <Stack direction='row' spacing={2} sx={sxStyle}>
          <Button variant='contained' disableElevation='true' style={textStyle}>No shadow</Button>
          <Button variant='contained' disabled='true' style={textStyle}>Disabled</Button>
        </Stack>
        <Stack direction='row' spacing={2} sx={sxStyle}>
          <Button variant='contained' style={textStyle}><MdIcons.MdLocalGroceryStore className='startIcon'/>Start Icon</Button>
          <Button variant='contained' style={textStyle}>End Icon<MdIcons.MdLocalGroceryStore className='endIcon'/></Button>
        </Stack>
        <Stack direction='row' spacing={2} sx={sxStyle}>
          <Button variant='contained' style={textStyle} sx={{transform: 'scale(0.9)'}}>Small</Button>
          <Button variant='contained' style={textStyle} sx={{transform: "scale(1.0)"}}>Medium</Button>
          <Button variant='contained' style={textStyle} sx={{transform: "scale(1.1)"}}>Large</Button>
        </Stack>
        <Stack direction='row' spacing={2} sx={sxStyle}>
          <Button variant='contained' color='default' style={textStyle}>Default</Button>
          <Button variant='contained' color='primary' style={textStyle}>Primary</Button>
          <Button variant='contained' color='secondary' style={textStyle}>Secondary</Button>
          <Button variant='contained' color='error' style={textStyle}>Error</Button>
        </Stack>
      </ThemeProvider>
    </div>
  );
}

export default App;
