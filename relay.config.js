module.exports = {
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: "./src",
  language: "javascript", // "javascript" | "typescript" | "flow"
  schema: "./src/__generated__/graphql.ts",
  excludes: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
};
