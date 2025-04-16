import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import DropdownButton from "./DropdownButton";

const Navbar = () => {
  const navLinks = [
    { title: "About us", hasDropdown: true },
    { title: "Events", hasDropdown: true },
    { title: "Alumni Area", hasDropdown: true },
    { title: "Contact", hasDropdown: false },
  ];
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#fefef8] px-6 py-4 border-b border-gray-200 bg-opacity-80">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/hero-smile-arrow.svg"
            alt="AWS Logo"
            width={48}
            height={24}
          />
          <span className="text-lg text-gray-800 font-medium">educate</span>
        </Link>

        <ul className="hidden md:flex gap-10 text-gray-900 font-normal text-sm">
          {navLinks.map((link) => (
            <li key={link.title}>
              {link.hasDropdown ? (
                <DropdownButton
                  title={link.title}
                  items={["Option 1", "Option 2"]}
                />
              ) : (
                <span className="hover:text-blue-600 cursor-pointer">
                  {link.title}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
