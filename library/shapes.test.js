const { Triangle, Circle, Square, Ellipse } = require('./shapes');

test('Triangle area calculation', () => {
    const triangle = new Triangle('red', 10, 5);
    expect(triangle.area()).toBe(25);
});

test('Circle area calculation', () => {
    const circle = new Circle('blue', 5);
    expect(circle.area()).toBeCloseTo(78.54, 2); 

});

test('Square area calculation', () => {
    const square = new Square('green', 4);
    expect(square.area()).toBe(16);
});

test('Ellipse area calculation', () => {
    const ellipse = new Ellipse('yellow', 7 , 5);
    expect(ellipse.area()).toBeCloseTo(109.96, 2);
});
test('check the color', ()=> {
    const triangle = new Triangle('red',10 , 5);
    expect(triangle.getColor()).toBe('red');
})


test('check the color', ()=> {
    const square = new Square('green', 4);
    expect(square.getColor()).toBe('green');
})
test('check the color', ()=> {
    const ellipse = new Ellipse('yellow', 7);
    expect(ellipse.getColor()).toBe('yellow');
})
test ('check the render method', ()=>{


const triangle = new Triangle();
triangle.getColor("red");
expect(triangle.render()).toEqual('<polygon points="150,20 250,200 50,200" fill="red" stroke="black" stroke-width="3"/>');
})