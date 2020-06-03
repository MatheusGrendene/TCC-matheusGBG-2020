class SceneLoad extends Phaser.Scene {
    constructor() {
        super('SceneLoad');
    }
    preload()
    {
        //loading stuff
        this.bar=new Bar({scene:this,x:game.config.width/2,y:game.config.height/2});
        this.progText=this.add.text(game.config.width/2,game.config.height/2,"0%",{color:'#fff',fontSize:game.config.width/20})
        this.progText.setOrigin(0.5,0.5);
        this.load.on('progress',this.onProgress, this);

        //load UI

        this.load.image("button1","images/ui/buttons/2/1.png");
        this.load.image("title","images/title.png");

        /* não necessario
        this.load.image('toggleBack',"images/ui/toggles/1.png");
        this.load.image('sfxOff',"images/ui/icons/sfx_off.png");
        this.load.image('sfxOn',"images/ui/icons/sfx_on.png");
        this.load.image('musicOn',"images/ui/icons/music_on.png");
        this.load.image('musicaOff',"images/ui/icons/music_off.png");
        */

        //Load my game stuff
        this.load.image('sea',"images/background.png");
        this.load.image('sub',"images/ui/buttons/1/6");
        this.load.image('enemy',"images/ui/buttons/2/6");
        this.load.image('torp',"images/ui/toggles/5.png");

    }
    onProgress(value)
    {
        console.log(value);
        this.bar.setPercent(value);
        var pre=Math.floor(value*100);
        this.progText.setText(pre+"%");
    }
    goGameOver()
    {
        this.scene.start('SceneMain');
    }
    create()
    {
        console.log("DEBUG")
        //this.scene.start('SceneMain');
        this.scene.start("SceneTitle");
    }
}
