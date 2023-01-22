import Sentence from "./Sentence.mjs";
import Logger from "./Logger.mjs";

const sentence = new Sentence();

sentence.setLogger(new Logger());

sentence.appendToSentence("Am");
sentence.appendToSentence("Cool");

sentence.logValue();
