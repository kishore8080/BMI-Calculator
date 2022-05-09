let st = document.getElementById("st");
let h = document.getElementById("h");
var i = 0;

setInterval(change, 1000);
if (st.innerText == "Thin") st.style.color = "orange";
else if (st.innerText == "Healthy") st.style.color = "green";
else if (st.innerText == "Overweight") st.style.color = "goldenrod";
else if (st.innerText == "Obese") st.style.color = "red";
