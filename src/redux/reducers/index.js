import { combineReducers } from "redux";

// Playlist
import { playlistReducer } from "./playlistReducers/playlistReducer";
import { getPlaylistIdReducer } from "./playlistReducers/getPlaylistIdReducer";
import { getPlaylistsTracksReducer } from "./playlistReducers/getPlaylistsTracksReducer";

// User
import { currentUserReducer } from "../reducers/userReducers/currentUser";
import { getUserProfileReducer } from "../reducers/userReducers/getUserProfile";

// Track

import { getUserTrackReducer } from "../reducers/trackReducers/getUserTrackReducer";

// Show

import { getUserShowReducer } from "../reducers/showReducers/getUserShowReducer";

// Personal
import { getUserTopArtistsReducer } from "../reducers/personalReducers/getUsersTopArtistReducer";
import { getUserTopTracksReducer } from "../reducers/personalReducers/getUsersTopTracksReducer";

// Album
import { getUserAlbumsReducer } from "../reducers/albumReducers/getUserAlbumsReducer";

// Browse

import { getAllFeaturedPlaylistReducer } from "../reducers/browseReducers/getAllFeaturedPlaylistReducer";
import { getAllNewReleasesReducer } from "../reducers/browseReducers/getAllNewReleasesReducer";
import { getRecommendationsReducer } from "../reducers/browseReducers/getRecommendationsReducer";

// Player
import { getUserCurrentlyPlaybackReducer } from "../reducers/playerReducers/getUserCurrentPlaybackReducer";
import { getUserCurrentlyPlayingTrackReducer } from "../reducers/playerReducers/getUserCurrentlyPlayingTrackReducer";
import { getUserRecentlyPlaybackTrackReducer } from "../reducers/playerReducers/getUserRecentlyPlayedTrackReducer";

export const rootReducer = combineReducers({
  // Player
  recentlyPlayed: getUserRecentlyPlaybackTrackReducer,
  currentlyPlaying: getUserCurrentlyPlayingTrackReducer,
  currentlyPlayback: getUserCurrentlyPlaybackReducer,

  // Show

  userShow: getUserShowReducer,

  // Track
  userTrack: getUserTrackReducer,

  // Personal
  topArtists: getUserTopArtistsReducer,
  topTracks: getUserTopTracksReducer,

  // Album
  album: getUserAlbumsReducer,

  // Playlist
  playlist: playlistReducer,
  playlistId: getPlaylistIdReducer,
  playlistTracks: getPlaylistsTracksReducer,

  // User
  currentUser: currentUserReducer,
  profile: getUserProfileReducer,

  // Browse

  featured: getAllFeaturedPlaylistReducer,
  releases: getAllNewReleasesReducer,

  recommendations: getRecommendationsReducer,
});
