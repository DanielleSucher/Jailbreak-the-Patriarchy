var map = {
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

function genderswap(node){
    chrome.extension.sendRequest({text: node.textContent}, function(response) {
        var replaced = [];
        var didReplace = false;
        var tagged = response.tagged;
        for (var i = tagged.length - 1; i >= 0; --i) {
            var word = tagged[i][0]; 
            var tag = tagged[i][1];
            var replacement = map[word];
            if (replacement) {
                didReplace = true;
            } else if (word.toLowerCase() === "her") {
                var replacement = tag === "PP$" ? "his" : "him";
                replacement = replace_case_sensitive(word, replacement);
                console.log(replacement)
                didReplace = true;
            } else replacement = word;
            replaced[i] = replacement;
        }
        if (didReplace) {
            console.log(node.textContent);
            node.textContent = replaced.join(" ");
            console.log(node.textContent);
        }
    });
}

function jailbreak(node){
    console.log("foo!");
    var treeWalker = document.createTreeWalker(  
        node,  
        NodeFilter.SHOW_TEXT,  
        { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },  
        false  
    ); 
    while(treeWalker.nextNode()) {
        genderswap(treeWalker.currentNode);
    }
}

chrome.extension.sendRequest({checkPaused: "hello"}, function(response) {
    if (response.maybePaused!="yes") {
    jailbreak(document.body);

    document.body.addEventListener('DOMNodeInserted', function(event) {
        jailbreak(event.target);
    });
}
});

