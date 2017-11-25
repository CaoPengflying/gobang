var game = {
    chesses:[],
    turn:0,//0代表没有下，1代表黑色，-1代表白色
    //初始化整个棋盘，将每个位置都默认为0，方便后面的游戏判断，如果为1就是黑色-1就是白色
    init:function () {
        for(var i=0; i<grid.row; i++){
            var chess = [];
            for(var j=0; j<grid.cls; j++){
                chess.push(this.turn);
            }
            this.chesses.push(chess)
        }
        this.turn = 1;
    },

    //判断游戏的输赢
    //分别水平1 竖直方向0 左斜2 右斜3方向是否超过5个连子

    judge:function(pos,turn){
        if(this.expand(pos,0,turn)){
            return true;
        }else if(this.expand(pos,1,turn)){
            return true;
        }else if(this.expand(pos,2,turn)){
            return true;
        }else if(this.expand(pos,3,turn)){
            return true;
        }
        return false;
    },
    expand:function (pos, direction,turn) {
        var row = pos.row;
        var cls = pos.cls;
        var deltaRow = 0;
        var deltaCls = 0;
        var n = 1;
        switch (direction){
            case 0:
                deltaRow = 1;
                break;
            case 1:
                deltaCls = 1;
                break;
            case 2:
                deltaCls = 1;
                deltaRow = 1;
                break;
            case 3:
                deltaCls = 1;
                deltaRow = -1;
                break;
        }
        while (n<5){
            row += deltaRow;
            cls += deltaCls;
            if(row>grid.row || row<0 || cls>grid.cls || cls<0){
                break;
            }
            if(game.chesses[row][cls] != turn){
                break;
            }
            n++;
        }
        cls = pos.cls;
        row = pos.row;
        while (n<5){
            row -= deltaRow;
            cls -= deltaCls;
            if(row>grid.row || row<0 || cls>grid.cls || cls<0){
                break;
            }
            if(game.chesses[row][cls] != turn){
                break;
            }
            n++;
        }
        return n<5?false:true;
    }
};