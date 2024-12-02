import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { startStandaloneServer } from "@apollo/server/standalone";
import { cleanDB, dataSource } from "./datasource";
import { CountryMutations } from "./resolvers/CountryMutation";
import { CountryQueries } from "./resolvers/CountryQueries";

const port = 4000;

async function startAppolloServer() {
  const schema = await buildSchema({
    resolvers: [CountryQueries, CountryMutations],
  });
  const server = new ApolloServer({ schema });
  await dataSource.initialize();
  await startStandaloneServer(server, { listen: { port } });
  await cleanDB();

  console.log(`Le serveur a démarré au port : ${port} !`);
}

startAppolloServer();