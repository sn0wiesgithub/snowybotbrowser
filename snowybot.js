//the javascript
////define variables
///set original balance
const whiskers = parseFloat(((document.getElementById("pct_balance").value)*1).toFixed(8));
////click min bet for start
document.getElementById("b_min").click();
///set other variables
var mittens = parseFloat(whiskers);
var jasper = parseFloat(whiskers); 
var tabby = parseFloat((whiskers/800).toFixed(8)); 
const purr = 49.5;
var tens = (tabby*10);
var sevens = (tabby*6.9);
var eights = (tabby*7.9);
var blowit = 10;
var bomhr = 4;
var mighty = ((Math.floor(whiskers/tens))*tens);
var bolux = parseFloat(mighty); 
var simba = parseFloat(whiskers); 
var shadow = parseFloat(whiskers); 
var smokey = parseFloat(whiskers);
var mittens = parseFloat(whiskers);
var norm = parseFloat(mighty-tens);  
var bekance = parseFloat(mighty);
var paws = true;
var cat = tabby;
var bux = 0;
var blue = 0;
var good = 0;
var howsbet = 0;
var fart = 1;
var smartty = parseFloat(cat);
var felix = parseFloat(mighty);
var groff = Number(document.getElementById("me").firstChild.lastChild.firstChild.children[5].innerText);


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

///set main function
async function runFelineBot() {
    var currentGroff = Number(document.getElementById("me").firstChild.lastChild.firstChild.children[5].innerText);
    var diceRoll = Number(document.getElementById("me").firstChild.lastChild.firstChild.children[7].innerText);
    if ((currentGroff > groff)&&(diceRoll < 49.5)&&(blue>=1)) {
        mittens = Number((mittens+smartty*1).toFixed(8));
        blue = 0;
        howsbet = 0;
        groff = parseFloat(currentGroff);
    }
    if ((currentGroff > groff)&&(diceRoll >= 49.5)&&(blue>=1)) {
        mittens = Number((mittens-smartty*1).toFixed(8));
        blue = 0;
        howsbet = 1;
        groff = parseFloat(currentGroff);
    }    
    
    var belance = Number((mittens*1).toFixed(8));
    var stupidhacker = parseFloat(((document.getElementById("pct_balance").value)*1).toFixed(8));
     
    if (stupidhacker>belance){
       console.log("anti hacker initiated");
       return;
       }
     if (stupidhacker<belance){
       console.log("anti hacker initiated");
       return;
       }
       
    /////see if balance changes correctly
    if ((belance == shadow)&&(howsbet<=0)){
        sillyhacker = 0;
    }else if ((belance == smokey)&&(howsbet>=1)){
        sillyhacker = 0;
    }else{
        sillyhacker = 1;
    }
    
    
    if (sillyhacker<=0){
        ///click minimum bet
        document.getElementById("b_min").click(); 
        ////set balance again 
        ////bet doubling  
        var jasper = parseFloat(belance);
        var mighty = ((Math.floor(jasper/tens))*tens);
        var mistery = ((Math.ceil(jasper/tens))*tens); 
        if ((jasper>=(bekance+tens))&&(jasper>(mighty+eights))){
             felix = parseFloat(mistery);
             cat = tabby;
             fart = 1;
             bomhr = 4;
             blowit = 8;
             norm = parseFloat(mighty-tens);    
             bekance = parseFloat(mighty);
             console.log("handbrake");
        }   
        if ((jasper>=(bekance+tens))&&(jasper<(mighty+eights))){
             cat = tabby;
             fart = 1;
             bomhr = 4;
             blowit = 8;
             felix = parseFloat(mighty); 
             norm = parseFloat(mighty-tens);    
             bekance = parseFloat(mighty);
             console.log("handbrake");
        } 
        if ((jasper>=(norm+(tens*17)))&&(jasper>(mighty+eights))){
             felix = parseFloat(mistery);
             cat = tabby;
             fart = 0;
             bomhr = 4;
             blowit = 8;  
             norm = parseFloat(mighty-tens);    
             console.log("handbrake");
        }
        if ((jasper>=(norm+(tens*17)))&&(jasper<(mighty+eights))){
             cat = tabby;
             fart = 0;
             bomhr = 4;
             blowit = 8; 
             norm = parseFloat(mighty-tens);  
             felix = parseFloat(mighty);      
             console.log("handbrake");
        } 
        if (((jasper-norm)<=(cat*2))&&(jasper>(mighty+eights))){
             felix = parseFloat(mistery);
             cat = tabby;
             fart = 0;
             bomhr = 4;
             blowit = 8;  
             console.log("handbrake");
        }
        if (((jasper-norm)<=(cat*2))&&(jasper<(mighty+eights))){
             cat = tabby;
             fart = 0;
             bomhr = 4;
             blowit = 8;
             felix = parseFloat(mighty);      
             console.log("handbrake");
        } 
        if ((jasper-norm<0)&&(jasper>(mighty+eights))){ 
             felix = parseFloat(mistery);
             cat = tabby;
             fart = 1;
             bomhr = 4;
             blowit = 8;  
             norm = parseFloat(mighty); 
             bekance = parseFloat(mighty); 
        } 
        if ((jasper-norm<0)&&(jasper<(mighty+eights))){ 
             cat = tabby;
             fart = 1;
             bomhr = 4;
             blowit = 8;  
             norm = parseFloat(mighty); 
             bekance = parseFloat(mighty); 
             felix = parseFloat(mighty); 
        }
        if ((jasper>(mighty+sevens))&&(jasper<(mighty+eights))&&(jasper!==felix)){
             cat = cat*2;
             felix = parseFloat(jasper);
             console.log("Doubling bet");
        }  
        if (cat>tabby){
             bomhr = 6;
             blowit = 6;
        }
        if ((jasper<(felix-(cat*bomhr)))||(jasper>(felix+(cat*blowit)))){
            console.log("over bets stopping");
            return;
        }
        ///set target

        if (jasper>=1440){
           console.log("winner winner chicken dinner");
           return;
        }
        ///set logs
        var garfield = ((mittens - whiskers) * 1).toFixed(8);
        console.log("Profit:", garfield);
        ////set chance
        document.getElementById("pct_chance").value = purr;
        ////set bet
        document.getElementById("pct_bet").value = ((cat * 1).toFixed(8));
        ///setup balance change
        smartty = parseFloat(cat);
        shadow = parseFloat((jasper+cat*1).toFixed(8));
        smokey = parseFloat((jasper-cat*1).toFixed(8));
        ///set after first bet
        paws = false; 
        sillyhacker = 1;
        blue = 1;
        /// click the bet
        document.getElementById("a_lo").click();
    }
setTimeout(runFelineBot, 50);
}

///start bot
runFelineBot();
