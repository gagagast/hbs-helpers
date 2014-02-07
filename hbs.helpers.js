// helpers.js
(function(Handlebars) {


	/**
	 * test si deux valeurs sont égale
	 * ex dans une iteration : {{#equal val1 val2}} val1 et val2 sont égales {{else}} pas egale {{/equal}}
	 */
	Handlebars.registerHelper('equal', function(lvalue, rvalue, options) {
		if (arguments.length < 3)
			throw new Error("Handlebars Helper equal needs 2 parameters");
		if (lvalue != rvalue) {
			return options.inverse(this);
		} else {
			return options.fn(this);
		}
	});

	/**
	 * test si une valeur est pair
	 * ex dans une iteration : {{#if_even @index}} l'index est pair {{else}} l'index est impair {{/if_even}}
	 */
	Handlebars.registerHelper('if_even', function(conditional, options) {
		if ((conditional % 2) === 0) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	});

	//Truncates string
	Handlebars.registerHelper('truncate', function(str, len) {
		if (str.length > len && str.length > 0) {
			var new_str = str + " ";
			new_str = str.substr(0, len);
			new_str = str.substr(0, new_str.lastIndexOf(" "));
			new_str = (new_str.length > 0) ? new_str : str.substr(0, len);

			return new Handlebars.SafeString(new_str + '...');
		}
		return str;
	});

}(window.Handlebars));