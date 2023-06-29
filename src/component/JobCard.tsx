import Link from "next/link";
import { ReactNode } from "react";

interface JobCard {
  yesBtn?: string,
  noBtn?: string,
  yesUrl?: string,
  noUrl?: string,
  title?: string,
  subtitle?: string,
  content?: string
  children?: ReactNode
}

const JobCard = ({ yesBtn, noBtn, yesUrl, noUrl, title, subtitle, content, children }: JobCard) => {
  return (
    <div className="card my-2">
      <div className="card-body">
        <div className="mb-3">
          <h5 className="card-title text-success">{title}</h5>
          <b className="text-secondary">{subtitle}</b>
        </div>
        <p className="card-text">{content}</p>
        { yesBtn && <Link href={yesUrl || '#'} className="btn btn-success mx-1">{yesBtn}</Link> }
        { noBtn && <Link href={noUrl || '#'} className="btn btn-outline-success mx-1">{noBtn}</Link> }
        { children }
      </div>
    </div>
  );
}
 
export default JobCard;