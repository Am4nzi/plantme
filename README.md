# PlantMe

"PlantMe" is an app I'm developing in my free time to help customers find their perfect houseplant, however, it could be used for almost any type of product.

The concept is to take the confusion of using complicated filters away, and simplify the process by asking the users a few simple questions about their requirements, and providing options using a card-based layout.

Currently, only the menu selection is complete, with the results page still to be developed.

---

## Features

- Fully responsive, with conditional rendering or styling in place to tailor content to multiple view widths.

- A customised 'stepper' component which is always visible, and allows the user to keep track of their progress through the menus, and navigate back and forth between each one to make edits to their selections with ease.

- Vuex is used for state management, with the [vuex-persist](https://www.npmjs.com/package/vuex-persist) package to store selections in local storage, to handle edge-cases where the page might be refreshed and state would otherwise be cleared.

- A [Postgres](https://www.postgresql.org/) databse is used to store static content, whilst dynamic content is generated within the app. All data is dispatched to the Vuex store to be used as a single source of truth.

- An expansion panel is used to hide extra information so as to note impact the simple, minimal UI. The user can open this panel upon request.

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

- Develop results page
- Enable text compression to improve performance
- Use PurgeCSS unused Vuetify CSS which is bloating load speeds 
- Move all data to a database, possibly use noSQL instead of Postgres for easier object-orientated structuring

## Bugs
- Getters call Vuex store before it's populated, need to implement logic to handle asyc behaviour