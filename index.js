// standard ANSI Colours
const black = '#545d68';
const red = '#f47067';
const green = '#57ab5a';
const yellow = '#c69026';
const blue = '#539bf5';
const magenta = '#b083f0';
const cyan = '#39c5cf';
const white = '#909dab';
const gray = '#636e7b';
const lightBlack = '#636e7b';
const lightRed = '#ff938a';
const lightGreen = '#6bc46d';
const lightYellow = '#daaa3f';
const lightBlue = '#6cb6ff';
const lightMagenta = '#dcbdfb';
const lightCyan = '#56d4dd';
const lightWhite = '#cdd9e5';

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
