const fetch = require('node-fetch')

module.exports = async (req, res) => {
  const url = decodeURIComponent(req.url.replace('/api/jefit-proxy?url=', ''))

  console.log(url)

  const jefitRes = await fetch('https://jefit.com/' + url)
  const body = await jefitRes.text()

  res.status(200).send(body)
}
