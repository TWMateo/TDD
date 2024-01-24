// TextAnalyzer.spec.js

const TextAnalyzer = require('./TextAnalyzer');

describe('TextAnalyzer', () => {
	describe('word frequency', () => {
	  const sampleText = 'Hello World! Hello all the people of the world.';
	  const analyzer = new TextAnalyzer(sampleText);
	  const frequency = analyzer.wordFrequency();
  
	  it('calculates the frequency of each word in the text', () => {
		expect(frequency['hello']).toBe(2);
		expect(frequency['world']).toBe(2);
		expect(frequency['all']).toBe(1);
		expect(frequency['the']).toBe(2); // Corregido a 2
		expect(frequency['people']).toBe(1);
		expect(frequency['of']).toBe(1);
	  });
	});
  
	describe('additional text analysis', () => {
		const longText = 'This is a longer example. This example contains multiple sentences. ' +
						 'The purpose of this example is to thoroughly test the TextAnalyzer.';
		const analyzer = new TextAnalyzer(longText);
		const frequency = analyzer.wordFrequency();
	  
		it('accurately counts words in a longer text', () => {
		  expect(analyzer.wordCount).toBe(21);
		});
	  
		it('accurately calculates word frequencies in a longer text', () => {
		  expect(frequency['this']).toBe(3); // Corregido a 3
		  expect(frequency['example']).toBe(3); // Corregido a 3
		  expect(frequency['is']).toBe(2);
		  expect(frequency['to']).toBe(1);
		  expect(frequency['thoroughly']).toBe(1);
		});
	  
		it('accurately finds keyword locations in a longer text', () => {
		  const locationsExample = analyzer.keywordLocations('example');
		  expect(locationsExample).toEqual([4, 6, 14]); // Corregidas las ubicaciones
		});
	  });
  

  describe('word count', () => {
    const text = 'Hello world. Hello everyone.';
    const analyzer = new TextAnalyzer(text);

    it('counts the number of words in the text', () => {
      expect(analyzer.wordCount).toBe(4);
    });
  });

  describe('keyword locations', () => {
    const text = 'Hello world. Hello everyone.';
    const analyzer = new TextAnalyzer(text);

    it('identifies the locations of a keyword in the text', () => {
      const locationsHello = analyzer.keywordLocations('hello');
      expect(locationsHello).toEqual([0, 2]);
    });

    it('returns an empty array if the keyword is not present', () => {
      const locations = analyzer.keywordLocations('nonexistent');
      expect(locations).toEqual([]);
    });
  });
});
