function soundClassification(){
    navigator.mediaDevices.getUserMedia({audio :true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u8aJM5H5n/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error , results){
    if(error){
        console.error("error")
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML="i can hear - "+results[0].label;
document.getElementById("result_confidence").innerHTML="accuracy - "+(results[0].confidence*100).toFixed(2)+"%"
document.getElementById("result_label").style.color="rgb(" + random_number_r+","+ random_number_g +","+random_number_r+ ")";
document.getElementById("result_confidence").style.color="rgb(" + random_number_r+","+ random_number_g +","+random_number_r+ ")";
img=document.getElementById("dog");
img1=document.getElementById("parrot");
img2=document.getAnimations("cat");
img3=document.getElementById("rabbit");

if(results[0].label=="dog"){
    img.src="dog.gif";
    img1.src="parrot.jpg";
    img2.src="cat.jpg";
    img3.src="rabbit.png";
} else if(results[0].label=="parrot"){
    img.src="dog.jpg";
    img1.src="parrot.gif";
    img2.src="cat.jpg";
    img3.src="rabbit.png";
      
}else if(results[0].label=="cat"){
    img.src="dog.jpg";
    img1.src="parrot.jpg";
    img2.src="cat.gif";
    img3.src="rabbit.png";
}else if(results[0].label=="rabbit"){
    img.src="dog.jpg";
    img1.src="parrot.jpg";
    img2.src="cat.jpg";
    img3.src="rabbit.gif";}
    else{
        img.src="dog.jpg";
        img1.src="parrot.jpg";
        img2.src="cat.jpg";
        img3.src="rabbit.png";
}

}
}