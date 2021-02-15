import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNewReleases } from "../../redux/actions/browseActions/getAllNewReleases";

const Releases = () => {
  const dispatch = useDispatch();
  const getReleases = () => dispatch(getAllNewReleases());
  const releases = useSelector((state) => state.releases.newReleases);

  useEffect(() => {
    getReleases();
  }, []);

  return (
    <div className="main-child__last">
      {releases.items &&
        releases.items.map((release) => (
          <div className="last-played" key={release.id}>
            <div className="last-played__images">
              <img src={release.images[0].url} />
            </div>
            <div className="last-played__info">
              <p>{release.name}</p>
              <p className="album-name">{release.type}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Releases;
