function JobPanel({ job }) {

    const formatType = (type) => {
        if (!type) return null
        if (type === "full_time") return "Full-time"
        if (type === "part_time") return "Part-time"
        return type
    }

    return (
        <div className="job-panel">
            <h2>{job.title}</h2>
            <p><b>Company:</b> {job.company.display_name}</p>
            <p><b>Location:</b> {job.location.display_name}</p>
            {job.contract_time && (
                <p><b>Type:</b> {formatType(job.contract_time)}</p>
            )}
            {job.salary_min && (
                <p><b>Salary:</b> ${job.salary_min} - ${job.salary_max}</p>
            )}
            <p>{job.description}</p>
            <a href={job.redirect_url} target="_blank" rel="noopener noreferrer">
                Apply
            </a>
        </div>
    )
}

export default JobPanel