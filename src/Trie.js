class Node {
  constructor(string, data=null) {
    this.key = string[0];
    this.children = [];
    this.data = data;
  }

  insert(key, data) {
    let first = key[0];
    let child = this.children.find(ch => ch.key == first);
    if (!child) {
      child = new Node(first);
      this.children.push(child);
    }

    key = key.substr(1);
    if (key.length) {
      child.insert(key, data);
    } else {
      child.data = data;
    }
  }

  search(key, result=[], candidate="") {
    const first = key[0];

    if (this.key == first || !key) {
      candidate += this.key;

      if (this.data) {
        result.push({ key: candidate, data: this.data });
      }

      key = key.substr(1);
      this.children.forEach(child => child.search(key, result, candidate));
    }
  }
}

export default class Trie {
  constructor() {
    this.root = new Node("", null);
  }

  insert(key, data) {
    this.root.insert(key, data);
  }

  search(key) {
    const result = [];
    this.root.children.forEach(child => child.search(key, result));
    return result;
  }
}