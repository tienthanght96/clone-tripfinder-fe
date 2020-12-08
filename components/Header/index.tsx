import Link from 'next/link'

export const AppHeader: React.FunctionComponent<{}> = () => {
  return (
    <header className="app-header">
      <nav className="px-4 bg-white flex items-center justify-between">
        <div className="">
          <img src="" alt="Logo" />
        </div>
        <div className="flex items-center">
          <ul className="flex items-center">
            <li className="py-3"> 
              <Link href="/">
                <a className="btn-text">
                  Hotels
                </a>
              </Link>
            </li>
            <li className="py-3"> 
              <Link href="/">
                <a className="btn-text">
                  Listing
                </a>
              </Link>
            </li>
            <li className="py-3"> 
              <Link href="/">
                <a className="btn-text">
                  Agent
                </a>
              </Link>
            </li>
          </ul>
          <ul className="">
            <Link href="/signin">
              <a className="no-underline text-accent-1 btn-text">
                Sign in
              </a>
            </Link>
            <Link href="/signup">
              <a className="no-underline btn-primary">
                Sign up
              </a>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  )
}