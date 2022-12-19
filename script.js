const [title, form, arrow1, arrow2, text1, text2, line1, line2, checkbox, button] = document.querySelectorAll("h1, form, span, span, span, span, div, div, input[type=checkbox], button");
const inputs = document.querySelectorAll("input[type=number]");

button.onclick = () => {
  inputs.forEach(input => input.value = "");
};

function result() {
  if (inputs[0].value && inputs[1].value && inputs[2].value) {
    inputs[3].value = (inputs[1].value * inputs[2].value / inputs[0].value).toFixed(checkbox.checked ? 2 : undefined);
  }
}

inputs[0].oninput = result;
inputs[1].oninput = result;
inputs[2].oninput = result;
