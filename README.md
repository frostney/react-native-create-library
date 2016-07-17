# react-native-create-library
Tool to create a React Native library with a single command.

### Why might you need this?
If you are looking to create a native module for React Native, you need some native code for each platform the module wants to support and then some JavaScript code to bind it all together. Setting this up by yourself can be time-consuming.
This is where this tool comes in. It creates a boilerplate with all current best practices in mind.
Why not use `react-native new-library?` Unfortunately that command doesn't create an up-to-date library, requires an already initialized React Native project and only sets up the iOS side of things.

Caution: This only creates native modules without a view component.

## Installation
Requirements: Node 6.0+
```
$ npm install -g react-native-create-library
```

## Command-line usage

```
react-native-create-library MyFancyLibrary
```

This will create the library in the current folder.
For more options, check `react-native-create-library --help` or the programmatic usage.

## Programmatic usage
```javascript
const createLibrary = require('react-native-create-library');

createLibrary({
  name: 'MyFancyLibrary'
}).then(() => {
  console.log('Oh yay! My library has been created!');
})
```

#### Options
```javascript
{
  name: String, /* The name of the library (Default: Library) */
  prefix: String, /* The prefix for the library (Default: RN) */
  modulePrefix: String, /* The module prefix for the library (Default: react-native) */
  platforms: Array, /* Platforms the library will be created for. (Default: ['ios', 'android', 'windows']) */
  packageIdentifier: String, /* The package name for the Android module (Default: com.reactlibrary) */
  namespace: String, /* The namespace for the Windows module (Default: The package identifier as PascalCase, which is `Com.Reactlibrary`) */
}
```

## Acknowledgements
`react-native-share` (https://github.com/EstebanFuentealba/react-native-share) has been a great source of inspiration for this project.

## License
MIT
