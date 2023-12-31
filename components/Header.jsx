'use client'

import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
// import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
// import SunIcon from '@heroicons/react/24/outline/SunIcon'
import Link from 'next/link'

const Header = () => {
  const pathname = usePathname()
  // eslint-disable-next-line no-unused-vars
  const { theme, setTheme } = useTheme()

  console.log(pathname)

  //   <ul className="rounded-t-none bg-base-100 p-2">
  //   {themes.map((t) => (
  //     <li key={t} onClick={() => setTheme(t)}>
  //       <a>{t}</a>
  //     </li>
  //   ))}
  // </ul>

  return (
    <div className="navbar sticky top-0 z-10  bg-base-100 shadow-md ">
      {/* Menu toogle for mobile view or small screen */}
      <div className="flex-1">
        <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
          <Bars3Icon className="inline-block h-5 w-5" />
        </label>
        <h1 className="ml-2 text-2xl font-semibold">{siteMetadata.headerTitle}</h1>
      </div>

      <div className="flex-none ">
        {/* Multiple theme selection, uncomment this if you want to enable multiple themes selection,
also includes corporate and retro themes in tailwind.config file */}

        <select
          className="select select-sm"
          data-choose-theme
          onChange={(e) => setTheme(e.target.value)}
        >
          <option disabled defaultValue>
            Theme
          </option>
          <option value="light">Default</option>
          <option value="dark">Dark</option>
          <option value="corporate">Corporate</option>
          <option value="retro">Retro</option>
        </select>

        {/* Light and dark theme selection toogle **/}
        {/* <label className="swap ">
          <input type="checkbox" />
          <SunIcon
            data-set-theme="light"
            data-act-className="ACTIVECLASS"
            className={"fill-current w-6 h-6 "+(theme === "dark" ? "swap-on" : "swap-off")}
          />
          <MoonIcon
            data-set-theme="dark"
            data-act-className="ACTIVECLASS"
            className={"fill-current w-6 h-6 "+(theme !== "dark" ? "swap-on" : "swap-off")}
          />
        </label> */}

        {/* Notification icon */}
        <button className="btn btn-circle btn-ghost  ml-4">
          <div className="indicator">
            <BellIcon className="h-6 w-6" />

            <span className="badge indicator-item badge-secondary badge-sm">4</span>
          </div>
        </button>

        {/* Profile icon, opening menu on click */}
        <div className="dropdown dropdown-end ml-4">
          <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
            <div className="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="profile" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu-compact menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li className="justify-between">
              <Link href={'/app/settings-profile'}>
                Profile Settings
                <span className="badge">New</span>
              </Link>
            </li>
            <li className="">
              <Link href={'/app/settings-billing'}>Bill History</Link>
            </li>
            <div className="divider mb-0 mt-0"></div>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
