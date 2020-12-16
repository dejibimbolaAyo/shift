const express = require('express')
const app = express();
const router = express.Router();
const cors = require('cors');
const { routes } = require('./src/routes');

app.use(cors());
app.use(express.json());

routes(router);

app.use('/api/v1/', router);
app.listen(8090, () => console.log(`Listening on port 8090`));
