import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "~/components/providers/theme-provider";
import { Header } from "~/components/header";
import { MaxWidthWrapper } from "~/components/max-width-wrapper";
import { Footer } from "~/components/footer";
import { ThemeScript } from "~/components/theme-script";
import { env } from "~/env";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: "abdlrhmn0x7e",
  description: `Passionate about creating meaningful software & 
  exploring new technologies. It's been 3 years since I started 
  my journey as a software engineer/full-stack developer and I've 
  been loving it ever since. Actively working on side projects 
  and learning new things/technologies.  `,

  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    images: [
      {
        url: "/opengraph-image.png",
      },
    ],
  },
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
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MaxWidthWrapper className="flex min-h-screen flex-col">
            <Header />
            <main className="mt-12 flex-1 md:px-1">{children}</main>
            <Footer />
          </MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
