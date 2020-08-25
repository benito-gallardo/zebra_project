# Carrier Cards

Displays a stylized list of Carriers from the given API.

## Getting Started

Pull down and run:

```
npm install
```

Start the app with the mock-api endpoint

```
npm run dev
```

## Usage

Import into your file and pass it the url from your API :

```
import React from 'react';

import CarrierCards from './components/CarrierCards;

...
<CarrierCards url="/carrier-cards" />
```

## Default Props

| Prop Name | Options | Default Value | Description              |
| --------- | ------- | ------------- | ------------------------ |
| url       | string  | none          | Sets the url for the API |

## Global Components
[Button](/src/components/BaseButton)

[Accordion](/src/components/BaseAccordion)

[Select](/src/components/BaseSelect)
