import { Header } from '@/payload-types'
import Link from 'next/link'

const NavItem = ({ navItems }: { navItems: Header['navItems'] }) => {
  if (!navItems) {
    return null
  }

  return (
    <ul className="flex gap-4">
      {navItems.map((navItem) => (
        <li key={navItem.id}>
          <Link href={`/${navItem?.link?.label}`}>{navItem?.link?.label}</Link>
        </li>
      ))}
      <li>
        <Link href={'/login'}>Login</Link>
      </li>
    </ul>
  )
}

export default NavItem
