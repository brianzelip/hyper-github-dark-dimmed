/**
 * Map GitHub Dark Dimmed theme, as applied to VS Code, to Hyper.
 *
 * @author Brian Zelip
 * @version v0.2.0
 * @license MIT
 * @see {@link https://github.com/brianzelip/hyper-github-dark-dimmed.git|Source}
 */

const gh = require('@primer/primitives/dist/json/colors/dark_dimmed.json');

const bgSecondary = 'rgb(30, 34, 40)';
// Used in VSCode but not found in gh

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    cursorColor: gh.ansi.blue,
    foregroundColor: gh.text.primary,
    backgroundColor: gh.bg.canvas,
    selectionColor: gh.codemirror.selectionBg,
    borderColor: gh.border.primary,
    css: `
    ${config.css || ''}

    .tabs_nav {
      border-bottom-color: ${gh.border.primary};
    }

    .tabs_title {
      border-top: 1px solid transparent;
      color: ${gh.text.primary} !important;
    }

    .tab_tab {
      border: 0;
    }
    .tab_tab:first-of-type {
      padding-left: 0;
    }

    .tab_tab > .tab_text {
      border-top: 1px solid transparent !important;
      border-right: 1px solid ${gh.border.primary} !important;
      border-bottom: 1px solid ${gh.border.primary} !important;
      border-left: 1px solid transparent !important;
      color: ${gh.text.secondary} !important;
      background-color: ${bgSecondary} !important;
    }
    .tab_tab:first-of-type > .tab_text {
      border-left-color: ${gh.border.primary} !important;
    }
    .tab_tab:last-of-type > .tab_text {
      border-right-color: transparent !important;
    }

    .tab_tab > .tab_text.tab_textActive {
      border-top: 1px solid ${gh.menu.borderActive} !important;
      border-bottom: 1px solid transparent !important;
      color: ${gh.text.primary} !important;
      background-color: ${gh.bg.canvas} !important;
    }

    .tabs_borderShim {
      display: none;
    }
  `,
    colors: {
      black: gh.ansi.black,
      red: gh.ansi.red,
      green: gh.ansi.green,
      yellow: gh.ansi.yellow,
      blue: gh.ansi.blue,
      magenta: gh.ansi.magenta,
      cyan: gh.ansi.cyan,
      white: gh.ansi.white,
      gray: gh.ansi.gray,
      lightBlack: gh.ansi.blackBright,
      lightRed: gh.ansi.redBright,
      lightGreen: gh.ansi.greenBright,
      lightYellow: gh.ansi.yellowBright,
      lightBlue: gh.ansi.blueBright,
      lightMagenta: gh.ansi.magentaBright,
      lightCyan: gh.ansi.cyanBright,
      lightWhite: gh.ansi.whiteBright
    }
  });
