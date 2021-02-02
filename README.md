# react-native-grace
A toolkit for React Native development

## Installation
`yarn add react-native-grace`

## Configure

```flow js
import {configure} from 'react-native-grace';

configure({});
```

## Usage

### Logger
```flow js
import logger, {setCustomLogger} from 'react-native-grace';

// Set custom loggers (optional)
setCustomLogger({error: bugSnag.error});

// Log :)
logger.log('Any');
logger.warn('String');
logger.error(new Error('e!'));
```
