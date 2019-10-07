# APIs You Won't Hate Gatsby site

## To run the site locally

1. clone this repo
1. `yarn install` to install npm dependencies
1. To make shopify buy button embeds work, create a file called `.env.development` in the root of this project directory with the following values set:

   ```javascript
   GATSBY_SHOPIFY_API_KEY=
   GATSBY_SHOPIFY_DOMAIN=
   GATSBY_SHOPIFY_APP_ID=
   ```

   (fill in missing values to the right of each `=` with values from shopify)
   Values from this file will be injected into the react runtime following [these rules](https://www.gatsbyjs.org/docs/environment-variables/) whenever you start the project with `gatsby develop` (or `yarn start` / `npm run start`, which just runs `gatsby develop`). (**Note**: any additional environment variables _must_ start with `GATSBY_`)

1. `yarn start` will run the local dev environment 👍

## Code of Conduct

Our aim is to build a constructive, inclusive, and positive community. Please give our our [Code of Conduct](./CODE_OF_CONDUCT.md) a read through before contributing.
