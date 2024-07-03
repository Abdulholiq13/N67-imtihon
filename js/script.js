try {
  // 1 - masala
  function strLength(text) {
    return `${text} - ${text.length} ta harf bor`;
  }

  console.log(strLength('Hello'));

  // 2 - masala
  function greeting({ name }) {
    return 'Hello ' + name;
  }

  console.log(greeting({ name: 'Selena' }));

  // 3 - masala
  function findQuestionMark(mark) {
    return mark.indexOf('?');
  }
  console.log(findQuestionMark('Hel?o'));

  // 4 - masala
  function repeatNumber(firstNum, secondNum) {
    return String(firstNum).repeat(secondNum);
  }

  console.log(repeatNumber(4, 5));

  // 5 - masala
  function married({ name, isMarried }) {
    if (isMarried) {
      console.log(`${name} oilali`);
    } else {
      console.log(`${name} yolg'iz`);
    }
  }

  married({ name: 'Anvar', isMarried: false });

  // 6 - masala
  const add = (function (a, b) {
    return a + b;
  })();

  // 7 - masala
  function numbers(num) {
    let res = [];
    for (let i = 0; i < num.length; i++) {
      if (num[i] > 0) {
        res.push(num[i]);
      }
    }
    return res;
  }

  console.log(numbers([-5, -3, 1, 5, 7]));

  // 8 - masala
  function dollar(usd) {
    let usdToUzs = 12700;
    return usd * usdToUzs;
  }

  console.log(dollar(230));

  function onlyFalse(Fal) {
    let allFalse = [];
    for (let i = 0; i < Fal.length; i++) {
      if (Fal[i] === false) {
        allFalse.push(Fal[i]);
      }
    }
    return allFalse;
  }

  console.log(onlyFalse([false, true, false, true, false]));

  function weekdays(week) {
    if (week == 1) {
      console.log('Monday');
    } else if (week == 2) {
      console.log('Tuesday');
    } else if (week == 3) {
      console.log('Wednesday');
    } else if (week == 4) {
      console.log('Thursday');
    } else if (week == 5) {
      console.log('Friday');
    } else if (week == 6) {
      console.log('Saturday');
    } else if (week == 7) {
      console.log('Sunday');
    } else {
      console.log("Bunday hafta kuni yo'q");
    }
  }

  weekdays(9);
} catch (err) {
  console.log('Error', err);
}
