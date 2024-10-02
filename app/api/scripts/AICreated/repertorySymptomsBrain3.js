// Zapisz tekst w formacie JSON.
// Pamiętaj aby nie pominąć żadnego wyrazu.
// Każde wyrażenie, którego pierwszy wyraz jest napisany WIELKIMI literami oraz zakończony jest dwukropkiem ":" lub nawiasem ")" to klucz.
// Jego wartością jest tablica skrótów leków homeopatycznych lub
// obiekt którego kluczami lub kluczem są wyrażenia w nowym wierszu zaczęte od myślnika "-".
// Wartościami klucza zaczętego od myślnika jest tablica skrótów leków homeopatycznych lub obiekt, którego 
// kluczami są wyrażenia w nowej linii zaczęte od kropki (punktora).
// Wartościami klucza zaczętego od kropki jest tablica skrótów leków homeopatycznych lub obiekt, którego 
// kluczami są wyrażenia zaczęte od nowej linii zaczynające się od tyldy (takiego falowanego myślnika).
// Watrościami klucza zaczynającego się od tyldy jest tablica skrótów leków homeopatycznych.
// Jeżeli istnieją 2 takie same klucze połącz je w taki sposób aby kluczem dla tablicy była nazwa "leki".
// Pamiętaj kluczem nigdy nie jest skrót leku homeopatycznego!
// Pamiętaj, w tablicy mogą znajdować się tylko skróty leków homeopatycznych.
// Wyrazy, które nie są lekami homeopatycznymi zawierają się w kluczach.
// Zapisz to w formacie JSON. 

```json
{
  "AFAZJA": ["Both-l", "Chen-a", "Glon", "Kali-br"],
  "AFEKTACJA": ["Stram"],
  "AKTYWNOŚĆ": {
    "Bezowocna": ["Stann"]
  },
  "AMBICJI": ["LENISTWO"],
  "ANTROPOFOBIA": {},
  "APATIA": ["ZOBOJĘTNIENIE"],
  "AROGANCJA": ["WYNIOSŁY"],
  "AUTOMATYCZNE": ["NIEPRZYTOMNOŚĆ"],
  "BAWI": {
    "Bawi się guzikami swoich ubrań": ["Mosch"],
    "Chce": ["Aloe", "Cimic", "Cocc", "Elaps", "Lach", "Meny", "Naja", "Ox-ac", "Seneg", "Tarent"],
    "Na przemian z melancholią": ["Psor"],
    "Nieskłonność do zabawy, u dzieci": ["Bar-c", "Bar-m", "Cina", "Hep", "Lyc", "Rheum", "Sulph"],
    "Pragnie bawić się na trawie": ["Elaps"]
  },
  "BEZBOŻNY": ["Anac", "Coloc", "Croc"],
  "BEZCZELNY": {
    "leki": ["Bell", "Canth", "Graph", "Hyos", "Lac-c", "Lyc", "Lyss", "Nit-ac", "Nux-v", "Pall", "Petr", "Phos", "Plat", "Psor", "Stram", "Verat"],
    "Po południu": ["Canth"]
  },
  "BEZLITOSNY": ["OKRUCIEŃSTWO"],
  "BEZNADZIEJA": ["SMUTEK", "ROZPACZ"],
  "BEZRADOŚCI": {
    "leki": ["Hell", "Kali-br", "Petr", "Phos", "Stram", "Tax"],
    "Po południu": ["Kali-br"]
  },
  "BEZWSTYDNY": {
    "leki": ["Bell", "Calc", "Canth", "Cub", "Cupr", "Hell", "Hyos", "Merc-c", "Mosch", "Nat-m", "Nux-m", "Nux-v", "Op", "Phos", "Phyt", "Sec", "Stram", "Tarent", "Verat"],
    "Łóżku": {
      "leki": ["Nat-m"],
      "podczas leżenia": ["Verat"]
    },
    "Obnaża się": ["Hyos", "Phos", "Phyt", "Sec", "Tarent"]
  },
  "BIEGA": ["Agar", "Ars", "Bell", "Bufo", "Calc", "Canth", "Chin", "Con", "Cupr", "Cupr-ar", "Glon", "Hell", "Hyos", "Iod", "Plb", "Stram", "Sulph", "Tarent", "Verat"],
  "BIERNY": ["ZOBOJĘTNIENIE"]
}
``` 
 
```json
{
    "BIJE, uderza": [
        "Arg-m",
        "Bell",
        "Bov",
        "Camph",
        "Canth",
        "Carb-v",
        "Cub",
        "Cupr",
        "Der",
        "Elaps",
        "Glon",
        "Hell",
        "Hydr",
        "Hyos",
        "Ign",
        "Kali-c",
        "Lil-t",
        "Lyc",
        "Lyss",
        "Mosch",
        "Nat-c",
        "Nux-v",
        "Phos",
        "Plat",
        "Plb",
        "Staph",
        "Stram",
        "Stront",
        "Stry",
        "Tarent",
        "Verat"
    ],
    "Dzieci, biją innych": [
        "Cham",
        "Cina"
    ],
    "Potrzebę bicia, odczuwa": [
        "Bell",
        "Bufo",
        "Carbn-s",
        "Elaps",
        "Hydr",
        "Hyos",
        "Lil-t",
        "Nat-c",
        "Staph"
    ],
    "Siebie": {
        "leki": [
            "Ars",
            "Bell",
            "Camph",
            "Cur",
            "Tarent",
            "Verat-v"
        ],
        "po brzuchu": [
            "Bell"
        ],
        "po głowie": [
            "Ars",
            "Stram",
            "Tarent"
        ],
        "po twarzy": [
            "Bell"
        ],
        "w klatkę piersiową": [
            "Camph",
            "Verat-v"
        ]
    },
    "Stuka głową o ścianę": [
        "Apis",
        "Ars",
        "Bell",
        "Con",
        "Hyos",
        "Mag-c",
        "Mill",
        "Rhus-t"
    ],
    "Ściany, mur, w": [
        "Canth"
    ],
    "Wokół siebie, w wyimaginowane przedmioty": [
        "Bell",
        "Canth",
        "Cupr",
        "Hyos",
        "Kali-c",
        "Lyc",
        "Mosch",
        "Nat-c",
        "Nux-v",
        "Op",
        "Phos",
        "Plat",
        "Stram",
        "Stront"
    ],
    "BŁAZEŃSTWO, bufonada (patrz: GŁUPIE zachowanie)": [],
    "BŁAZNUJE, wygłupia się": [
        "Bell",
        "Cupr",
        "Hyos",
        "Lact",
        "Merc",
        "Op",
        "Phos",
        "Plb",
        "Stram"
    ],
    "BŁĘDY, popełnia, myli": {
        "Czasu, w określaniu": [
            "Acon",
            "Alum",
            "Anac",
            "Atro",
            "Bad",
            "Bor",
            "Camph",
            "Cann-i",
            "Cere-b",
            "Cic",
            "Cocc",
            "Con",
            "Croc",
            "Dirc",
            "Elaps",
            "Fl-ac",
            "Glon",
            "Hura",
            "Lach",
            "Med",
            "Nux-m",
            "Nux-v",
            "Op",
            "Pall",
            "Petr",
            "Plb",
            "Sulph",
            "Ther"
        ],
        "popołudnie, wyobraża sobie, że zawsze jest": [
            "Lach",
            "Stann"
        ],
        "miesza teraźniejszość z": {
            "przyszłością": [
                "Anac"
            ],
            "przeszłością": [
                "Cic",
                "Croc",
                "Med",
                "Nux-m",
                "Staph"
            ]
        }
    },
    "Czytaniu, w": [
        "Cham",
        "Hyos",
        "Lyc",
        "Merc",
        "Sil",
        "Stann"
    ],
    "Liczeniu, w": [
        "Ail",
        "Am-c",
        "Chin-s",
        "Con",
        "Crot-h",
        "Lyc",
        "Merc",
        "Nux-v",
        "Rhus-t",
        "Sumb",
        "Syph"
    ],
    "Literowaniu, w": [
        "All-c",
        "Am-c",
        "Crot-h",
        "Fl-ac",
        "Helo",
        "Hyper",
        "Lac-ac",
        "Lach",
        "Lyc",
        "Med",
        "Nux-m",
        "Nux-v",
        "Stram",
        "Sulph"
    ],
    "Lokalizacji, umiejscawianiu, w": [
        "Aesc",
        "Atro",
        "Bell",
        "Bov",
        "Bry",
        "Cann-i",
        "Cham",
        "Cic",
        "Glon",
        "Hura",
        "Lach",
        "Merc",
        "Nat-m",
        "Nux-m",
        "Par",
        "Petr",
        "Phos",
        "Psor",
        "Stram",
        "Sulph",
        "Valer",
        "Verat"
    ],
    "Mowie, w": [
        "Acet-ac",
        "Agar",
        "Alum",
        "Am-c",
        "Am-m",
        "Arg-n",
        "Arn",
        "Bov",
        "Bufo",
        "Calc",
        "Calc-p",
        "Calc-s",
        "Cann-s",
        "Canth",
        "Carbn-s",
        "Caust",
        "Cham",
        "Chin",
        "Chin-s",
        "Coca",
        "Cocc",
        "Con"
    ]
}
``` 
 
```json
{
  "BŁĘDY, popełnia, myli, Mowie, w": [
    "Crot-h", "Cupr", "Cycl", "Dios", "Dirc", "Dulc", "Graph", "Haem", "Ham", "Hep", "Hyos", "Hyper", "Ign", "Kali-br", "Kali-c", "Kali-p", "Lac-c", "Lach", "Lil-t", "Lyc", "Mang", "Merc", "Murx", "Nat-m", "Nux-m", "Nux-v", "Onos", "Osm", "Ph-ac", "Puls", "Rhus-r", "Sec", "Sel", "Sep", "Sil", "Stram", "Sul-ac", "Sulph", "Thuj", "Zinc",
    {
      "mówi, to czego nie zamierzał": ["Nat-m"],
      "niewłaściwe sylaby": {
        "leki": ["Caust", "Lyc", "Sel"],
        "odpowiedzi, podaje": ["Cann-s", "Nat-m", "Nux-v", "Phos"]
      },
      "wysiłku, większe po": ["Agar"]
    },
    {
      "Nazwiska, myli": ["Am-c", "Calc", "Dios", "Lac-c", "Sep", "Stram", "Sulph"]
    },
    {
      "Niewłaściwych słów, używa": [
        "Agar", "Alum", "Am-c", "Arn", "Both-l", "Bov", "Bufo", "Calc", "Calc-p", "Cann-s", "Canth", "Caust", "Chen-a", "Chin", "Cocc", "Con", "Crot-h", "Cupr", "Dirc", "Dulc", "Graph", "Hep", "Kali-br", "Kali-c", "Lac-c", "Lyc", "Lyss", "Nux-m", "Sep", "Thuj", "Zinc",
        {
          "mówi „śliwki”, gdy ma na myśli „gruszki”": ["Dios", "Lyc", "Stram"],
          "myli „prawo” i „lewo”": ["Chin-s", "Dios", "Fl-ac", "Hyper", "Iris-foe", "Nux-m"],
          "przeciwnych, „gorący” zamiast „zimny”": ["Kali-br", "Nat-m", "Thuj"]
        }
      ]
    },
    {
      "Pisaniu, w": [
        "Alum", "Am-c", "Benz-ac", "Bov", "Calc-p", "Cann-i", "Cann-s", "Carb-an", "Carbn-s", "Cham", "Chin", "Chin-s", "Chr-ac", "Colch", "Croc", "Crot-h", "Dios", "Fl-ac", "Graph", "Hep", "Hydr", "Hyper", "Ign", "Iris-foe", "Kali-br", "Kali-p", "Kali-s", "Lac-ac", "Lac-c", "Lach", "Lil-t", "Lyc", "Mag-c", "Nat-c", "Nat-m", "Nux-m", "Nux-v", "Onos", "Phos", "Ptel", "Puls", "Rhod", "Rhus-t", "Samb", "Sep", "Sil", "Stram", "Sulph", "Thuj",
        {
          "myli litery": ["Lyc"],
          "opuszcza": {
            "litery": ["Hyper", "Kali-br", "Lac-c", "Lyc", "Meli", "Nux-m", "Nux-v", "Onos", "Puls", "Stram", "Thuj", "Zinc"],
            "słowa": ["Bov", "Cham", "Colch", "Kali-br", "Nux-v", "Thuj"]
          },
          "powtarza słowa": ["Calc-p", "Cann-s", "Kali-br", "Lac-c", "Sulph"],
          "przestawia litery": ["Caust", "Chin", "Lyc", "Stram"]
        }
      ]
    },
    {
      "Pracy, w": ["Acet-ac", "All-c", "Bell", "Chin-s", "Meli", "Nat-c", "Phos", "Sep"]
    },
    {
      "Przestawia głoski": ["Caust"]
    },
    {
      "Słowa": {
        "przekręca": ["Calc", "Caust", "Chin", "Cycl", "Kali-br", "Osm", "Stram", "Sulph"]
      }
    }
  ]
}
``` 
 
