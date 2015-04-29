var fuzzaldrin = require('fuzzaldrin');
var suggestions = require('./suggestions');


/**
 * A regular expression to getch a correct tag prefix
 * @type {RegExp}
 */
var RE_PREFIX = /@\w*$/;

/**
 * A regular expression to match lines with meaningful symbols before a prefix
 * @type {RegExp}
 */
var RE_BAD_LINE_START = /[^ \t*#\;%].*@\w*$/;


/**
 * Fetches a correct prefix for the specified buffer position
 * @param  {TextEditor} editor         The current editor
 * @param  {Point}      bufferPosition The positions of the caret
 * @return {String} A prefix
 */
function getPrefix(editor, bufferPosition) {
  var lineStart = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);
  var matches = lineStart.match(RE_PREFIX);
  return matches ? matches[0] : '';
}


/**
 * Checks whether suggestions are fetched at the beginning of the comment line
 * @param  {TextEditor} editor         The current editor
 * @param  {Point}      bufferPosition The positions of the caret
 * @return {Boolean} true in case suggestions are fetched at the beginning of the line
 */
function isLineStart(editor, bufferPosition) {
  var lineStart = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);
  return RE_BAD_LINE_START.test(lineStart) === false;
}


module.exports = {

  /**
    Block comment scopes:
    C#:
        source.cs comment.block.source.cs
    Go:
        source.go comment.block.go
    Dart:
        -
    Java:
        source.java comment.block.java
    JavaScript:
        source.js comment.block.documentation.js
    PHP:
        text.html.php meta.embedded.block.php source.php comment.block.documentation.phpdoc.php
    CoffeeScript:
        source.coffee comment.block.coffee storage.type.annotaion.coffee
    Erlang:
        -
    Perl:
        source.perl comment.line.number-sign.perl
        source.perl comment.block.documentation.perl
    Python:
        source.python string.quoted.double.block.python
    Ruby:
        source.ruby comment.block.documentation.ruby
    Clojure:
        source.clojure comment.line.semicolon.clojure
  */

  selector: '.comment.block' +
            ', .comment.line.number-sign.perl' +
            ', .string.quoted.double.block.python' +
            ', .comment.line.semicolon.clojure',

  getSuggestions: function getSuggestions(options) {
    var editor = options.editor,
        bufferPosition = options.bufferPosition;

    var prefix = getPrefix(editor, bufferPosition);
    if (!prefix) {
      return [];
    }

    if (!isLineStart(editor, bufferPosition)) {
      return [];
    }

    var results = fuzzaldrin.filter(suggestions, prefix, { key: 'displayText' });

    results.forEach(function(suggestion) {
      suggestion.replacementPrefix = prefix;
    });

    return results;
  }
};
