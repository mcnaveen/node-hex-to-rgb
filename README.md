# Convert HEX to RGB
:unicorn: Simple utility to convert HEX color codes to RGB Values

![Build](https://github.com/mcnaveen/node-hex-to-rgb/workflows/Build/badge.svg)

![Extract Email Domain Name](./image/cover.png)

### :package: Requirements
Node.js 12.x LTS or 14.x LTS

### :sparkles: Installation

Install the NPM Package with the below command:
```
npm install node-hex-to-rgb --save
``` 

 (or)

Install with Yarn:
```
yarn add node-hex-to-rgb
```

### :pen: Usage

Import the module in your project:

```javascript
// Commonjs Import
var hexToRGB = require("node-hex-to-rgb");

// or ES6 import
import hexToRGB from "node-hex-to-rgb";
```

### :bulb: Example

Pass the RGB value to the function

```javascript
import hexToRGB from "node-hex-to-rgb";

const rgb = hexToRGB("#ff0000");
console.log(rgb);
```

### :ballot_box_with_check: Example Output
```
[ { red: 255, green: 0, blue: 0 } ]
```
---


#### :green_heart: Message

I hope you find this useful. If you have any questions, please create an issue.