import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { getSpecTeamData } from "../services/getTeamData";

import TeamInfo from "../components/TeamPage/TeamInfo";

function TeamPage() {
	const { id } = useParams();
	const [teamId, setTeamId] = useState();

	// const queryClient = useQueryClient();

	const {
		isLoading,
		isError,
		error,
		data: teams,
	} = useQuery(["teams", teamId], fetchTeams);

	async function fetchTeams(queryData) {
		loadTeamId();
		console.log(`teamId: ${teamId}`);
		const { queryKey } = queryData;
		const results = await getSpecTeamData(queryKey[1]);
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
				{teams.teams.map((teamData) => (
					<TeamInfo teamData={teamData} />
				))}
			</>
		);
	}

	function loadTeamId() {
		console.log(id);
		if (id === "Adelaide") {
			setTeamId(1);
		} else if (id === "Brisbane Lions") {
			setTeamId(2);
		} else if (id === "Carlton") {
			setTeamId(3);
		} else if (id === "Collingwood") {
			setTeamId(4);
		} else if (id === "Essendon") {
			setTeamId(5);
		} else if (id === "Fremantle") {
			setTeamId(6);
		} else if (id === "Geelong") {
			setTeamId(7);
		} else if (id === "Gold Coast") {
			setTeamId(8);
		} else if (id === "Greater Western Sydney") {
			setTeamId(9);
		} else if (id === "Hawthorn") {
			setTeamId(10);
		} else if (id === "Melbourne") {
			setTeamId(11);
		} else if (id === "North Melbourne") {
			setTeamId(12);
		} else if (id === "Port Adelaide") {
			setTeamId(13);
		} else if (id === "Richmond") {
			setTeamId(14);
		} else if (id === "St Kilda") {
			setTeamId(15);
		} else if (id === "Sydney") {
			setTeamId(16);
		} else if (id === "West Coast") {
			setTeamId(17);
		} else if (id === "Western Bulldogs") {
			setTeamId(18);
		}
	}

	return <div>{content}</div>;
}

export default TeamPage;
