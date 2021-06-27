/**
 * Map GitHub VSCode Dark Dimmed theme to Hyper.
 *
 * @author Brian Zelip
 * @version v1.0.0
 * @license MIT
 * @see {@link https://github.com/brianzelip/hyper-github-dark-dimmed}
 */

// Data
const theme = require('github-vscode-themes').darkDimmed;

// ANSI
const black = theme.colors['terminal.ansiBlack'];
const red = theme.colors['terminal.ansiRed'];
const green = theme.colors['terminal.ansiGreen'];
const yellow = theme.colors['terminal.ansiYellow'];
const blue = theme.colors['terminal.ansiBlue'];
const magenta = theme.colors['terminal.ansiMagenta'];
const cyan = theme.colors['terminal.ansiCyan'];
const white = theme.colors['terminal.ansiWhite'];
const lightBlack = theme.colors['terminal.ansiBrightBlack'];
const lightRed = theme.colors['terminal.ansiBrightRed'];
const lightGreen = theme.colors['terminal.ansiBrightGreen'];
const lightYellow = theme.colors['terminal.ansiBrightYellow'];
const lightBlue = theme.colors['terminal.ansiBrightBlue'];
const lightMagenta = theme.colors['terminal.ansiBrightMagenta'];
const lightCyan = theme.colors['terminal.ansiBrightCyan'];
const lightWhite = theme.colors['terminal.ansiBrightWhite'];

// Hyper API
const cursorColor = theme.colors['editorCursor.foreground'];
const foregroundColor = theme.colors['editor.foreground'];
const backgroundColor = theme.colors['editor.background'];
const selectionColor = theme.colors['editor.selectionBackground'];
const borderColor = theme.colors['tab.border'];

// State
const tabInactiveForeground = theme.colors['tab.inactiveForeground'];
const tabInactiveBackground = theme.colors['tab.inactiveBackground'];
const tabActiveForeground = theme.colors['tab.activeForeground'];
const tabActiveBackground = theme.colors['tab.activeBackground'];
const tabActiveBorderTop = theme.colors['tab.activeBorderTop'];
const tabHoverBackground = theme.colors['tab.hoverBackground'];
const listHoverBackground = theme.colors['list.hoverBackground'];

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
      border: 0;
      border-bottom: 1px solid ${borderColor} !important;
    }

    .tabs_title {
      /* One tab only */
      border-top: 1px solid transparent;
      color: ${tabActiveForeground} !important;
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
      color: ${tabInactiveForeground} !important;
      background-color: ${tabInactiveBackground} !important;
    }
    .tab_tab > .tab_text:hover {
      background-color: ${tabHoverBackground} !important;
    }
    .tab_tab:first-of-type > .tab_text {
      border-left-color: ${borderColor} !important;
    }
    .tab_tab:last-of-type > .tab_text {
      border-top-right-radius: 10px;
      border-right-color: transparent !important;
    }
    .tab_tab:last-of-type > .tab_text.tab_textActive {
      border-top-right-radius: 0px;
    }

    .tab_tab > .tab_text.tab_textActive {
      border-top: 1px solid ${tabActiveBorderTop} !important;
      border-bottom: 1px solid transparent !important;
      color: ${tabActiveForeground} !important;
      background-color: ${tabActiveBackground} !important;
    }

    .tab_icon.tab_iconHovered {
      color: ${foregroundColor} !important;
      background-color: ${listHoverBackground} !important;
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
