import React from 'react'
import './footer.css'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icons">
                <a href='#'><WhatsAppIcon fontSize="large" className='icons'/></a>
                <a href='#'><InstagramIcon fontSize="large"  className='icons'/></a>
                <a href='#'><FacebookIcon fontSize="large"  className='icons'/></a>
            </div>

            <div className="footer-info">
                <h5>©</h5>
            </div>

            <p>Desarrollado por @patr.wan</p>
        </div>
    )
}

export default Footer
