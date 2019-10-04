function calc() {
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const level = parseInt(document.querySelector("#level").value);

    const sum1 = height + level;
    const sum2 = weight + level;

    const i = parseInt(document.querySelector("#height").value);

    const boot1 = [0.75, 1, 1.5, 2, 2.5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
    const boot2 = [0.75, 0.75, 1, 1.5, 2, 2.5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
    const boot3 = [0.75, 0.75, 1.25, 1.5, 2, 2.5, 3, 3.5, 4.5, 5.5, 6.5, 7.5, 0, 0, 0, 0];
    const boot4 = [0, 0.75, 1, 1.5, 1.75, 2.25, 2.75, 3, 4, 5, 6, 7, 8.5, 10, 11.5, 0];
    const boot5 = [0, 0, 0, 1.25, 1.5, 2, 2.5, 3, 3.5, 4.5, 5.5, 6.5, 8, 9.5, 11, 0];
    const boot6 = [0, 0, 0, 0, 1.5, 1.75, 2.25, 2.75, 3.5, 4, 5, 6, 7, 8.5, 10, 12];
    const boot7 = [0, 0, 0, 0, 0, 1,75, 2, 2.5, 3, 3.5, 4.5, 5.5, 6.5, 8, 9.5, 11];
    const boot8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 5, 6, 7.5, 9, 10.5];
    const booti = [boot1, boot2, boot3, boot4, boot5, boot6, boot7, boot8];

    const bootf = booti[i];
    console.log(bootf);

    const math = Math.max(sum1, sum2);

    const fin = bootf[math];

    console.log(fin);
}

calc(); 