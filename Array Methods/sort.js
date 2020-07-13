const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



//  sort  //  companies by start year  //  ES5
const sortedCompanies = companies.sort(function (a, b) {
  if (a.start > b.start) {
    return 1;
  }
  else {
    return -1;

  }
});
console.log(sortedCompanies);

//  CHECK RESULTS

const sortedCompanies = companies.sort(function (a, b) {
  if (a.start > b.start) {
    return -1;
  }
  else {
    return 1;

  }
});
console.log(sortedCompanies);



//  sort  //  companies by start year  //  ES6
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

//  CHECK RESULTS

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? -1 : 1));
console.log(sortedCompanies);



//  sort  //  ages
//  WHAT S WRONG?
//  IT SORT BY FIRST CHARACTER, 5 PUT AFTER 45 BECUASE 5 IS GREATER THAN 4
const sortedAges = ages.sort()
console.log(sortedAges);

//  sort  // ages  // ES5
const sortedAges = ages.sort(function (a, b) {
  return a - b;
});
console.log(sortedAges);

//  CHECK RESULTS

const sortedAges = ages.sort(function (a, b) {
  return b - a;
});
console.log(sortedAges);

//  sort  // ages  // ES6
const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);

//  CHECK RESULTS

const sortedAges = ages.sort((a, b) => b - a);
console.log(sortedAges);



//  sort  // companies by category  // ES5
const sortedCompaniesByCategory = companies.sort(function (a, b) {
  if (a.category > b.category) {
    return 1;
  }
  else {
    return -1;
  }
});
console.log(sortedCompaniesByCategory);

//  sort  // companies by category  // ES6
const sortedCompaniesByCategory = companies.sort((a, b) => a.category > b.category ? 1 : -1);
console.log(sortedCompaniesByCategory);
