import { useState } from "react";

import { useTranslation } from "../../store/translation";
import CreateGameBox from "./CreateGameBox";
import JoinGameBox from "./JoinGameBox";

const Home = () => {
	const { translation } = useTranslation();

	const [state, setState] = useState(null);

	const handleClick =
		(value = null) =>
		() =>
			setState(value);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				width: "100vw",
			}}
		>
			<h1
				style={{
					textAlign: "center",
				}}
			>
				{translation.home.title}
			</h1>
			<p
				style={{
					width: "88%",
					textAlign: "center",
				}}
			>
				{translation.home.description}
			</p>
			<div
				style={{
					flexDirection: "row",
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					width: "100%",
				}}
			>
				<button onClick={handleClick("create")}>
					{translation.home.button.create}
				</button>
				<button onClick={handleClick("join")}>
					{translation.home.button.join}
				</button>
			</div>
			{state === "join" && <JoinGameBox />}
			{state === "create" && <CreateGameBox />}
		</div>
	);
};

export default Home;
