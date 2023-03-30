import { useState } from "react";
import { useQuery } from "react-query";

import { getGamesData } from "../services/getGamesData";

import GameRounds from "../components/Games/GameRounds";
import SelectYear from "../components/common/SelectYear";
import SelectRound from "../components/common/SelectRound";

// Bootstrap
import Container from "react-bootstrap/esm/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Games() {
	const [gameYear, setGameYear] = useState(2022);
	const [gameRound, setGameRound] = useState(1);
	const [gws, setGWS] = useState();

	const {
		isLoading,
		isError,
		error,
		data: games,
	} = useQuery(["games", gameYear, gameRound], fetchGames);

	async function fetchGames(queryData) {
		const { queryKey } = queryData;
		const results = await getGamesData(queryKey[1], queryKey[2]);
		convGWS()
		return await results.data;
	}

	function convGWS() {
		if (gameYear > 2011) {
			setGWS('*G.W.S = Greater Western Sydney')
		} else {
			setGWS('')
		}
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

	const handleChange = (e) => {
		console.log(e);
		e.preventDefault();
		if (e.target.value > 100) {
			setGameYear(e.target.value);
		} else {
			setGameRound(e.target.value);
		}
	};

	return (
		<Container className='gameContainer'>
			{/* //TODO: Create TableSelectionForm */}
			<Row className="yearRound">
				<Col>
					<h5>
						Year:
					</h5>
					<SelectYear
						onChange={handleChange} value={gameYear}
					/>
				</Col>
				<Col>
					<h5>
						Round:
					</h5>
					<SelectRound
						onChange={handleChange}
						value={gameRound}
						selectYear={gameYear}
					/>
				</Col>
			</Row>
			{content}
			<p>{gws}</p>
		</Container>
	);
}

export default Games;
