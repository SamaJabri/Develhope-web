class Sentence {
  constructor() {
    this.content = "I";
  }

  appendToSentence(newContent) {
    this.content += newContent;
  }
}

export const sentence = new Sentence();
