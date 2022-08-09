// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n")
function printOdds(count){
    if (count < 0) {
        for (let i = 1; i >= count; i--){
            if(i % 2 != 0){
            console.log(i);
            }
        }
    
    } else {
        for(let i = 1; i <= count; i++)
        if(i % 2 != 0){
            console.log(i)
        }
    }   
}
printOdds(100);



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name,age){
    let aboveSixteen = `Congrats ${name}! You can drive!`;
    let belowSixteen = `Sorry ${name}, you need to wait
     ${16-age} year(s) until you can drive`;

     if (age <16)
     {
        console.log(belowSixteen);
     } else{
        console.log(aboveSixteen);
     }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkQuadrant(x,y){
    if(x>0 && y >0){
        return "Quadrant 1";
    } 
    else if(x<0 && y>0){
        return "Quadrant 2";
    } 
    else if(x<0 && y<0){
        return "Quadrant 3";
    }
    else if(x>0 && y<0){
        return "Quadrant 4";
    }
    else if (x ==0 && y != 0){
        return "X-axis"
    }
    else if (x !=0 && y == 0){
        return "Y-axis"
    }
    else{
        return "Origin"
    }
}

console.log(checkQuadrant(1,1));
console.log(checkQuadrant(-1,1));
console.log(checkQuadrant(-1,-1));
console.log(checkQuadrant(1,-1));
console.log(checkQuadrant(0,-1));
console.log(checkQuadrant(1,0));
console.log(checkQuadrant(0,0));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function isValidTriangle(a,b,c){
    return a+b>c||a+c>b||b+c>a;
}
function checkTriangle(a,b,c){
    let isValid = isValidTriangle(a,b,c);
    if(isValid){
        if(a==b && b==c){
            return `Equilateral`;
        }
        else if (a==b|| b==c||a==c){
            return `Isosceles`
        }
        else{
            return `Scalene`
        }
    } else {
        return `Not a valid triangle`;
    }
}