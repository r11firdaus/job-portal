'use client'

import JobCard from "@/component/JobCard";
import Navbar from "@/component/Navbar";
import { getJob } from "@/lib/api/getDetailJob";
import Jobs from "@/types/Jobs";
import { useEffect, useState } from "react";

const question = [
  '1. APka fdgkfd fgdf ?',
  '2. lsdfkv xdg?',
  '3. ksdjfkds?',
  '4. 1+1 berapa ?',
  '5. oasjn bncvm gfhk ?'
]

const Apply = ({ params }: { params: any }) => {
  const [jobDetail, setjobDetail] = useState<Jobs>();
  
  useEffect(() => {
    (async () => {
      const jobAPI =  await getJob(params.job_id)
      console.log(jobAPI)
      setjobDetail(jobAPI)
    })()
  }, []);

  const submitQuestion = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData) as unknown as Jobs
    // const formDate = new Date(data.birth_date as string)
    // const todayDate = new Date(Date.now())

    // if (todayDate < formDate) return console.log('tanggal tdk valid')
    console.log(data)
  }

  return (<>
    <Navbar />
    <JobCard
      title= 'Pertanyaan dari perusahaan.'
      subtitle={`Anda perlu menjawab ${5} pertanyaan untuk pekerjaan ini.`}
    >
      <form onSubmit={(e) => submitQuestion(e)} className="container my-4 needs-validation" noValidate>
        {question.map((e: string, i) => (
          <div className="mt-3" key={i}>
            <span>{e}</span>
            <input type="text" className="form-control" name={`${i + 1}`} />
          </div>
        ))}

        <button className="btn btn-success mt-2" type="submit">Kirim</button>
      </form>
    </JobCard>
  </>);
}
 
export default Apply;