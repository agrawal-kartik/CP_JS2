var marks=34;

function findGrades(grades){
  if(grades<11 && grades>=0){
    return "E";

  }
  else if (grades<21){
    return "D";
  }
  else if (grades<31){
    return "C";
  }
  else if (grades<41){
    return "B";
  }
  else if (grades<=50){
    return "A";
  }
  else{
    return "Invalid Grades";
  }
   
}
var score =findGrades(marks);

document.getElementById("findGrades").innerHTML=("Marks:"+marks+"<br>Grade:"+score);

// document.getElementById("add").innerHTML=
// "First Number : " + A
// +"<br>Second Number: " + B +  
// "<br>Output: " + AddTwoNumbers();

var C='z';
function getValue(C){
  if(C=='P' || C=='p'){
    return "PrepBytes";

  }

  else if(C=='Z' || C=='z'){
    return "Zenith";

  }
  else if(C=='E' || C=='e'){
    return "Expert Coder";

  }
  else if(C=='D' || C=='d'){
    return "Data Structure";

  }
  else{
    return "Invalid Input"
  }


}
var text=getValue(C);

document.getElementById("getValue").innerHTML=("Input:"+C+"<br>Output:"+text);

var a=10;
var b=22;
var c=18;
function Max_out_of_three(a,b,c){
    if(a>b){
        if(a>c){
            return a;
        }
        else{
            return C;
        }
    }
    else{
        if(b>c){
            return b;
        }
        else{
            return C;
        }
    }

}

var max=Max_out_of_three(a,b,c,);

document.getElementById("Max_out_of_three").innerHTML=("Input:"+a+" "+b+" "+c+" "+"<br>Output:"+max);

function Min_out_of_three(a,b,c){
    if(a<b){
        if(a<c){
            return a;
        }
        else{
            return c;
        }
    }
    else{
        if(b<c){
            return b;
        }
        else{
            return c;
        }
    }
}
var min =Min_out_of_three(a,b,c);
function findSndSmallest(){

   var sum=a+b+c;
   var ss=sum-min-max;
   return ss;
}
var SecondSmall=findSndSmallest();
document.getElementById("findSndSmallest").innerHTML=("Input:"+a+" "+b+" "+c+" "+"<br>Output:"+SecondSmall);

var angle1=50;
var angle2=40;
var angle3=50;
var sumAngle=angle1+angle2+angle3;
var count=0;
function Triangle_Check(){
 if ((angle1<90&&angle2<90&&angle3<90) ){
    return "Acute Triangle";
 }
 else if(sumAngle>180){
    return "Invalid Triangle";
 }

else{
    return "Obtuse Triangle";
}

}

var type=Triangle_Check();

document.getElementById("Triangle_Check").innerHTML=("Input:"+angle1+" "+angle2+" "+angle3+" "+"<br>Output:"+type);





