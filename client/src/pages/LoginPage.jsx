import React, {useState} from "react";
import Input from "components/users/Input";
import UserForm from "components/users/UserForm";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () =>{
    const SERVER_URL = "http://localhost:4000";   // 서버 주소
    const [id, setID] = useState("");;
    const [password, setPassword] = useState("");
    const [loginStat, setLoginStat] = useState("");
    const navigate = useNavigate();

    const formData = {
        bt_msg: "Don't have an account?",
        bt_link: "/register",
        bt_button: "Sign up",
        fr_title: "WELCOME BACK",
        fr_msg: loginStat,
        inputs : [
            <Input 
                id="id" 
                placeholder="Enter Username"
                setState={setID}
                icon={<FaUser />}
                key="id"
            />,
            <Input 
            id="password" 
            placeholder="Enter Password"
            setState={setPassword}
            icon={<FaLock />}
            key="password"
            />,
        ],
        submit: "Login",
      };

    const postLogin =  async () =>{
        try{
            const response = await axios.post(`${SERVER_URL}/login`, {
                id : id,
                password : password,
            });
            
            if(response.status === 200){
                navigate("/main/html");
            }
        }catch(err){
            setLoginStat(err.response.data.message);
        }
    }

    return(
        <UserForm formData={formData} handleSubmit={postLogin}/>
    );
};

export default LoginPage;
