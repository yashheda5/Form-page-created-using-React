import { useState } from "react";
import "./App.css";

function App() {

  const [formData, SetFormData] = useState({
    FirstName: "", LastName: "", email: "", country: "India", StreetAddress: "",
    City: "", State: "", PostalCode: "", comments: false, candidates: false, offers: false,pushNotification:""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    SetFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }
function submitHandler(event){
event.preventDefault();
console.log(formData)
}

  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
        <label htmlFor="FirstName">First Name:</label>
        <br />
        <input className="outline" type="text" name="FirstName" placeholder="Enter first name " value={formData.FirstName}
          onChange={changeHandler} id="FirstName" />
        <br />
        <br />
        <label htmlFor="LastName">Last Name:</label>
        <br />
        <input className="outline" type="text" name="LastName" placeholder="Enter last name " value={formData.LastName}
          onChange={changeHandler} id="LastName" />
        <br />
        <br />
        <label htmlFor="email">Email Address:</label>
        <br />
        <input className="outline" type="email" name="email" placeholder="Enter email " value={formData.email}
          onChange={changeHandler} id="email" />
        <br />
        <br />
        <label htmlFor="country">County: </label>
        <br />
        <select className="outline" id="country" name="country" value={formData.country} onChange={changeHandler}>
          <option name="India">India</option>
          <option name="United States">United States</option>
          <option name="Mexico">Mexico</option>
          <option name="Canada">Canada</option>
        </select>
        <br />
        <br />
        <label htmlFor="StreetAddress">Street Address:</label>
        <br />
        <input className="outline" type="text" name="StreetAddress" placeholder="Enter Street Address " value={formData.StreetAddress}
          onChange={changeHandler} id="StreetAddress" />
        <br />
        <br />
        <label htmlFor="City">City:</label>
        <br />
        <input className="outline" type="text" name="City" placeholder="Enter City  " value={formData.City}
          onChange={changeHandler} id="City" />
        <br />
        <br />
        <label htmlFor="State">State / Province :</label>
        <br />
        <input className="outline" type="text" name="State" placeholder="Enter State  " value={formData.State}
          onChange={changeHandler} id="State" />
        <br />
        <br />
        <label htmlFor="PostalCode">Postal Code / Zip Code :</label>
        <br />
        <input className="outline" type="number" name="PostalCode" placeholder="Enter postal code  " value={formData.PostalCode}
          onChange={changeHandler} id="PostalCode" />
        <br />
        <br />
        <fieldset>
          <legend>By Email</legend>
          <div className="flex flex-row">
            <input checked={formData.comments} onChange={changeHandler} type="checkbox" id="comments" name="comments" />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>
          <div className="flex flex-row">
            <input checked={formData.candidates} onChange={changeHandler} type="checkbox" id="candidates" name="candidates" />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>
          <div className="flex flex-row">
            <input checked={formData.offers} onChange={changeHandler} type="checkbox" id="offers" name="offers" />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>
<br/>
<br/>
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <input type="radio" id="pushEverything" name="pushNotification" value="Everything" onChange={changeHandler} />
          <label htmlFor="pushEverything">Everything</label>
          <br/>
          <input type="radio" id="pushEmail" name="pushNotification" value="Same as email" onChange={changeHandler} />
          <label htmlFor="pushEmail">Same as Email</label>
          <br/>
          <input type="radio" id="pushNothing" name="pushNotification" value="no push notifications" onChange={changeHandler} />
          <label htmlFor="pushNothing">No push Notifications</label>
        </fieldset>
        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>
      </form>
    </div>
  );
}

export default App;
