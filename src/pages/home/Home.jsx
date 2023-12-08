import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; 
import { FaApple } from "react-icons/fa";

import "./Home.scss"
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import Popup from "../../components/popup/Popup";

const Home = () => {
  const [modal , setModal ] = useState(false);
  const [ popup, setPopup ] = useState(false);
  return (
    <> 
    { modal &&  <Modal hide={setModal} > 

    </Modal> }
   { popup &&  <Popup hide={setPopup}> </Popup> }
    


     <div className="twitter-registation">
      <div className="container twitter-registation-container"> 
       <div className="twitter-image">
         <img src="https://i.ibb.co/KhngQj8/Screenshot-1-removebg-preview-3.png" alt="" />
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
      
    </>
  )
}

export default Home;












