define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : ’Social media’,  //Will be used in the user feedback 
				nameForLogging : ‘Social media’, //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : ‘fb1.jpg’}, 
					{image : ‘fb2.jpg'}, 
					{image : ‘fb3.jpg'}, 
					{image : ‘fb4.jpg'}, 
					{image : ‘fb5.jpg'}, 
					{image : ‘fb6.jpg'}, 
					{image : ‘fb7.jpg'}, 
					{image : ‘fb8.jpg'}, 
					{image : ‘fb9.jpg'}, 
					{image : ‘fb10.jpg’}]
			}, 
			{
				nameForFeedback : ‘Control’,  //Will be used in the user feedback 
				nameForLogging : ‘Control’, //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : ‘control1.jpg'}, 
					{image : ‘control2.jpg'}, 
					{image : ‘control3.jpg'}, 
					{image : ‘control4.jpg'}, 
					{image : ‘control5.jpg'}, 
					{image : ‘control6.jpg'}, 
					{image : ‘control7.jpg'}, 
					{image : ‘control8.jpg'}, 
					{image : ‘control9.jpg'}, 
					{image : ‘control10.jpg’}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://psych251.github.io/vanKoningsbruggen2017/inquisit_stimuli'
		}
	});
});