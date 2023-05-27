# task-backend

First of all, do <pre>npm i</pre> in order to install all prerequisites.

In order to connect to database, create the .env file, using .env.example as a template and fill in the information about the database. You should have predefined guestbook database in order to work successfully .

To configure migration run next command 

<pre> node migrationConfig.js </pre>

and after that run

<pre> db-migrate up </pre>

in order to run migrations.
<hr>
For local development run:

<pre> npm start </pre>