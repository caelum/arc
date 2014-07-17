var md = require('node-markdown').Markdown;

parser = {};

parser.parseItalic = function(string) {
  string = md(string, true, "em");

  var italicRegexp = /<em>(.*)<\/em>/g;
  var italics = string.match(italicRegexp);

  for(i in italics) {
    string = string.replace(italicRegexp, "::$1::");
  }

  console.log(string);

  return string;
}

module.exports = parser;
