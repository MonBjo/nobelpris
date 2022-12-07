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
	if(laureate.founded !== undefined) {
		if(laureate.founded.place.countryNow !== undefined) {
			return laureate.founded.place.countryNow.se;
		} else {
			// console.log(laureate);
		}
	} else if(laureate.birth !== undefined) {
		if(laureate.birth.place.countryNow !== undefined) {
			return laureate.birth.place.countryNow.se;
		}
	} else {
		// console.log(laureate);
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


/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= *\
\* =*= Genomsnittliga prissumman per år =*= */
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
\* =*= Antalet pristagare inom de olika kategorierna, för ett valt år =*= */


/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= *\
\* =*= Antalet pristagare totalt, fördelat på de olika kategorierna (cirkeldiagram) =*= */
let lauretsCategoryLable: string[] = [];
let lauretsCategoryCount: any = {};
for(let category of lauretsCategoryData) {
	if(category == undefined) {
		console.log("category is undefined", category);
	} else {
	
		if(!lauretsCategoryLable.includes(category)) {
			lauretsCategoryLable.push(category);
		}
		
		if (lauretsCategoryCount[category] === undefined ) {
			lauretsCategoryCount[category] = 1;
		} else {
			lauretsCategoryCount[category]++;  
		}
	}
}

let lauretsCAtegoryData: number[] = [];
lauretsCategoryLable.forEach(label => {
	lauretsCAtegoryData.push(lauretsCategoryCount[label])
});

export const lauretsCategoryDiagramData = {
	labels: lauretsCategoryLable,
	datasets: [
		{
			label: 'Antal',
			data: lauretsCAtegoryData,
			backgroundColor: ['#be9b7b','#fff4e6','#854442','#4b3832','#bebd7b', '#856642'],
			borderColor: '#3c2f2f'
		}
	],
}

/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= *\
\* =*= Fördelningen mellan män och kvinnor bland pristagare (cirkeldiagram) =*= */
let genderLabels: string[] = [];
let genderCount: any = {};
const undefinedLabel = "organisation";
for(let gender of genderData) {
	if(gender == undefined) {
		if(!genderLabels.includes(undefinedLabel)) {
			genderLabels.push(undefinedLabel);
		}

		if (genderCount[undefinedLabel] === undefined ) {
			genderCount[undefinedLabel] = 1;
		} else {
			genderCount[undefinedLabel]++;  
		}
	} else {
		if(!genderLabels.includes(gender)) {
			genderLabels.push(gender);
		}
		
		if (genderCount[gender] === undefined ) {
			genderCount[gender] = 1;
		} else {
			genderCount[gender]++;  
		}
	}
}

let genderDataset: number[] = [];
genderLabels.forEach(label => {
	genderDataset.push(genderCount[label])
});

export const genderDiagramData = {
	datasets: [
		{
			data: genderDataset,
			label: 'Count',
			backgroundColor: ['#be9b7b','#fff4e6','#854442'],
			borderColor: '#3c2f2f'
		}
	],
	labels: genderLabels
}

/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*= *\
\* =*= Hur många gånger som Nobelpriset delats ut, inom varje kategori =*= */
let categoryLabels: string[] = [];
let categoryCount: any = {};
for(let category of categoryData) {
	if(!categoryLabels.includes(category)) {
		categoryLabels.push(category);
	}
	
	if (categoryCount[category] === undefined ) {
		categoryCount[category] = 1;
	} else {
		categoryCount[category]++;  
	}
}

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
\* =*= Hur många pristagare som kommer från olika länder =*= */
let countryLabels: string[] = [];
let countryCount: any = {};
for(let country of countryData) {
	if(country !== undefined) { 
		if(!countryLabels.includes(country)) {
			countryLabels.push(country);
		}
		
		if (countryCount[country] === undefined ) {
			countryCount[country] = 1;
		} else {
			countryCount[country]++;  
		}
	}
}


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
\* =*= De Nobelpristagare som vunnit flest Nobelpris. Visa till exempel topp 10. =*= */


// TODO: Fix name display error! 

let processedLaureatesData = [];
for(let i = 0; i <= laureatsNameData.length; i++) {
	// console.log(i, laureatsNameData[i], laureatsAwardCountData[i]);
 	processedLaureatesData.push({"name": laureatsNameData[i], "awards": laureatsAwardCountData[i]});
}

let updatedLaureatesLables = [];
let awardCountDataset = [];
for(let data of processedLaureatesData) {
	if(data.awards > 1) {
		console.log("data", data);
		updatedLaureatesLables.push(data.name);
		awardCountDataset.push(data.awards);
	}
}
export const mostAwardsDiagramData = {
	lables: updatedLaureatesLables,
	datasets: [
		{
			lable: "Pris",
			data: awardCountDataset,
			backgroundColor: ['#be9b7b','#fff4e6','#854442','#4b3832','#bebd7b', '#856642'],
			borderColor: '#3c2f2f'
		}
	]
}