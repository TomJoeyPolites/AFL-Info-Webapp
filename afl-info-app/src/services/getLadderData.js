import axios from "axios";
import config from "../config.json";

export function getLadderData(ladderYear, ladderRound) {
	//TODO: FOR TESTING
	console.log("...retrieving data from Squiggle...");

	return axios.get(
		`${config.RootURL}?q=standings;year=${ladderYear};round=${ladderRound}`
	);
}
