const { prisma } = require('../helpers/prisma')

exports.findMany = async (where, pageSize, pageNumber) => {
  const offset = (pageNumber - 1) * pageSize

  return await prisma.launch.findMany({
    include: {
      crews: true,
      failures: true,
      cores: true,
      links: true,
    },
    where: {
      OR: [
        {
          name: {
            contains: where.search,
            mode: 'insensitive',
          },
        },
      ],
    },
    take: pageSize,
    skip: offset,
  })
}

exports.listYears = async () => {
  return await prisma.launch.groupBy({
    by: ['date_utc'],
    orderBy: {
      date_utc: 'asc',
    },
  })
}

exports.findManyCount = async (where) => {
  return await prisma.launch.count({
    where: {
      OR: [
        {
          name: {
            contains: where.search,
            mode: 'insensitive',
          },
        },
      ],
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
