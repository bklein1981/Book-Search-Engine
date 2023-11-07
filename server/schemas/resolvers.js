const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, { username }) => {
      if (!username) {
        throw new AuthenticationError("Cannot find a user with this username")
      }
      const foundUser = await User.findOne({ username: username });
      return foundUser
    }
  },

  Mutation: {
    //New user
    addUser: async (parent, { username, email, password }) => {
      const newUser = await User.create({ username, email, password })
      const token = signToken(newUser)
      return { token, newUser };
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
    saveBook: async (parent, { username, newBook}) => {
      const savedBook = await User.findOneAndUpdate(
        { username: username },
        { $push: { savedBooks: newBook } },
        {
          new: true,
          useFindAndModify: false
        }
      );
      return savedBook
    },

    // deleteBook
    removeBook: async (parent, { bookId }) => {
      const updatedUser = await User.findOneAndUpdate(
        { 'savedBooks.bookId': bookId},
        { $pull: { savedBooks: bookId } },
        {
          new: true,
          useFindAndModify: false
        }
      );
      return updatedUser
    }

  }
};

module.exports = resolvers;