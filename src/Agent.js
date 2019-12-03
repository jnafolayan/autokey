import Trie from "./Trie";

export default class Agent {
  constructor() {
    this.tree = new Trie();
  }

  /**
   * An array of key-value pairs that point a search query to data
   * @param {object[]} mappings
   * @param {string} mapping.query - the search query
   * @param {any} mapping.data - what the query maps to
   * @returns void
   */
  build(mappings) {
    mappings.forEach(({ query, data }) => {
      this.recognize(query, data);
    });
  }

  /**
   * Index a search query
   * @param {string} query - the search query
   * @param {any} data - what thr query maps to
   * returns void
   */
  recognize(query, data) {
    this.tree.insert(query, data);
  }

  /**
   * Find completions for a search term.
   * @param {string} query - the search term
   * @returns {object} out
   * @returns {string} out.query - the search term
   * @returns {array} out.result - a list of key/data pairs for completions
   */
  query(query) {
    const result = this.tree.search(query);
    return {
      query,
      result
    };
  }
}
