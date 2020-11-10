define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Social media',  //Will be used in the user feedback 
				nameForLogging : 'Social media', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'fb1.jpg'}, 
					{image : 'fb2.jpg'}, 
					{image : 'fb3.jpg'}, 
					{image : 'fb4.jpg'}, 
					{image : 'fb5.jpg'}, 
					{image : 'fb6.jpg'}, 
					{image : 'fb7.jpg'}, 
					{image : 'fb8.jpg'}, 
					{image : 'fb9.jpg'}, 
					{image : 'fb10.jpg'}]

			}, 
			{
				nameForFeedback : 'Control',  //Will be used in the user feedback 
				nameForLogging : 'Control', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'control1.jpg'}, 
					{image : 'control2.jpg'}, 
					{image : 'control3.jpg'}, 
					{image : 'control4.jpg'}, 
					{image : 'control5.jpg'}, 
					{image : 'control6.jpg'}, 
					{image : 'control7.jpg'}, 
					{image : 'control8.jpg'}, 
					{image : 'control9.jpg'}, 
					{image : 'control10.jpg'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'prac1.jpg'}, {image : 'prac2.jpg'}, {image : 'prac3.jpg'}]
		},

		base_url : {//Where are your images at?
			image : https://psych251.github.io/vanKoningsbruggen2017/inquisit_stimuli
		}, 
		
		//Changing params to make task the same as original paper
		
		//(Changed trial # in block & example to match vanKoningsbruggen2017)
		trialsInBlock : [60], //Changed number of trials to 1 block of 60
		trialsInExample : [3], //Change to 3 for example practice block 

		//Duration parameters (updated from MinnoJS script to match vanKoningsbruggen2017)
		fixationDuration : -1, //It means that by default we do not use fixation.
		primeDuration : 75, 
		postPrimeDuration : 125, //Duration of blank screen between prime and target.
		targetDuration : 100, //Duration of target presentation.
		ITI : 250, //Duration between trials.
		
		//For the example block (often practice) (updated from MinnoJS script to match vanKoningsbruggen2017)
		exampleBlock_fixationDuration : -1, 
		exampleBlock_primeDuration : 75, 
		exampleBlock_postPrimeDuration : 125, 
		exampleBlock_targetDuration : 100, 

	});
});
