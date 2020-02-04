const values = {dataValue: null, classValue: null};
function processForm(event) {
  event.preventDefault();
  const myForm = event.target;
  let dateValue1 = "";
  let classValue1 = "";
  let choiceValue = false;

  for (var i = 0; i < myForm.elements.length; i++) {
    if(myForm.elements[i].name == "my_date") {
      dateValue1 = myForm.elements[i].value;
    }
    else if (myForm.elements[i].name == "my_class") {
      var radioButtons = document.getElementsByName("class");
      for(var i = 0; i < radioButtons.length; i++){
        if(radioButtons[i].checked == true){
          classValue1 = radioButtons[i];
        }
      } 
    }
  }


  values.dataValue = dataValue1;
  values.classValue = classValue1;
  console.log(classValue);
  return values;
  var keys = Object.keys(values);
  console.log(keys);  

}

var assignments = {};
var classes = {};
/* title, link, type of assignemnts */


function divByDay(list){
  var div = list.length / 7;
  console.log(div);
}

function get7Days(){
  var temp = values.dataValue;
  temp.split();
  var date = new Date()
}

function getPrevDay(x){
  return numDays(date.getMonth() - 1 + getDate());
}

function numDays() {
  numDays(date.getMonth-1) - x + getDate()
  date= new Date();
  date.setDate(date.getDate()-10);
  console.log(date);
}


// Get the keys 
var keys = Object.keys(values);
console.log(keys);
/*
function organizeByDate(list){
  for (i = -1, i > 0 - list.length, i --){
    dateList = values[dateValue].split("/")
    if (values[i][dateList][]){
      
    }
  }
}
*/