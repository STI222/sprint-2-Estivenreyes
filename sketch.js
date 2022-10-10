function preload() {
    info = loadTable("../Sprint2.csv", "csv");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    choice = createSelect();
    choice.position(30, 30);
    choice.option("Mejia");
    choice.option("Joseph");
    choice.option("Jhonathan");
    choice.option("Jolyne");
    choice.selected("Mejia");
    choice.changed(myChoiceEvent);

    posX = 100;
    posY = 100;
    radius = 60;
    textDistance = 60;
    textSize(24);
    noStroke();
    ellipseMode(CENTER);

    e = "";
    Mejia = info.getColumn(1);
    Joseph = info.getColumn(2);
    Jhonathan = info.getColumn(3);
    Jolyne = info.getColumn(4);

    textAlign(CENTER);
}

function draw() {
    background(75);
    fill(255);

    switch (e) {
        case "Mejia":
            circle(posX, posY, radius);
            text(e, posX, posY + textDistance);

            circle(posX + comparar(Mejia, Joseph), posY + 100, radius);
            text("Joseph", posX + comparar(Mejia, Joseph), posY + 100 + textDistance);

            circle(posX + comparar(Mejia, Jhonathan), posY + 300, radius);
            text("Jhonathan", posX + comparar(Mejia, Jhonathan), posY + 300 + textDistance);

            circle(posX + comparar(Mejia, Jolyne), posY + 500, radius);
            text("Jolyne", posX + comparar(Mejia, Jolyne), posY + 500 + textDistance);
            color(0);

            break;

        case "Joseph":
            circle(posX, posY, radius);
            text(e, posX, posY + textDistance);

            circle(posX + comparar(Joseph, Mejia), posY + 100, radius);
            text("Mejia", posX + comparar(Joseph, Mejia), posY + 100 + textDistance);

            circle(posX + comparar(Joseph, Jhonathan), posY + 300, radius);
            text("Jhonathan", posX + comparar(Joseph, Jhonathan), posY + 300 + textDistance);

            circle(posX + comparar(Joseph, Jolyne), posY + 500, radius);
            text("Jolyne", posX + comparar(Joseph, Jolyne), posY + 500 + textDistance);
            color(0);

            break;

        case "Jhonathan":
            circle(posX, posY, radius);
            text(e, posX, posY + textDistance);

            circle(posX + comparar(Jhonathan, Mejia), posY + 100, radius);
            text("Mejia", posX + comparar(Jhonathan, Mejia), posY + 100 + textDistance);

            circle(posX + comparar(Jhonathan, Joseph), posY + 300, radius);
            text("Joseph", posX + comparar(Jhonathan, Joseph), posY + 300 + textDistance);

            circle(posX + comparar(Jhonathan, Jolyne), posY + 500, radius);
            text("Jolyne", posX + comparar(Jhonathan, Jolyne), posY + 500 + textDistance);
            color(0);

            break;

        case "Jolyne":
            circle(posX, posY, radius);
            text(e, posX, posY + textDistance);

            circle(posX + comparar(Jolyne, Mejia), posY + 100, radius);
            text("Mejia", posX + comparar(Jolyne, Mejia), posY + 100 + textDistance);

            circle(posX + comparar(Jolyne, Joseph), posY + 300, radius);
            text("Joseph", posX + comparar(Jolyne, Joseph), posY + 300 + textDistance);

            circle(posX + comparar(Jolyne, Jhonathan), posY + 500, radius);
            text("Jhonathan", posX + comparar(Jolyne, Jhonathan), posY + 500 + textDistance);
            color(0);

            break;
    }
}

function comparar(z, y) {
    ab = int(z[1] * y[1] + z[2] * y[2] + z[3] * y[3] + z[4] * y[4]);
    af = int(sqrt(z[1] ** 2 + z[2] ** 2 + z[3] ** 2 + z[4] ** 2));
    bf = int(sqrt(y[1] ** 2 + y[2] ** 2 + y[3] ** 2 + y[4] ** 2));

    zi = (ab / (af * bf)) * 200;
    console.log(zi);
    return zi;
}

function myChoiceEvent() {
    let item = choice.value();
    e = item;
}

// function calculatePosition(zi) {
//     console.log(zi);
//     return (windowWidth - 100) * zi;
// }

//Estiven Reyes

// Parte 2 del ejercicio
// Estiven Reyes y Valentina Arango
