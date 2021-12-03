import React from 'react'
import banner from '../../assets/banner.png';

import Paper from '@mui/material/Paper';

import {Banner} from '../../components';

import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <Banner/>
            </div>
        </div>
    )
}

export default Header
