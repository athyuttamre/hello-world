# hello-world

An example Koa app.

## Setup

1. Install dependencies:

   `npm install`

2. Install the Postgres app: https://postgresapp.com/.
3. Add Postgres commands to your `$PATH`:

   `export PATH="/Applications/Postgres.app/Contents/Versions/latest/bin:$PATH"`

4. Make a copy of the environment variables file:

   `cp .env.template .env`

   Then fill out the values corresponding to your local Postgres instance.

5. Run the app:

   `npm run dev`
