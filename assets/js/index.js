const addNewPostBtn = document.querySelector(".addNewPostButton");
const postsWrapper = document.querySelector(".postsWrapper");
const searchInput = document.querySelector(".searchInput");
const searchForm = document.querySelector(".searchForm");
searchForm.addEventListener("submit", (e) => e.preventDefault());
renderPosts(posts);

searchInput.addEventListener("keyup", ({ target: { value } }) => {
  renderPosts(posts.filter((post) => post.title.toLowerCase().includes(value.toLowerCase())));
});

function renderPosts(posts) {
  clearChildren(postsWrapper);
  postsWrapper.append(
    ...posts.map((post) => createNewPost(post))
  );
}

addNewPostBtn.addEventListener("click", ({ currentTarget }) => {
  hideElement(currentTarget);
  console.dir(currentTarget);
  const addNewPostContainer = createNewPostContainer();
  postsWrapper.prepend(addNewPostContainer);
});
