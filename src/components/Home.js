import React from 'react';
import '../App.css';

function Home({ images }) {
    return(
        <div>
            {images.map((image) => 
                <img src={image} className="image" alt="signature" ></img>
            )}
        </div>
    )
}

export default Home