'use client'

import JobCard from "@/component/JobCard";
import Navbar from "@/component/Navbar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Result = () => {
  const urlParams = useSearchParams()
  const paramsObj = {
    jobText: urlParams.get('jobText')?.trim() || '',
    experience: urlParams.get('experience')?.split(',') || [],
    minSalary: urlParams.get('minSalary') || '',
    jobType: urlParams.get('jobType')?.split(',') || []
  }

  const [isLoading, setIsLoading] = useState(true)
  const screenSize = window.innerWidth;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, []);

  return (<>
    <Navbar paramsObj={paramsObj} />

    <div className="container p-2">
      {paramsObj.jobText !== '' && <div>Pencarian untuk <b>'{paramsObj.jobText}'</b></div>}
    </div>

    { !isLoading &&
      <section className="mt-4 mx-2">
        <aside className="col-12 col-lg-3 col-md-4">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </aside>
        { screenSize >= 768 &&
          <main id="job-mini-detail">
            <JobCard yesBtn="lamar" noBtn="Simpan" />
          </main>
        }
      </section>
    }
  </>);
}
 
export default Result;