class SceneTitle extends Phaser.Scene {
    constructor() {
        super('SceneTitle');
    }
    preload() {}
    create() {
        emitter=new Phaser.Events.EventEmitter();
        controller=new Controller(); 
        

        console.log("SceneTitle!");
        this.alignGrid=new AlignGrid({lins:11,cols:11,scene:this});
        //this.alignGrid.showNumbers();

        var title= this.add.image(0,0,'title');
        Align.scaleToGameW(title,.8)
        this.alignGrid.placeAtIndex(38,title);

        var btnStart= new FlatButton({scene:this,key:'button1',text:'start',event:'start_game'})
        this.alignGrid.placeAtIndex(93,btnStart);

        emitter.on('start_game',this.startGame,this);
        
    }
    startGame()
    {
        this.scene.start('SceneMain');
    }
    update() {}
}