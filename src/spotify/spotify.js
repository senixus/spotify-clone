const clientId = "CLIENT ID";
const redirectUri = "http://localhost:3000/";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-read-private",
  "user-read-email",
  "user-library-read",
  "user-follow-read",
  "playlist-modify-private",
  "playlist-read-collaborative",
  "user-library-modify",
  "playlist-read-private",
  "user-follow-modify",
  "user-read-playback-position",
];

const accessURL = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}${
  scopes ? "&scope=" + encodeURIComponent(scopes) : ""
}&redirect_uri=${encodeURIComponent(redirectUri)}&show_dialog=true`;

const getToken = () => {
  const token = window.location.hash.split("&")[0].split("=")[1];
  return token;
};

export { accessURL, getToken };
