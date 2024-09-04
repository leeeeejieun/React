import React from "react";
import Input from "components/users/Input";
import UserForm from "components/users/UserForm";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa"

const LoginPage = () =>{
    const formData = {
        bt_msg: "Don't have an account?",
        bt_link: "/register",
        bt_button: "Sign up",
        fr_title: "WELCOME BACK",
        fr_msg: "Login Status will go here",
        inputs : [
            <Input 
                label="username" 
                id="username" 
                placeholder="Enter Username"
                icon={<FaUser />}
            />,
            <Input 
            label="password" 
            id="password" 
            placeholder="Enter Password"
            icon={<FaLock />}
            />
        ],
        submit: "login",
      };

    return(
        <UserForm formData={formData}/>
    );
};

export default LoginPage;