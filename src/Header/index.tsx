import { getMenuItemsAction } from '@/actions/globals'
import NavItem from './NavItem'
import Link from 'next/link'

const Header = async () => {
  const { navItems } = await getMenuItemsAction()

  return (
    <header>
      <div className="container h-3rem py-4">
        <nav className="flex justify-between items-center uppercase">
          <h2 className="text-2xl text-gray-950">
            <Link href={'/'}>Brand</Link>
          </h2>
          {navItems?.length !== 0 && <NavItem navItems={navItems} />}
        </nav>
      </div>
    </header>
  )
}

export default Header
