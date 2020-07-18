/** express */
import * as express from "express";

/**
 * catch 404 and forward to error handler
 */
export const notFond: express.RequestHandler = (req, res, next) => {
  /* 传递一个http error */
  next({ status: 404 });
};
/**
 * error handler
 */
export const errorHandler: express.ErrorRequestHandler = function (
  err,
  req,
  res,
  next
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  let code = err.status || 500;
  res.status(code).send(`Error Code: ${code}`);
};
