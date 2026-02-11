// generate your brand colors from https://www.radix-ui.com/colors/custom 
// for more info visit https://fidely-ui.vercel.app/docs/theming/customization#custom-color-palette

import { createColorTokens } from '@fidely-ui/panda-preset/utils'

const light = {
  '1': { value: '#FCFDFF' },
  '2': { value: '#F5F9FF' },
  '3': { value: '#EAF2FF' },
  '4': { value: '#DAEBFF' }, 
  '5': { value: '#C9E1FF' },
  '6': { value: '#B3D3FF' },
  '7': { value: '#9AC1FF' },
  '8': { value: '#75A7FF' },
  '9': { value: '#6495ED' },
  '10': { value: '#5989E0' },
  '11': { value: '#3C6ABE' },
  '12': { value: '#0D2E6B' },
  'alpha1': { value: '#0055FF03' },
  'alpha2': { value: '#0066FF0A' },
  'alpha3': { value: '#0062FF15' },
  'alpha4': { value: '#0076FF25' },
  'alpha5': { value: '#0072FF36' },
  'alpha6': { value: '#006CFF4C' },
  'alpha7': { value: '#0063FF65' },
  'alpha8': { value: '#005DFF8A' },
  'alpha9': { value: '#0051E29B' },
  'alpha10': { value: '#004AD0A6' },
  'alpha11': { value: '#003CAAC3' },
  'alpha12': { value: '#002363F2' },
}

const dark = {
  '1': { value: '#0C111B' },
  '2': { value: '#121924' },
  '3': { value: '#172742' },
  '4': { value: '#18305C' },
  '5': { value: '#223D6D' },
  '6': { value: '#2E4B7E' },
  '7': { value: '#3B5B95' },
  '8': { value: '#486EB2' },
  '9': { value: '#6495ED' },
  '10': { value: '#5989E0' },
  '11': { value: '#8BB4FC' },
  '12': { value: '#D1E1FE' },
  'alpha1': { value: '#0012F90B' },
  'alpha2': { value: '#1E73F815' },
  'alpha3': { value: '#2E7BFD35' },
  'alpha4': { value: '#2772FD51' },
  'alpha5': { value: '#3D83FE63' },
  'alpha6': { value: '#5190FF75' },
  'alpha7': { value: '#5C95FE8E' },
  'alpha8': { value: '#639BFFAD' },
  'alpha9': { value: '#6BA0FFEC' },
  'alpha10': { value: '#649BFFDE' },
  'alpha11': { value: '#8DB6FFFC' },
  'alpha12': { value: '#D2E2FFFE' },
}

export default createColorTokens('accentColor', light, dark)
