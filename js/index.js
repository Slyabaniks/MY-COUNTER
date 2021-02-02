
//FROM TUTORIAL
// set inital value to zero
/*let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// for each button
btns.forEach(function (btn) {// document.querySelectorAll(.btn).forEch(function(btn) {}
	// add an event listener click
  btn.addEventListener("click", function (e) {
	  // get me the item im clicking on
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
// STOP HERE */

//MY CODE
let count = 0;

document.addEventListener('DOMContentLoaded', function() {

    
    // Change font color to red
    document.querySelector('#increase').onclick = function() {
        document.querySelector('#value').innerHTML = count++;
    document.querySelector('#value').textContent = count;
if (count > 0) {
      document.querySelector('#value').style.color = "green";
    }

    };

    // Change font color to blue
    document.querySelector('#decrease').onclick = function() {
        document.querySelector('#value').innerHTML = count--;
        document.querySelector('#value').textContent = count;
 if (count < 0) {
      document.querySelector('#value').style.color = "red";
    }
	};

    // Change font color to green
    document.querySelector('#reset').onclick = function() {
        document.querySelector('#value').innerHTML = count = 0;
        document.querySelector('#value').textContent = count;
 if (count === 0) {
      document.querySelector('#value').style.color = "#222";
    }
	};
});