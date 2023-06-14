  // color design tokens export
  
  export const tokensDark = {
      grey: {
        0: "#ffffff", // manually adjusted
        10: "#f6f6f6", // manually adjusted
        50: "#f0f0f0", // manually adjusted
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
        1000: "#000000", // manually adjusted
      },
      primary: {
          100: "#d4d7db",
          200: "#a9afb8",
          300: "#7d8794",
          400: "#525f71",
          500: "#27374d",
          600: "#1f2c3e",
          700: "#17212e",
          800: "#10161f",
          900: "#080b0f"
      },
      secondary: {
          100: "#d9e7de",
          200: "#b3cebd",
          300: "#8eb69d",
          400: "#689d7c",
          500: "#42855b",
          600: "#72927e",
          700: "#556d5e",
          800: "#39493f",
          900: "#1c241f"
      },
    };
    
    export const colors = {
      blue: {
          100: "#d1eafd",
          200: "#a3d5fb",
          300: "#76c1f9",
          400: "#48acf7",
          500: "#1a97f5",
          600: "#3a8ac6",
          700: "#2b6794",
          800: "#1d4563",
          900: "#0e2231"
      },
      teal: {
          100: "#cdf4f7",
          200: "#9ae9ef",
          300: "#68dfe7",
          400: "#35d4df",
          500: "#03c9d7",
          600: "#2aaab2",
          700: "#207f86",
          800: "#155559",
          900: "#0b2a2d"
      },
      purple: {
          100: "#e3dcff",
          200: "#c7baff",
          300: "#ab97ff",
          400: "#8f75ff",
          500: "#7352ff",
          600: "#725ecc",
          700: "#564699",
          800: "#392f66",
          900: "#1d1733"
      },
      pink: {
          100: "#ffdee8",
          200: "#ffbed2",
          300: "#ff9dbb",
          400: "#ff7da5",
          500: "#ff5c8e",
          600: "#cc6484",
          700: "#994b63",
          800: "#663242",
          900: "#331921"
      },
      green: {
        100: "#d9e7de",
        200: "#b3cebd",
        300: "#8eb69d",
        400: "#689d7c",
        500: "#42855b",
        600: "#72927e",
        700: "#556d5e",
        800: "#39493f",
        900: "#1c241f"
      },
      orange: {
          100: "#feeae4",
          200: "#fdd5c9",
          300: "#fdc0ae",
          400: "#fcab93",
          500: "#fb9678",
          600: "#ca8976",
          700: "#976758",
          800: "#65443b",
          900: "#32221d"
      },
    }

    export const themeColors = [
      {
        name: 'green-theme',
        color: '#42855b',
      },
      {
        name: 'blue-theme',
        color: '#1a97f5',
      },
      {
        name: 'teal-theme',
        color: '#03c9d7',
      },
      {
        name: 'purple-theme',
        color: '#7352ff',
      },
      {
        name: 'red-theme',
        color: '#ff5c8e',
      },
      {
        name: 'orange-theme',
        color: '#fb9678',
      },
    ];
    export const bgColorValue = (currentColor) => {
      const colorKeys = Object.keys(colors);
      for (const colorKey of colorKeys) {
        if (colors[colorKey]['500'] === currentColor) {
          tokensDark.secondary = { ...colors[colorKey] };
          updateTokensLight();
          return;
        }
      }
      console.log("Color value not found");
    };
    
    const updateTokensLight = () => {
      const reversedTokens = reverseTokens(tokensDark);
      Object.assign(tokensLight, reversedTokens);
    };
        

    function reverseTokens(tokensDark) {
      const reversedTokens = {};
      Object.entries(tokensDark).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reversedObj = {};
        for (let i = 0; i < length; i++) {
          reversedObj[keys[i]] = values[length - i - 1];
        }
        reversedTokens[key] = reversedObj;
      });
      return reversedTokens;
    }
    export const tokensLight = reverseTokens(tokensDark);
    
    // mui theme settings
    export const themeSettings = (mode) => {
      return {
        palette: {
          mode: mode,
          ...(mode === "dark"
            ? {
                // palette values for dark mode
                primary: {
                  ...tokensDark.primary,
                  main: tokensDark.primary[400],
                  light: tokensDark.primary[400],
                },
                secondary: {
                  ...tokensDark.secondary,
                  main: tokensDark.secondary[300],
                },
                neutral: {
                  ...tokensDark.grey,
                  main: tokensDark.grey[500],
                },
                background: {
                  default: tokensDark.primary[600],
                  alt: tokensDark.primary[500],
                },
              }
            : {
                // palette values for light mode
                primary: {
                  ...tokensLight.primary,
                  main: tokensDark.grey[50],
                  light: tokensDark.grey[100],
                },
                secondary: {
                  ...tokensLight.secondary,
                  main: tokensDark.secondary[600],
                  light: tokensDark.secondary[700],
                },
                neutral: {
                  ...tokensLight.grey,
                  main: tokensDark.grey[500],
                },
                background: {
                  default: tokensDark.grey[0],
                  alt: tokensDark.grey[50],
                },
              }),
        },
        typography: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 12,
          h1: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 40,
          },
          h2: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 32,
          },
          h3: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 24,
          },
          h4: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 20,
          },
          h5: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 16,
          },
          h6: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 14,
          },
        },
      };
    };
    