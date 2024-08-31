import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import MainPage from "pages/MainPage";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element = {<HomePage />}/>
            <Route path="/main/*" element = {<MainPage />}/>
        </Routes>
    )
};

export default Router;