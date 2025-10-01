import { useJobContext } from "../contexts/JobContext"
import JobCard from "../components/JobCard"
import JobPanel from "../components/JobPanel";
import { useState, useEffect } from "react";
import "../css/Saved.css"

function Saved() {
    const { saved } = useJobContext();
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        if (saved.length > 0 && !selectedJob) {
            setSelectedJob(saved[0]);
        }
    }, [saved, selectedJob]);

    const handleSelectJob = (job) => {
        setSelectedJob(job);
    }

    if (saved.length > 0) {
        return (
            <div className="saved">
                <h1>Your Saved Jobs</h1>
                <div className="jobs-container">
                    <div className="job-list">
                        {saved.map((job) => (
                            <JobCard job={job} key={job.id} onClick={() => handleSelectJob(job)} />
                        ))}
                    </div>
                    <div className="job-panel-container">
                        {selectedJob && <JobPanel job={selectedJob} />}
                    </div>
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