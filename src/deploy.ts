import * as fs from "fs-extra";

type Config = {
	path: string,
	ids: {computer: number[], tablet: number[], turtle: number[]}
};

const config: Config = fs.readJsonSync("config.json");

console.log(config);

