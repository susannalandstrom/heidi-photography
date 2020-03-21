import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './MuiTheme'

function App() {
  const [selectedTab, setSelectedTab] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    setSelectedTab('Etusivu');
    setImages(importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/)));
  }, []);

  function importAll(r) {
    return r.keys().map(r);
  }
  
  // const testImages = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  // console.log(testImages)

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar className="header" selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        {selectedTab === 'Etusivu' && <Home className="content" images={images}/>}
      </div>
    </ThemeProvider>
  );
}

export default App;
