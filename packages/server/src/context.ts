import { prisma } from 'clients'

class DbSource {
  getUser(id: string) {
    return prisma.user.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    })
  }
}

export const context = {
  dataSource: {
    db: new DbSource(),
  },
}
