import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "სასტუმრო მწვანე ტერასა — თქვენი სახლი აჭარაში",
  description: "საოჯახო სასტუმრო მწვანე ტერასა — კომფორტული ოთახები, გემრიელი საუზმე და სტუმართმოყვარეობა. დაჯავშნეთ ახლავე!",
  keywords: "სასტუმრო აჭარაში, საოჯახო სასტუმრო, guest house, მწვანე ტერასა, აჭარა",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
