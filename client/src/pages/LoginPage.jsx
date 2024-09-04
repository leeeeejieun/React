import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import video from "../assets/login_video.mp4";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginPage = () =>{
    return(
        <Wrapper>
            <Inner>
                <VideoWrapper>
                    <video src={video} autoPlay loop></video>

                    <Bottom>
                        <span>Don't have an account?</span>
                        <Link to="/register">
                            <Button>Sign up</Button>
                        </Link>
                    </Bottom>
                </VideoWrapper>

                <FormWrapper>
                    <form action=""> 
                        <h1>WELCOME BACK</h1>
                        <span>Login Status will go here</span>
                        <InputWrapper>
                            <label htmlFor="username">UserName</label>
                                <InputInner>
                                    <FaUser />
                                    <input type="text" id="username" placeholder="Enter Username"/>                          
                                </InputInner>
                        </InputWrapper>
                        <InputWrapper>
                            <label htmlFor="password">Password</label>
                                <InputInner>
                                    <FaLock />
                                    <input type="text" id="password" placeholder="Enter Password"/>                         
                                </InputInner>
                        </InputWrapper>
                        <Button type="submit">Login</Button> 
                        </form>
                </FormWrapper>
            </Inner>
        </Wrapper>
    );
}

export default LoginPage;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    overflow: hidden;
    height: 100vh;
    width: 100%;
`;

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    height: 75vh;
    width: 70%;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(255, 255, 255, .4);
    border: 2px solid rgba(255,255,255,.3);
`;

const VideoWrapper = styled.div` 
    position: relative;
    display: flex;
    flex-basis: 50%;
    align-items: center;
    flex-direction: column;
    padding: 0 1.5rem;
    border-radius: 10px;
    overflow: hidden;

    > video {
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
`;

const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    padding: 0 1rem;
    height: 60px;
    background-color: rgba(255,255,255,.1);
    left : 10px;
    right : 10px;
    backdrop-filter: blur(1px);
    border-radius: 10px;

    > span {
        padding: 1rem;
    }
`;

const FormWrapper = styled.form`
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     flex-basis: 50%;
     gap: 1.5rem;
     
    > form {
        display: flex;
        flex-direction: column;
        width: 65%;
        gap: 1.5em;

        > h1 {
            font-size: 25px;
            text-align: center;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 1.3px;
        }
        
        > span {
            padding: 10px;
            background-color: rgb(255, 0, 0);
            border-radius: 3px;
            text-align: center;
        }
    }
`

const InputWrapper = styled.div`
    > label {
        font-weight: 400;
        font-size: 15px;
        padding: .5rem 0;
        display: block;
    }
`;

const InputInner = styled.div`
    display: flex;
    gap: .5rem;
    padding: .8rem;
    background-color: rgba(255,255,255,.1);
    border-radius: 10px;

    > input { 
        background: none;
        outline: none;
        border: none;
        width: 200px;
    }
`;

const Button = styled.button`
    border-radius: 5px;
    padding: .8rem;
    color :  #FFFF;
    font-weight: 400;
    transition: .3s ease;
    background-color:  rgba(255,255,255,.1);

    &:hover {
      color : #050505;
      background-color: #faf2f2;
     }
`