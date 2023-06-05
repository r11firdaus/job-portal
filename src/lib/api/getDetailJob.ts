import { cache } from "react";

// dummy
import jobsData from "@/dummy/jobs.json";

export const getJob = cache(async (id: number) => {
  const jobJSON = JSON.stringify(jobsData)
  const jobParsed = await JSON.parse(jobJSON)?.data
  
  const jobDetail = jobParsed[id]
  return jobDetail
})