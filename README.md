# theprofitpenthouse.com — published site

This branch holds the **built** website that GitHub Pages serves at theprofitpenthouse.com
(Pages: deploy from branch `main`, root).

The source code lives on the **`new-site`** branch (React + Vite + Tailwind).
To update the site: change the source on `new-site`, run `npm run build`, and replace the
contents of this branch with the `dist/` folder (keep `CNAME` and `.nojekyll`).
