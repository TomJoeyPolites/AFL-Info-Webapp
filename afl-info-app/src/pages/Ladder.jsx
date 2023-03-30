import { useState } from "react";
import { useQuery } from "react-query";

import { getLadderData } from "../services/getLadderData";

import LadderTable from "../components/Ladder/LadderTable";
import SelectYear from "../components/common/SelectYear";
import SelectRound from "../components/common/SelectRound";

// Bootstrap
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import LadderHead from "../components/Ladder/LadderHead";

function Ladder() {
	const [ladderYear, setLadderYear] = useState(2022);
	const [ladderRound, setLadderRound] = useState(1);

	const {
		isLoading,
		isError,
		error,
		data: ladder,
	} = useQuery(["ladder", ladderYear, ladderRound], fetchLadder);

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
		content = (
			<tbody className="table-group-divider">
				{ladder.standings.map((ladderData, index) => (
					<LadderTable key={index} ladderData={ladderData}></LadderTable>
				))}
			</tbody>
		);
	}

	const handleChange = (e) => {
		e.preventDefault();
		if (e.target.value > 100) {
			setLadderYear(e.target.value);
		} else {
			setLadderRound(e.target.value);
		}
	};

	return (
		<>
			<Container>
				{/* //TODO: Create TableSelectionForm */}
				<Row className="yearRound">
					<Col>
						<h5>
							Year:
						</h5>
						<SelectYear
							onChange={handleChange} value={ladderYear}
						/>
					</Col>
					<Col>
						<h5>
							Round:
						</h5>
						<SelectRound
							onChange={handleChange}
							value={ladderRound}
							selectYear={ladderYear}
						/>
					</Col>
				</Row>

				<Table>
					<LadderHead />
					{content}
				</Table>
			</Container>
		</>
	);
}

export default Ladder;

// useEffect(() => {
// 	getLadderData();
// }, [ladderYear, ladderRound]);

// async function getLadderData() {
// 	//TODO: FOR TESTING
// 	console.log("...retrieving data from Squiggle...");

// 	let results = await axios.get(
// 		`${config.RootURL}?q=standings;year=${ladderYear};round=${ladderRound}`
// 	);
// 	setLadderData(results.data.standings);
// }
