
// wyniki z poniższej Query, okazuje sie, ze w repertorium używa się kilka skrutów. Będzie trzeba je pododawać jako np "otherNames" 

db.getCollection('repertorysymptomitems').aggregate([
    {
        $match: {
            shortName: { $ne: null },
        },
    },
    {
        $lookup: {
            from: 'remedies',
            localField: 'shortName',
            foreignField: 'shortName',
            as: 'remedy'
        }
    },
    { 
        $unwind: { path: '$remedy', preserveNullAndEmptyArrays: true },
    },
    {
        $match: {
            remedy: null,
            $expr: { $lte: [{ $strLenCP: '$shortName' }, 10] } 
        }
    },
    {
        $group: {
                _id: '$shortName',
//                 shortName: {$max: '$shortName'}, 
        }
    },
]).toArray()


// ęę do uzupełnienia gdy wszystko zostanie wpisane.

const notExistsAsRemedy = {
"mag": '',
"s-corn": 'Sec',
"lac-defl": 'Lac-d',
"kali-bich": 'Kali-bi',
"aether": 'Aether Aethylicus',
"kali-ars": 'kali-ar',
// "inj": '',
"oxal-ac": 'Ox-ac',
"n-ac": 'Nit-ac',
// "coco": 'cocc', byl blad literowy
"thuya": 'Thuj',
"helo": 'Helod',
"hel": 'hell',
"plls": '',
"suph": '',
"sul-iod": '',
"cup": '',
"hyosc": '',
"amyg-am": '',
"prun": '',
"ars-met": '',
"absin": '',
"cinmb": '',
"nat-sul": '',
"pip-ac": '',
"v-tr": '',
"popr.:": '',
"n-mosch": '',
"calc-ars": '',
"sarsap": '',
"niccol": '',
"thu j": '',
"cistus": '',
"mcz": '',
"rumex": '',
"calc-iod": '',
"kreo": '',
"nat-hchls": '',
"nat": '',
"rhust-t": '',
"corm": '',
"pog.:": '',
"veler": '',
"carbn-v": '',
"popr.": '',
"absyn": '',
"spig,": '',
"alumm": '',
"mlll": '',
"myth": '',
"sol-t-ac": '',
"crocus": '',
"chlocl": '',
"stamm": '',
"n-vom": '',
"c veg": '',
"ars-s-fl": '',
"calc-c": '',
"s-ac": '',
"natr-carb": '',
"agin": '',
"carb-n": '',
"aln": '',
"alg-n": '',
"euphras": '',
"merc.": '',
"aesc-h": '',
"cimb": '',
"viol-od": '',
"rhus": '',
"viburn": '',
"ustil": '',
"chen-a": '',
"aur-ars": '',
"glon,": '',
"chin-ar": '',
"phosph-ac": '',
"kali-iod": '',
"ferr-acet": '',
"kłujący)": '',
"natr-ars": '',
"amc": '',
"gnapth": '',
"kali-phos": '',
"pyrogen": '',
"ox": '',
"tuberc": '',
"colech": '',
"natr": '',
"fers-p": '',
"bar": '',
"caust:": '',
"bav": '',
"thuj:": '',
"lac-lv": '',
"mosc": '',
"nat-ar": '',
"alumen": '',
"gent": '',
"ferr, op": '',
"r-bulb": '',
"m-mur": '',
"bron": '',
"lep-t": '',
"pog.: ang": '',
"carbn-o": '',
"millef": '',
"pet": '',
"am-l": '',
"calc-sul": '',
"aml-c": '',
"lycp-s": '',
"meri": '',
"v-tric": '',
"carb-veg": '',
"rhust": '',
"euph": '',
"convo-d": '',
"ant-crud": '',
"Name": '',
"m-ac": '',
"nat-acet": '',
"kal-s": '',
"ingluv": '',
"am": '',
"mez,": '',
"hyr-ac": '',
"magn-phos": '',
"secale": '',
"china": '',
"cund": '',
"calc-acet": '',
"m-austr": '',
"man": '',
"thu-j": '',
"bly": '',
"nat-j": '',
"phyl": '',
"góry: thuj": '',
"po: ferr-i": '',
"curp": '',
"a-crud": '',
"sul": '',
"m-arct": '',
"therid": '',
"merc-i": '',
"nitric-ac": '',
"cinm": '',
"sabab": '',
"ast-r": '',
"stont": '',
"ant-g": '',
"thuja": '',
"plus": '',
"gln": '',
"carb-ns": '',
"a mur": '',
"heoln": '',
"ranc": '',
"bism": '',
"conth": '',
"dirs": '',
"po": '',
"creos": '',
"jod": '',
"comoc": '',
"r-scel": '',
"sulpho": '',
"n-mur": '',
"lac-ac": '',
"sam": '',
"am-n": '',
"sil:": '',
"cann": '',
"scil": '',
"merc-s": '',
"th": '',
"c-an": '',
"borax": '',
"vit": '',
"var": '',
"seng": '',
"camp": '',
"cedr,": '',
"case": '',
"gom": '',
"cast-cq": '',
"aur-iod": '',
"ami-m": '',
"nitr": '',
"phos-ac": '',
"nat-mur": '',
"cocain": '',
"vespa": '',
"bar-acet": '',
"gent-i": '',
"wedr": '',
"catc": '',
"cadr": '',
"mar": '',
"oln": '',
"phosph": '',
"mellef": '',
"eupr": '',
"both-l": '',
"hain": '',
"canni-i": '',
"cyc": '',
"jat": '',
"oleand": '',
"all": '',
"c an": '',
"guaj": '',
"tar": '',
"kali-sul": '',
"carbn-s": '',
"myr": '',
"cocs": '',
"sac-alb": '',
"hellon": '',
"myrica": '',
"carbn-h": '',
"mgs": '',
"nux-vom": '',
"al-ph": '',
"magn-carb": '',
"carbn-sul": '',
"ipec": '',
"picric-ac": '',
"kali": '',
"croto-c": '',
"a-tart": '',
"plo": '',
"mezar": '',
"scill": '',
"selen": '',
"a-cr": '',
"cupr-acet": '',
"m arct": '',
"crot-n": '',
"canni": '',
"sepia": '',
"ptelia": '',
"arum": '',
"ignat": '',
"bry,": '',
"lac": '',
"v-rt": '',
"caust,": '',
"fluor-ac": '',
"anhis": '',
"bar-iod": '',
"ant-tart": '',
"cinnb,": '',
"stann,": '',
"crot-o": '',
"calc-n": '',
"ambra": '',
"eup": '',
"v-od": '',
"iris-foe": '',
"vio-l": '',
"r-secl": '',
"m.ac": '',
"kali-carb": '',
"calc-fl": '',
"cocc-cacti": '',
"fer-iod": '',
"calc-ph": '',
"asa": '',
"gymm": '',
"sill": '',
"m-art": '',
"ali": '',
"thuj,": '',
"petrol": '',
"merc-e": '',
"kali-s:": '',
"bufi-s": '',
"saf-ac": '',
"plumb": '',
"coss": '',
"magn": '',
"viol-tric": '',
"imag": '',
"nico": '',
"coc": '',
"cauloph": '',
"ag": '',
"m-aust": '',
"ferr-c": '',
"veratr": '',
"pl-ac": '',
"croto-t": '',
"ami-c": '',
"carb-n-s": '',
"phos:": '',
"plum": '',
"com,": '',
"kali-chlor": '',
"gamo": '',
"cal-c": '',
"po: alum": '',
"chena-a": '',
"asa f": '',
"arg": '',
"ap": '',
"hydr,": '',
"menyn": '',
"pog.: agar": '',
"polyg": '',
"sabina": '',
"kalis": '',
"elat": '',
"ceds": '',
"men": '',
"v-odor": '',
"mago": '',
"croto-h": '',
"kali-ch": '',
"lycp": '',
"arm": '',
"iris-fl": '',
"a-mur": '',
"sep,": '',
"ammon": '',
"ferr-i,": '',
"lyops": '',
"asp": '',
"amm": '',
"croco": '',
"heb": '',
"rąk: asaf": '',
"silp": '',
"arg-nit": '',
"ar": '',
"fluor": '',
"m ac": '',
"ferr-ars": '',
"abar": '',
"merc-ir": '',
"eyphr": '',
"dubin": '',
"mezer": '',
"po: nat-c": '',
"c-veg": '',
"nice": '',
"merc-p": '',
"pod": '',
"chinar": '',
"grati": '',
"s-Corn": '',
"po: zinc,": '',
"aur-sulph": '',
};