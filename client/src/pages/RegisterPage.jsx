import React, {useState} from "react";
import Input from "components/users/Input";
import UserForm from "components/users/UserForm";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa"
import { IoIosMail } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import axios from "axios";

const RegisterPage = () =>{
    const SERVER_URL = "http://localhost:4000";
    const [id, setID] = useState("");
    const [mail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ckPassword, setCkPassword] = useState("");

    const formData = {
        bt_msg: "Already have an account?",
        bt_link: "/login",
        bt_button: "Login",
        fr_title: "CREATE YOUR ACCOUNT",
        inputs : [
            <Input 
                label="id" 
                id="id" 
                placeholder="Enter Username"
                setState={setID}
                icon={<FaUser/>}
            />,
            <Input 
            label="mail" 
            id="mail" 
            placeholder="Enter Mail"
            setState={setEmail}
            icon={<IoIosMail/>}
            />,
            <Input 
            label="password" 
            id="password" 
            placeholder="Enter Password"
            setState={setPassword}
            icon={<FaLock />}
            />,
            <Input 
            label="confirmPassword" 
            id="confirmPassword"
            placeholder="Enter ConfirmPassword"
            setState={setCkPassword}
            icon={<FaRegCheckCircle/>}
            />
        ],
        submit: "Register",
      };

      console.log(ckPassword);
      console.log(mail)
      console.log(id);
    return(
        <UserForm formData={formData}/>
    );
};

export default RegisterPage;