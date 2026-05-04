import { ThemeToggle } from "@/components/theme/theme-toggle";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center background-light900_dark200 fixed z-50 w-full p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="items-center flex gap-1">
        <Image src="/favicon.ico" width={23} height={23} alt="DevFlow Logo" />
        <p className="h2 font-bold font-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <p>Global Search</p>

      <div className="flex items-center gap-5">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
