import React from "react";
import Form from "react-bootstrap/Form";

let rounds = require("../common/JSON/roundData");

function SelectRound(props) {
	const { onChange, selectRound, selectYear } = props;

	return (
		<Form.Select size="sm" onChange={onChange} value={selectRound}>
			{rounds.rounds[selectYear].map((round, index) => (
				<option key={index}>{round}</option>
			))}
		</Form.Select>
	);
}

export default SelectRound;
