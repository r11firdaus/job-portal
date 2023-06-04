'use client'

import Navbar from "@/component/Navbar";
import { useSearchParams } from "next/navigation";

const Result = () => {
  const urlParams = useSearchParams()
  const paramsObj = {
    jobText: urlParams.get('jobText')?.trim() || '',
    experience: urlParams.get('experience')?.split(',') || [],
    minSalary: urlParams.get('minSalary') || '',
    jobType: urlParams.get('jobType')?.split(',') || []
  }

  return (<>
    <Navbar paramsObj={paramsObj} />

    <div className="container p-2">
      {paramsObj.jobText !== '' && <div>Pencarian untuk <b>'{paramsObj.jobText}'</b></div>}
    </div>
  </>);
}
 
export default Result;