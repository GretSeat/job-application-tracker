export default function ProfileWindow() {
  return (
    <div className="profile-window p-3">
      {/* <img src="#" alt="This is Profile Header" />
        <img src="#" alt="This is your Profile Photo" /> */}
      <form className="row gy-2 gx-3 align-items-center p-3" action="#">
        <div className="col-md-6">
          <label className="form-label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-control"
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form-control"
            type="text"
            id="lastname"
            name="lastName"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="userName">
            User Name
          </label>
          <input
            className="form-control"
            type="text"
            id="userName"
            name="userName"
          />
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="headline">
            Headline
          </label>
          <input
            className="form-control"
            type="text"
            id="headline"
            name="headline"
            placeholder="I'm a developer, and I'm proud of it!"
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="Cityville"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="12345"
          />
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="Skills">
            Skills
          </label>
          <input
            className="form-control"
            type="text"
            id="Skills"
            name="Skills"
          />
        </div>

        {/* Emails */}
        {/* Add Ability to have Emails Listed */}
        {/* Add Ability to Add Email */}
        {/* Phones */}
        {/* Add Ability to have Phones Listed */}
        {/* Add Ability to Add Phones */}
        <label htmlFor="aboutMe">About Me</label>
        {/* Find way to add those text editing controls to text area */}
        <div className="input-group">
          <span className="input-group-text">Text Area</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            name="aboutMe"
            id="aboutMe"
          ></textarea>
        </div>
        <div className="form-check form-check-inline form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Legally Authorized to work in USA?
          </label>
        </div>
        <div className="form-check form-check-inline form-switch col-md-6">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Require VISA sponsorship to work in USA?
          </label>
        </div>
      </form>
    </div>
  );
}
