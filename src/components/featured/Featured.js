import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFeatured } from "../../redux/actions/browseActions/getAllFeatured";

const Featured = () => {
  const dispatch = useDispatch();
  const featured = useSelector((state) => state.featured.featured);
  const getFeatured = () => dispatch(getAllFeatured());

  useEffect(() => {
    getFeatured();
  }, []);

  return (
    <div className="main-child__last">
      {featured.items &&
        featured.items.map((feature) => (
          <div className="last-played" key={feature.id}>
            <div className="last-played__images">
              <img src={feature.images[0].url} />
            </div>
            <div className="last-played__info">
              <p>{feature.name}</p>
              <p className="album-name">{feature.type}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Featured;
