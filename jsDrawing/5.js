function draw() 
{
  var canvas = document.getElementById('canvas');
  if (canvas.getContext)
  {
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(75,75,50,0,Math.PI*2,true);
    context.moveTo(110,75);
    context.arc(75,75,35,0,Math.PI,false); 
    context.moveTo(55,65);
    context.arc(60,65,5,0,Math.PI*2,true); 
    context.arc(90,65,5,0,Math.PI*2,true);
    context.stroke();
  }
}