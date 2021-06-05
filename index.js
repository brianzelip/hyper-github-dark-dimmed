const gh = require('@primer/primitives/dist/json/colors/dark_dimmed.json');
const ansi = gh.ansi;

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
const accentColor = blue;

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    cursorColor: accentColor,
    cursorAccentColor: lightWhite,
    foregroundColor: white,
    backgroundColor: primerCodemirrorBG,
    borderColor: primerBorderPrimary,
    selectionColor: 'rgba(255,255,255, 0.1)',
    css: `
    ${config.css || ''}
    .tab_tab {
      border: 0;
      border-bottom: 1px solid ${primerBorderPrimary} !important;
      background-color: ${primerCodemirrorBG};
    }
    .tab_text {
      background-color: rgba(255, 255, 255, 0.02);
    }
    .tab_active {
      background-color: ${black};
    }
    .tab_textActive {
      background-color: ${black};
      border-top: 1px solid ${primerUnderlinenavBorderActive} !important;
    }
    .tabs_nav {
      border-bottom-color: ${primerBorderPrimary} !important;
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
