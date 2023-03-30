import axios from "axios";
import config from "../config.json";

export function getGamesData(gameYear, gameRound) {
	//TODO: FOR TESTING
	console.log("...retrieving data from Squiggle...");

	return axios.get(
		`${config.RootURL}?q=games;year=${gameYear};round=${gameRound}`
	);
}

export function getTeamGames(year, teamId) {
	//TODO: FOR TESTING
	console.log("...retrieving data from Squiggle...");

	return axios.get(`${config.RootURL}?q=games;year=${year};team=${teamId}`);
}
