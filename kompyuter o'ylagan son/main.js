       
        let kopNum = Math.round(Math.random()*100);

        function Enter(){
            console.log(kopNum);
        let BizNum = document.getElementById("input").value;
           
        if(BizNum>kopNum){
            document.getElementById("dem").innerHTML = "Siz kiritgan son katta";  
                        }
        else if(BizNum<kopNum){
            document.getElementById("dem").innerHTML = "Siz kiritgan son kichik";  
                        }
        else if(BizNum==kopNum){
            document.getElementById("dem").innerHTML = "Topdingiz";
                }
        
        
     }

     function Refresh(){
        location.reload();
     }
     
    