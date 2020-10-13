var amount =0;
var counter=0;
var coachingCounter=0;
function addToCart1(){ 
    amount ++;
    counter++;


    document.getElementById("counter").innerHTML=" Du har lagt till " + counter + " av den bästa boosten ever! glhf!";
    alert('added to cart boosting'+ " "+amount);
  
   

   if(amount==1){
    document.getElementById("korg").src="/images/rank1.png";
    
    
   }
   if(amount==2){

    document.getElementById("korg").src="/images/rank2.jpg";
   }
   
   else if(amount>=2){

        if(coachingCounter>=1&&counter>=1)
   {

    document.getElementById("garanterat").innerHTML=" Du har valt både coachning och boostning! Grandmaster är garanterat! grattis!";
   
    document.getElementById("korg").src="/images/GM1.jpg";
   }

   }

   
}
function addToCart2(){
    amount ++;
    coachingCounter++;
    
    document.getElementById("coachingCounter").innerHTML= " Du har lagt till " + coachingCounter + " av den bästa coachningen ever! glhf!";
    alert('added to cart coaching'+ " "+amount);
  
   

   if(amount==1){
    document.getElementById("korg").src="/images/rank1.png";
    
   }
   if(amount==2){

    document.getElementById("korg").src="/images/rank2.jpg";
   }
   
   else if(amount>=2){
    if(coachingCounter>=1&&counter>=1)
    {
 
     document.getElementById("garanterat").innerHTML=" Du har valt både coachning och boostning! Grandmaster är garanterat! grattis!";
    
            document.getElementById("korg").src="/images/GM1.jpg";
    }
   }

   
}
function search(){
alert('searching');
    
}
