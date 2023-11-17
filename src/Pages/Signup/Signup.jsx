import React from 'react'
import "./signup.css"
import signupicon from '../../Icons/icons8-facebook-67.png'
import Instagramlogo from "../../Icons/Instagram-Logo-2010-2013.png"
import { Link } from 'react-router-dom';
export default function Signup() {
  return (
    <div className='mainSignupPage'>
      <div style={{ marginTop: "4%" }}>
        <div className='signupright'>
          <img src={Instagramlogo} className='logo' alt="" />
          <p style={{fontWeight:600 ,textAlign:"center", fontSize:18 , marginTop:0 , marginLeft:10 , color:"#737373"}}>Sign up to see photos and videos from your friends.</p>

          <button style={{display:"flex" ,  cursor:"pointer"  , alignItems:"center" , backgroundColor:"#4cb5f9" , margin:'auto' , border:'none' ,   paddingLeft:70 , paddingRight:70 , color:"white" ,  borderRadius:10 }}>
            <img src={signupicon} style={{width:20 , height:20 , padding:7}} alt="" />
            Log in with  Facebook
          </button>

          <div style={{ display: "flex" }}>
            <hr style={{ height: 0.01, width: 120, marginTop: 26 }} />
            <p style={{ color: "#7c7580" }}>OR</p>
            <hr style={{ height: 0.01, width: 120, marginTop: 26 }} />
          </div>

          <div style={{ marginLeft: 20 }}>
            <input type="text" placeholder='Mobile number, email' className='inputforinstagramloginpage' />
            <input type="text" placeholder='Full Name' className='inputforinstagramloginpage' />
            <input type="text" placeholder='Username' className='inputforinstagramloginpage' />
            <input type="password" placeholder='Password' className='inputforinstagramloginpage' />
          </div>
          <p style={{width:"80%", color:"#A8A8A8" , fontSize:11 , marginLeft:27 , textAlign:'center' }}>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
          <p style={{width:"70%", color:"#A8A8A8" , fontSize:11 , marginLeft:42 , textAlign:'center' }}>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
          <button className='instagramloginBtn'>Sign up</button>
          
          
        </div>
        
        
    
      </div>
        
    </div>
  )
}
