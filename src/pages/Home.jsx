import JobCard from "../components/JobCard";
import JobPanel from "../components/JobPanel";
import { useState, useEffect } from "react";
import { searchJobs, getJobs } from "../services/api";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState(null);

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

    useEffect(() => {
        if (jobs.length > 0 && !selectedJob) {
            setSelectedJob(jobs[0]);
        }
    }, [jobs]); 

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchJobs(searchQuery)
            setJobs(searchResults)
            setSelectedJob(null)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search jobs...")
        } finally {
            setLoading(false)
        }
    };
    
    const handleSelectJob = (job) => {
        setSelectedJob(job);
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search jobs in Canada..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">🔍︎</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            <div className="home-content">
                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <div className="jobs-container">
                        <div className="job-list">
                            {jobs.map((job) => (
                                <JobCard job={job} key={job.id} onClick={() => handleSelectJob(job)}/>
                            ))}
                        </div>
                        <div className="job-panel-container">
                            {selectedJob && <JobPanel job={selectedJob} />}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home