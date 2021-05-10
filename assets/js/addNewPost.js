function publishNewPostHandler(e) {
  e.preventDefault();
  const {
    target: {
      parentNode: newPostContainer,
      elements: {
        newPostTitle: { value: newPostTitle },
        newPostContent: { value: newPostContent },
      },
    },
  } = e;
  newPostContainer.remove();
  const newPost = {
    title: newPostTitle,
    content: newPostContent,
    creationDate: new Date(),
  };
  posts.push(newPost);
  renderNewPost(newPost);
  addNewPostBtn.classList.remove("hidden");
  showElement(addNewPostBtn);
}

function cancelNewPostCreationHandler(e) {
  e.preventDefault();
  const {
    target: { parentNode: newPostContainer },
  } = e;
  newPostContainer.remove();
  showElement(addNewPostBtn);
}

function renderNewPost(post) {
  postsWrapper.append(createNewPost(post));
}

function createNewPostContainer() {
  return createElement(
    "article",
    { classNames: ["newPostContainer", "post"] },
    createElement(
      "h2",
      { classNames: ["postTitle"] },
      document.createTextNode("Add new post")
    ),
    createNewPostForm()
  );
}

function createNewPostForm() {
  return createElement(
    "form",
    {
      classNames: ["newPostForm"],
      handlers: {
        submit: publishNewPostHandler,
        reset: cancelNewPostCreationHandler,
      },
    },
    createFormField(
      "Post title",
      createElement("input", {
        attributes: {
          type: "text",
          name: "newPostTitle",
          placeholder: "Lorem ipsum dolor sit amet",
        },
        classNames: ["formField", "newPostTitle"],
      })
    ),
    createFormField(
      "Post Content",
      createElement("textarea", {
        attributes: {
          type: "text",
          name: "newPostContent",
          rows: "10",
        },
        classNames: ["formField", "newPostContent"],
      })
    ),
    createFormButtonsContainer(
      createElement(
        "button",
        {
          attributes: { type: "submit" },
          classNames: ["formButton"],
        },
        document.createTextNode("Publish")
      ),
      createElement(
        "button",
        {
          attributes: { type: "reset" },
          classNames: ["formButton"],
        },
        document.createTextNode("Cancel")
      )
    )
  );
}

function createFormField(fieldName, innerElement) {
  return createElement(
    "label",
    { classNames: ["formLabel"] },
    createElement(
      "span",
      { classNames: ["formFieldName"] },
      document.createTextNode(fieldName)
    ),
    innerElement
  );
}

function createFormButtonsContainer(...buttons) {
  return createElement(
    "div",
    { classNames: ["formButtonsContainer"] },
    ...buttons
  );
}
