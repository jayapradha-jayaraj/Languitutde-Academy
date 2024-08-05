import react from 'react'
import './Styles/MemberAcess.css';
import { IoEye } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

function MemberAccess(){
    return(
        <div className='wrapper'>
            <form action=''>
                <h1>Login</h1>
                <div className='input-box'>     
                    <input type='text' placeholder='UserName' required />
                    <FaUserCircle className="icon" />                                   
                </div>
                <div className='input-box'>
                    <div></div>
                    <input type='text' placeholder='PassWord' required />
                    <IoEye className="icon" />
                </div>
                <div className='remember-forgot'>
                    <label htmlFor=''><input type='checkbox'/> Remember Me</label>
                    <a href='#'>Forget Password</a>
                </div>
                <button type='submit'>SignIn</button>
                <div className='register-link'>
                    <p>New Registration<a href='#'>Register</a></p>
                </div>
                

            </form>
        </div>
    )
}
export default MemberAccess