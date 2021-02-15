import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTopArtist } from "../../redux/actions/personalActions/getUsersTopArtistAndTracks";

const Artists = () => {
  const dispatch = useDispatch();
  const getTopArtists = () => dispatch(getUserTopArtist());
  const artists = useSelector((state) => state.topArtists.topArtists);

  useEffect(() => {
    getTopArtists();
  }, []);

  return (
    <div className="main-child__last">
      {artists.items &&
        artists.items.map((artist) => (
          <div className="last-played" key={artist.id}>
            <div className="last-played__images">
              <img src={artist.images[0].url} />
            </div>
            <div className="last-played__info">
              <p>{artist.name}</p>
              <p className="album-name">{artist.type}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Artists;
