import JobCard from "../components/JobCard";

function Home() {
    const jobs = [
        { id: 1, title: "Team Member", company: "Tim Hortons", location: "Vancouver" },
        { id: 1, title: "Cashier", company: "Walmart", location: "Edmonton" },
        { id: 1, title: "Chef", company: "Cactus Club Cafe", location: "Vancouver" },
    ];

    const handleSearch = () => {

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for jobs..."
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="job-list">
                {jobs.map(job => <JobCard job={job} key={job.id} />)}
            </div>
        </div>
    );
}

export default Home