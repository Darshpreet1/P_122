function preload(){
    img = loadImage("https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&w=600")
}

function setup(){
    Canvas = createCanvas(500,500);
    Canvas.position(430,200);
    }
    
    tintColor = "";
    
    function draw(){
        image(img,100,100,350,350);
        tint(tintColor)
        circle(30, 30, 60);
        fill(100,30,30,)
        rect(20,60,20,350)
        fill(001,20,62,)
        rect(60,20,350,20)
        fill(001,60,20,)
    }
    
    function tintFilter(){
        tintColor = document.getElementById("input1").value;
    }
    
    function take_snapshot(){
        save("student_name.jpg");
    }
    