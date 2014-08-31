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

/////

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
