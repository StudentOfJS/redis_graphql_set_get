export default {
  Query: {
    get: (parent, { key }, { client }) => {
      try {
        return client.getAsync(key)
      } catch (error) {
        console.log(error)
        return null
      }
    }
  },
  Mutation: {
    set: async (parent, { key, value }, { client }) => {
      try {
        await client.set(key, value)
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    }
  }
}