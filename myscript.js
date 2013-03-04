var complete = {
  actor: 'actress',
  actors: 'actresses',
  actress: 'actor',
  aunt: 'uncle',
  aunts: 'uncles',
  boy: 'girl',
  boyhood: 'girlhood',
  boyish: 'girly',
  boys: 'girls',
  bro: 'sis',
  bros: 'sistas',
  dad: 'mom',
  dads: 'moms',
  dude: 'lady',
  dudelier: 'womanlier',
  dudeliest: 'womanliest',
  dudely: 'womanly',
  dudes: 'ladies',
  emperor: 'empress',
  emperors: 'empresses',
  empress: 'emperor',
  empresses: 'emperors',
  fem: 'masc',
  fiance: 'fiancee',
  fiancee: 'fiance',
  gal: 'fellow',
  gentleman: 'lady',
  gentlemen: 'ladies',
  girl: 'boy',
  girlier: 'dudelier',
  girliest: 'dudeliest',
  girls: 'boys',
  girly: 'boyish',
  god: 'goddess',
  goddess: 'god',
  godhead: 'goddesshead',
  godhood: 'goddesshood',
  godliness: 'goddessliness',
  godly: 'goddessly',
  gramps: 'grandma',
  grandma: 'grandpa',
  grandmas: 'grandpas',
  guy: 'gal',
  guys: 'gals',
  he: 'she',
  herself: 'himself',
  himself: 'herself',
  husband: 'wife',
  husbands: 'wives',
  king: 'queen',
  kings: 'queens',
  ladies: 'gentlemen',
  lord: 'lady',
  lords: 'ladies',
  male: 'female',
  males: 'females',
  mama: 'papa',
  man: 'woman',
  manhood: 'womanhood',
  mankind: 'womankind',
  manliness: 'womanliness',
  manly: 'womanly',
  maternal: 'paternal',
  maternity: 'paternity',
  men: 'women',
  menz: 'ladiez',
  mom: 'dad',
  momma: 'poppa',
  moms: 'dads',
  mr: 'ms',
  mrs: 'mr',
  ms: 'mr',
  nephew: 'niece',
  nephews: 'nieces',
  niece: 'nephew',
  nieces: 'nephews',
  papa: 'mama',
  paternal: 'maternal',
  paternity: 'maternity',
  poppa: 'momma',
  priest: 'priestess',
  priestess: 'priest',
  priestesses: 'priests',
  priests: 'priestesses',
  prince: 'princess',
  princes: 'princesses',
  princess: 'prince',
  princesses: 'princes',
  queen: 'king',
  queens: 'kings',
  radfem: 'radmasc',
  she: 'he',
  sir: 'ma\'am',
  son: 'daughter',
  sons: 'daughters',
  uncle: 'aunt',
  uncles: 'aunts',
  widow: 'widower',
  widower: 'widow',
  wives: 'husbands'
};

var start =  {
  'he\'': 'she\'',
  'ma\'am': 'sir',
  'she\'': 'he\'',
  actresses: 'actors',
  bloke: 'gal',
  boyfriend: 'girlfriend',
  bride: 'groom',
  brother: 'sister',
  female: 'male',
  girlfriend: 'boyfriend',
  girlhood: 'boyhood',
  grandpa: 'grandma',
  grandson: 'granddaughter',
  groom: 'bride',
  lady: 'gentleman',
  maleness: 'femaleness',
  matriar: 'patriar',
  matroniz: 'patroniz',
  mother: 'father',
  patriar: 'matriar',
  patroniz: 'matroniz',
  sister: 'brother',
  waiter: 'waitress',
  waitress: 'waiter',
  wife: 'husband'
};

var anywhere = {
  airman: 'airwoman',
  airmen: 'airwomen',
  alderman: 'alderwoman',
  aldermen: 'alderwomen',
  anchorman: 'anchorwoman',
  anchormen: 'anchorwomen',
  assemblyman: 'assemblywoman',
  assemblymen: 'assemblywomen',
  bogeyman: 'bogeywoman',
  bogeymen: 'bogeywomen',
  bondsman: 'bondswoman',
  bondsmen: 'bondswomen',
  brogrammer: 'sistagrammer',
  bromance: 'lady-romance',
  businessman: 'businesswoman',
  businessmen: 'businesswomen',
  cameraman: 'camerawoman',
  cameramen: 'camerawomen',
  caveman: 'cavewoman',
  cavemen: 'cavewomen',
  chairman: 'chairwoman',
  chairmen: 'chairwomen',
  clergyman: 'clergywoman',
  clergymen: 'clergywomen',
  congressman: 'congresswoman',
  congressmen: 'congresswomen',
  councilman: 'councilwoman',
  councilmen: 'councilwomen',
  countryman: 'countrywoman',
  countrymen: 'countrywomen',
  craftsman: 'craftswoman',
  craftsmen: 'craftswomen',
  d00dz: 'laydeez',
  daddies: 'mommies',
  daddy: 'mommy',
  daughter: 'son',
  doorman: 'doorwoman',
  doormen: 'doorwomen',
  dudebro: 'galpal',
  father: 'mother',
  femin: 'mascul',
  fireman: 'firewoman',
  firemen: 'firewomen',
  fisherman: 'fisherwoman',
  fishermen: 'fisherwomen',
  foreman: 'forewoman',
  foremen: 'forewomen',
  freshman: 'freshwoman',
  freshmen: 'freshwomen',
  garbageman: 'garbagewoman',
  garbagemen: 'garbagewomen',
  godmother: 'godfather',
  grandmother: 'grandfather',
  handyman: 'handywoman',
  handymen: 'handywomen',
  hangman: 'hangwoman',
  hangmen: 'hangwomen',
  henchman: 'henchwoman',
  henchmen: 'henchwomen',
  hero: 'heroine',
  heroes: 'heroines',
  journeyman: 'journeywoman',
  journeymen: 'journeywomen',
  kinsman: 'kinswoman',
  kinsmen: 'kinswomen',
  klansman: 'klanswoman',
  ladiez: 'menz',
  laydeez: 'd00dz',
  layman: 'laywoman',
  laymen: 'laywomen',
  madman: 'madwoman',
  madmen: 'madwomen',
  mailman: 'mailwoman',
  mailmen: 'mailwomen',
  mansplain: 'ladysplain',
  marksman: 'markswoman',
  marksmen: 'markswomen',
  mascul: 'femin',
  middleman: 'middlewoman',
  middlemen: 'middlewomen',
  milkman: 'milkwoman',
  milkmen: 'milkwomen',
  misandr: 'misogyn',
  misogyn: 'misandr',
  mommies: 'daddies',
  mommy: 'daddy',
  nobleman: 'noblewoman',
  noblemen: 'noblewomen',
  ombudsman: 'ombudswoman',
  ombudsmen: 'ombudswomen',
  policeman: 'policewoman',
  policemen: 'policewomen',
  postman: 'postwoman',
  postmen: 'postwomen',
  repairman: 'repairwoman',
  repairmen: 'repairwomen',
  salesman: 'saleswoman',
  salesmen: 'saleswomen',
  sandman: 'sandwoman',
  sandmen: 'sandwomen',
  serviceman: 'servicewoman',
  servicemen: 'servicewomen',
  showman: 'showwoman',
  showmen: 'showwomen',
  snowman: 'snowwoman',
  sorostitute: 'bro-whore',
  spaceman: 'spacewoman',
  spacemen: 'spacewomen',
  spokesman: 'spokeswoman',
  spokesmen: 'spokeswomen',
  sportsman: 'sportswoman',
  sportsmen: 'sportswomen',
  statesman: 'stateswoman',
  statesmen: 'stateswomen',
  stepbrother: 'stepsister',
  stepmother: 'stepfather',
  stepsister: 'stepbrother',
  superman: 'superwoman',
  supermen: 'superwomen',
  unman: 'unwoman',
  watchman: 'watchwoman',
  watchmen: 'watchwomen',
  weatherman: 'weatherwoman',
  weathermen: 'weatherwomen',
  whitemaleness: 'whitefemaleness',
  woman: 'man',
  women: 'men',
  workman: 'workwoman',
  workmen: 'workwomen'
};

var end = { heroine: 'hero', heroines: 'heroes' };

var map = {};
var maps = [ start, end, complete, anywhere ];
for (var i = 0; i < maps.length; i++) {
  for (attr in maps[i]) {
    map[attr] = maps[i][attr];
  }
}


var concatString = function(obj) {
  var parts = [];
  for (key in obj) {
    parts.push(key);
  }
  return parts.join('|');
};

var regex = '^(' + concatString(start) + ')|(' + concatString(end) + ')$|(' + concatString(anywhere) + ')|^(' + concatString(complete) + ')$';

var searchFor = new RegExp(regex, 'i');

function capitalize(word) {
  var first = word.charAt(0);
  var rest = word.slice(1);

  return first.toUpperCase() + rest.toLowerCase();
}

function matchCase(old_word, replacement) {
  if (replacement.toLowerCase() == old_word.toLowerCase()) return old_word;

  var first = old_word.charAt(0);
  var second = old_word.charAt(1);

  if (/[a-z]/.test(first)) return replacement.toLowerCase();
  if (/[A-Z]/.test(second)) return replacement.toUpperCase();

  return capitalize(replacement);
}

function findMatch(word) {
  return map[word];
}

function swapWord(word) {
  return matchCase(word, word.toLowerCase().replace(searchFor, findMatch));
}

function genderswap(text) {
  return text
    .replace(/\b([a-z][\w']+)\b/gi, swapWord)
    .replace(/\b(hers?|hi[ms])\b[\.\,\;\:\]\}\)\?]?(\s+\S+)?/gim, function(match) {
      if (/hers?/i.test(match)) {
        return translateHer(match);
      } else {
        return translateHim(match);
      }
    })
    .replace(/\b([a-z]+[,;:'".]*)\s+Miss(?= [A-Z][a-z])/g, "$1 Mr.");
}

function translateHim(text) {
  return text
    .replace(/\bhim\b/g,"her")
    .replace(/\bhis(?=[\.\,\;\:\]\}\)\?])/g,"hers")
    .replace(/\bhis\b/g,"her")
    .replace(/\bHim\b/g,"Her")
    .replace(/\bHis(?=[\.\,\;\:])/g,"Hers")
    .replace(/\bHis\b/g,"Her")
  ;
}

function translateHer(text) {
  return text
    .replace(/\bher\b(?=[\.\,\;\:\]\}\)\?])/g, 'him')
    .replace(/\bher\sher\b/g, "him his")
    .replace(/\bher\b(?=\s(?=a\b|an\b|the\b|some\b|any\b|0|1|2|3|4|5|6|7|8|9|one|two|three|thirt|four|five|fift|six|seven|eight|nine|ten|eleven|twelve|twenty))/g, "him")
    .replace(/\bher\b(?=\s(?=aboard|about|above|across|after|against|along|amid|among|around|as|at|before|behind|below|beneath|beside|besides|between|beyond|but\b|by\b|concerning|considering|despite|down|during|except|excepting|excluding|following|for|from|in\b|inside|into|like|minus|of\b|off\b|often|on\b|onto|opposite|outside|over|past|per\b|plus|regarding|since\b|than\b|through|to\b|toward|towards|under\b|underneath|unlike|until|up\b|upon|versus|via\b|with\b|within|without|not|and\b|feel\b))/g,"him")
    .replace(/\bit\sher\sall\b/g,"it his all")
    .replace(/\bher\sall\b/g,"him all")
    .replace(/\bher\b/g,"his")
    .replace(/\bhers\b/g,"his")
    .replace(/\bHer\b(?=[\.\,\;\:\]\}\)\?])/g,"Him")
    .replace(/\bHer\sher\b/g,"Him His")
    .replace(/\bHer\b(?=\s(?=a\b|an\b|the\b|some\b|any\b|many\b|0|1|2|3|4|5|6|7|8|9|one|two|three|thirt|four|five|fift|six|seven|eight|nine|ten|eleven|twelve|twenty))/g, "Him")
    .replace(/\bHer\b(?=\s(?=aboard|about|above|across|after|against|along|amid|among|around|as|at|before|behind|below|beneath|beside|besides|between|beyond|but\b|by\b|concerning|considering|despite|down|during|except|excepting|excluding|following|for|from|in\b|inside|into|like|minus|of\b|off\b|often|on\b|onto|opposite|outside|over|past|per\b|plus|regarding|since\b|than\b|through|to\b|toward|towards|under\b|underneath|unlike|until|up\b|upon|versus|via\b|with\b|within|without|not|and\b|feel\b))/g,"Him")
    .replace(/\bit\sHer\sall\b/g,"it His all")
    .replace(/\bHer\sall\b/g,"Him all")
    .replace(/\bHer\b/g,"His")
    .replace(/\bHers\b/g,"His");
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
