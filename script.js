const posts = [
  {
    title: "Welcome to my blog",
    // date: "2026-10-31",
    description: "Why I started writing here, and what you can expect to find.",
    url: "posts/welcome.html",
  },
  {
    title: "Learning in public",
    // date: "2026-10-30",
    description:
      "A few thoughts on documenting projects and sharing what I learn.",
    url: "posts/learning.html",
  },
];
const root = document.getElementById("posts");
if (root)
  root.innerHTML = posts
    .map(
      (p) =>
        `<article class="post"><h3><a href="${p.url}">${p.title} ↗</a></h3><p>${p.description}</p></article>`,
    )
    .join("");
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
const saved = localStorage.getItem("theme");
if (saved) document.documentElement.dataset.theme = saved;
document.getElementById("theme")?.addEventListener("click", () => {
  const next =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
});
