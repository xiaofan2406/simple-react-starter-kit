import jss from 'jss';
import preset from 'jss-preset-default';
import { create as createInjectSheet } from 'react-jss';


jss.setup(preset());

export default createInjectSheet(jss);


// global variables
export const fontFamily = 'Roboto';
export const fontSize = 12;
export const primaryColor = '#000';
