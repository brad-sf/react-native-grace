# react-native-grace
A toolkit for React Native development

## Installation
`yarn add react-native-grace`

## Configure

```flow js
import {configure} from 'react-native-grace';

configure({
    logger: Object
});
```

## Usage

### Logger
```flow js
import logger from 'react-native-grace';

logger.log('Any');
logger.warn('String');
logger.error(new Error('e!'));
```
