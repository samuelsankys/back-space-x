const { prisma } = require('../helpers/prisma')

exports.findById = async (id) => {
  return await prisma.rockets.findFirst({
    where: { id },
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
