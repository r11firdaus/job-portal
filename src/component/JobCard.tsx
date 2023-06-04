interface JobCard {
  yesBtn?: string,
  noBtn?: string,
  title?: string,
  subtitle?: string,
  content?: string
}

const JobCard = ({ yesBtn, noBtn, title, subtitle, content }: JobCard) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="mb-3">
          <h5 className="card-title">FrontEnd Developer</h5>
          <b className="text-secondary">Tesla Motors</b>
        </div>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        { yesBtn && <a href="#" className="btn btn-success mx-1">{yesBtn}</a> }
        { noBtn && <a href="#" className="btn btn-secondary mx-1">{noBtn}</a> }
      </div>
    </div>
  );
}
 
export default JobCard;