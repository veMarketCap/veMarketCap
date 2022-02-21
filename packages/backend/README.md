# @vemarketcap/backend

veMarketCap Data collection script. Because of the extensive amounts of data fetching it uses a cache to speed up the execution time.

## Setup

To run or develop the backend you need to install and build its dependencies. You can do it by running the following commands in the repository root:

```
yarn
yarn build
```

## Scripts

- `yarn build` - [described later](#production-build)
- `yarn format` - check if formatting is correct with prettier
- `yarn format:fix` - run prettier automatic formatter
- `yarn lint` - check if the code satisfies the eslint configuration
- `yarn lint:fix` - run eslint automatic fixer
- `yarn typecheck` - check if the code satisfies the typescript compiler
- `yarn test` - run tests

## Production build

The production build is triggered using `yarn build`.

The result of this build is the `build/data.json` file which contains up to date information for all the projects.

## Setup

To run or develop the backend you need to install and build its dependencies. You can do it by running the following commands in the repository root:

```
yarn
yarn build
```
