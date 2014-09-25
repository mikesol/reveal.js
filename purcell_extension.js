function update_loading(n) {
  $('#loading_text').text("[loading "+n+"\%]");
}
function make_purcell_header() {
	    var out = [];
	    out.push({sql:"INSERT INTO dot_padding (id, val)  VALUES (-1,1.0);"});
	    out.push({sql:"INSERT INTO dynamic_padding (id, val)  VALUES (-1,1.5);"});
	    out.push({sql:"INSERT INTO rhythmic_event_to_dot_padding (id, val)  VALUES (-1,1.0);"});
	    out.push({sql:"INSERT INTO rhythmic_event_to_accidental_padding (id, val)  VALUES (-1,0.5);"});
	    out.push({sql:"INSERT INTO time_signature_inter_number_padding (id, val)  VALUES (-1,0.0);"});
	    out.push({sql:"INSERT INTO key_signature_inter_accidental_padding (id, val)  VALUES (-1,0.5);"});
	    out.push({sql:"INSERT INTO name (id, val)  VALUES (0,'time_signature');"});
	    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (0,'Bravura');"});
	    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (0,20);"});
	    out.push({sql:"INSERT INTO time_signature (id, num, den)  VALUES (0,4,4);"});
	    out.push({sql:"INSERT INTO name (id, val)  VALUES (2,'clef');"});
	    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (2,'Bravura');"});
	    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (2,20);"});
	    out.push({sql:"INSERT INTO unicode (id, val)  VALUES (2,'U+E050');"});
	    out.push({sql:"INSERT INTO staff_position (id, val)  VALUES (2,-1.0);"});
	    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (2,4);"});
	    out.push({sql:"INSERT INTO octave (id, val)  VALUES (2,0);"});
	    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (2,NULL,0);"});
	    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (0,2,NULL);"});
	    out.push({sql:"INSERT INTO name (id, val)  VALUES (1,'staff_symbol');"});
	    out.push({sql:"INSERT INTO line_thickness (id, val)  VALUES (1,0.13);"});
	    out.push({sql:"INSERT INTO n_lines (id, val)  VALUES (1,5);"});
	    out.push({sql:"INSERT INTO staff_space (id, val)  VALUES (1,1.0);"});
	    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (2,1);"});
	    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (0,1);"});
	    out.push({sql:"INSERT INTO used_ids (id)  VALUES (2);"});
	    out.push({sql:"INSERT INTO used_ids (id)  VALUES (0);"});
	    out.push({sql:"INSERT INTO used_ids (id)  VALUES (1);"});
	    return out;
}
function make_first_example(out) {
    out.push({sql:"DELETE FROM graphical_next;"});
    out.push({sql:"INSERT INTO name (id, val)  VALUES (3,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (3,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (3,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (3,-2);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (3,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (3,0);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (3,0);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (3);"});
    
    out.push({sql:"INSERT INTO name (id, val)  VALUES (4,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (4,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (4,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (4,-2);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (4,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (4,1);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (4,0);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (4);"});
    
    out.push({sql:"INSERT INTO name (id, val)  VALUES (5,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (5,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (5,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (5,-2);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (5,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (5,2);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (5,0);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (5);"});
    
    out.push({sql:"INSERT INTO name (id, val)  VALUES (6,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (6,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (6,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (6,-2);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (6,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (6,3);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (6,0);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (6);"});

    out.push({sql:"INSERT INTO name (id, val)  VALUES (7,'bar_line');"});
    out.push({sql:"INSERT INTO bar_thickness (id, val)  VALUES (7,0.20);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (7,1);"});

    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (2,NULL,0);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (0,2,3);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (3,0,4);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (4,3,5);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (5,4,6);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (6,5,7);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (7,6,NULL);"});
    return out;
}
function make_complex_example(out) {
    out.push({sql:"DELETE FROM graphical_next;"});
    out.push({sql:"INSERT INTO name (id, val)  VALUES (3,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (3,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (3,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (3,-3);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (3,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (3,1);"});
    out.push({sql:"INSERT INTO accidental (id, val)  VALUES (3,1);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (3,0);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (3);"});
    
    out.push({sql:"INSERT INTO name (id, val)  VALUES (4,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (4,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (4,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (4,-2);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (4,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (4,6);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (4,0);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (4);"});
    
    out.push({sql:"INSERT INTO name (id, val)  VALUES (5,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (5,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (5,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (5,-3);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (5,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (5,5);"});
    out.push({sql:"INSERT INTO accidental (id, val)  VALUES (5,1);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (5,0);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (5);"});
    
    out.push({sql:"INSERT INTO name (id, val)  VALUES (6,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (6,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (6,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (6,-1);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (6,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (6,2);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (6,1);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (6);"});

    out.push({sql:"INSERT INTO name (id, val)  VALUES (7,'bar_line');"});
    out.push({sql:"INSERT INTO bar_thickness (id, val)  VALUES (7,0.20);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (7,1);"});

///8 is beam

    out.push({sql:"INSERT INTO used_ids (id)  VALUES (8);"});

    out.push({sql:"INSERT INTO name (id, val)  VALUES (9,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (9,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (9,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (9,-4);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (9,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (9,6);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (9,0);"});
    out.push({sql:"INSERT INTO beam (id, val)  VALUES (9,8);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (9);"});
    
    out.push({sql:"INSERT INTO name (id, val)  VALUES (10,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (10,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (10,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (10,-4);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (10,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (10,5);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (10,0);"});
    out.push({sql:"INSERT INTO beam (id, val)  VALUES (10,8);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (10);"});
    
    out.push({sql:"INSERT INTO name (id, val)  VALUES (11,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (11,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (11,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (11,-4);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (11,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (11,4);"});
    out.push({sql:"INSERT INTO accidental (id, val)  VALUES (11,1);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (11,0);"});
    out.push({sql:"INSERT INTO beam (id, val)  VALUES (11,8);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (11);"});

    out.push({sql:"INSERT INTO name (id, val)  VALUES (12,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (12,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (12,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (12,-4);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (12,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (12,3);"});
    out.push({sql:"INSERT INTO accidental (id, val)  VALUES (12,1);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (12,0);"});
    out.push({sql:"INSERT INTO beam (id, val)  VALUES (12,8);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (12);"});

    out.push({sql:"INSERT INTO name (id, val)  VALUES (13,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (13,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (13,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (13,-2);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (13,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (13,2);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (13,0);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (13);"});

///14 is beam
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (14);"});

    out.push({sql:"INSERT INTO name (id, val)  VALUES (15,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (15,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (15,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (15,-4);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (15,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (15,6);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (15,0);"});
    out.push({sql:"INSERT INTO beam (id, val)  VALUES (15,14);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (15);"});
    
    out.push({sql:"INSERT INTO name (id, val)  VALUES (16,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (16,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (16,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (16,-4);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (16,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (16,5);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (16,0);"});
    out.push({sql:"INSERT INTO beam (id, val)  VALUES (16,14);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (16);"});
    
    out.push({sql:"INSERT INTO name (id, val)  VALUES (17,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (17,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (17,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (17,-4);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (17,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (17,4);"});
    out.push({sql:"INSERT INTO accidental (id, val)  VALUES (17,0);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (17,0);"});
    out.push({sql:"INSERT INTO beam (id, val)  VALUES (17,14);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (17);"});

    out.push({sql:"INSERT INTO name (id, val)  VALUES (18,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (18,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (18,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (18,-4);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (18,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (18,3);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (18,0);"});
    out.push({sql:"INSERT INTO beam (id, val)  VALUES (18,14);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (18);"});

    out.push({sql:"INSERT INTO name (id, val)  VALUES (19,'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES (19,'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES (19,20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES (19,-2);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (19,1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES (19,2);"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES (19,0);"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (19);"});

    out.push({sql:"INSERT INTO name (id, val)  VALUES (20,'bar_line');"});
    out.push({sql:"INSERT INTO bar_thickness (id, val)  VALUES (20,0.20);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (20,1);"});

    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (2,NULL,0);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (0,2,3);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (3,0,4);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (4,3,5);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (5,4,6);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (6,5,7);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (7,6,9);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (9,7,10);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (10,9,11);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (11,10,12);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (12,11,13);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (13,12,15);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (15,13,16);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (16,15,17);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (17,16,18);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (18,17,19);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (19,18,20);"});
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES (20,19,NULL);"});
    return out;
}

function make_beamed_note(out, n,b,p,o) {
    out.push({sql:"INSERT INTO name (id, val)  VALUES ("+n+",'note');"});
    out.push({sql:"INSERT INTO font_name (id, val)  VALUES ("+n+",'Bravura');"});
    out.push({sql:"INSERT INTO font_size (id, val)  VALUES ("+n+",20);"});
    out.push({sql:"INSERT INTO duration_log (id, val)  VALUES ("+n+",-4);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES ("+n+",1);"});
    out.push({sql:"INSERT INTO pitch (id, val)  VALUES ("+n+","+p+");"});
    out.push({sql:"INSERT INTO octave (id, val)  VALUES ("+n+","+o+");"});
    out.push({sql:"INSERT INTO beam (id, val)  VALUES ("+n+","+b+");"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES ("+n+");"});
    return out
}

function make_graphical_nexts(out, gns) {
  for(var i = 1; i < gns.length - 1; i++) {
    out.push({sql:"INSERT INTO graphical_next (id, prev, next) VALUES ("+gns[i]+","+gns[i-1]+","+gns[i+1]+");"});
  }
  return out;
}

function make_scale_example(out) {
    out.push({sql:"DELETE FROM graphical_next;"});
    out.push({sql:"INSERT INTO used_ids (id)  VALUES (3);"});
    out = make_beamed_note(out, 4,3,1,0)
    out = make_beamed_note(out, 5,3,2,0)
    out = make_beamed_note(out, 6,3,3,0)
    out = make_beamed_note(out, 7,3,4,0)

    out.push({sql:"INSERT INTO used_ids (id)  VALUES (8);"});
    out = make_beamed_note(out, 9,8,1,0)
    out = make_beamed_note(out, 10,8,2,0)
    out = make_beamed_note(out, 11,8,1,1)
    out = make_beamed_note(out, 12,8,2,1)

    out.push({sql:"INSERT INTO used_ids (id)  VALUES (13);"});
    out = make_beamed_note(out, 14,13,3,0)
    out = make_beamed_note(out, 15,13,4,0)
    out = make_beamed_note(out, 16,13,1,1)
    out = make_beamed_note(out, 17,13,2,1)

    out.push({sql:"INSERT INTO used_ids (id)  VALUES (18);"});
    out = make_beamed_note(out, 19,18,3,0)
    out = make_beamed_note(out, 20,18,4,0)
    out = make_beamed_note(out, 21,18,3,1)
    out = make_beamed_note(out, 22,18,4,1)

    out.push({sql:"INSERT INTO name (id, val)  VALUES (23,'bar_line');"});
    out.push({sql:"INSERT INTO bar_thickness (id, val)  VALUES (23,0.20);"});
    out.push({sql:"INSERT INTO staff_symbol (id, val)  VALUES (23,1);"});

    out = make_graphical_nexts(out,['NULL',2,0,4,5,6,7,9,10,11,12,14,15,16,17,19,20,21,22,23,'NULL']);
    return out;
}


function array_to_single_sql(out) {
  big = "";
  for (var i = 0; i < out.length; i++) {
    big += out[i].sql+'\n';
  }
  
  return [{sql:big}];
}
function processSql_page5(data) {
     console.log("received", data);
     //console.log("DO", data.information);
     var stringified = JSON.stringify(data.information,
     function(key, val) {
         if (val == null) {return val; }
         return val.toFixed ? Number(val.toFixed(3)) : val;
         }, 2);
     if (stringified != '[]') {
       $('#sql_result_page5').text(stringified);
     } else {
       $('#sql_result_page5').text('');
     }
     purcell.$e$$ion$.page4.draw(data);
}
function interpret_query_page5() {
  purcell.$e$$ion$.page4.make_spin();
  var out = [{name:"information", sql :
  $("#sql_input_page5").val()}];
  purcell.append_standard_graphical_queries(out);
  out = {
    client:purcell.$e$$ion$.page4.MY_NAME,
    sql:out,
    'return': purcell._be(purcell.$e$$ion$.page4.MY_NAME),
    subsequent:"processSql_page5"
  };
  purcell.$e$$ion$.page4.$0cket.send(JSON.stringify(out));
}

/////////////

function processSql_page6(data) {
     console.log("received", data);
     //console.log("DO", data.information);
     var stringified = JSON.stringify(data.information,
     function(key, val) {
         if (val == null) {return val; }
         return val.toFixed ? Number(val.toFixed(3)) : val;
         }, 2);
     if (stringified != '[]') {
       $('#sql_result_page6').text(stringified);
     } else {
       $('#sql_result_page6').text('');
     }
     purcell.$e$$ion$.page4.draw(data);
}
function interpret_query_page6() {
  purcell.$e$$ion$.page4.make_spin();
  var out = [{name:"information", sql :
  $("#sql_input_page6").val()}];
  purcell.append_standard_graphical_queries(out);
  out = {
    client:purcell.$e$$ion$.page4.MY_NAME,
    sql:out,
    'return': purcell._be(purcell.$e$$ion$.page4.MY_NAME),
    subsequent:"processSql_page6"
  };
  purcell.$e$$ion$.page4.$0cket.send(JSON.stringify(out));
}

/////////////

function processSql_page7(data) {
     console.log("received", data);
     //console.log("DO", data.information);
     var stringified = JSON.stringify(data.information,
     function(key, val) {
         if (val == null) {return val; }
         return val.toFixed ? Number(val.toFixed(3)) : val;
         }, 2);
     if (stringified != '[]') {
       $('#sql_result_page7').text(stringified);
     } else {
       $('#sql_result_page7').text('');
     }
     purcell.$e$$ion$.page4.draw(data);
}
function interpret_query_page7() {
  purcell.$e$$ion$.page4.make_spin();
  var out = [{name:"information", sql :
  $("#sql_input_page7").val()}];
  purcell.append_standard_graphical_queries(out);
  out = {
    client:purcell.$e$$ion$.page4.MY_NAME,
    sql:out,
    'return': purcell._be(purcell.$e$$ion$.page4.MY_NAME),
    subsequent:"processSql_page7"
  };
  purcell.$e$$ion$.page4.$0cket.send(JSON.stringify(out));
}

/////////////

function processSql_simple_editor(data) {
     console.log("received", data);
     //console.log("DO", data.information);
     var stringified = JSON.stringify(data.information,
     function(key, val) {
         if (val == null) {return val; }
         return val.toFixed ? Number(val.toFixed(3)) : val;
         }, 2);
     if (stringified != '[]') {
       $('#sql_result_simple_editor').text(stringified);
     } else {
       $('#sql_result_simple_editor').text('');
     }
     purcell.$e$$ion$.simple_editor.draw(data);
}
function interpret_query_simple_editor() {
  var out = [{name:"information", sql :
  $("#sql_input_simple_editor").val()}];
  purcell.append_standard_graphical_queries(out);
  out = {
    client:purcell.$e$$ion$.simple_editor.MY_NAME,
    sql:out,
    'return': purcell._be(purcell.$e$$ion$.simple_editor.MY_NAME),
    subsequent:"processSql_simple_editor"
  };
  purcell.$e$$ion$.simple_editor.$0cket.send(JSON.stringify(out));
}

/////////////

function processSql_page8(data) {
     console.log("received", data);
     //console.log("DO", data.information);
     var stringified = JSON.stringify(data.information,
     function(key, val) {
         if (val == null) {return val; }
         return val.toFixed ? Number(val.toFixed(3)) : val;
         }, 2);
     if (stringified != '[]') {
       $('#sql_result_page8').text(stringified);
     } else {
       $('#sql_result_page8').text('');
     }
     purcell.$e$$ion$.page8.draw(data);
}
function interpret_query_page8() {
  var out = [{name:"information", sql :
  $("#sql_input_page8").val()}];
  purcell.append_standard_graphical_queries(out);
  out = {
    client:purcell.$e$$ion$.page8.MY_NAME,
    sql:out,
    'return': purcell._be(purcell.$e$$ion$.page8.MY_NAME),
    subsequent:"processSql_page8"
  };
  purcell.$e$$ion$.page8.$0cket.send(JSON.stringify(out));
}

var _UPDATES = function() {
  var ids = [4,5,6,7,9,10,11,12,14,15,16,17,19,20,21,22];
  var oct = [1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0];
  var out = [];
  for (var i = 0; i < ids.length; i++) {
    out.push("UPDATE octave SET val = "+oct[i]+" WHERE id = "+ids[i]);
  }
  for (var i = 0; i < ids.length; i++) {
    out.push("UPDATE octave SET val = "+(oct[i] * -1 + 1)+" WHERE id = "+ids[i]);
  }
  return out;
}();

var _CRUNCH = 0;
var _CURRENT = 0;
var _REPERTOIRE = [];
var _USEABLES = [];

// ugh - code dup of draw function
function crunch_data_to_useable() {

  for (var rep_idx = 0; rep_idx < _REPERTOIRE.length; rep_idx++) {

    var data = _REPERTOIRE[rep_idx];
    var to_push_back = [];
    if (data.line_stencil != null) {
      for (var i = 0; i < data.line_stencil.length; i++) {
        var line = data.line_stencil[i];
        //console.log("making line", line);
        var x = parseFloat(!purcell.is_null(line['x_position']) ? line['x_position'] : 0.0);
        var y = parseFloat(!purcell.is_null(line['y_position']) ? line['y_position'] : 0.0);
        var name = line['name'] ? line['name'] : '';
        to_push_back.push(
        {
          id : name+'_line_'+line['id']+'_'+line['sub_id'],
          type : 'line',
          x1 : purcell.$e$$ion$.page8.st_x(parseFloat(line['x0']) + x),
          y1 : purcell.$e$$ion$.page8.st_y(parseFloat(line['y0']) + y),
          x2 : purcell.$e$$ion$.page8.st_x(parseFloat(line['x1']) + x),
          y2 : purcell.$e$$ion$.page8.st_y(parseFloat(line['y1']) + y)
        });
      }
    }
    if (data.glyph_stencil != null) {
      for (var i = 0; i < data.glyph_stencil.length; i++) {
          var glyph = data.glyph_stencil[i];
          //console.log("making glyph", glyph);
          var x = parseFloat(glyph['x']) + parseFloat(!purcell.is_null(glyph['x_position']) ? glyph['x_position'] : 0.0);
          var y = parseFloat(glyph['y']) + parseFloat(!purcell.is_null(glyph['y_position']) ? glyph['y_position'] : 0.0);
          uc = String.fromCharCode(parseInt(glyph['unicode'].substr(2), 16));
          var name = glyph['name'] ? glyph['name'] : '';
          //console.log(context.font, glyph[3], uc);
          to_push_back.push({
            id : name+'_glyph_'+glyph['id']+'_'+glyph['sub_id'],
            type : 'glyph',
            x : purcell.$e$$ion$.page8.st_x(x),
            y : purcell.$e$$ion$.page8.st_y(y),
            unicode : uc
          });
      }
    }
    var polygon_holder = {};
    if (data.polygon_stencil != null) {
      for (var i = 0; i < data.polygon_stencil.length; i++) {
        var polygon = data.polygon_stencil[i];
        //console.log("PG",polygon);
        if (!polygon_holder[polygon['id']]) {
          polygon_holder[polygon['id']] = {};
        }
        if (!polygon_holder[polygon['id']][polygon['sub_id']]) {
          //console.log("making sub", polygon['sub_id']);
          polygon_holder[polygon['id']][polygon['sub_id']] = [];
        }
        polygon_holder[polygon['id']][polygon['sub_id']].push(polygon);
      }
      //console.log("PH", polygon_holder);
      for (key in polygon_holder) {
        for (sub_key in polygon_holder[key]) {
          // first, we sort in point order
          //console.log("before sorting", polygon_holder[key][sub_key])
          polygon_holder[key][sub_key].sort(function(a,b)
            {
              return parseInt(a['point']) - parseInt(b['point']);
            });
          //console.log("after sorting", polygon_holder[key][sub_key])
          // then, iterate
          var path = "";
          for (var i = 0; i < polygon_holder[key][sub_key].length; i++) {
            path = path + ((i == 0 ? 'M' : 'L') + " " + purcell.$e$$ion$.page8.st_x(parseFloat(polygon_holder[key][sub_key][i].x)) + " " + purcell.$e$$ion$.page8.st_y(parseFloat(polygon_holder[key][sub_key][i].y))+ " ");
          }
          var name = polygon_holder[key][sub_key][0]['name'] ? polygon_holder[key][sub_key][0]['name'] : '';
          var thick = parseFloat(polygon_holder[key][sub_key][0].thickness ? polygon_holder[key][sub_key][0].thickness : 0.0);
          to_push_back.push({
            id : name+'_polygon_'+polygon_holder[key][sub_key][0]['id']+'_'+polygon_holder[key][sub_key][0]['sub_id'],
            type : 'path',
            path : path,
          });
          //s_polygon.click(function() { return function() { purcell.$e$$ion$.page8.registerAsClicked(s_polygon) } });
        }        
      }
    }
    _USEABLES.push(to_push_back);
  }
  //console.log(_USEABLES);
}

function find_by_id(lst, id) {
  for (var i = 0; i < lst.length; i++) {
    //console.log(lst[i].id, lst[i].type);
    if (lst[i].id == id) {
      return lst[i];
    }
  }
}

function interpolate(s,e,t) {
  return ((e - s) * t) + s;
}

function do_animation () {
  var surface = purcell.$e$$ion$.page8.$urfaces[0];
  var idx = _CURRENT;
  _CURRENT += 1;
  var destination = _USEABLES[idx % _USEABLES.length];
  var start = _USEABLES[idx == 0 ? _USEABLES.length - 1 : ((idx - 1) % _USEABLES.length)]
  Snap.animate(
    0,
    1.0,
    function(val) {
      for (var i = 0; i < destination.length; i++) {
        var curr = destination[i];
        var obj = surface.select('#'+curr.id);
        var prev = find_by_id(start, curr.id);
        //console.log(obj, curr.id)
        if (curr.type == 'line') {
          obj.attr({
            x1: interpolate(prev.x1, curr.x1, val),
            x2: interpolate(prev.x2, curr.x2, val),
            y1: interpolate(prev.y1, curr.y1, val),
            y2: interpolate(prev.y2, curr.y2, val),
          });
        } else if (curr.type == 'glyph') {
          obj.attr({
            x: interpolate(prev.x, curr.x, val),
            y: interpolate(prev.y, curr.y, val),
          });
        } else if (curr.type == 'path') {
          var prev_parsed = Snap.parsePathString(prev.path);
          var curr_parsed = Snap.parsePathString(curr.path);
          var path = '';
          for (var j = 0; j < curr_parsed.length; j++) {
            for (var k = 1; k < curr_parsed[j].length; k++) {
              curr_parsed[j][k] = interpolate(prev_parsed[j][k], curr_parsed[j][k], val)
            }
            for (var k = 0; k < curr_parsed[j].length; k++) {
              path += curr_parsed[j][k]+' ';
            }
          }
          obj.attr({
            path : path
          });
        }
      }
    },
    1000,
    mina.linear,
    do_animation
  );
}

function deposit_draw_repertoire(data) {
     //console.log("ddr", data, _CRUNCH, _UPDATES.length);
     _REPERTOIRE.push(data);
     _CRUNCH += 1;
     if (_CRUNCH != _UPDATES.length) {
       if (_CRUNCH == (_UPDATES.length/2)) {
         update_loading(85);
       }
       make_draw_repertoire();
     } else {
       $('#init_spin').spin(false);
       $('#loading_text').text("");
       crunch_data_to_useable();
       do_animation();
     }
}

function make_draw_repertoire() {
  var out = [
    {name:"command", sql:_UPDATES[_CRUNCH]}
  ];
  purcell.append_standard_graphical_queries(out);
  out = {
    client:purcell.$e$$ion$.page8.MY_NAME,
    sql:out,
    'return': purcell._be(purcell.$e$$ion$.page8.MY_NAME),
    subsequent:"deposit_draw_repertoire"
  };
  purcell.$e$$ion$.page8.$0cket.send(JSON.stringify(out));
}
