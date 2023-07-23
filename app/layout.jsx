import "@styles/globals.css";

import Nav from "@components/Nav";
import { NextAuthProvider } from "@components/NextAuthProvider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default Layout;
