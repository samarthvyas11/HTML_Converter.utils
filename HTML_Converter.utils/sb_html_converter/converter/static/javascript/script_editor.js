var previous_button = 0;
    var previous_head = 0;
    var previous_img = 0;
    var previous_anchor = 0;
    var previous_para = 0;
    var elements = [];
    var html_final = [];
    var css_final = [];
    var ID_number = 1;
    var original_inner = "";

   // For button---------------------------------------------

    function open_buttons(){
        k1 = document.getElementsByClassName("sub_button");
    
        k1[0].innerHTML =  '<div class="side_box"><h6>Width height </h6><form>x_index: <input style="width: 63%;" type="number" name="x" id="x"><br>y_index: <input type="number" style="width: 63%;" name="y" id="y"><br>  w_width: <input type="number" name="w" style="width: 63%;" id="w"><br>h_height: <input type="number" style="width:63%;" name="h" id="h"><br>Text on button: <input type="text" style="width:63%;" name="write" id="write"><br><br>Background_Color:<select name="col" id="col"><option value="black">Black</option><option value="green">Green</option><option value="yellow">Yellow</option><option value="red">Red</option></select><br><br><a onclick="checkshape()" class="check_button"><b>Check</b><a><br><a onclick="done_button()" class="check_button"><b>Done</b></a>'

    }
    function checkshape(){

        var x = document.getElementById('x').value;
        var y = document.getElementById('y').value;
        var w = document.getElementById('w').value;
        var h = document.getElementById('h').value;
        var write = document.getElementById('write').value;
        var c = document.getElementById('col').value;
       
        button = '<button style="position: absolute;background-color:' + c + ';width:'+ w.toString() +'%;top:'+y.toString()+'%;left:'+x.toString() +'%;height:' + h.toString() +'%;">'+write+'</button>'

       

        if(previous_button == 1)
        {   elements.pop()
            html_final.pop()
            css_final.pop()
            ID_number = ID_number - 1
            previous_button = 0
        }
         
        for_html = '<button' + ' id="ID' + ID_number.toString() + '">' + write + '</button>'
        for_css = '#ID' + ID_number.toString() + '{' + 'position: absolute;background-color:' + c + ';width:' + w.toString() + '%;top:' + y.toString() + '%;left:' + x.toString() + '%;height:' + h.toString() + '%;}'

            previous_button = 1
            html_final.push(for_html)
            css_final.push(for_css)
            elements.push(button)
            original_inner = "";
            k1 = document.getElementsByClassName('frame')
            for(var i = 0;i<elements.length;i++)
            {original_inner = original_inner + elements[i]};
            k1[0].innerHTML = original_inner;
            ID_number = ID_number + 1;
            



    };
    function done_button()
    {
        previous_button = 0;
        console.log("done buttons");
        open_buttons();
    }

    // For heading tag----------------------------------------------------------------


   function open_heading(){
       k1 = document.getElementsByClassName("sub_button");
       k1[0].innerHTML =  '<div class="side_box"><b>Heading</b><form>printed_string: <input type="text" style="width: 63%;" name="s" id="s"><br>x_coordinate:<input type="number" style="width: 63%;" name="y" id="y"><br>y_coordinate: <input type="number" style="width: 63%;" name="x" id="x"><br>Choose Heading Type:<select name="headtype" id="headtype"><option value="h1">h1</option><option value="h2">h2</option><option value="h3">h3</option><option value="h4">h4</option><option value="h5">h5</option><option value="h6">h6</option></select><br>Heading Color:<br><select name="head_color" id="head_color"><option value="black">Black</option><option value="green">Green</option><option value="yellow">Yellow</option><option value="red">Red</option></select><br><br><a onclick="check_string()" class="check_button"><b>Check</b></a><br><a onclick="done_string()" class="check_button"><b>Done</b></a></form></div>';


   }
   function check_string()
   {
       s = document.getElementById('s').value;
       x = document.getElementById('x').value;
       y = document.getElementById('y').value;
       h = document.getElementById('headtype').value;
        var c = document.getElementById('head_color').value;
       string1 = '<' + h + ' style="position: absolute;color: ' + c + ';top:' + x.toString() + '%;left:' + y.toString() + '%;">' + s + '</' + h + '>'

       

       if(previous_head == 1)
        {   elements.pop()
            html_final.pop()
            css_final.pop()
            ID_number = ID_number - 1
            previous_head = 0
        }
          
        for_html = '<' + h  + ' id="ID' + ID_number.toString() + '">' + s + '</' + h + '>'
        for_css = '#ID' + ID_number.toString() + '{' + 'position: absolute;color: ' + c + ';top:' + x.toString() + '%;left:' + y.toString() + '%;}'

            previous_head = 1
            elements.push(string1)
            html_final.push(for_html)
            css_final.push(for_css)
            original_inner = "";
            k1 = document.getElementsByClassName('frame')
            for(var i = 0;i<elements.length;i++)
            {original_inner = original_inner + elements[i]};
            k1[0].innerHTML = original_inner;
            ID_number = ID_number + 1;

   }
   function done_string()
   {
       previous_head = 0
       open_heading();
   }

    // For image --------------------------------------------------------------------------------------

  function open_img()

  {   k1 = document.getElementsByClassName("sub_button");
      k1[0].innerHTML = ' <div class="side_box" ><b>image_url:</b><br><input type="Text" style="width: 63%;" name="img_url" id="img_url"><br>width:<br><input type="number" style="width: 63%;" name="w" id="w"><br>height:<br><input type="number" style="width: 63%;" name="h" id="h"><br>x_coordinate:<br><input type="number" style="width: 63%;" name="y" id="y"><br>y_coordinate:<br><input type="number" style="width: 63%;" name="x" id="x"><br><br><a onclick="check_img()" class="check_button"><b>Check</b></a><br><a onclick="done_img()" class="check_button"><b>Done</b></a></form></div>';

  }

  function check_img()
  {
    img_url = document.getElementById('img_url').value;
    x = document.getElementById('x').value;
    y = document.getElementById('y').value;
    h = document.getElementById('h').value;
    w = document.getElementById('w').value;


    img1 = '<img'  + ' style="position: absolute;top:' + x.toString() + '%;left:' + y.toString() + '%;width:' + w.toString() +'%;height:' + h.toString() + '%;"' + 'src="' + img_url.toString() + '"'   +'>'
   


    if(previous_img == 1)
    {   elements.pop()
        previous_img = 0
        html_final.pop()
        css_final.pop()
        ID_number = ID_number - 1
    }

    for_html = '<img'  + ' id="ID' + ID_number.toString()  + '" src="' + img_url.toString() + '"'   +'>'
    for_css = '#ID' + ID_number.toString() + '{' + 'position: absolute;top:' + x.toString() + '%;left:' + y.toString() + '%;width:' + w.toString() +'%;height:' + h.toString() + '%;}'

        previous_img = 1
        elements.push(img1)
        html_final.push(for_html)
        css_final.push(for_css)
        original_inner = "";
        k1 = document.getElementsByClassName('frame')
        for(var i = 0;i<elements.length;i++)
        {original_inner = original_inner + elements[i]};
        k1[0].innerHTML = original_inner;
        ID_number = ID_number + 1;

  }

  function done_img()
  {
      previous_img = 0;
      open_img()

  }

   // For Anchor Tag ---------------------------------------------------------------

  function open_anchor()
  {  k1 = document.getElementsByClassName('sub_button');
     k1[0].innerHTML = '<div class="side_box"><b>Anchor Tag</b><br>Input href:<input type="url" style="width: 63%;" name="a_url" id="a_url"><br>Text:<br><input type="Text" style="width: 63%;" name="t1" id="t1"><br>x_coordinate:<br><input type="number" style="width: 63%;" name="x" id="x"><br>y_coordinate:<br><input type="number" style="width: 63%;" name="y" id="y"><br><br><a onclick="check_anchor()" class="check_button"> <b>Check</b></a><br><a onclick="done_anchor()" class="check_button"><b>Done</b></a></div>'

  }
  function check_anchor()
  {
      var y = document.getElementById("y").value ;
      var x = document.getElementById("x").value;
      var a_url = document.getElementById("a_url").value;
      var t1 = document.getElementById("t1").value;

      anchor1 = '<a style="position:absolute;top:'+y.toString() + '%;left:' + x.toString() + '%;" href="' + a_url +'">' + t1 + '</a>';
     


      if(previous_anchor == 1)
      {
          elements.pop();
          previous_anchor = 0;
          html_final.pop()
          css_final.pop()
          ID_number = ID_number - 1
      }
      
      for_html = '<a' + ' id="ID' + ID_number.toString() + '" href="' + a_url + '">' + t1 + '</a>';
      for_css = '#ID' + ID_number.toString() + '{' + 'position:absolute;top:' + y.toString() + '%;left:' + x.toString() + '%;}'

      previous_anchor = 1
      elements.push(anchor1);
      html_final.push(for_html);
      css_final.push(for_css);
      original_string = ""
      for(var i = 0 ;i <elements.length;i++)
      { original_string = original_string + elements[i];
      }
      k1 = document.getElementsByClassName("frame")
      k1[0].innerHTML = original_string;
      ID_number = ID_number + 1;

  }

  function done_anchor(){
      previous_anchor = 0;
      open_anchor();
  }

 // For Paragraph --------------------------------------------------------------------------------------

  function open_paragraph(){
    k1 = document.getElementsByClassName("sub_button");
    k1[0].innerHTML =  '<div class="side_box"><b>Paragraph</b><form>Enter para Text: <input type="text" style="width: 63%;" name="para" id="para"><br>x_coordinate:<input type="number" style="width: 63%;" name="x" id="x"><br>y_coordinate: <input type="number" style="width: 63%;" name="y" id="y"><br>Text_Color<br><select name="text_para" id="text_para"><option value="black">Black</option><option value="green">Green</option><option value="yellow">Yellow</option><option value="red">Red</option></select><br>Font Size<br><select name="font_size" id="font_size"><option value="15px">15</option><option value="18px">18</option><option value="20px">20</option><option value="30px">30</option><option value="40px">40</option><option value="45px">45</option></select><br><br><a onclick="check_para()" class="check_button"><b>Check</b></a><br><a onclick="done_para()" class="check_button"><b>Done</b></a></form></div>';

}
 function check_para()
{

    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var para = document.getElementById("para").value;
    var p = document.getElementById('text_para').value;
    var size = document.getElementById('font_size').value;
    para1 = '<p style="position: absolute; color: ' + p + ';  font-size: ' + size + '; top:'+y.toString() + '%;left:' + x.toString() + '%;">' + para + '</p>'

    if(previous_para == 1)
    {   elements.pop()
        previous_para = 0
        html_final.pop()
        css_final.pop()
        ID_number = ID_number - 1
    }

    for_html = '<p'+ ' id="ID' + ID_number.toString() + '">' + para + '</p>'
    for_css = '#ID' + ID_number.toString() + '{' + 'position: absolute; color: ' + p + ';  font-size: ' + size + ';top:' + y.toString() + '%;left:' + x.toString() + '%;}';
    console.log(for_html)


     previous_para = 1
     elements.push(para1)
     html_final.push(for_html)
     css_final.push(for_css)
     original_para = "";
     k1 = document.getElementsByClassName('frame')
     for(var i = 0;i<elements.length;i++)
     {original_para = original_para + elements[i]};
     k1[0].innerHTML = original_para;
     ID_number = ID_number + 1 ;

}
    function done_para()
{
    previous_para = 0
    open_paragraph();
}


// For marquee tag----------------------------------------------------------------------------

var previous_marque = 0;

 function open_marque(){
       k1 = document.getElementsByClassName("sub_button");
       k1[0].innerHTML =  '<div class="side_box"><b>Marquee Tag</b><form>Enter Slogan: <input type="text" style="width: 63%;" name="m" id="m"><br>y_coordinate: <input type="number" style="width: 63%;" name="y" id="y"><br>Text Color:<br><select name="marque_color" id="marque_color"><option value="black">Black</option><option value="green">Green</option><option value="yellow">Yellow</option><option value="red">Red</option></select><br>Font Size:<br><select name="font_size" id="font_size"><option value="12px">12</option><option value="15px">15</option><option value="18px">18</option><option value="20px">20</option><option value="22px">22</option><option value="25px">25</option><option value="30px">30</option><option value="40px">40</option><option value="45px">45</option></select><br><br><a onclick="check_marque()" class="check_button"><b>Check</b></a><br><a onclick="done_marque()" class="check_button"><b>Done</b></a></form></div>';

   }
    function check_marque()
   {

       var y = document.getElementById("y").value;
       var m = document.getElementById("m").value;
       var c = document.getElementById("marque_color").value;
       var size = document.getElementById('font_size').value;
       marque1 = '<marquee style="position:absolute; color:' + c + '; font-size: ' + size + '; top:'+y.toString() + '%;">' + m + '</marquee>'


       if(previous_marque == 1)
       {   elements.pop()
            previous_marque = 0
            html_final.pop()
            css_final.pop()
            ID_number = ID_number - 1
       }

       for_html = '<marquee' + ' id="ID' + ID_number.toString() + '">' + m + '</marquee>'
       for_css =  '#ID' + ID_number.toString() + '{' + 'position:absolute; color:' + c + '; font-size: ' + size + ';top:' + y.toString() + '%;}';

        previous_marque = 1
        elements.push(marque1)
        html_final.push(for_html)
        css_final.push(for_css)
        original_marque = "";
        k1 = document.getElementsByClassName('frame')
        for(var i = 0;i<elements.length;i++)
        {original_marque = original_marque + elements[i]};
        k1[0].innerHTML = original_marque;
        ID_number = ID_number + 1;

   }
   function done_marque()
   {
       previous_marque = 0
       open_marque();
   }

function clear_last()
{
    if (elements.length > 0)
    { elements.pop();
      html_final.pop();
      css_final.pop();
      ID_number = ID_number - 1;

    }
    original_string = "";
    for(var i = 0;i < elements.length;i++)
    {
        original_string = original_string + elements[i]
    }
    k1 = document.getElementsByClassName('frame')
    k1[0].innerHTML = original_string;

}




  function clear_all()
  {
    k1 = document.getElementsByClassName('frame')
    k1[0].innerHTML = "";
    k2 = document.getElementsByClassName('sub_button');
    k2[0].innerHTML = "";
    elements = []
    html_final = []
    css_final = []


  }



 function create_html()
 {
    var styling = "";
    var html = "";
   console.log(html_final)
   console.log(css_final)
   for(var i = 0;i < html_final.length;i++)
   {
        html = html + html_final[i];


   }
   for(var i = 0;i < css_final.length;i++)
   {
       styling = styling + css_final[i];
   }
  


  result_HTML = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Converted_Page</title><style>.container{width: 100vw;height: 100vh;position: relative;}' + styling + '</style></head><body><div class="container">' + html + '</div></body></html>'

 hostname = location.hostname
 portname = location.port
 protocol = location.protocol

 
 var d1
 $.ajax({
            async: false,
            type: 'POST',
            url: `${protocol}//${hostname}:${portname}/generate_file`,
            
            data:{'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val(),'html_file':result_HTML} 
        
        })
        .done(function (data) {
            console.log(data);
            d1 = data;
        });
 

 k1 = document.getElementsByClassName("container1")
 k1[0].style.display= "none";
 k2 = document.getElementsByClassName("output")
 
 

 k2[0].style = 'width: 70vw;height: 80vh;border-style: solid;margin: auto;margin-top: 1%;display:block; border-radius:12px;'

 original_string = "";
    for(var i = 0;i < elements.length;i++)
    {
        original_string = original_string + elements[i]
    }


screen_frame = ' <div class="result_frame" style="width: 100%;position:relative; background-color:white;height: 85%;border-radius:10px;">'+ original_string + '</div>' + ' <div class="DC_button" style="width: 100%;height: 20%;background-color:chartreuse;position: relative;border-radius:5px;"><a '+ 'href="Converted_HTML" download ' +'style="position: absolute;left: 5%;width: 28%;height: 45%;top: 40%;text-align: center;color:black;font-size: 2vw;background-color: lightslategray;border-radius: 12px;"><i class="fa fa-download"></i> Download</a><button onclick="restore()" class="btn" style="position: absolute;left: 90%;top: 48%;border-radius:12px;"> <b>Cancel  </b></button></div>'

k2[0].innerHTML = screen_frame;

}

function restore(){
    k1 = document.getElementsByClassName("container1")
 k1[0].style.display= "block";
 k2 = document.getElementsByClassName("output")
 k2[0].style.display = "none"
 original_string = "";
    for(var i = 0;i < elements.length;i++)
    {
        original_string = original_string + elements[i]
    }
    k1 = document.getElementsByClassName('frame')
    k1[0].innerHTML = original_string; 
}