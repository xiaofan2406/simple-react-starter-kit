# Redux Store

## Rules

Components should not be concerned with the the shape of the store, but they
should care about which _module_ it needs to import actions and selectors from.

Create an directory for each _module_ (separated depending on the business logic
of the application).

#### Inside a _module_

Each _module_ directory has at lease four files:

- **reducer.js**: Hosts the root reducer for this _module_, the reducer can be refactored into sub-reducer files.

- **actions.js**: Hosts all action creators for this _module_.

- **selector.js**: Hosts all selectors for this _module_. Each selector is aware of the _module_ key in the whole store. Therefore, there is no need for a global selector file.

- **index.js**: Exports all actions, selectors via named exports as well as namespace them udner `actions` and `selectors`. It also exports `reducer` for this _module_.

#### Inside the store

The root level `index.js` should export all _modules_ actions and selectors under the respective module's name.

**actions** and **selectors** shared between _modules_ should use relative import.

## Usage

```js
import { setMessage, getMessage } from 'store/greet';

import { actions as greetActions } from 'store/greet';
// greet.setMessage

import { selectors as greetSelectors } from 'store/greet';
// greetSelectors.getMessage

import { actions, selectors } from 'store';
// actions.greet.setMessage
// selectors.greet.getMessage
```
