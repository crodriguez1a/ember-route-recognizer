import SegmentTrieNode from './segment-trie-node';

class EpsilonSegment extends SegmentTrieNode {
  constructor() {
    super(...arguments);
    this.type = 'epsilon';
  }

  get score() {
    return '0';
  }

  appendTo(parentNode) {
    this.parent = parentNode;
    this.haystack = this.parent.children.epsilonSegments;
    return this.existingOrSelf();
  }

}

export default EpsilonSegment;
