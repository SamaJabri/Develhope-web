class Sentence {
  constructor() {
    this.content = "I";
    this.logger = null;
  }

  setLogger(logger) {
    this.logger = logger;
  }

  appendToSentence(newContent) {
    this.content += newContent;
  }

  logValue() {
    if (!this.logger) {
      throw new Error("No logger instance set");
    }

    this.logger.output(this.content);
  }
}

export default Sentence;
