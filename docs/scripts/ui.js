(()=>{var L=new CSSStyleSheet,re=()=>L.replaceSync(`/* 
<div class="accordion accordion--dark">
    <div class="accordion__item">
      <input type="radio" name="accordion-group" id="ag1" hidden="" class="accordion__input">
      <label for="ag1" class="accordion__header">Item 1</label>
      <div class="accordion__body">Content for Item 1...</div>
    </div>
    ...
</div> 
*/

.accordion {
  --body-bg: inherit;
  --body-text-color: inherit;
  --border-color: inherit;
  --border-radius: 4px;
  --font-family: var(--token-font-sans, sans-serif);
  --font-size: 14px;
  --header-bg: inherit;
  --header-color: inherit;
  --header-hover-bg: inherit;
  --header-selected-bg: inherit;
  --spacing: 12px;
  --toggle-size: 6px;

  &.accordion--dark {
    --body-bg: var(--token-black-90, black);
    --body-text-color: var(--token-white, white);
    --border-color: var(--token-white-10, white);
    --border-radius: 4px;
    --font-family: var(--token-font-sans, sans-serif);
    --font-size: 14px;
    --header-bg: var(--token-black, black);
    --header-color: var(--token-white, white);
    --header-hover-bg: var(--token-black-90, black);
    --spacing: 12px;
    --toggle-size: 6px;
  }

  &.accordion--light {
    --body-bg: var(--token-white, white);
    --body-text-color: var(--token-black, black);
    --border-color: var(--token-black-10, black);
    --border-radius: 4px;
    --font-family: var(--token-font-sans, sans-serif);
    --font-size: 14px;
    --header-bg: var(--token-white-90, white);
    --header-color: var(--token-black, black);
    --header-hover-bg: var(--token-white-80, white);
    --spacing: 12px;
    --toggle-size: 6px;
  }

  width: 100%;
  font-family: var(--font-family);
  font-size: var(--font-size);

  .accordion__item {
    &:first-child .accordion__header {
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
    }

    &:last-child:not(:has(.accordion__input:checked)) .accordion__header {
      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    &:last-child:has(.accordion__input:checked) .accordion__body {
      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    .accordion__header {
      background-color: var(--header-bg);
      border-bottom: 1px solid var(--border-color);
      color: var(--header-color);
      cursor: pointer;
      display: block;
      font-weight: bold;
      padding: var(--spacing);
      position: relative;

      &:hover {
        background-color: var(--header-hover-bg);
        transition: all 200ms;
      }

      &::after {
        border-left: 2px solid var(--header-color);
        border-bottom: 2px solid var(--header-color);
        color: var(--header-text-color);
        content: "";
        display: flex;
        width: var(--toggle-size);
        height: var(--toggle-size);
        position: absolute;
        right: var(--spacing);
        top: calc(50% - var(--toggle-size) / 2 * 2);
        transform: rotate(-45deg);
      }
    }

    .accordion__input {
      display: none;

      &:checked + .accordion__header + .accordion__body {
        display: block;
      }
      &:checked + .accordion__header::after {
        transform: rotate(135deg);
        top: calc(50% - var(--toggle-size) / 2);
      }
    }

    .accordion__body {
      background-color: var(--body-bg);
      border-bottom: 1px solid var(--border-color);
      color: var(--body-text-color);
      padding: var(--spacing);
      font-size: var(--font-size);
      display: none;
    }
  }
}
`);var M=new CSSStyleSheet,te=()=>M.replaceSync(`/* 
<label class="alert alert--[MODIFIERS]">
  <input type="checkbox" class="alert__toggle" />
  <div class="alert__close">\uFF0B</div>
  <div class="alert__title">Alert Title</div>
  <div class="alert__message">
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
    sunt a te dicta?
  </div>
</label> 
*/

/* Solid Alerts */
.alert {
  --bg: inherit;
  --bg-hover: inherit;
  --border-color: inherit;
  --border-color-hover: inherit;
  --border-radius: 4px;
  --border-style: solid;
  --border-width: 2px;
  --font-family: var(--token-font-sans, sans-serif);
  --font-size: 13px;
  --padding: 20px;
  --text-align: left;
  --text-color: inherit;
  --link-color: inherit;
  --link-color-hover: inherit;

  &.alert--dark {
    --bg: var(--token-black, black);
    --bg-hover: var(--token-black-80, black);
    --border-color: var(--token-black, black);
    --border-color-hover: var(--token-black-60, black);
    --text-color: var(--token-white, white);
    --link-color: var(--token-white, white);
    --link-color-hover: var(--token-white-60, white);
    &.alert--ghost {
      --bg: var(--token-black-20, black);
      --bg-hover: var(--token-black-40, black);
      --border-color: transparent;
      --border-color-hover: transparent;
      --text-color: var(--token-black, black);
      --link-color: var(--token-black, black);
      --link-color-hover: var(--token-black-60, black);
    }
    &.alert--outline {
      --bg: transparent;
      --bg-hover: var(--token-black-20, black);
      --border-color: var(--token-black, black);
      --text-color: var(--token-black, black);
      --link-color: var(--token-black, black);
      --link-color-hover: var(--token-black-60, black);
    }
  }

  &.alert--error {
    --bg: var(--token-red, red);
    --bg-hover: var(--token-red-80, red);
    --border-color: var(--token-red, red);
    --border-color-hover: var(--token-red-60, red);
    --text-color: var(--token-black, black);
    --link-color: var(--token-black, black);
    --link-color-hover: var(--token-black-60, black);
    &.alert--ghost {
      --bg: var(--token-red-10, red);
      --bg-hover: var(--token-red-20, red);
      --border-color: transparent;
      --border-color-hover: transparent;
      --text-color: var(--token-red, red);
      --link-color: var(--token-red, red);
      --link-color-hover: var(--token-red-60, red);
    }
    &.alert--outline {
      --bg: transparent;
      --bg-hover: var(--token-red-20, red);
      --border-color: var(--token-red, red);
      --text-color: var(--token-red, red);
      --link-color: var(--token-red, red);
      --link-color-hover: var(--token-red-60, red);
    }
  }

  &.alert--info {
    --bg: var(--token-blue, blue);
    --bg-hover: var(--token-blue-80, blue);
    --border-color: var(--token-blue, blue);
    --border-color-hover: var(--token-blue-60, blue);
    --text-color: var(--token-black, black);
    --link-color: var(--token-black, black);
    --link-color-hover: var(--token-black-60, black);
    &.alert--ghost {
      --bg: var(--token-blue-10, blue);
      --bg-hover: var(--token-blue-20, blue);
      --border-color: transparent;
      --border-color-hover: transparent;
      --text-color: var(--token-blue, blue);
      --link-color: var(--token-blue, blue);
      --link-color-hover: var(--token-blue-60, blue);
    }
    &.alert--outline {
      --bg: transparent;
      --bg-hover: var(--token-blue-20, blue);
      --border-color: var(--token-blue, blue);
      --text-color: var(--token-blue, blue);
      --link-color: var(--token-blue, blue);
      --link-color-hover: var(--token-blue-60, blue);
    }
  }

  &.alert--light {
    --bg: var(--token-white, white);
    --bg-hover: var(--token-white-80, white);
    --border-color: var(--token-white, white);
    --border-color-hover: var(--token-white-60, white);
    --text-color: var(--token-black, black);
    --link-color: var(--token-black, black);
    --link-color-hover: var(--token-black-60, black);
    &.alert--ghost {
      --bg: var(--token-white-10, white);
      --bg-hover: var(--token-white-20, white);
      --border-color: transparent;
      --border-color-hover: transparent;
      --text-color: var(--token-white, white);
      --link-color: var(--token-white, white);
      --link-color-hover: var(--token-white-60, white);
    }
    &.alert--outline {
      --bg: transparent;
      --bg-hover: var(--token-white-20, white);
      --border-color: var(--token-white, white);
      --text-color: var(--token-white, white);
      --link-color: var(--token-white, white);
      --link-color-hover: var(--token-white-60, white);
    }
  }

  &.alert--success {
    --bg: var(--token-green, green);
    --bg-hover: var(--token-green-80, green);
    --border-color: var(--token-green, green);
    --border-color-hover: var(--token-green-60, green);
    --text-color: var(--token-black, black);
    --link-color: var(--token-black, black);
    --link-color-hover: var(--token-black-60, black);
    &.alert--ghost {
      --bg: var(--token-green-10, green);
      --bg-hover: var(--token-green-20, green);
      --border-color: transparent;
      --border-color-hover: transparent;
      --text-color: var(--token-green, green);
      --link-color: var(--token-green, green);
      --link-color-hover: var(--token-green-60, green);
    }
    &.alert--outline {
      --bg: transparent;
      --bg-hover: var(--token-green-20, green);
      --border-color: var(--token-green, green);
      --text-color: var(--token-green, green);
      --link-color: var(--token-green, green);
      --link-color-hover: var(--token-green-60, green);
    }
  }

  &.alert--warning {
    --bg: var(--token-yellow, yellow);
    --bg-hover: var(--token-yellow-80, yellow);
    --border-color: var(--token-yellow, yellow);
    --border-color-hover: var(--token-yellow-60, yellow);
    --text-color: var(--token-black, black);
    --link-color: var(--token-black, black);
    --link-color-hover: var(--token-black-60, black);
    &.alert--ghost {
      --bg: var(--token-yellow-10, yellow);
      --bg-hover: var(--token-yellow-20, yellow);
      --border-color: transparent;
      --border-color-hover: transparent;
      --text-color: var(--token-yellow, yellow);
      --link-color: var(--token-yellow, yellow);
      --link-color-hover: var(--token-yellow-60, yellow);
    }
    &.alert--outline {
      --bg: transparent;
      --bg-hover: var(--token-yellow-20, yellow);
      --border-color: var(--token-yellow, yellow);
      --text-color: var(--token-yellow, yellow);
      --link-color: var(--token-yellow, yellow);
      --link-color-hover: var(--token-yellow-60, yellow);
    }
  }

  background-color: var(--bg);
  border-color: var(--border-color);
  border-width: var(--border-width);
  border-radius: var(--border-radius);
  border-style: var(--border-style);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: var(--font-family);
  gap: calc(var(--padding) / 2);
  overflow: hidden;
  padding: var(--padding);
  position: relative;
  text-align: var(--text-align, left);
  transition: all 0.3s;
  width: 100%;

  &:hover {
    background-color: var(--bg-hover);
    border-color: var(--border-color-hover);
  }

  .alert__title {
    font-size: var(--font-size);
    font-weight: bold;
    color: var(--text-color);
    margin-right: var(--padding);
  }

  .alert__message {
    font-size: var(--font-size);
    color: var(--text-color);
    a {
      color: var(--link-color);
      &:hover {
        color: var(--link-color-hover);
      }
    }
  }

  .alert__close {
    color: var(--text-color);
    cursor: pointer;
    transform: rotate(45deg);
    position: absolute;
    top: calc(var(--padding) / 2);
    right: calc(var(--padding) / 2);
    font-size: 20px;
  }

  .alert__toggle {
    display: none;
  }

  &:has(.alert__toggle:checked) {
    animation: alert-closing-animation 0.25s linear forwards;
  }
}

/* Animations */

@keyframes alert-closing-animation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    height: auto;
    padding: var(--padding-medium);
  }
  100% {
    opacity: 0;
    height: 0;
    padding: 0;
  }
}
`);var A=new CSSStyleSheet,ae=()=>A.replaceSync(`/* 
Usage:
<span class="badge badge-[MODIFIER]">Basic</badge>
*/

.badge {
  --bg: inherit;
  --text-color: inherit;
  --border-radius: 5px;
  --border-width: 2px;
  --border-color: inherit;
  --font-family: var(--token-font-sans, sans-serif);
  --font-size: 10px;
  --padding: 3px 6px;

  &.badge--dark {
    --bg: var(--token-black);
    --text-color: var(--token-white);
    &.badge--outline {
      --bg: transparent;
      --text-color: var(--token-black);
      --border-color: var(--token-black);
    }
  }
  &.badge--error {
    --bg: var(--token-red);
    --text-color: var(--token-black);
    &.badge--outline {
      --bg: transparent;
      --text-color: var(--token-red);
      --border-color: var(--token-red);
    }
  }
  &.badge--info {
    --bg: var(--token-blue);
    --text-color: var(--token-black);
    &.badge--outline {
      --bg: transparent;
      --text-color: var(--token-blue);
      --border-color: var(--token-blue);
    }
  }
  &.badge--light {
    --bg: var(--token-white);
    --text-color: var(--token-black);
    &.badge--outline {
      --bg: transparent;
      --text-color: var(--token-white);
      --border-color: var(--token-white);
    }
  }
  &.badge--success {
    --bg: var(--token-green);
    --text-color: var(--token-black);
    &.badge--outline {
      --bg: transparent;
      --text-color: var(--token-green);
      --border-color: var(--token-green);
    }
  }
  &.badge--warning {
    --bg: var(--token-yellow);
    --text-color: var(--token-black);
    &.badge--outline {
      --bg: transparent;
      --text-color: var(--token-yellow);
      --border-color: var(--token-yellow);
    }
  }
  &.badge--small {
    --font-size: 9px;
    --padding: 2px 4px;
  }
  &.badge--large {
    --font-size: 11px;
    --padding: 4px 8px;
  }

  background-color: var(--bg);
  border-radius: var(--border-radius);
  border: 0;
  box-shadow: inset 0 0 0 var(--border-width) var(--border-color);
  color: var(--text-color);
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: bold;
  min-width: 15px;
  outline: none;
  padding: var(--padding);
  position: relative;
  text-align: center;
  text-wrap: nowrap;
  transition: all 0.3s;
  user-select: none;
  vertical-align: middle;
  width: max-content;
}
`);var H=new CSSStyleSheet,ne=()=>H.replaceSync("");var D=new CSSStyleSheet,le=()=>D.replaceSync(`/* 
Usage:
<button class="button button-[MODIFIER]">Basic</button>
*/

.button {
  --animation: none;
  --bg-loading-color: var(--token-color-black, black);
  --bg-color: inherit;
  --bg-color-hover: var(--token-color-black, black);
  --bg-image: none;
  --bg-size: auto;
  --border-color: var(--token-color-black-90, black);
  --border-radius: 4px;
  --border-width: 2px;
  --box-shadow: none;
  --cursor: pointer;
  --display: inline-flex;
  --font-family: var(--token-font-sans, sans-serif);
  --font-size: 13px;
  --gap: 8px;
  --justify: center;
  --opacity: 1;
  --padding: 8px 15px;
  --pointer-events: auto;
  --width: max-content;

  /* Colors */

  &.button--dark {
    --bg-color: var(--token-color-black, black);
    --bg-color-hover: var(--token-color-black, black);
    --border-color: var(--token-color-black, black);
    --text-color: var(--token-color-white, white);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-color-black, black);
      --bg-color-hover: var(--token-color-black, black);
      --border-color: var(--token-color-black, black);
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-color-white, white);
      --border-color: var(--token-color-white, white);
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-color-black, black);
      --border-color: transparent;
      --text-color: var(--token-color-black, black);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-color-black, black);
        --bg-color-hover: var(--token-color-black-40, black);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-color-black, black);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-color-black, black);
      --border-color: ;
      --text-color: var(--token-color-black, black);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-color-black, black);
        --bg-color-hover: var(--token-color-black-40, black);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-color-black, black);
        --border-color: var(--token-color-black, black);
      }
    }
  }

  &.button--light {
    --bg-color: var(--token-color-white, white);
    --bg-color-hover: var(--token-color-white, white);
    --border-color: var(--token-color-white, white);
    --text-color: var(--token-color-black, black);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-color-white, white);
      --bg-color-hover: var(--token-color-white, white);
      --border-color: transparent;
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-color-black, black);
      --border-color: var(--token-color-black, black);
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-color-white, white);
      --border-color: transparent;
      --text-color: var(--token-color-white, white);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-color-white, white);
        --bg-color-hover: var(--token-color-white-40, white);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-color-white, white);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-color-white, white);
      --border-color: ;
      --text-color: var(--token-color-white, white);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-color-white, white);
        --bg-color-hover: var(--token-color-white-40, white);
        --border-color: var(--token-color-white, white);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-color-white, white);
        --border-color: var(--token-color-white, white);
      }
    }
  }

  &.button--info {
    --bg-color: var(--token-blue, blue);
    --bg-color-hover: var(--token-blue, blue);
    --border-color: var(--token-blue, blue);
    --text-color: var(--token-color-black, black);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-blue, blue);
      --bg-color-hover: var(--token-blue, blue);
      --border-color: transparent;
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-color-black, black);
      --border-color: var(--token-color-black, black);
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-blue, blue);
      --border-color: transparent;
      --text-color: var(--token-blue, blue);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-blue, blue);
        --bg-color-hover: var(--token-blue-40, blue);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-blue, blue);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-blue, blue);
      --border-color: ;
      --text-color: var(--token-blue, blue);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-blue, blue);
        --bg-color-hover: var(--token-blue-40, blue);
        --border-color: var(--token-blue, blue);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-blue, blue);
        --border-color: transparent;
      }
    }
  }

  &.button--success {
    --bg-color: var(--token-green, green);
    --bg-color-hover: var(--token-green, green);
    --border-color: var(--token-green, green);
    --text-color: var(--token-color-black, black);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-green, green);
      --bg-color-hover: var(--token-green, green);
      --border-color: transparent;
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-color-black, black);
      --border-color: transparent;
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-green, green);
      --border-color: transparent;
      --text-color: var(--token-green, green);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-green, green);
        --bg-color-hover: var(--token-green-40, green);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-green, green);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-green, green);
      --border-color: ;
      --text-color: var(--token-green, green);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-green, green);
        --bg-color-hover: var(--token-green-40, green);
        --border-color: var(--token-green, green);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-green, green);
        --border-color: var(--token-green, green);
      }
    }
  }

  &.button--warning {
    --bg-color: var(--token-yellow, yellow);
    --bg-color-hover: var(--token-yellow, yellow);
    --border-color: var(--token-yellow, yellow);
    --text-color: var(--token-color-black, black);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-yellow, yellow);
      --bg-color-hover: var(--token-yellow, yellow);
      --border-color: transparent;
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-color-black, black);
      --border-color: transparent;
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-yellow, yellow);
      --border-color: transparent;
      --text-color: var(--token-yellow, yellow);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-yellow, yellow);
        --bg-color-hover: var(--token-yellow-40, yellow);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-yellow, yellow);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-yellow, yellow);
      --border-color: ;
      --text-color: var(--token-yellow, yellow);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-yellow, yellow);
        --bg-color-hover: var(--token-yellow-40, yellow);
        --border-color: var(--token-yellow, yellow);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-yellow, yellow);
        --border-color: var(--token-yellow, yellow);
      }
    }
  }

  &.button--error {
    --bg-color: var(--token-red, red);
    --bg-color-hover: var(--token-red, red);
    --border-color: var(--token-red, red);
    --text-color: var(--token-color-black, black);
    &:not(.button--disabled):not(.button--loading):hover {
      --bg-color: var(--token-red, red);
      --bg-color-hover: var(--token-red, red);
      --border-color: transparent;
    }
    &.button--disabled {
      --opacity: 0.5;
    }
    &.button--loading {
      --bg-loading-color: var(--token-color-black, black);
      --border-color: transparent;
    }
    &.button--ghost {
      --bg-color: transparent;
      --bg-color-hover: var(--token-red, red);
      --border-color: transparent;
      --text-color: var(--token-red, red);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-red, red);
        --bg-color-hover: var(--token-red-40, red);
        --border-color: transparent;
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-red, red);
        --border-color: transparent;
      }
    }
    &.button--outline {
      --bg-color: transparent;
      --bg-color-hover: var(--token-red, red);
      --border-color: ;
      --text-color: var(--token-red, red);
      &:not(.button--disabled):not(.button--loading):hover {
        --bg-color: var(--token-red, red);
        --bg-color-hover: var(--token-red-40, red);
        --border-color: var(--token-red, red);
      }
      &.button--disabled {
        --opacity: 0.5;
      }
      &.button--loading {
        --bg-loading-color: var(--token-red, red);
        --border-color: var(--token-red, red);
      }
    }
  }

  /* Modifiers */
  &.button--block {
    --display: block;
    --width: 100%;
  }
  &.button--large {
    --font-size: 16px;
    --padding: 12px 20px;
    --gap: 12px;
  }
  &.button--small {
    --font-size: 12px;
    --padding: 6px 10px;
    --gap: 6px;
  }
  &.button--disabled {
    --pointer-events: none;
    --cursor: not-allowed;
  }
  &.button--loading {
    --bg-size: 200px 100%;
    --bg-image: repeating-linear-gradient(
      -45deg,
      var(--bg-loading-color, white),
      var(--bg-loading-color, white) 5px,
      transparent 5px,
      transparent 10px
    );
    --animation: button-loading-animation 2s linear infinite;
    --cursor: not-allowed;
    --pointer-events: none;
  }
  &.button--justify-start {
    --justify: flex-start;
  }

  /* border-color: var(--border-color); */
  align-items: center;
  animation: var(--animation);
  background-color: var(--bg-color);
  background-image: var(--bg-image);
  background-size: var(--bg-size);
  border-radius: var(--border-radius);
  border-width: 0;
  box-shadow: inset 0 0 0 var(--border-width) var(--border-color);
  box-sizing: border-box;
  clip-path: inset(0);
  color: var(--text-color, white);
  cursor: var(--cursor, pointer);
  display: inline-flex;
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: bold;
  gap: var(--gap);
  justify-content: var(--justify);
  opacity: var(--opacity);
  outline: none;
  overflow: hidden;
  padding: var(--padding);
  pointer-events: var(--pointer-events);
  position: relative;
  text-align: center;
  text-wrap: nowrap;
  transition: all 0.3s;
  user-select: none;
  vertical-align: middle;
  width: var(--width);
}

/* Animations */
@keyframes button-loading-animation {
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
`);var O=new CSSStyleSheet,ie=()=>O.replaceSync(`.card {
  /* Settings */
  --card-bg-color: inherit;
  --card-font-family: inherit;
  --card-title-font-size: inherit;
  --card-title-font-color: inherit;
  --card-inner-border-color: inherit;
  --card-inner-border-width: inherit;
  --card-outer-border-color: inherit;
  --card-outer-border-radius: inherit;
  --card-outer-border-width: inherit;
  --card-spacing: inherit;
  --card-transition-duration: inherit;
  --card-transition-timing: inherit;

  &.card--small {
    --card-spacing: 10px;
    --card-title-font-size: 14px;
    --card-outer-border-radius: 4px;
    --card-outer-border-width: 1px;
    --card-inner-border-width: 0px;
  }

  &.card--medium {
    --card-spacing: 15px;
    --card-title-font-size: 16px;
    --card-outer-border-radius: 8px;
    --card-outer-border-width: 2px;
    --card-inner-border-width: 1px;
  }

  &.card--large {
    --card-spacing: 20px;
    --card-title-font-size: 18px;
    --card-outer-border-radius: 12px;
    --card-outer-border-width: 3px;
    --card-inner-border-width: 2px;
  }

  &.card--dark {
    --card-bg-color: var(--token-black, black);
    --card-title-font-color: var(--token-white, white);
    --card-inner-border-color: var(--token-white-20, white);
    --card-outer-border-color: var(--token-black, black);
    &.card--ghost {
      --card-bg-color: var(--token-black-10, black);
      --card-title-font-color: var(--token-black, black);
      --card-inner-border-color: var(--token-black-20, black);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-title-font-color: var(--token-black, black);
      --card-inner-border-color: var(--token-black-20, black);
      --card-outer-border-color: var(--token-black-70, black);
    }
  }

  &.card--error {
    --card-bg-color: var(--token-red);
    --card-title-font-color: var(--token-white, white);
    --card-inner-border-color: var(--token-white-30, white);
    --card-outer-border-color: var(--token-red, red);
    &.card--ghost {
      --card-bg-color: var(--token-red-10, red);
      --card-title-font-color: var(--token-red, red);
      --card-inner-border-color: var(--token-red-30, red);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-title-font-color: var(--token-red, red);
      --card-inner-border-color: var(--token-red-30, red);
      --card-outer-border-color: var(--token-red, red);
    }
  }

  &.card--info {
    --card-bg-color: var(--token-blue);
    --card-title-font-color: var(--token-white, white);
    --card-inner-border-color: var(--token-white-30, white);
    --card-outer-border-color: var(--token-blue, blue);
    &.card--ghost {
      --card-bg-color: var(--token-blue-10, blue);
      --card-title-font-color: var(--token-blue, blue);
      --card-inner-border-color: var(--token-blue-30, blue);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-title-font-color: var(--token-blue, blue);
      --card-inner-border-color: var(--token-blue-30, blue);
      --card-outer-border-color: var(--token-blue, blue);
    }
  }

  &.card--light {
    --card-bg-color: var(--token-white, white);
    --card-title-font-color: var(--token-black, black);
    --card-inner-border-color: var(--token-black-20, black);
    --card-outer-border-color: var(--token-white, white);
    &.card--ghost {
      --card-bg-color: var(--token-white-05, white);
      --card-title-font-color: var(--token-white, white);
      --card-inner-border-color: var(--token-white-20, white);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-title-font-color: var(--token-white, white);
      --card-inner-border-color: var(--token-white-20, white);
      --card-outer-border-color: var(--token-white-70, white);
    }
  }

  &.card--success {
    --card-bg-color: var(--token-green);
    --card-title-font-color: var(--token-white, white);
    --card-inner-border-color: var(--token-white-30, white);
    --card-outer-border-color: var(--token-green, green);
    &.card--ghost {
      --card-bg-color: var(--token-green-10, green);
      --card-title-font-color: var(--token-green, green);
      --card-inner-border-color: var(--token-green-30, green);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-title-font-color: var(--token-green, green);
      --card-inner-border-color: var(--token-green-20, green);
      --card-outer-border-color: var(--token-green, green);
    }
  }

  &.card--warning {
    --card-bg-color: var(--token-yellow);
    --card-title-font-color: var(--token-black, black);
    --card-inner-border-color: var(--token-black-20, black);
    --card-outer-border-color: var(--token-yellow, yellow);
    &.card--ghost {
      --card-bg-color: var(--token-yellow-10, yellow);
      --card-title-font-color: var(--token-yellow, yellow);
      --card-inner-border-color: var(--token-yellow-20, yellow);
      --card-outer-border-color: transparent;
    }
    &.card--outline {
      --card-bg-color: transparent;
      --card-title-font-color: var(--token-yellow, yellow);
      --card-inner-border-color: var(--token-yellow-20, yellow);
      --card-outer-border-color: var(--token-yellow, yellow);
    }
  }

  /* Rules */
  background-color: var(--card-bg-color);
  border-radius: var(--card-outer-border-radius);
  border-style: solid;
  border-width: var(--card-outer-border-width);
  border-color: var(--card-outer-border-color);
  display: grid;
  grid-template-areas: "card__title card__actions" "card__body card__body" "card__footer card__footer";
  grid-template-rows: max-content 1fr max-content;
  font-family: var(--card-font-family);
  font-size: var(--card-title-font-size);
  font-weight: normal;
  row-gap: var(--card-spacing);
  padding: var(--card-spacing);
  text-align: left;
  transition: all var(--card-transition-duration, 0.3s) var(--card-transition-timing, ease);

  .card__actions {
    align-items: center;
    border-bottom: var(--card-inner-border-width) solid var(--card-inner-border-color);
    display: flex;
    flex-wrap: wrap;
    grid-area: card__actions;
    justify-content: flex-end;
    padding-bottom: calc(var(--card-spacing) / 2);
  }

  .card__body {
    grid-area: card__body;
  }

  .card__footer {
    align-items: center;
    border-top: var(--card-inner-border-width) solid var(--card-inner-border-color);
    display: flex;
    grid-area: card__footer;
    padding-top: calc(var(--card-spacing) / 2);
    justify-content: flex-end;
  }

  .card__title {
    align-items: center;
    border-bottom: var(--card-inner-border-width) solid var(--card-inner-border-color);
    color: var(--card-title-font-color);
    display: flex;
    font-size: var(--card-font-large);
    font-weight: bold;
    grid-area: card__title;
    padding-bottom: calc(var(--card-spacing) / 2);
  }
}
`);var P=new CSSStyleSheet,K=()=>{let e="var(--token-color-background, black)",r="var(--token-color-background-hue)",a="var(--token-color-background-saturation)",o="var(--token-color-background-lightness)",i=`
  .dashboard {

    --dashboard-overflow-y: hidden;
    --dashboard-rows: auto auto;
    --dashboard-text-color: var(--token-color-background-contrast, black);
    --dashboard-max-height: auto;
    --dashboard-bg-color: var(${e}, black);
    --dashboard-columns: 1fr 1fr 1fr;
    --dashboard-gap: 0;
    --dashboard-overflow: auto;
    --dashboard-overflow-y: auto;

    --dashboard-aside-bg-color: hsl(${r}, ${a}, calc(${o} + 1.5%));
    --dashboard-aside-body-column: 1/4;
    --dashboard-aside-body-row: 6/7;
    --dashboard-aside-footer-column: 1/4;
    --dashboard-aside-footer-row: 10/11;
    --dashboard-aside-header-column: 1/4;
    --dashboard-aside-header-row: 5/6;
    
    --dashboard-main-bg-color: hsl(${r}, ${a}, calc(${o} + 0%));
    --dashboard-main-body-column: 1/4;
    --dashboard-main-body-row: 4/5;
    --dashboard-main-footer-column: 1/4;
    --dashboard-main-footer-row: 9/10;
    --dashboard-main-header-column: 1/4;
    --dashboard-main-header-row: 3/4;

    --dashboard-nav-bg-color: hsl(${r}, ${a}, calc(${o} + 1.5%));
    --dashboard-nav-body-column: 1/4;
    --dashboard-nav-body-row: 2/3;
    --dashboard-nav-footer-column: 1/4;
    --dashboard-nav-footer-row: 8/9;
    --dashboard-nav-header-column: 1/4;
    --dashboard-nav-header-row: 1/2;

}`,d=`@media (min-width: 768px) {
.dashboard {
    --dashboard-columns: 1fr 3fr 1fr;
    --dashboard-rows: min-content 1fr min-content;
    --dashboard-overflow: hidden;
    --dashboard-overflow-y: auto;
    --dashboard-max-height: 100vh;

    --dashboard-aside-body-column: 3/4;
    --dashboard-aside-footer-column: 3/4;
    --dashboard-aside-footer-row: 3/4;
    --dashboard-aside-header-column: 3/4;
    --dashboard-aside-header-row: 1/2;
    --dashboard-aside-body-row: 2/3;

    --dashboard-main-body-column: 2/3;
    --dashboard-main-footer-column: 2/3;
    --dashboard-main-footer-row: 3/4;
    --dashboard-main-header-column: 2/3;
    --dashboard-main-header-row: 1/2;
    --dashboard-main-body-row: 2/3;

    --dashboard-nav-body-column: 1/2;
    --dashboard-nav-footer-column: 1/2;
    --dashboard-nav-footer-row: 3/4;
    --dashboard-nav-header-column: 1/2;
    --dashboard-nav-header-row: 1/2;
    --dashboard-nav-body-row: 2/3;
    }
}`,n=`

.dashboard {
    align-items: flex-start;
    background-color: var(--dashboard-bg-color);
    box-sizing: border-box;
    color: var(--dashboard-text-color, white);
    display: grid;
    grid-template-columns: var(--dashboard-columns, 1fr);
    grid-template-rows: var(--dashboard-rows, auto);
    height: var(--dashboard-max-height, auto);
    max-height: var(--dashboard-max-height, auto);
    overflow-y: var(--dashboard-overflow, auto);
}

.dashboard__nav-header {
    align-items: center;
    background-color: var(--dashboard-nav-bg-color);
    display: flex;
    flex-direction: column;
    grid-column: var(--dashboard-nav-header-column, 1/2);
    grid-row: var(--dashboard-nav-header-row, 1/2);
    height: 100%;
}

.dashboard__nav {
    align-items: center;
    background-color: var(--dashboard-nav-bg-color);
    display: flex;
    flex-direction: column;
    grid-column: var(--dashboard-nav-body-column, 1/2);
    grid-row: var(--dashboard-nav-body-row, 2/3);
    height: 100%;
    justify-content: flex-start;
    overflow-y: var(--dashboard-overflow-y, auto);
}

.dashboard__nav-footer {
    background-color: var(--dashboard-nav-bg-color);
    grid-column: var(--dashboard-nav-footer-column, 1/2);
    grid-row: var(--dashboard-nav-footer-row, 3/4);
    height: 100%;
}

.dashboard__main-header {
    align-items: flex-start;
    background-color: var(--dashboard-main-bg-color);
    display: flex;
    flex-direction: column;
    grid-column: var(--dashboard-main-header-column, 2/3);
    grid-row: var(--dashboard-main-header-row, 1/2);
    height: 100%;
    justify-content: center;
}

.dashboard__main {
    align-items: flex-start;
    background-color: var(--dashboard-main-bg-color);
    display: flex;
    flex-direction: column;
    grid-column: var(--dashboard-main-body-column, 2/3);
    grid-row: var(--dashboard-main-body-row, 2/3);
    height: 100%;
    overflow-y: var(--dashboard-overflow-y, auto);
}

.dashboard__main-footer {
    background-color: var(--dashboard-main-bg-color);
    grid-row: var(--dashboard-main-footer-row, 3/4);
    grid-column: var(--dashboard-main-footer-column, 2/3);
    height: 100%;
}

.dashboard__aside-header {
    align-items: flex-end;
    background-color: var(--dashboard-aside-bg-color);
    display: flex;
    flex-direction: column;
    grid-column: var(--dashboard-aside-header-column, 3/4);
    grid-row: var(--dashboard-aside-header-row, 1/2);
    height: 100%;
    justify-content: center;
}

.dashboard__aside {
    background-color: var(--dashboard-aside-bg-color);
    grid-column: var(--dashboard-aside-body-column, 3/4);
    grid-row: var(--dashboard-aside-body-row, 2/3);
    height: 100%;
    overflow-y: var(--dashboard-overflow-y, auto);
}

.dashboard__aside-footer {
    background-color: var(--dashboard-aside-bg-color);
    grid-column: var(--dashboard-aside-footer-column, 3/4);
    grid-row: var(--dashboard-aside-footer-row, 3/4);
    height: 100%;
}`;return P.replaceSync(`${i}${d}${n}`)};var $=new CSSStyleSheet,ce=()=>$.replaceSync(`:root {
  --dialog-bg-color: var(--token-black, black);
  --dialog-border-radius: 8px;
  --dialog-close-size: 13px;
  --dialog-gap: 0px;
  --dialog-max-height: 90vh;
  --dialog-max-width: 90vh;
  --dialog-scrollbar-thumb-color: var(--token-white-10, black);
  --dialog-scrollbar-track-color: var(--token-white-02, black);
  --dialog-spacing: 16px;
  --dialog-text-color: var(--token-white, white);
  --dialog-title-size: 20px;
}

.dialog[open] {
  align-items: center;
  backdrop-filter: blur(2px); /* Optional: Adds a blur effect to the background elements */
  background-color: var(--token-white-03, white); /* Optional: for dimming the background */
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* High z-index to ensure it is on top */
}

.dialog__view {
  background: var(--dialog-bg-color);
  border-radius: var(--dialog-border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: var(--dialog-gap);
  height: var(--dialog-max-height);
  width: var(--dialog-max-width);
}

.dialog__header {
  align-items: center;
  color: var(--token-white);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: var(--dialog-title-size);
  border-bottom: 1px solid var(--token-white-10);
  padding: var(--dialog-spacing);
}

.dialog__body {
  flex: 1;
  overflow-y: auto; /* Ensure only vertical scrolling */
  max-height: calc(var(--dialog-max-height) - 60px); /* Subtract header and footer heights */
  padding: var(--dialog-spacing);
}

.dialog__footer {
  padding: var(--dialog-spacing);
  border-top: 1px solid var(--token-white-10);
  align-items: center;
  justify-content: center;
  display: flex;
  gap: var(--dialog-spacing);
}

/* Scrollbar styling */
.dialog__body::-webkit-scrollbar {
  width: 10px;
  background-color: var(--dialog-scrollbar-track-color);
}

.dialog__body::-webkit-scrollbar-track {
  background-color: var(--dialog-scrollbar-track-color);
}

.dialog__body::-webkit-scrollbar-thumb {
  background-color: var(--dialog-scrollbar-thumb-color);
  border-radius: 5px;
}

/* Modifier classes for different dialog sizes */
.dialog--full-screen {
  width: 100vw;
  height: 100vh;
  margin: 0;
  border-radius: 0;
}

.dialog--big {
  width: 80%;
  max-width: 800px;
  height: 60%;
}

.dialog--medium {
  width: 60%;
  max-width: 600px;
  height: 50%;
}

.dialog--small {
  width: 40%;
  max-width: 400px;
  height: 40%;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .dialog--big,
  .dialog--medium,
  .dialog--small {
    width: 90%;
    max-width: none;
    height: auto;
  }
}

@media (max-width: 400px) {
  .dialog--full-screen,
  .dialog--big,
  .dialog--medium,
  .dialog--small {
    width: 100%;
    max-width: none;
    height: auto;
  }
}
`);var z=new CSSStyleSheet,de=()=>z.replaceSync("");var I=new CSSStyleSheet,se=()=>I.replaceSync(`.flexgrid {
  --mobile-gap: 10px;
  --tablet-gap: 20px;
  --desktop-gap: 30px;
  --mobile-width: 200px;
  --tablet-width: 200px;
  --desktop-width: 200px;
}

@media screen and (min-width: 0px) and (max-width: 767px) {
  .flexgrid {
    --width: var(--mobile-width);
    --gap: var(--mobile-gap);
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .flexgrid {
    --width: var(--tablet-width);
    --gap: var(--tablet-gap);
  }
}

@media screen and (min-width: 1024px) {
  .flexgrid {
    --width: var(--desktop-width);
    --gap: var(--desktop-gap);
  }
}

.flexgrid {
  display: flex;
  gap: var(--gap);
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.flexgrid__item {
  width: 100%;
  height: max-content;
  flex: 1 0 var(--width);
}
`);var R=new CSSStyleSheet,be=()=>R.replaceSync(`:root {

}

.flexpane {

  /* Defaults */
  &.flexpane__header {}
  &.flexpane__header__title {}
  &.flexpane__body {}
  &.flexpane__footer {}

  /* Modes */
  .flexpane--alert {

    /* Structure */
    &.flexpane__header {}
    &.flexpane__header__title {}
    &.flexpane__body {}
    &.flexpane__footer {}

    /* Colors */
    &.flexpane--dark {
      &.flexpane__header {}
      &.flexpane__header__title {}
      &.flexpane__body {}
      &.flexpane__footer {}
    }

    .flexpane--light {}
    .flexpane--success {}
    .flexpane--warning {}
    .flexpane--error {}
    .flexpane--info {}

    /* Variants */
    .flexpane--outline {
      &.flexpane__header {}
      &.flexpane__header__title {}
      &.flexpane__body {}
      &.flexpane__footer {}
    }
    .flexpane--ghost {}

  }
  .flexpane--toast {}
  .flexpane--modal {}
  .flexpane--drawer {}
  .flexpane--sidebar {}
  .flexpane--popover {}
  .flexpane--card {}
  .flexpane--dialog {}
}



/* States */
.flexpane--loading {}
.flexpane--disabled {}`);var B=new CSSStyleSheet,ge=()=>B.replaceSync(`.grid {
  --bg-color: var(--token-black, black);
  --desktop-columns: 12;
  --desktop-max-col-width: 6ch;
  --desktop-col-gap: 2ch;
  --mobile-col-gap: 2ch;
  --desktop-row-gap: 2ch;
  --mobile-row-gap: 1ch;
  --mobile-columns: 6;
  --mobile-max-col-width: 1fr;
  --scrollbar-thumb-color: var(--token-black-80, black);
  --scrollbar-track-color: var(--token-white-10, black);
  --text-color: var(--token-white, white);
  background-color: var(--bg-color);
  color: var(--text-color);
  display: grid;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  box-sizing: border-box;
  height: 100vh;
  max-height: 100vh;
  grid-template-rows: max-content max-content max-content 1fr;
}

@media (min-width: 0px) {
  .grid {
    grid-template-columns: repeat(var(--mobile-columns), var(--mobile-max-col-width));
    column-gap: var(--mobile-col-gap);
    row-gap: var(--mobile-row-gap);
  }
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr repeat(var(--desktop-columns), minmax(0px, var(--desktop-max-col-width))) 1fr;
    column-gap: var(--desktop-col-gap);
    row-gap: var(--desktop-row-gap);
  }
}

.grid__item {
  --mobile-align-items: start;
  --mobile-justify-items: start;
  --mobile-row-start: auto;
  --mobile-row-end: auto;
  --desktop-align-items: center;
  --desktop-justify-items: start;
  --desktop-row-start: auto;
  --desktop-row-end: auto;
  background-color: red;
  display: grid;
  grid-template-columns: subgrid;
  box-sizing: border-box;
  align-items: var(--mobile-align-items);
  justify-items: var(--mobile-justify-items);
}

@media screen and (min-width: 0px) and (max-width: 767px) {
  .grid__item--row-start-var {
    grid-row-start: var(--mobile-row-start);
  }
  .grid__item--row-end-var {
    grid-row-end: var(--mobile-row-end);
  }
  .grid__item--col-start-var {
    grid-column-start: var(--mobile-col-start);
  }
  .grid__item--col-end-var {
    grid-column-end: var(--mobile-col-end);
  }
}

@media screen and (min-width: 768px) {
  .grid__item--row-start-var {
    grid-row-start: var(--desktop-row-start);
  }
  .grid__item--row-end-var {
    grid-row-end: var(--desktop-row-end);
  }
  .grid__item--col-start-var {
    grid-column-start: var(--desktop-col-start);
  }
  .grid__item--col-end-var {
    grid-column-end: var(--desktop-col-end);
  }
}
`);var N=new CSSStyleSheet,he=()=>N.replaceSync(`.section {
}

.section__header {
}

.section__header__title {
  font-size: 1.5em;
}

.section__header__description {
  font-size: 1em;
  opacity: 0.5;
}

.section__article {
}

.section__aside {
}

.section__figure {
}

.section__figure__figcaption {
}

.section__footer {
}
`);var U=new CSSStyleSheet,pe=()=>U.replaceSync(`.toggle {
  position: relative;
  width: 50px;
  height: 50px;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.toggle input {
  display: none;
}

.toggle:before {
  border-bottom: 2px solid var(--text-color);
  border-top: 2px solid var(--text-color);
  content: "";
  height: 12px;
  left: 12.5px;
  position: absolute;
  width: 25px;
  transition: all 0.3s;
}

.toggle:after {
  position: absolute;
  border-top: 2px solid var(--text-color);
  content: "";
  display: block;
  width: 50%;
  content: "";
  transition: all 0.3s;
}

.toggle:has(input:checked)::before {
  border-width: 0;
  position: absolute;
  left: 12.5px;
  background-color: var(--text-color);
  content: "";
  display: block;
  height: 2px;
  width: 25px;
  transition: all 0.3s;
  transform: rotate(45deg);
}
.toggle:has(input:checked)::after {
  border-width: 0;
  position: absolute;
  left: 12.5px;
  background-color: var(--text-color);
  content: "";
  display: block;
  height: 2px;
  width: 25px;
  transition: all 0.3s;
  transform: rotate(-45deg);
}
`);var ve=new Map,fe=new MutationObserver(e=>{e.forEach(r=>{if(r.addedNodes.length>0&&r.type==="childList"){for(let a of r.addedNodes)if(a instanceof Element)for(let[o,[l,i]]of ve.entries()){let d=a.querySelectorAll(o);for(let n of d)V(n,l,i)}}})});fe.observe(document,{attributes:!0,childList:!0,subtree:!0});function we(e,r=!0,a){return(...o)=>{r&&ve.set(e,[o,a]);let l=document.querySelectorAll(e);for(let i of l)V(i,o,a)}}function xe(e,r){return(...a)=>V(e,a,r)}function Se(e,r){return(...a)=>{let o="http://www.w3.org/1999/xhtml",l=document.createElementNS(o,e);return V(l,a,r)}}function V(e,r=[],a={}){r.forEach(([l,...i])=>a[l](e,...i));function o(...l){return l.forEach(i=>e.append(i)),e}return o}function Y(e){return new Proxy({},{get:(r,a)=>a==="el"?o=>xe(o,e):a==="$el"?(o,l)=>we(o,l,e):Se(a,e)})}function q(e){let{event:r=null,eventElement:a=window,hideOnFalse:o=!0,invokeImmediately:l=!0,mediaMinWidth:i=0,mediaMaxWidth:d=1/0,state:n=void 0}=e??{};return(...s)=>{let[c,u,k,p]=s,b=()=>{if(!(window.innerWidth>=i&&window.innerWidth<=d))return;let S=n&&typeof k=="function"?k(n.get()):k,ee=String(S)==="true"||String(S)==="false",oe=typeof p=="function"?p(n?n.get():void 0):p??!0;if(ee&&o&&String(S)==="false"||ee&&oe===!1)return c.removeAttribute(u);oe!==!1&&c.setAttribute(u,String(S))};n&&n.sub(b),r&&(c??a).addEventListener(r,b),window.addEventListener("resize",b),l&&b()}}function Z(e){let{event:r=null,eventElement:a=window,invokeImmediately:o=!0,mediaMinWidth:l=0,mediaMaxWidth:i=1/0,method:d="classList",state:n=null}=e??{};return(...s)=>{let[c,u,k]=s,p=()=>{if(!(window.innerWidth>=l&&window.innerWidth<=i))return;let g=typeof u=="function"?u(n?n.get():void 0):u;(typeof k=="function"?k(n?n.get():void 0):k??!0)&&(d==="className"?c.setAttribute("class",g):c.classList.add(g))};n&&n.sub(p),r&&(c??a).addEventListener(r,p),window.addEventListener("resize",p),o&&p()}}var j=e=>(r,a,o)=>{(typeof o=="function"?o():o??!0)&&r.addEventListener(e,a)};function T(e){let{state:r}=e??{};return(...a)=>{let[o,l,i]=a,d=()=>{let n=r?l(r.get()):l();(typeof i=="function"?i(r?r.get():void 0):i??!0)&&(o.innerHTML="",Array.isArray(n)?n.forEach(c=>{c instanceof HTMLElement?o.appendChild(c):o.appendChild(document.createTextNode(String(c)))}):n instanceof HTMLElement?o.appendChild(n):o.innerHTML=String(n))};r&&r.sub(d),d()}}function J(e){let{event:r=null,eventElement:a=window,invokeImmediately:o=!0,mediaMinWidth:l=0,mediaMaxWidth:i=1/0,state:d=void 0}=e??{};return(...n)=>{let[s,c,u,k]=n,p=()=>{if(!(window.innerWidth>=l&&window.innerWidth<=i))return;let g=String(typeof u=="function"?u(d?d.get():void 0):u);(typeof k=="function"?k(d?d.get():void 0):k??!0)&&(c.startsWith("--")?s.style.setProperty(c,g):s.style[c]=g)};d&&d.sub(p),window.addEventListener("resize",p),r&&(s??a).addEventListener(r,p),o&&!r&&p()}}function Q(e){let{event:r,eventElement:a,state:o}=e??{};return(...l)=>{let[i,d,n]=l,s=()=>{let c=typeof d=="function"?d(o?o.get():void 0):d;(typeof n=="function"?n(o?o.get():void 0):n??!0)&&(i.textContent=String(c))};o&&o.sub(s),window.addEventListener("resize",s),r&&(i??a).addEventListener(r,s),s()}}function _e(e,r,a){let o=r.split("."),l=(i,d,n)=>{let[s,...c]=d;return c.length===0?Array.isArray(i)?[...i.slice(0,s),n,...i.slice(s+1)]:{...i,[s]:n}:(i[s]===void 0&&(i[s]=typeof c[0]=="number"?[]:{}),{...i,[s]:l(i[s],c,n)})};return l(e,o,a)}function E(e,r){let a=e;if(r){let b=r.storage.getItem(r.key),g=JSON.parse(b),S=g!=null;(r.overwrite??!0)&&S&&(e=g),!(r.overwrite??!0)&&S&&(Array.isArray(e)&&Array.isArray(g)?e=[...e,...g]:typeof e=="object"&&typeof g=="object"&&(e={...e,...g}))}let o=e,l=[],i=()=>o,d=()=>l.forEach(b=>b(o)),n=b=>()=>c(b(o)),s=()=>c(a),c=b=>{o=b,l.forEach(g=>g(o)),r&&r.storage.setItem(r.key,JSON.stringify(o))};return{deepSet:(b,g)=>c(_e(o,b,g)),get:i,pub:d,reset:s,reduce:n,set:c,sub:b=>l.push(b),unsub:b=>l.splice(l.indexOf(b),1)}}var _=E("black",{key:"colorPicker",storage:sessionStorage}),Te=new URLSearchParams(window.location.search).get("page"),y=E(Te??"HOME",{key:"page",storage:sessionStorage}),F=E("COLOR_PICKER",{key:"properties",storage:sessionStorage}),m=E("Dark",{key:"theme",storage:sessionStorage}),Ee={Dark:{colors:{background:["#212121","#bababa"],brand:["#9e93b4","#FFFFFF"],error:["#da7272","#44313f"],foreground:["#383838","#FFFFFF"],info:["#87B5D9","#283443"],active:["#5f9ece","#324153"],passive:["#292929","#e0e0e0"],success:["#578557","#c5d3c5"],warning:["#dab350","#494022"],black:["#212121","#FFFFFF"],neutral:["#3d3d3d","#bababa"],white:["#e6e6e6","#5c5c5c"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"}},Light:{colors:{background:["#dedede","#969696"],brand:["#9e93b4","#FFFFFF"],error:["#da7272","#44313f"],foreground:["#d1d1d1","#949494"],info:["#87B5D9","#283443"],active:["#5f9ece","#324153"],passive:["#c2c2c2","#999999"],success:["#578557","#c5d3c5"],warning:["#dab350","#494022"],black:["#212121","#FFFFFF"],neutral:["#3d3d3d","#bababa"],white:["#e6e6e6","#5c5c5c"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"}},Pastel:{colors:{background:["#FFB6C1","#FFFACD"],brand:["#FFB6C1","#E0FFFF"],error:["#FFA07A","#87CEFA"],foreground:["#D8BFD8","#FFD700"],info:["#B0E0E6","#98FB98"],active:["#FFDAB9","#DDA0DD"],passive:["#FFDEAD","#F0E68C"],success:["#98FB98","#FF6A6A"],warning:["#FFD700","#90EE90"],black:["#D3D3D3","#FFFFE0"],neutral:["#808080","#FFFFFF"],white:["#FFFFFF","#D3D3D3"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"}},Cafe:{colors:{background:["#3E2723","#FFD54F"],brand:["#795548","#D7CCC8"],error:["#D32F2F","#C5E1A5"],foreground:["#5D4037","#FFEB3B"],info:["#8D6E63","#FFCC80"],active:["#FF7043","#A1887F"],passive:["#FFA726","#AED581"],success:["#388E3C","#FF5252"],warning:["#F57C00","#8BC34A"],black:["#4E342E","#FFECB3"],neutral:["#808080","#FFFFFF"],white:["#FFFFFF","#757575"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"}},Ocean:{colors:{background:["#001F3F","#7FDBFF"],brand:["#0074D9","#39CCCC"],error:["#FF4136","#85144b"],foreground:["#001F3F","#FFDC00"],info:["#39CCCC","#3D9970"],active:["#FF851B","#B10DC9"],passive:["#FFDC00","#FF4136"],success:["#2ECC40","#FF4136"],warning:["#FF851B","#2ECC40"],black:["#001F3F","#7FDBFF"],neutral:["#808080","#FFFFFF"],white:["#DDDDDD","#001F3F"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"}}},f=E(Ee,{key:"tokens",storage:sessionStorage});function X(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(c=>c+c).join(""));let r=parseInt(e.slice(0,2),16)/255,a=parseInt(e.slice(2,4),16)/255,o=parseInt(e.slice(4,6),16)/255,l=Math.max(r,a,o),i=Math.min(r,a,o),d=0,n=0,s=(l+i)/2;if(l!==i){let c=l-i;switch(n=s>.5?c/(2-l-i):c/(l+i),l){case r:d=(a-o)/c+(a<o?6:0);break;case a:d=(o-r)/c+2;break;case o:d=(r-a)/c+4;break}d/=6}return{hue:Math.round(d*360),saturation:Math.round(n*100),lightness:Math.round(s*100)}}var C=new CSSStyleSheet,W=()=>{let e=f.get()[m.get()],{colors:r}=e,a=`
:root {
${Object.entries(r).map(([o,[l,i]])=>{let d=X(l),n=X(i),s=`--token-color-${o}-hue`,c=`--token-color-${o}-saturation`,u=`--token-color-${o}-lightness`,k=`--token-color-${o}-contrast-hue`,p=`--token-color-${o}-contrast-saturation`,b=`--token-color-${o}-contrast-lightness`,g=`--token-color-${o}`,S=`--token-color-${o}-contrast`;return[`${s}: ${d.hue};`,`${c}: ${d.saturation}%;`,`${u}: ${d.lightness}%;`,`${g}: hsl(var(${s}), var(${c}), var(${u}));`,`${k}: ${n.hue};`,`${p}: ${n.saturation}%;`,`${b}: ${n.lightness}%;`,`${S}: hsl(var(${k}), var(${p}), var(${b}));`].join(`
`)}).join(`
`)}
}
`;C.replaceSync(a)};var G=new CSSStyleSheet,ue=()=>G.replaceSync(`.tooltip {
  cursor: pointer;
  position: relative;
}

.tooltip::before {
  position: absolute;
  bottom: calc(100% + 10px);
  left: calc(50% - 100px);
  background-color: white;
  border-radius: 5px;
  color: #fff;
  content: attr(aria-label);
  display: flex;
  padding: 1rem;
  justify-content: center;
  text-transform: none;
  transition: all 0.5s ease;
  width: 180px;
  z-index: 100;
}

.tooltip::after {
  display: flex;
  position: absolute;
  bottom: calc(100%);
  left: calc(50% - 10px);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid white;
  content: " ";
  font-size: 0;
  line-height: 0;
  width: 0;
}

.tooltip::before,
.tooltip::after {
  color: black;
  opacity: 0;
  pointer-events: none;
  text-align: center;
}

.tooltip:focus::before,
.tooltip:focus::after,
.tooltip:hover::before,
.tooltip:hover::after {
  opacity: 1;
  transition: all 0.75s ease;
}
`);function h(e){let r="",a=Array.from(e.cssRules);for(let o of a)r+=o.cssText+`
`;return r}var v=new JSZip,w=e=>{switch(e.action){case"DOWNLOAD_ALL":v.file("tokens.css",h(C)),v.file("accordion.css",h(L)),v.file("alerts.css",h(M)),v.file("badge.css",h(A)),v.file("bg.css",h(H)),v.file("button.css",h(D)),v.file("card.css",h(O)),v.file("dashboard.css",h(P)),v.file("dialog.css",h($)),v.file("dropdown.css",h(z)),v.file("flexgrid.css",h(I)),v.file("flexpane.css",h(R)),v.file("grid.css",h(B)),v.file("section.css",h(N)),v.file("toggles.css",h(U)),v.file("tooltip.css",h(G)),v.generateAsync({type:"blob"}).then(a=>{let o=document.createElement("a");o.href=URL.createObjectURL(a),o.download="capui.zip",o.click()});break;case"DOWNLOAD_THEME_TOKENS":let r=document.createElement("a");r.href=URL.createObjectURL(new Blob([h(C)],{type:"text/css"})),r.download="tokens.css",r.click();break;case"SET_PAGE":y.set(e.page),window.history.pushState(null,"",`?page=${e.page}`);break;case"SET_PROPERTIES":F.set(e.properties);break;case"SET_COLOR_PICKER":F.set("COLOR_PICKER"),_.set(e.colorKey);break;case"SET_COLOR_TOKEN":f.deepSet(`${e.theme}.colors.${e.key}`,[e.color,e.contrast]),W();break;case"SET_THEME":m.set(e.theme),W();break}};var t=Y({"innerHTML:colorPicker":T({state:_}),"innerHTML:pages":T({state:y}),"innerHTML:properties":T({state:F}),"innerHTML:themes":T({state:f}),"innerHTML:theme":T({state:m}),"innerText:pages":Q({state:y}),"style:themes":J({state:f}),attr:q(),change:j("change"),class:Z(),click:j("click"),innerHTML:T(),input:j("input"),style:J()});var ke=()=>{let e=()=>_.get(),r=()=>m.get(),a=()=>f.get()[r()].colors[e()][0],o=()=>f.get()[r()].colors[e()][1];return t.div(["innerHTML:colorPicker",()=>[t.div()(_.get()),t.div(["style","opacity","0.35"],["style","fontSize","0.8em"])("Set the color and it's contrast"),t.div(["style","fontSize","0.85em"],["style","opacity",.6])("Color"),t.div(["style","boxShadow","1px 0px 20px -2px rgba(0,0,0,0.5)"],["style","borderRadius","5px"],["style","width",`${150-20}px`],["style","height",`${80-20}px`],["style","overflow","hidden"],["style","position","relative"])(t.input(["style","position","absolute"],["style","top",`-${20/2}px`],["style","left",`-${20/2}px`],["attr","type","color"],["style","width",`${150}px`],["style","height",`${80}px`],["style","backgroundColor","transparent"],["input",n=>{w({action:"SET_COLOR_TOKEN",key:_.get(),theme:m.get(),color:n.target.value,contrast:o()})}],["attr","value",a()])()),t.div(["style","fontSize","0.85em"],["style","opacity",.6])("Contrast"),t.div(["style","boxShadow","1px 0px 20px -2px rgba(0,0,0,0.5)"],["style","borderRadius","5px"],["style","width",`${150-20}px`],["style","height",`${80-20}px`],["style","overflow","hidden"],["style","position","relative"])(t.input(["style","position","absolute"],["style","top",`-${20/2}px`],["style","left",`-${20/2}px`],["attr","type","color"],["style","width",`${150}px`],["style","height",`${80}px`],["style","backgroundColor","transparent"],["input",n=>{w({action:"SET_COLOR_TOKEN",key:_.get(),theme:m.get(),color:a(),contrast:n.target.value})}],["attr","value",o()])()),t.div(["style","fontSize","0.85em"],["style","opacity",.6])("Token"),t.div(["style","whiteSpace","nowrap"],["style","fontSize","0.8em"],["style","opacity","0.35"])(`--token-${e()}`)]],["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])()};var Fe=e=>{let r=`--token-color-${e}-contrast-hue`,a=`--token-color-${e}-contrast-saturation`,o=`--token-color-${e}-contrast-lightness`,l=`hsla(var(${r}), var(${a}), var(${o}),0.1)`;return t.div(["class","flexgrid__item"])(t.div(["class","card"],["class","card--small"],["class","card--light"],["class","card--ghost"],["style","--card-bg-color",`var(--token-color-${e})`],["style","--card-outer-border-color",l],["style","--card-transition-duration",0],["click",()=>w({action:"SET_COLOR_PICKER",colorKey:e})],["style","cursor","pointer"])(t.div(["class","card__title"],["style:themes","--card-title-font-color",`var(--token-color-${e}-contrast)`])(e),t.div(["class","card__actions"])(t.div(["style","width","8px"],["style","height","8px"],["style","borderRight","1px solid rgba(255,255,255,1)"],["style","borderBottom","1px solid rgba(255,255,255,1)"],["style","display","flex"],["style","transform","rotate(-45deg)"])("")),t.div(["class","card__body"],["style","display","flex"],["style","columnGap","1%"],["style","rowGap","5px"],["style","flexWrap","wrap"],["style","alignItems","center"],["style","position","relative"],["style","alignItems","flex-start"],["style","justifyContent","flex-start"])(t.div(["style","borderRadius","2px"],["style","display","flex"],["style","flexDirection","column"],["style","height","20px"],["style","width","10%"],["style","backgroundColor",`var(--token-color-${e}-contrast)`])())))},ye=()=>{let e=f.get()[m.get()].colors;return t.div(["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"],["style","padding","20px"],["style","borderRadius","10px"])(t.section(["class","section"],["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])(t.div(["class","section__header"])(t.h2(["class","section__header__title"])("Colors"),t.p(["class","section__header__description"])("Colors are defined along with a contasting color to form a set of semantic primitives which can be further modified in context (per component) through the use of CSS variables.")),t.div(["class","flexgrid"],["style","--mobile-width","200px"],["style","--tablet-width","200px"],["style","--desktop-width","200px"],["style","--mobile-gap","20px"],["style","--tablet-gap","20px"],["style","--desktop-gap","20px"],["innerHTML:theme",()=>Object.keys(e).map(Fe)])()),t.section()(t.h2()("Fonts")))};var Ce=e=>t.option(["attr","selected",!0,()=>m.get()===e])(e),me=()=>t.div(["style","display","flex"],["style","flexDirection","row"],["style","gap","10px"],["style","justifyContent","space-between"],["style","alignItems","center"],["style","width","100%"])(t.div()(t.label()("Theme"),t.select(["change",e=>{let r=e.target.value;w({action:"SET_THEME",theme:r})}])(...Object.keys(f.get()).map(Ce))),t.button(["class","button"],["class","button--light"],["class","button--outline"],["style","marginBottom","10px"],["style","gap","10px"],["class","button--justify-start"],["class","tooltip"],["attr","aria-label","Download current theme tokens"],["click",()=>w({action:"DOWNLOAD_THEME_TOKENS"})])(t.span()("tokens.css"),t.span()("[\u2193]")));var Le=t.div(["class","dashboard__nav-header"])(t.img(["attr","src","/images/capui-transparent.png"],["attr","height","80"])()),x=[["class","button"],["class","button--light"],["class","button--ghost"],["class","button--block"],["class","button--justify-start"]],Me=t.nav(["class","dashboard__nav"])(t.div(["style","display","flex"],["style","flexDirection","column"],["style","gap","3px"],["style","alignItems","flex-start"],["style","width","100%"])(t.button(["class","button"],["class","button--light"],["class","button--block"],["style","marginBottom","10px"],["style","gap","10px"],["class","button--justify-start"],["class","tooltip"],["attr","aria-label","Download all components"],["click",()=>w({action:"DOWNLOAD_ALL"})])(t.span()("capui.zip"),t.span()("[\u2193]")),t.button(["class","button"],["class","button--light"],["class","button--outline"],["class","button--block"],["style","marginBottom","10px"],["class","button--justify-start"],["click",()=>w({action:"SET_PAGE",page:"HOME"})])("Home"),t.button(...x,["click",()=>w({action:"SET_PAGE",page:"THEME"})])("Theme"),t.button(...x,["click",()=>w({action:"SET_PAGE",page:"UTILITY"})])("Utility"),t.button(...x,["click",()=>w({action:"SET_PAGE",page:"ACCORDION"})])("Accordion"),t.button(...x)("Alerts"),t.button(...x)("Badge"),t.button(...x)("Button"),t.button(...x)("Card"),t.button(...x)("Dashboard"),t.button(...x)("Dialog"),t.button(...x)("Flexpane"),t.button(...x)("Grid"),t.button(...x)("Tag"))),Ae=t.div(["class","dashboard__nav-footer"])("\xA9Copyright 2024"),He=t.div(["class","dashboard__main-header"],["innerHTML:pages",()=>"Home",()=>y.get()==="HOME"],["innerHTML:pages",()=>"Accordion",()=>y.get()==="ACCORDION"],["innerHTML:pages",me,()=>y.get()==="THEME"],["innerHTML:pages",()=>"Utility",()=>y.get()==="UTILITY"])(),De=t.div(["class","dashboard__main"],["innerHTML:pages",()=>"Home",()=>y.get()==="HOME"],["innerHTML:pages",()=>"Accordion",()=>y.get()==="ACCORDION"],["innerHTML:pages",ye,()=>y.get()==="THEME"],["innerHTML:pages",()=>"Utility",()=>y.get()==="UTILITY"])(),Oe=t.div(["class","dashboard__main-footer"],["class","dashboard__nav-footer"])(t.span()("All rights reserved. Made in the USA \u{1F1FA}\u{1F1F8} by ",t.a(["attr","href","https://kevinlint.com"],["attr","target","_blank"],["style","color","white"])("Kevin Lint")," as a product of ",t.a(["attr","href","https://github.com/linttrapmedia"],["attr","target","_blank"],["style","color","white"])("Lint Trap Media."))),Pe=t.div(["class","dashboard__aside-header"])("Aside Header"),$e=t.aside(["class","dashboard__aside"],["innerHTML:properties",ke,()=>F.get()==="COLOR_PICKER"])(),ze=t.aside(["class","dashboard__aside-footer"])("Aside footer");document.addEventListener("DOMContentLoaded",()=>{t.$el("#root")(["class","dashboard"],["innerHTML",()=>[Le,Me,Ae,He,De,Oe,Pe,$e,ze]]),W(),K(),re(),te(),ae(),ne(),le(),ie(),K(),ce(),de(),se(),be(),ge(),he(),pe(),ue(),document.adoptedStyleSheets=[C,L,M,A,H,D,O,P,$,z,I,R,B,N,U,G]});})();
//# sourceMappingURL=ui.js.map
