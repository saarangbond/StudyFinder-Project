const values = [];
function processForm(event) {
  event.preventDefault();
  console.log(event.target);
  const myForm = event.target;
  let dateValue = "";
  let choiceValue = false;
  for (var i = 0; i < myForm.elements.length; i++) {
    if (myForm.elements[i].name == "my_date") {
      dateValue = myForm.elements[i].value;
    } else if (myForm.elements[i].name == "my_class") {
        classValue = myForm.elements[i].value;
    }
  }
  values.push({ dateValue: dateValue, classValue: classValue });
  console.log(values);
}

print(values)