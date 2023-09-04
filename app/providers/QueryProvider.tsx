"use client";
import { queryClient } from "@/clients/api";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="absolute bottom-0 left-0">
        <ReactQueryDevtools />
      </div>
      {children}
    </QueryClientProvider>
  );
};
