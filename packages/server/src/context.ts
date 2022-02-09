import { prisma } from 'clients'
import { user } from '@prisma/client'

class DbSource {
  getUser(id: string): Promise<user | null> {
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
