const { prisma } = require('../helpers/prisma')

exports.findById = async (id) => {
  return await prisma.rockets.findFirst({
    where: { id },
  })
}

exports.findAll = async () => {
  return await prisma.rockets.findMany()
}

exports.countSuccess = async (success) => {
  return await prisma.rockets.findMany({
    include: {
      _count: {
        select: {
          launches: {
            where: {
              success: success,
            },
          },
        },
      },
    },
  })
}

exports.create = async (data) => {
  return await prisma.rockets.create({
    data: data,
  })
}

exports.count = async (where) => {
  return await prisma.rockets.count({
    where: where,
  })
}

exports.maxSequence = async () => {
  const max = await prisma.rockets.aggregate({
    _max: {
      sequence: true,
    },
  })
  return max._max.sequence
}
