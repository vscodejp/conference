/**
 * Using Tailwind CSS in React and Next.js
 * https://nx.dev/guides/using-tailwind-css-in-react
 */

const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')
const { join } = require('path')

module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  media: false, // or 'class'
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        button: '0 6px 0 rgba(0, 152, 255, 1.0)',
        nav_active: '0 0 16px 0 rgba(0, 0, 0, 0.1)',
        popover: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
        session: 'rgba(255, 255, 255, 0.6) 1px 1px 0, rgba(0, 0, 0, 0.3) 4px 4px 0',
        theme_switch: '0 0 5px rgba(0, 0, 0, 0.2)',
      },
      content: {
        empty: "''",
      },
      backgroundImage: {
        vscode:
          'linear-gradient(22deg, rgba(0, 152, 255, 1), rgba(0, 122, 204, 1), rgba(0, 101, 169, 1))',
      },
      colors: {
        dark: '#303030',
        sub_dark: '#555',
        sub_light: '#d1d3f8',
        light: '#fefefe',
        primary: '#0098ff',
        secondary: '#007acc',
        third: '#0065a9',
        detail1: '#737cf7',
        detail2: '#705aee',
        detail3: '#a660f5',
        detail4: '#c36feb',
        emphasis: '#ec28e0',
        error: '#f51d65',
      },
      maxWidth: {
        640: '640px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
