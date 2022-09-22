
          // [Q.1]
  let pre = document.getElementById('prank')
  console.log(pre)
//  output:
//  <p id="test" class="para"
//   style="border:1px solid blue">I am para</p>
           // [Q.2]
  let org = document.getElementsByClassName('shrin')
  console.log(org)

// output: HTMLCollection(1)
// 0: p.test1
             // [Q.3]
 let src = document.getElementsByTagName('pillo')
 console.log(src)

// output :HTMLCollection(1)
// 0: p.test1
              // [Q.4]

 let h1 = document.getElementById("yello")
 h1.style.backgroundColor="pink"
 setTimeout(()=>{
   h1.style.color="red"
   h1.style.fontSize="20px"
   h1.style.backgroundColor="yellow"
   h1.innerText="hello world"
 },3000)

// output:
// hello world
                // [Q.6]
    
  let myFunction=function(){
       let s=document.getElementsByClassName('card')
       let btn=document.getElementsByClassName("btn")[0]
       s[0].style.flexDirection = "row"
  }              
                // [Q.7]
    let value = document.querySelector("h1");
      p =value.id="heading"
      console.log(value);
     setTimeout(() => {
       value.style.color="red"; 
       value.style.fontSize="40px"

     }, 3000);
   
               // [Q.8]
 let s= document.getElementById("bton")
 s.style.color="purple"

     function change(){
      let s= document.getElementById("bton")
      s.style.color="red";
      s.innerText="welcome to Elevation academy"
     }
              // [Q.9]
  setInterval(displayclock,500);
  function displayclock(){
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var Sec = time.getSeconds();
    if(hrs >12){
      hrs = hrs -12;
    }
    if(hrs==0){
      }
      hrs=12;
  }
    document.getElementById('clock').innerHTML= hrs + ':' + min + ':' +Sec;

             // [Q.10]

  let result = document.querySelector('h2')
  let selection = document.getElementById('list')
  selection.addEventListener('change',()=>{
   result.innerText= selection.options[selection.selectedIndex].value;
   console.log(selection.selectedIndex);
  });
    
//  function change(){
//    var x = document.getElementById("list");
//    var p = x.value;
//    console.log(p);
//  }
//  change(); }

             // [Q.11]

 function check(){
   let msg1 = document.getElementById("message1");
   let regex1 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   let email = document.getElementById("email").value;
   let lastVal = email.slice(-14);
   let result1 = regex1.test(email);
   if(result1 && lastVal==="@prepbytes.com"){
   msg1.innerText = " Email is Valid"
   }
   else{
   msg1.innerText = " Email is InValid"
   }
   let msg2 = document.getElementById("message2");
   let regex2 = /^[9]+[1]+[0-9]{8}$/;
   let phone = document.getElementById("phone").value;
   let result2 = regex2.test(phone);
   if(result2){
   msg2.innerText = " Phone Number is Valid"
   }
   else{
   msg2.innerText = " Phone Number is Invalid"
   }
   let msg3 = document.getElementById("message3");
   let year = document.getElementById("birthYear").value;
   let year1 = parseInt(year.slice(0,4));
   if(year1 > 1995){
   msg3.innerText = " Birth Year is valid"
   }
   else{
   msg3.innerText = " Birth Year is Invalid"
   }
    }