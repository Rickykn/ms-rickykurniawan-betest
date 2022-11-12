const Service = require("../service");
const User = require("../../models/user");

class UserService extends Service {
  static getAllUser = async (req) => {
    try {
      const data = await User.find();

      if (!data) {
        return this.handleError({
          message: "User Not Found",
          statusCode: 400,
        });
      }

      return this.handleSuccess({
        message: "User Found",
        statusCode: 200,
        data: data,
      });
    } catch (err) {
      return this.handleError({
        message: "Server Error",
        statusCode: 500,
      });
    }
  };

  static getUserByAccountNumber = async (req) => {
    try {
      const { accountnumber } = req.params;

      const data = await User.findOne({ accountNumber: accountnumber });

      if (!data) {
        return this.handleError({
          message: "User Not Found",
          statusCode: 400,
        });
      }

      return this.handleSuccess({
        message: "User Found",
        statusCode: 200,
        data: data,
      });
    } catch (err) {
      return this.handleError({
        message: "Server Error",
        statusCode: 500,
      });
    }
  };

  static deleteUser = async (req) => {
    try {
      const { id } = req.params;

      const data = await User.deleteOne({ _id: id });

      if (data.deletedCount === 0) {
        return this.handleError({
          message: "User Not Found",
          statusCode: 400,
        });
      }
      return this.handleSuccess({
        message: "Deleted Success",
        statusCode: 200,
      });
    } catch (err) {
      return this.handleError({
        message: "Server Error",
        statusCode: 500,
      });
    }
  };

  static getUserByIdentityNumber = async (req) => {
    try {
      const { identitynumber } = req.params;

      const data = await User.findOne({ identityNumber: identitynumber });

      if (!data) {
        return this.handleError({
          message: "User Not Found",
          statusCode: 400,
        });
      }

      return this.handleSuccess({
        message: "User Found",
        statusCode: 200,
        data: data,
      });
    } catch (err) {
      return this.handleError({
        message: "Server Error",
        statusCode: 500,
      });
    }
  };

  static createUser = async (req) => {
    try {
      const { username, accountnumber, emailaddress, identitynumber } =
        req.body;

      const isUsernameTaken = await User.findOne({ userName: username });

      if (isUsernameTaken) {
        return this.handleError({
          message: "Username has been taken",
          statusCode: 400,
        });
      }

      const user = new User({
        userName: username,
        accountNumber: accountnumber,
        emailAddress: emailaddress,
        identityNumber: identitynumber,
      });
      const newUser = await user.save();

      return this.handleSuccess({
        message: "Registered User",
        statusCode: 201,
        data: newUser,
      });
    } catch (err) {
      this.handleError({
        message: "Server Error",
        statusCode: 500,
      });
    }
  };
}

module.exports = UserService;
