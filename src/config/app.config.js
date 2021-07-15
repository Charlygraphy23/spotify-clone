export const SPOTIFY_CLIENTID = "6dd98e2a78534958afab76f4eb1ef4e9";
const loginEndPoint = "https://accounts.spotify.com/authorize";
const redirect_uri = "http://localhost:3001";
const SCOPES = [
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
	"playlist-read-private",
	"playlist-read-collaborative",
	"playlist-modify-public",
	" user-read-currently-playing",
];

export const LOGIN_URL = `${loginEndPoint}?client_id=${SPOTIFY_CLIENTID}&response_type=token&redirect_uri=${redirect_uri}&scope=${SCOPES.join(
	"%20"
)}&show_dialog=true`;

export const getAccessToken = () => {
	let tempValue = window.location.hash.substring(1).split("&");

	let tt = tempValue.reduce((initial, part) => {
		let parts = part.split("=");

		Object.assign(initial, {
			[parts[0]]: decodeURIComponent(parts[1]),
		});
		return initial;
	}, {});

	return tt;
};
