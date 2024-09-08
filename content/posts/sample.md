---
title: Accessible Clickable Cards
description: Clickable cards with multiple child links
date: 2021-04-22
draft: false
slug: basics-of-ais
image: https://i.ibb.co.com/nRh0rbR/Qm-Vhxd9y-Mk-NVV2-G9d9n-Na-Jaq5u7tii8-W9-Fwu-YPeizkszb-U-auto-format-w-1500.png
tags:
  - Accessibility
  - CSS
---

[Codepen Demo](https://codepen.io/bchiang7/pen/xxRBvgd?editors=1100)

Card layout where the card itself isn't an anchor link, but the whole card is clickable (with a `:before` pseudo element on the main `<a>`). Links inside of the card are still clickable.

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
