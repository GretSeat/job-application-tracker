import JobPosts from "../components/JobPosts";
import Tracker from "../components/Tracker";

const JobBoard = () => {
  return (
    <div className="job-board">
      <h1>My Jobs</h1>
      <Tracker />
      <div className="job-container">
        <JobPosts />
      </div>
    </div>
  );
};

export default JobBoard;
