import { WithThemeFnInterface, ThemedBaseStyledInterface, DefaultTheme } from 'styled-components';
import { theme } from './theme';
type Theme = typeof theme & DefaultTheme;

declare const styled: ThemedBaseStyledInterface<Theme>;
declare const withTheme: WithThemeFnInterface<Theme>;
