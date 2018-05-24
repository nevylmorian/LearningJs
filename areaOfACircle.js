class Circle{
	constructor(radius){
		this.radius=radius;
	}
calcCircumfrence(){
	return 2*3.14*this.radius;
}
}
const circle = new Circle(16);
console.log(circle.calcCircumfrence());


// FIND DIAMETER
class Circle{
	constructor(diameter){
		this.diameter=diameter;
	}
calcarea(){
	return 3.14*(this.diameter)
}
}
const circle = new Circle(16);
console.log(circle.calcarea());


// FIND RADIUS
class Circle{
	constructor(radius){
		this.radius=radius;
	}
calcarea(){
	return 3.14*(this.radius*this.radius)
}
}
const circle = new Circle(32, 16);
console.log(circle.calcarea());
