import { marked } from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
  highlight: function (code, language) {
    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
    return hljs.highlight(code, {language: validLanguage}).value;
  },
});

function renderMarkdown(input, output) {
  const markdownText = input.value;
  const html = marked(markdownText);
  output.innerHTML = html;
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

module.exports = { renderMarkdown, debounce };

