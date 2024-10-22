class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color
    }
}

class Triangle extends Shape {
    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }
    render(){
        return `<polygon points="150,20 250,200 50,200" fill="${this.color}" stroke="black" stroke-width="3"/>`;
    }  

    area() {
        return (this.base * this.height) / 2;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" stroke="black" stroke-width="3"/>`;
}
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    }

render(){
    return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" stroke="black" stroke-width="3" />`;
}
    area() {
        return this.side * this.side;
    }
    
}

class Ellipse extends Shape {
    constructor(color, radiusx, radiusy){
        super(color);
        this.radiusx = radiusx; 
        this.radiusy = radiusy; 
    }

    render() {
        return `<ellipse cx="150" cy="100" rx="80" ry="$40" fill="${this.color}" stroke="black" stroke-width="3"/>`;
    }    

    area() {
        return Math.PI * this.radiusx * this.radiusy; 
    }
}

module.exports = { Triangle, Circle, Square , Ellipse};