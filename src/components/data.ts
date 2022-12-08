import awards from '../assets/json_award.json';
import laureates from '../assets/json_laureates.json';

// Defining data
const awardYears: string[] = awards.map(award => award.awardYear);
const yearlyPriceMoney: number[] = awards.map(award => award.prizeAmount);
const yearlyPriceMoneyAdjusted: number[] = awards.map(award => award.prizeAmountAdjusted);
const genderData: (string|undefined)[] = laureates.map(laureate => laureate.gender);
const categoryData: string[] = awards.map(award => award.category.se);
const lauretsCategoryData: (string|undefined)[] = laureates.map(laureate => {
	for(let price of laureate.nobelPrizes) {
		return price.category.se;
	}
});
const countryData: (string|undefined)[] = laureates.map(laureate => {
	if(laureate.founded) {
		if(laureate.founded.place.countryNow) {
			return laureate.founded.place.countryNow.se;
		} else {
			// console.log(laureate);
			return "unkown";
		}
	} else if(laureate.birth) {
		if(laureate.birth.place.countryNow) {
			return laureate.birth.place.countryNow.se;
		}
	} else {
		// console.log(laureate);
		return "unkown";
	}
});
const laureatsNameData: (string|undefined)[] = laureates.map(laureate => {
	if(laureate.knownName) {
		return laureate.knownName.se;
	} else if(laureate.orgName) {
		return laureate.orgName.se;
	} else {
		console.log(laureate);
	}
});
const laureatsAwardCountData = laureates.map(laureate => laureate.nobelPrizes.length );



function setLablesAndCount(dataArray: any, labelArray: string[], countArray: any, undefinedLabel: string) {
	for(let data of dataArray) {
		if(data == undefined) {
			if(!labelArray.includes(undefinedLabel)) {
				labelArray.push(undefinedLabel);
			}
	
			if (countArray[undefinedLabel] === undefined ) {
				countArray[undefinedLabel] = 1;
			} else {
				countArray[undefinedLabel]++;  
			}
		} else {
		
			if(!labelArray.includes(data)) {
				labelArray.push(data);
			}
			
			if (countArray[data] === undefined ) {
				countArray[data] = 1;
			} else {
				countArray[data]++;  
			}
		}
	}
}


/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= *\
\* =*=*=*=*=*=*=*=  Genomsnittliga prissumman per år =*=*=*=*=*=*=*= */
export const yearlyPriceMoneyDiagramData =  {
	labels: awardYears,
	datasets: [
        {
            id: 1,
            label: 'Prissumma',
            data: yearlyPriceMoney,
			backgroundColor: ['#be9b7b'],
			borderColor: ['#be9b7b7a'],
	    }, {
            id: 2,
            label: 'Prissumma justerat',
            data: yearlyPriceMoneyAdjusted,
			backgroundColor: ['#854442'],
			borderColor: ['#8544427a'],
	    }
    ]
};


/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= *\
\*    Antalet pristagare totalt, fördelat på de olika kategorierna   */
let lauretsCategoryLable: string[] = [];
let lauretsCategoryCount: any = {};
setLablesAndCount(lauretsCategoryData, lauretsCategoryLable, lauretsCategoryCount, "annan kategori");


let lauretsCategoryDataset: number[] = [];
lauretsCategoryLable.forEach(label => {
	lauretsCategoryDataset.push(lauretsCategoryCount[label])
});

export const lauretsCategoryDiagramData = {
	labels: lauretsCategoryLable,
	datasets: [
		{
			label: 'Antal',
			data: lauretsCategoryDataset,
			backgroundColor: ['#be9b7b','#fff4e6','#854442','#4b3832','#bebd7b', '#856642'],
			borderColor: '#3c2f2f'
		}
	],
}

/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= *\
\* =*=*=  Fördelningen mellan män och kvinnor bland pristagare =*=*= */
let genderLabels: string[] = [];
let genderCount: any = {};
setLablesAndCount(genderData, genderLabels, genderCount, "organisation");

let genderDataset: number[] = [];
genderLabels.forEach(label => {
	genderDataset.push(genderCount[label])
});

export const genderDiagramData = {
	datasets: [
		{
			data: genderDataset,
			label: 'Antal',
			backgroundColor: ['#be9b7b','#fff4e6','#854442'],
			borderColor: '#3c2f2f'
		}
	],
	labels: genderLabels
}

/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= *\
\*  Hur många gånger som Nobelpriset delats ut, inom varje kategori  */
let categoryLabels: string[] = [];
let categoryCount: any = {};
setLablesAndCount(categoryData, categoryLabels, categoryCount, "annan kategori");

let categoryDataset: number[] = [];
categoryLabels.forEach(label => {
	categoryDataset.push(categoryCount[label])
});

export const categoryDiagramData = {
	labels: categoryLabels,
	datasets: [
		{
			label: 'Kategorier',
			data: categoryDataset,
			backgroundColor: ['#be9b7b','#fff4e6','#854442','#4b3832','#bebd7b', '#856642'],
			borderColor: '#3c2f2f'
		}
	],
}


/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= *\
\* =*=*=*= Hur många pristagare som kommer från olika länder =*=*=*= */
let countryLabels: string[] = [];
let countryCount: any = {};
setLablesAndCount(countryData, countryLabels, countryCount, "annat land");


let processedCountryData: { country: string; count: any; }[] = [];
countryLabels.forEach(label => {
	processedCountryData.push({"country": label, "count": countryCount[label]});
});

processedCountryData.sort((a, b) => b.count - a.count);
processedCountryData = processedCountryData.filter(item => item.count >= 3);

let updatedCountryLables: string[] = [];
let countryDataset: number[] = [];
for(let data of processedCountryData) {
	updatedCountryLables.push(data.country)
	countryDataset.push(data.count);
}

export const countryDiagramData = {
	labels: updatedCountryLables,
	datasets: [
		{
			label: "Antal",
			data: countryDataset,
			backgroundColor: ['#be9b7b','#fff4e6','#854442','#4b3832','#bebd7b', '#856642'],
			borderColor: '#3c2f2f'
		}
	],
}

/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= *\
\* =*=*=*=*= De Nobelpristagare som vunnit flest Nobelpris =*=*=*=*= */

let processedLaureatesData = [];
for(let i = 0; i <= laureatsNameData.length; i++) {
	// console.log(i, laureatsNameData[i], laureatsAwardCountData[i]);
 	processedLaureatesData.push({"name": laureatsNameData[i], "awards": laureatsAwardCountData[i]});
}

let updatedLaureatesLables = [];
let awardCountDataset = [];
for(let data of processedLaureatesData) {
	if(data.awards > 1) {
		// console.log("data", data);
		updatedLaureatesLables.push(data.name);
		awardCountDataset.push(data.awards);
	}
}

export const mostAwardsDiagramData = {
	labels: updatedLaureatesLables,
	datasets: [
		{
			label: "Antal",
			data: awardCountDataset,
			backgroundColor: ['#be9b7b','#fff4e6','#854442','#4b3832','#bebd7b', '#856642'],
			borderColor: '#3c2f2f'
		}
	],
}