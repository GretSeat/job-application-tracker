export default function Contact() {
  return (
    <div className="card" style={{ width: 180 }}>
      <img src="" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">CONTACT NAME</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Location</li>
        <li className="list-group-item">Email</li>
        <li className="list-group-item">Phone Number</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          LinkedIn
        </a>
        <a href="#" className="card-link">
          Facebook
        </a>
      </div>
    </div>
  );
}
