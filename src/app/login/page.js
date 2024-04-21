"use client";
import React from "react";
import { useState, useEffect } from "react";
import "./page.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Register = () => {
	const usersCollectionRef = collection(db, "users");
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const data = await getDocs(usersCollectionRef);
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		fetchUsers();
	}, []);

	const userNameError = "Username should be 4-32 characters long";
	const passwordError = "Password must be alphanumeric with at least one special character.";

	const [usernameFocus, setUsernameFocus] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const [values, setValues] = useState({
		username: "",
		password: "",
	});

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
		e.preventDefault();
	};

	const toastOptions = {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: "colored",
	};

	const resetForm = () => {
		setUsernameFocus(false);
		setPasswordFocus(false);
		setValues({
			username: "",
			password: "",
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const user = users.find((item) => item.username === values["username"] && item.password === values["password"]);

		if (user) {
			toast.info("You're logged in successfully", toastOptions);
			localStorage.setItem("username", user.username);
			localStorage.setItem("skills", user.skills);
			localStorage.setItem("gender", user.gender);
			window.location.href = "/";
		} else {
			toast.error("Please use correct credentials", toastOptions);
		}
	};

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

				<div className="loginBtnContainer">
					<button type="submit" className="submitBtn">
						Login
					</button>
					<button type="button" className="resetBtn" onClick={resetForm}>
						Reset
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
