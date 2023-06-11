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
          100: "#d0d0d0",
          200: "#a0a0a0",
          300: "#717171",
          400: "#414141",
          500: "#121212",
          600: "#0e0e0e",
          700: "#0b0b0b",
          800: "#070707",
          900: "#040404"
      },
      secondary: {
        // yellow
        50: "#f0f0f0", // manually adjusted
        100: "#fff6e0",
        200: "#ffedc2",
        300: "#ffe3a3",
        400: "#ffda85",
        500: "#ffd166",
        600: "#cca752",
        700: "#997d3d",
        800: "#665429",
        900: "#332a14",
      },
    };
    
    export const colors = {
      blue: {
          100: "#d1eafd",
          200: "#a3d5fb",
          300: "#76c1f9",
          400: "#48acf7",
          500: "#1a97f5",
          600: "#1579c4",
          700: "#105b93",
          800: "#0a3c62",
          900: "#051e31"
      },
      teal: {
          100: "#cdf4f7",
          200: "#9ae9ef",
          300: "#68dfe7",
          400: "#35d4df",
          500: "#03c9d7",
          600: "#02a1ac",
          700: "#027981",
          800: "#015056",
          900: "#01282b"
      },
      purple: {
          100: "#e3dcff",
          200: "#c7baff",
          300: "#ab97ff",
          400: "#8f75ff",
          500: "#7352ff",
          600: "#5c42cc",
          700: "#453199",
          800: "#2e2166",
          900: "#171033"
      },
      pink: {
          100: "#ffdee8",
          200: "#ffbed2",
          300: "#ff9dbb",
          400: "#ff7da5",
          500: "#ff5c8e",
          600: "#cc4a72",
          700: "#993755",
          800: "#662539",
          900: "#33121c"
      },
      indigo: {
         100: "#fff6e0",
         200: "#ffedc2",
         300: "#ffe3a3",
         400: "#ffda85",
         500: "#ffd166",
         600: "#cca752",
         700: "#997d3d",
         800: "#665429",
         900: "#332a14",
      },
      orange: {
          100: "#feeae4",
          200: "#fdd5c9",
          300: "#fdc0ae",
          400: "#fcab93",
          500: "#fb9678",
          600: "#c97860",
          700: "#975a48",
          800: "#643c30",
          900: "#321e18"
      },
    }


    export const themeColors = [
      {
        name: 'yellow-theme',
        color: '#ffd166',
      },
      {
        name: 'blue-theme',
        color: '#1a97f5',
      },
      {
        name: 'green-theme',
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
    export const themeSettings = (mode,currentColor) => {
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
    