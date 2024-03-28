import type { Metadata } from "next";
import { Inter, Kantumruy_Pro, Poppins } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/layouts/navbar/NavbarComponent";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import StyledJsxRegistry from "./registry";


export const metadata: Metadata = {
  title: {
    template: "%s - MyShop",
    default: "MyShop",
  },
  description: "This is description shop",
  keywords: ["shop", "ecommerce", "sell"],
  openGraph: {
    title: {
      template: "%s - MyShop",
      default: "MyShop",
    },
    description: "This is description shop",
    images: [
      "https://i.pinimg.com/564x/cd/6d/ec/cd6dec6d3967cb8e714aa2357b6c3b73.jpg",
    ],
  },
};


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

const kantumruy_pro = Kantumruy_Pro({
  subsets: ["khmer"],
  display: "swap",
  variable: "--font-kantumruy-pro",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${kantumruy_pro.variable}`}>
        <NextUILayout>
          <StyledJsxRegistry>
            <NavbarComponent />
            <Suspense fallback={<LoadingComponent />}>
              <ErrorBoundary errorComponent={Error}>{children}</ErrorBoundary>
            </Suspense>
          </StyledJsxRegistry>
        </NextUILayout>
      </body>
    </html>
  );
}
