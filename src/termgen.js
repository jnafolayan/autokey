import packageInfo from "../package.json";
import Agent from "./Agent.js";

const termgen = {
	version: packageInfo.version,
};

termgen.Agent = Agent;

export { Agent };
export default termgen;