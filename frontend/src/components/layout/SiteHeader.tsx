import { useState, useEffect } from "react";

type SiteHeaderProps = { brand: string };

export function SiteHeader({ brand }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    // Adds a bottom border once user scrolls past the top.
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`topbar ${scrolled ? "scrolled" : ""}`}>
      <p className='logo'>{brand.toUpperCase()}</p>
      <nav className='menu'>
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
