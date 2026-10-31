# Minimal personal blog

Static HTML/CSS/JavaScript blog for GitHub Pages. No build step or dependencies.

## Run locally
Open `index.html` in a browser, or run `python -m http.server 8000` from this folder and visit http://localhost:8000.

## Customize
- Edit your name, bio, and GitHub URL in `index.html`.
- Edit the copyright name in `index.html`.
- Edit the theme and typography in `style.css`.
- Replace the sample posts with your own.

## Publish a new post
1. Copy `posts/welcome.html` to `posts/my-new-post.html`.
2. Edit the `<title>`, date, `<h1>`, and article text.
3. Add a new object at the top of the `posts` array in `script.js` with title, date, description, tags, and `url:'posts/my-new-post.html'`.
4. Commit and push to GitHub.

## Deploy to GitHub Pages
1. Create a public GitHub repository named `YOUR_USERNAME.github.io` (replace YOUR_USERNAME with your GitHub username).
2. Upload the files in this folder to the repository root, or push them using git.
3. In Settings > Pages, select Deploy from a branch, `main`, and `/(root)` if not already enabled.
4. Visit `https://YOUR_USERNAME.github.io/` once deployment finishes.

If you use a differently named repository, the URL will be `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`.
