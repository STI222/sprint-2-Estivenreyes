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

            circle(posX + calculatePosition(comparar(Mejia, Joseph)), posY + 100, radius);
            text("Joseph", posX + calculatePosition(comparar(Mejia, Joseph)), posY + 100 + textDistance);

            circle(posX + calculatePosition(comparar(Mejia, Jhonathan)), posY + 300, radius);
            text("Jhonathan", posX + calculatePosition(comparar(Mejia, Jhonathan)), posY + 300 + textDistance);

            circle(posX + calculatePosition(comparar(Mejia, Jolyne)), posY + 500, radius);
            text("Jolyne", posX + calculatePosition(comparar(Mejia, Jolyne)), posY + 500 + textDistance);
            color(0);

            break;

        case "Joseph":
            circle(posX, posY, radius);
            text(e, posX, posY + textDistance);

            circle(posX + calculatePosition(comparar(Joseph, Mejia)), posY + 100, radius);
            text("Mejia", posX + calculatePosition(comparar(Joseph, Mejia)), posY + 100 + textDistance);

            circle(posX + calculatePosition(comparar(Joseph, Jhonathan)), posY + 300, radius);
            text("Jhonathan", posX + calculatePosition(comparar(Joseph, Jhonathan)), posY + 300 + textDistance);

            circle(posX + calculatePosition(comparar(Joseph, Jolyne)), posY + 500, radius);
            text("Jolyne", posX + calculatePosition(comparar(Joseph, Jolyne)), posY + 500 + textDistance);
            color(0);

            break;

        case "Jhonathan":
            circle(posX, posY, radius);
            text(e, posX, posY + textDistance);

            circle(posX + calculatePosition(comparar(Jhonathan, Mejia)), posY + 100, radius);
            text("Mejia", posX + calculatePosition(comparar(Jhonathan, Mejia)), posY + 100 + textDistance);

            circle(posX + calculatePosition(comparar(Jhonathan, Joseph)), posY + 300, radius);
            text("Joseph", posX + calculatePosition(comparar(Jhonathan, Joseph)), posY + 300 + textDistance);

            circle(posX + calculatePosition(comparar(Jhonathan, Jolyne)), posY + 500, radius);
            text("Jolyne", posX + calculatePosition(comparar(Jhonathan, Jolyne)), posY + 500 + textDistance);
            color(0);

            break;

        case "Jolyne":
            circle(posX, posY, radius);
            text(e, posX, posY + textDistance);

            circle(posX + calculatePosition(comparar(Jolyne, Mejia)), posY + 100, radius);
            text("Mejia", posX + calculatePosition(comparar(Jolyne, Mejia)), posY + 100 + textDistance);

            circle(posX + calculatePosition(comparar(Jolyne, Joseph)), posY + 300, radius);
            text("Joseph", posX + calculatePosition(comparar(Jolyne, Joseph)), posY + 300 + textDistance);

            circle(posX + calculatePosition(comparar(Jolyne, Jhonathan)), posY + 500, radius);
            text("Jhonathan", posX + calculatePosition(comparar(Jolyne, Jhonathan)), posY + 500 + textDistance);
            color(0);

            break;
    }
}

function comparar(z, y) {
    ab = int(z[1] * y[1] + z[2] * y[2] + z[3] * y[3] + z[4] * y[4]);
    af = int(sqrt(z[1] ** 2 + z[2] ** 2 + z[3] ** 2 + z[4] ** 2));
    bf = int(sqrt(y[1] ** 2 + y[2] ** 2 + y[3] ** 2 + y[4] ** 2));

    zi = ab / (af * bf);
    return zi;
}

function myChoiceEvent() {
    let item = choice.value();
    e = item;
}

function calculatePosition(zi) {
    console.log(windowWidth * zi);
    return windowWidth - (windowWidth - 100) * zi;
}
