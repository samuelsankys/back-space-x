const { prisma } = require('../helpers/prisma')

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
