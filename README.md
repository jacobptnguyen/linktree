# Link Tree

My link tree, drawn as a binary search tree. My photo is the root, and the links are sorted alphabetically: left comes before its parent, right comes after.

```
              Me
            /    \
     LinkedIn    Portfolio
       /              \
   GitHub            Resume
```

Live site: [jacobptnguyen.github.io/linktree](https://jacobptnguyen.github.io/linktree/)

## How to run it

```bash
npm install
npm run dev
```

## JS feature: dark / light mode

**What it does:** The button in the corner switches between light and dark mode, and the colors fade. Your choice is saved in `localStorage`, so it stays after a refresh. On your first visit, the page matches your computer's setting.

**Why I picked it:** Almost every website and app has a light/dark mode toggle, so it's something people expect a page to have.

**What was tricky:** React loads after the page is already on screen, so a dark-mode visitor would see a quick flash of light mode on every refresh. A small script in `index.html` sets the theme before the page shows, which fixes it.

**What I'd improve:** If the system's light/dark setting changes while the page is open, the site doesn't update until a refresh. With more time, I'd have it follow the system setting live until the visitor picks a theme manually.
