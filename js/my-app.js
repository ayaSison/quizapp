Framework7.prototype.plugins.statistics = function (app, params) {
if (!params) return;
  


    return {
        hooks: {
            appInit: function () {

//BUTTON CLICK------------------------------------
             

                var textarea = document.getElementById("txtarea");
                var textarea2 = document.getElementById("txtarea2");


                //QSTART----------------------------------------


                $$("#btn_start").on('click',function(){
                         var correct = "0";
                         var wrong = "0";
                        parseInt(localStorage.setItem("correct", correct));
                        parseInt(localStorage.setItem("wrong", wrong));
                        location.href='quizlist.html'

                });

                //QSTART END----------------------------------------



                //QUIZLIST----------------------------------------

                $$("#firstquiz").on('click',function(){
                  location.href='question1.html'
                });

                $$("#secondquiz").on('click',function(){
                  location.href='question1q2.html'
                });

                $$("#thirdquiz").on('click',function(){
                  location.href='question1q3.html'
                });

                //QUIZLIST END----------------------------------------


                //QUIZ 1 BUTTONS----------------------------------------
                $$("#btn_q1").on('click',function(){

                    if (q1a1.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));
                              
                             }
                    else{


                    var wrong = localStorage.getItem("wrong");
                    var newVal = parseInt(wrong)+1;
                        parseInt(localStorage.setItem("wrong", newVal));
                       

                    }                            

                  location.href='question2.html'
                });
                $$("#btn_q2").on('click',function(){
                    if (q2a3.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));
                    }
                    else{

                    var wrong = localStorage.getItem("wrong");
                    var newVal = parseInt(wrong)+1;
                        parseInt(localStorage.setItem("wrong", newVal));
                       

                    }             

                  location.href='question3.html'       
                });
                $$("#btn_q3").on('click',function(){
                    if (q3a1.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));}
                    else{

                    var wrong = localStorage.getItem("wrong");
                    var newVal = parseInt(wrong)+1;
                        parseInt(localStorage.setItem("wrong", newVal));
                       

                    }                
                  location.href='question4.html'    
                });
                $$("#btn_q4").on('click',function(){
                    if (q4a4.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));}
                    else{
                       
                    var wrong = localStorage.getItem("wrong");
                    var newVal = parseInt(wrong)+1;
                        parseInt(localStorage.setItem("wrong", newVal));


                    }                    



                  location.href='question5.html'
                });
                $$("#btn_q5").on('click',function(){
                    if (q5a4.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));

                    var wrong = localStorage.getItem("wrong");
                    var newVal2 = parseInt(wrong);
                       

                  
                }

                    else{

                    var wrong = localStorage.getItem("wrong");
                    var newVal2 = parseInt(wrong)+1;
                        parseInt(localStorage.setItem("wrong", newVal2));

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct);
                       

                    }          
                      
                     location.href='resulta.html'
                });

                //QUIZ 1 BUTTONS END--------------------------------------
                


                //QUIZ 2 BUTTONS----------------------------------------
                $$("#btn_q1q2").on('click',function(){

                    if (q1a2q2.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));
                              
                             }
                    else{


                    var wrong = localStorage.getItem("wrong");
                    var newVal = parseInt(wrong)+1;
                        parseInt(localStorage.setItem("wrong", newVal));
                       

                    }                            

                  location.href='question2q2.html'
                });
                $$("#btn_q2q2").on('click',function(){
                    if (q2a2q2.checked){
                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));
                    }
                    else{

                    var wrong = localStorage.getItem("wrong");
                    var newVal = parseInt(wrong)+1;
                        parseInt(localStorage.setItem("wrong", newVal));
                       

                    }             

                  location.href='question3q2.html'       
                });
                $$("#btn_q3q2").on('click',function(){
                    if (q3a4q2.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));}
                    else{

                    var wrong = localStorage.getItem("wrong");
                    var newVal = parseInt(wrong)+1;
                        parseInt(localStorage.setItem("wrong", newVal));
                       

                    }                
                  location.href='question4q2.html'    
                });
                $$("#btn_q4q2").on('click',function(){
                    if (q4a1q2.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));}
                    else{
                       
                    var wrong = localStorage.getItem("wrong");
                    var newVal = parseInt(wrong)+1;
                        parseInt(localStorage.setItem("wrong", newVal));


                    }                    



                  location.href='question5q2.html'
                });
                $$("#btn_q5q2").on('click',function(){
                    if (q5a3q2.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));

                    var wrong = localStorage.getItem("wrong");
                    var newVal2 = parseInt(wrong);
                       

                  
                }

                    else{

                    var wrong = localStorage.getItem("wrong");
                    var newVal2 = parseInt(wrong)+1;
                        parseInt(localStorage.setItem("wrong", newVal2));

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct);
                       
                       
                    }          
                      
                     location.href='resulta.html'
                });

                //QUIZ 2 BUTTONS END--------------------------------------

                 //QUIZ 3 BUTTONS----------------------------------------
                $$("#btn_q1q3").on('click',function(){

                    if (q1a1q3.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));
                              
                             }
                    else{


                    var wrong = localStorage.getItem("wrong");
                    var newVal = parseInt(wrong)+1;
                        parseInt(localStorage.setItem("wrong", newVal));
                       
                    }                            

                  location.href='question2q3.html'
                });
                $$("#btn_q2q3").on('click',function(){
                    if (q2a2q3.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));
                    }
                    else{

                    var wrong = localStorage.getItem("wrong");
                    var newVal = parseInt(wrong)+1;
                        parseInt(localStorage.setItem("wrong", newVal));
                       

                    }             

                  location.href='question3q3.html'       
                });
                $$("#btn_q3q3").on('click',function(){
                    if (q3a2q3.checked){
                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));}
                    else{

                    var wrong = localStorage.getItem("wrong");
                    var newVal = parseInt(wrong)+1;
                        parseInt(localStorage.setItem("wrong", newVal));
                       

                    }                
                  location.href='question4q3.html'    
                });
                $$("#btn_q4q3").on('click',function(){
                    if (q4a1q3.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));}
                    else{
                       
                    var wrong = localStorage.getItem("wrong");
                    var newVal = parseInt(wrong)+1;
                        parseInt(localStorage.setItem("wrong", newVal));

                    }                    



                  location.href='question5q3.html'
                });
                $$("#btn_q5q3").on('click',function(){
                    if (q5a2q3.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));

                    var wrong = localStorage.getItem("wrong");
                    var newVal2 = parseInt(wrong);
                       

                }

                    else{

                    var wrong = localStorage.getItem("wrong");
                    var newVal2 = parseInt(wrong)+1;
                        parseInt(localStorage.setItem("wrong", newVal2));

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct);
                       

                       
                    }          
                      
                     location.href='resulta.html'
                });

                //QUIZ 3 BUTTONS END--------------------------------------
                
                


                //SEE RESULT----------------------------------------
                $$("#btn_results").on('click',function(){
                    var correct = localStorage.getItem("correct");
                  textarea.value=correct;
                    var wrong = localStorage.getItem("wrong");
                  textarea2.value=wrong;
                  
                  
                });
                //SEE RESULT END----------------------------------------
                
                
                //BACK TO MENU----------------------------------------
                $$("#btn_menu").on('click',function(){

                  location.href='index.html'
                });
              //BACK TO MENU- END---------------------------------------
                
            }
	    }
    };
};

var $$ = Dom7;
var app = new Framework7({
    statistics:true
});

