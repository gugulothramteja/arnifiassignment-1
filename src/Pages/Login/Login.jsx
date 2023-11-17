import React from 'react'
import "./login.css"
import saveone from "../../Images/saveone.png";
import Facebookicon from "../../Icons/pngegg.png"
import Instagramlogo from "../../Icons/Instagram-Logo-2010-2013.png"
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className='mainLoginPage'>
        <div className='left'>
          <img style={{position:"relative" , top:"25px" , left:"156px" }} src={saveone} alt="" />
        </div>
      <div style={{ marginTop: "4%" }}>
        <div className='right'>
          <img src={Instagramlogo} className='logo' alt="" />
          <div style={{ marginLeft: 20 }}>
            <input type="text" placeholder='Phone number, email, username' className='inputforinstagramloginpage' />
            <input type="password" placeholder='Password' className='inputforinstagramloginpage' />
          </div>
          <button className='instagramloginBtn'>Login</button>
          <div style={{ display: "flex" }}>
            <hr style={{ height: 0.01, width: 120, marginTop: 26 }} />
            <p style={{ color: "#7c7580" }}>OR</p>
            <hr style={{ height: 0.01, width: 120, marginTop: 26 }} />
          </div>
          <div style={{ display: 'flex', alignItems: "center", marginLeft: 100, cursor: "pointer" }}>
            <img src={Facebookicon} className='logoface' alt="" />
            <p style={{ fontWeight: 600, color: "#385185" }}>Log in with Facebook</p>
          </div>
          <div>
            <p style={{ color: "#00376B", fontSize: 12, cursor: "pointer", marginLeft: 125, marginTop: -10 }}>Forgot Password?</p>
          </div>
        </div>

        <div className='right2thpart'>
          <p style={{color:"black" , marginLeft:60}}>Don't have an account?</p>
          <Link>
            <p style={{color:"#00376B" , fontWeight:600 , marginLeft:0}}>Sign up</p>
          </Link>
        </div>
        <p style={{color:"black" , marginLeft:160}}>Get the app.</p>
        <div style={{display:"flex", alignContent:"center" , marginLeft:"80px"}}>
          <img style={{width:140 , height:40}} src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" />
          <img style={{width:120 , height:40, paddingLeft:10}} src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" />
        </div>
      </div>
        
    </div>
  )
}
