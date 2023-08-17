"use client";
import React from "react";
import { GoogleLogin } from "@react-oauth/google";

export const LoginButton = () => {
	return <GoogleLogin onSuccess={(creds) => console.log(creds)} />;
};
