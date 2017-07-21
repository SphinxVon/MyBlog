/**
 * Created by qin on 2017/7/18.
 */
var h = header.offsetHeight+main.offsetHeight+footer.offsetHeight;
(function(win,el){
    var canvas = document.querySelector(el),
        ctx = canvas.getContext('2d');
    canvas.width = win.innerWidth;
    canvas.height = h;
    var dots = {
        num: 1000, //粒子数
        distance: 50, //粒子相距的距离为20时连线
        array: []//粒子实例对象数组
    };
    var mousePosition = {
        x: canvas.width/2,
        y: canvas.height/2
    };
    function Dot(){//粒子类
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();
        this.radius = Math.random()*2;
        this.color = '#fff';//rgba(192,120,35,.2)
    }
    Dot.prototype.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
        ctx.fill();
    }
    function createDots(){
        for (var i = 0; i < dots.num; i++) {
            dots.array.push(new Dot)
        };
        // drawDots();
    }
    function moveDots(){
        for (var i = 0; i < dots.num; i++) {

            if(dots.array[i].x <= 0 || dots.array[i].x >= canvas.width){
                dots.array[i].vx = -dots.array[i].vx;
            }
            if(dots.array[i].y <= 0 || dots.array[i].y >= canvas.height){
                dots.array[i].vy = -dots.array[i].vy;
            }
            dots.array[i].x += dots.array[i].vx;
            dots.array[i].y += dots.array[i].vy;
        };
    }
    function drawDots(){
        for (var i = 0; i < dots.num; i++) {
            dots.array[i].draw()
        };
    }
    function connectDots(){//距离检测，距离小于50并且在鼠标方圆100内绘制线
        for (var i = 0; i < dots.num; i++) {
            for (var j = 1; j < dots.num; j++) {
                if((Math.abs(dots.array[i].x-dots.array[j].x) <= dots.distance) && (Math.abs(dots.array[i].y-dots.array[j].y) <= dots.distance)){

                    if((Math.abs(dots.array[i].x-mousePosition.x) <= 100) && (Math.abs(dots.array[i].y-mousePosition.y) <= 100)){
                        ctx.beginPath();
                        ctx.strokeStyle = dots.array[i].color;
                        ctx.moveTo(dots.array[i].x,dots.array[i].y);
                        ctx.lineTo(dots.array[j].x,dots.array[j].y);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            };
        };
    }
    function animateDots(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        moveDots();
        connectDots();
        drawDots();
        requestAnimationFrame(animateDots);
    }

    canvas.addEventListener('mousemove',function(e){
        mousePosition.x = e.pageX;
        mousePosition.y = e.pageY;
    })
    canvas.addEventListener('mouseleave',function(e){
        mousePosition.x = canvas.width/2;
        mousePosition.y = canvas.height/2;
    })

    createDots();
    requestAnimationFrame(animateDots);
})(window,'#canvas')
