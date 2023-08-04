import express from 'express';

import axios from 'axios';

import { serverConfig } from './settings';

const app = express();

const port: number | string = process.env.PORT || serverConfig.port;

app.use('/public', express.static('src/public'));

// axios

app.get('/countries', async (req, res) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const data = response.data;
    res.send(data);
  } catch (error) {
    throw error;
  }
});

app.listen(port, () => {
  console.log('server started on port:', port);
});
