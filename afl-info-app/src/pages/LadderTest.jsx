import { useQuery, useMutation, useQueryClient } from "react-query";
import {
	getLadder,
	updateLadderYear,
	// updateLadderRound,
} from "../api/ladderApi";

import { useState } from "react";

import LadderTable from "../components/Ladder/LadderTable";
import SelectYear from "../components/common/SelectYear";
// import SelectRound from "../components/common/SelectRound";

// Bootstrap
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import LadderHead from "../components/Ladder/LadderHead";

const Ladder = () => {
	const [ladderYear, setLadderYear] = useState(2022);
	const [ladderRound, setLadderRound] = useState();

	const queryclient = useQueryClient();

	const {
		isLoading,
		isError,
		error,
		data: ladder,
	} = useQuery("ladder", getLadder);

	const updateLadderYearMutation = useMutation(updateLadderYear, {
		onSuccess: () => {
			//? Invalidates cache and refetches updated ladder
			queryclient.invalidateQueries(ladder);
		},
	});

	// const updateLadderRoundMutation = useMutation(updateLadderRound, {
	// 	onSuccess: () => {
	// 		//? Invalidates cache and refetches updated ladder
	// 		queryclient.invalidateQueries(ladder);
	// 	},
	// });

	const handleChange = (e) => {
		console.log("HANDLE CHANGE");
		if (e.target.value > 100) {
			console.log("CHANGE YEAR");
			setLadderYear(e.target.value);
			console.log(ladderYear);
			updateLadderYearMutation.mutate({ ladderYear: ladderYear });
		}
		// else {
		// 	setLadderRound(e.target.value);
		// 	updateLadderRoundMutation.mutate(ladder);
		// }
	};

	let content;
	if (isLoading) {
		content = <p>Loading...</p>;
	} else if (isError) {
		content = <p>{error.message}</p>;
	} else {
		console.log("content");
		content = (
			<tbody className="table-group-divider">
				{ladder.standings.map((ladderData, index) => (
					<LadderTable key={index} ladderData={ladderData}></LadderTable>
				))}
			</tbody>
		);
	}

	return (
		<>
			<Container>
				{/* //TODO: Create TableSelectionForm */}
				<Row>
					<Col>Year: </Col>
					<Col>
						<SelectYear onChange={handleChange} value={ladderYear}></SelectYear>
					</Col>
					{/* <Col>Round: </Col>
					<Col>
						<SelectRound
							onChange={handleChange}
							value={ladderRound}
							selectYear={ladderYear}
						/>
					</Col> */}
				</Row>

				<Table>
					<LadderHead />
					{content}
				</Table>
			</Container>
		</>
	);
};

export default Ladder;
