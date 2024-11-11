"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import PageLoader from "../components/PageLoader";
export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <>
        <PageLoader />
      </>
    );
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
