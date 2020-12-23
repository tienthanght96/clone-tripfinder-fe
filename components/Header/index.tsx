import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { HeaderAutocomplete } from './Autocomplete'

interface HeaderProps {
  disableSearch?: boolean
}

export const AppHeader: React.FC<HeaderProps> = (props) => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    handleStickyHeader()
    return () => window.removeEventListener('scroll', handleStickyHeader)
  }, [])

  const handleStickyHeader = () => {
    setSticky(false)
  }

  return (
    <header className="app-header">
      <nav
        className={classnames('px-4 flex items-center justify-between', {
          'fixed top-0 left-0 right-0': true,
          'bg-white shadow-md': sticky, 
        })}
      >
        <div className="flex items-center w-full max-w-lg">
          <Link href="/">
            <a className="flex items-center">
              <img alt="Logo" src="/logo.svg" width={25} height={25} />
              <span className="inline-block ml-2 font-semibold">TripFinder.</span>
            </a>
          </Link>
          { !props.disableSearch && 
            <HeaderAutocomplete />
          }
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