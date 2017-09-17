# JS Case Converter
The JS Case Converter collection helps changing the cases of existing texts.

## Usage
Import `caseconverter.js` into your JS project or HTML page and use the functions of the CaseConverter object:

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
If you want to use a minified version of `caseconverter.js`, you have to minify it before usage. One way is to run the [minifier tool](https://www.npmjs.com/package/minifier) via [npm](https://www.npmjs.com/).

Installing:

    [sudo] npm install [-g] minifier

Minifying:

    minify --output caseconverter.min.js caseconverter.js


## Online Resources

Get more information and online tools for this implementation on 
https://en.toolpage.org/cat/case-converter

* [Upper case converter](https://en.toolpage.org/tool/uppercase)
* [Lower case converter](https://en.toolpage.org/tool/lowercase)
* [Camel case converter](https://en.toolpage.org/tool/camelcase)
* [Start case converter](https://en.toolpage.org/tool/startcase)
* [Snake case converter](https://en.toolpage.org/tool/snakecase)
* [Kebab case converter](https://en.toolpage.org/tool/kebabcase)
* [Alternating case converter](https://en.toolpage.org/tool/alternatingcase)
* [Studly caps converter](https://en.toolpage.org/tool/studlycaps)
* [Case inverter](https://en.toolpage.org/tool/case-inverter)
