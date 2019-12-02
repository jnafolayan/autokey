# Autokey
An implementation of an autocompletion library in JavaScript

# Usage
You can install the packing using NPM
```bash
npm install autokey --save
```
or Yarn
```bash
yarn add autokey
```

# Example
```javascript
import { Agent } from "autokey";

const agent = new Agent();

// index all search terms
agent.recognize("dogs", 1);
agent.recognize("fish", 2);
agent.recognize("fisherman", 3);

// search for autocompletions
const { query, result } = agent.query("fis");
console.log(result); // [{ key: "fish", data: 2 }, { key: "fisherman", data: 3 }]

```