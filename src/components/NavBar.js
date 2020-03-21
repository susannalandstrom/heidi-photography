import React from 'react';
import Link from '@material-ui/core/Link';
import signature from '../signature.png';
import '../App.css';

const tabs = ['Etusivu', 'Luonto', 'Matkalla', 'Henkilökuvat', 'Info']

function NavBar({selectedTab, setSelectedTab}) {
    return(
        <div>
            <img src={signature} className="App-logo" alt="signature" ></img>
            <div className="navigation">{tabs.map((tab) => 
                <Link key={tab} className="navigationTab" style={tab === selectedTab ? {color: '#6c6c6c'} : {color: '#b7b7b7'}} onClick={() => setSelectedTab(tab)}>{tab}</Link>
            )}
            </div>
        </div>
    )
}

export default NavBar