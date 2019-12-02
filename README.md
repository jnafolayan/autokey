# Termgen
An implementation of an autocompletion library in JavaScript

# Usage
You can install the packing using NPM
```bash
npm install termgen --save
```
or Yarn
```bash
yarn add termgen
```

# Example
```javascript
import { Agent } from "termgen";

const agent = new Agent();

// index all search terms
agent.recognize("dogs", 1);
agent.recognize("fish", 2);
agent.recognize("fisherman", 3);

// search for autocompletions
const { query, result } = agent.query("fis");
console.log(result); // [{ key: "fish", data: 2 }, { key: "fisherman", data: 3 }]

```