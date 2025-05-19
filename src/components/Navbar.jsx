import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const blogSubItems = [
  { name: "Học ngoại ngữ", slug: "language-learning" },
  { name: "Hành trình của mình", slug: "my-journey" },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlogDropDownOpen, setIsBlogDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> JIRA </span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={(e) => {
                if (window.location.pathname.includes("/blog/")) {
                  // Prevent default navigation
                  e.preventDefault();
                  // Redirect to the index page
                  window.location.href = "/";
                }
              }}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Blog Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setIsBlogDropdownOpen(true)}
          onMouseLeave={() => setIsBlogDropdownOpen(false)}
        >
          {/* Nút Blog */}
          <button
            className="text-foreground/80 hover:text-primary transition-colors duration-300 px-1"
          >
            Blog
          </button>

          {/* Dropdown */}
          {isBlogDropDownOpen && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 mt-2 bg-background shadow-md rounded-md py-2 w-48 z-50">
              {blogSubItems.map((subItem, index) => (
                <a
                  key={index}
                  href={`/blog/${subItem.slug}`}
                  className="block px-4 py-2 text-foreground/80 hover:bg-muted hover:text-primary transition-colors duration-200"
                >
                  {subItem.name}
                </a>
              ))}
            </div>
          )}
        </div>


        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
