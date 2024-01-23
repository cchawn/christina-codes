import Link from 'next/link';
import Emojis from './emojis';

const Header = () => {
  return (
    <header className="flex sticky top-0 bg-white text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 border-b border-neutral-400 py-5 z-10 text-base container mx-auto px-4 md:px-8">
      <h2 className="basis-1/2">
        <Emojis />{' '}
        <Link href="/" className="">
          christina.codes
        </Link>
      </h2>
      <nav className="hidden md:flex basis-1/2 justify-end">
        <ul>
          <li className="mx-2 inline-block">
            <Link href="/">
              <span aria-hidden>✨</span> about
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
