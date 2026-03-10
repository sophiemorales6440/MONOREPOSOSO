import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to the Wild Series API!");
};
export default { sayWelcome };