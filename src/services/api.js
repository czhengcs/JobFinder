const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getJobs = async () => {
    const response = await fetch(`${BASE_URL}?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=20`);
    const data = await response.json();
    return data.results;
};

export const searchJobs = async (query) => {
    const response = await fetch(`${BASE_URL}?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=20&what=${encodeURIComponent(
        query
    )}`
    );
    const data = await response.json();
    return data.results;
};