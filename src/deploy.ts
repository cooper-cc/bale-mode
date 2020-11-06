import * as fs from "fs-extra";
import { exec } from "child_process";

type Config = {
	destination: string,
	ids: {computer: number[], tablet: number[], turtle: number[]}
};

function setupID(type: string, id: number) {
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
	console.log("Sending id: " + id);
	exec(`scp -r dist/final/${id} ${config.destination}`);
}

fs.rmdirSync("dist/final", {recursive: true});

