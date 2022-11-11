import express from "express";
import bodyParser from "body-parser";
import cors, { CorsOptions } from "cors";

const app = express();

const port = process.env.PORT || 3333;

// DEV
const whitelist = ["http://localhost:3000"];

const http = require("http").createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions: CorsOptions = {
  origin: function (origin: string | undefined, callback: any) {
    // allow requests with no origin
    if (!origin) return callback(null, true);
    if (whitelist.indexOf(origin) === -1) {
      const message = `This origin is not allowed by the CORS policy.`;
      return callback(new Error(message), false);
    }
    return callback(null, true);
  },
};

app.use(cors(corsOptions));

http.listen(port, () => {
  console.log(`Webiste server listening at http://localhost:${port}`);
});