require('dotenv').config();
// require('./db');
const cors = require('cors');
const express = require('express');
const app = express();

// SETTINGS
app.set('PORT', process.env.PORT || 4000);

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/users', require('./routes/users'));

async function main() {
    await app.listen(app.get('PORT'));
    console.log('Server in port ', app.get('PORT'));
}

main();