import * as http from "http";
import app from "./app";

const NAME = `server`;
import Debug from "debug";
const debug = Debug(NAME);

const PORT = "6003";

let port = normalizePort(process.env.PORT);

app.set("port", port);

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
  let addr = server.address();
  if (addr) {
    let bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    debug("[I] Listening on " + bind);
  }
};

const server = http.createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
console.log(`[I] [index] server running on "http://localhost:${port}"`);

/**
 * 格式化端口
 * @param val 环境变量
 */
function normalizePort(val: string = PORT) {
  let t = parseInt(val);
  let defaultPort = parseInt(PORT);
  if (isNaN(t)) {
    /* 端口错误 */
    debug("端口错误：val ", val);
    return defaultPort;
  } else if (!(t > 0 && t < 65535)) {
    /* 超出范围 */
    debug("端口超出范围：val ", val);
    return defaultPort;
  } else {
    return t;
  }
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}
