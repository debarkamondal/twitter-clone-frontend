"use client";
import React, { useCallback } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { toast } from "react-hot-toast";
import { useGetCurrentUser } from "../hooks/user";
import { useQueryClient } from "@tanstack/react-query";

export const LoginButton = ({ children }: { children: React.ReactNode }) => {
	const { user } = useGetCurrentUser();
	const queryClient = useQueryClient();
	const handleGoogleLogin = useCallback(
		async (creds: CredentialResponse) => {
			const googleToken = creds.credential;
			if (!googleToken) return toast.error("No token found");
			const { verifyGoogleToken } = await graphqlClient.request(
				verifyUserGoogleTokenQuery,
				{
					token: googleToken,
				}
			);
			if (verifyGoogleToken) {
				toast.success("Login Successful");
				localStorage.setItem("token", verifyGoogleToken);
			}
			await queryClient.invalidateQueries(["getCurrentUser"]);
		},
		[queryClient]
	);

	return (
		!user && (
			<div>
				{children}
				<GoogleLogin onSuccess={handleGoogleLogin} />
			</div>
		)
	);
};
