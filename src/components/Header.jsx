// Navbar, search, toggle light/dark mode
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
  <div className="navbar bg-base-300 shadow-sm px-2 sm:px-4">
    <div className="navbar-start">
      {/* Mobile hamburger */}
      <div className="dropdown md:hidden">
        <button
          aria-label="Open navigation menu"
          tabIndex={0}
          className="btn btn-ghost btn-square"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56"
          aria-label="Mobile navigation"
        >
          <li><a href="#about" className="capitalize">About</a></li>
          <li><a href="#projects" className="capitalize">Projects</a></li>
          <li><a href="#stats" className="capitalize">Stats</a></li>
          <li><a href="#tech-stack" className="capitalize">Technologies</a></li>
          <li><a href="#contact" className="capitalize">Contact</a></li>
          <li className="menu-title"><span>Pages</span></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/blog/my-journey">Blog Post</Link></li>
          <li><Link to="/projects/1">Project Detail</Link></li>
        </ul>
      </div>
      <a href="#about" className="btn btn-ghost text-base sm:text-lg font-semibold">Cecilia Ramirez</a>
    </div>

    {/* Desktop menu */}
    <div className="navbar-center hidden md:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a href="#about" className="btn btn-ghost">About</a></li>
        <li><a href="#projects" className="btn btn-ghost">Projects</a></li>
        <li><a href="#stats" className="btn btn-ghost">Stats</a></li>
        <li><a href="#tech-stack" className="btn btn-ghost">Technologies</a></li>
        <li><a href="#contact" className="btn btn-ghost">Contact</a></li>
      </ul>
    </div>

    <div className="navbar-end gap-1 sm:gap-2">
      <button aria-label="Search" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
      </button>
      <button aria-label="Notifications" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
    </div>
  </div>
  )
}
