function uncheck() {
    const inputs = document.querySelector('#chk');
    inputs.checked = false;
  }



function calc() {
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const level = parseInt(document.querySelector("#level").value);
    const age = parseInt(document.querySelector("#age").value);

    const sum1 = height + level + age;
    const sum2 = weight + level + age;

    const math = Math.max(sum1, sum2);
    const summary = math - 1; 

    const i = parseInt(document.querySelector("#boot").value);

    const array = new Array();
    array [0] = new Array(0.75, 1, 1.5, 2, 2.5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,);
    array [1] = new Array(0.75, 0.75, 1, 1.5, 2, 2.5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    array [2] = new Array(0.75, 0.75, 1.25, 1.5, 2, 2.5, 3, 3.5, 4.5, 5.5, 6.5, 7.5, 0, 0, 0, 0);
    array [3] = new Array(0, 0.75, 1, 1.5, 1.75, 2.25, 2.75, 3, 4, 5, 6, 7, 8.5, 10, 11.5, 0);
    array [4] = new Array(0, 0, 0, 1.25, 1.5, 2, 2.5, 3, 3.5, 4.5, 5.5, 6.5, 8, 9.5, 11, 0);
    array [5] = new Array(0, 0, 0, 0, 1.5, 1.75, 2.25, 2.75, 3.5, 4, 5, 6, 7, 8.5, 10, 12);
    array [6] = new Array(0, 0, 0, 0, 0, 1,75, 2, 2.5, 3, 3.5, 4.5, 5.5, 6.5, 8, 9.5, 11);
    array [7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 5, 6, 7.5, 9, 10.5);

    const fin1 = array[i][summary];

    console.log(fin1);

    document.querySelector('#result').innerHTML = fin1;

    if (fin1 == 0) {
        document.querySelector('#result').innerHTML = "X"
    }
}

calc(); 

// https://codepen.io/esedic/pen/XgJNQv