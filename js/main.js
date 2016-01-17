function getInfo() {

var sign = document.getElementById("sign").value;

var zodiacSigns = {Aries:"This is aries details", Leo:"This is Leo's details", Sagittarius:"This is Sagittarius details",Taurus:"This is Taurus details", Virgo:"This is virgo details", Capricorn:"This is capricon details", 
 Gemini:"This is Gemini details", Libra:"This is Libra details", Aquarius:"This is Aquarius details",
  Cancer:"This is cancer details", Scorpio:"This is scorpio details" , Pisces:"This is pisces details"};


document.getElementById("demo").innerHTML = zodiacSigns[sign];

}

