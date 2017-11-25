var grid = {
  row:0,//棋盘的行数
  cls:0,//棋盘的列数
  size:0,//方块格子的大小
    margin:0,//棋盘距离边界的距离
  init:function () {
      this.size = 20;
      this.row = 20;
      this.cls = 20;
      this.margin = 20;
  },
  draw:function () {
        for(var i=0; i<this.row; i++){
            context.beginPath();
            context.strokeStyle = "yellow";
            context.moveTo(this.margin,i*grid.size+this.margin);
            context.lineTo((this.cls-1)*grid.size+this.margin,i*grid.size+this.margin);
            context.stroke();
            context.moveTo(i*grid.size+this.margin,this.margin);
            context.lineTo(i*grid.size+this.margin,(this.row-1)*grid.size+this.margin);
            context.stroke();
        }
  }
};