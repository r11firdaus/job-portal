'use client'

import toParams from "@/lib/toParams";
import { useRouter, useSearchParams } from "next/navigation";

const Result = () => {
  const urlParams = useSearchParams()
  const router = useRouter()
  const paramsObj = {
    jobText: urlParams.get('jobText')?.trim() || '',
    experience: urlParams.get('experience'),
    minSalary: urlParams.get('minSalary'),
    jobType: urlParams.get('jobType')
  }

  return (<>
    <div className="p-3 mb-5 pb-5">
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
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
        <input type="text" className="form-control" placeholder="Nama perusahaan, pekerjaan, dll." defaultValue={paramsObj.jobText} onClick={() => router.push(`/search${toParams(paramsObj)}`)} />
      </div>

      {paramsObj.jobText !== '' && <div>Pencarian untuk <b>'{paramsObj.jobText}'</b></div>}
    </div>
  </>);
}
 
export default Result;