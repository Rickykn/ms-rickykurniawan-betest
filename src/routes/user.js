const router = require("express").Router();
const UserService = require("../services/user");
const { authorizedLoggedInUser } = require("../middlewares/authMiddleware");
const { cache } = require("../middlewares/cache");

router.get("/", authorizedLoggedInUser, cache, async (req, res) => {
  try {
    const serviceResult = await UserService.getAllUser(req);

    if (!serviceResult.success) throw serviceResult;

    return res.status(serviceResult.statusCode || 200).json({
      message: serviceResult.message,
      result: serviceResult.data,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
    });
  }
});

router.get("/accountnumber/:accountnumber", async (req, res) => {
  try {
    const serviceResult = await UserService.getUserByAccountNumber(req);

    if (!serviceResult.success) throw serviceResult;

    return res.status(serviceResult.statusCode || 200).json({
      message: serviceResult.message,
      result: serviceResult.data,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
    });
  }
});

router.get(
  "/identitynumber/:identitynumber",
  authorizedLoggedInUser,
  async (req, res) => {
    try {
      const serviceResult = await UserService.getUserByIdentityNumber(req);

      if (!serviceResult.success) throw serviceResult;

      return res.status(serviceResult.statusCode || 200).json({
        message: serviceResult.message,
        result: serviceResult.data,
      });
    } catch (err) {
      return res.status(err.statusCode || 500).json({
        message: err.message,
      });
    }
  }
);

router.post("/", authorizedLoggedInUser, async (req, res) => {
  try {
    const serviceResult = await UserService.createUser(req);

    if (!serviceResult.success) throw serviceResult;

    return res.status(serviceResult.statusCode || 201).json({
      message: serviceResult.message,
      result: serviceResult.data,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
    });
  }
});

router.delete("/:id", authorizedLoggedInUser, async (req, res) => {
  try {
    const serviceResult = await UserService.deleteUser(req);

    if (!serviceResult.success) throw serviceResult;

    return res.status(serviceResult.statusCode || 201).json({
      message: serviceResult.message,
      result: serviceResult.data,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
    });
  }
});

router.get("/token", async (req, res) => {
  try {
    const serviceResult = await UserService.getUserToken(req);

    if (!serviceResult.success) throw serviceResult;

    return res.status(serviceResult.statusCode || 200).json({
      message: serviceResult.message,
      result: serviceResult.data,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
    });
  }
});

router.put("/:id", authorizedLoggedInUser, async (req, res) => {
  try {
    const serviceResult = await UserService.updateUser(req);

    if (!serviceResult.success) throw serviceResult;

    return res.status(serviceResult.statusCode || 200).json({
      message: serviceResult.message,
      result: serviceResult.data,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
    });
  }
});

module.exports = router;
