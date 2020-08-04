// feetToMlie
function feetToMlie(feet){
    var mile = feet / 5280;
    return mile;

}
var result = feetToMlie(6000);
console.log(result);

// woodCalculator
 function woodCalculator(chair,table,khat){
     var chairCount = chair * 1;
     var tableCount = table * 3 ;
     var khatCount =khat * 5 ;
     var totalWood = chairCount + tableCount + khatCount;
     return totalWood;
 }
var WoodResult = woodCalculator(5,2,2);
console.log(WoodResult);

// brickCalculator

 function brickCalculator(n){
     if( n<=10){
         var first10Floor = n * 15;
         var totalBrickFirst10 = first10Floor * 1000;
         return totalBrickFirst10;
     }   

     else if ( n <=20){
         var totalBrickFirst10n = 150 * 1000; 
         var mid10Floor = n -10;
         var totalmid10 = mid10Floor * 12;
         var brickMid10 = totalmid10 * 1000;
         var totalBrickMid10 = totalBrickFirst10 + brickMid10 ;
         return  totalBrickMid10;

     }
     else if ( n > 20){
        var totalFirst20Floor = (150 * 1000) + (120 * 1000);   
        var last10Floor = n - 20;
        var totalLast10F = last10Floor * 10;
        var brickLast = totalLast10F * 1000;
        var totalBrickLast = totalFirst20Floor + brickLast;
        return totalBrickLast;
     }
    }
    var result = brickCalculator(11);
console.log("Total Bricks: ", result);
    
// tinyFriend
function  tinyFriend(friends){
    var  smallest = friends[0];
    for ( i = 0; i < friends.length; i++){
        var currentNumber = friends[i];
        if ( currentNumber < smallest){
            smallest = currentNumber;
        }
    }
    return smallest;

}
// var smallFriend = tinyFriend([5,3,7,8,4,2,1]);

var smallFriend = tinyFriend(['likhon','jamal','kalams','joni','bin']);
console.log(smallFriend);