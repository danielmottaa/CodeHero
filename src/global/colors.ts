
import theme from './theme';


export type Theme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme { }
  }

const Colors = {
    RED: '#F00',
    RED_PRIMARY: '#D42026',
    BLACK: '#000',
    DIM_GRAY: '#696969',
    GRAY_21: '#363636',
    WHITE: '#FFF',
  };
  
  export default Colors;
  