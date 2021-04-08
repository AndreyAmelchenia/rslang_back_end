const { OK, NO_CONTENT } = require('http-status-codes');
const router = require('express').Router();
const multer = require('multer');
const userService = require('./user.service');
const { id, user } = require('../../utils/validation/schemas');
const {
  validator,
  userIdValidator
} = require('../../utils/validation/validator');

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../../../assets/photo-user');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

router.post(
  '/',
  validator(user, 'body'),
  multer({ storage: storageConfig }).single('filedata'),
  async (req, res) => {
    const userEntity = await userService.save({
      ...req.body,
      photo: req.file ? `photo-user/${req.file.filename}` : ''
    });
    res.status(OK).send(userEntity.toResponse());
  }
);

router.get(
  '/:id',
  userIdValidator,
  validator(id, 'params'),
  async (req, res) => {
    const userEntity = await userService.get(req.params.id);
    res.status(OK).send(userEntity.toResponse());
  }
);

router.put(
  '/:id',
  userIdValidator,
  validator(id, 'params'),
  validator(user, 'body'),
  async (req, res) => {
    const userEntity = await userService.update(req.userId, req.body);
    res.status(OK).send(userEntity.toResponse());
  }
);

router.delete(
  '/:id',
  userIdValidator,
  validator(id, 'params'),
  async (req, res) => {
    await userService.remove(req.params.id);
    res.sendStatus(NO_CONTENT);
  }
);

module.exports = router;
