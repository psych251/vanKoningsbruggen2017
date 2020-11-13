define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	var global = API.getGlobal();
	
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
 					{image : 'fb10.jpg'}
				]

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
					{image : 'control10.jpg'}
				]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'prac1.jpg'}, {image : 'prac2.jpg'}, {image : 'prac3.jpg'}, {image : 'prac4.jpg'}, {image : 'prac5.jpg'}]
		},

			    
	//Changing params to make task the same as original paper

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
    
		
		
    //The prime categories.
			targetCats :  [
				{
					nameForLogging : 'chinese',  //Will be used in the logging
					//An array of all media objects for this category. The default is pic1-pic200.jpg
					mediaArray : [
						{image : 'pic1.jpg'}, 
			    			{image : 'pic2.jpg'}, {image : 'pic3.jpg'}, {image : 'pic4.jpg'}, {image : 'pic5.jpg'}, {image : 'pic6.jpg'}, {image : 'pic7.jpg'}, {image : 'pic8.jpg'}, {image : 'pic9.jpg'}, 
						{image : 'pic10.jpg'}, {image : 'pic11.jpg'}, {image : 'pic12.jpg'}, {image : 'pic13.jpg'}, {image : 'pic14.jpg'}, {image : 'pic15.jpg'}, {image : 'pic16.jpg'}, {image : 'pic17.jpg'}, {image : 'pic18.jpg'}, {image : 'pic19.jpg'}, 
						{image : 'pic20.jpg'}, {image : 'pic21.jpg'}, {image : 'pic22.jpg'}, {image : 'pic23.jpg'}, {image : 'pic24.jpg'}, {image : 'pic25.jpg'}, {image : 'pic26.jpg'}, {image : 'pic27.jpg'}, {image : 'pic28.jpg'}, {image : 'pic29.jpg'}, 
						{image : 'pic30.jpg'}, {image : 'pic31.jpg'}, {image : 'pic32.jpg'}, {image : 'pic33.jpg'}, {image : 'pic34.jpg'}, {image : 'pic35.jpg'}, {image : 'pic36.jpg'}, {image : 'pic37.jpg'}, {image : 'pic38.jpg'}, {image : 'pic39.jpg'}, 
						{image : 'pic40.jpg'}, {image : 'pic41.jpg'}, {image : 'pic42.jpg'}, {image : 'pic43.jpg'}, {image : 'pic44.jpg'}, {image : 'pic45.jpg'}, {image : 'pic46.jpg'}, {image : 'pic47.jpg'}, {image : 'pic48.jpg'}, {image : 'pic49.jpg'}, 
						{image : 'pic50.jpg'}, {image : 'pic51.jpg'}, {image : 'pic52.jpg'}, {image : 'pic53.jpg'}, {image : 'pic54.jpg'}, {image : 'pic55.jpg'}, {image : 'pic56.jpg'}, {image : 'pic57.jpg'}, {image : 'pic58.jpg'}, {image : 'pic59.jpg'}, 
						{image : 'pic60.jpg'}, {image : 'pic61.jpg'}, {image : 'pic62.jpg'}, {image : 'pic63.jpg'}, {image : 'pic64.jpg'}, {image : 'pic65.jpg'}, {image : 'pic66.jpg'}, {image : 'pic67.jpg'}, {image : 'pic68.jpg'}, {image : 'pic69.jpg'}, 
						{image : 'pic70.jpg'}, {image : 'pic71.jpg'}, {image : 'pic72.jpg'}, {image : 'pic73.jpg'}, {image : 'pic74.jpg'}, {image : 'pic75.jpg'}, {image : 'pic76.jpg'}, {image : 'pic77.jpg'}, {image : 'pic78.jpg'}, {image : 'pic79.jpg'}, 
						{image : 'pic80.jpg'}, {image : 'pic81.jpg'}, {image : 'pic82.jpg'}, {image : 'pic83.jpg'}, {image : 'pic84.jpg'}, {image : 'pic85.jpg'}, {image : 'pic86.jpg'}, {image : 'pic87.jpg'}, {image : 'pic88.jpg'}, {image : 'pic89.jpg'}, 
						{image : 'pic90.jpg'}, {image : 'pic91.jpg'}, {image : 'pic92.jpg'}, {image : 'pic93.jpg'}, {image : 'pic94.jpg'}, {image : 'pic95.jpg'}, {image : 'pic96.jpg'}, {image : 'pic97.jpg'}, {image : 'pic98.jpg'}, {image : 'pic99.jpg'}, 
						{image : 'pic110.jpg'}, {image : 'pic111.jpg'}, {image : 'pic112.jpg'}, {image : 'pic113.jpg'}, {image : 'pic114.jpg'}, {image : 'pic115.jpg'}, {image : 'pic116.jpg'}, {image : 'pic117.jpg'}, {image : 'pic118.jpg'}, {image : 'pic119.jpg'}, 
						{image : 'pic120.jpg'}, {image : 'pic121.jpg'}, {image : 'pic122.jpg'}, {image : 'pic123.jpg'}, {image : 'pic124.jpg'}, {image : 'pic125.jpg'}, {image : 'pic126.jpg'}, {image : 'pic127.jpg'}, {image : 'pic128.jpg'}, {image : 'pic129.jpg'}, 
						{image : 'pic130.jpg'}
					]
					
				}
			],
			
 
		   //The mask stimulus in the example block
			exampleMaskStimulus : {
				css : {color:'000000', 'font-size':'3em'}, 
				media : {image:'Mask.jpg'}
			}, 
			//The mask stimulus 
			maskStimulus : {
				css : {color:'000000', 'font-size':'3em'}, 
				media : {image:'Mask.jpg'}
			}, 
			
		
		//(Changed trial # in block & example to match vanKoningsbruggen2017)
		trialsInBlock : [60], //Changed number of trials to 1 block of 60
 		trialsInExample : 5, //Change to 5 for example practice block 		
		
		base_url : {//Where are your images at?
			image : 'https://psych251.github.io/vanKoningsbruggen2017/inquisit_stimuli_imagesonly/'
		}
		


	});
});
