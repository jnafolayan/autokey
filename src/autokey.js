import packageInfo from "../package.json";
import Agent from "./Agent.js";

const autokey = {
	version: packageInfo.version,
};

autokey.Agent = Agent;

// test
const ag = new Agent();

ag.recognize("xiaomi red note", 1);
ag.recognize("xiaomi red note", 2);
ag.recognize("xiaomi note", 1);
ag.recognize("infinix hot 7", 1);
ag.recognize("infinix hot 6", 1);
ag.recognize("infinix hot 3", 1);
ag.recognize("infinix spark 3", 1);

console.log(ag.query("").result)

export { Agent };
export default autokey;