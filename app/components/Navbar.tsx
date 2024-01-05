import Link from 'next/link';
import NavLinks from './NavLink';

interface ClickProps {
  click: boolean;
}

const Navbar = ({ click }: ClickProps) => {
  return (
    <>
      <nav className={`nav ${click ? 'showMenu' : ''}`}>
        <ul className="menu">
          <li className="capitalize mb-[0.773rem] lg:mb-0 lg:ml-[1.8rem] lg:uppercase">
            <Link
              className="text-black text-[1.2rem] tracking-[1px] font-light lg:text-base lg:font-normal"
              href="/feature"
            >
              feature films
            </Link>
          </li>
          <NavLinks />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
