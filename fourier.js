// Initializing canvas object
can = document.getElementById('can');
can1 = document.getElementById('can1');
cx = can.getContext('2d');
cx1 = can1.getContext('2d');

// Setting width and height of canvas
var w = can.width = can1.width = document.documentElement.clientWidth;
var h = can.height = can1.height = document.documentElement.clientHeight;

// User defined variables that needs to be tuned
x0 = w / 2;
y0 = h / 2;
r = [100 * Math.random(), 100 * Math.random()];
p = [Math.random() * Math.PI, Math.random() * Math.PI];
f = [2 * Math.random(), 2 * Math.random()]

// Animation parameter
t = 0;

// Start of animation
setInterval(() => {
    x = x0;
    y = y0;
    can.width = can.width
    for (i = 0; i < r.length; i++) {
        cx.beginPath();
        cx.arc(x, y, Math.abs(r[i]), 0, 2 * Math.PI);
        cx.moveTo(x, y);
        x = x + r[i] * Math.cos(t * 2 * Math.PI * f[i] + p[i]);
        y = y + r[i] * Math.sin(t * 2 * Math.PI * f[i] + p[i]);
        cx.lineTo(x, y);
        cx.stroke();
    }
    cx1.beginPath();
    cx1.strokeStyle = 'red';
    cx1.arc(x, y, 1, 0, 2 * Math.PI);
    cx1.stroke()

    t += 0.001;
    if (t == 1) {
        t = 0;
    }
}, 1);