import startApolloServer from "./server";
import db from "./db/conn";
import { loadFile } from "graphql-import-files";
import resolvers from "./resolvers";

const typeDefs = loadFile("./typeDefs/user.graphql");

startApolloServer(
    typeDefs,
    resolvers
);
