class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
    this.score=0;
  } 

  scere(){
    if(this.Visiblity<0 && this.Visiblity>-5){
      this.score++;
    }
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
    text("score :" + this.score, 100, 20);
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     text("score :" + this.score, 100, 20);
     pop();
   }
   
 }
};
