"use client";
import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
	const [username, setUsername] = useState("");
	const [skills, setSkills] = useState("");
	const [gender, setGender] = useState("");

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

	useEffect(() => {
		setUsername(localStorage.getItem("username"));
		setSkills(localStorage.getItem("skills"));
		setGender(localStorage.getItem("gender"));
	}, []);

	const logout = () => {
		localStorage.clear();
		toast.success("You're logged Out successfully", toastOptions);
		window.location.reload();
	};

	return (
		<div className="registerMain">
			<div className="homeContainer">
				{username ? (
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div>
							<h1>User Info</h1>
							<div className="infoItem">Name: {username}</div>
							<div className="infoItem">Skill: {skills}</div>
							<div className="infoItem">Gender: {gender}</div>
						</div>
						<button type="button" className="logoutBtn" onClick={logout}>
							Log Out
						</button>
					</div>
				) : (
					<div className="notLoggedIn">User Not logged In</div>
				)}
			</div>
		</div>
	);
}
