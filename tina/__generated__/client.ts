import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'f309ad3b15e8a456f91236fe1a682d4d1c024d1d', queries,  });
export default client;
  