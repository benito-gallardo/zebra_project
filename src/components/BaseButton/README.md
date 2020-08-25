# BaseButton Component

A global button component with default styling.

## How to use

```
import React from 'react';

import BaseButton from  './components/BaseButton;

...
<Button link="/view-more" className="btn-class">View More</Button>

```

## Default Props

| Prop Name | Options                                                                     | Default Value | Description                                                                         |
| --------- | --------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------- |
| link ,    | string                                                                      | `/`           | Sets the `href` attribute for the button.                                           |
| className | string                                                                      | `btn`         | Adds additional classes to the element. <br /> The default class is not overwriten. |
| children  | [React.Children API](https://reactjs.org/docs/react-api.html#reactchildren) | none          | Add inner content to the button: icon, text, ect.                                   |
