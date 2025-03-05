import AppBar from "@/components/shared/appbar";

export default function RootLayout({ children }) {
  return (
    <main lang="en" className="">
        <AppBar itemName={"Milk"} itemCat={"Dairy"}/>
        {children}
    </main>
  );
}
