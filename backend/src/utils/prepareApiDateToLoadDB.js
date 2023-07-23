const { v4: uuidv4 } = require('uuid')

module.exports = (launch, sequenceInsert) => {
  const payloadLaunches = launchData(launch, sequenceInsert)
  const payloadLinks = linkData(launch.links, launch.id)
  const payloadCores = coreData(launch.cores, launch.id)
  const payloadFailures = failuresData(launch.failures, launch.id)
  const payloadCrew = crewData(launch.crew)
  return {
    ...payloadLaunches,
    links: {
      create: payloadLinks,
    },
    cores: {
      create: payloadCores,
    },
    failures: {
      create: payloadFailures,
    },
    crews: {
      create: payloadCrew,
    },
  }
}

function launchData(data, sequence) {
  return {
    id: data.id,
    upcoming: data.upcoming,
    date_precision: data.date_precision,
    date_local: data.date_local,
    date_unix: data.date_unix,
    date_utc: data.date_utc,
    name: data.name,
    flight_number: data.flight_number,
    auto_update: data.auto_update,
    launchpad: data.launchpad,
    details: data.details,
    success: data.success,
    rocket: data.rocket,
    window: data.window,
    net: data.net,
    tbd: data.tbd,
    static_fire_date_unix: data.static_fire_date_unix,
    static_fire_date_utc: data.static_fire_date_utc,
    fairings_reused: data.fairings?.reused,
    fairings_recovery_attempt: data.fairings?.recovery_attempt,
    fairings_recovered: data.fairings?.recovered,
    fairings_ships: data.fairings?.ships || [],
    payloads: data.payloads,
    capsules: data.capsules,
    ships: data.ships,
    failures: data.failures,
    sequence: sequence,
  }
}

function linkData(data) {
  return {
    id: uuidv4(),
    patch_small: data.patch.small,
    patch_large: data.patch.large,
    reddit_campaign: data.reddit.campaigh,
    reddit_launch: data.reddit.launch,
    reddit_media: data.reddit.media,
    reddit_recovery: data.reddit.recovery,
    presskit: data.presskit,
    webcast: data.webcast,
    youtube_id: data.youtube_id,
    article: data.article,
    wikipedia: data.wikipedia,
    flickr_small: data.flickr.small,
    flickr_original: data.flickr.original,
  }
}

function coreData(data) {
  return data.map((item) => {
    item.id = uuidv4()
    return item
  })
}

function failuresData(data) {
  return data.map((item) => {
    item.id = uuidv4()
    return item
  })
}

function crewData(data) {
  if (data.length === 0) return undefined
  return data.map((item) => {
    item.id = uuidv4()
    return item
  })
}
