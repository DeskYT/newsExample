"use strict";

/**
 *
 * @param {string} tagName
 * @param {object} options
 * @param {string[]} options.classNames - css classes
 * @param {object} options.handlers - event handlers
 * @param {object} options.attributes - attributes
 * @param  {...Node} children
 * @returns {HTMLElement}
 */
function createElement(
  tagName,
  { classNames = [], handlers = {}, attributes = {} } = {},
  ...children
) {
  const elem = document.createElement(tagName);
  elem.classList.add(...classNames);

  /*
  attributes object example
  {
    src: "https://example.com",
    value: "text",
    name: "textInput",
  }
  */

  for( const [attrName, attrValue] of Object.entries(attributes)){
    elem.setAttribute(attrName, attrValue);
  }

  for (const [eventType, eventHandler] of Object.entries(handlers)) {
    elem.addEventListener(eventType, eventHandler);
  }

  elem.append(...children);
  return elem;
}

function hideElement(elem) {
  //elem.classList.add("visuallyhidden");
  elem.style.opacity =  "0";
  elem.addEventListener(
    "transitionend",
    ({ currentTarget }) => currentTarget.style.display = 'none',
    { once: true }
  );
}

function showElement(elem){
  elem.style.removeProperty('display');

  setTimeout(function () {
    //addNewPostBtn.classList.remove("visuallyhidden");
    elem.style.opacity =  "100";
  }, 20);
}

function clearChildren(elem) {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}