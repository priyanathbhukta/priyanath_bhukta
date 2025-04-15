
import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 pt-16 bg-portfolio-dark">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
