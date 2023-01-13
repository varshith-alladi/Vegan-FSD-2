import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/aboutus.modules.css';

function FooterAboutUs() {
  return (
    <div className='footer' style={{backgroundColor:'rgb(220 185 185)',display:'flex',justifyContent:'space-evenly',padding:20,marginTop:20}}>
           {/* <h5 align="center" style={{padding:0,margin:0}}> Social</h5> */}
           <a href='https://monkeytype.com/'>
           <FacebookIcon />

           </a>
           <a href='https://www.instagram.com/'>
        <InstagramIcon />
            
            </a>
            <a href='https://twitter.com/'>
        <TwitterIcon />
            
            </a>
            <a href='https://www.whatsapp.com/'>
        <WhatsAppIcon />
            
            </a>
            <a href='https://www.linkedin.com/'>
        <LinkedInIcon />
            
            </a>

    </div>
  )
}

export default FooterAboutUs;
