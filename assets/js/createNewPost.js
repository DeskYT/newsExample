function createNewPost({ title, content, creationDate }) {
  return createElement(
    "article",
    { classNames: ["post"] },
    createPostHeader(title, creationDate),
    createPostContent(content)
  );
}

function createPostHeader(title, creationDate) {
  return createElement(
    "header",
    { classNames: ["postHeader"] },
    createElement(
      "h2",
      { classNames: ["postTitle"] },
      document.createTextNode(title)
    ),
    createElement(
      "div",
      { classNames: ["postCreationDate"] },
      document.createTextNode(creationDate.toLocaleDateString())
    )
  );
}

function createPostContent(content) {
  return createElement(
    "p",
    { classNames: ["postContent"] },
    document.createTextNode(content)
  );
}
