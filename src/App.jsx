import JobCard from "./components/JobCard";

function App() {

  return (
    <>
      <JobCard job={{ title: "Team Member", company: "Tim Hortons", location: "Vancouver" }} />
    </>
  );
}

export default App;