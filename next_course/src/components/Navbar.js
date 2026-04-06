import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Product 1', href: '/product/1' },
    { name: 'Product 1/2 (Nested)', href: '/product/1/2' },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          Next Course
        </Link>
      </div>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href} 
              className={mounted && router.pathname === link.href ? 'active' : ''}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
