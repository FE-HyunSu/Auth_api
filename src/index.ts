import express, { Express } from 'express';
import routes from './api';
import generalErrorHandler from './errors/generalErrorHandler';
import config from './config';
import { createConnection } from './database';

createConnection();

const app: Express = express();
const port = config.port;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(generalErrorHandler);

app.listen(port, () => {
    console.log(`
    #####################################
    🛡️  Server listening on port: ${port} 🛡️
    #####################################
  `);
}).on('error', (err) => {
    console.error(err);
    process.exit(1);
});
