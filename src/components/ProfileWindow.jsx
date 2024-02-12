export default function ProfileWindow() {
  return (
    <div>
      <header>
        <span>Basic Info</span>
        <span>Import</span>
        <button>Update</button>
      </header>
      <main>
        <img src="#" alt="This is Profile Header" />
        <img src="#" alt="This is your Profile Photo" />
        <form action="#">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastname" name="lastName" />
          <label htmlFor="headline">Headline</label>
          <input type="text" id="headline" name="headline" />
          <label htmlFor="currentLocation">Current Location</label>
          <input type="text" id="currentLocation" name="currentLocation" />

          <label htmlFor="userName">User Name</label>
          <input type="text" id="userName" name="userName" />
          <label htmlFor="Skills">Skills</label>
          <input type="text" id="Skills" name="Skills" />
          {/* Emails */}
          {/* Add Ability to have Emails Listed */}
          {/* Add Ability to Add Email */}
          {/* Phones */}
          {/* Add Ability to have Phones Listed */}
          {/* Add Ability to Add Phones */}
          <label htmlFor="aboutMe">About Me</label>
          {/* Find way to add those text editing controls to text area */}
          <textarea name="aboutMe" id="aboutMe" cols="30" rows="10"></textarea>
        </form>
      </main>
    </div>
  );
}
