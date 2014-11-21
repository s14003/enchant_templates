enchant();
var gs = {
  height:320
  ,width:320
  ,fps:30
};

var game;

var Timer = Class.create(Label, {
  initialize:function(timelimit) {
    Label.call(this);
    this.text = "Time:";
    this.height = this.size = 18;
    this.font = this.size = "px Bold serif";
    this.color = "white";
    this.backgroundColor = "black";
    this.timer = 0;
    this.timelimit = timelimit;
    game.currentScene.addChild(this);
  },
    countUp:function() {
      if(this.age % game.fps === 0) {
        this.timer++;
        }
        
      //this.timer = this.age / game.fps;
      
    },
    
    display:function() {
      this.text = "Time:" + this.timer;
    },
    update:function() {
      this.countUp();
      this.display();
    },
    isLimitTime:function() {
      return(this.timer > this.timelimit);
      
    },
    onenterframe:function() {
      if(this.isLimitTime()) {
        
        game.end();
      }
      this.update();
    }
});

window.onload = function() {
  game = new Core ();

  game.onload = function() {
  
    new Timer(10);
  };

  game.start();

};
