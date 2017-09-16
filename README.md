# JS Case Converter
The JS Case Converter collection helps changing the cases of existing texts.

## Usage
Import the caseconverter.js into your JS project or HTML page and use the functions of the CaseConverter object:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="caseconverter.js"></script>
  </head>
  <body>
    <script>
      var input = "The quick brown fox jumps over the lazy dog";
      CaseConverter.convertToUpperCase(input); 	// THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
      CaseConverter.convertToLowerCase(input); 	// the quick brown fox jumps over the lazy dog
      CaseConverter.convertToStartCase(input); 	// The Quick Brown Fox Jumps Over The Lazy Dog
      CaseConverter.convertToCamelCase(input); 	// TheQuickBrownFoxJumpsOverTheLazyDog
      CaseConverter.convertToSnakeCase(input); 	// The_Quick_Brown_Fox_Jumps_Over_The_Lazy_Dog
      CaseConverter.convertToKebabCase(input); 	// the-quick-brown-fox-jumps-over-the-lazy-dog
      CaseConverter.convertToStudlyCaps(input);	// thE qUIck BRoWN foX jUMPs oVeR tHe lAZY doG
      CaseConverter.invertCase(input); 		// tHE QUICK BROWN FOX JUMPS OVER THE LAZY DOG    
    </script>
  </body>
</html>
```

## Minify
If you want to use a minified version of `caseconverter.js`, you have to minify it before usage. One way is to use the [minifier tool](https://www.npmjs.com/package/minifier) via [npm](https://www.npmjs.com/).

Installing:

    [sudo] npm install [-g] minifier

Minifying:

    minify --output caseconverter.min.js caseconverter.js


## Online Resources

Get more information and online tools for this implementation on:
https://en.toolpage.org/cat/text-conversion

* Uppercase converter: https://en.toolpage.org/tool/uppercase
* Lowercase converter: https://en.toolpage.org/tool/lowercase
* Camelcase converter: https://en.toolpage.org/tool/camelcase
* Startcase converter: https://en.toolpage.org/tool/startcase
* Case inverter: https://en.toolpage.org/tool/case-inverter
