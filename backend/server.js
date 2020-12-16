const express = require('express')
const cors = require('cors');
const router = require('./src/routes');

const app = express();

app.use(cors());
app.use('/api/v1/', router);

app.listen(8081, () => console.log(`Listening on port 8081`));
