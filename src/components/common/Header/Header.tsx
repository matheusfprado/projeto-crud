import Image from 'next/image';
import Logo from '@/assets/img/logo.svg';

export default function Header() {
  return (
    <header className='bg-gray-100'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' aria-label='Top'>
        <div className='w-full flex items-center justify-between border-b border-indigo-500 lg:border-none'>
          <div className='flex items-center'>
            <a href='#'>
              <span className='sr-only'>albert</span>
              <Image src={Logo.src} width={150} height={100} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
