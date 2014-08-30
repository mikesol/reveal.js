//constants
var Wx1_MAX_ANGULAR_VELOCITY = 360 * 5;
var Wx1_FONT_SIZE = 32;
var Wx1_WHEEL_RADIUS = 310;
var Wx1_ANGULAR_FRICTION = 0.2;
var Wx1_anim;
var Wx1_irish = [
'Peggy',
'Anne',
'Erin',
'Sharon',
'Eila',
'Ambrose',
"Sarah",
"Morna",
'Sinead',
'Shannon', //////
'Caitlin',
'Margaret',
'Sheila',
'Maureen',
'Fiona',
'Bridget',
'Sally'
];
var Wx1_NUM_WEDGES = Wx1_irish.length;

// globals
var Wx1_angularVelocity = 360;
var Wx1_lastRotation = 0;
var Wx1_controlled = false;
var Wx1_target, Wx1_activeWedge, Wx1_stage, Wx1_layer, Wx1_wheel, 
    Wx1_pointer, Wx1_pointerTween;

var Wx1_brake_factor = 1000;
var Wx1_MIN_VEL = 2;
var Wx1_STOP = 9;
var Wx1_BARRIER = 50;
// var Wx1_startRotation, Wx1_startX, Wx1_startY, ;
$(function(){
  function Wx1_purifyColor(color) {
    var randIndex = Math.round(Math.random() * 3);
    color[randIndex] = 0;
    return color;
  }
  function Wx1_getRandomColor() {
    var r = 100 + Math.round(Math.random() * 55);
    var g = 100 + Math.round(Math.random() * 55);
    var b = 100 + Math.round(Math.random() * 55);
    var color = [r, g, b];
    color = Wx1_purifyColor(color);
    color = Wx1_purifyColor(color);

    return color;
  }
  function Wx1_addWedge(n) {
    var s = Wx1_getRandomColor();
    var reward = Wx1_irish[n].split('').join('\n');
    var r = s[0];
    var g = s[1];
    var b = s[2];
    var angle = 360 / Wx1_NUM_WEDGES;

    var endColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    r += 100;
    g += 100;
    b += 100;

    var startColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    var wedge = new Kinetic.Group({
      rotation: n * 360 / Wx1_NUM_WEDGES,
      //id : 'wedge'+n
    });

    var wedgeBackground = new Kinetic.Wedge({
      radius: Wx1_WHEEL_RADIUS,
      angle: angle,
      fillRadialGradientStartRadius: 0,
      fillRadialGradientEndRadius: Wx1_WHEEL_RADIUS,
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
      fontSize: Wx1_FONT_SIZE,
      fill: 'white',
      align: 'center',
      stroke: 'yellow',
      strokeWidth: 1,
      listening: false

    });
    
    text.offsetX(text.width()/2);
    text.offsetY(Wx1_WHEEL_RADIUS - 15);
    
    wedge.add(text);

    Wx1_wheel.add(wedge);
  }
  
  function Wx1_wrapIndex(i, i_max) {
     return ((i % i_max) + i_max) % i_max;
     }
  
  function Wx1_animate(frame) {
    // Wx1_wheel
    /*
    if under 60 and not on Wx1_target,
      keep velocity the same
    if under 60 and on Wx1_target
      make dampen factor 10000
    */
    if (Wx1_activeWedge) {
    if ((Wx1_angularVelocity < Wx1_BARRIER) & (Wx1_activeWedge.attrs.id == ('wedge'+Wx1_STOP))) {
      Wx1_ANGULAR_FRICTION = 0.00;
      //Wx1_brake_factor = 100;
    }}
    var Wx1_angularVelocityChange = Wx1_angularVelocity * frame.timeDiff * (1 - Wx1_ANGULAR_FRICTION) / Wx1_brake_factor;
    if (Wx1_activeWedge) {
    if ((Wx1_angularVelocity < Wx1_BARRIER) & (Wx1_activeWedge.attrs.id != ('wedge'+Wx1_STOP))) {
      var base_id = parseInt(Wx1_activeWedge.attrs.id.substr(5));
      Wx1_angularVelocity = ((Wx1_BARRIER - Wx1_MIN_VEL) * (Wx1_wrapIndex(base_id - Wx1_STOP,
                Wx1_NUM_WEDGES) * 1.0 / Wx1_NUM_WEDGES)) + Wx1_MIN_VEL;
      //USE ID TO DETERMINE angularVelocty = 50 +
    } else {
      Wx1_angularVelocity -= Wx1_angularVelocityChange;
    }}
    if (Wx1_angularVelocity < 0) {
      Wx1_angularVelocity = 0;
    }

    if(Wx1_controlled) {
      Wx1_angularVelocity = ((Wx1_wheel.getRotation() - Wx1_lastRotation) * Wx1_brake_factor / frame.timeDiff);
    }
    else {
      Wx1_wheel.rotate(frame.timeDiff * Wx1_angularVelocity / Wx1_brake_factor);
    }
    Wx1_lastRotation = Wx1_wheel.getRotation();
    
    // Wx1_pointer
    var intersectedWedge = Wx1_layer.getIntersection({x: Wx1_stage.width()/2, y: 50});
    
    if (intersectedWedge && (!Wx1_activeWedge || Wx1_activeWedge.attrs.id !== intersectedWedge.attrs.id)) {
      Wx1_pointerTween.reset();
      Wx1_pointerTween.play();
      Wx1_activeWedge = intersectedWedge; 
      console.log(Wx1_activeWedge.attrs.id, Wx1_angularVelocity);
    }
  }
  function Wx1_init() {
    Wx1_stage = new Kinetic.Stage({
      container: 'Wx1',
      width: 1000,
      height: 1000
    });
    Wx1_layer = new Kinetic.Layer();
    Wx1_wheel = new Kinetic.Group({
      x: Wx1_stage.getWidth() / 2,
      y: Wx1_WHEEL_RADIUS + 20
    });

    for(var n = 0; n < Wx1_NUM_WEDGES; n++) {
      Wx1_addWedge(n);
    }
    Wx1_pointer = new Kinetic.Wedge({
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
      x: Wx1_stage.getWidth() / 2,
      y: 20,
      rotation: -105,
      shadowColor: 'black',
      shadowOffset: {x:3,y:3},
      shadowBlur: 2,
      shadowOpacity: 0.5
    });

    // add components to the Wx1_stage
    Wx1_layer.add(Wx1_wheel);
    Wx1_layer.add(Wx1_pointer);
    Wx1_stage.add(Wx1_layer);
    
    Wx1_pointerTween = new Kinetic.Tween({
      node: Wx1_pointer,
      duration: 0.1,
      easing: Kinetic.Easings.EaseInOut,
      y: 30
    });
    
    Wx1_pointerTween.finish();
    
    var radiusPlus2 = Wx1_WHEEL_RADIUS + 2;
    
    Wx1_wheel.cache({
      x: -1* radiusPlus2,
      y: -1* radiusPlus2,
      width: radiusPlus2 * 2,
      height: radiusPlus2 * 2
    }).offset({
      x: radiusPlus2,
      y: radiusPlus2
    });
    
    Wx1_layer.draw();

    Wx1_anim = new Kinetic.Animation(Wx1_animate, Wx1_layer);
    
    //document.getElementById('debug').appendChild(Wx1_layer.hitCanvas._canvas);

    // wait one second and then spin the Wx1_wheel
    //setTimeout(function() {
    //  Wx1_anim.start();
    //}, 1000);
  }  
  Wx1_init();
})
function Wx1_start(){Wx1_anim.start();};