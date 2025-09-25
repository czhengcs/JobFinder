function JobCard({ job }) {

    function onSaveClick() {
        alert("clicked")
    }

    return (
        <div className="job-card">
            <div className="job-overlay">
                <button className={`save-btn`} onClick={onSaveClick}>
                    ★
                </button>
            </div>
            <div className="job-title">
                <h3>{job.title}</h3>
                <h4>{job.company}</h4>
                <p>{job.location}</p>
            </div>
        </div>
    );
}

export default JobCard