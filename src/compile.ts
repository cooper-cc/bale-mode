import * as fs from "fs-extra";
import {execSync} from "child_process"

fs.rmdirSync("./dist", {recursive: true});
fs.mkdirSync("./dist");

fs.copySync("./lua/common", "./dist/computer");
fs.copySync("./lua/common", "./dist/tablet");
fs.copySync("./lua/common", "./dist/turtle");

fs.copySync("./lua/computer", "./dist/computer");
fs.copySync("./lua/tablet", "./dist/tablet");
fs.copySync("./lua/turtle", "./dist/turtle");

const luaFiles = execSync("find dist -type f -name \"*.lua\"").toString().split('\n');
for (let file of luaFiles) {
	if (file === "") continue;
	let parts = file.split('.');
	parts.pop();
	fs.moveSync(file, parts.join('.'));
}

