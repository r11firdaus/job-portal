'use client'

import { useRouter } from "next/navigation";
import toParams from "@/lib/toParams";
import SearchJobQueryTypes from "@/types/SearchJobQueryTypes";
import Link from "next/link";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react"

const Navbar = (props: { paramsObj?: SearchJobQueryTypes }) => {
  const router = useRouter()
  const paramsObj = props.paramsObj
  const { data: session } = useSession()

  return (
    <nav className="navbar navbar-expand-lg d-flex p-2">
      <div className="nav-item col-8">
        <div className="input-group">
          <span className="input-group-text border-success bg-success" id="basic-addon1">
            <svg width="20" height="20" className="DocSearch-Search-Icon text-light" viewBox="0 0 20 20">
              <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                stroke="currentColor"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round">  
              </path>
            </svg>
          </span>
          <label className="form-control border-success" onClick={() => router.push(`/search${toParams(paramsObj)}`)}>
            {paramsObj?.jobText ? paramsObj?.jobText : "Cari pekerjaan"}
          </label>
        </div>          
      </div>

      <div className="nav-item ms-auto align-self-center col-auto mx-2">
        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            carigawe
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><Link className="dropdown-item" href="/">Beranda</Link></li>
            <li><Link className="dropdown-item" href="/profile/1/">{session?.user?.email}</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" href="#">Keluar</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const WrappedNavbar = () => {
  return <SessionProvider><Navbar /></SessionProvider>
}
 
export default WrappedNavbar;