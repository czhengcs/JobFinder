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
                <h4>{job.company.display_name}</h4>
                <p>{job.location.display_name}</p>
            </div>
        </div>
    );
}

export default JobCard