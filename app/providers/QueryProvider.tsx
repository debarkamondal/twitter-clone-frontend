"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

const client = new QueryClient();
export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider client={client}>
			<div className="absolute bottom-0 left-0">
				<ReactQueryDevtools />
			</div>
			{children}
		</QueryClientProvider>
	);
};
