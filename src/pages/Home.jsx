import JobCard from "../components/JobCard";
import { useState, useEffect } from "react";
import { searchJobs, getJobs } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

    useEffect(() => {
        const loadJobs = async () => {
            try {
                const topJobs = await getJobs();
                setJobs(topJobs);
            } catch (err) {
                console.log(err);
                setError("Failed to load jobs...")
            }
            finally {
                setLoading(false)
            }
        }

        loadJobs()
    }, [])

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for jobs..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="job-list">
                    {jobs.map((job) => (
                        <JobCard job={job} key={job.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home