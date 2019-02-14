export const APP_TITLE = 'React Starter Kit';

const LINK_NAMES = ['About', 'Contact'];

export const NAV_LINKS = [
  {
    to: '/',
    name: 'Home',
    exact: true,
  },
  ...LINK_NAMES.map(name => ({
    to: `/${name.toLocaleLowerCase()}`,
    name,
  })),
];
