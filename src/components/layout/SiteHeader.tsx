import { useState, useEffect } from "react";

type SiteHeaderProps = { brand: string };

export function SiteHeader({ brand }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
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
      <a className='logo' href='#home' aria-label='Go to top section'>
        {brand.toUpperCase()}
      </a>
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
