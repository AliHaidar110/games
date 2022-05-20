import React from "react";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "../../store/translation";
import { GAME, ROUTES, TRANSLATION } from "../../resources/constants";
import { Divider, IconButton, ListItemIcon, ListItemText } from "@mui/material";
import {
	Menu as MenuIcon,
	HomeOutlined as HomeIcon,
	InfoOutlined as InfoIcon,
	TranslateOutlined as TranslateIcon,
	ArrowForwardIosOutlined as ArrowForward,
	SportsEsportsOutlined as SportsEsportsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function BasicMenu() {
	const { translation, setLanguage } = useTranslation();

	// main menu
	const [mainAnchorEl, setMainAnchorEl] = React.useState(null);

	const isMainMenuOpen = React.useMemo(
		() => Boolean(mainAnchorEl),
		[mainAnchorEl]
	);

	const handleMainMenuOpen = (event) => {
		setMainAnchorEl(event.currentTarget);
	};
	const handleMainMenuClose = () => {
		setMainAnchorEl(null);
	};

	// language menu
	const [languageAnchorEl, setAnchorEl] = React.useState(null);

	const isLanguageMenuOpen = React.useMemo(
		() => Boolean(languageAnchorEl),
		[languageAnchorEl]
	);

	const handleLanguageMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleLanguageMenuClose = () => {
		setAnchorEl(null);
	};

	// game menu
	const [gameAnchorEl, setGameAnchorEl] = React.useState(null);

	const isGameMenuOpen = React.useMemo(
		() => Boolean(gameAnchorEl),
		[gameAnchorEl]
	);

	const handleGameMenuOpen = (event) => {
		setGameAnchorEl(event.currentTarget);
	};
	const handleGameMenuClose = () => {
		setGameAnchorEl(null);
	};

	// navigation
	const _navigate = useNavigate();

	// callbacks
	const handleSelectLanguage = React.useCallback(
		(language) => () => {
			setLanguage(language);
			handleGameMenuClose();
		},
		[]
	);

	const navigate = React.useCallback(
		(route) => () => {
			handleMainMenuClose();
			_navigate(route);
		},
		[]
	);

	return (
		<div>
			<IconButton
				id="open-main-menu-button"
				aria-controls={isMainMenuOpen ? "nav-main-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={isMainMenuOpen ? "true" : undefined}
				onClick={handleMainMenuOpen}
			>
				<MenuIcon />
			</IconButton>

			{/* main menu */}
			<Menu
				id="nav-main-menu"
				mainAnchorEl={mainAnchorEl}
				open={isMainMenuOpen}
				onClose={handleMainMenuClose}
				MenuListProps={{
					"aria-labelledby": "open-main-menu-button",
				}}
			>
				{/* home section */}
				<MenuItem onClick={navigate(ROUTES.HOME)}>
					<ListItemIcon>
						<HomeIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText>{translation.sideBar.section.home}</ListItemText>
				</MenuItem>

				<Divider />

				{/* language section */}
				<MenuItem
					id="open-language-menu-button"
					aria-controls={isLanguageMenuOpen ? "nav-language-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={isLanguageMenuOpen ? "true" : undefined}
					onClick={handleLanguageMenuOpen}
				>
					<ListItemIcon>
						<TranslateIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText>{translation.sideBar.section.languages}</ListItemText>
					<ListItemIcon
						style={{
							flexDirection: "row-reverse",
						}}
					>
						<ArrowForward fontSize="small" />
					</ListItemIcon>
				</MenuItem>

				<Divider />

				{/* game section */}
				<MenuItem
					id="open-game-menu-button"
					aria-controls={isGameMenuOpen ? "nav-game-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={isGameMenuOpen ? "true" : undefined}
					onClick={handleGameMenuOpen}
				>
					<ListItemIcon>
						<SportsEsportsIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText>{translation.sideBar.section.games}</ListItemText>
					<ListItemIcon
						style={{
							flexDirection: "row-reverse",
						}}
					>
						<ArrowForward fontSize="small" />
					</ListItemIcon>
				</MenuItem>

				<Divider />

				{/* about section */}
				<MenuItem onClick={handleMainMenuClose}>
					<ListItemIcon>
						<InfoIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText>{translation.sideBar.section.about}</ListItemText>
				</MenuItem>
			</Menu>

			{/* language menu */}
			<Menu
				id="nav-language-menu"
				anchorEl={languageAnchorEl}
				open={isLanguageMenuOpen}
				onClose={handleLanguageMenuClose}
				MenuListProps={{
					"aria-labelledby": "open-language-menu-button",
				}}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				elevation={3}
			>
				{TRANSLATION.AVAILABLE.map((language) => {
					return (
						<MenuItem
							selected={language === translation.language}
							onClick={handleSelectLanguage(language)}
						>
							{translation.sideBar.language[language]}
						</MenuItem>
					);
				})}
			</Menu>

			{/* game menu */}
			<Menu
				id="nav-game-menu"
				anchorEl={gameAnchorEl}
				open={isGameMenuOpen}
				onClose={handleGameMenuClose}
				MenuListProps={{
					"aria-labelledby": "open-game-menu-button",
				}}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
			>
				{GAME.AVAILABLE.map((game) => {
					return (
						<MenuItem onClick={handleGameMenuClose}>
							{translation.sideBar.game[game]}
						</MenuItem>
					);
				})}
			</Menu>
		</div>
	);
}
