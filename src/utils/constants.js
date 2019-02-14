export const APP_TITLE = 'React Starter Kit';

const subRoutes = ['About', 'Contact'];

export const NAV_LINKS = [
  {
    to: '/',
    name: 'Home',
  },
  ...subRoutes.map(name => ({
    to: `/${name.toLowerCase()}`,
    name,
  })),
];
