import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import { Header } from "~/components/header";
import { MaxWidthWrapper } from "~/components/max-width-wrapper";
import { Footer } from "~/components/footer";

export const metadata: Metadata = {
  title: "abdlrhmn0x7e | Full-Stack Web Developer",
  description: `I'm a full-stack web developer specializing in Next.js and the modern
              JavaScript/TypeScript ecosystem. I build fast, scalable, and maintainable
              applications—end to end. With hands-on experience across a wide range of tools
              and frameworks (Next.js, React, Tailwind, Node.js, Bun, Hono, Drizzle, Postgres, and more),
              I move quickly without breaking things (too often). I'm a fast learner, deeply curious,
              and comfortable diving into unfamiliar stacks to solve real-world problems.
              oh and I use Arch btw.
            `,
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
