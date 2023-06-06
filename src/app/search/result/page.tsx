'use client'

import JobCard from "@/component/JobCard";
import Navbar from "@/component/Navbar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Jobs from "@/types/Jobs";

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

  const [data, setData] = useState<Jobs[]>([])
  const [jobDetail, setJobDetail] = useState<Jobs>({
    job_title: '',
    company_name: '',
    salary_range: '',
    description: ''
  })
  
  useEffect(() => {
    (async () => {
      const fetch = JSON.stringify(jobsData);
      const dataParsed: Jobs[] = await JSON.parse(fetch)?.data
      setData(dataParsed)
      setSettings({
        isLoading: false,
        screenSize: window.innerWidth
      })
    })()
  }, []);

  const viewJob = (data: any, job_id: number) => {
    if (settings.screenSize >= 768) setJobDetail(data)
    else window.open(`/job/${job_id}/`, '_blank')
  }

  return (<>
    <Navbar paramsObj={paramsObj} />

    <div className="container p-2">
      {paramsObj.jobText !== '' && <div>Pencarian untuk <b>'{paramsObj.jobText}'</b></div>}
    </div>

    { !settings.isLoading &&
      <section className="mt-4 mx-2">
        <aside className="col-12 col-lg-3 col-md-4">
          { data.map((e: any, i) => (
            <div key={i} onClick={() => viewJob(e, i)}><JobCard title={e.job_title} subtitle={e.company_name} content={`Rp. ${e.salary_range}`} /></div>
          ))

          }
        </aside>
        { settings.screenSize >= 768 &&
          <main id="job-mini-detail">
            { jobDetail.job_title.trim() !== '' &&
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