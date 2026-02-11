import { defineConfig } from "@pandacss/dev"
import { fidelyPreset } from "@fidely-ui/panda-preset"
import slate from "@fidely-ui/panda-preset/colors/slate"

import accentColor from "./theme/colors/corn-flower-blue"

export default defineConfig({
  presets: [
    fidelyPreset({
      accentColor: accentColor,
      grayColor: slate,
      rounded: "sm"
    })
  ],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          // for the body backgroud light/dark colors
          bg: {
            surface: { value: { _light: '{colors.accentColor.3}', _dark: '{colors.bronze.3}' } }
          }
        }
      },
      recipes: {
        button: {
          base: {
            position: "relative",
            overflow: "hidden",
            transition: "all 180ms ease",
          },
          variants: {
            variant: {
              ghost: {
                _hover: {
                  color: "accentColor.9!",
                  background: "none"
                },
                _active: {
                  transform: "scale(0.5)"
                }
              },
              solid: {
                _hover: {
                  transform: "scale(1.02)",
                  boxShadow: "0 0 0 4px rgba(99,102,241,0.28)",
                },
                _active: {
                  transform: "scale(0.5)"
                }
              },
              outline: {
                _hover: {
                  transform: "scale(1.02)",
                  boxShadow: "0 0 0 4px rgba(99,102,241,0.27)",
                },
                _active: {
                  transform: "scale(0.5)"
                }
              }
            }
          }
        }
      },

      slotRecipes: {
        avatar: {
          variants: {
            size: {
              '2xl': {
                root: {
                  "--avatar-size": "{sizes.28}",
                }
              }
            }
          }
        },
      }
    },
  },

  globalCss: {
    extend: {
      html: {
        scrollBehavior: "smooth"
      }
    }
  },

  jsxFramework: 'react',

  staticCss: {
    recipes: '*',
  },

  // The output directory for your css system
  outdir: "styled-system",

   plugins: [
    {
      name: 'panda-headless-colors',
      hooks: {
        'preset:resolved': ({ utils, preset, name }) => {
          if (name === '@pandacss/preset-panda') {
            return utils.omit(preset, ['theme.tokens.colors', 'theme.semanticTokens.colors'])
          }
          return preset
        }
      },
    },
  ],
});
