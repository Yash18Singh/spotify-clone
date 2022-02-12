import react from "react";
import { loginUrl } from "../spotify/spotify";
import './Login.css';

const Login = ()=>{
    document.title='SPOTIFY | LOGIN'
    return(
        <>
            <div className='login'>
                <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt=''/>
            
                <a href={loginUrl}>
                        LOGIN WITH SPOTIFY
                </a>
            </div>
        </>
    )
}

export default Login;