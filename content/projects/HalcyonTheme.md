---
date: '2017-12-27'
title: 'Halcyon Theme'
github: 'https://github.com/bchiang7/halcyon-site'
external: 'https://halcyon-theme.netlify.com/'
image: 'https://assets.lummi.ai/assets/QmQ2h1MtLphdS8AN7E74F1T4RYD2k58ABdNcNp4r6D74Wg?auto=format&w=1500'
tech:
  - VS Code
  - Sublime Text
  - Atom
  - iTerm2
  - Hyper
showInProjects: false
featured: true
---

A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode), [Package Control](https://packagecontrol.io/packages/Halcyon%20Theme), [Atom Package Manager](https://atom.io/themes/halcyon-syntax), and [npm](https://www.npmjs.com/package/hyper-halcyon-theme).

![Halcyon Theme](https://assets.lummi.ai/assets/QmQ2h1MtLphdS8AN7E74F1T4RYD2k58ABdNcNp4r6D74Wg?auto=format&w=1500)

## CSS

```css
.grid__item {
  &:hover,
  &:focus-within {
    background-color: #eee;
  }

  a {
    position: relative;
    z-index: 1;
  }

  h2 {
    a {
      position: static;

      &:hover,
      &:focus {
        color: blue;
      }

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: background-color 0.1s ease-out;
        background-color: transparent;
      }
    }
  }
}
```
