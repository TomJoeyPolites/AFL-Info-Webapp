import React from "react";
import { useQuery } from "react-query";

import { getLadderData } from "../../services/getLadderData";
import LadderTable from "../Ladder/LadderTable";
import LadderHead from "../Ladder/LadderHead";

import Table from "react-bootstrap/Table";

const TeamLadder = (props) => {
	const { teamId, year, round } = props;

	const {
		isLoading,
		isError,
		error,
		data: ladder,
	} = useQuery(["ladder", year, round], fetchLadder);

	async function fetchLadder(queryData) {
		const { queryKey } = queryData;
		const results = await getLadderData(queryKey[1], queryKey[2]);
		return await results.data;
	}

	let content;
	if (isLoading) {
		content = <p>Loading...</p>;
	} else if (isError) {
		content = <p>{error.message}</p>;
	} else {
		console.log(`TeamId: ${teamId}`);
		content = (
			<tbody className="table-group-divider">
				{ladder.standings.map((ladderData, index) => (
					<LadderTable
						key={index}
						teamId={teamId}
						ladderData={ladderData}></LadderTable>
				))}
			</tbody>
		);
	}

	return (
		<div>
			<Table>
				<LadderHead />
				{content}
			</Table>
		</div>
	);
};

export default TeamLadder;
