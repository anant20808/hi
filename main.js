var images=["simpsons dad.jpg","mom.jpg","uzumaki.jpg","bully_nelson.gif"];
var names=["Billy","Cantanm","Suzan","Nelson"];

var I=0;


function nextslide(){
    document.getElementById("imageid").src=images[I];I++;if(I==4){I=0};
    document.getElementById("nameinput").innerHTML=names[I];}




