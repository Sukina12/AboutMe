'use strict';

let name = prompt('Please Enter Your Name' );
alert ('Welcome  ' + name + '  In My WebPage & I hope to answer These Questions with yes or no');

let Q1 = prompt ('Do I own a laptop?').toLocaleLowerCase()
 
if (Q1 === 'yes' || Q1==='y')
  {
      console.log('Correct I own a LapTop');
      alert ('Correct answer I own a LapTop');
  }
  else
  {
    console.log('InCorrect answer I own a LapTop');
    alert ('InCorrect answer I own a LapTop');
  }

let Q2 = prompt('Can I ride a bike؟').toLocaleLowerCase()
if  (Q2 === 'yes' || Q2==='y')
  {
      console.log('Incorrect answer I cant ride a bike');
      alert ('Incorrect answer I cant ride a bike');
  }
  else
  {
    console.log('correct answer I cant ride a bike');
    alert ('correct answer I cant ride a bike');
  }

  let Q3 = prompt ('Do I like shawarma?').toLocaleLowerCase()
  if  (Q3 === 'yes' || Q3==='y')
  {
      console.log('correct answer I like shawarma');
      alert ('correct answer I like shawarma');
  }
  else
  {
    console.log('Incorrect answer I like shawarma');
    alert ('Incorrect answer I like shawarma');
  }

  let Q4 = prompt ('Do I Have Children?').toLocaleLowerCase()
  if  (Q4=== 'yes' || Q4==='y')
  {
      console.log('correct answer I have children');
      alert ('correct answer I have children');
  }
  else
  {
    console.log('Incorrect answer I have children');
    alert ('Incorrect answer I have children');
  }

  let Q5 = prompt ('Do I have a car?').toLocaleLowerCase()
  if  (Q5=== 'yes' || Q5==='y')
  {
      console.log('Incorrect answer I havent car');
      alert ('Incorrect answer I havent car');
  }
  else
  {
    console.log('correct answer I havent car');
    alert ('correct answer I havent car');
  }

  alert ('Thank  you  ' + name +  ' for Answering And Welcome ');

 document.write('Welcome To My WebPage');
 document.write(name);

