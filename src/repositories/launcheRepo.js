const { prisma } = require('../helpers/prisma')

exports.findMany = async (data, pageSize, pageNumber) => {
  const offset = (pageNumber - 1) * pageSize
  const include = {
    crews: true,
    failures: true,
    cores: true,
    links: true,
    rockets: true,
  }
  let where = {}
  where.success = { not: null }

  if (data) {
    const containsSuccess = 'sucesso'.toLowerCase().includes(data.search)
    const containsFailed = 'falhou'.toLowerCase().includes(data.search)

    where = {
      ...where,
      OR: [
        {
          name: {
            contains: data.search,
            mode: 'insensitive',
          },
        },
        {
          rockets: {
            name: {
              contains: data.search,
              mode: 'insensitive',
            },
          },
        },
      ],
    }
    if (containsSuccess) {
      where.OR.push({ success: true })
    }
    if (containsFailed) {
      where.OR.push({ success: false })
    }
  }

  const counter = await prisma.launch.findMany({ include, where })
  const results = await prisma.launch.findMany({
    include,
    where,
    take: pageSize,
    skip: offset,
    orderBy: {
      flight_number: 'desc',
    },
  })
  return { results, count: counter.length }
}

exports.listYears = async () => {
  return await prisma.launch.groupBy({
    by: ['date_utc'],
    orderBy: {
      date_utc: 'asc',
    },
  })
}

exports.findByYearAndRocket = async (year, rocketId) => {
  return await prisma.launch.findMany({
    // include: {
    //   rockets: true,
    // },
    where: {
      date_utc: {
        gte: new Date(`${year}-01-01T00:00:00.000Z`),
        lt: new Date(`${+year + 1}-01-01T00:00:00.000Z`),
      },
      success: { not: null },
      rocket_id: rocketId,
    },
    orderBy: {
      date_utc: 'asc',
    },
  })
}

exports.findById = async (id) => {
  return await prisma.launch.findFirst({
    where: { id },
  })
}

exports.create = async (data) => {
  return await prisma.launch.create({
    data: data,
  })
}

exports.count = async (where) => {
  return await prisma.launch.count({
    where: where,
  })
}

exports.maxSequence = async () => {
  const max = await prisma.launch.aggregate({
    _max: {
      sequence: true,
    },
  })
  return max._max.sequence
}
