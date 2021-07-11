define([
	"./translators",
	"./Translator"
],function(translators,Translator){

	/**
	 * Add translations to the cache
	 */
	return translators.addTranslation = function addTranslation(language, namespace, translation) {
		Translator.create(language).getTranslation(namespace).then(function (translations) {
			assign(translations, translation);
		});
	};
	
});