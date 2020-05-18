import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";

import { Artists } from "./types/artists";

export const artistsQuery = gql`
  query Artists {
    artists {
      name
      email
      bio
      type
    }
  }
`;

export const TypedArtistsQuery = TypedQuery<Artists, {}>(
  artistsQuery
);
