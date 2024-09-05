"use client";
import { ThemeProvider } from "next-themes";
// Consider this snippet from ../../app/components/providers/RootProviders.tsx
import React from "react";
const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider
           attribute="class"
           defaultTheme="dark"
           enableSystem
           disableTransitionOnChange
           >{children}</ThemeProvider>;
};
export default RootProviders;
