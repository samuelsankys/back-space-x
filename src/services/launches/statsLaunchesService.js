const launchRepo = require('../../repositories/launcheRepo')
const rocketRepo = require('../../repositories/rocketRepo')

module.exports = async () => {
  let listYears = await launchRepo.listYears()
  const years = Array.from(new Set(listYears.map((launch) => new Date(launch.date_utc).getFullYear())))

  const rockets = await rocketRepo.findAll()
  const series = []

  for (const rocket of rockets) {
    const data = []
    for (const year of years) {
      const quant = await launchRepo.findByYearAndRocket(year, rocket.id)
      data.push(quant.length)
    }
    const serieRocket = {
      name: rocket.name,
      data: data,
    }
    series.push(serieRocket)
  }

  return { series, years }
}
