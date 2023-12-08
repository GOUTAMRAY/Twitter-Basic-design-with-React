
import { RxCross2 } from "react-icons/rx";
import "./Modal.scss";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Modal = ({ hide }) => {
  return (
    <>
    <div className="modal-box-twitter">
       <div className="instagram-modal">
        <div className="modal-div">
          <div className="modal-close-btn">
             <span className="svg-div" onClick={() => hide(false)} > <RxCross2 /> </span>
          </div>
          <div className="modal-close-image">
            <img src="https://i.ibb.co/V9xZpGW/Screenshot-1-removebg-preview-4.png" alt="" />
          </div>
        </div>
         <div className="modal-container">
          <div className="all-content-box">
            <h2 > Sign in to X </h2>
             <button className="google-btn"><Link><FcGoogle /> </ Link> Sign up with Google </button>
            <button className="apple-btn" ><Link> <FaApple /></Link> Sign up with Apple </button>
            <h4 className="or-btn-class"> or </h4>
            <input type="text"  placeholder="Phone , email or username "/>
             <button className="account-btn"> Next  </button>
             <button className="apple-btn" > Forgot password? </button>
             <p className="abcd-btn"> Dont have an account?<Link> Sign up </Link> </p>

          </div>
         </div>
       </div>
     </div>
    </>
  )
}

export default Modal;





















