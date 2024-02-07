function getArticleGenerator(articles) {
  let articlesContent = Array.from(articles);

  let content = document.getElementById("content");

  return () => {
    if (!articlesContent.length) {
      return;
    }
    firtsEl = articlesContent.shift();

    let p = document.createElement("article");
    p.textContent = firtsEl;
    content.appendChild(p);
  };
}
