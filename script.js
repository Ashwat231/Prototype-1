function getnews(){
fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=327ffa9c824f49c1837ab462abaf5875')
.then(a=>a.json())
.then(response=>{
var a=document.getElementById('h1');
  if(a.style.color=="white"){
  document.getElementById('output').style.backgroundColor=" black";
  document.getElementById('output').innerHTML+="<h2 style='font-size:5vw; color:red; background-color:Blue;'>Your News:</h2>"
  for(var i=0; i<response.articles.length;i++){
    document.getElementById('output').innerHTML+="<div style='padding-top:0px; padding-bottom:50px; font-size:12px; margin-left: 80px; margin-right: 80px; border-left:white solid 5px; border-right: white solid 5px; background-color:#DBC0C0; border-bottom:solid white 5px;'><h1 style='color:black;  font-size:3vw; border:solid red 3px; border-radius:20px;'>"+response.articles[i].title+"</h1><img style='float:left; width:100%; height:auto;' src='"+response.articles[i].urlToImage+"' alt='(Check link)'><p>"+response.articles[i].source.name+"</p><br><p style='color:black; font-size:2vw;'>"+response.articles[i].description+"</p><br> (<a style='font-size:1vw; overflow-wrap: word-wrap: break-word;' href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a>)</div>";
  }
  document.getElementById('h1').style.color="green";
    document.getElementById('scroll').style.display="block";
}
else {
document.getElementById('output').innerHTML=" ";
  document.getElementById('h1').style.color="white";
}

}
)
}

function getnews1(){
fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=327ffa9c824f49c1837ab462abaf5875')
.then(a=>a.json())
.then(response=>{
var a=document.getElementById('h1');
  if(a.style.color=="white"){
  document.getElementById('output').style.backgroundColor=" black";
  document.getElementById('output').innerHTML+="<h2 style='font-size:5vw; color:red; background-color:Blue;'>Your News:</h2>"
  for(var i=0; i<response.articles.length;i++){
    document.getElementById('output').innerHTML+="<div style='padding-top:0px; padding-bottom:50px; font-size:12px; margin-left: 80px; margin-right: 80px; border-left:white solid 5px; border-right: white solid 5px; background-color:#DBC0C0; border-bottom:solid white 5px;'><h1 style='color:black;  font-size:3vw; border:solid red 3px; border-radius:20px;'>"+response.articles[i].title+"</h1><img style='float:left; width:100%; height:auto;' src='"+response.articles[i].urlToImage+"' alt='(Check link)'><p>"+response.articles[i].source.name+"</p><br><p style='color:black; font-size:2vw;'>"+response.articles[i].description+"</p><br> (<a style='font-size:1vw; overflow-wrap:break-word; word-wrap: break-word;' href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a>)</div>";
  }
  document.getElementById('h1').style.color="green";
  document.getElementById('scroll').style.display="block";
}
else {
document.getElementById('output').innerHTML=" ";
  document.getElementById('h1').style.color="white";
}

}
)
}



function getnews2(){
fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=327ffa9c824f49c1837ab462abaf5875')
.then(a=>a.json())
.then(response=>{
var a=document.getElementById('h1');
  if(a.style.color=="white"){
  document.getElementById('output').style.backgroundColor=" black";
  document.getElementById('output').innerHTML+="<h2 style='font-size:5vw; color:red; background-color:Blue;'>Your News:</h2>"
  for(var i=0; i<response.articles.length;i++){
    document.getElementById('output').innerHTML+="<div style='padding-top:0px; padding-bottom:50px; font-size:12px; margin-left: 80px; margin-right: 80px; border-left:white solid 5px; border-right: white solid 5px; background-color:#DBC0C0; border-bottom:solid white 5px;'><h1 style='color:black;  font-size:3vw; border:solid red 3px; border-radius:20px;'>"+response.articles[i].title+"</h1><img style='float:left; width:100%; height:auto;' src='"+response.articles[i].urlToImage+"' alt='(Check link)'><p>"+response.articles[i].source.name+"</p><br><p style='color:black; font-size:2vw;'>"+response.articles[i].description+"</p><br> (<a style='font-size:1vw; overflow-wrap:break-word; word-wrap: break-word;' href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a>)</div>";
  }
  document.getElementById('h1').style.color="green";
    document.getElementById('scroll').style.display="block";
}
else {
document.getElementById('output').innerHTML=" ";
  document.getElementById('h1').style.color="white";
}

}
)
}


function getnews3(){
fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=327ffa9c824f49c1837ab462abaf5875')
.then(a=>a.json())
.then(response=>{
var a=document.getElementById('h1');
  if(a.style.color=="white"){
  document.getElementById('output').style.backgroundColor=" black";
  document.getElementById('output').innerHTML+="<h2 style='font-size:5vw; color:red; background-color:Blue;'>Your News:</h2>"
  for(var i=0; i<response.articles.length;i++){
    document.getElementById('output').innerHTML+="<div style='padding-top:0px; padding-bottom:50px; font-size:12px; margin-left: 80px; margin-right: 80px; border-left:white solid 5px; border-right: white solid 5px; background-color:#DBC0C0; border-bottom:solid white 5px;'><h1 style='color:black;  font-size:3vw; border:solid red 3px; border-radius:20px;'>"+response.articles[i].title+"</h1><img style='float:left; width:100%; height:auto;' src='"+response.articles[i].urlToImage+"' alt='(Check link)'><p>"+response.articles[i].source.name+"</p><br><p style='color:black; font-size:2vw;'>"+response.articles[i].description+"</p><br> (<a style='font-size:1vw; overflow-wrap:break-word; word-wrap: break-word;' href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a>)</div>";
  }
  document.getElementById('h1').style.color="green";
    document.getElementById('scroll').style.display="block";
}
else {
document.getElementById('output').innerHTML=" ";
  document.getElementById('h1').style.color="white";
}

}
)
}



function getnews4(){
fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=327ffa9c824f49c1837ab462abaf5875')
.then(a=>a.json())
.then(response=>{
var a=document.getElementById('h1');
  if(a.style.color=="white"){
  document.getElementById('output').style.backgroundColor=" black";
  document.getElementById('output').innerHTML+="<h2 style='font-size:5vw; color:red; background-color:Blue;'>Your News:</h2>"
  for(var i=0; i<response.articles.length;i++){
    document.getElementById('output').innerHTML+="<div style='padding-top:0px; padding-bottom:50px; font-size:12px; margin-left: 80px; margin-right: 80px; border-left:white solid 5px; border-right: white solid 5px; background-color:#DBC0C0; border-bottom:solid white 5px;'><h1 style='color:black;  font-size:3vw; border:solid red 3px; border-radius:20px;'>"+response.articles[i].title+"</h1><img style='float:left; width:100%; height:auto;' src='"+response.articles[i].urlToImage+"' alt='(Check link)'><p>"+response.articles[i].source.name+"</p><br><p style='color:black; font-size:2vw;'>"+response.articles[i].description+"</p><br> (<a style='font-size:1vw; overflow-wrap:break-word; word-wrap: break-word;' href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a>)</div>";
  }
  document.getElementById('h1').style.color="green";
    document.getElementById('scroll').style.display="block";
}
else {
document.getElementById('output').innerHTML=" ";
  document.getElementById('h1').style.color="white";
}

}
)
}



function getnews5(){
fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=327ffa9c824f49c1837ab462abaf5875')
.then(a=>a.json())
.then(response=>{
var a=document.getElementById('h1');
  if(a.style.color=="white"){
  document.getElementById('output').style.backgroundColor=" black";
  document.getElementById('output').innerHTML+="<h2 style='font-size:5vw; color:red; background-color:Blue;'>Your News:</h2>"
  for(var i=0; i<response.articles.length;i++){
    document.getElementById('output').innerHTML+="<div style='padding-top:0px; padding-bottom:50px; font-size:12px; margin-left: 80px; margin-right: 80px; border-left:white solid 5px; border-right: white solid 5px; background-color:#DBC0C0; border-bottom:solid white 5px;'><h1 style='color:black;  font-size:3vw; border:solid red 3px; border-radius:20px;'>"+response.articles[i].title+"</h1><img style='float:left; width:100%; height:auto;' src='"+response.articles[i].urlToImage+"' alt='(Check link)'><p>"+response.articles[i].source.name+"</p><br><p style='color:black; font-size:2vw;'>"+response.articles[i].description+"</p><br> (<a style='font-size:1vw; overflow-wrap:break-word; word-wrap: break-word;' href='"+response.articles[i].url+"' target='_blank'>"+response.articles[i].url+"</a>)</div>";
  }
  document.getElementById('h1').style.color="green";
    document.getElementById('scroll').style.display="block";
}
else {
document.getElementById('output').innerHTML=" ";
  document.getElementById('h1').style.color="white";
}

}
)
}
