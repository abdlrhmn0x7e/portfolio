import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import { ModeToggle } from "~/components/mode-toggle";
import { Header } from "~/components/header";
import { MaxWidthWrapper } from "~/components/max-width-wrapper";
import { Footer } from "~/components/footer";

export const metadata: Metadata = {
  title: "abdlrhmn",
  description:
    "full stack dev. neovim daily driver. arch btw. building things that don’t break (often).",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MaxWidthWrapper>
            <Header />
            <main>{children}</main>
            <Footer />
          </MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
