const Router = require("@koa/router");
const User = require("../API/userAPI");

const userRouter = new Router({ prefix: "/user" });

userRouter.get("/", async (ctx) => {
  ctx.body = await User.get();
});

userRouter.get("/:id", async (ctx) => {
  const id = ctx.params.id;
  ctx.body = await User.getById(id);
});

userRouter.post("/", async (ctx) => {
  const data = ctx.request.body;
  ctx.body = await User.create(data);
  console.log(ctx.body);
});

userRouter.put("/:id", async (ctx) => {
  const id = ctx.params.id;
  const data = ctx.request.body;
  ctx.body = await User.update(id, data);
});

userRouter.delete("/:id", async (ctx) => {
  const id = ctx.params.id;
  ctx.body = await User.deleteUser(id);
});

module.exports = userRouter;
