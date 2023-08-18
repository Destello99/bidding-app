import { useEffect } from "react";
import AppLottie from "./AppLottie";
import React from 'react'
import TextBox from "../component/TextBox";
import PasswordBox from "../component/PasswordBox";
import Button from "../component/Button";

// this is a test commit

function Login({ setIsLoginPage }) {
    useEffect(() => {
        setIsLoginPage(true);
        return () => setIsLoginPage(false);
    }, [setIsLoginPage]);
    return (
        <>
            <div className="flex h-screen ">
                <div className="w-1/2">
                    <AppLottie />
                </div>


                <div className=" w-1/2 flex justify-center items-center flex-col ">
                    <div className="shadow-2xl p-3 m-3 rounded-lg flex justify-center items-center flex-col">
                        <h1 className=" font-bold">Login</h1>
                        <TextBox />
                        <PasswordBox />
                        <Button />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;