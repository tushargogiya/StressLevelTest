// let btn=document.getElementsByClassName("submit")
submit=()=>{
  console.log("hii");
var l1 = document.getElementById("defaultCheck1");
var l2 = document.getElementById("defaultCheck2");
var l3 = document.getElementById("defaultCheck3");
var l4 = document.getElementById("defaultCheck4");

var l5 = document.getElementById("defaultCheck5");
var l6 = document.getElementById("defaultCheck6");
var l7 = document.getElementById("defaultCheck7");
var l8 = document.getElementById("defaultCheck8");

var l9 = document.getElementById("defaultCheck9");
var l10 = document.getElementById("defaultCheck10");
var l11 = document.getElementById("defaultCheck11");
var l12 = document.getElementById("defaultCheck12");

var l13= document.getElementById("defaultCheck13");
var l14 = document.getElementById("defaultCheck14");
var l15 = document.getElementById("defaultCheck15");
var l16= document.getElementById("defaultCheck16");

var l17 = document.getElementById("defaultCheck17");
var l18= document.getElementById("defaultCheck18");
var l19= document.getElementById("defaultCheck19");
var l20= document.getElementById("defaultCheck20");

var l21 = document.getElementById("defaultCheck21");
var l22 = document.getElementById("defaultCheck22");
var l23 = document.getElementById("defaultCheck23");
var l24 = document.getElementById("defaultCheck24");

var l25 = document.getElementById("defaultCheck25");
var l26 = document.getElementById("defaultCheck26");
var l27 = document.getElementById("defaultCheck27");
var l28= document.getElementById("defaultCheck28");

var l29 = document.getElementById("defaultCheck29");
var l30= document.getElementById("defaultCheck30");
var l31= document.getElementById("defaultCheck31");
var l32 = document.getElementById("defaultCheck32");

var l33 = document.getElementById("defaultCheck33");
var l34= document.getElementById("defaultCheck34");
var l35 = document.getElementById("defaultCheck35");
var l36 = document.getElementById("defaultCheck36");

var l37= document.getElementById("defaultCheck37");
var l38= document.getElementById("defaultCheck38");
var l39= document.getElementById("defaultCheck39");
var l40= document.getElementById("defaultCheck40");

var l41 = document.getElementById("defaultCheck41");
var l42 = document.getElementById("defaultCheck42");
var l43 = document.getElementById("defaultCheck43");
var l44 = document.getElementById("defaultCheck44");

var l45 = document.getElementById("defaultCheck45");
var l46= document.getElementById("defaultCheck46");
var l47 = document.getElementById("defaultCheck47");
var l48 = document.getElementById("defaultCheck48");

var l49= document.getElementById("defaultCheck49");
var l50 = document.getElementById("defaultCheck50");
var l51= document.getElementById("defaultCheck51");
var l52= document.getElementById("defaultCheck52");






var nev=0;
let som=0;
let of=0;
let al=0; 
if (l1.checked == true){ nev++;  } 
if (l2.checked == true){ som++;  }
if (l3.checked == true){ of++;  } 
if (l4.checked == true){ al++;  }

if (l5.checked == true){ nev++;  } 
if (l6.checked == true){ som++;  }
if (l7.checked == true){ of++;  } 
if (l8.checked == true){ al++;  }

if (l9.checked == true){ nev++;  } 
if (l10.checked == true){ som++;  }
if (l11.checked == true){ of++;  } 
if (l12.checked == true){ al++;  }

if (l13.checked == true){ nev++;  } 
if (l14.checked == true){ som++;  }
if (l15.checked == true){ of++;  } 
if (l16.checked == true){ al++;  }

if (l17.checked == true){ nev++;  } 
if (l18.checked == true){ som++;  }
if (l19.checked == true){ of++;  } 
if (l20.checked == true){ al++;  }

if (l21.checked == true){ nev++;  } 
if (l22.checked == true){ som++;  }
if (l23.checked == true){ of++;  } 
if (l24.checked == true){ al++;  }

if (l25.checked == true){ nev++;  } 
if (l26.checked == true){ som++;  }
if (l27.checked == true){ of++;  } 
if (l28.checked == true){ al++;  }

if (l29.checked == true){ nev++;  } 
if (l30.checked == true){ som++;  }
if (l31.checked == true){ of++;  } 
if (l32.checked == true){ al++;  }

if (l33.checked == true){ nev++;  } 
if (l34.checked == true){ som++;  }
if (l35.checked == true){ of++;  } 
if (l36.checked == true){ al++;  }

if (l37.checked == true){ nev++;  } 
if (l38.checked == true){ som++;  }
if (l39.checked == true){ of++;  } 
if (l40.checked == true){ al++;  }

if (l41.checked == true){ nev++;  } 
if (l42.checked == true){ som++;  }
if (l43.checked == true){ of++;  } 
if (l44.checked == true){ al++;  }

if (l45.checked == true){ nev++;  } 
if (l46.checked == true){ som++;  }
if (l47.checked == true){ of++;  } 
if (l48.checked == true){ al++;  }

if (l49.checked == true){ nev++;  } 
if (l50.checked == true){ som++;  }
if (l51.checked == true){ of++;  } 
if (l52.checked == true){ al++;  }


s1=nev/13*100;
s2=som/13*100;
s3=of/13*100;
s4=al/13*100;

// let stress=s1+s2+s3+s4
// console.log(stress);
let str=document.getElementById('area');

let str1=document.getElementById('str');


if(nev>=11)
{
  str.value="You are Fit No Need to go doctor"
str1.value='10%';
}
if(nev>=9)
{
str.value="You are Fit No Need to go doctor"
str1.value='20%';
}
else if(nev>=6 && nev<9)
{
str.value="You are Fit No Need to go doctor but do some meditation and exercise"
str1.value='40%';
}
else if(nev>=4 && nev<6)
{
str.value="You are Fit No Need to go doctor but take care of you"

str1.value='60%';
}
else if(nev>=1 && nev<4)
{
str.value="You are not Fit Need to go doctor"
str1.value='80+%';
}
else
{
str.value="please fill details with attention"
str1.value='error';
}


}
submit1=()=>{
location.reload();
}

