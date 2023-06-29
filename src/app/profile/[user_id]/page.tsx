'use client'

import Navbar from "@/component/Navbar";
import user from "../../../../dummy/userDummy";
import Link from "next/link";

const User = () => {
  return (<>
    <Navbar />
    <div className="px-2 mt-4">
      <div className="card p-3">
        <div className="d-flex justify-content-between">
          <div>
            <h3>{user.full_name}</h3>
            <p>Data Diri</p>
          </div>
          <div>
            <Link href={'/profile/1/edit'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil text-success" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg>
            </Link>
          </div>
        </div>
        <table className="table table-borderless">

          <tbody>
            <tr>
              <td>Nama Lengkap</td>
              <td>{user.full_name}</td>
            </tr>
            <tr>
              <td>Tanggal Lahir</td>
              <td>{user.birth_date}</td>
            </tr>
            <tr>
              <td>Surel</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Telepon</td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>);
}
 
export default User;