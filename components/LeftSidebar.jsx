'use client'

import Image from 'next/image'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'

const LeftSidebar = () => {
  const close = (e) => {
    document.getElementById('left-sidebar-drawer').click()
  }
  return (
    <div className="drawer-side  z-30">
      <label for="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu  min-h-full w-80 bg-base-100 pt-2  text-base-content">
        <button
          className="btn btn-circle btn-ghost  absolute right-0 top-0 z-50 mr-2 mt-4 bg-base-300 lg:hidden"
          onClick={() => close()}
        >
          <XMarkIcon className="inline-block h-5 w-5" />
        </button>
        <li class="mb-2 text-xl font-semibold">
          <Link href={'/'}>
            {/* <img className="mask mask-squircle w-10" src="/logo192.png" alt="DashWind Logo" /> */}
            {siteMetadata.headerTitle}
          </Link>
        </li>
        <li class="">
          <Link href="/">
            <Squares2X2Icon className="h-6 w-6"/>
            Dashboard
          </Link>
        </li>
        <li class="">
          <Link class="bg-base-200  font-semibold " href="/posts" aria-current="page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
              ></path>
            </svg>{' '}
            Posts
            <span
              class="absolute inset-y-0 left-0 w-1 rounded-br-md rounded-tr-md bg-primary "
              aria-hidden="true"
            ></span>
          </Link>
        </li>
        <li class="">
          <Link class="font-normal" href="/settings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>{' '}
            Settings
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default LeftSidebar
