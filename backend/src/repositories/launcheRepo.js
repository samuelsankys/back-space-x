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

exports.count = async () => {
  return await prisma.launch.count()
}

exports.maxSequence = async () => {
  const max = await prisma.launch.aggregate({
    _max: {
      sequence: true,
    },
  })
  return max._max.sequence
}
