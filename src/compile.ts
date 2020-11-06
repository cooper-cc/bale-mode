import * as fs from "fs-extra";

fs.rmdirSync("./dist", {recursive: true});
fs.mkdirSync("./dist");

fs.copySync("./lua/common", "./dist/computer");
fs.copySync("./lua/common", "./dist/tablet");
fs.copySync("./lua/common", "./dist/turtle");

fs.copySync("./lua/computer", "./dist/computer");
fs.copySync("./lua/tablet", "./dist/tablet");
fs.copySync("./lua/turtle", "./dist/turtle");

