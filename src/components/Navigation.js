import React from 'react';
import { Link } from '@reach/router';
import { NAV_LINKS } from '../utils/constants';

const linkClassNames = 'p-1 inline-block hover:bg-gray-100';

const Navigation = () => (
  <div className="fixed left-0 bottom-0 m-2 flex flex-col border-solid border border-gray-100">
    {NAV_LINKS.map(link => (
      <Link
        key={link.to}
        to={link.to}
        className={linkClassNames}
        getProps={({ isCurrent }) =>
          isCurrent
            ? {
                className: `${linkClassNames} border-r-2 border-solid border-blue-500`,
              }
            : null
        }
      >
        {link.name}
      </Link>
    ))}
  </div>
);

export default Navigation;
