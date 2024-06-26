
import Provider from "@/components/provider";
import clsx from 'clsx';
import { inter, sfPro } from "@/styles/fonts";
import "@/styles/globals.css";
import Nav from "@/components/nav";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="flex min-h-screen flex-col">
            <div className={clsx(sfPro.variable, inter.variable)}>
              <Nav />
              {children}
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
}
