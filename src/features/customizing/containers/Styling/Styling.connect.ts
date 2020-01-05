import { compose, pure } from 'recompose';
import StylingContainer from './Styling';

const enhanced = compose(pure);

export const Styling = enhanced(StylingContainer);
export default Styling;
