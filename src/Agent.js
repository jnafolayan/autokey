import Trie from "./Trie";

export default class Agent {
  constructor() {
    this.tree = new Trie();
  }

  /**
   * An array of key-value pairs that point a search query to data
   * @param {object[]} mappings
   * @param {string} mapping.query - The search query
   * @param {any} mapping.data - What the query maps to
   * @returns void
   */
  build(mappings) {
    mappings.forEach(({ query, data }) => {
      this.recognize(query, data);
    });
  }

  recognize(query, data) {
    this.tree.insert(query, data);
  }

  query(query) {
    const result = this.tree.search(query);
    return {
      query,
      result
    };
  }
}
