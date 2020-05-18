/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Artists
// ====================================================

export interface Artists_artists {
  __typename: "ArtistType";
  name: string | null;
  email: string | null;
  bio: string | null;
  type: string | null;
}

export interface Artists {
  artists: (Artists_artists | null)[] | null;
}
