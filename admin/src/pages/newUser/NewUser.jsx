import React from "react";
import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Jim" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Jim smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="jimsmith@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+123 456 789" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="43 Rue De La Skool Paris, France" />
        </div>
        <div className="newUserItem">
          <div className="newUserGender">
            <label>Gender</label>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </form>
      <button className="newUserButton">Create</button>
    </div>
  );
};

export default NewUser;
