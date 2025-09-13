function Rectangle(width,length){
    this.width=width
    this.length=length

}
Rectangle.prototype.getArea=function(){
    return this.width * this.length
}
Rectangle.isSquare=function(recInstance){
    return recInstance.width === recInstance.height;
}

const rec=new Rectangle(5,6)
console.log(rec.getArea())
console.log(Rectangle.isSquare(rec))