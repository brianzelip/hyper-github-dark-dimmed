const gh = require('@primer/primitives/dist/json/colors/dark_dimmed.json');
const bg = gh.bg;
const ansi = gh.checks.ansi;
const text = gh.text;
const border = gh.border;
const cm = gh.codemirror;
const selected = gh.state.selected;

// standard ANSI Colours
const black = ansi.black;
const red = ansi.red;
const green = ansi.green;
const yellow = ansi.yellow;
const blue = ansi.blue;
const magenta = ansi.magenta;
const cyan = ansi.cyan;
const white = ansi.white;
const gray = ansi.gray;
const lightBlack = ansi.blackBright;
const lightRed = ansi.redBright;
const lightGreen = ansi.greenBright;
const lightYellow = ansi.yellowBright;
const lightBlue = ansi.blueBright;
const lightMagenta = ansi.magentaBright;
const lightCyan = ansi.cyanBright;
const lightWhite = ansi.whiteBright;

const primerCodemirrorBG = '#22272e';
const primerBorderPrimary = '#444c56';
const primerUnderlinenavBorderActive = '#f78166';

// vscode devtools debugging

const code = {};
code.bg = {
  canvas: bg.canvas,
  tabActive: '#22272e',
  tab: ''
};

// github devtools debugging

code.text = {
  primary: text.primary,
  secondary: text.secondary
};

code.border = {
  primary: border.primary,
  secondary: border.secondary
};

code.cm = {
  text: cm.text,
  bg: cm.bg,
  cursor: cm.cursor
};

code.selected = {
  primaryBg: selected.primaryBg,
  primaryBorder: selected.primaryBorder,
  primaryText: selected.primaryText
};

const myBG = {
  primary: bg.canvas,
  secondary: 'rgb(30, 34, 40)'
  // Can't find the secondary source, but the value is all over devtools
  // for, eg: non-active tabs, the sidebar, the terminal
};
const myText = {
  primary: text.primary,
  secondary: text.secondary
};

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    cursorColor: blue,
    foregroundColor: text.primary,
    backgroundColor: myBG.primary,
    borderColor: border.primary,
    selectionColor: 'rgba(248,28,229,0.3)', //NOT WORKING ?%#$%*
    css: `
    ${config.css || ''}

    .tabs_nav {
      border-bottom-color: ${primerBorderPrimary};
    }

    .tabs_title {
      border-top: 1px solid transparent;
      color: ${myText.primary} !important;
    }

    .tab_tab {
      border: 0;
    }
    .tab_tab:first-of-type {
      padding-left: 0;
    }

    .tab_tab > .tab_text {
      border-top: 1px solid transparent !important;
      border-right: 1px solid ${primerBorderPrimary} !important;
      border-bottom: 1px solid ${primerBorderPrimary} !important;
      border-left: 1px solid transparent !important;
      background-color: ${myBG.secondary} !important;
      color: ${myText.secondary} !important;
    }
    .tab_tab:first-of-type > .tab_text {
      border-left-color: ${primerBorderPrimary} !important;
    }
    .tab_tab:last-of-type > .tab_text {
      border-right-color: transparent !important;
    }

    .tab_tab > .tab_text.tab_textActive {
      border-top: 1px solid ${primerUnderlinenavBorderActive} !important;
      border-bottom: 1px solid transparent !important;
      color: ${myText.primary} !important;
      background-color: ${myBG.primary} !important;
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
