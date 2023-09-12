import type { CodegenConfig } from "@graphql-codegen/cli";

const backendURL = "https://d1hednii5lkne2.cloudfront.net/graphql";
const config: CodegenConfig = {
  overwrite: true,
  schema: backendURL,
  documents: "**/*.{ts,tsx}",
  generates: {
    "gql/": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
