const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {

    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });
        return user;
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    //New user
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password })
      const token = signToken(user)
      return { token, user };
    },

    // login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })
      if (!user) {
        throw new AuthenticationError("Email not found")
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Password not found");
      }
      const token = signToken(user)
      return { token, user }
    },
    // saveBook
    saveBook: async (parent, { newBook }, context) => {
      const updateUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedBooks: newBook } },
        {
          new: true,

        }
      );
      return updateUser
    },

    // deleteBook
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: bookId } },
          {
            new: true
          }
        );
        return updatedUser;
      }
    }
  },
}
  module.exports = resolvers;