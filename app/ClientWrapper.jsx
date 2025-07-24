"use client";

import FluidGlass from "@/components/ui/Components/FluidGlass/FluidGlass";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Toaster } from "sonner";

export default function ClientWrapper({ children }) {
  return (
    <>
      <FluidGlass />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster richColors />
      </ThemeProvider>
    </>
  );
}
