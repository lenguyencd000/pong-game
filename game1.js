const can = document.getElementById("canvas");
const pen = can.getContext("2d");
can.height = 400;
can.width = 600;
pen.fillStyle = "cyan";
pen.fillRect(0,0,can.width,can.height);
can.style.position = "absolute";
can.style.top = "20px";
can.style.zIndex = "2";