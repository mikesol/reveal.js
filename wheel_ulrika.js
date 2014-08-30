//constants
var Wx2_MAX_ANGULAR_VELOCITY = 360 * 5;
var Wx2_FONT_SIZE = 32;
var Wx2_WHEEL_RADIUS = 310;
var Wx2_ANGULAR_FRICTION = 0.2;
var Wx2_anim;
var Wx2_swedish = [
'Alice',
'Elsa',
'Julia',
'Ella',
'Ebba',
'Emma',
'Linnea',
'Molly',
'Alva',
'Ulrika', ///////
'Wilma',
'Agnes',
'Astrid',
'Nellie',
'Isabelle',
'Olivia',
'Alicia',
'Ellen',
'Lilly',
'Stella',
'Freja'
];
var Wx2_NUM_WEDGES = Wx2_swedish.length;

// globals
var Wx2_angularVelocity = 360;
var Wx2_lastRotation = 0;
var Wx2_controlled = false;
var Wx2_target, Wx2_activeWedge, Wx2_stage, Wx2_layer, Wx2_wheel, 
    Wx2_pointer, Wx2_pointerTween;

var Wx2_brake_factor = 1000;
var Wx2_MIN_VEL = 2;
var Wx2_STOP = 9;
var Wx2_BARRIER = 50;
// var Wx2_startRotation, Wx2_startX, Wx2_startY, ;
$(function(){
  function Wx2_purifyColor(color) {
    var randIndex = Math.round(Math.random() * 3);
    color[randIndex] = 0;
    return color;
  }
  function Wx2_getRandomColor() {
    var r = 100 + Math.round(Math.random() * 55);
    var g = 100 + Math.round(Math.random() * 55);
    var b = 100 + Math.round(Math.random() * 55);
    var color = [r, g, b];
    color = Wx2_purifyColor(color);
    color = Wx2_purifyColor(color);

    return color;
  }
  function Wx2_addWedge(n) {
    var s = Wx2_getRandomColor();
    var reward = Wx2_swedish[n].split('').join('\n');
    var r = s[0];
    var g = s[1];
    var b = s[2];
    var angle = 360 / Wx2_NUM_WEDGES;

    var endColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    r += 100;
    g += 100;
    b += 100;

    var startColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    var wedge = new Kinetic.Group({
      rotation: n * 360 / Wx2_NUM_WEDGES,
      //id : 'wedge'+n
    });

    var wedgeBackground = new Kinetic.Wedge({
      radius: Wx2_WHEEL_RADIUS,
      angle: angle,
      fillRadialGradientStartRadius: 0,
      fillRadialGradientEndRadius: Wx2_WHEEL_RADIUS,
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
      fontSize: Wx2_FONT_SIZE,
      fill: 'white',
      align: 'center',
      stroke: 'yellow',
      strokeWidth: 1,
      listening: false

    });
    
    text.offsetX(text.width()/2);
    text.offsetY(Wx2_WHEEL_RADIUS - 15);
    
    wedge.add(text);

    Wx2_wheel.add(wedge);
  }
  
  function Wx2_wrapIndex(i, i_max) {
     return ((i % i_max) + i_max) % i_max;
     }
  
  function Wx2_animate(frame) {
    // Wx2_wheel
    /*
    if under 60 and not on Wx2_target,
      keep velocity the same
    if under 60 and on Wx2_target
      make dampen factor 10000
    */
    if (Wx2_activeWedge) {
    if ((Wx2_angularVelocity < Wx2_BARRIER) & (Wx2_activeWedge.attrs.id == ('wedge'+Wx2_STOP))) {
      Wx2_ANGULAR_FRICTION = 0.00;
      //Wx2_brake_factor = 100;
    }}
    var Wx2_angularVelocityChange = Wx2_angularVelocity * frame.timeDiff * (1 - Wx2_ANGULAR_FRICTION) / Wx2_brake_factor;
    if (Wx2_activeWedge) {
    if ((Wx2_angularVelocity < Wx2_BARRIER) & (Wx2_activeWedge.attrs.id != ('wedge'+Wx2_STOP))) {
      var base_id = parseInt(Wx2_activeWedge.attrs.id.substr(5));
      Wx2_angularVelocity = ((Wx2_BARRIER - Wx2_MIN_VEL) * (Wx2_wrapIndex(base_id - Wx2_STOP,
                Wx2_NUM_WEDGES) * 1.0 / Wx2_NUM_WEDGES)) + Wx2_MIN_VEL;
      //USE ID TO DETERMINE angularVelocty = 50 +
    } else {
      Wx2_angularVelocity -= Wx2_angularVelocityChange;
    }}
    if (Wx2_angularVelocity < 0) {
      Wx2_angularVelocity = 0;
    }

    if(Wx2_controlled) {
      Wx2_angularVelocity = ((Wx2_wheel.getRotation() - Wx2_lastRotation) * Wx2_brake_factor / frame.timeDiff);
    }
    else {
      Wx2_wheel.rotate(frame.timeDiff * Wx2_angularVelocity / Wx2_brake_factor);
    }
    Wx2_lastRotation = Wx2_wheel.getRotation();
    
    // Wx2_pointer
    var intersectedWedge = Wx2_layer.getIntersection({x: Wx2_stage.width()/2, y: 50});
    
    if (intersectedWedge && (!Wx2_activeWedge || Wx2_activeWedge.attrs.id !== intersectedWedge.attrs.id)) {
      Wx2_pointerTween.reset();
      Wx2_pointerTween.play();
      Wx2_activeWedge = intersectedWedge; 
      console.log(Wx2_activeWedge.attrs.id, Wx2_angularVelocity);
    }
  }
  function Wx2_init() {
    Wx2_stage = new Kinetic.Stage({
      container: 'Wx2',
      width: 1000,
      height: 1000
    });
    Wx2_layer = new Kinetic.Layer();
    Wx2_wheel = new Kinetic.Group({
      x: Wx2_stage.getWidth() / 2,
      y: Wx2_WHEEL_RADIUS + 20
    });

    for(var n = 0; n < Wx2_NUM_WEDGES; n++) {
      Wx2_addWedge(n);
    }
    Wx2_pointer = new Kinetic.Wedge({
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
      x: Wx2_stage.getWidth() / 2,
      y: 20,
      rotation: -105,
      shadowColor: 'black',
      shadowOffset: {x:3,y:3},
      shadowBlur: 2,
      shadowOpacity: 0.5
    });

    // add components to the Wx2_stage
    Wx2_layer.add(Wx2_wheel);
    Wx2_layer.add(Wx2_pointer);
    Wx2_stage.add(Wx2_layer);
    
    Wx2_pointerTween = new Kinetic.Tween({
      node: Wx2_pointer,
      duration: 0.1,
      easing: Kinetic.Easings.EaseInOut,
      y: 30
    });
    
    Wx2_pointerTween.finish();
    
    var radiusPlus2 = Wx2_WHEEL_RADIUS + 2;
    
    Wx2_wheel.cache({
      x: -1* radiusPlus2,
      y: -1* radiusPlus2,
      width: radiusPlus2 * 2,
      height: radiusPlus2 * 2
    }).offset({
      x: radiusPlus2,
      y: radiusPlus2
    });
    
    Wx2_layer.draw();

    Wx2_anim = new Kinetic.Animation(Wx2_animate, Wx2_layer);
    
    //document.getElementById('debug').appendChild(Wx2_layer.hitCanvas._canvas);

    // wait one second and then spin the Wx2_wheel
    //setTimeout(function() {
    //  Wx2_anim.start();
    //}, 1000);
  }  
  Wx2_init();
})
function Wx2_start(){Wx2_anim.start();};