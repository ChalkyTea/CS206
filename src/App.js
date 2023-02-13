import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';
import {Route, Link} from 'react-router-dom'
import { BrowserRouter as Router, Routes } from 'react-router-dom';



import Home from './Home';
import ProgramInfo from './pages/ProgramInfo';
// import {Route, Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {},
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#FFF',
      },
    },
  });

  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      </ThemeProvider>
      {/* <ProgramInfo />
      <Route exact path = " /" component = {Home} /> */}
      {/* <Route exact path = " /ProgramInfo" component = {ProgramInfo} /> */}
    </div>
  );
}

export default App;
