

var mySign = "Pices";
var birthMonth = "March";
var birthday = 17;
var luckyNumber = 3.0;
var horoscope = "Trust your intuition and embrace new opportunities.";
var believesInAstrology = false;

document.getElementById("sign").innerHTML = mySign;
document.querySelector(".birthday").innerHTML += `${birthMonth} ${birthday}th`;
document.querySelector(".luckyNum").innerHTML += luckyNumber;
const paras = document.querySelectorAll("p");
paras[0].innerHTML = horoscope;
paras[1].innerHTML = `<strong>${believesInAstrology}</strong>`;


var myRating = 4;
var partnerRating = 3;
var averageRating = (myRating + partnerRating) / 2;

paras[2].innerHTML = `
    My Mood rating as a Pices is ${myRating} out of 5. <br/>
    Today's mood rating for Virgo: ${partnerRating} out of 5. <br/>
    The average mood rating for Virgo, Pices, and Taurus is: 
${averageRating}
`;


var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
var mysign = signs[2];
var partner1 = signs[8];
var partner2 = signs[4];


paras[3].innerHTML = `My zodiac sign is ${mysign}`;
paras[4].innerHTML = `Devin's zodiac sign is ${partner1}`;
paras[5].innerHTML = `Emilio's zodiac sign is ${partner2}`;



var horoscopes = [
  "Today is a day for new beginnings. Embrace change and seize opportunities.",
  "Your determination will lead to success today. Stay focused on your goals.",
  "Communication is key today. Express yourself clearly and listen to others.",
  "Trust your intuition. It will guide you in making the right decisions.",
  "Your creativity shines today. Use it to inspire and lead others.",
  "Pay attention to the details. Your meticulous work will pay off.",
  "Balance is essential. Find harmony in all aspects of your life.",
  "Embrace transformation. Let go of what no longer serves you.",
  "Adventure awaits. Explore new horizons and expand your horizons.",
  "Hard work leads to success. Keep pushing toward your goals.",
  "Your unique perspective is an asset. Share your ideas with others.",
  "Trust your emotions. They will guide you in making the right choices."
];


horoscopes[8] = "Adventure awaits. Open new doors and expand your horizons.";
var devinHoro = horoscopes[8];
var ethanHoro = horoscopes[2];
var emilioHoro = horoscopes[4];


paras[3].innerHTML += `<br> My horoscope is ${devinHoro}`;
paras[4].innerHTML += `<br> Devin's horoscope is ${ethanHoro}`;
paras[5].innerHTML += `<br> Emilio's horoscope is ${emilioHoro}`;


