/**
 * Map GitHub Dark Dimmed theme, as applied to VS Code, to Hyper.
 *
 * @author Brian Zelip
 * @version v0.2.2
 * @license MIT
 * @see {@link https://github.com/brianzelip/hyper-github-dark-dimmed.git}
 */

const gh = require('@primer/primitives/dist/json/colors/dark_dimmed.json');

const black = gh.ansi.black;
const red = gh.ansi.red;
const green = gh.ansi.green;
const yellow = gh.ansi.yellow;
const blue = gh.ansi.blue;
const magenta = gh.ansi.magenta;
const cyan = gh.ansi.cyan;
const white = gh.ansi.white;
const gray = gh.ansi.gray;
const lightBlack = gh.ansi.blackBright;
const lightRed = gh.ansi.redBright;
const lightGreen = gh.ansi.greenBright;
const lightYellow = gh.ansi.yellowBright;
const lightBlue = gh.ansi.blueBright;
const lightMagenta = gh.ansi.magentaBright;
const lightCyan = gh.ansi.cyanBright;
const lightWhite = gh.ansi.whiteBright;

const cursorColor = blue;
const foregroundColor = gh.text.primary;
const backgroundColor = gh.bg.canvas;
const selectionColor = gh.codemirror.selectionBg;
const borderColor = gh.border.primary;

const textSecondaryColor = gh.text.secondary;
const borderActiveColor = gh.menu.borderActive;
const bgSecondaryColor = 'rgb(30, 34, 40)'; // Used in VSCode but not found in gh

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    cursorColor,
    foregroundColor,
    backgroundColor,
    selectionColor,
    borderColor,
    css: `
    ${config.css || ''}

    .tabs_nav {
      border-bottom-color: ${borderColor};
    }

    .tabs_title {
      border-top: 1px solid transparent;
      color: ${foregroundColor} !important;
    }

    .tab_tab {
      border: 0;
    }
    .tab_tab:first-of-type {
      padding-left: 0;
    }

    .tab_tab > .tab_text {
      border-top: 1px solid transparent !important;
      border-right: 1px solid ${borderColor} !important;
      border-bottom: 1px solid ${borderColor} !important;
      border-left: 1px solid transparent !important;
      color: ${textSecondaryColor} !important;
      background-color: ${bgSecondaryColor} !important;
    }
    .tab_tab:first-of-type > .tab_text {
      border-left-color: ${borderColor} !important;
    }
    .tab_tab:last-of-type > .tab_text {
      border-right-color: transparent !important;
    }

    .tab_tab > .tab_text.tab_textActive {
      border-top: 1px solid ${borderActiveColor} !important;
      border-bottom: 1px solid transparent !important;
      color: ${foregroundColor} !important;
      background-color: ${backgroundColor} !important;
    }

    .tabs_borderShim {
      display: none;
    }
  `,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      gray,
      lightBlack,
      lightRed,
      lightGreen,
      lightYellow,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite
    }
  });
