var amount =0;
var counter=0;
var coachingCounter=0;
var sum=0;
var time=0;
function addToCart1(){ 
    amount ++;
    counter++;
    sum = sum+300;

    document.getElementById("counter").innerHTML=" Du har lagt till " + counter + " av den bästa boosten ever! glhf!";
    
  
   

   if(amount==1){
    document.getElementById("korg").src="/images/rank1.png";
    
    
   }
   if(amount==2){

    document.getElementById("korg").src="/images/rank2.jpg";
   }
   
    if(amount>=2){

        if(coachingCounter>=1&&counter>=1)
   {

    document.getElementById("garanterat").innerHTML=" Du har valt både coachning och boostning! Grandmaster är garanterat! Grattis!";
   
    document.getElementById("korg").src="/images/GM1.jpg";
   }

   }

   
}
function addToCart2(){
    amount++;
    coachingCounter++;
    time++;

    document.getElementById("coachingCounter").innerHTML= " Du har lagt till " + coachingCounter + " av den bästa coachningen ever!";
    
  
   

   if(amount==1){
    document.getElementById("korg").src="/images/rank1.png";
    
   }
   if(amount==2){

    document.getElementById("korg").src="/images/rank2.jpg";
   }
   
    if(amount>=2){
    if(coachingCounter>=1&&counter>=1)
    {
 
     document.getElementById("garanterat").innerHTML=" Du har valt både coachning och boostning! Grandmaster är garanterat! Grattis!";
    
            document.getElementById("korg").src="/images/GM1.jpg";
    }
   }

   
}
function search(){
alert('searching');
    
}
