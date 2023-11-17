import React, { useState } from 'react'
import love from "../../Icons/Notifications2.png"
import comment from "../../Icons/Comment.png"
import Likeicon from "../../Icons/Notifications.png"
import unlike from "../../Icons/Unlike.png"
import "../../Pages/Explore/explore.css"
import Moreoptions from '../../Icons/Moreoptions.png'
import Shareicon from "../../Icons/SharePost.png"
import Saveicon from "../../Icons/Save.png"
import Emoji from "../../Icons/Emoji.png"
import Modal from 'react-modal';
export default function Explorepost(item) {
  console.log(item)
  const [modalIsOpen ,setmodalIsOpen] = useState(false);
    const [Like , SetLike] = useState(Likeicon);
    const handleShowmodal = ()=>{
        setmodalIsOpen(true);
    }

    const handleLike = ()=>{
        if(Like == Likeicon){
            SetLike(unlike);
        }else{
            SetLike(Likeicon);
        }
    }
  return (
    <div className="container" onClick={handleShowmodal}>
      <div className="imagefor">
        <img src={item?.item?.postimage} className='imageforimage' alt="" />
        <div className="text">
          <div style={{display:"flex" , alignItems:'center' , marginLeft:"10px" }}>
            <img src={love} className='logoforexplorepost' alt="" />
            <p style={{marginLeft:5}}>{item?.item?.likes}</p>
          </div>
          <div style={{display:"flex" , alignItems:'center' , marginLeft:"10px"  }}>
            <img src={comment} className='logoforexplorepost' alt="" />
            <p style={{marginLeft:5}}>{item?.item?.comments}</p>
          </div>
        </div>
      </div>
      <Modal
             style={{overlay:{backgroundColor:"#2e2b2bc7"}}}
             isOpen = {modalIsOpen}
             onRequestClose={()=>setmodalIsOpen(false)}
             className={"modalclassNameforAPost"}
             >
                <div style={{display:"flex"}}>
                <div style={{flex:1.3}} >
                    <img style={{width:"100%" , height:"90vh" , objectFit:"cover"}} src={item?.item?.postimage}  alt="" />
                </div>
                <div style={{flex:1 , height:"90vh"}}>
                    <div >
                        <div style={{display:"flex" , alignItems:"center" , paddingLeft:10 , justifyContent:"space-between"}}>
                            <div style={{display:"flex" , alignItems:"center" , paddingLeft:10}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVIYDt6bSnhK21l1e1eGY0FnEBcTkTYeyEgEL53gv&s" style={{ width: "30px", height: "30px", borderRadius: "50%", objectFit: "cover" }} alt="" />
                            <div style={{paddingLeft:10}}>
                                <p style={{marginBottom:16}}>Ramteja</p>
                                <p  style={{marginTop:-17  , fontSize:12}}>Dubai</p>
                            </div>
                            </div>
                            <div>
                                <img src={Moreoptions} alt="" />
                            </div>
                        </div>

                        <div className='scrollable-div'>
                            <div style={{display:'flex'  , marginLeft:30}}>
                               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVIYDt6bSnhK21l1e1eGY0FnEBcTkTYeyEgEL53gv&s" style={{ width: 30, height: 30 , borderRadius: "50%", objectFit: "cover" , marginTop:20 }} alt="" />
                               <div style={{marginLeft:20}}>
                                 <p>Ramteja</p>
                                 <p style={{marginTop:-15}}> hello world .</p>
                                 <p style={{color:"#A8A8A8" ,  marginTop:-10}}>1d</p>
                               </div>
                            </div>

                            <div style={{display:'flex' , marginLeft:30}}>
                               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVIYDt6bSnhK21l1e1eGY0FnEBcTkTYeyEgEL53gv&s" style={{ width: 30, height: 30 , borderRadius: "50%", objectFit: "cover" , marginTop:20 }} alt="" />
                               <div style={{marginLeft:20}}>
                                 <p>Ramteja</p>
                                 <p style={{marginTop:-15}}>Expertly Guiding You Through Company Formation,
Visa Procurement, Seamless Accounting, and
Strategic Banking Solutions, All With Unparalleled
Transparency and Cost-Effectiveness.</p>
                                 <p style={{color:"#A8A8A8" ,  marginTop:-10}}>1d</p>
                               </div>
                            </div>

                            <div style={{display:'flex'  , marginLeft:30}}>
                               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVIYDt6bSnhK21l1e1eGY0FnEBcTkTYeyEgEL53gv&s" style={{ width: 30, height: 30 , borderRadius: "50%", objectFit: "cover" , marginTop:20 }} alt="" />
                               <div style={{marginLeft:20}}>
                                 <p>Ramteja</p>
                                 <p style={{marginTop:-15}}>Expertly Guiding You Through Company Formation,
Visa Procurement, Seamless Accounting, and
Strategic Banking Solutions, All With Unparalleled
Transparency and Cost-Effectiveness.</p>
                                 <p style={{color:"#A8A8A8" ,  marginTop:-10}}>1d</p>
                               </div>
                            </div>

                            <div style={{display:'flex' , marginLeft:30}}>
                               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVIYDt6bSnhK21l1e1eGY0FnEBcTkTYeyEgEL53gv&s" style={{ width: 30, height: 30 , borderRadius: "50%", objectFit: "cover" , marginTop:20 }} alt="" />
                               <div style={{marginLeft:20}}>
                                 <p>Ramteja</p>
                                 <p style={{marginTop:-15}}>Expertly Guiding You Through Company Formation,
Visa Procurement, Seamless Accounting, and
Strategic Banking Solutions, All With Unparalleled
Transparency and Cost-Effectiveness.</p>
                                 <p style={{color:"#A8A8A8" ,  marginTop:-10}}>1d</p>
                               </div>
                            </div>

                            <div style={{display:'flex' , marginLeft:30}}>
                               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVIYDt6bSnhK21l1e1eGY0FnEBcTkTYeyEgEL53gv&s" style={{ width: 30, height: 30 , borderRadius: "50%", objectFit: "cover" , marginTop:20 }} alt="" />
                               <div style={{marginLeft:20}}>
                                 <p>Ramteja</p>
                                 <p style={{marginTop:-15}}>Expertly Guiding You Through Company Formation,
Visa Procurement, Seamless Accounting, and
Strategic Banking Solutions, All With Unparalleled
Transparency and Cost-Effectiveness.</p>
                                 <p style={{color:"#A8A8A8" ,  marginTop:-10}}>1d</p>
                               </div>
                            </div>


                        </div>
                    </div>

                    <div style={{marginLeft:30 , marginTop:0}}>
                        <div style={{display:'flex' , justifyContent:"space-between" , alignContent:'center'}}>
                            <div style={{marginTop:10 , marginLeft:-15}}>
                                   <img onClick={handleLike} src={Like} style={{marginLeft:13 , cursor:"pointer"}} alt="" />
                                <img src={comment} style={{marginLeft:13 , cursor:"pointer"}} alt="" />
                                <img src={Shareicon} style={{marginLeft:13 , cursor:"pointer"}} alt="" />
                            </div>
                            <div style={{marginTop:10}}>
                                <img src={Saveicon} style={{ cursor:"pointer"}} alt="" />
                            </div>
                        </div>
                        <p style={{marginTop:0}}>98,429 likes</p>
                        <p style={{fontSize:11 , color:"#A8A8A8" , marginTop:-10}}>1 DAY AGO</p>
                    </div>
                    <div style={{display:'flex' , justifyContent:"space-between" , marginLeft:30 , alignContent:'center'}}>
                        <div style={{flex:0.2}}>
                         <img src={Emoji} style={{width:24 , height:24 }} alt="" />
                        </div>
                        <div style={{flex:4 , marginLeft:10}}>
                            <textarea type="text" style={{width:"100%" , backgroundColor:"black" , border:"none" , color:"white"}} placeholder='Add a comment'/>
                        </div>
                        <div style={{flex:0.3 , marginTop:-16 , marginLeft:70}} >
                           <p style={{cursor:'pointer' , color:"#0095F6" , fontWeight:600}}>Post</p>  
                        </div>
                    </div>
                </div>
                </div>
            </Modal>

      
    </div>
  )
}
