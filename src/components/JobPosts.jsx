export default function JobPosts() {
  return (
    <div className="job-table-container">
      <table className="job-table">
        <thead className="job-table-header">
          <tr>
            <th>Job Position</th>
            <th>Company</th>
            <th>Min. Salary</th>
            <th>Max Salary</th>
            <th>Location</th>
            <th>Status</th>
            <th>Date Posted</th>
            <th>Date Saved</th>
            <th>Date Applied</th>
            <th>Follow Up</th>
            <th>Excitement</th>
          </tr>
        </thead>
        <tbody className="job-table-body">
          {/* Dummy Info */}
          <tr>
            <td>Job Guy</td>
            <td>Company Name</td>
            <td>10k</td>
            <td>20k</td>
            <td>Home</td>
            <td>N/A</td>
            <td>Applied</td>
            <td>Today</td>
            <td>N/A</td>
            <td>Yes</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Jack of All Trades</td>
            <td>Best Company</td>
            <td>50k</td>
            <td>100k</td>
            <td>St Petersburg</td>
            <td>Applying</td>
            <td>2 Days Ago</td>
            <td>N/A</td>
            <td>Yesterday</td>
            <td>No</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
