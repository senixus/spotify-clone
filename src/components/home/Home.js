import React, { useEffect } from "react";
import SideBar from "../sideBar/SideBar";
import "./home.scss";
import { getCurrentUser } from "../../redux/actions/userActions/getCurrentUser";
import { playlist } from "../../redux/actions/playlistActions/playlistActions";
import { useSelector, useDispatch } from "react-redux";
import Albums from "../albums/albums";
import Shows from "../shows/Shows";
import Artists from "../artist/Artists";
import Releases from "../releases/Releases";
import Featured from "../featured/Featured";
import Login from "../auth/Login";
import { getToken } from "../../spotify/spotify";
import Player from "../player/Player";

const Home = () => {
  const dispatch = useDispatch();
  const getPlaylist = (id) => dispatch(playlist(id));
  const getUser = () => dispatch(getCurrentUser());
  const play = useSelector((state) => state.playlist.playlist);
  const user = useSelector((state) => state.currentUser.currentUser);
  const token = getToken();

  useEffect(() => {
    getUser();
    getPlaylist(user.id);
  }, [user.id]);

  if (!token) return <Login />;

  return (
    <main className="main">
      <div className="side-child">
        <SideBar play={play} />
      </div>
      <div className="main-child">
        <div className="main-child__username">
          <p>{user.display_name}</p>
        </div>

        <h2>Albums</h2>
        <Albums />
        <h2>Shows</h2>
        <Shows />
        <h2>Artists</h2>
        <Artists />
        <h2>Recommendations</h2>
        <Releases />
        <h2>Editor's picks</h2>
        <Featured />
        <Player />
      </div>
    </main>
  );
};

export default Home;
