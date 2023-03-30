import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function GameRounds(props) {
	const { gamesData } = props;
	let { hteam, hgoals, hbehinds, hscore, agoals, ateam, abehinds, ascore } = gamesData;


	const [homeScore, setHomeScore] = useState(hscore)
	const [awayScore, setAwayScore] = useState(ascore)

	let winner = () => {
		if (homeScore > awayScore) {
			return "homeWin"
		} else if (awayScore > homeScore) {
			return "awayWin"
		}
	}

	if (hteam === 'Greater Western Sydney') {
		hteam = 'G.W.S'
	} else if (ateam === 'Greater Western Sydney') {
		ateam = 'G.W.S'
	}

	return (
		<Row className="game align-items-center" id={winner()}>
			<Col className='homeTeam'>
				<div className="home">
					{hteam}
				</div>
			</Col>
			<Col className="col-2 homeScore">
				{hgoals}.{hbehinds} - {hscore}
			</Col>
			<Col className="col-1">VS</Col>
			<Col className="col-2 awayScore">
				{agoals}.{abehinds} - {ascore}
			</Col>
			<Col className='awayTeam'>
				<div className="away">
					{ateam}
				</div>
			</Col>
		</Row>
	);
}

export default GameRounds;
