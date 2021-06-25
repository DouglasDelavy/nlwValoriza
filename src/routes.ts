import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();

router.post("/users", createUserController.handle);
router.get("/users", listUsersController.handle);
router.post("/login", authenticateUserController.handle);

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

router.get(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  listTagsController.handle
);

router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

router.get(
  "/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);
router.get(
  "/compliments/receive",
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
);

export { router };
