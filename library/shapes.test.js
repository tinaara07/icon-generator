//destructuring shapes
const { Triangle, Circle, Square, Ellipse } = require('./shapes');
//test the shapes
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

// test the color
test('check the color', ()=> {
    const triangle = new Triangle('red',10 , 5);
    expect(triangle.getColor()).toBe('red');
})
test('check the color', ()=> {
    const circle = new Circle('blue', 5);
    expect(circle.getColor()).toBe('blue');
})

test('check the color', ()=> {
    const square = new Square('green', 4);
    expect(square.getColor()).toBe('green');
})
test('check the color', ()=> {
    const ellipse = new Ellipse('yellow', 7, 5);
    expect(ellipse.getColor()).toBe('yellow');
})
//test render function
test ('check the render method', ()=>{
const triangle = new Triangle("red", 10, 5);
expect(triangle.render()).toEqual('<polygon points="150,20 250,200 50,200" fill="red" stroke="black" stroke-width="3"/>');
})
test ('check the render method', ()=>{
    const circle = new Circle("blue", 5);
    expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" stroke="black" stroke-width="3"/>`);
    })
test ('check the render method', ()=>{
const square = new Square("green",4);
expect(square.render()).toEqual(`<rect x="70" y="20" width="160" height="160" fill="green" stroke="black" stroke-width="3" />`);
})
test ('check the render method', ()=>{
    const ellipse = new Ellipse("yellow", 7, 5);
    expect(ellipse.render()).toEqual(`<ellipse cx="150" cy="100" rx="80" ry="40" fill="yellow" stroke="black" stroke-width="3"/>`);
    })    