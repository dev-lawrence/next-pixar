'use client';

import { useState } from 'react';
import { MenuLinks } from './MenuLinks';
import Link from 'next/link';

const NavLinks = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<any>(null);
  const [click, setClick] = useState(false);

  const handleMenuEnter = (index: number) => {
    if (window.innerWidth < 1200) {
      setActiveMenuIndex(null);
    } else {
      setActiveMenuIndex(index);
    }
  };

  const handleMenuLeave = () => {
    setActiveMenuIndex(null);
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      {MenuLinks.map((link, index) => {
        return (
          <li
            key={index}
            onMouseEnter={() => handleMenuEnter(index)}
            onMouseLeave={handleMenuLeave}
            className="capitalize mb-[0.773rem] lg:mb-0 lg:ml-[1.8rem] lg:uppercase"
          >
            <Link
              className="text-black text-[1.2rem] tracking-[1px] font-light lg:text-base lg:font-normal"
              href={link.path}
            >
              {link.name}
            </Link>

            {link.subMenus && activeMenuIndex === index && (
              <ul
                className={click ? `${link.cName} clicked` : link.cName}
                onClick={handleClick}
              >
                {link.subMenus.map((subMenu, subIndex) => (
                  <li
                    className="capitalize mb-[0.773rem] lg:mb-0 lg:ml-[1.8rem] lg:uppercase"
                    key={subIndex}
                  >
                    <Link href={subMenu.path} className={subMenu.cName}>
                      {subMenu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
