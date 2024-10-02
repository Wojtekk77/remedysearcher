
// Zapisz tekst w formacie JSON.
// Pamiętaj aby nie pominąć żadnego wyrazu.
// Każde wyrażenie, którego pierwszy wyraz jest napisany WIELKIMI literami oraz zakończony jest dwukropkiem ":" lub nawiasem ")" to klucz.
// Jego wartością jest obiekt który zawiera klucz "leki", a wartością "leki" jest tablica skrótów leków homeopatycznych. Inne klucze należące do obiektu są wyrażeniami zaczętymi nowym wierszu od myślnika "-".
// Wartościami klucza zaczętego od myślnika jest obiekt który zawiera klucz "leki", a wartością "leki" jest tablica skrótów leków homeopatycznych. Inne klucze należące do obiektu są wyrażeniami
// zaczętymi w nowej linii zaczynają się od kropki (punktora).
// Wartościami klucza zaczętego od kropki jest obiekt którey zawiera klucz "leki", a wartością "leki" jest tablica skrótów leków homeopatycznych. Inne klucze, należące do obiektu
// to wyrażenia zaczęte od nowej linii zaczynające się od tyldy (takiego falowanego myślnika) czyli "~".
// Watrościami klucza zaczynającego się od tyldy jest obiekt który zawiera klucz "leki", a jego wartością jest tablica skrótów leków homeopatycznych.
// Zapisz to w formacie JSON. Pamiętaj kluczem nigdy nie jest skrót leku homeopatycznego!

{
  "AFAZJA": {
    "leki": ["Both-l", "Chen-a", "Glon", "Kali-br"]
  },
  "AFEKTACJA": {
    "leki": ["Stram"]
  },
  "AKTYWNOŚĆ": {
    "leki": [],
    "Bezowocna": {
      "leki": ["Stann"]
    }
  },
  "AMBICJI": {
    "leki": ["patrz: LENISTWO"]
  },
  "ANTROPOFOBIA": {
    "leki": []
  },
  "APATIA": {
    "leki": ["patrz: ZOBOJĘTNIENIE"]
  },
  "AROGANCJA": {
    "leki": ["patrz: WYNIOSŁY"]
  },
  "AUTOMATYCZNE": {
    "leki": ["patrz: NIEPRZYTOMNOŚĆ"]
  },
  "BAWI": {
    "leki": [],
    "Bawi się guzikami swoich ubrań": {
      "leki": ["Mosch"]
    },
    "Chce": {
      "leki": ["Aloe", "Cimic", "Cocc", "Elaps", "Lach", "Meny", "Naja", "Ox-ac", "Seneg", "Tarent"]
    },
    "Na przemian z melancholią": {
      "leki": ["Psor"]
    },
    "Nieskłonność do zabawy, u dzieci": {
      "leki": ["Bar-c", "Bar-m", "Cina", "Hep", "Lyc", "Rheum", "Sulph"]
    },
    "Pragnie bawić się na trawie": {
      "leki": ["Elaps"]
    }
  },
  "BEZBOŻNY": {
    "leki": ["Anac", "Coloc", "Croc"]
  },
  "BEZCZELNY": {
    "leki": ["patrz też: GRUBIAŃSTWO"],
    "Bell": {
      "leki": ["Bell", "Canth", "Graph", "Hyos", "Lac-c", "Lyc", "Lyss", "Nit-ac", "Nux-v", "Pall", "Petr", "Phos", "Plat", "Psor", "Stram", "Verat"]
    },
    "Po południu": {
      "leki": ["Canth"]
    }
  },
  "BEZLITOSNY": {
    "leki": ["patrz: OKRUCIEŃSTWO"]
  },
  "BEZNADZIEJA": {
    "leki": ["patrz: SMUTEK, ROZPACZ"]
  },
  "BEZRADNOŚCI": {
    "leki": ["Hell", "Kali-br", "Petr", "Phos", "Stram", "Tax"],
    "Po południu": {
      "leki": ["Kali-br"]
    }
  },
  "BEZWSTYDNY": {
    "leki": ["Bell", "Calc", "Canth", "Cub", "Cupr", "Hell", "Hyos", "Merc-c", "Mosch", "Nat-m", "Nux-m", "Nux-v", "Op", "Phos", "Phyt", "Sec", "Stram", "Tarent", "Verat"],
    "Łóżku, w": {
      "leki": ["Nat-m"],
      "podczas leżenia": {
        "leki": ["Verat"]
      }
    },
    "Obnaża się": {
      "leki": ["Hyos", "Phos", "Phyt", "Sec", "Tarent"]
    }
  },
  "BIEGA": {
    "leki": ["patrz też: UCIEC, próbuje"],
    "Bell": {
      "leki": ["Bell", "Bufo", "Calc", "Canth", "Chin", "Con", "Cupr", "Cupr-ar", "Glon", "Hell", "Hyos", "Iod", "Plb", "Stram", "Sulph", "Tarent", "Verat"]
    }
  },
  "BIERNY": {
    "leki": ["patrz: ZOBOJĘTNIENIE"]
  }
}
``` 
 
```json
{
  "BIJE, uderza": {
    "leki": ["Arg-m", "Bell", "Bov", "Camph", "Canth", "Carb-v", "Cub", "Cupr", "Der", "Elaps", "Glon", "Hell", "Hydr", "Hyos", "Ign", "Kali-c", "Lil-t", "Lyc", "Lyss", "Mosch", "Nat-c", "Nux-v", "Phos", "Plat", "Plb", "Staph", "Stram", "Stront", "Stry", "Tarent", "Verat"]
  },
  "Dzieci, biją innych": {
    "leki": ["Cham", "Cina"]
  },
  "Potrzebę bicia, odczuwa": {
    "leki": ["Bell", "Bufo", "Carbn-s", "Elaps", "Hydr", "Hyos", "Lil-t", "Nat-c", "Staph"]
  },
  "Siebie": {
    "leki": ["Ars", "Bell", "Camph", "Cur", "Tarent", "Verat-v"],
    "po brzuchu": {
      "leki": ["Bell"]
    },
    "po głowie": {
      "leki": ["Ars", "Stram", "Tarent"]
    },
    "po twarzy": {
      "leki": ["Bell"]
    },
    "w klatkę piersiową": {
      "leki": ["Camph", "Verat-v"]
    }
  },
  "Stuka głową o ścianę": {
    "leki": ["Apis", "Ars", "Bell", "Con", "Hyos", "Mag-c", "Mill", "Rhus-t"]
  },
  "Ściany, mur, w": {
    "leki": ["Canth"]
  },
  "Wokół siebie, w wyimaginowane przedmioty": {
    "leki": ["Bell", "Canth", "Cupr", "Hyos", "Kali-c", "Lyc", "Mosch", "Nat-c", "Nux-v", "Op", "Phos", "Plat", "Stram", "Stront"]
  },
  "BŁAZEŃSTWO": {
    "leki": [],
    "bufonada (patrz": {
      "leki": [],
      "GŁUPIE zachowanie)": {
        "leki": []
      }
    }
  },
  "BŁAZNUJE, wygłupia się": {
    "leki": ["Bell", "Cupr", "Hyos", "Lact", "Merc", "Op", "Phos", "Plb", "Stram"]
  },
  "BŁĘDY, popełnia, myli": {
    "leki": [],
    "Czasu, w określaniu": {
      "leki": ["Acon", "Alum", "Anac", "Atro", "Bad", "Bor", "Camph", "Cann-i", "Cere-b", "Cic", "Cocc", "Con", "Croc", "Dirc", "Elaps", "Fl-ac", "Glon", "Hura", "Lach", "Med", "Nux-m", "Nux-v", "Op", "Pall", "Petr", "Plb", "Sulph", "Ther"],
      "popołudnie, wyobraża sobie, że zawsze jest": {
        "leki": ["Lach", "Stann"]
      },
      "miesza teraźniejszość z": {
        "leki": [],
        "przyszłością": {
          "leki": ["Anac"]
        },
        "przeszłością": {
          "leki": ["Cic", "Croc", "Med", "Nux-m", "Staph"]
        }
      }
    },
    "Czytaniu, w": {
      "leki": ["Cham", "Hyos", "Lyc", "Merc", "Sil", "Stann"]
    },
    "Liczeniu, w": {
      "leki": ["Ail", "Am-c", "Chin-s", "Con", "Crot-h", "Lyc", "Merc", "Nux-v", "Rhus-t", "Sumb", "Syph"]
    },
    "Literowaniu, w": {
      "leki": ["All-c", "Am-c", "Crot-h", "Fl-ac", "Helo", "Hyper", "Lac-ac", "Lach", "Lyc", "Med", "Nux-m", "Nux-v", "Stram", "Sulph"]
    },
    "Lokalizacji, umiejscawianiu, w": {
      "leki": ["Aesc", "Atro", "Bell", "Bov", "Bry", "Cann-i", "Cham", "Cic", "Glon", "Hura", "Lach", "Merc", "Nat-m", "Nux-m", "Par", "Petr", "Phos", "Psor", "Stram", "Sulph", "Valer", "Verat"]
    },
    "Mowie, w": {
      "leki": ["Acet-ac", "Agar", "Alum", "Am-c", "Am-m", "Arg-n", "Arn", "Bov", "Bufo", "Calc", "Calc-p", "Calc-s", "Cann-s", "Canth", "Carbn-s", "Caust", "Cham", "Chin", "Chin-s", "Coca", "Cocc", "Con"]
    }
  }
}
``` 
 
```json
{
    "BŁĘDY": {
        "leki": ["Crot-h", "Cupr", "Cycl", "Dios", "Dirc", "Dulc", "Graph", "Haem", "Ham", "Hep", "Hyos", "Hyper", "Ign", "Kali-br", "Kali-c", "Kali-p", "Lac-c", "Lach", "Lil-t", "Lyc", "Mang", "Merc", "Murx", "Nat-m", "Nux-m", "Nux-v", "Onos", "Osm", "Ph-ac", "Puls", "Rhus-r", "Sec", "Sel", "Sep", "Sil", "Stram", "Sul-ac", "Sulph", "Thuj", "Zinc"],
        "- mówi, to czego nie zamierzał": {
            "leki": ["Nat-m"]
        },
        "- niewłaściwe sylaby": {
            "leki": ["Caust", "Lyc", "Sel"],
            "~ odpowiedzi, podaje": {
                "leki": ["Cann-s", "Nat-m", "Nux-v", "Phos"]
            },
            "~ wysiłku, większe po": {
                "leki": ["Agar"]
            }
        }
    },
    "Nazwiska": {
        "leki": ["Am-c", "Calc", "Dios", "Lac-c", "Sep", "Stram", "Sulph"]
    },
    "Niewłaściwych słów": {
        "leki": ["Agar", "Alum", "Am-c", "Arn", "Both-l", "Bov", "Bufo", "Calc", "Calc-p", "Cann-s", "Canth", "Caust", "Chen-a", "Chin", "Cocc", "Con", "Crot-h", "Cupr", "Dirc", "Dulc", "Graph", "Hep", "Kali-br", "Kali-c", "Lac-c", "Lyc", "Lyss", "Nux-m", "Sep", "Thuj", "Zinc"],
        "- mówi „śliwki”, gdy ma na myśli „gruszki”": {
            "leki": ["Dios", "Lyc", "Stram"]
        },
        "- myli „prawo” i „lewo”": {
            "leki": ["Chin-s", "Dios", "Fl-ac", "Hyper", "Iris-foe", "Nux-m"]
        },
        "- przeciwnych, „gorący” zamiast „zimny”": {
            "leki": ["Kali-br", "Lyc", "Nux-m"]
        }
    },
    "Pisaniu": {
        "leki": ["Alum", "Am-c", "Benz-ac", "Bov", "Calc-p", "Cann-i", "Cann-s", "Carb-an", "Carbn-s", "Cham", "Chin", "Chin-s", "Chr-ac", "Colch", "Croc", "Crot-h", "Dios", "Fl-ac", "Graph", "Hep", "Hydr", "Hyper", "Ign", "Iris-foe", "Kali-br", "Kali-p", "Kali-s", "Lac-ac", "Lac-c", "Lach", "Lil-t", "Lyc", "Mag-c", "Nat-c", "Nat-m", "Nux-m", "Nux-v", "Onos", "Phos", "Ptel", "Puls", "Rhod", "Rhus-t", "Samb", "Sep", "Sil", "Stram", "Sulph", "Thuj"],
        "- myli litery": {
            "leki": ["Lyc"]
        },
        "- opuszcza": {
            "~ litery": {
                "leki": ["Hyper", "Kali-br", "Lac-c", "Lyc", "Meli", "Nux-m", "Nux-v", "Onos", "Puls", "Stram", "Thuj", "Zinc"]
            },
            "~ sylaby": {
                "leki": ["Bov", "Cham", "Colch", "Kali-br", "Nux-v", "Thuj"]
            }
        },
        "- powtarza słowa": {
            "leki": ["Calc-p", "Cann-s", "Kali-br", "Lac-c", "Sulph"]
        },
        "- przestawia litery": {
            "leki": ["Caust", "Chin", "Lyc", "Stram"]
        }
    },
    "Pracy": {
        "leki": ["Acet-ac", "All-c", "Bell", "Chin-s", "Meli", "Nat-c", "Phos", "Sep"]
    },
    "Przestawia głoski": {
        "leki": ["Caust"]
    },
    "Słowa": {
        "- przekręca": {
            "leki": ["Calc", "Caust", "Chin", "Cycl", "Kali-br", "Osm", "Stram", "Sulph"]
        }
    }
}
``` 
 
