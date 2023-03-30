import axios from "axios";

//! instance of SqiggleAPI for standings
const ladderApi = axios.create({
	baseURL: "https://api.squiggle.com.au",
});

export const getLadder = async (ladder) => {
	console.log("getting ladder");
	let response = await ladderApi.get("/?q=standings", ladder);
	return response.data;
};

export const updateLadderYear = async ({ ladder, ladderYear }) => {
	console.log("updating ladder");
	console.log(`ladder year ${ladderYear}`);
	let response = await ladderApi.get(
		`/?q=standings;year=${ladderYear}`,
		ladder
	);
	console.log(response.data.standings[0].name);
	return response.data;
};

// //? passes in ladder -> patch then updates ladder by Round taking in ladderYear and ladderRound
// export const updateLadderRound = async (ladder, ladderYear, ladderRound) => {
// 	return await ladderApi.patch(
// 		`;year=${ladderYear};round=${ladderRound}`,
// 		ladder,
// 		ladderYear,
// 		ladderRound
// 	);
// };

export default ladderApi;
