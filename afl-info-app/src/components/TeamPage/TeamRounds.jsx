import React from "react";
import { useQuery } from "react-query";

import { getTeamGames } from "../../services/getGamesData";

import GameRounds from "../Games/GameRounds";

const TeamRounds = (props) => {
	const { teamId, year, round } = props;

	const {
		isLoading,
		isError,
		error,
		data: games,
	} = useQuery(["games", year, teamId], fetchGames);

	async function fetchGames(queryData) {
		const { queryKey } = queryData;
		const results = await getTeamGames(queryKey[1], queryKey[2]);
		return await results.data;
	}

	let content;
	if (isLoading) {
		content = <p>Loading...</p>;
	} else if (isError) {
		content = <p>{error.message}</p>;
	} else {
		content = (
			<>
				{games.games.map((gamesData, index) => (
					<GameRounds key={index} gamesData={gamesData}></GameRounds>
				))}
			</>
		);
	}

	return <div>{content}</div>;
};

export default TeamRounds;
