import { renderMarkdown, debounce } from "./markdown.js";

const editor = document.getElementById("markdownEditor");
const renderer = document.getElementById("markdownRenderer");

editor.addEventListener("input", debounce(() => renderMarkdown(editor, renderer), 300));

document.getElementById("createAccount").addEventListener("click", () => {
  alert("Create Account functionality not yet implemented");
});

document.getElementById("exportAccount").addEventListener("click", () => {
  alert("Export Account functionality not yet implemented");
});

document.getElementById("createItem").addEventListener("click", () => {
  alert("Create Item functionality not yet implemented");
});

document.getElementById("copyLinkToItem").addEventListener("click", () => {
  alert("Copy Link to Item functionality not yet implemented");
});

