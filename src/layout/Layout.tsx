import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="h-18" />

      <main className="flex flex-col">{children}</main>
    </div>
  );
};
