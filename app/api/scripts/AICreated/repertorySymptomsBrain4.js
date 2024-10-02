// Przepisz tekst ze zdjęcia na format JSON.
// Klucze w tekscie zaczynają się zawsze od nowego wiersza i kończą dwukropkiem ":",
// Klucz może zawierać takie znaki jak kropka (punktor), myślnik "-", czy tylda "~".
// Wartościami kluczy zawsze jest tablica, która przechowuje skróty nazw leków homeopatycznych.
// Nie pomijaj żadnego wyrazu! Nie pomiń żadnego znaku! 

```json
{
    "AFAZJA": ["Both-l", "Chen-a", "Glon", "Kali-br"],
    "AFEKTAJCA": ["Stram"],
    "AKTYWNOŚĆ/ci, pragnie (patrz: PRACOWITY)": ["Stann"],
    "AMBICJI, brak (patrz: LENISTWO)": [],
    "ANTROFOBIA, lęk przed ludźmi (patrz: LĘK, LUDŹMI, lęk przed)": [],
    "APATIA (patrz: ZOBOJĘTNIENIE)": [],
    "AROGANCJA (patrz: WYNIOŚŁY)": [],
    "AUTOMATYCZNE (patrz: NIEPRZYTOMNOŚĆ)": [],
    "BAWI/ic się (playful)": [
        "Mosch",
        ["Aloe", "Cimic", "Cocc", "Elaps", "Lach", "Meny", "Naja", "Ox-ac", "Seneg", "Tarent"],
        "Psor",
        ["Bar-c", "Bar-m", "Cina", "Hep", "Lyc", "Rheum", "Sulph"],
        "Elaps"
    ],
    "BEZBOŻNY, brak uczuć religijnych": ["Anac", "Coloc", "Croc"],
    "BEZCZELNY, zuchwały (patrz też: GRUBIAŃSTWO)": [
        "Bell", "Canth", "Graph", "Hyos", "Lac-c", "Lyc", "Lyss", "Nit-ac", "Nux-v", "Pall", "Petr", "Phos", "Plat", "Psor", "Stram", "Verat",
        "Canth"
    ],
    "BEZLITOSNY, nieczuły (patrz: OKRUCIEŃSTWO)": [],
    "BEZNADZIEJA (patrz: SMUTEK, ROZPACZ)": [],
    "BEZRADOŚCI, poczucie": ["Hell", "Kali-br", "Petr", "Phos", "Stram", "Tax", "Kali-br"],
    "BEZWSTYDN": [
        "Bell", "Calc", "Canth", "Cub", "Cupr", "Hell", "Hyos", "Merc-c", "Mosch", "Nat-m", "Nux-m", "Nux-v", "Op", "Phos", "Phyt", "Sec", "Stram", "Tarent", "Verat",
        ["Nat-m", "Verat"],
        ["Hyos", "Phos", "Phyt", "Sec", "Tarent"]
    ],
    "BIEGA wokół (patrz też: UCIEC, próbuje)": ["Agar", "Ars", "Bell", "Bufo", "Calc", "Canth", "Chin", "Con", "Cupr", "Cupr-ar", "Glon", "Hell", "Hyos", "Iod", "Plb", "Stram", "Sulph", "Tarent", "Verat"],
    "BIERNY": []
}
``` 
 
```json
{
  "BIJE, uderza": ["Arg-m", "Bell", "Bov", "Camph", "Canth", "Carb-v", "Cub", "Cupr", "Der", "Elaps", "Glon", "Hell", "Hydr", "Hyos", "Ign", "Kali-c", "Lil-t", "Lyc", "Lyss", "Mosch", "Nat-c", "Nux-v", "Phos", "Plat", "Plb", "Staph", "Stram", "Stront", "Stry", "Tarent", "Verat"],
  "Dzieci, biją innych": ["Cham", "Cina"],
  "Potrzebę bicia, odczuwa": ["Bell", "Bufo", "Carbn-s", "Elaps", "Hydr", "Hyos", "Lil-t", "Nat-c", "Staph"],
  "Siebie": ["Ars", "Bell", "Camph", "Cur", "Tarent", "Verat-v"],
  "po brzuchu": ["Bell"],
  "po głowie": ["Ars", "Stram", "Tarent"],
  "po twarzy": ["Bell"],
  "w klatkę piersiową": ["Camph", "Verat-v"],
  "Stuka głową o ścianę": ["Apis", "Ars", "Bell", "Con", "Hyos", "Mag-c", "Mill", "Rhus-t"],
  "Ściany, mur, w": ["Canth"],
  "Wokół siebie, w wyimaginowane przedmioty": ["Bell", "Canth", "Cupr", "Hyos", "Kali-c", "Lyc", "Mosch", "Nat-c", "Nux-v", "Op", "Phos", "Plat", "Stram", "Stront"],
  "BŁAZEŃSTWO, bufonada (patrz: GŁUPIE zachowanie)": [],
  "BŁAZNUJE, wygłupia się": ["Bell", "Cupr", "Hyos", "Lact", "Merc", "Op", "Phos", "Plb", "Stram"],
  "BŁĘDY, popełnia, myli": [],
  "Czasu, w określaniu": ["Acon", "Alum", "Anac", "Atro", "Bad", "Bor", "Camph", "Cann-i", "Cere-b", "Cic", "Cocc", "Con", "Croc", "Dirc", "Elaps", "Fl-ac", "Glon", "Hura", "Lach", "Med", "Nux-m", "Nux-v", "Op", "Pall", "Petr", "Plb", "Sulph", "Ther"],
  "popołudnie, wyobraża sobie, że zawsze jest": ["Lach", "Stann"],
  "miesza teraźniejszość z": [],
  "~ przyszłością": ["Anac"],
  "~ przeszłością": ["Cic", "Croc", "Med", "Nux-m", "Staph"],
  "Czytaniu, w": ["Cham", "Hyos", "Lyc", "Merc", "Sil", "Stann"],
  "Liczeniu, w": ["Ail", "Am-c", "Chin-s", "Con", "Crot-h", "Lyc", "Merc", "Nux-v", "Rhus-t", "Sumb", "Syph"],
  "Literowaniu, w": ["All-c", "Am-c", "Crot-h", "Fl-ac", "Helo", "Hyper", "Lac-ac", "Lach", "Lyc", "Med", "Nux-m", "Nux-v", "Stram", "Sulph"],
  "Lokalizacji, umiejscawianiu, w": ["Aesc", "Atro", "Bell", "Bov", "Bry", "Cann-i", "Cham", "Cic", "Glon", "Hura", "Lach", "Merc", "Nat-m", "Nux-m", "Par", "Petr", "Phos", "Psor", "Stram", "Sulph", "Valer", "Verat"],
  "Mowie, w": ["Acet-ac", "Agar", "Alum", "Am-c", "Am-m", "Arg-n", "Arn", "Bov", "Bufo", "Calc", "Calc-p", "Calc-s", "Cann-s", "Canth", "Carbn-s", "Caust", "Cham", "Chin", "Chin-s", "Coca", "Cocc", "Con"]
}
``` 
 
```json
{
  "BŁĘDY, popełnia, myli, Mowie, w": [
    "Crot-h", "Cupr", "Cycl", "Dios", "Dirc", "Dulc", "Graph", "Haem", "Ham",
    "Hep", "Hyos", "Hyper", "Ign", "Kali-br", "Kali-c", "Kali-p", "Lac-c", 
    "Lach", "Lil-t", "Lyc", "Mang", "Merc", "Murx", "Nat-m", "Nux-m", 
    "Nux-v", "Onos", "Osm", "Ph-ac", "Puls", "Rhus-r", "Sec", "Sel", "Sep", 
    "Sil", "Stram", "Sul-ac", "Sulph", "Thuj", "Zinc"
  ],
  "mówi, to czego nie zamierzał": ["Nat-m"],
  "niewłaściwe sylaby": [
    "Caust", "Lyc", "Sel",
    "~ odpowiedzi, podaje: Cann-s", "Nat-m", "Nux-v", "Phos"
  ],
  "wysiłku, większe po": ["Agar"],
  "Nazwiska, myli": ["Am-c", "Calc", "Dios", "Lac-c", "Sep", "Stram", "Sulph"],
  "Niewłaściwych słów, używa": [
    "Agar", "Alum", "Am-c", "Arn", "Both-l", "Bov", "Bufo", "Calc", "Calc-p", 
    "Cann-s", "Canth", "Caust", "Chen-a", "Chin", "Cocc", "Con", "Crot-h", 
    "Cupr", "Dirc", "Dulc", "Graph", "Hep", "Kali-br", "Kali-c", "Lac-c", 
    "Lyc", "Lyss", "Nux-m", "Sep", "Thuj", "Zinc"
  ],
  "mówi „śliwki”, gdy ma na myśli „gruszki”": ["Dios", "Lyc", "Stram"],
  "myli „prawo” i „lewo”": ["Chin-s", "Dios", "Fl-ac", "Hyper", "Iris-foe"],
  "przeciwnych, „gorący” zamiast „zimny”": ["Kali-br", "Nux-m"],
  "Pisaniu, w": [
    "Alum", "Am-c", "Benz-ac", "Bov", "Calc-p", "Cann-i", "Cann-s", "Carb-an", 
    "Carbn-s", "Cham", "Chin", "Chin-s", "Chr-ac", "Colch", "Croc", "Crot-h", 
    "Dios", "Fl-ac", "Graph", "Hep", "Hydr", "Hyper", "Ign", "Iris-foe", 
    "Kali-br", "Kali-p", "Kali-s", "Lac-ac", "Lac-c", "Lach", "Lil-t", "Lyc", 
    "Mag-c", "Nat-c", "Nat-m", "Nux-m", "Nux-v", "Onos", "Phos", "Ptel", 
    "Puls", "Rhod", "Rhus-t", "Samb", "Sep", "Sil", "Stram", "Sulph", "Thuj"
  ],
  "myli litery": ["Lyc"],
  "opuszcza": [
    "~ litery: Hyper", "Kali-br", "Lac-c", "Lyc", "Meli", "Nux-m", "Nux-v", 
    "Onos", "Puls", "Stram", "Thuj", "Zinc",
    "~ sylaby: Bov", "Cham", "Colch", "Kali-br", "Nux-v", "Thuj"
  ],
  "powtarza słowa": ["Calc-p", "Cann-s", "Kali-br", "Lac-c", "Sulph"],
  "przestawia litery": ["Caust", "Chin", "Lyc", "Stram"],
  "Pracy, w": [
    "Acet-ac", "All-c", "Bell", "Chin-s", "Meli", "Nat-c", "Phos", "Sep"
  ],
  "Przestawia głoski": ["Caust"],
  "Słowa": [
    "przekręca: Calc", "Caust", "Chin", "Cycl", "Kali-br", "Osm", "Stram", "Sulph"
  ]
}
``` 
 
