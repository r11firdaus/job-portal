'use client'

import JobCard from "@/component/JobCard";
import Navbar from "@/component/Navbar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// dummy
import jobsData from "@/dummy/jobs.json";

const Result = () => {
  const urlParams = useSearchParams()
  const paramsObj = {
    jobText: urlParams.get('jobText')?.trim() || '',
    experience: urlParams.get('experience')?.split(',') || [],
    minSalary: urlParams.get('minSalary') || '',
    jobType: urlParams.get('jobType')?.split(',') || []
  }

  const [settings, setSettings] = useState({
    isLoading: true,
    screenSize: 0
  })

  const [data, setData] = useState([])
  const [jobDetail, setJobDetail] = useState<any>({})
  
  useEffect(() => {
    (async () => {
      const fetch = JSON.stringify(jobsData);
      const dataParsed = await JSON.parse(fetch)
      setData(dataParsed.data)
      setSettings({
        isLoading: false,
        screenSize: window.innerWidth
      })
    })()
  }, []);

  return (<>
    <Navbar paramsObj={paramsObj} />

    <div className="container p-2">
      {paramsObj.jobText !== '' && <div>Pencarian untuk <b>'{paramsObj.jobText}'</b></div>}
    </div>

    { !settings.isLoading &&
      <section className="mt-4 mx-2">
        <aside className="col-12 col-lg-3 col-md-4">
          { data.map((e: any) => (
            <div onClick={() => setJobDetail(e)}><JobCard title={e.job_title} subtitle={e.company_name} content={`Rp. ${e.salary_range}`} /></div>
          ))

          }
        </aside>
        { settings.screenSize >= 768 &&
          <main id="job-mini-detail">
            { jobDetail.job_title &&
              <JobCard
                yesBtn="lamar"
                noBtn="Simpan"
                title={`${jobDetail.job_title} (Rp. ${jobDetail.salary_range})`}
                subtitle={jobDetail.company_name}
                content={jobDetail.description}
              />
            }
          </main>
        }
      </section>
    }
  </>);
}
 
export default Result;