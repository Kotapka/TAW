import bodyParser from 'body-parser';
import config from './config.js';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import routes from './REST/routes.js';
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '2048kb'}));

app.use(cors());

routes(app);

app.listen(config.port, function () {
 console.info(`Server is running at ${config.port}`)
});
