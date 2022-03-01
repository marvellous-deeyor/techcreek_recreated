import { useState } from "react";
import {motion}  from "framer-motion"
import MembershipLogo from "../component/assets/logo.png"
const MembersPage = () => {

    
  /* usestate */
  const [form, setForm] = useState(true);

  return (
    <div className="membership--container">
      <div className="membership__box">
      <div className="layout">
        <motion.div className="image--container"
         animate={{
        x:"80px",
        opacity:1,
      }}
      initial={{
        x:"1px",
        opacity:0.5,
      }}
      transition={{
        duration:2,
      }}>
          <div className="image">
           <a href="/members"><img src={MembershipLogo} alt="" /><br /> </a>
          </div>
        </motion.div>
              
        <motion.div className="form--container"
         animate={{
        x:"-120px",
        opacity:1,
      }}
      initial={{
        x:"1px",
        opacity:0.5,
      }}
      transition={{
        duration:1.5,
      }}>>
          <div className="trigers">
            <button onClick={() => setForm(true)}>Sign In</button>
            <button onClick={() => setForm(false)}>Register</button>
          </div>

          <div className="sign__in">
            {form ? (
              <form action="">
                <div className="inputs">
                  <input type="text" placeholder="Enter Fullname" />
                  <input type="mail" placeholder="Enter email" />
                  <input type="password" placeholder="Enter password" />
                </div>

                <div className="checkbox--container">
                  <div className="check--box">
                    <input type="checkbox" /> <span>Remember me</span>
                  </div>
                  <div className="forgot--text">
                    <a href="#"> Forgotten Password? </a>
                  </div>
                </div>
                <div className="btn">
                  <button>Log In</button>
                </div>
              </form>
            ) : null}
          </div>

          {/*  register form */}
          <div
            className="register" /* style={{
                        display: "none"
                    }} */
          >
            {!form ? (
              <form action="">
                <div className="inputs">
                  <input type="text" placeholder="Enter Fullname" />
                  <input type="mail" placeholder="Enter email" />
                  <input type="mail" placeholder="Enter Password" />
                  <select
                    name="category"
                    id="category"
                    placeholder="Please Select">
                    <option value="Please Select">Please Select</option>
                    <option value="Enthusiast">Enthusiast</option>
                    <option value="Services">Services</option>
                    <option value="Veteran">Veteran</option>
                  </select>
                </div>

                <div className="checkbox--container">
                  <div className="check--box">
                    <input type="checkbox" /> <span>Remember me</span>
                  </div>
                  <div className="forgot--text">
                    <a href="#"> Forgotten Password? </a>
                  </div>
                </div>
                <div className="btn">
                  <button>Log In</button>
                </div>
              </form>
            ) : null}
          </div>
        </motion.div>
      </div>

      <footer>
      <p>About</p>
      <p>Services</p>
      <p>Membership</p>
      <p>Let's Talk</p>
      </footer>
      </div>
    </div>
  );
};

export default MembersPage;
