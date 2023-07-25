module.exports = (data, sequence) => {
  return {
    id: data.id,
    name: data.name,
    type: data.type,
    sequence: sequence,
    active: data.active,
    stages: data.stages,
    boosters: data.boosters,
    cost_per_launch: data.cost_per_launch,
    success_rate_pct: data.success_rate_pct,
    first_flight: new Date(data.first_flight),
    country: data.country,
    company: data.company,
    wikipedia: data.wikipedia,
    description: data.description,
    flickr_images: data.flickr_images,
  }
}
