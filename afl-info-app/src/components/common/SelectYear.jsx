import React from "react";
import Form from "react-bootstrap/Form";

function SelectYear(props) {
	const { onChange, selectYear } = props;
	const array = [];

	let d = new Date();
	let dy = d.getFullYear();

	//? 1987 first year of records
	for (let i = 0; dy > 1897; i++) {
		dy--;
		array.push(dy);
	}

	return (
		<Form.Select size="sm" onChange={onChange} value={selectYear}>
			{array.map((years, index) => (
				<option key={index}>{years}</option>
			))}
		</Form.Select>
	);
}

export default SelectYear;
