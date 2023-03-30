import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function TeamCard(props) {
	const { teamData } = props;

	//! for Sass 
	let Id = teamData.name;
	let newId = Id.replace(/\s/g, "");



	return (
		<>
			{/* //TODO: Link over whole card  */}

			<Row
				id="teamCard"
				className={newId}>
				<Link to={`/teams/${teamData.name}`}>
					<Row>
						<h4>
							{teamData.name}
						</h4>
					</Row>
					<Row className="teamLogo">
						<img
							src={`https://squiggle.com.au/` + teamData.logo}
							alt="team logo"
						/>
					</Row>
					<Row>
						<h5>Debut: {teamData.debut}</h5>
					</Row>
				</Link>
			</Row>

		</>
	);
}

export default TeamCard;
