const LANGUAGE = {
	EN: "en",
	default: "en",
};

const availableLanguages = [LANGUAGE.EN];

export const TRANSLATION = {
	...LANGUAGE,
	AVAILABLE: availableLanguages,
};

const _GAME = {
	NAME: {
		COUP: "coup",
	},
};

const availableGames = [_GAME.NAME.COUP];

export const GAME = {
	..._GAME,
	AVAILABLE: availableGames,
};

export const ROUTES = {
	HOME: "/",
	ABOUT: "/about",
	GAME: {
		COUP: "/coup",
	},
};
