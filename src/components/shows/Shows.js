import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserShows } from "../../redux/actions/showsActions/getUserShows";

const Shows = () => {
  const shows = useSelector((state) => state.userShow.userShows);
  const dispatch = useDispatch();
  const getShows = () => dispatch(getUserShows());

  useEffect(() => {
    getShows();
  }, []);

  return (
    <div className="main-child__last">
      {shows.items &&
        shows.items.map((show) => (
          <div className="last-played" key={show.show.id}>
            <div className="last-played__images">
              <img src={show.show.images[0].url} />
            </div>
            <div className="last-played__info">
              <p>{show.show.name}</p>
              <p className="album-name">{show.show.publisher}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shows;
