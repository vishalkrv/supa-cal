'use client';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Home () {
  const { theme, setTheme } = useTheme()
  const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
    'dim',
    'nord',
    'sunset',
  ]
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there...</h1>
          <p className="py-6">Youre here. A deva just as dashing and daisyuing - as yourself refined</p>
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-primary m-1">Selected Theme - { theme }</div>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              { themes.map((t) => (
                <li key={ t } onClick={ () => setTheme(t) }>
                  <a>{ t }</a>
                </li>
              )) }
            </ul>
          </div>
          <div className='mt-4'>
            <span>Working on Routes</span>
            <ul>
              <li><Link href="/auth/login" className='transition underline'>Login</Link></li>
              <li><Link href="/auth/register" className='transition underline'>Register</Link></li>
              <li><Link href="/auth/forgot" className='transition underline'>Forgot</Link></li>
              <li><Link href="/test/2" className='transition underline'>404</Link></li>
              <li><Link href="/" className='transition underline'>Dashboard</Link></li>
              <li><Link href="/posts" className='transition underline'>Posts</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}
