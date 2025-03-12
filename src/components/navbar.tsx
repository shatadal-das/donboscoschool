import { Link, useLocation } from "@tanstack/react-router"

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Activities", href: "/activities" },
  { name: "Faculty", href: "/faculty" },
  { name: "Contact Us", href: "/contact-us" },
]

function Navbar() {
  const pathname = useLocation({
    select: ({ pathname }) => pathname,
  })

  return (
    <nav className="bg-primary-700 flex justify-end p-[0.75em] text-[0.75em] text-white/80">
      <ul className="flex items-center gap-[0.75em]">
        {links.map((link) => (
          <li
            key={link.name}
            className={`relative ${pathname === link.href ? "font-semibold text-white after:w-full after:bg-white" : "after:w-0"} after:absolute after:-bottom-0.25 after:left-0 after:h-[1.5px] after:bg-white/80 after:transition-all after:duration-300 hover:after:w-full`}
          >
            <Link to={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar
