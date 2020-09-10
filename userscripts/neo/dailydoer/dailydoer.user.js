
// ==UserScript==
// @name           Neopets - Dailies do-er
// @namespace      https://github.com/oligochrome
// @description    Automates tedious daily functions
// @author         oligochrome
// @copyright      2019 oligochrome
// @license        GNU GPL
// @version        1.1.6
// @language       en
// @match http://www.neopets.com/faerieland/springs.phtml
// @match http://www.neopets.com/wishing.phtml
// @match http://www.neopets.com/wishing.phtml?thanks=21&xt=
// @match http://www.neopets.com/games/lottery.phtml
// @match http://www.neopets.com/games/process_lottery.phtml
// @match http://www.neopets.com/medieval/turdlebetting.phtml
// @match http://www.neopets.com/medieval/turmaculus.phtml
// @match http://www.neopets.com/altador/council.phtml
// @match http://www.neopets.com/altador/council.phtml?prhv=a60ef8d87426ebb141660602ac9a77dd
// @match http://www.neopets.com/halloween/scratch.phtml
// @match http://www.neopets.com/halloween/scratch2.phtml
// @match http://www.neopets.com/water/fishing.phtml
// @match http://www.neopets.com/jelly/jelly.phtml
// @match http://www.neopets.com/worlds/geraptiku/tomb.phtml
// @match http://www.neopets.com/prehistoric/omelette.phtml
// @match http://www.neopets.com/halloween/applebobbing.phtml
// @match http://www.neopets.com/pirates/anchormanagement.phtml
// @match http://www.neopets.com/halloween/gravedanger/index.phtml
// @match http://www.neopets.com/winter/adventcalendar.phtml
// @match http://www.neopets.com/island/tombola.phtml
// @match http://www.neopets.com/medieval/guessmarrow.phtml
// @match http://www.neopets.com/medieval/wiseking.phtml
// @match http://www.neopets.com/medieval/grumpyking.phtml
// @match http://www.neopets.com/desert/fruit/index.phtml
// @match http://www.neopets.com/desert/shrine.phtml
// @match http://www.neopets.com/faerieland/tdmbgpop.phtml
// @match http://www.neopets.com/moon/meteor.phtml
// @match http://www.neopets.com/moon/meteor.phtml?getclose=1
// @match http://www.neopets.com/pirates/buriedtreasure/index.phtml
// @match http://www.neopets.com/pirates/buriedtreasure/buriedtreasure.phtml?
// @match http://www.neopets.com/medieval/symolhole.phtml
// @match http://www.neopets.com/bank.phtml
// @match http://www.neopets.com/market.phtml?type=till
// @match http://www.neopets.com/medieval/potatocounter.phtml
// @match http://www.neopets.com/faerieland/caverns/index.phtml
// @match http://www.neopets.com/shenkuu/lunar/?show=puzzle
// @grant          none
// ==/UserScript==

/*
*************************************************************************************
*                                                                                   *
*                                Update log                                         *
*                                                                                   *
*                                                                                   *
*************************************************************************************
1.1.1: 
19/12/2019 - Actually started logging these.
1.1.1 is a minor update, added bank interest script
1.1.2 Added shop till script, originally by diceroll123
1.1.3 removed brackets from bank interest section, so it should now work, fixed grumpy king as i have no idea how that broke.
      added potato counter script
1.1.4 added lunar temple and faerie caverns
1.1.5 moved all single line (e.g. window reassign or just click) scripts to top
1.1.6 Updated lunar script to include on match, updated script to select correct one and click
*/

/*
test edito for git
*/

var expr = window.location.href;
switch (expr) {
    case 'http://www.neopets.com/faerieland/springs.phtml':
        $("input[value='Heal my Pets']").click();
        break;
    case 'http://www.neopets.com/water/fishing.phtml':
        document.querySelector("input[value='Reel In Your Line']").click();
        break;
    
    case 'http://www.neopets.com/jelly/jelly.phtml':
        $("input[value='Grab some Jelly']").click();
        break;
    
    case 'http://www.neopets.com/worlds/geraptiku/tomb.phtml':
        window.location.assign("http://www.neopets.com/worlds/geraptiku/process_tomb.phtml")
        break;
    
    case 'http://www.neopets.com/prehistoric/omelette.phtml':
        $("input[value='Grab some Omelette']").click();
        break;
    
    case 'http://www.neopets.com/halloween/applebobbing.phtml?':
        case 'http://www.neopets.com/halloween/applebobbing.phtml':
        window.location.assign("http://www.neopets.com/halloween/applebobbing.phtml?bobbing=1")
        break;
		
		    case 'http://www.neopets.com/desert/fruit/index.phtml':
        $("input[value='Spin, spin, spin!']").click();
        break;
    
    case 'http://www.neopets.com/desert/shrine.phtml':
        $("input[value='Approach the Shrine']").click();
        break;
    
    case 'http://www.neopets.com/faerieland/tdmbgpop.phtml':
        $("input[value='Talk to the Plushie']").click();
        break;
    
    case 'http://www.neopets.com/moon/meteor.phtml':
        $("input[value='Take a chance']").click();
        break;
    
    case 'http://www.neopets.com/moon/meteor.phtml?getclose=1':
        $("input[value='Submit']").click();
        break;
    
    case 'http://www.neopets.com/pirates/buriedtreasure/index.phtml':
        $("input[value='Click to Play!  Only 300 NP a game!']").click();
        break;
    
		
    case 'http://www.neopets.com/wishing.phtml':
		
    case 'http://www.neopets.com/wishing.phtml?thanks=21&xt=':
        var bet = 21;
        var item = 'Halloween Y14 Goodie Bag';
        var bih = document.body.innerHTML;

        $("input[name='donation']").val(bet);
        $("input[name='wish']").val(item);

        if (bih.match('Wish Count: 7')) {
            console.log("All done")
        } else {
            document.querySelector("input[value='Make a Wish']").click();
        }
        break;

    case 'http://www.neopets.com/games/lottery.phtml':
        if (document.location.href.match('neopets.com/games/lottery.phtml')) {
            allForms = document.evaluate('//form[@action="process_lottery.phtml"]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
            for (var x = 0, thisForm; thisForm = allForms.snapshotItem(x); x++) {
                var pick, pickArray = new Array(0, 0, 0, 0, 0, 0);

                for (var y = 0; y < 6; y++) {
                    while (pickArray[y] == 0) {
                        pick = Math.ceil(Math.random() * 30);
                        for (var z = 0; z < y; z++) {
                            if (pick == pickArray[z]) {
                                pick = 0
                            }
                        }
                        pickArray[y] = pick;
                    }
                }

                function sortNumber(a, b) {
                    return a - b;
                }
                pickArray = pickArray.sort(sortNumber);

                for (var y = 0; y < 6; y++) {
                    thisForm.elements[y].value = pickArray[y];
                }
            }

            //   return;
            $("input[value='Buy a Lottery Ticket!']").click();
        }
        break;

    case 'http://www.neopets.com/games/process_lottery.phtml':
        if (document.body.innerHTML.match('check back tomorrow')) {
            document.links[0].href = 'http://www.neopets.com/games/lottery.phtml';
        }
        return;
        break;

    case 'http://www.neopets.com/medieval/turdlebetting.phtml':
        var turdle = document.getElementsByName('turdle')[0];
        if (turdle) {
            turdle.options.selectedIndex = Math.floor((Math.random() * 5) + 1);
        }
        $("input[name='bet']").val(1500);
        $("input[value='Place your Bet!']").click();
        break;

    case 'http://www.neopets.com/medieval/turmaculus.phtml':
        var turm = document.getElementsByName('wakeup')[0];
        if (turm) {
            turm.options.selectedIndex = Math.floor((Math.random() * 10) + 1);
        }
        document.querySelector("input[value='Wake Up!']").click();
        return;
        break;

    case 'http://www.neopets.com/altador/council.phtml':
        window.location.assign("http://www.neopets.com/altador/council.phtml?prhv=a60ef8d87426ebb141660602ac9a77dd")
        break;

    case 'http://www.neopets.com/altador/council.phtml?prhv=a60ef8d87426ebb141660602ac9a77dd':
        $("input[value='Collect your gift']").click();
        break;

    case 'http://www.neopets.com/halloween/scratch.phtml':
        /* This is such a dirty function. For some reason the ' would not escape with backslash... */
        var take = document.querySelector("#content > table > tbody > tr > td.content > center:nth-child(10) > form")
        take.innerHTML = '<form action=\"process_scratch.phtml\" method=\"post\" onsubmit=\"return one_submit();\"><input type=\"submit\" value=\"take\"></form>'
        $("input[value='take']").click();
        break;

    case 'http://www.neopets.com/halloween/scratch2.phtml':
        var scratchLoc = document.evaluate('count(//a[contains(@href, "type=scratch&loc=")])', document, null, XPathResult.ANY_TYPE, null);
        var a = document.evaluate('//a[contains(@href, "type=scratch&loc=")]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        if (a) {
            locClick = a.snapshotItem(Math.floor(Math.random() * scratchLoc.numberValue));
            locClick.click();
        }
        break;
    
    case 'http://www.neopets.com/pirates/anchormanagement.phtml':
        var el = document.getElementById('form-fire-cannon');
        el.submit();
        el.parentNode.removeChild(el);
        return false; // this is the code the page uses
        break;
    
        /* 
   Grave danger code
   todo:
   more functionality for selecting a petpet and sending them
*/
    case 'http://www.neopets.com/halloween/gravedanger/index.phtml':
        $("input[value='Adventure again!']").click();
        break;
    case 'http://www.neopets.com/winter/adventcalendar.phtml':
        $("input[value='Collect My Prize!!!']").click();
        break;
    case 'http://www.neopets.com/island/tombola.phtml':
        $("input[value='Play Tombola!']").click();
        break;
    case 'http://www.neopets.com/medieval/guessmarrow.phtml':
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        x = getRndInteger(200, 800);
        $("input[name=guess]").val(x);

        function timeout() {
            $("input[value='Guess!']").click();
        }
        window.setTimeout(timeout, 3000)
        break;
    case 'http://www.neopets.com/medieval/wiseking.phtml':
        var loc = document.location.href;

        if (loc.match('neopets.com/medieval/wiseking.phtml')) {
            for (var x = 0, thisForm; thisForm = document.forms[x]; x++) {
                if (thisForm.action.match('process_wiseking.phtml')) {
                    for (var y = 0, thisElement; thisElement = thisForm.elements[y]; y++) {
                        if (thisElement.name) {
                            thisElement.options.selectedIndex = Math.ceil(Math.random() * (thisElement.options.length - 1));
                        }
                    }
                }
            }
            $("input[value='Impress King Hagan with your wisdom!']").click();
          
        }
        break;
    
  case 'http://www.neopets.com/medieval/grumpyking.phtml' :
  for (var x = 0, thisForm; thisForm = document.forms[x]; x++){
    if (thisForm.action.match('grumpyking2.phtml')){
      selections = new Array('What', 'do', 'you do if', '', 'fierce', 'Peophins', '', 'has eaten too much', '', 'tin of olives')
//      selections = new Array('What', 'do', 'you do if', '', 'fierce', 'Peophins', '', 'has eaten too much', '', 'tin of olives', 'You', 'offering', 'a', 'tin of', '', 'what what what', '', '')
      for (var y = 0; y < 18; y++){
        for (var z = 0; z < thisForm.elements[y].options.length; z++){
          if (thisForm.elements[y].options[z].value == selections[y]){
            thisForm.elements[y].options.selectedIndex = z;
            break;
          }
          else {
            var thisChoice = Math.ceil(Math.random()*(thisForm.elements[y].options.length - 1));
            thisForm.elements[y].options.selectedIndex = thisChoice;
          }
        }
      }
    }
  }
  $("input[value='Tell the King your joke!']").click();

 break;
    

    case ('http://www.neopets.com/pirates/buriedtreasure/buriedtreasure.phtml?'):
        window.location.assign("http://www.neopets.com/pirates/buriedtreasure/buriedtreasure.phtml?" + (Math.round(Math.random() * 449) + 26) + "," + (Math.round(Math.random() * 454) + 31))
        break;

    case ('http://www.neopets.com/medieval/symolhole.phtml'):
        let goin = document.getElementsByName('goin')[0];
        if (goin) {
            goin.options.selectedIndex = Math.floor((Math.random() * 5));
        }
        $("input[value='ENTER!']").click();
        break;
    
        // new bank script start
    case 'http://www.neopets.com/bank.phtml' : // ooops added brackets, removed now
    if (document.querySelector("#content > table > tbody > tr > td.content > table:nth-child(14) > tbody > tr > td > div > table > tbody > tr:nth-child(2) > td > div").innerText == "You have already collected your interest today."){
break;
} else {
document.body.innerHTML += '<form id="bank" action="http://www.neopets.com/process_bank.phtml" method="post"><input type="hidden" name="type" value="interest"></form>';
document.getElementById("bank").submit();
break;
}
    // new bank script end
    
    // Shop till script originally by diceroll123
    // 
  case ('http://www.neopets.com/market.phtml?type=till') :
    var np = document.body.innerHTML.match(/You currently have <b>([0-9,\,]*) NP<\/b> in your till./)[1];
np = np.replace(/,/g, '');

if(np == 0) return;

$('[name="amount"]').val(np);
		break;
    // end shop till
    
    // start potato counter
  case 'http://www.neopets.com/medieval/potatocounter.phtml' :
let potato = document.querySelector("#content > table > tbody > tr > td.content > p:nth-child(5) > table > tbody");
if (potato) {
potato = potato.getElementsByTagName('img').length
$("input[name=guess]").val(x);
$("input[value='Guess!']").click();
$("input[value='Play Again']").click();
} else {
break;
}
  // end potato counter
    
    // // // // Cheeseroller
  case 'http://www.neopets.com/medieval/cheeseroller.phtml' :
  var cheese_name = document.getElementsByName('cheese_name')[0];
  if (cheese_name){
    cheese_name.parentNode.innerHTML = '<p></p>\
<select name="cheese_name" style="font-size: 12px;">\
<option value="Spicy Juppie">Spicy Juppie Cheese - 150np</option>\
<option value="Smoked Snorkle">Smoked Snorkle Cheese - 300np</option>\
<option value="Triple Mustard">Triple Mustard Cheese - 450np</option>\
<option value="Honey">Honey Cheese - 600np</option>\
<option value="Big Beefy">Big Beefy Cheese - 750np</option>\
<option value="Purple Spotted">Purple Spotted Cheese - 900np</option>\
<option value="Brain">Brain Cheese - 1050np</option>\
<option value="Alkenore">Alkenore Cheese - 1200np</option>\
<option value="Mutated">Mutated Cheese - 1350np</option>\
<option value="Bubbling Blueberry">Bubbling Blueberry Cheese - 1500np</option>\
<option value="Tyrannian Dung">Tyrannian Dung Cheese - 1650np</option>\
<option value="Quadruple Fudge">Quadruple Fudge Cheese - 1800np</option>\
<option value="Brick">Brick Cheese - 1950np</option>\
<option value="Gooey Snot">Gooey Snot Cheese - 2100np</option>\
<option value="Peppermint">Peppermint Cheese - 2250np</option>\
<option value="Overgrown">Overgrown Cheese - 2400np</option>\
<option value="Heavy Bark">Heavy Bark Cheese - 2550np</option>\
<option value="Warty Blue">Warty Blue Cheese - 2700np</option>\
<option value="Fragrant Ummagcheese">Fragrant Ummagcheese - 2850np</option>\
<option value="Furry Chocomint">Furry Chocomint Cheese - 3000np</option>\
<option value="Mummified">Mummified Cheese - 3150np</option>\
<option value="Nimmo Tube">Nimmo Tube Cheese - 3300np</option>\
<option value="Space">Space Cheese - 3450np</option>\
<option value="Angelpuss">Angelpuss Cheese - 3600np</option>\
<option value="Meaty Cheese">Meaty Cheese - 3750np</option>\
<option value="Potato Cheese">Potato Cheese - 3900np</option>\
<option value="Very Stinky Cheese">Very Stinky Cheese - 4050np</option>\
<option value="Fishy Cheese">Fishy Cheese - 4200np</option>\
<option value="Shiny Golden Cheese">Shiny Golden Cheese - 4350np</option>\
</select> <input name="type" value="buy" type="hidden"> <input value="Submit" type="submit">';

    var mycheese = GM_getValue('cheese', '0');
    cheese_name = document.getElementsByName('cheese_name')[0];
    cheese_name.selectedIndex = mycheese;
    
    cheese_name.addEventListener('change',function(){
      GM_setValue('cheese', cheese_name.selectedIndex);
    }, false);
  }
  function changeImg(item){
    thisImg.src = 'http://images.neopets.com/items/'+item+'.gif';
  }    
  allImgs = document.evaluate('//img[@width="80"]',document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
  for (var x = 0, thisImg; thisImg = allImgs.snapshotItem(x); x++){
    if (thisImg.src.match('med_cheese_24')){changeImg('mfo_head_cheese');}
    else if (thisImg.src.match('med_cheese_25')){changeImg('mfo_cheese_potato');}
    else if (thisImg.src.match('med_cheese_26')){changeImg('mfo_cheese_limburger');}
    else if (thisImg.src.match('med_cheese_27')){changeImg('mfo_cheese_fishy');}
    else if (thisImg.src.match('med_cheese_28')){changeImg('mfo_cheese_golden');}
  }
  break;

    // lunar temple start
    // original script by nungryscpro 
  case 'http://www.neopets.com/shenkuu/lunar/?show=puzzle' :
    thisForm = document.getElementsByName('submitted')[0].parentNode;
if (thisForm){
  var moon = Math.round(document.body.innerHTML.match(/angleKreludor=(\d+)/)[1]/22.5 + 8) % 16;
newElement = document.createElement("div");
newElement.innerHTML='<div style="padding:2px; font-weight:bold; font-size:11pt; text-align:center; background-color:white; color:black;"> The correct lunar phase is:<br><br><img src="http://images.neopets.com/shenkuu/lunar/phases/'+ moon +'.gif" border="0" width="60" height="60"><br><br><font class="sf" color="#3a84b0">(Click the already selected circle to submit your answer.)</font></div><br>';
  thisForm.parentNode.insertBefore(newElement, thisForm);
  thisForm.getElementsByTagName('input')[moon + 1].checked = true;
	let getChecked = document.querySelectorAll('input:checked');
getChecked.item(0).click();
}
    break;
    
    // start faerie caverns
// this could really do with improving :S
case 'http://www.neopets.com/faerieland/caverns/index.phtml' :
if (document.body.innerHTML.match("You gasp as you enter a room lit with candles. You've found the treasure!"))
{
$("input[value='Click to see what you've found']").click();
}
if (document.body.innerHTML.match("Welcome to the Faerie Caverns."))
{
$("input[value='Enter']").click();
}
if (document.body.innerHTML.match("Which way do you go?"))
{
$("input[name = 'go" + (Math.random() > 0.85 ? "Right" : "Left") + "']").click();
}
if (document.body.innerHTML.match("and are faced with another choice."))
{
$("input[name = 'go" + (Math.random() > 0.85 ? "Right" : "Left") + "']").click();
}
if (document.body.innerHTML.match("You have followed the winding passages deep into the cavern"))
{
$("input[name = 'go" + (Math.random() > 0.85 ? "Right" : "Left") + "']").click();
}
break;
// end faerie caverns
    
    default:
        console.log(expr);
}


