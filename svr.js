import express from 'express';
import * as cc from './api/devices.js'

const app = express();

app.use(express.static('client', { extensions: ['html'] }));


// Deffine API endpoints for chromecast

async function getChromecastDevices(req, res) {
  // Get list of detected chromecast devices
  const devices = ['Devices 1'];
  res.json(devices);
}

// wrap async function for express.js error handling
function asyncWrap(f) {
  return (req, res, next) => {
    Promise.resolve(f(req, res, next))
      .catch((e) => next(e || new Error()));
  };
}

app.get('/api/getChromecastDevices', asyncWrap(getChromecastDevices));

app.listen(8080);
