import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "The 5 Laws of LLM-Assisted Coding | TDS.company",
  description:
    "A framework for integrating LLMs into your coding workflow while maintaining high standards of code quality, security, and developer understanding.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "The 5 Laws of LLM-Assisted Coding | TDS.company",
    description:
      "A framework for integrating LLMs into your coding workflow while maintaining high standards of code quality, security, and developer understanding.",
    url: "https://laws.tds.company",
    siteName: "The 5 Laws of LLM-Assisted Coding | TDS.company",
  },
  applicationName: "The 5 Laws of LLM-Assisted Coding | TDS.company",
  keywords: [
    "LLM",
    "LLM-Assisted Coding",
    "TDS.company",
    "The 5 Laws of LLM-Assisted Coding",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body>{children}</body>
    </html>
  );
}
