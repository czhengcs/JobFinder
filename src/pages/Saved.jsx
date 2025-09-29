import { useJobContext } from "../contexts/JobContext"
import JobCard from "../components/JobCard"

function Saved() {
    const { saved } = useJobContext();

    if (saved) {
        return (
            <div className="saved">
                <h2>Your Saved Jobs</h2>
                <div className="job-list">
                    {saved.map((job) => (
                        <JobCard job={job} key={job.id} />
                    ))}
                </div>
            </div>
        );
    }

    return <div className="saved-empty">
        <h2>No Saved Jobs Yet</h2>
        <p>Start saving jobs and they will appear here</p>
    </div>
}

export default Saved