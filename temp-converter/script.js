
const btn = document.getElementById("submit");
const temp = document.getElementById("input-1");
const tempSelect = document.getElementById("select-1");
const resultSpan = document.querySelector(".result");

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    convert();
});

temp.addEventListener("input", convert);
tempSelect.addEventListener("change", convert);

function convert()
{
    let result = 0.0;
    temp.value = temp.value.trim();
    let suffix = "";

    const tempType = tempSelect.options[tempSelect.selectedIndex];

    if(tempType.value == "cel")
    {
        result = celToFah(temp.value);
        suffix = "&deg; F";

    }else if(tempType.value == "fah")
    {
        result = fahToCel(temp.value);
        suffix = "&deg; C";
    }

    if(result)
    {
        resultSpan.innerHTML = result.toFixed(1) + suffix;
        console.log(result);
    }
}

function celToFah(value) {
    return (value * 9/5) + 32;
}

function fahToCel(value) {
    return 5/9*(value - 32);
}

convert();

