"use client";
import React, { useCallback } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { graphqlClient } from "@/cients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";

export const LoginButton = () => {
	const handleGoogleLogin = useCallback(async (creds: CredentialResponse) => {
		const googleToken = creds.credential;
		if (!googleToken) return "no token";
		const { verifyGoogleToken } = await graphqlClient.request(
			verifyUserGoogleTokenQuery,
			{
				token: googleToken,
			}
		);
	}, []);

	return <GoogleLogin onSuccess={handleGoogleLogin} />;
};
