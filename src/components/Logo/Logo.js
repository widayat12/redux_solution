import React from 'react';

import MyLogo from '../../assets/images/logo-w.png';
import './Logo.css'

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={MyLogo} alt="myLogobgr"/>
    </div>
);

export default logo;