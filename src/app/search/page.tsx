'use client'

import CheckBox from "@/component/CheckBox";
import toParams from "@/lib/toParams";
import SearchJobQueryTypes from "@/types/SearchJobQueryTypes";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  const router = useRouter()
  const urlParams = useSearchParams()

  const [searchQuery, setSearchQuery] = useState<SearchJobQueryTypes>({
    jobText: '',
    experience: [],
    minSalary: '',
    jobType: []
  })

  useEffect(() => {
    setSearchQuery({
      jobText: urlParams.get('jobText') || '',
      experience: urlParams.get('experience')?.split(',') as string[],
      minSalary: urlParams.get('minSalary') || '',
      jobType: urlParams.get('jobType')?.split(',') as string[]
    })
  }, []);

  const searchJob = (): void => {
    const jobText = (document.getElementById('jobText') as HTMLInputElement).value;
    const minSalary = (document.getElementById('minSalary') as HTMLInputElement).value;
    const experienceElement = Array.from(document.getElementsByClassName('experience')) as HTMLInputElement[]
    const jobTypeElement = Array.from(document.getElementsByClassName('jobType')) as HTMLInputElement[]

    let experienceVal: string[] = []
    experienceElement.map(e => e.checked && experienceVal.push(e.value))

    let jobTypeVal: string[] = []
    jobTypeElement.map(e => e.checked && jobTypeVal.push(e.value))
    
    let currentQuery = {
      jobText,
      minSalary,
      experience: experienceVal,
      jobType: jobTypeVal
    }

    router.push(`/search/result${toParams(currentQuery)}`)
  }

  return (<>
    <div className="p-3 mb-5 pb-5">
      <div className="input-group mb-3">
        <span className="input-group-text border-success text-light bg-success" id="basic-addon1">
          <svg width="20" height="20" className="DocSearch-Search-Icon" viewBox="0 0 20 20">
            <path
              d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
              stroke="currentColor"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round">
            </path>
          </svg>
        </span>
        <input type="search" className="form-control border-success" defaultValue={searchQuery.jobText} placeholder="Nama perusahaan, pekerjaan, dll." id="jobText" />
      </div>

      <fieldset className="mb-3">
        <legend>Pengalaman</legend>
        <CheckBox value="0" id={"0-year"} caption={"< 1 tahun"} defCheck={urlParams.get('experience')?.split(',').includes('0') || false} addClass={"experience"} />
        <CheckBox value="1" id={"1-year"} caption={"1 tahun"} defCheck={urlParams.get('experience')?.split(',').includes('1') || false} addClass={"experience"} />
        <CheckBox value="2" id={"2-year"} caption={">= 2 tahun"} defCheck={urlParams.get('experience')?.split(',').includes('2') || false} addClass={"experience"} />
      </fieldset>

      <div className="input-group mb-3">
        <span className="input-group-text text-light bg-success border-success">Rp.</span>
        <input type="text" className="form-control border-success" aria-label="Amount (to the nearest dollar)" defaultValue={searchQuery.minSalary} id="minSalary" placeholder="Gaji minimal, contoh 3000000"/>
      </div>

      <fieldset className="mb-3">
        <legend>Tipe Pekerjaan</legend>
        <CheckBox value="apprentice" caption={"Magang"} defCheck={urlParams.get('jobType')?.split(',').includes('apprentice') || false} addClass={"jobType"} />
        <CheckBox value="fulltime" caption={"Penuh Waktu"} defCheck={urlParams.get('jobType')?.split(',').includes('fulltime') || false} addClass={"jobType"} />
        <CheckBox value="parttime" caption={"Paruh Waktu"} defCheck={urlParams.get('jobType')?.split(',').includes('parttime') || false} addClass={"jobType"} />
      </fieldset>

    </div><br />
    <div className="fixed-bottom p-3 d-grid gap-2 bg-light">
      <button className="btn btn-success" type="submit" onClick={() => searchJob()}>Cari</button>
      <button className="btn btn-outline-success" type="button" onClick={() => router.back()}>Kembali</button>
    </div>
  </>);
}
 
export default Search;