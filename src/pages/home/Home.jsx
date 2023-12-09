import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; 
import { FaApple } from "react-icons/fa";

import "./Home.scss"
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import Popup from "../../components/popup/Popup";
import PageHeader from "../../components/pageheader/PageHeader";

const Home = () => {
  const [modal , setModal ] = useState(false);
  const [ popup, setPopup ] = useState(false);
  return (
    <> 
    <PageHeader />

    { modal &&  <Modal hide={setModal} > 

    </Modal> }
   { popup &&  <Popup hide={setPopup}> </Popup> }
    


     <div className="twitter-registation">
      <div className="container twitter-registation-container"> 
       <div className="twitter-image">
         <img src="https://www.freepnglogos.com/x-twitter-png-logo-3.jpg" alt="" />
       </div>
       <div className="twitter-content">
          <div className="twiter-header">
             <h1> Happening now </h1>
             <h3> Join today. </h3>
          </div>
          <div className="twiter-body">
            <button className="google-btn"><Link><FcGoogle /> </Link> Sign up with Google </button>
            <button className="apple-btn" ><Link> <FaApple /></Link> Sign up with Apple </button>
           <h4 className="or-btn-class"> or </h4>
           <button className="account-btn" onClick={() => setPopup(true)}> Create account </button>
           
           <p className="text-content-ff"> By signing up, you agree to the <Link>Terms of Service</Link> and <Link>Privacy Policy </Link>  , including <Link> Cookie Use. </Link>  </p>
           <h4 className="already-acc"> Already have an account? </h4>
           <button className="sign-btn" onClick={() => setModal(true)}> Sign in </button>
            
          
          </div>
        </div>
       </div>
     </div>


      <div className="twitter-footer">
        <div className="twiter-fixed">
           <ul>
            <li> About </li>
            <li> Download the X app </li>
            <li> Help Center </li>
            <li> Terms of Service </li>
            <li> Privacy Policy </li>
            <li> Cookie Policy </li>
            <li> Privacy Policy </li>
            <li> Accessibility </li>
            <li> Ads info </li>
            <li> Blog </li>
            <li> Status </li>
            <li> Careers </li>
            <li> Brand Resources </li>
            <li> Advertising </li>
            <li> Marketing </li>
            <li> X for Business </li>
            <li> Developers </li>
           </ul>
        </div>
      </div>
      <div className="twitter-footer">
        <div className="twiter-fixed">
           <ul>  
   
            <li> Settings </li>
            <p> © 2023 X Corp. </p>
           </ul>
        </div>
      </div>

    </>
  )
}

export default Home;



























