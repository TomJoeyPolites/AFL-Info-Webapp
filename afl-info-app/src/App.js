// route pages to load
import { Route, Routes } from "react-router-dom";

//! QueryClient, QueryClientProvider parents in index.js

//* pages:
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import TeamPage from "./pages/TeamPage";
import Ladder from "./pages/Ladder";
import Games from "./pages/Games";
import NotFound from "./pages/NotFound";

// import LadderTest from "./pages/LadderTest";

//? Components
import Navigate from "./components/common/Navigate";

//? CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			{/*//TODO: Create Routes */}

			{/* //TODO: -NAVIGATION -SIGNIN -FOOTER -PAGE NOT FOUND -TEAM PAGE(?) */}
			<Navigate />
			<Routes>
				{/*
					//TODO: Add way to include finals - JSON or other page
						//* rounds selected with buttons < & > O or selection of numbers from top: |1| |2| |3|...
					*/}

				<Route path="/" element={<Home />} />
				{/* //TODO: Create usable Homepage */}

				<Route path="/teams">
					<Route index element={<Teams />} />
					<Route path=":id" element={<TeamPage />} />
					<Route path="*" element={<NotFound />} />
				</Route>

				{/*
					//TODO: Add link to pictures
					//* Individual Team page with games played & ladder position
					*/}

				<Route path="/ladder" element={<Ladder />} />

				<Route path="/games" element={<Games />} />
				{/* //TODO: Create better layout of games and info */}
				{/* //* Table? Cards? Sass over Bootstrap? */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
