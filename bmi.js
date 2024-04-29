let result;

function calc(){
    const height_s = document.querySelector("#height").value;

    // height_s.innerHTML = 
    // for (i = 0; i < 100; i ++) {
    // height_s.innerHTML += ' <input type="text" id="weight" class="weight" placeholder="Enter Weight">'
    //   }
    
    const weight_s = document.querySelector("#weight").value;
    result = weight_s/(height_s*height_s)* 10000;
    console.log(result)

    let Category="";

   if(result < 18.5){
    Category = "You are underweight";
   }
   else if(result < 25){
    Category = "Normal Weight";
   }
    else if(result < 25){
        Category = "Normal Weight";
       }
      else if(result < 30){

        Category = "Overweight";
      } 
      else{
        Category = "Obese";
      }
      document.getElementById("output").innerHTML= " Your BMI is " + result.toFixed(2) + "(" + Category +")";


}