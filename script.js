Cookies.set('datelog', 'true', { expires: 7 , domain: 'jojowanuby.github.io/Test/' });

var myCookie = Cookies.get('datelog');

var n = 1;
window.onload = function(){
n++;
return this.n;
//Cookie werden nur im firefox angezeigt, chrom iterpretiert es als unknown
}

window.onload = function() {
localStorage.setItem("Date"+n ,datetime)
}

//auch wenn man in console myCookie eingiebt leider value als undefined!!!!!
console.log(myCookie);
console.log(localStorage)AAA

//Cookie Zeigt leider value als undefined!!!!!
Cookies.set('datetoday', datetime, { expires: 7 },{ domain: 'jojowanuby.github.io/Test/' });


// For todays date;
Date.prototype.today = function () { 
  return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
   return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

var datetime = "LastSync: " + new Date().today() + " @ " + new Date().timeNow();
