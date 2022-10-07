const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%',
          ruby: '30%',
      },
      exp: '1 month'
  }
};

// EXRCISE 1

// FIRST TASK

/* function showExperience(objWithData) {
  let{skills:{
    exp
    }
  } = objWithData
  // let {exp} = objWithData.skills;

  console.log(exp);

  return exp;
}

showExperience(personalPlanPeter); */

// SECOND TASK

/* function showProgrammingLangs(objWithData) {
  let str = '';

  let{programmingLangs} = objWithData.skills;

  for(let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]} \n`
  }

  console.log(str);
}

showProgrammingLangs(personalPlanPeter); */

//THIRD TASK_first-case

/* const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%',
          ruby: '30%',
      },
      exp: '1 month'
  },
  showAgeAndLangs: function(param) {
    let str = '';
    let [ru, eng] = param.skills.languages;

    str += `Мне ${param.age} лет и я владею языками: ${ru.toUpperCase()} ${eng.toUpperCase()}`

    return str;
  }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); */

//THIRD TASK_second-case

/* personalPlanPeter.showAgeAndLangs = function(param) {
  const{age} = param;
  const{languages} = param.skills;

  console.log(languages);
  
  let str = 'Мені ' + ' ' + age + ' ' + 'та я володію мовами: ';
  
  languages.forEach(lang => {
    str += `${lang.toUpperCase()} `
  });

  return str;
}

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); */

// EXRCISE 2
// TASK 1

/* const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {

  let str = ' ';

  arr.length === 0 ? str = 'Люди відсутні' : str = 'сімя складається з: '

  arr.forEach(el => {
    str += el + ' ';
  })

  console.log(str);
}

showFamily(family); */

// TASK 2

/* const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  let str = '';

  arr.forEach(element => {
    str += element.toLowerCase() + '\n';
  });

  console.log(str);

}

standardizeStrings(favoriteCities); */

// EXETCISE 3
// TASK 1

/* const someString = 'This is some strange string';

function reverse(str) {

  if(typeof(str) !== 'string') {
    console.log('error')
    return 'error';
  }

  // let newStr = str.split('').reverse().join('');

  let  newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  console.log(newStr);
}

reverse(someString); */

// TASK 2

/* const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

const allCurrencies = baseCurrencies.concat(additionalCurrencies);

console.log(allCurrencies);

function availableCurr(arr, missingCurr) {

} */

/* const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  let str = '';

  // SLOLUTION 1

  // if(arr.length == 0) {
    // str += 'Have no currencies';
  // } else {
    // str += 'Available currencies are: \n'
  // }
// 
  // for(let curr of arr) {
    // if(curr !== missingCurr) {
      // str += `${curr} \n`;
    // }
    // 
  // } 
  // str += '\n';

  // SOLUTION 2
  
  // arr.forEach((curr, i) => {
    // if(curr !== missingCurr) {
      // str += `${curr} \n`;
    // }
  // })
// 
  // str += '\n';

  // SOLUTION 3

  // for (let i = 0; i < arr.length; i++) {
    // if(arr[i] === missingCurr) {
      // continue;
    // }
    // str += `${arr[i]}\n`;
  // }

  // console.log(str);
  return str;
}

let funcCall = availableCurr;

console.log(funcCall([...baseCurrencies, ...additionalCurrencies], 'RUB')); */

/* let str = 'word';
let newStr = new String(str);

// console.log(str);
// console.log(newStr);

console.dir([1, 2, 3]);
console.log([1, 2, 3]); */
