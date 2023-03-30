import React from "react";
import { useState } from "react";

import SelectYear from "../common/SelectYear";
import SelectRound from "../common/SelectRound";
import TeamLadder from "./TeamLadder";
// import TeamRounds from "./TeamLadder";

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import TeamRounds from "./TeamRounds";

const TeamInfo = (props) => {
	const { teamData } = props;
	const [year, setYear] = useState(2022);
	const [round, setRound] = useState("final");
	const id = teamData.id;
	let cName = teamData.name
	cName = `bg${cName.replace(/\s/g, "")}`;


	const handleChange = (e) => {
		if (e.target.value > 100) {
			setYear(e.target.value);
		} else {
			setRound(e.target.value);
		}
	};

	return (
		<div className={cName}>
			<Container>
				<Row>
					<Col>
						<h1>{teamData.name}</h1>
					</Col>
				</Row>
				<Row className="align-items-center">
					<Col className="col-4 logo">
						<img
							src={`https://squiggle.com.au/${teamData.logo}`}
							alt="team logo"
						/>
						<h5>Debut: {teamData.debut}</h5>
					</Col>
					<Col>
						<Row className="justify-content-center align-items-center year">
							<Col>
								<h4>
									Year:
								</h4>
							</Col>
							<Col>

								<SelectYear onChange={handleChange} value={year} />
							</Col>
						</Row>
						<Row>
							<h3>Position</h3>
						</Row>
						<Row>
							<TeamLadder teamId={id} year={year} round={round} />
						</Row>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Row>
						<h3>Games</h3>
					</Row>
					<Row>
						<TeamRounds teamId={id} year={year} round={round} />
					</Row>
				</Row>
			</Container>
		</div>
	);
};

export default TeamInfo;
