import { makeExecutableSchema } from '@graphql-tools/schema'

export const schema = makeExecutableSchema({
  typeDefs: `
    type User {
      id: ID!
      firstName: String
    }

    type Query {
      user(id: ID!): User
    }
  `,
  resolvers: {
    Query: {
      user(root, args, context) {
        return context.dataSource.db.getUser(args.id)
      },
    },
  },
})
