import { cache } from "react";

// dummy
import Jobs from "@/types/Jobs";

export const getJob = cache(async (id: number): Promise<Jobs> => {
  const fetchAPI = await fetch(`/api/v1/job?job_id=${id}`)
  const parseJSON = await fetchAPI.json()
  
  const jobDetail = parseJSON.data
  return jobDetail
})