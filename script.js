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

personalPlanPeter.showAgeAndLangs = function(param) {
  const{age} = param;
  const{languages} = param.skills;

  console.log(languages);
  
  let str = 'Мені ' + ' ' + age + ' ' + 'та я володію мовами: ';
  
  languages.forEach(lang => {
    str += `${lang.toUpperCase()} `
  });

  return str;
}

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));