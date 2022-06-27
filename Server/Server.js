// import koa from "koa";
const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

const userRouter = require("./Routes/userRouter");

const app = new koa();
app.use(bodyParser());
app.use(cors());

app.use(userRouter.routes());

app.use((ctx) => {
  ctx.body = "Resources you are looking not found";
  // ctx.status(404);
});

app.listen(3000);
console.log("Running on 3000");
