import React from "react";
import Input from "components/users/Input";
import UserForm from "components/users/UserForm";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa"
import { IoIosMail } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";

const RegisterPage = () =>{
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
                icon={<FaUser />}
            />,
            <Input 
            label="mail" 
            id="mail" 
            placeholder="Enter Mail"
            icon={<IoIosMail />}
            />,
            <Input 
            label="password" 
            id="password" 
            placeholder="Enter Password"
            icon={<FaLock />}
            />,
            <Input 
            label="confirmPassword" 
            id="confirmPassword"
            placeholder="Enter ConfirmPassword"
            icon={<FaRegCheckCircle />}
            />
        ],
        submit: "Register",
      };

    return(
        <UserForm formData={formData}/>
    );
};

export default RegisterPage;