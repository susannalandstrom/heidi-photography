import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './MuiTheme'
import { getImages } from './service/imageHandler';

function App() {
  const [selectedTab, setSelectedTab] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    setSelectedTab('Etusivu');
    const images = getImages()
    setImages(images)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar className="header" selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        {selectedTab === 'Etusivu' && <Home className="content" images={images}/>}
        <Footer className="footer"/>
      </div>
    </ThemeProvider>
  );
}

export default App;
