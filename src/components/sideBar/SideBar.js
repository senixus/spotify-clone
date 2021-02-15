import React from "react";
import spotifyLogo from "../../images/spotify.png";
import "./sideBar.scss";
import { VscLibrary } from "react-icons/vsc";
import { RiHome5Fill, RiSearchLine, RiHeartFill } from "react-icons/ri";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getPlaylistById } from "../../redux/actions/playlistActions/getPlaylistById";
import { useDispatch, useSelector } from "react-redux";

const SideBar = ({ play }) => {
  const dispatch = useDispatch();
  const getPlaylistId = (id) => dispatch(getPlaylistById(id));

  return (
    <section className="sidebar">
      <div className="sidebar-child">
        <div className="sidebar-child__image">
          <img src={spotifyLogo} alt="spotify" />
        </div>
        <div className="sidebar-child__icons util">
          <div>
            <span>
              <RiHome5Fill className="icons" /> Home
            </span>
          </div>
          <div>
            <span>
              <RiSearchLine className="icons" /> Search
            </span>
          </div>
          <div>
            <span>
              <VscLibrary className="icons" /> Library
            </span>
          </div>
        </div>
        <div className="sidebar-child__playlist util">
          <div>
            <h2>Playlists</h2>
          </div>

          <div>
            <span>
              <BsFillPlusSquareFill className="icons" /> Playlist
            </span>
          </div>
          <div>
            <span>
              <RiHeartFill className="icons" /> Liked
            </span>
          </div>
        </div>

        <div className="sidebar-child__albums util">
          <ul>
            {play.items &&
              play.items.map((item) => (
                <li key={item.id} onClick={() => getPlaylistId(item.id)}>
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
