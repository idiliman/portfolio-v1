import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const ID_ENV = import.meta.env.VITE_SANITY_PROJECT_ID;
const TOKEN_ENV = import.meta.env.VITE_SANITY_TOKEN_ID;

export const client = sanityClient({
  projectId: ID_ENV,
  dataset: "production",
  apiVersion: "2022-12-24",
  useCdn: true,
  token: TOKEN_ENV,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
