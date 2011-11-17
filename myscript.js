var searchFor = /\bshe\b|\bhe\b|\bms\b|\bmrs\b|\bmr\b|woman|\bman\b|women|\bmen\b|\bfemale|\bmale\b|\bmales\b|\bgirl\b|\bboy\b|\bgirls\b|\bboys\b|\bgirly\b|\bboyish\b|\bgirlhood\b|\bboyhood\b|\bgirlfriend|\bboyfriend|\bwife|\bhusband\b|\bwives\b|\bhusbands\b|daughter|\bson\b|\bsons\b|\bsister|\bbrother|\bmother|grandmother|godmother|stepmother|father|\baunt\b|\buncle\b|\baunts\b|\buncles\b|\bniece\b|\bnephew\b|\bnieces\b|\bnephews\b|\bherself\b|\bhimself\b|\blady|\bladies\b|\bgentlemen\b|\bgentleman\b|\bmom\b|\bdad\b|\bmoms\b|\bdads\b|mommy|daddy|mommies|daddies|ladiez|\bmenz\b|\bmanly\b|\bmanliness\b|\bmanhood\b|\bmankind\b|\bfemini|\bmasculi|\bguy\b|\bguys\b|\bdude\b|\bdudes\b|\bdudely\b|\bmaternity\b|\bpaternity\b|\bmaternal\b|\bpaternal\b|\bmatroniz|\bpatroniz|klansman|airman|airmen|alderman|aldermen|anchorman|anchormen|assemblyman|assemblymen|bogeyman|bogeymen|bondsman|bondsmen|businessman|businessmen|cameraman|cameramen|caveman|cavemen|chairman|clergyman|congressman|congressmen|councilman|councilmen|countryman|countrymen|craftsman|craftsmen|doorman|doormen|fireman|firemen|fisherman|fishermen|foreman|foremen|freshman|freshmen|garbageman|garbagemen|handyman|handymen|hangman|henchman|henchmen|journeyman|kinsman|kinsmen|layman|laymen|madman|madmen|mailman|mailmen|marksman|middleman|middlemen|milkman|milkmen|nobleman|noblemen|ombudsman|policeman|policemen|postman|postmen|repairman|repairmen|salesman|salesmen|sandman|serviceman|servicemen|showman|snowman|spaceman|spacemen|spokesman|spokesmen|sportsman|statesman|superman|supermen|unman\b|watchman|watchmen|weatherman|weathermen|workman|workmen|hero\b|heroes|heroine\b|heroines|\bmaleness|whitemaleness|misogyn|misandr|dudebro|laydeez|d00dz|\bfem\b|\bradfem\b|\bwidow\b|\bwidower\b|\bfiance\b|\bfiancee\b|\bpapa\b|\bmama\b|\bpoppa\b|\bmomma\b|\bgod\b|\bgoddess\b|\bbride|\bgroom|\bgodliness\b|\bgodhead\b|\bgodhood\b|\bgodly\b|\bgal\b|\bsir\b|\bma\'am\b|\bgrandson|\bpatriar|\bmatriar|\bantifeminist|stepbrother|stepsister|\blord\b|\blords\b|\bking\b|\bkings\b|\bqueen\b|\bqueens\b|\bprince\b|\bprinces\b|\bprincess\b|\bprincesses\b|\bemperor\b|\bemperors\b|\bempress\b|\bempresses\b|\bgirlier\b|\bgirliest\b|\bdudelier\b|\bdudeliest\b|\bactor\b|\bactors\b|\bactress\b|\bactresses/gi;


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
    "She" : "He",
    "He" : "She",
    "Ms" : "Mr",
    "Mrs" : "Mr",
    "Mr" : "Ms",
    "Woman" : "Man",
    "Man" : "Woman",
    "Women" : "Men",
    "Men" : "Women",
    "Female" : "Male",
    "Male" : "Female",
    "Males" : "Females",
    "Girl" : "Boy",
    "Boy" : "Girl",
    "Girls" : "Boys",
    "Boys" : "Girls",
    "Girly" : "Boyish",
    "Boyish" : "Girly",
    "Girlhood" : "Boyhood",
    "Boyhood" : "Girlhood",
    "Girlfriend" : "Boyfriend",
    "Boyfriend" : "Girlfriend",
    "Wife" : "Husband",
    "Husband" : "Wife",
    "Wives" : "Husbands",
    "Husbands" : "Wives",
    "Daughter" : "Son",
    "Son" : "Daughter",
    "Sons" : "Daughters",
    "Sister" : "Brother",
    "Brother" : "Sister",
    "Mother" : "Father",
    "Father" : "Mother",
    "Aunt" : "Uncle",
    "Uncle" : "Aunt",
    "Aunts" : "Uncles",
    "Uncles" : "Aunts",
    "Niece" : "Nephew",
    "Nephew" : "Niece",
    "Nieces" : "Nephews",
    "Nephews" : "Nieces",
    "Herself" : "Himself",
    "Himself" : "Herself",
    "Ladies" : "Gentlemen",
    "Gentlemen" : "Ladies",
    "Lady" : "Gentleman",
    "Gentleman" : "Lady",
    "Mom" : "Dad",
    "Dad" : "Mom",
    "Moms" : "Dads",
    "Dads" : "Moms",
    "Mommy" : "Daddy",
    "Daddy" : "Mommy",
    "Mommies" : "Daddies",
    "Daddies" : "Mommies",
    "Ladiez" : "Menz",
    "Menz" : "Ladiez",
    "Manly" : "Womanly",
    "Manliness" : "Womanliness",
    "Manhood" : "Womanhood",
    "Mankind" : "Womankind",
    "Femini" : "Masculi",
    "Masculi" : "Femini",
    "Guy" : "Gal",
    "Guys" : "Gals",
    "Dude" : "Girl",
    "Dudes" : "Girls",
    "Dudely" : "Girly",
    "Maternal" : "Paternal",
    "Paternal" : "Maternal",
    "Maternity" : "Paternity",
    "Paternity" : "Maternity",
    "Matroniz" : "Patroniz",
    "Patroniz" : "Matroniz",
    "Klansman" : "Klanswoman",
    "Airman" : "Airwoman",
    "Airmen" : "Airwomen",
    "Alderman" : "Alderwoman",
    "Aldermen" : "Alderwomen",
    "Anchorman" : "Anchorwoman",
    "Anchormen" : "Anchorwomen",
    "Assemblyman" : "Assemblywoman",
    "Assemblymen" : "Assemblywomen",
    "Bogeyman" : "Bogeywoman",
    "Bogeymen" : "Bogeywomen",
    "Bondsman" : "Bondswoman",
    "Bondsmen" : "Bondswomen",
    "Businessman" : "Businesswoman",
    "Businessmen" : "Businesswomen",
    "Cameraman" : "Camerawoman",
    "Cameramen" : "Camerawomen",
    "Caveman" : "Cavewoman",
    "Cavemen" : "Cavewomen",
    "Chairman" : "Chairwoman",
    "Chairmen" : "Chairwomen",
    "Clergyman" : "Clergywoman",
    "Clergymen" : "Clergywomen",
    "Congressman" : "Congresswoman",
    "Congressmen" : "Congresswomen",
    "Councilman" : "Councilwoman",
    "Councilmen" : "Councilwomen",
    "Countryman" : "Countrywoman",
    "Countrymen" : "Countrywomen",
    "Craftsman" : "Craftswoman",
    "Craftsmen" : "Craftswomen",
    "Doorman" : "Doorwoman",
    "Doormen" : "Doorwomen",
    "Fireman" : "Firewoman",
    "Firemen" : "Firewomen",
    "Fisherman" : "Fisherwoman",
    "Fishermen" : "Fisherwomen",
    "Foreman" : "Forewoman",
    "Foremen" : "Forewomen",
    "Freshman" : "Freshwoman",
    "Freshmen" : "Freshwomen",
    "Garbageman" : "Garbagewoman",
    "Garbagemen" : "Garbagewomen",
    "Handyman" : "Handywoman",
    "Handymen" : "Handywomen",
    "Hangman" : "Hangwoman",
    "Hangmen" : "Hangwomen",
    "Henchman" : "Henchwoman",
    "Henchmen" : "Henchwomen",
    "Journeyman" : "Journeywoman",
    "Journeymen" : "Journeywomen",
    "Kinsman" : "Kinswoman",
    "Kinsmen" : "Kinswomen",
    "Layman" : "Laywoman",
    "Laymen" : "Laywomen",
    "Madman" : "Madwoman",
    "Madmen" : "Madwomen",
    "Mailman" : "Mailwoman",
    "Mailmen" : "Mailwomen",
    "Marksman" : "Markswoman",
    "Marksmen" : "Markswomen",
    "Middleman" : "Middlewoman",
    "Middlemen" : "Middlewomen",
    "Milkman" : "Milkwoman",
    "Milkmen" : "Milkwomen",
    "Nobleman" : "Noblewoman",
    "Noblemen" : "Noblewomen",
    "Ombudsman" : "Ombudswoman",
    "Ombudsmen" : "Ombudswomen",
    "Policeman" : "Policewoman",
    "Policemen" : "Policewomen",
    "Postman" : "Postwoman",
    "Postmen" : "Postwomen",
    "Repairman" : "Repairwoman",
    "Repairmen" : "Repairwomen",
    "Salesman" : "Saleswoman",
    "Salesmen" : "Saleswomen",
    "Sandman" : "Sandwoman",
    "Sandmen" : "Sandwomen",
    "Serviceman" : "Servicewoman",
    "Servicemen" : "Servicewomen",
    "Showman" : "Showwoman",
    "Showmen" : "Showwomen",
    "Spaceman" : "Spacewoman",
    "Spacemen" : "Spacewomen",
    "Spokesman" : "Spokeswoman",
    "Spokesmen" : "Spokeswomen",
    "Sportsman" : "Sportswoman",
    "Sportsmen" : "Sportswomen",
    "Statesman" : "Stateswoman",
    "Statesmen" : "Stateswomen",
    "Superman" : "Superwoman",
    "Supermen" : "Superwomen",
    "Unman" : "Unwoman",
    "Watchman" : "Watchwoman",
    "Watchmen" : "Watchwomen",
    "Weatherman" : "Weatherwoman",
    "Weathermen" : "Weatherwomen",
    "Workman" : "Workwoman",
    "Workmen" : "Workwomen",
    "Hero" : "Heroine",
    "Heroes" : "Heroines",
    "Heroine" : "Hero",
    "Heroines" : "Heroes",
    "Maleness" : "Femaleness",
    "Whitemaleness" : "Whitefemaleness",
    "Misogyn" : "Misandr",
    "Misandr" : "Misogyn",
    "Dudebro" : "Galpal",
    "Laydeez" : "D00dz",
    "D00dz" : "Laydeez",
    "Fem" : "Masc",
    "Radfem" : "Radmasc",
    "Widow" : "Widower",
    "Widower" : "Widow",
    "Fiance" : "Fiancee",
    "Fiancee" : "Fiance",
    "Papa" : "Mama",
    "Mama" : "Papa",
    "Poppa" : "Momma",
    "Momma" : "Poppa",
    "God" : "Goddess",
    "Godliness" : "Goddessliness",
    "Godhead" : "Goddesshead",
    "Godhood" : "Goddesshood",
    "Godly" : "Goddessly",
    "Goddess" : "God",
    "Bride" : "Groom",
    "Groom" : "Bride",
    "Gal" : "Fellow",
    "Sir" : "Ma'am",
    "Ma'am" : "Sir",
    "Grandson" : "Granddaughter",
    "Patriar" : "Matriar",
    "Matriar" : "Patriar",
    "Antifeminist" : "Antimasculist",
    "Stepsister" : "Stepbrother",
    "Stepbrother" : "Stepsister",
    "Lord" : "Lady",
    "Lords" : "Ladies",
    "King" : "Queen",
    "Kings" : "Queens",
    "Queen" : "King",
    "Queens" : "Kings",
    "Prince" : "Princess",
    "Princes" : "Princesses",
    "Princess" : "Prince",
    "Princesses" : "Princes",
    "Emperor" : "Empress",
    "Emperors" : "Empresses",
    "Empress" : "Emperor",
    "Empresses" : "Emperors",
    "Girlier" : "Dudelier",
    "Girliest" : "Dudeliest",
    "Dudelier" : "Girlier",
    "Dudeliest" : "Girliest",
    "Actor" : "Actress",
    "Actors" : "Actresses",
    "Actress" : "Actor",
    "Actresses" : "Actors",
    "SHE" : "HE",
    "HE" : "SHE",
    "MS" : "MR",
    "MRS" : "MR",
    "MR" : "MS",
    "WOMAN" : "MAN",
    "MAN" : "WOMAN",
    "WOMEN" : "MEN",
    "MEN" : "WOMEN",
    "FEMALE" : "MALE",
    "MALE" : "FEMALE",
    "MALES" : "FEMALES",
    "GIRL" : "BOY",
    "BOY" : "GIRL",
    "GIRLS" : "BOYS",
    "BOYS" : "GIRLS",
    "GIRLY" : "BOYISH",
    "BOYISH" : "GIRLY",
    "GIRLHOOD" : "BOYHOOD",
    "BOYHOOD" : "GIRLHOOD",
    "GIRLFRIEND" : "BOYFRIEND",
    "BOYFRIEND" : "GIRLFRIEND",
    "WIFE" : "HUSBAND",
    "HUSBAND" : "WIFE",
    "WIVES" : "HUSBANDS",
    "HUSBANDS" : "WIVES",
    "DAUGHTER" : "SON",
    "SON" : "DAUGHTER",
    "SONS" : "DAUGHTERS",
    "SISTER" : "BROTHER",
    "BROTHER" : "SISTER",
    "MOTHER" : "FATHER",
    "FATHER" : "MOTHER",
    "AUNT" : "UNCLE",
    "UNCLE" : "AUNT",
    "AUNTS" : "UNCLES",
    "UNCLES" : "AUNTS",
    "NIECE" : "NEPHEW",
    "NEPHEW" : "NIECE",
    "NIECES" : "NEPHEWS",
    "NEPHEWS" : "NIECES",
    "HERSELF" : "HIMSELF",
    "HIMSELF" : "HERSELF",
    "LADIES" : "GENTLEMEN",
    "GENTLEMEN" : "LADIES",
    "LADY" : "GENTLEMAN",
    "GENTLEMAN" : "LADY",
    "MOM" : "DAD",
    "DAD" : "MOM",
    "MOMS" : "DADS",
    "DADS" : "MOMS",
    "MOMMY" : "DADDY",
    "DADDY" : "MOMMY",
    "MOMMIES" : "DADDIES",
    "DADDIES" : "MOMMIES",
    "LADIEZ" : "MENZ",
    "MENZ" : "LADIEZ",
    "MANLY" : "WOMANLY",
    "MANLINESS" : "WOMANLINESS",
    "MANHOOD" : "WOMANHOOD",
    "MANKIND" : "WOMANKIND",
    "FEMINI" : "MASCULI",
    "MASCULI" : "FEMINI",
    "GUY" : "GAL",
    "GUYS" : "GALS",
    "DUDE" : "GIRL",
    "DUDES" : "GIRLS",
    "DUDELY" : "GIRLY",
    "MATERNAL" : "PATERNAL",
    "PATERNAL" : "MATERNAL",
    "MATERNITY" : "PATERNITY",
    "PATERNITY" : "MATERNITY",
    "MATRONIZ" : "PATRONIZ",
    "PATRONIZ" : "MATRONIZ",
    "KLANSMAN" : "KLANSWOMAN",
    "AIRMAN" : "AIRWOMAN",
    "AIRMEN" : "AIRWOMEN",
    "ALDERMAN" : "ALDERWOMAN",
    "ALDERMEN" : "ALDERWOMEN",
    "ANCHORMAN" : "ANCHORWOMAN",
    "ANCHORMEN" : "ANCHORWOMEN",
    "ASSEMBLYMAN" : "ASSEMBLYWOMAN",
    "ASSEMBLYMEN" : "ASSEMBLYWOMEN",
    "BOGEYMAN" : "BOGEYWOMAN",
    "BOGEYMEN" : "BOGEYWOMEN",
    "BONDSMAN" : "BONDSWOMAN",
    "BONDSMEN" : "BONDSWOMEN",
    "BUSINESSMAN" : "BUSINESSWOMAN",
    "BUSINESSMEN" : "BUSINESSWOMEN",
    "CAMERAMAN" : "CAMERAWOMAN",
    "CAMERAMEN" : "CAMERAWOMEN",
    "CAVEMAN" : "CAVEWOMAN",
    "CAVEMEN" : "CAVEWOMEN",
    "CHAIRMAN" : "CHAIRWOMAN",
    "CHAIRMEN" : "CHAIRWOMEN",
    "CLERGYMAN" : "CLERGYWOMAN",
    "CLERGYMEN" : "CLERGYWOMEN",
    "CONGRESSMAN" : "CONGRESSWOMAN",
    "CONGRESSMEN" : "CONGRESSWOMEN",
    "COUNCILMAN" : "COUNCILWOMAN",
    "COUNCILMEN" : "COUNCILWOMEN",
    "COUNTRYMAN" : "COUNTRYWOMAN",
    "COUNTRYMEN" : "COUNTRYWOMEN",
    "CRAFTSMAN" : "CRAFTSWOMAN",
    "CRAFTSMEN" : "CRAFTSWOMEN",
    "DOORMAN" : "DOORWOMAN",
    "DOORMEN" : "DOORWOMEN",
    "FIREMAN" : "FIREWOMAN",
    "FIREMEN" : "FIREWOMEN",
    "FISHERMAN" : "FISHERWOMAN",
    "FISHERMEN" : "FISHERWOMEN",
    "FOREMAN" : "FOREWOMAN",
    "FOREMEN" : "FOREWOMEN",
    "FRESHMAN" : "FRESHWOMAN",
    "FRESHMEN" : "FRESHWOMEN",
    "GARBAGEMAN" : "GARBAGEWOMAN",
    "GARBAGEMEN" : "GARBAGEWOMEN",
    "HANDYMAN" : "HANDYWOMAN",
    "HANDYMEN" : "HANDYWOMEN",
    "HANGMAN" : "HANGWOMAN",
    "HANGMEN" : "HANGWOMEN",
    "HENCHMAN" : "HENCHWOMAN",
    "HENCHMEN" : "HENCHWOMEN",
    "JOURNEYMAN" : "JOURNEYWOMAN",
    "JOURNEYMEN" : "JOURNEYWOMEN",
    "KINSMAN" : "KINSWOMAN",
    "KINSMEN" : "KINSWOMEN",
    "LAYMAN" : "LAYWOMAN",
    "LAYMEN" : "LAYWOMEN",
    "MADMAN" : "MADWOMAN",
    "MADMEN" : "MADWOMEN",
    "MAILMAN" : "MAILWOMAN",
    "MAILMEN" : "MAILWOMEN",
    "MARKSMAN" : "MARKSWOMAN",
    "MARKSMEN" : "MARKSWOMEN",
    "MIDDLEMAN" : "MIDDLEWOMAN",
    "MIDDLEMEN" : "MIDDLEWOMEN",
    "MILKMAN" : "MILKWOMAN",
    "MILKMEN" : "MILKWOMEN",
    "NOBLEMAN" : "NOBLEWOMAN",
    "NOBLEMEN" : "NOBLEWOMEN",
    "OMBUDSMAN" : "OMBUDSWOMAN",
    "OMBUDSMEN" : "OMBUDSWOMEN",
    "POLICEMAN" : "POLICEWOMAN",
    "POLICEMEN" : "POLICEWOMEN",
    "POSTMAN" : "POSTWOMAN",
    "POSTMEN" : "POSTWOMEN",
    "REPAIRMAN" : "REPAIRWOMAN",
    "REPAIRMEN" : "REPAIRWOMEN",
    "SALESMAN" : "SALESWOMAN",
    "SALESMEN" : "SALESWOMEN",
    "SANDMAN" : "SANDWOMAN",
    "SANDMEN" : "SANDWOMEN",
    "SERVICEMAN" : "SERVICEWOMAN",
    "SERVICEMEN" : "SERVICEWOMEN",
    "SHOWMAN" : "SHOWWOMAN",
    "SHOWMEN" : "SHOWWOMEN",
    "SPACEMAN" : "SPACEWOMAN",
    "SPACEMEN" : "SPACEWOMEN",
    "SPOKESMAN" : "SPOKESWOMAN",
    "SPOKESMEN" : "SPOKESWOMEN",
    "SPORTSMAN" : "SPORTSWOMAN",
    "SPORTSMEN" : "SPORTSWOMEN",
    "STATESMAN" : "STATESWOMAN",
    "STATESMEN" : "STATESWOMEN",
    "SUPERMAN" : "SUPERWOMAN",
    "SUPERMEN" : "SUPERWOMEN",
    "UNMAN" : "UNWOMAN",
    "WATCHMAN" : "WATCHWOMAN",
    "WATCHMEN" : "WATCHWOMEN",
    "WEATHERMAN" : "WEATHERWOMAN",
    "WEATHERMEN" : "WEATHERWOMEN",
    "WORKMAN" : "WORKWOMAN",
    "WORKMEN" : "WORKWOMEN",
    "HERO" : "HEROINE",
    "HEROES" : "HEROINES",
    "HEROINE" : "HERO",
    "HEROINES" : "HEROES",
    "MALENESS" : "FEMALENESS",
    "WHITEMALENESS" : "WHITEFEMALENESS",
    "MISOGYN" : "MISANDR",
    "MISANDR" : "MISOGYN",
    "DUDEBRO" : "GALPAL",
    "LAYDEEZ" : "D00DZ",
    "D00DZ" : "LAYDEEZ",
    "FEM" : "MASC",
    "RADFEM" : "RADMASC",
    "WIDOW" : "WIDOWER",
    "WIDOWER" : "WIDOW",
    "FIANCE" : "FIANCEE",
    "FIANCEE" : "FIANCE",
    "PAPA" : "MAMA",
    "MAMA" : "PAPA",
    "POPPA" : "MOMMA",
    "MOMMA" : "POPPA",
    "GOD" : "GODDESS",
    "GODLINESS" : "GODDESSLINESS",
    "GODHEAD" : "GODDESSHEAD",
    "GODHOOD" : "GODDESSHOOD",
    "GODLY" : "GODDESSLY",
    "GODDESS" : "GOD",
    "BRIDE" : "GROOM",
    "GROOM" : "BRIDE",
    "GAL" : "FELLOW",
    "SIR" : "MA'AM",
    "MA'AM" : "SIR",
    "GRANDSON" : "GRANDDAUGHTER",
    "PATRIAR" : "MATRIAR",
    "MATRIAR" : "PATRIAR",
    "ANTIFEMINIST" : "ANTIMASCULIST",
    "STEPSISTER" : "STEPBROTHER",
    "STEPBROTHER" : "STEPSISTER",
    "LORD" : "LADY",
    "LORDS" : "LADIES",
    "KING" : "QUEEN",
    "KINGS" : "QUEENS",
    "QUEEN" : "KING",
    "QUEENS" : "KINGS",
    "PRINCE" : "PRINCESS",
    "PRINCES" : "PRINCESSES",
    "PRINCESS" : "PRINCE",
    "PRINCESSES" : "PRINCES",
    "EMPEROR" : "EMPRESS",
    "EMPERORS" : "EMPRESSES",
    "EMPRESS" : "EMPEROR",
    "EMPRESSES" : "EMPERORS",
    "GIRLIER" : "DUDELIER",
    "GIRLIEST" : "DUDELIEST",
    "DUDELIER" : "GIRLIER",
    "DUDELIEST" : "GIRLIEST",
    "ACTOR" : "ACTRESS",
    "ACTORS" : "ACTRESSES",
    "ACTRESS" : "ACTOR",
    "ACTRESSES" : "ACTORS"
};

function genderswap(text){
    text = text.replace(searchFor, function(match) {
        var replacement;
        replacement = map[match];
        return replacement ? replacement : match;
    });

    return (text);
}


function jailbreak(node){
    var treeWalker = document.createTreeWalker(  
        node,  
        NodeFilter.SHOW_TEXT,  
        { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },  
        false  
    ); 
    while(treeWalker.nextNode()) {
       treeWalker.currentNode.textContent = genderswap(treeWalker.currentNode.textContent);
       treeWalker.currentNode.textContent = treeWalker.currentNode.textContent
.replace(/\bher\b(?=\.|\,|\;|\:|\]|\}|\)|\?)/g,"fdgsghjkhgfdsfghjhim")
.replace(/\bher\sher\b/g,"fdgsghjkhgfdsfghjhim fdgsghjkhgfdsfghjhis")
.replace(/\bher\b(?=\s(?=a\b|an\b|the\b|some\b|any\b|0|1|2|3|4|5|6|7|8|9|one|two|three|thirt|four|five|fift|six|seven|eight|nine|ten|eleven|twelve|twenty))/g, "fdgsghjkhgfdsfghjhim")
.replace(/\bher\b(?=\s(?=aboard|about|above|across|after|against|along|amid|among|around|as|at|before|behind|below|beneath|beside|besides|between|beyond|but\b|by\b|concerning|considering|despite|down|during|except|excepting|excluding|following|for|from|in\b|inside|into|like|minus|of\b|off\b|often|on\b|onto|opposite|outside|over|past|per\b|plus|regarding|since\b|than\b|through|to\b|toward|towards|under\b|underneath|unlike|until|up\b|upon|versus|via\b|with\b|within|without|not|and\b|feel\b))/g,"fdgsghjkhgfdsfghjhim")
.replace(/\bit\sher\sall\b/g,"it fdgsghjkhgfdsfghjhis all")
.replace(/\bher\sall\b/g,"fdgsghjkhgfdsfghjhim all")
.replace(/\bher\b/g,"fdgsghjkhgfdsfghjhis")
.replace(/\bhers\b/g,"fdgsghjkhgfdsfghjhis")
.replace(/\bHer\b(?=\.|\,|\;|\:|\]|\}|\)|\?)/g,"fdgsghjkhgfdsfghjHim")
.replace(/\bHer\sher\b/g,"fdgsghjkhgfdsfghjHim fdgsghjkhgfdsfghjHis")
.replace(/\bHer\b(?=\s(?=a\b|an\b|the\b|some\b|any\b|many\b|0|1|2|3|4|5|6|7|8|9|one|two|three|thirt|four|five|fift|six|seven|eight|nine|ten|eleven|twelve|twenty))/g, "fdgsghjkhgfdsfghjHim")
.replace(/\bHer\b(?=\s(?=aboard|about|above|across|after|against|along|amid|among|around|as|at|before|behind|below|beneath|beside|besides|between|beyond|but\b|by\b|concerning|considering|despite|down|during|except|excepting|excluding|following|for|from|in\b|inside|into|like|minus|of\b|off\b|often|on\b|onto|opposite|outside|over|past|per\b|plus|regarding|since\b|than\b|through|to\b|toward|towards|under\b|underneath|unlike|until|up\b|upon|versus|via\b|with\b|within|without|not|and\b|feel\b))/g,"fdgsghjkhgfdsfghjHim")
.replace(/\bit\sHer\sall\b/g,"it fdgsghjkhgfdsfghjHis all")
.replace(/\bHer\sall\b/g,"fdgsghjkhgfdsfghjHim all")
.replace(/\bHer\b/g,"fdgsghjkhgfdsfghjHis")
.replace(/\bHers\b/g,"fdgsghjkhgfdsfghjHis")
.replace(/\bhim\b/g,"her")
.replace(/\bhis(?=\.|\,|\;|\:|\)|\]|\)|\?)/g,"hers")
.replace(/\bhis\b/g,"her")
.replace(/\bHim\b/g,"Her")
.replace(/\bHis(?=\.|\,|\;|\:)/g,"Hers")
.replace(/\bHis\b/g,"Her")
.replace(/\bfdgsghjkhgfdsfghjhim\b/g,"him")
.replace(/\bfdgsghjkhgfdsfghjhis\b/g,"his")
.replace(/\bfdgsghjkhgfdsfghjHim\b/g,"Him")
.replace(/\bfdgsghjkhgfdsfghjHis\b/g,"His")
.replace(/\b([a-z]+[,;:'".]*)\s+Miss(?= [A-Z][a-z])/g, "$1 Mr.");
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