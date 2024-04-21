'use client';
import { useState } from "react";
import "./page.css";

const Register = () => {
  const userNameError = "Username should be 4-32 characters long";
  const passwordError = "Password must be alphanumeric with at least one special character.";

  const [errorMsg, setErrorMsg] = useState("");
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState("");

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
		e.preventDefault()
	}

  const resetForm = () => {
    setUsernameFocus(false)
    setPasswordFocus(false)
		setValues({
      username: "",
      password: "",
    });
    setGender("");
    setSkills("");
    setErrorMsg("");
	}

  const handleSubmit = (e) => {
    e.preventDefault();
    if(gender===""){
      setErrorMsg("Please select a gender.");
      return;
    }
    if (!skills) {
			setErrorMsg("Please select at least one skill.")
			return;
		}
    console.log(values["username"]);
    console.log(values["password"]);
    console.log(skills);
    console.log(gender);
  };

  return (
    <div className="registerMain">
      <form onSubmit={handleSubmit}>
        <br/>
        <h1>User data</h1>
        <div className="formInput">

        <label>Username</label>
        <input
          name= "username"
          type= "text"
          placeholder= "Username"
          className="username"
          required
          value={values["username"]}
          pattern="^.{4,32}$"
          onChange={onChange}
          onFocus={() => setUsernameFocus(true)}
        />
        {usernameFocus && <span>{userNameError}</span>}

        <label>Password</label>
        <input
          name= "password"
          type= "password"
          placeholder= "Password"
          value={values["password"]}
          required
          pattern="^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$"
          onChange={onChange}
          onFocus={() => setPasswordFocus(true)}
        />
        {passwordFocus && <span>{passwordError}</span>}

        <label>Skills:</label>
        <select id="skills" value={skills} onChange={(e) => setSkills(e.target.value)} required>
          <option value="">Select a skill</option>
          <option value="JS">JavaScript</option>
          <option value="React">React</option>
          <option value="API">API</option>
          <option value="Backend">Backend</option>
        </select>
        </div>

        <label>Gender:</label>
					<br />
					<input
						type="radio"
						name="gender"
						value="male"
						id="male"
						checked={gender === "male"}
						onChange={() => setGender("male")}
					/>
					<label className="radioLabel" htmlFor="male">Male</label>
          <br />

					<input
						type="radio"
						name="gender"
						value="female"
						id="female"
						checked={gender === "female"}
						onChange={() => setGender("female")}
					/>
					<label className="radioLabel" htmlFor="female">Female</label>
          <br />

					<input
						type="radio"
						name="gender"
						value="other"
						id="other"
						checked={gender === "other"}
						onChange={() => setGender("other")}
					/>
					<label className="radioLabel" htmlFor="other">Other</label>
					<br />

          <div className="errorMsg">{errorMsg}</div>

          <div className="btnContainer">
            <button type="submit" className="submitBtn">Submit</button>
            <button type="button" className="resetBtn" onClick={resetForm}>Reset</button>
          </div>
          
      </form>
    </div>
  );
};

export default Register;