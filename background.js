function updateBadge(paused){
    if (paused){
        chrome.browserAction.setBadgeText({text:"OFF"});
    } else {
        chrome.browserAction.setBadgeText({text:""});
    }
}

chrome.browserAction.onClicked.addListener(
    function(tab){
        if (localStorage.getItem('paused')==true){ 
            localStorage.removeItem('paused');
            updateBadge(false);
        } else {
            localStorage.setItem('paused',true);
            updateBadge(true);
        }
        chrome.tabs.update(tab.id, {url: tab.url});
    });

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if (request.name == "isPaused") {
            sendResponse({value: localStorage.getItem('paused') == true});
        }
    });

updateBadge(localStorage.getItem('paused')==true);

var map = {
    // We won't know how to replace "her" until we have part of speech
    // information from the specific text.  But we add it here as a
    // key so that regexOfReplacements will be constructed to match
    // "her" as well.
    "her" : undefined, 
    "she" : "he",
    "he" : "she",
    "him" : "her",
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
    "femini" : "masculi",
    "masculi" : "femini",
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
    "antifeminist" : "antimasculist",
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
    "grandpa" : "grandma",
    "gramps" : "grandma",
    "bloke" : "girl",
};


RegExp.quote = function(str) {
    return (str + '').replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function makeRegex(map) {
    var pieces = []
    for (var word in map) {
        pieces[pieces.length] = "\\b" + RegExp.quote(word) + "\\b";
    }
    return new RegExp(pieces.join("|"), "gi");
}

var regexOfReplacements = makeRegex(map);

// preserves four capitalization styles: uncapitalized, Capitalized,
// ALLCAPS, and numeric, where uncapitalized and numeric are sort of
// "identity cases"---i.e., the replacement is returned exactly as it
// was passed in.
function replace_case_sensitive(word, replacement) {
    var upper = word.toUpperCase();
    if (!isNaN(word * 1)) { // numeric
        return replacement;
    } else if (upper === word) { // ALLCAPS
        return replacement.toUpperCase;
    } else if (upper.charAt(0) === word.charAt(0)) { // Capitalized
        return replacement.charAt(0).toUpperCase() + replacement.substr(1);
    } else return replacement; // uncapitalized
}

// binary search for the value in [indices] which is the greatest
// value less than [index]
function find_tag_index(indices, index, start, stop) {
    start = start ? start : 0;
    stop = stop ? stop : indices.length;
    // invariant: indices[start] < index < indices[stop]
    for (var gap = stop - start; gap > 5; gap = stop - start) {
        var mid = start + Math.floor(gap / 2);
        if (indices[mid] === index) {
            return indices[mid];
        } else if (indices[mid] < index) {
            start = mid;
        } else stop = mid;
    }
    while(start <= stop) {
        if (indices[start] > index) return indices[start - 1];
        start += 1;
    }
    throw new RangeError({
            start: start,
            stop: stop,
            index: index,
            indices: indices,
    }.toString());
}

var lexer = new Lexer();
var tagger = new POSTagger();
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if (request.name !== "swapGenders") return;
        var text = request.text;
        if (!regexOfReplacements.test(text)) {
            sendResponse({value: ""});
            return;
        } else regexOfReplacements.lastIndex = 0;
        var lexed = lexer.lex(text);
        var tagged = tagger.tag(lexed.tokens);
        var replaced = text.replace(
            regexOfReplacements,
            function (match, offset, string) {
                var replacement = map[match];
                if (!replacement) {
                    if (match.toLowerCase() === "her") {
                        var tag = tagged[find_tag_index(lexed.indices, offset)];
                        replacement = tag === "PP$" ? "his" : "him";
                    } else replacement = match;
                }
                return replacement;
            });
        sendResponse({value: replaced});
    });

