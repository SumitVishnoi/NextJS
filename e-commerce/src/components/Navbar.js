import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-xl font-bold">
          My Store
        </h1>
        <div className="flex gap-4 font-semibold">
            <Link href="/layout/home">Home</Link>
            <Link href="/layout/products">Products</Link>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}