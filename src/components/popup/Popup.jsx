
import { RxCross2 } from "react-icons/rx";
import "./Popup.scss";


const Popup = ({ hide }) => {
  return (
    <>
      <div className="modal-box-twitter">
       <div className="instagram-modal">
        <div className="modal-div">
          <div className="modal-close-btn">
             <span className="svg-div" onClick={() => hide(false)} > <RxCross2 /> </span>
          </div>
          <div className="modal-close-image">
            <h3> Step 1 of 5 </h3>
          </div>
        </div>
         <div className="modal-container">
          <div className="all-content-box">
    
            <h2 >Create your account </h2>  
            <input type="text"  placeholder="Name"/>
            <input type="text"  placeholder="Phone "/>
            <h5 className="insted-txt"> Use email instead </h5>
            <div className="date-of-birth">
              <h4>Date of birth</h4>
              <p> This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else. </p>
              <div className="selecet-box">
                <div className="box-1">
                 <select name="month" id="">
                  <option value=""> Month </option>
                 </select>
                </div>
              <div className="box-2">
                <select name="" id="">
                  <option value=""> Day </option>
                </select>
              </div>
                <div className="box-3"> 
                <select name="" id="">
                  <option value=""> Year </option>
                </select>
              </div>
              </div>
            </div>
            <button className="next-btn"> Next </button>
          
          </div>
         </div>
       </div>
     </div>
    </>
  )
}

export default Popup;
















