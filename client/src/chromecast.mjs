

console.log('This is a test');

async function getChromecastDevices() {
  const r = await fetch('/getDevices/chromecast');
  if (r.ok) { return valuesOnly(await r.json()); }
  console.log('Error fetching data, please try again');
}

console.log(await getChromecastDevices());
