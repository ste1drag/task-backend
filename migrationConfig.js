const fs = require('fs');
require('dotenv').config();
const config = {
    "defaultEnv": "local",
    "local": {
        "driver": "mysql",
        "host": process.env.HOSTNAME,
        "user": process.env.USER,
        "port": process.env.PORT,
        "password": process.env.PASSWORD,
        "database": "guestbook"
    }
};

const migrationConfig = JSON.stringify(config);

fs.writeFileSync('database.json', migrationConfig);