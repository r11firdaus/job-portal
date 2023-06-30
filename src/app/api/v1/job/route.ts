import job from "@/../dummy/jobs.json"
import { NextResponse } from "next/server";

export function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('job_id')
  
  // if (req.method !== 'GET') {
  //   return new Response('Only', {
  //     status: 405,
  //   })
  // }

  const jobData = id ? job.data[parseInt(id)] : job.data
  console.log(jobData)

  return NextResponse.json({ data: jobData })
}
