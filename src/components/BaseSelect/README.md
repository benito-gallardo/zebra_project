# BaseSelect Component

A global select component with default styling.

## How to use

```
import React from 'react';

import BaseSelect from './components/BaseSelect';

...
<BaseSelect onChange={handleChange} options={options} />
```

## Default Props

| Prop Name | Options | Default Value                          | Description                                                                                                                                                                   |
| --------- | ------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onChange  | event   | none                                   | Return the event                                                                                                                                                              |
| options   | array   | `[{ title: "Hello", value: 'World' }]` | Passes an array of objects with the `keys` of `title` and `value`. <br /> `title` = Displayed Text <br /> `value` = Populates the `value` attribute on the `options` element. |
