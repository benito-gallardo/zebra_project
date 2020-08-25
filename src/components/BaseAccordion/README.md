# BaseAccordion Component

A global accordion component with default styling.

## How to use

```
import React from 'react';

import BaseAccordion from './component/BaseAccordion';

...
<BaseAccordion top="Lorem Ipsum" bottom="Lorem ipsum dolor adipiscing" />
```

## Default Props

| Prop Name     | Options           | Default Value  | Description                                                                                                                                                     |
| ------------- | ----------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| top           | string, component | `Title`        | Sets the content in the `top` section of the accordion.                                                                                                         |
| bottom        | string, component | `Some content` | Sets the content in the `bottom` section of the accordion                                                                                                       |
| arrowPosition | string            | `right`        | `right` = Sets the arrow position to the right side of the `top` section <br/> `bottom` = Sets the arrow position to under the `bottom` section and centers it. |
| className     | string            | `accordion`    | Adds additional classes to the element. <br /> The default class is not overwriten.                                                                             |
