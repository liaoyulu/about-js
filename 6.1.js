class Vec{
	constructor(x, y){
		this.x=x;
		this.y=y;
	}
	plus(obj){
		obj.x=this.x+obj.x
		obj.y=this.y+obj.y
		return obj
	}
	get length(){
		return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
	}
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)))
console.log(new Vec(3,4).length)


