import { useJobContext } from "../contexts/JobContext"
import "../css/JobCard.css" 

function JobCard({ job }) {
    const { isSaved, addToSaved, removeFromSaved } = useJobContext();
    const saved = isSaved(job.id);

    function onSaveClick(e) {
        e.preventDefault();
        if (saved) removeFromSaved(job.id)
        else addToSaved(job)
    }

    return (
        <div className="job-card">
            <div className="job-overlay">
                <button className={`save-btn  ${saved ? "saved" : ""}`} onClick={onSaveClick}>
                    ★
                </button>
            </div>
            <div className="job-title">
                <h3>{job.title}</h3>
                <h4>{job.company.display_name}</h4>
                <p>{job.location.display_name}</p>
            </div>
        </div>
    );
}

export default JobCard