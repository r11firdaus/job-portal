'use client'

import Navbar from "@/component/Navbar";
import JobExperience from "@/types/JobExperience";
import User from "@/types/User";
import { useEffect, useState } from "react";

const EditUser = ({ params }: { params: { user_id: number } }) => {
  const [userData, setuserData] = useState<User>();
  // const [jobExperience, setjobExperience] = useState<JobExperience>();

  useEffect(() => {
    formValidation();
    (async () => {
      const fetchUser: User = {
        full_name: "Reza Firdaus",
        email: "azerus98@gmail.com",
        phone: "+6281280621197",
        birth_date: "1998-10-11"
      }

      setuserData(fetchUser)
    })()  
    // console.log(params.user_id)
  }, []);

  const formValidation = () => {
    const forms = document.querySelectorAll('.needs-validation') as unknown as HTMLInputElement[]

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }

  const submitEdit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData) as unknown as User
    const formDate = new Date(data.birth_date as string)
    const todayDate = new Date(Date.now())

    if (todayDate < formDate) return console.log('tanggal tdk valid')
    console.log(data)
  }

  return (<>
    <Navbar />
    <form onSubmit={(e) => submitEdit(e)} className="container my-4 needs-validation" noValidate>
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="mb-3">
            <label htmlFor="user_fullname" className="form-label">Nama Lengkap</label>
            <input type="text" className="form-control border-success" defaultValue={userData?.full_name} name="full_name" required pattern="^[^\s].+[^\s][A-Za-z -]$" />
            <div className="invalid-feedback">
              Nama wajib diisi dengan huruf
            </div>
          </div>
        </div>

        <div className="col-md-12 col-lg-6">
          <div className="mb-3">
            <label htmlFor="user_fullname" className="form-label">Surel</label>
            <input type="email" className="form-control border-success" name="email" defaultValue={userData?.email} required pattern="^[^ ].+[^ ]$" />
            <div className="invalid-feedback">
              Contoh: emailsaya@mail.com
            </div>
          </div>
        </div>

        <div className="col-md-12 col-lg-6">
          <div className="mb-3">
            <label htmlFor="user_fullname" className="form-label">Telepon</label>
            <input type="tel" maxLength={14} className="form-control border-success" name="phone" defaultValue={userData?.phone} required pattern="[+][0-9]{2}[0-9]{5,11}" />
            <div className="invalid-feedback">
              {`Contoh: +6212344356. (Minimal 5 dan maksimal 11 angka setelah +62)`}
            </div>
          </div>
        </div>

        <div className="col-md-12 col-lg-6">
          <div className="mb-3">
            <label htmlFor="user_born_date" className="form-label">Tanggal Lahir</label>
            <input type="date"
              className="form-control border-success"
              defaultValue={userData?.birth_date}
              name="birth_date"
              max={`${new Date().toJSON().slice(0, 10)}`}
              required pattern="^[^ ].+[^ ]$"
            />
            <div className="invalid-feedback">
              Mohon periksa tanggal kelahiran anda
            </div>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-success">Simpan</button>
    </form>
  </>);
}
 
export default EditUser;