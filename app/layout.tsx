import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SalaryCheck — Validate Candidate Salary Expectations",
  description: "Compare candidate salary expectations against real market data for their skills, location, and experience level."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="44c15ef2-1e7d-4446-bc9b-8b70d21a59d3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
