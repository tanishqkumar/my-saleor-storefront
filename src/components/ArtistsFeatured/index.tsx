import * as React from "react";
import { Carousel } from "..";
import { TypedArtistsQuery } from "./queries";

import "./scss/index.scss";

interface ArtistsFeaturedProps {
  title?: string;
}
// we can remove productsFeatureProps once you find out what the
// bland replacement type for a component that doesn't take props is
const ArtistsFeatured: React.FC<ArtistsFeaturedProps> = ({ title }) => {
  return (
    <TypedArtistsQuery displayError={false}>
      {({ data }) => {
        const artists = data.artists;

        if (artists.length) {
          return (
            <div className="products-featured">
              <div className="container">
                <h3>{title}</h3>
                <Carousel>
                  {artists.map((artist) => (
                    <div>
                      <div>{artist.name}</div>
                      <div>{artist.bio}</div>
                      <div>{artist.type}</div>
                      <div>{artist.email}</div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          );
        }
      }}
    </TypedArtistsQuery>
  );
};

ArtistsFeatured.defaultProps = {
  title: "Our Artists",
};

export default ArtistsFeatured;
