QUnit.test( "Upper Case", function( assert ) {
	assert.ok( CaseConverter.convertToUpperCase("The quick brown fox jumps over the lazy dog"), 
			"THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG" );
} );

QUnit.test( "Lower Case", function( assert ) {
	assert.ok( CaseConverter.convertToLowerCase("The quick brown fox jumps over the lazy dog"), 
			"the quick brown fox jumps over the lazy dog" );
} );

QUnit.test( "Start Case", function( assert ) {
	assert.ok( CaseConverter.convertToStartCase("The quick brown fox jumps over the lazy dog"), 
			"The Quick Brown Fox Jumps Over The Lazy Dog" );
} );

QUnit.test( "Camel Case", function( assert ) {
	assert.ok( CaseConverter.convertToCamelCase("The quick brown fox jumps over the lazy dog"), 
			"TheQuickBrownFoxJumpsOverTheLazyDog" );
} );

QUnit.test( "Snake Case", function( assert ) {
	assert.ok( CaseConverter.convertToSnakeCase("The quick brown fox jumps over the lazy dog"), 
			"The_Quick_Brown_Fox_Jumps_Over_The_Lazy_Dog" );
} );

QUnit.test( "Kebab Case", function( assert ) {
	assert.ok( CaseConverter.convertToKebabCase("The quick brown fox jumps over the lazy dog"), 
			"the-quick-brown-fox-jumps-over-the-lazy-dog" );
} );

QUnit.test( "Studly Caps", function( assert ) {
	var expectedValue = "the quick brown fox jumps over the lazy dog";
	assert.ok( CaseConverter.convertToStudlyCaps("The quick brown fox jumps over the lazy dog"), 
			expectedValue.toLowerCase() );
} );

QUnit.test( "Invert case", function( assert ) {
	assert.ok( CaseConverter.invertCase("The quick brown fox jumps over the lazy dog"), 
			"tHE QUICK BROWN FOX JUMPS OVER THE LAZY DOG" );
} );
