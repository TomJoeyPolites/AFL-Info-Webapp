import { useQuery } from "react-query";

import { getTeamData } from "../services/getTeamData";

import TeamCard from "../components/Teams/TeamCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Teams() {
	const {
		isLoading,
		isError,
		error,
		data: teams,
	} = useQuery(["teams"], fetchTeams);

	async function fetchTeams(queryData) {
		const { } = queryData;
		const results = await getTeamData();
		return await results.data;
	}

	let content;
	if (isLoading) {
		content = <p>Loading...</p>;
	} else if (isError) {
		content = <p>{error.message}</p>;
	} else {
		content = (
			<Row className="row-cols-4">
				{teams.teams.map((teamData, index) => (
					<TeamCard key={index} teamData={teamData}></TeamCard>
				))}
			</Row>
		);
	}

	return (
		<div>
			<Container className="text-center teams">
				{/*//TODO: loop through Row x 6    */}
				{/*//TODO: responsive = 6/4/2/1 */}
				{content}
			</Container>
		</div>
	);
}

export default Teams;
