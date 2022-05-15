# Consuno Frontend

A frontend app that lists construction companies and their specialties.

Demo: https://consuno-frontend.vercel.app/

## Project Setup

Create a `.env` file in the root of the project with the following variables:

- `NEXT_PUBLIC_API_BASE_URL`: The base url of the API

## Installation

```bash
$ yarn
```

## Running the app

```bash
# watch mode
$ yarn dev
```

## Things that can be improved in the future
- [ ] Create a seperate backend service instead of using Next API routes (https://nextjs.org/docs/api-routes/introduction)
- [ ] Add Pagination Logic with infinite scroll to prevent loading all data at once
- [ ] Move the filtering logic from the frontend to the backend, allowing to query through large amounts of data
- [ ] Cache API results to improve performance
- [ ] Add lazy loading for images
- [ ] Use database instead of generating random data
- [ ] Write unit tests
- [ ] Configure CI/CD
- [ ] Improve design and add animations for better user experience
- [ ] RWD and dark mode
