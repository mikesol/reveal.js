//constants
var Wx0_MAX_ANGULAR_VELOCITY = 360 * 5;
var Wx0_NUM_WEDGES = 25;
var Wx0_WHEEL_RADIUS = 310;
var Wx0_FONT_SIZE = 40;
var Wx0_ANGULAR_FRICTION = 0.2;
var Wx0_anim;

// globals
var Wx0_angularVelocity = 360;
var Wx0_lastRotation = 0;
var Wx0_controlled = false;
var Wx0_target, Wx0_activeWedge, Wx0_stage, Wx0_layer, Wx0_wheel, 
    Wx0_pointer, Wx0_pointerTween;

var Wx0_brake_factor = 1000;
var Wx0_MIN_VEL = 2;
var Wx0_STOP = 12;
var Wx0_BARRIER = 50;
// var Wx0_startRotat

$(function(){
  function Wx0_purifyColor(color) {
    var randIndex = Math.round(Math.random() * 3);
    color[randIndex] = 0;
    return color;
  }
  function Wx0_getRandomColor() {
    var r = 100 + Math.round(Math.random() * 55);
    var g = 100 + Math.round(Math.random() * 55);
    var b = 100 + Math.round(Math.random() * 55);
    var color = [r, g, b];
    color = Wx0_purifyColor(color);
    color = Wx0_purifyColor(color);

    return color;
  }
  function Wx0_addWedge(n) {
    var s = Wx0_getRandomColor();
    var reward = 'M\na\ni\nj\na';//n;//getRandomReward();
    var r = s[0];
    var g = s[1];
    var b = s[2];
    var angle = 360 / Wx0_NUM_WEDGES;

    var endColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    r += 100;
    g += 100;
    b += 100;

    var startColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    var wedge = new Kinetic.Group({
      rotation: n * 360 / Wx0_NUM_WEDGES,
      //id : 'wedge'+n
    });

    var wedgeBackground = new Kinetic.Wedge({
      radius: Wx0_WHEEL_RADIUS,
      angle: angle,
      fillRadialGradientStartRadius: 0,
      fillRadialGradientEndRadius: Wx0_WHEEL_RADIUS,
      fillRadialGradientColorStops: [0, startColor, 1, endColor],
      fill: '#64e9f8',
      fillPriority: 'radial-gradient',
      stroke: '#ccc',
      strokeWidth: 2,
      rotation: (90 + angle/2) * -1,
      id : 'wedge'+n
    });

    wedge.add(wedgeBackground);

    var text = new Kinetic.Text({
      text: reward,
      fontFamily: 'Calibri',
      fontSize: Wx0_FONT_SIZE,
      fill: 'white',
      align: 'center',
      stroke: 'yellow',
      strokeWidth: 1,
      listening: false

    });
    
    text.offsetX(text.width()/2);
    text.offsetY(Wx0_WHEEL_RADIUS - 15);
    
    wedge.add(text);

    Wx0_wheel.add(wedge);
  }
  
  function Wx0_wrapIndex(i, i_max) {
     return ((i % i_max) + i_max) % i_max;
     }
  
  function Wx0_animate(frame) {
    // Wx0_wheel
    /*
    if under 60 and not on Wx0_target,
      keep velocity the same
    if under 60 and on Wx0_target
      make dampen factor 10000
    */
    if (Wx0_activeWedge) {
    if ((Wx0_angularVelocity < Wx0_BARRIER) & (Wx0_activeWedge.attrs.id == ('wedge'+Wx0_STOP))) {
      Wx0_ANGULAR_FRICTION = 0.00;
      //Wx0_brake_factor = 100;
    }}
    var Wx0_angularVelocityChange = Wx0_angularVelocity * frame.timeDiff * (1 - Wx0_ANGULAR_FRICTION) / Wx0_brake_factor;
    if (Wx0_activeWedge) {
    if ((Wx0_angularVelocity < Wx0_BARRIER) & (Wx0_activeWedge.attrs.id != ('wedge'+Wx0_STOP))) {
      var base_id = parseInt(Wx0_activeWedge.attrs.id.substr(5));
      Wx0_angularVelocity = ((Wx0_BARRIER - Wx0_MIN_VEL) * (Wx0_wrapIndex(base_id - Wx0_STOP,
                Wx0_NUM_WEDGES) * 1.0 / Wx0_NUM_WEDGES)) + Wx0_MIN_VEL;
      //USE ID TO DETERMINE angularVelocty = 50 +
    } else {
      Wx0_angularVelocity -= Wx0_angularVelocityChange;
    }}
    if (Wx0_angularVelocity < 0) {
      Wx0_angularVelocity = 0;
    }

    if(Wx0_controlled) {
      Wx0_angularVelocity = ((Wx0_wheel.getRotation() - Wx0_lastRotation) * Wx0_brake_factor / frame.timeDiff);
    }
    else {
      Wx0_wheel.rotate(frame.timeDiff * Wx0_angularVelocity / Wx0_brake_factor);
    }
    Wx0_lastRotation = Wx0_wheel.getRotation();
    
    // Wx0_pointer
    var intersectedWedge = Wx0_layer.getIntersection({x: Wx0_stage.width()/2, y: 50});
    
    if (intersectedWedge && (!Wx0_activeWedge || Wx0_activeWedge.attrs.id !== intersectedWedge.attrs.id)) {
      Wx0_pointerTween.reset();
      Wx0_pointerTween.play();
      Wx0_activeWedge = intersectedWedge; 
      console.log(Wx0_activeWedge.attrs.id, Wx0_angularVelocity);
    }
  }
  function Wx0_init() {
    Wx0_stage = new Kinetic.Stage({
      container: 'Wx0',
      width: 1000,
      height: 1000
    });
    Wx0_layer = new Kinetic.Layer();
    Wx0_wheel = new Kinetic.Group({
      x: Wx0_stage.getWidth() / 2,
      y: Wx0_WHEEL_RADIUS + 20
    });

    for(var n = 0; n < Wx0_NUM_WEDGES; n++) {
      Wx0_addWedge(n);
    }
    Wx0_pointer = new Kinetic.Wedge({
      fillRadialGradientStartPoint: 0,
      fillRadialGradientStartRadius: 0,
      fillRadialGradientEndPoint: 0,
      fillRadialGradientEndRadius: 30,
      fillRadialGradientColorStops: [0, 'white', 1, 'red'],
      stroke: 'white',
      strokeWidth: 2,
      lineJoin: 'round',
      angle: 30,
      radius: 30,
      x: Wx0_stage.getWidth() / 2,
      y: 20,
      rotation: -105,
      shadowColor: 'black',
      shadowOffset: {x:3,y:3},
      shadowBlur: 2,
      shadowOpacity: 0.5
    });

    // add components to the Wx0_stage
    Wx0_layer.add(Wx0_wheel);
    Wx0_layer.add(Wx0_pointer);
    Wx0_stage.add(Wx0_layer);
    
    Wx0_pointerTween = new Kinetic.Tween({
      node: Wx0_pointer,
      duration: 0.1,
      easing: Kinetic.Easings.EaseInOut,
      y: 30
    });
    
    Wx0_pointerTween.finish();
    
    var radiusPlus2 = Wx0_WHEEL_RADIUS + 2;
    
    Wx0_wheel.cache({
      x: -1* radiusPlus2,
      y: -1* radiusPlus2,
      width: radiusPlus2 * 2,
      height: radiusPlus2 * 2
    }).offset({
      x: radiusPlus2,
      y: radiusPlus2
    });
    
    Wx0_layer.draw();

    Wx0_anim = new Kinetic.Animation(Wx0_animate, Wx0_layer);
    
    //document.getElementById('debug').appendChild(Wx0_layer.hitCanvas._canvas);

    // wait one second and then spin the Wx0_wheel
    //setTimeout(function() {
    //  Wx0_anim.start();
    //}, 1000);
  }  
  Wx0_init();
})
function Wx0_start(){Wx0_anim.start();};