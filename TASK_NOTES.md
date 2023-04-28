## Observations - Project

- `yarn.lock` appears to be in the outdated v1 format
- Next warns about disabling SWC due to `.babelrc`
- A `tsconfig.tsbuildinfo` that I'm unfamiliar with
- Prettier isn't running in a commit hook (editor configured to run it on-save)

## Observations - Task

- Covers:
  - Data fetching
  - Component rendering
  - Testing
- Doesn't explicitly ask for:
  - Mutations or other side effects
  - Complex state management
  - Styling
  - Routing
  - Localisation

## Assumptions

- Adding third party libraries is acceptable
- Removing the existing Next.js starter content is acceptable
- Running Prettier with the pre-existing config once initially is acceptable
  - To prevent accidental changes caused by autoformatting in future commits
- "top 10 items" refers to the first 10 items the API returns on its default sort
- Fetching all cores for each launch is acceptable
  - It's unclear to me how/if I can select only `cores[0]`
