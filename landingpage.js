
function Redirecttov40list() {
  location.href = " table1.html";
}

document.getElementById("v40btn").addEventListener("click",Redirecttov40list)

function Redirecttov40nextlist() {
  location.href = " table2.html";
}

document.getElementById("v40nextbtn").addEventListener("click",Redirecttov40nextlist)

const communityguidlines = [

    [ "It's a no bullshit group - so no Good Morning sort of msgs or unwanted chatter." ],
    [  "We encourage everyone to invest in V40, V40Next, V200 companies because they have solid fundamentals based on chart pattern strategies taught by Vivek Sir - CWH, RHS, Knoxville, V20 etc." ],
    [ "If you are not sure about these, lookout for these on youtube - Vivek Singhal paid course - this is free now." ],
["You see a good market opportunity, you post about it."],
[ "You see some trend that can result in good profit - you post about it." ],
[ "Appreciate and thank others when they post a good opportunity and if learn something from them." ],
[ "Post if you have a different perspective than others but avoid arguing." ],
[ "We don't encourage putting stop loss."] ,
[ "some terminology - ATH - All time high" ],
[ "CWH - Cup with handle pattern"], 
["RHS - Reverse head and shoulder pattern" ],
[ "If you are not clear with anything, feel free to post - we don't judge each other." ],
["We have people starting up as well as some real experienced traders and ofcourse in between the two."] ,
["Learn and teach others." ],
["Avoid being a silent consumer."],
["For any concept - search for <concept name> vivek singhal on youtube like cwh pattern vivek singhal."],
["We all tend to invest in good companies only - no intraday, no F&O - only equity." ],
["We discuss stocks here w.r.t. fundamentals and technical - none of this is a buy, sell recommendation - take your own decisions."],
["Avoid having more than 5% in 1 stock even if you feel that this will become a multi-bagger."],
["You might have your own thought process or perspective, you can post about it with valid reasoning but you should always revolve around the guidelines." ],
["We are all educated, sensible folks and it should reflect here at all times."],
["Avoid chit chats as much as possible , use sensible language - it should not offend anyone."],
   
]


 const communityguidlineslist = document.getElementById('guidlines') ;
 
 for ( let i = 0; i < communityguidlines.length; i++) {

    const guidlineslist = document.createElement('li');

    const guidlines = document.createElement('guidlines');
    guidlines.textContent = communityguidlines[i];

    guidlineslist.appendChild(guidlines);
    communityguidlineslist.appendChild(guidlineslist);

 };



