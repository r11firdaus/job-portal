'use client'

import Navbar from "@/component/Navbar";
import { useEffect } from "react";

const EditUser = ({ params }: { params: { user_id: number } }) => {
  useEffect(() => {
    (async () => {
      // const fetchUser = await fetch('https://restcountries.com/v3.1/all')
      // console.log(await fetchUser.json())
    })()  
    console.log(params.user_id)
  }, []);

  const submitEdit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData)
    const formDate = new Date(data.user_born_date as string)

    const newDate = new Date('2023-06-01')
    console.log(newDate < formDate)
  }

  return (<>
    <Navbar />
    <form onSubmit={(e) => submitEdit(e)} className="container my-4">
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="mb-3">
            <label htmlFor="user_fullname" className="form-label">Nama Lengkap</label>
            <input type="text" className="form-control border-success" name="user_fullname" />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
        </div>


        <div className="col-md-12 col-lg-6">
          <div className="mb-3">
            <label htmlFor="user_fullname" className="form-label">Nama Lengkap</label>
            <input type="text" className="form-control border-success" name="user_fullname" />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="mb-3">
            <label htmlFor="user_fullname" className="form-label">Nama Lengkap</label>
            <input type="text" className="form-control border-success" name="user_fullname" />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="mb-3">
            <label htmlFor="user_fullname" className="form-label">Nama Lengkap</label>
            <input type="text" className="form-control border-success" name="user_fullname" />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
        </div>


        <div className="col-md-12 col-lg-6">
          <div className="mb-3">
            <label htmlFor="user_born_date" className="form-label">Tanggal Lahir</label>
            <input type="date" className="form-control border-success" name="user_born_date" max={`${new Date().toJSON().slice(0, 10)}`} />
          </div>
        </div>

        <div className="col-md-12 col-lg-6">
          <div className="mb-3">
            <label htmlFor="user_fullname" className="form-label">Nama Lengkap</label>
            <input type="text" className="form-control border-success" name="user_fullname" />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
        </div>
        
      </div>

      <button type="submit" className="btn btn-success">Simpan</button>
    </form>
  </>);
}
 
export default EditUser;