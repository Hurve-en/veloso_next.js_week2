import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <html lang="en ">
        <body className="min-h-full flex flex-col">
          <nav className="flex gap-6 px-16 py-6">
            <Link href={"/"}>Home</Link>
            <Link href={"/projects"}>Projects</Link>
          </nav>
          {children}
        </body>
      </html>
    </>
  );
}
