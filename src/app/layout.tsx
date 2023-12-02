import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import CartProvider from "@/providers/cart";
import HeaderDesktop from "@/components/ui/header-desktop";
import WhatsApp from "@/components/ui/whatsApp";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SERAFA Suplementos - Loja de suplementos alimentares",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta
          name="google-site-verification"
          content="oX9aNoYEIaMyKtUpRdMNrzLNA83HGUMj0qTHKOuPCl4"
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col h-full">
          <CartProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Toaster />
              <Header />
              <HeaderDesktop />
              <div className="flex-1">{children}</div>

              <Footer />
              <WhatsApp />
            </ThemeProvider>
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
