import AppBar from "@/components/shared/appbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-cyan-50 h-screen text-black max-w-full`}
      >
        <AppBar itemName={"Milk"} itemCat={"Dairy"}></AppBar>
        {children}
      </body>
    </html>
  );
}
