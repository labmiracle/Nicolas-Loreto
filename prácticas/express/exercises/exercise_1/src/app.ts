import express from 'express';
import { serviceConfig } from './settings';

const app = express();

const port = process.env.PORT || serviceConfig.port;

app.use(express.json());

// middleware function

const register = (req: { url: string }, res: unknown, next: () => void) => {
  console.log(req.url);
  next();
};

app.use(register);

app.use(express.static('src/public'));

app.get('/', (req, res) => {
  return res.end('Hi from the server');
});

app.get('/yo', (req, res) => {
  return res.end(`Hi`);
});

app.listen(port, () => {
  console.log('server started on port', port);
});
