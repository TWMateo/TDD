// TextAnalyzer.js

class TextAnalyzer {
  constructor(text) {
    this.text = text;
    this.words = this.tokenize(text);
  }

  tokenize(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .split(" ");
  }

  get wordCount() {
    return this.words.length;
  }

  wordFrequency() {
    const frequency = {};
    for (const word of this.words) {
      if (word) frequency[word] = (frequency[word] || 0) + 1;
    }
    return frequency;
  }

  keywordLocations(keyword) {
    const locations = [];
    this.words.forEach((word, index) => {
      if (word === keyword.toLowerCase()) {
        locations.push(index);
      }
    });
    return locations;
  }
}

module.exports = TextAnalyzer;
