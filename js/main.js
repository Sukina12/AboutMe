'use strict';
let score = 0;
// The First Questions 
let name = prompt('Please Enter Your Name' );
alert ('Welcome  ' + name + '  In My WebPage & I hope to answer These Questions with yes or no');

// eslint-disable-next-line no-unused-vars
function myLaptop(){
  let Q1 = prompt ('Do I own a laptop?').toLocaleLowerCase();

  if (Q1 === 'yes' || Q1==='y')
  {
    console.log('Correct I own a LapTop');
    alert ('Correct answer I own a LapTop');
    score++ ;
  }
  else
  {
    console.log('InCorrect answer I own a LapTop');
    alert ('InCorrect answer I own a LapTop');
  }
}

// eslint-disable-next-line no-unused-vars
function myBike(){
  let Q2 = prompt('Can I ride a bike؟').toLocaleLowerCase()
  if (Q2 === 'yes' || Q2==='y')
  {
    console.log('Incorrect answer I cant ride a bike');
    alert ('Incorrect answer I cant ride a bike');
  }
  else
  {
    console.log('correct answer I cant ride a bike');
    alert ('correct answer I cant ride a bike');
    score++ ;
  }
}

function myShawrma(){
let Q3 = prompt ('Do I like shawarma?').toLocaleLowerCase()
if (Q3 === 'yes' || Q3==='y')
{
  console.log('correct answer I like shawarma');
  alert ('correct answer I like shawarma');
      score++ ;
  }
  else
  {
    console.log('Incorrect answer I like shawarma');
    alert ('Incorrect answer I like shawarma');
  }
}
function myChildren(){
  let Q4 = prompt ('Do I Have Children?').toLocaleLowerCase()
  if  (Q4=== 'yes' || Q4==='y')
  {
      console.log('correct answer I have children');
      alert ('correct answer I have children');
      score++ ;
  }
  else
  {
    console.log('Incorrect answer I have children');
    alert ('Incorrect answer I have children');
  }
}

function myCar(){
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
    score++ ;
  }
}

  // Seconde Part
  function myGuess(){
  let Q6 = Number(prompt ('Guess My Age Between 20 & 40'));
 
  if(Q6 === 30)
  {
    console.log('Correct I am 30 Years Old');
    alert('Correct I am 30 Years Old');
    score++ ;
  }
  else 
  {
    for (let i=3; i>0; i--)
    {
      let j = i;
      if (Q6 > 30  )
         {
          console.log('Too High  Guess For Another Chance');
          alert ('Too High  Guess For Another Chance You Have Only  '+ j + ' Atempts');
          Q6 = Number(prompt ('Guess My Age Between 20 & 40'));
         }
         else 
           if(Q6 < 30 )
          {
            console.log('Too Low  Guess For Another Chance');
            alert ('Too Low  Guess For Another Chance You Have Only  '+ j + ' Atempts'); 
            Q6 = Number(prompt ('Guess My Age Between 20 & 40'));
          }
           else
           if (Q6 === 30)
           {
            console.log();
            alert('Correct I am 30 Years Old');
            score++ ;
            break;
           }
            
      
    }
  }
  if (Q6 !== 30) 
       {
        console.log('you finished all chances I am 30 years Old');
        alert ('you finished all chances I am 30 years Old');
      }       
     

    }

   // Third Part

   function muNumber(){
   let myNum = [10 , 4 , 12];
   alert ('Now I have Three Numbers in My mind');
   let Q7= Number(prompt ('Guess One Number From Three Numbers from 0 to 20?'));

   for(let x=6; x>0; x--)
    {
      let y = x;
      if (Q7 === myNum[0] || Q7 === myNum[1])
     {
      console.log('Correct My Num Is ' + Q7); 
      alert ('Correct My Num Is ' + Q7 );
       score++ ;
       break;
     }
       else
         if ( Q7 === myNum[2])
         {
          console.log('Correct My Num Is ' + Q7);
          alert ('Correct My Num Is ' + Q7 );
          score++ ;
          break;
         }
           else
             {
             Q7 =Number(prompt ('Incorrect Guess One Number You Have Only  '+ y + ' Atempts'));
             }
         
      if(x == 0)
        {
          console.log('sorry you finished all atempts') ;
          alert ('sorry you finished all atempts');
        }
               
    }
     
  }   
  
  myCar();
  myBike();
  myChildren();
  myLaptop();
  myShawrma();
  myGuess();
  muNumber();  
 alert('Your score is: '+score+' out of 7');
 alert ('Thank  you  ' + name +  ' for Answering And Welcome ');

 document.write('Welcome To My WebPage', name);
