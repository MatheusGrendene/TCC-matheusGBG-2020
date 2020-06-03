class SoundButtons extends Phaser.GameObjects.Container
{
    constructor(config)
    {
        super(config.scene);
        this.scene=config.scene;

        this.musicButton=new ToggleButton({scene:this.scene,backKey:'toggleBack',onIcon:'musicOn',offIcon:'musicOff',event:G.TOGGLE_MUSIC})
        this.sfxButton=new ToggleButton({scene:this.scene,backKey:'toggleBack',onIcon:'sfxOn',offIcon:'sfxOff',event:G.TOGGLE_SOUND,x:240,y:450})

        //this.add(this.musicButton);
        //this.add(this.sfxButton);

        this.musicButton.y=this.musicButton.height;
        this.musicButton.x=this.musicButton.width;

        this.sfxButton.x=game.config.width - this.sfxButton.width;
        this.sfxButton.y=this.musicButton.y;

        if(model.musicOn==false)
        {
            this.musicButton.toggle();
        }
        if(model.soundOn==false)
        {
            this.sfxButton.toggle();
        }
    }
}