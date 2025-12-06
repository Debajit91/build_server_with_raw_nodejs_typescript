import { config } from "dotenv";
import http, { IncomingMessage, Server, ServerResponse } from "http";
import path from "path";
import { env } from "./config";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("Server is running...");

    if (req.url === "/" && req.method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-type", "application/json");

      res.end(
        JSON.stringify({
          message: "Hello from node js with typescript...",
          path: req.url,
        })
      );
    }

    if (req.url === "/api" && req.method === "GET") {
      res.statusCode = 200;
      res.setHeader("Content-type", "application/json");

      res.end(
        JSON.stringify({
          message: "Health Status",
          path: req.url,
        })
      );
    }

    if (req.url === "/api/users" && req.method === "POST") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        try {
          const parsed = JSON.parse(body);
          console.log(parsed);
          res.end(JSON.stringify(parsed));
        } catch (error: any) {
          console.log(error?.message);
        }
      });
    }
  }
);

server.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
});
