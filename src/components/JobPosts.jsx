export default function JobPosts() {
  return (
    <div className="job-table-container">
      <table className="job-table table table-hover table-striped">
        <thead className="job-table-header">
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Job Position</th>
            <th scope="col">Min. Salary</th>
            <th scope="col">Max Salary</th>
            <th scope="col">Location</th>
            <th scope="col">Status</th>
            <th scope="col">Date Posted</th>
            <th scope="col">Date Saved</th>
            <th scope="col">Date Applied</th>
            <th scope="col">Follow Up</th>
            <th scope="col">Excitement</th>
          </tr>
        </thead>
        <tbody className="job-table-body">
          {/* Dummy Info */}
          <tr>
            <td>Company Name</td>
            <td>Job Guy</td>
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
            <td>Best Company</td>
            <td>Jack of All Trades</td>
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
