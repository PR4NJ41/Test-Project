"use client"
import { useState } from "react"
import "./page.css"

const Register = () => {
	const userNameError = "Username should be 4-32 characters long"
	const passwordError = "Password must be alphanumeric with at least one special character."

	const [usernameFocus, setUsernameFocus] = useState(false)
	const [passwordFocus, setPasswordFocus] = useState(false)

	const [values, setValues] = useState({
		username: "",
		password: "",
	})

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value })
		e.preventDefault()
	}

	const resetForm = () => {
		setUsernameFocus(false)
		setPasswordFocus(false)
		setValues({
			username: "",
			password: "",
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		console.log(values["username"])
		console.log(values["password"])
	}

	return (
		<div className="registerMain">
			<form onSubmit={handleSubmit}>
				<br />
				<h1>Login</h1>
				<div className="formInput">
					<label>Username</label>
					<input name="username" type="text" placeholder="Username" className="username" required value={values["username"]} pattern="^.{4,32}$" onChange={onChange} onFocus={() => setUsernameFocus(true)} />
					{usernameFocus && <span>{userNameError}</span>}

					<label>Password</label>
					<input name="password" type="password" placeholder="Password" value={values["password"]} required pattern="^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$" onChange={onChange} onFocus={() => setPasswordFocus(true)} />
					{passwordFocus && <span>{passwordError}</span>}
				</div>

				<div className="btnContainer">
					<button type="submit" className="submitBtn">
						Login
					</button>
					<button type="button" className="resetBtn" onClick={resetForm}>
						Reset
					</button>
				</div>
			</form>
		</div>
	)
}

export default Register
