function circle(radius)
{
    this.radius = radius;

    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };

    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));