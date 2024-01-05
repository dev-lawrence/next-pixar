'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header className="fixed bg-white w-full top-0 shadow-lg z-[500]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between py-6 relative w-full">
          {/* Logo */}
          <Link href="/">
            <Image src={Logo} width={85} alt="logo" className="lg:w-[120px]" />
          </Link>

          {/* Menu Icons */}
          <div
            onClick={handleClick}
            className="cursor-pointer z-[100]  lg:hidden"
          >
            {click ? (
              <FontAwesomeIcon icon={faXmark} className="text-2xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            )}
          </div>

          {/* Navbar */}
          <Navbar click={click} />
        </div>
      </div>
    </header>
  );
};

export default Header;
