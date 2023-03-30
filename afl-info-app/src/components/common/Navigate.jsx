import { useState } from "react";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';


function Navigate() {
	const [theme, setTheme] = useState('lightMode');

	const handleClick = () => {
		if (theme === 'lightMode') {
			setTheme('darkMode');
		} else if (theme === 'darkMode') {
			setTheme('lightMode')
		}
	}

	return (
		<div>
			<Navbar>
				<Container>
					<Navbar.Brand>
						<NavLink to="/" >White Line Fever</NavLink>
					</Navbar.Brand>
					<Nav>
						<NavLink to="/teams">Teams</NavLink>
						<NavLink to="/games">Games</NavLink>
						<NavLink to="/ladder">Ladder</NavLink>
					</Nav>
					<Nav>
						<Form>
							<Form.Check
								type="switch"
								id="custom-switch"
								onClick={handleClick}
								className={theme}
							/>
						</Form>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}

export default Navigate;
