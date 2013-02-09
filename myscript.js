var searchFor = RegExp(['\bshe\b|\bhe\b|\bms\b|\bmrs\b|\bmr\b|woman|\bman\b|women|\bmen\b|\bfemale',
    '|\bmale\b|\bmales\b|\bgirl\b|\bboy\b|\bgirls\b|\bboys\b|\bgirly\b|\bboyish\b|\bgirlhood\b',
    '|\bboyhood\b|\bgirlfriend|\bboyfriend|\bwife|\bhusband\b|\bwives\b|\bhusbands\b|daughter',
    '|\bson\b|\bsons\b|\bsister|\bbrother|\bmother|grandmother|godmother|stepmother|father|\baunt\b',
    '|\buncle\b|\baunts\b|\buncles\b|\bniece\b|\bnephew\b|\bnieces\b|\bnephews\b|\bherself\b',
    '|\bhimself\b|\blady|\bladies\b|\bgentlemen\b|\bgentleman\b|\bmom\b|\bdad\b|\bmoms\b|\bdads\b',
    '|mommy|daddy|mommies|daddies|ladiez|\bmenz\b|\bmanly\b|\bmanliness\b|\bmanhood\b|\bmankind\b',
    '|femin|mascul|\bguy\b|\bguys\b|\bdude\b|\bdudes\b|\bdudely\b|\bmaternity\b|\bpaternity\b',
    '|\bmaternal\b|\bpaternal\b|\bmatroniz|\bpatroniz|klansman|airman|airmen|alderman|aldermen|anchorman',
    '|anchormen|assemblyman|assemblymen|bogeyman|bogeymen|bondsman|bondsmen|businessman|businessmen',
    '|cameraman|cameramen|caveman|cavemen|chairman|clergyman|congressman|congressmen|councilman|councilmen',
    '|countryman|countrymen|craftsman|craftsmen|doorman|doormen|fireman|firemen|fisherman|fishermen|foreman',
    '|foremen|freshman|freshmen|garbageman|garbagemen|handyman|handymen|hangman|henchman|henchmen|journeyman',
    '|kinsman|kinsmen|layman|laymen|madman|madmen|mailman|mailmen|marksman|middleman|middlemen|milkman|milkmen',
    '|nobleman|noblemen|ombudsman|policeman|policemen|postman|postmen|repairman|repairmen|salesman|salesmen',
    '|sandman|serviceman|servicemen|showman|snowman|spaceman|spacemen|spokesman|spokesmen|sportsman|statesman',
    '|superman|supermen|unman\b|watchman|watchmen|weatherman|weathermen|workman|workmen|hero\b|heroes|heroine\b',
    '|heroines|\bmaleness|whitemaleness|misogyn|misandr|dudebro|laydeez|d00dz|\bfem\b|\bradfem\b|\bwidow\b|\bwidower\b',
    '|\bfiance\b|\bfiancee\b|\bpapa\b|\bmama\b|\bpoppa\b|\bmomma\b|\bgod\b|\bgoddess\b|\bbride|\bgroom|\bgodliness\b',
    '|\bgodhead\b|\bgodhood\b|\bgodly\b|\bgal\b|\bsir\b|\bma\'am\b|\bgrandson|\bpatriar|\bmatriar',
    '|stepbrother|stepsister|\blord\b|\blords\b|\bking\b|\bkings\b|\bqueen\b|\bqueens\b|\bpriest\b|\bpriests\b',
    '|\bpriestess\b|\bpriestesses\b|\bprince\b|\bprinces\b|\bprincess\b|\bprincesses\b|\bemperor\b|\bemperors\b',
    '|\bempress\b|\bempresses\b|\bgirlier\b|\bgirliest\b|\bdudelier\b|\bdudeliest\b|\bactor\b|\bactors\b|\bactress\b',
    '|\bactresses|\bwaiter|\bwaitress|\bgrandma\b|\bgrandmas\b|\bgrandpa|\bgramps\b|\bbloke/gi'].join(''));

var map = {
  "she" : "he",
  "he" : "she",
  "ms" : "mr",
  "mrs" : "mr",
  "mr" : "ms",
  "woman" : "man",
  "man" : "woman",
  "women" : "men",
  "men" : "women",
  "female" : "male",
  "male" : "female",
  "males" : "females",
  "girl" : "boy",
  "boy" : "girl",
  "girls" : "boys",
  "boys" : "girls",
  "girly" : "boyish",
  "boyish" : "girly",
  "girlhood" : "boyhood",
  "boyhood" : "girlhood",
  "girlfriend" : "boyfriend",
  "boyfriend" : "girlfriend",
  "wife" : "husband",
  "husband" : "wife",
  "wives" : "husbands",
  "husbands" : "wives",
  "daughter" : "son",
  "son" : "daughter",
  "sons" : "daughters",
  "sister" : "brother",
  "brother" : "sister",
  "mother" : "father",
  "father" : "mother",
  "grandmother" : "grandfather",
  "godmother" : "godfather",
  "stepmother" : "stepfather",
  "aunt" : "uncle",
  "uncle" : "aunt",
  "aunts" : "uncles",
  "uncles" : "aunts",
  "niece" : "nephew",
  "nephew" : "niece",
  "nieces" : "nephews",
  "nephews" : "nieces",
  "herself" : "himself",
  "himself" : "herself",
  "ladies" : "gentlemen",
  "gentlemen" : "ladies",
  "lady" : "gentleman",
  "gentleman" : "lady",
  "mom" : "dad",
  "dad" : "mom",
  "moms" : "dads",
  "dads" : "moms",
  "mommy" : "daddy",
  "daddy" : "mommy",
  "mommies" : "daddies",
  "daddies" : "mommies",
  "ladiez" : "menz",
  "menz" : "ladiez",
  "manly" : "womanly",
  "manliness" : "womanliness",
  "manhood" : "womanhood",
  "mankind" : "womankind",
  "femin" : "mascul",
  "mascul" : "femin",
  "guy" : "gal",
  "guys" : "gals",
  "dude" : "girl",
  "dudes" : "girls",
  "dudely" : "girly",
  "maternal" : "paternal",
  "paternal" : "maternal",
  "maternity" : "paternity",
  "paternity" : "maternity",
  "matroniz" : "patroniz",
  "patroniz" : "matroniz",
  "klansman" : "klanswoman",
  "airman" : "airwoman",
  "airmen" : "airwomen",
  "alderman" : "alderwoman",
  "aldermen" : "alderwomen",
  "anchorman" : "anchorwoman",
  "anchormen" : "anchorwomen",
  "assemblyman" : "assemblywoman",
  "assemblymen" : "assemblywomen",
  "bogeyman" : "bogeywoman",
  "bogeymen" : "bogeywomen",
  "bondsman" : "bondswoman",
  "bondsmen" : "bondswomen",
  "businessman" : "businesswoman",
  "businessmen" : "businesswomen",
  "cameraman" : "camerawoman",
  "cameramen" : "camerawomen",
  "caveman" : "cavewoman",
  "cavemen" : "cavewomen",
  "chairman" : "chairwoman",
  "chairmen" : "chairwomen",
  "clergyman" : "clergywoman",
  "clergymen" : "clergywomen",
  "congressman" : "congresswoman",
  "congressmen" : "congresswomen",
  "councilman" : "councilwoman",
  "councilmen" : "councilwomen",
  "countryman" : "countrywoman",
  "countrymen" : "countrywomen",
  "craftsman" : "craftswoman",
  "craftsmen" : "craftswomen",
  "doorman" : "doorwoman",
  "doormen" : "doorwomen",
  "fireman" : "firewoman",
  "firemen" : "firewomen",
  "fisherman" : "fisherwoman",
  "fishermen" : "fisherwomen",
  "foreman" : "forewoman",
  "foremen" : "forewomen",
  "freshman" : "freshwoman",
  "freshmen" : "freshwomen",
  "garbageman" : "garbagewoman",
  "garbagemen" : "garbagewomen",
  "handyman" : "handywoman",
  "handymen" : "handywomen",
  "hangman" : "hangwoman",
  "hangmen" : "hangwomen",
  "henchman" : "henchwoman",
  "henchmen" : "henchwomen",
  "journeyman" : "journeywoman",
  "journeymen" : "journeywomen",
  "kinsman" : "kinswoman",
  "kinsmen" : "kinswomen",
  "layman" : "laywoman",
  "laymen" : "laywomen",
  "madman" : "madwoman",
  "madmen" : "madwomen",
  "mailman" : "mailwoman",
  "mailmen" : "mailwomen",
  "marksman" : "markswoman",
  "marksmen" : "markswomen",
  "middleman" : "middlewoman",
  "middlemen" : "middlewomen",
  "milkman" : "milkwoman",
  "milkmen" : "milkwomen",
  "nobleman" : "noblewoman",
  "noblemen" : "noblewomen",
  "ombudsman" : "ombudswoman",
  "ombudsmen" : "ombudswomen",
  "policeman" : "policewoman",
  "policemen" : "policewomen",
  "postman" : "postwoman",
  "postmen" : "postwomen",
  "repairman" : "repairwoman",
  "repairmen" : "repairwomen",
  "salesman" : "saleswoman",
  "salesmen" : "saleswomen",
  "sandman" : "sandwoman",
  "sandmen" : "sandwomen",
  "serviceman" : "servicewoman",
  "servicemen" : "servicewomen",
  "showman" : "showwoman",
  "showmen" : "showwomen",
  "spaceman" : "spacewoman",
  "spacemen" : "spacewomen",
  "spokesman" : "spokeswoman",
  "spokesmen" : "spokeswomen",
  "sportsman" : "sportswoman",
  "sportsmen" : "sportswomen",
  "statesman" : "stateswoman",
  "statesmen" : "stateswomen",
  "superman" : "superwoman",
  "supermen" : "superwomen",
  "unman" : "unwoman",
  "watchman" : "watchwoman",
  "watchmen" : "watchwomen",
  "weatherman" : "weatherwoman",
  "weathermen" : "weatherwomen",
  "workman" : "workwoman",
  "workmen" : "workwomen",
  "hero" : "heroine",
  "heroes" : "heroines",
  "heroine" : "hero",
  "heroines" : "heroes",
  "maleness" : "femaleness",
  "whitemaleness" : "whitefemaleness",
  "misogyn" : "misandr",
  "misandr" : "misogyn",
  "dudebro" : "galpal",
  "laydeez" : "d00dz",
  "d00dz" : "laydeez",
  "fem" : "masc",
  "radfem" : "radmasc",
  "widow" : "widower",
  "widower" : "widow",
  "fiance" : "fiancee",
  "fiancee" : "fiance",
  "papa" : "mama",
  "mama" : "papa",
  "poppa" : "momma",
  "momma" : "poppa",
  "god" : "goddess",
  "godliness" : "goddessliness",
  "godhead" : "goddesshead",
  "godhood" : "goddesshood",
  "godly" : "goddessly",
  "goddess" : "god",
  "bride" : "groom",
  "groom" : "bride",
  "gal" : "fellow",
  "sir" : "ma'am",
  "ma'am" : "sir",
  "grandson" : "granddaughter",
  "patriar" : "matriar",
  "matriar" : "patriar",
  "stepsister" : "stepbrother",
  "stepbrother" : "stepsister",
  "lord" : "lady",
  "lords" : "ladies",
  "king" : "queen",
  "kings" : "queens",
  "queen" : "king",
  "queens" : "kings",
  "priest" : "priestess",
  "priests" : "priestesses",
  "priestess" : "priest",
  "priestesses" : "priests",
  "prince" : "princess",
  "princes" : "princesses",
  "princess" : "prince",
  "princesses" : "princes",
  "emperor" : "empress",
  "emperors" : "empresses",
  "empress" : "emperor",
  "empresses" : "emperors",
  "girlier" : "dudelier",
  "girliest" : "dudeliest",
  "dudelier" : "girlier",
  "dudeliest" : "girliest",
  "actor" : "actress",
  "actors" : "actresses",
  "actress" : "actor",
  "actresses" : "actors",
  "waiter" : "waitress",
  "waitress" : "waiter",
  "grandma" : "grandpa",
  "grandmas" : "grandpas",
  "grandpa" : "grandma",
  "gramps" : "grandma",
  "bloke" : "girl"
}

function capitalize(word) {
  var first = word.charAt(0);
  var rest = word.slice(1);

  return first.toUpperCase() + rest.toLowerCase();
}

function matchCase(replacement, old_word) {
  var first = old_word.charAt(0);
  var second = old_word.charAt(1);

  if (/[a-z]/.test(first)) return replacement.toLowerCase();
  if (/[A-Z]/.test(second)) return replacement.toUpperCase();

  return capitalize(replacement);
}

function swapWord(word) {
  var replacement = word.toLowerCase().replace(searchFor, function(match) {
    return map[match];
  });
  return replacement ? matchCase(replacement, word) : word;
}

function genderswap(text) {
  return text
    .replace(/[a-z][\w']*/gi, swapWord)
    .replace(/(\S+\s+)?\b(hers?|hi[ms])\b(\s+\S+)?/gim, function($0) {
      return (/hers?/.test($0) ? translateHer : translateHim)($0);
    });
  ;
}

function translateHim(text) {
  return text
    .replace(/\bhim\b/g,"her")
    .replace(/\bhis(?=\.|\,|\;|\:|\)|\]|\)|\?)/g,"hers")
    .replace(/\bhis\b/g,"her")
    .replace(/\bHim\b/g,"Her")
    .replace(/\bHis(?=\.|\,|\;|\:)/g,"Hers")
    .replace(/\bHis\b/g,"Her")
  ;
}

function translateHer(text) {
  return text
    .replace(/\bher\b(?=\.|\,|\;|\:|\]|\}|\)|\?)/g, 'him')
    .replace(/\bher\sher\b/g, "him his")
    .replace(/\bher\b(?=\s(?=a\b|an\b|the\b|some\b|any\b|0|1|2|3|4|5|6|7|8|9|one|two|three|thirt|four|five|fift|six|seven|eight|nine|ten|eleven|twelve|twenty))/g, "him")
    .replace(/\bher\b(?=\s(?=aboard|about|above|across|after|against|along|amid|among|around|as|at|before|behind|below|beneath|beside|besides|between|beyond|but\b|by\b|concerning|considering|despite|down|during|except|excepting|excluding|following|for|from|in\b|inside|into|like|minus|of\b|off\b|often|on\b|onto|opposite|outside|over|past|per\b|plus|regarding|since\b|than\b|through|to\b|toward|towards|under\b|underneath|unlike|until|up\b|upon|versus|via\b|with\b|within|without|not|and\b|feel\b))/g,"him")
    .replace(/\bit\sher\sall\b/g,"it his all")
    .replace(/\bher\sall\b/g,"him all")
    .replace(/\bher\b/g,"his")
    .replace(/\bhers\b/g,"his")
    .replace(/\bHer\b(?=\.|\,|\;|\:|\]|\}|\)|\?)/g,"Him")
    .replace(/\bHer\sher\b/g,"Him His")
    .replace(/\bHer\b(?=\s(?=a\b|an\b|the\b|some\b|any\b|many\b|0|1|2|3|4|5|6|7|8|9|one|two|three|thirt|four|five|fift|six|seven|eight|nine|ten|eleven|twelve|twenty))/g, "Him")
    .replace(/\bHer\b(?=\s(?=aboard|about|above|across|after|against|along|amid|among|around|as|at|before|behind|below|beneath|beside|besides|between|beyond|but\b|by\b|concerning|considering|despite|down|during|except|excepting|excluding|following|for|from|in\b|inside|into|like|minus|of\b|off\b|often|on\b|onto|opposite|outside|over|past|per\b|plus|regarding|since\b|than\b|through|to\b|toward|towards|under\b|underneath|unlike|until|up\b|upon|versus|via\b|with\b|within|without|not|and\b|feel\b))/g,"Him")
    .replace(/\bit\sHer\sall\b/g,"it His all")
    .replace(/\bHer\sall\b/g,"Him all")
    .replace(/\bHer\b/g,"His")
    .replace(/\bHers\b/g,"His")
    .replace(/\b([a-z]+[,;:'".]*)\s+Miss(?= [A-Z][a-z])/g, "$1 Mr.");
}

function jailbreak(node){
  var treeWalker = document.createTreeWalker(
      node,
      NodeFilter.SHOW_TEXT,
      { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
      false
  );
  while(treeWalker.nextNode()) {
    var current = treeWalker.currentNode;
    current.textContent = genderswap(current.textContent);
  }
}

chrome.extension.sendRequest({name: "isPaused?"}, function(response) {
  if (response.value != 'true') {
    jailbreak(document.body);

    document.body.addEventListener('DOMNodeInserted', function(event) {
        jailbreak(event.target);
    });
  }
});
