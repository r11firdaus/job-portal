import Jobs from "./Jobs";

interface JobExperience extends Jobs {
  date_start: string,
  date_end: string
}[]

export default JobExperience