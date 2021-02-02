# react-native-grace
A toolkit for React Native development

## Installation
`yarn add react-native-grace`

## Usage
### Logger
```flow js
import logger, {setCustomLogger} from 'react-native-grace/logger';

// Set custom loggers (optional)
setCustomLogger({error: bugSnag.error});

// Log :)
logger.log('Any');
logger.warn('String');
logger.error(new Error('e!'));
```

### Local Storage
```flow js
import {set, get, remove} from 'react-native-grace/local-storage';

const keys = {
	UUID: 'UUID',
}

void set(keys.UUID, '679f4133-d19b-4fbf-9150-7cffa22f26a7');
await get(keys.UUID); // '679f4133-d19b-4fbf-9150-7cffa22f26a7'
await remove(keys.UUID);
```

### Responsive Utils
```flow js
// Method Utils
import {responsive, getImageHeight} from 'react-native-grace/responsive';

// Check Utils
import {isPhone, isTablet} from 'react-native-grace/responsive';

// Dimensions
import {screenWidth, screenHeight} from 'react-native-grace/responsive';

// Breakpoints
import {
	bpPhoneSmall,
    bpPhoneMedium,
    bpTabletSmall,
    bpTabletMedium,
    bpTabletLarge,
} from 'react-native-grace/responsive';
```

### Layout
```flow js
import {layout} from 'react-native-grace/layout';

const padding = layout.mb.md;

```

### Theme
```flow js
import {opacity, fontSize, color} from 'react-native-grace/theme';

const opacity = opacity[10];
const font = fontSize.lg;
const color = color.white;

```
