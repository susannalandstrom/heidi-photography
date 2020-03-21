import React from 'react';
import '../App.css';

function Home({ images }) {
    return(
        <div>
            {images.map((image) => 
                <img src={image} className="App-logo" alt="signature" ></img>
            )}
        </div>
    )
}

export default Home