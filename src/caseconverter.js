/**
 * The text conversion class helps changing the cases of an existing text. Get
 * more information and online tools for this implementation on: <a href=
 * "https://en.toolpage.org/cat/text-conversion">https://en.toolpage.org/cat/text-conversion</a>
 * 
 * @author Yves Sorge
 */
function CaseConverterClass() {

	/**
	 * Converts a text into uppercase. The converted text will only 
	 * consist of uppercase letters.
	 * 
	 * @param {String} value
	 * @return {String} converted string
	 */
	this.convertToUpperCase = function(value) {
		return value.toUpperCase();
	}

	/**
	 * Converts a text into lowercase. The converted text will only 
	 * consist of lowercase letters.
	 * 
	 * @param {String} value
	 * @return {String} converted string
	 */
	this.convertToLowerCase = function(value) {
		return value.toLowerCase();
	}

	/**
	 * Converts a text into start case / title case.
	 * 
	 * @param {String} value
	 * @return {String} converted string
	 */
	this.convertToStartCase = function(value) {
		var returnValue = "";
		var makeNextUppercase = true;
		value = value.toLowerCase();
		for (var i = 0; value.length > i; i++) {
			var c = value.charAt(i);
			if (c.match(/^\s+$/g) || c.match(/[\(\)\[\]\{\}\\\/]/g)) {
				makeNextUppercase = true;
			} else if (makeNextUppercase) {
				c = c.toUpperCase();
				makeNextUppercase = false;
			}
			returnValue += c;
		}
		return returnValue;
	}

	/**
	 * Converts a text into alternating case.
	 * Example: "Alternating CASE" into "AlTeRnAtInG cAsE".
	 * 
	 * @param {String} value
	 * @return {String} converted string
	 */
	this.convertToAlternatingCase = function(value) {
		var returnValue = "";
		var j = 0;
		value = value.toLowerCase();
		for (var i = 0; value.length > i; i++) {
			var c = value.charAt(i);
			if (c.toUpperCase() != c) {
				if (j % 2 == 0) {
					c = c.toUpperCase();
				}
				j++;
			}
			returnValue += c;
		}
		return returnValue;
	}

	/**
	 * Converts a text into camel case.
	 * Example: "camel case" into "CamelCase".
	 * 
	 * @param {String} value
	 * @return {String} converted string
	 */
	this.convertToCamelCase = function(value) {
		var replace = "/";
		value = value.replace(/[\(\)\[\]\{\}\=\?\!\.\:,\-_\+\\\"#~\/]/g, " ");
		value = this.convertToStartCase(value);
		return value.replace(/\s+/g, "");
	}

	/**
	 * Converts a text into snake case.
	 * Example: "snake case" into "Snake_Case".
	 * 
	 * @param {String} value
	 * @return {String} converted string
	 */
	this.convertToSnakeCase = function(value) {
		value = value.replace(/[\(\)\[\]\{\}\=\?\!\.\:,\-_\+\\\"#~\/]/g, " ");
		value = this.convertToStartCase(value);
		value = value.replace(/^\s+/g, "");
		value = value.replace(/\s+$/g, "");
		return value.replace(/\s+/, "_");
	}

	/**
	 * Converts a text into kebab case.
	 * Example: "Kebab Case" into "kebab-case".
	 * 
	 * @param {String} value
	 * @return {String} converted string
	 */
	this.convertToKebabCase = function(value) {
		value = value.replace(/[\(\)\[\]\{\}\=\?\!\.\:,\-_\+\\\"#~\/]/g, " ");
		value = value.toLowerCase();
		value = value.replace(/^\s+/g, "");
		value = value.replace(/\s+$/g, "");
		return value.replace(/\s+/, "-");
	}

	/**
	 * Converts a text into studly caps. Studly caps is a text case where the 
	 * capitalization of letters varies randomly.
	 * Example: "Studly Caps" into "stuDLY CaPS" or "STudLy CAps".
	 * 
	 * @param {String} value
	 * @return {String} converted string
	 */
	this.convertToStudlyCaps = function(value) {
		var returnValue = "";
		var numOfFollowingUppercase = 0;
		var numOfFollowingLowercase = 0;
		var doCapitalLetter = false;
		value = value.toLowerCase();
		for (var i = 0; value.length > i; i++) {
			c = value.charAt(i);
			if (c.toUpperCase() != c.toLowerCase()) {
				if (numOfFollowingUppercase < 2) {
					if (Math.floor((Math.random() * 100) + 1) % 2 == 0) {
						doCapitalLetter = true;
						numOfFollowingUppercase++;
					} else {
						doCapitalLetter = false;
						numOfFollowingUppercase = 0;
					}
				} else {
					doCapitalLetter = false;
					numOfFollowingUppercase = 0;
				}
				if (!doCapitalLetter) {
					numOfFollowingLowercase++;
				}
				if (numOfFollowingLowercase > 3) {
					doCapitalLetter = true;
					numOfFollowingLowercase = 0;
					numOfFollowingUppercase++;
				}
				if (doCapitalLetter) {
					c = c.toUpperCase();
				}
			}
			returnValue += c;
		}
		return returnValue;
	}

	/**
	 * Inverts the case of a given text.
	 * Converts the spelling of each letter in the reverse order:
	 * lowercase letters are converted to uppercase and vice versa.
	 * Example: "Inverted Case" into "iNVERTED cASE".
	 * 
	 * @param {String} value
	 * @return {String} converted string
	 */
	this.invertCase = function(value) {
		var returnValue = "";
		for (var i = 0; value.length > i; i++) {
			c = value.charAt(i);
			if (c != c.toLowerCase()) {
				c = c.toLowerCase();
			} else if (c != c.toUpperCase()) {
				c = c.toUpperCase();
			}
			returnValue += c;
		}
		return returnValue;
	}

}
var CaseConverter = new CaseConverterClass;
