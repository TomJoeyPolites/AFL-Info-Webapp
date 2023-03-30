import axios from "axios";
import config from "../config.json";

export function getTeamData() {
	//TODO: FOR TESTING
	console.log("...retrieving data from Squiggle...");

	return axios.get(`${config.RootURL}?q=teams;`);
}

export function getSpecTeamData(teamId) {
	console.log("...retrieving data from Squiggle...");
	return axios.get(`${config.RootURL}?q=teams;team=${teamId}`);
}
