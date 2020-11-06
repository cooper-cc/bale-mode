import * as fs from "fs-extra";
import { execSync } from "child_process";

type Config = {
	testing: number[],
	destination: string,
	ids: {computer: number[], tablet: number[], turtle: number[]}
};

function isActive(id: number) {
	return config.testing.length === 0 || config.testing.includes(id);
}

function setupID(type: string, id: number) {
	if (!isActive(id)) return;
	fs.copySync(`dist/${type}`, `dist/final/${id}`);
}

const config: Config = fs.readJsonSync("lua/config.json");
if (config.destination === "") {
	console.warn("Please set a destination in the `lua/config.json` file.")
	process.exit();
}

fs.ensureDir("dist/final");
for (let id of config.ids.computer) setupID("computer", id);
for (let id of config.ids.tablet) setupID("tablet", id);
for (let id of config.ids.turtle) setupID("turtle", id);

let final = fs.readdirSync("dist/final");
for (let id of final) {
	if (!isActive(parseInt(id))) continue;
	console.log("Sending id: " + id);
	execSync(`scp -r dist/final/${id} ${config.destination}`);
}

fs.rmdirSync("dist/final", {recursive: true});

