import React, { useEffect } from "react";
import { getUserAlbums } from "../../redux/actions/albumActions/getUserAlbums";
import { useDispatch, useSelector } from "react-redux";

const Albums = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.album.userAlbums);
  const userAlbums = () => dispatch(getUserAlbums());

  useEffect(() => {
    userAlbums();
  }, []);

  return (
    <div className="main-child__last">
      {albums.items &&
        albums.items.map((recent) => (
          <div className="last-played" key={recent.album.id}>
            <div className="last-played__images">
              <img src={recent.album.images[0].url} />
            </div>
            <div className="last-played__info">
              <p>{recent.album.artists[0].name}</p>
              <p className="album-name">{recent.album.name}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Albums;
