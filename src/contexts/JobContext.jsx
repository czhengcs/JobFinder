import { createContext, useState, useContext, useEffect } from "react";

const JobContext = createContext()

export const useJobContext = () => useContext(JobContext)

export const JobProvider = ({ children }) => {
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        const storedSavs = localStorage.getItem("saved")
        if (storedSavs) setSaved(JSON.parse(storedSavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('saved', JSON.stringify(saved))
    }, [saved])

    const addToSaved = (job) => {
        setSaved(prev => [...prev, job]);
    };

    const removeFromSaved = (jobId) => {
        setSaved(prev => prev.filter(job => job.id !== jobId));
    };

    const isSaved = (jobId) => {
        return saved.some(job => job.id === jobId)
    }

    const value = {
        saved,
        addToSaved,
        removeFromSaved,
        isSaved
    };

    return <JobContext.Provider value={value}>
        {children}
    </JobContext.Provider>
}