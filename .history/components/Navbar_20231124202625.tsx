import { useState } from 'react';
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className={`h-full gap-12 lg:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} passHref>
            <a
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          </Link>
        ))}
      </ul>

      <div className='lg:flexCenter hidden'>
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div
        className='lg:hidden cursor-pointer'
        onClick={toggleMenu}
      >
        <Image 
          src="menu.svg"
          alt='menu'
          width={32}
          height={32}
          className='inline-block'
        />
      </div>
    </nav>
  );
};

export default Navbar;
