import JobCard from "@/component/JobCard";
import Navbar from "@/component/Navbar";
import { getJob } from "@/lib/api/getDetailJob";
import Jobs from "@/types/Jobs";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params, searchParams }: { params: any, searchParams: { [key: string]: string | string[] | undefined } },
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const jobDetail = await getJob(params.job_id)

  return {
    title: jobDetail.job_title
  }
}

const Detail = async ({ params }: { params: any }) => {
  const jobDetail: Jobs = await getJob(params.job_id)

  return (<>
    <Navbar />
    <JobCard
      yesBtn="lamar"
      noBtn="Simpan"
      yesUrl={`/job/${params.job_id}/apply`}
      title={`${jobDetail.job_title} (Rp. ${jobDetail.salary_range})`}
      subtitle={jobDetail.company_name}
      content={jobDetail.description}
    />
  </>);
}
 
export default Detail;
