import React from "react";

function LadderTable(props) {
	const { ladderData, teamId } = props;

	let content;
	if (teamId) {
		// console.log(`TeamId: ${teamId}`);
		// console.log(`LadderData ID:`);
		// console.log(ladderData.id);
		for (let i = 0; i < 18; i++) {
			if (ladderData.id === teamId) {
				content = (
					<tr className={ladderData.rank}>
						<td>{ladderData.rank}</td>
						<td>{ladderData.name}</td>
						<td>{ladderData.played}</td>
						<td>{ladderData.pts}</td>
						<td>{ladderData.percentage.toFixed(2)}</td>
						<td>{ladderData.wins}</td>
						<td>{ladderData.losses}</td>
						<td>{ladderData.draws}</td>
					</tr>
				);
			}
		}
	} else {
		content = (
			<tr className={ladderData.rank}>
				<td>{ladderData.rank}</td>
				<td>{ladderData.name}</td>
				<td>{ladderData.played}</td>
				<td>{ladderData.pts}</td>
				<td>{ladderData.percentage.toFixed(2)}</td>
				<td>{ladderData.wins}</td>
				<td>{ladderData.losses}</td>
				<td>{ladderData.draws}</td>
			</tr>
		);
	}

	return <>{content}</>;
}

export default LadderTable;
