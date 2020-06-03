class AlignGrid
{
    constructor(config)
    {
        this.config=config;
        if (!config.scene)
        {
            console.log("missing scene");
            return;
        }
        if (!config.lins)
        {
            config.lins=5;
        }
        if (!config.cols)
        {
            config.cols=5;
        }
        if (!config.height)
        {
            config.height=game.config.height;
        }
        if (!config.width)
        {
            config.width=game.config.width;
        }

        this.scene=config.scene;

        //largura celula
        this.cw=config.width/config.cols;
        //altura celula
        this.ch=config.height/config.lins;
    }
    show()
    {
        this.graphics=this.scene.add.graphics();
        this.graphics.lineStyle(2,0x2F4F4F);

        //colunas
        for(var i=0;i< this.config.width;i+=this.cw)
        {
            this.graphics.moveTo(i,0);
            this.graphics.lineTo(i,this.config.height);
        }
        //linhas
        for(var i=0;i< this.config.height;i+=this.ch)
        {
            this.graphics.moveTo(0,i);
            this.graphics.lineTo(this.config.width,i);
        }
        this.graphics.strokePath();
    }
    placeAt(xx,yy,obj)
    {
        //calc possição baseado na largura da celula e altura de celula
        var x2= this.cw*xx+this.cw/2;
        var y2= this.ch*yy+this.ch/2;

        obj.x=x2;
        obj.y=y2;
    }
    placeAtIndex(index,obj)
    {
        var yy=Math.floor(index/this.config.cols);
        var xx=index-(yy*this.config.cols);

        this.placeAt(xx,yy,obj);
    }
    showNumbers()
    {
        this.show();
        var count=0;
        for (var i=0;i<this.config.lins;i++)
        {
            for(var j=0;j<this.config.cols;j++)
            {
                var numText=this.scene.add.text(0,0,count,{color:'#fff',fontSize:10});
                numText.setOrigin(1,1.5);
                this.placeAtIndex(count,numText);

                count++;
            }
        }
    }
}