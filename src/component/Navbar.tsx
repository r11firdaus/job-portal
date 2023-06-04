import { useRouter } from "next/navigation";
import toParams from "@/lib/toParams";
import SearchJobQueryTypes from "@/types/SearchJobQueryTypes";

const Navbar = (props: { paramsObj: SearchJobQueryTypes }) => {
  const router = useRouter()
  const paramsObj = props.paramsObj

  return (
    <nav className="navbar navbar-expand-lg d-flex p-2">
      <div className="nav-item col-8">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <svg width="20" height="20" className="DocSearch-Search-Icon" viewBox="0 0 20 20">
              <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                stroke="currentColor"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round">  
              </path>
            </svg>
          </span>
          <input type="text" className="form-control" placeholder="Nama perusahaan, pekerjaan, dll." defaultValue={paramsObj?.jobText} onClick={() => router.push(`/search${toParams(paramsObj)}`)} />
        </div>          
      </div>

      <div className="nav-item ms-auto align-self-center col-auto mx-2">
        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profil
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;