var chess = {
    //添加棋子，如果当前棋子的位置没有棋子，那么就为当前的位置设为该用户的棋子。黑棋或者白棋
    addChess:function (pos,turn) {
        if(game.chesses[pos.row][pos.cls] == 0){
            game.chesses[pos.row][pos.cls] = turn;

            return true;
        }else{
            return false;
        }
    },
    //画一颗新的棋子
    draw:function (pos, turn) {
        var color = turn==1?"white":"black";
        var x = pos.cls * grid.size + grid.margin;
        var y = pos.row * grid.size + grid.margin;
        context.beginPath();
        context.arc(x,y,8,0,2*Math.PI);
        context.fillStyle = color;
        context.fill();
        context.stroke();
    },
    convert:function (x, y) {
        var pos = {};
        var row = Math.floor((y-grid.margin)/grid.size) ;
        var cls = Math.floor((x-grid.margin)/grid.size);
        pos.row = row;
        pos.cls = cls;
        return pos;
    }
};