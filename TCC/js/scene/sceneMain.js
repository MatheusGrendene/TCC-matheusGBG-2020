class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload(){}
    create()
    {

        
        //define objetos

        //faz a grid para alinhamento
        var gridConfig={lins:20,cols:25,scene:this};
        var alignGrid=new AlignGrid(gridConfig);
        //fim grid de alinhamento

        this.centerX=game.config.width/2;
        //
        //
        //

        //set background
        this.background=this.add.image(0,0,'sea');
        Align.scaleToGameW(this.background,4)
        this.background.setInteractive();
        this.background.on('pointerdown',this.backgroundClicked,this);

        //alignGrid.showNumbers();

        //
        //
        //
        
        //coisas que provavelmente irão para uma classe
        this.submarine=this.add.image(this.centerX,game.config.height,'sub');
        this.makeEnemy();
        //fim coisas que provavelmente irão para uma classe :))

        //faz a scorebox
        this.score=new ScoreBox({scene:this});
        this.score.x=game.config.width-100;
        this.score.y= 10;
        //fim scorebox

        //this.submarine.angle=90   
        Align.scaleToGameW(this.submarine,.1)
    }
    backgroundClicked()
    {
        var angleX=Number(prompt("Digite o angulo de lançamento do torpedo (para ir para a esquerda utilize '-'):"));
        console.log(angleX);
        if(angleX<-45||angleX>45){
            alert("Angulo invalido para lançamento.")
        }
        else{
            alert("teste")
            var directionObj = this.getDirFromAngle(angleX-90);
            this.makeTrop(directionObj);
        }
    }
    //could go into a class//
    makeEnemy()
    {
        this.enemy=this.physics.add.sprite(this.game.config.width,50,'enemy');
        Align.scaleToGameW(this.enemy,.1);
        this.enemy.setVelocity(-50,0);
    }
    makeTrop(directionObj)
    {
        this.torp=this.physics.add.sprite(this.submarine.x,this.submarine.y,'torp')
        Align.scaleToGameW(this.torp,.01);
        
        this.torp.body.setVelocity(directionObj.tx*100,directionObj.ty*100);
    }
    //could go into a class//

    getDirFromAngle(angle)
    {
        var rads=angle*Math.PI/180;
        var dx = Math.cos(rads);
        var dy = Math.sin(rads);
        return {dx,dy}
    }
    update() {
        //constant running loop
        if(this.enemy.x<0)
        {
            this.enemy.destroy();
            this.makeEnemy();
        }
        /*if(Collision.checkCollide(this.torp,this.enemy)==true)
        {
            this.torp.destroy();
            this.enemy.destroy();
            //this.scene.time.addEvent({delay: 2000, callback:null, callbackScope:this.scene, loop:false});
        }*/
    }
}