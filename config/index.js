const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3000" : "https://sep6-movies.netlify.app";
