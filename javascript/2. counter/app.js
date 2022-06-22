// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach(btn => {
  btn.addEventListener("click", e => {
    console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count -= 1;
    } else if (styles.contains("increase")) {
      count += 1;
    } else {
      count = 0;
    }
    value.textContent = count;
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else if (count === 0) {
      value.style.color = "#222";
    }
    console.log(e.currentTarget.classList);
    console.log(value.textContent);
  });
});

/* const btnDecrease = document.getElementsByClassName("btn decrease");
console.log(btnDecrease); */
// const btnReset = document.getElementsByClassName("btn reset");
// const btnIncrease = document.getElementsByClassName("btn decrease");

/* count -= 0;
value.textContent = count; */
