# PlantMe

WORK IN PROGRESS.

"PlantMe" is an app I'm developing in my free time to help customers find their perfect houseplant, however, it could be used for almost any type of product.

The concept is to take the confusion of using complicated filters away, and simplify the process by asking the users a few simple questions about their requirements, and providing options using a card-based layout.

---

## Features

- Fully responsive, with conditional rendering or styling in place to tailor content to multiple view widths.

- A customised 'stepper' component which is always visible, and allows the user to keep track of their progress through the menus, and navigate back and forth between each one to make edits to their selections with ease.

- Vuex is used for state management, with the [vuex-persist](https://www.npmjs.com/package/vuex-persist) package to store selections in local storage.

- A [Postgres](https://www.postgresql.org/) database is used to store static content, whilst dynamic content is generated within the app. All data is dispatched to the Vuex store to be used as a single source of truth.

- Users can apply custom filters based on their unique requirements.

- On the results page, a separate menu can be toggled on-and-off to allow the user to tweak their search filter, new results are fetched from the database upon each menu selection with speed, without the user having to click a 'search' button.

- There are interfaces where users can filter their selections, two-way data-binding using Vuex and computed properties with setters are used to keep selections in sync across both interfaces.

## Demo

[http://plantme.herokuapp.com](http://plantme.herokuapp.com/)

## Technology used

### Front-end

-   Vue.js
-   Vue Router
-   Vuex
-   Vuetify / Material Design

### Back-end

-   Node.js
-   Express
-   PostgreSQL

### 3rd party

-   [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate)

## Requirements

- Postgres

## Installation

1. Clone repo: `git clone git@github.com:Am4nzi/plantme.git`
2. Run `npm i` to install dependencies
3.  Install Postgres, create a database called `plantsdb` and insert contents of `/sql/plants.sql` e.g. `psql -d plantsdb -f plants.sql`
4. Run `node index.js` to start the server
5. Run `npm run serve` to start the app in development mode
6.  Navigate to `http://localhost:8080/`

## Todos

- Improve layout/responsiveness of results page (mobile only)
- Show the properties of each result when the user hovers and/or clicks on the result
- Enable text compression to improve performance
- Use PurgeCSS unused Vuetify CSS which is bloating load speeds
