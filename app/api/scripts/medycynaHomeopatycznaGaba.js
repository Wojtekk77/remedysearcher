// {
//     illnessName: '',
//     description: ``,
//     dosage: ``,
//     arrOfRemedies: [
//         {
//             remedy: '',
//             mainSymptoms: [
//                 '',
//             ],
//             confirmingSymptoms: [
//                 '',
//             ],
//         },
//         {
//             remedy: '',
//             mainSymptoms: [
//                 '',
//             ],
//             confirmingSymptoms: [
//                 '',
//             ],
//         }
//     ],
// }
export const existingInDb = [
    "aconitum napellus","actea racemosa cimicifuga racemosa","aesculus hippocastanum","allium cepa","aloe","anacardium orientale","antimonium crudum","antimonium tartaricum","apis mellifica","arnica montana","arsenicum album","belladonna","berberis","borax","bryonia","calcarea carbonica","cantharis","caulophyllum","causticum","chamomilla","chelidonium","china","coffea","colocynthis","croton tiglium","drosera rotundifolia","eupatorium perfoliatum","euphrasia","ferrum phosphoricum","gelsemium","graphites","hamamelis virginica","hepar sulfuris","hydrastis canadensis","ignatia","ipecacuanha","kalium bichromicum","kalium carbonicum","kreosotum","lachesis","lycopodium","magnesium phosphoricum","mercurius vivus i mercurius solubilis","mezereum","muriaticum acidum","natrum muriaticum","nitricum acidum","nux vomica","petroleum","phosphorus","phytolacca","pulsatilla","ranunculus bulbosus","rhus toxicodendron","rumex crispus","sabadilla","sanguinaria","sarsaparilla","sepia","silicea","spigelia anthelmintica","spongia","staphysagria","sulfur","veratrum album","wyethia",
]

export const remediesNotExistingInDB = ['candida albicans', 'chimaphilla umbellata', 'equisetum', 'iris', 'iris versicolor', 'jalapa', 'lobelia', 'oscillococcinum', 'passiflora', 'pilocarpinum', 'sabal serrulata', 'sambucus', 'tellurium'];

export const arrOfIllness = [
    {
        illnessName: 'Przeziębienie',
        description: `Warto także przeczytać informacje o preparatach Belladonna, Aconitum i i Ferrum
        phos., podanie tych środków jest często wskazane w początkowych okresach przeziębienia`,
        dosage: `Trzy, cztery razy dziennie, następnie - po zmniejszeniu się nasilenia objawów - rzadziej.
        Kiedy należy podać inny lek: Jeśli nie obserwujesz poprawy w ciągu czterdziestu ośmiu godzin,`,
        arrOfRemedies: [
            {
                remedy: 'ALLIUM CEPA',
                mainSymptoms: [
                    'Przejrzysty, palący katar, który drażni nozdrza i górną wargę.',
                    'Silne łzawienie oczu, kiedy łzy nie drażnią skóry, choć same oczy są zaczerwienione i pieką.',

                ],
                confirmingSymptoms: [
                    'Objawy nasilają się w ciepłych pomieszczeniach i wieczorem; zmniejszenie nasilenia objawów po wyjściu na dwór.',
                    'Częste kichanie, objaw ten ma mniejsze nasilenie po wyjściu na dwór.',
                    'Łaskotanie w krtani, które powoduje bolesny i suchy kaszel; podczas kaszlu pacjent obejmuje dłońmi gardło.',
                    'Nasilone pragnienie',
                ],
            },
            {
                remedy: 'EUPHRASIA',
                mainSymptoms: [
                    'Wodnisty katar, który nie ma właściwości drażniących',
                    'Nasilone łzawienie; łzy drażnią skórę.',
                ],
                confirmingSymptoms: [
                    'Katar nasila się po wyjściu na dwór, w godzinach porannych i gdy pacjent leży.',
                    'Wilgotny kaszel, bardziej nasilony w ciągu dnia, mniej nasilony w nocy, po jedzeniu i po położeniu się:; pacjent odkrztusza wydzielinę śluzowa z górnych dróg oddechowych',
                ],
            },
            {
                remedy: 'NATRUM MURIATICUM',
                mainSymptoms: [
                    'Wydzielina kataralna przejrzysta lub lekko biaława, gęstsza od wody (może przypominać surowe białko jaja lub kisiel)',
                ],
                confirmingSymptoms: [
                    'Wydzielina kataralna spływa ku tyłowi i gromadzi się w gardle.',
                    'Nasilone kichanie.',
                    'Utrata powonienia i smaku.',
                    'Drobne owrzodzenie lub pecherzyki w okolicy ust i nosa.',
                    'Wargi mogą być przesuszone i spękane.',
                    'Pacjent, depresyjny i płaczliwy, ale nie życzy sobie towarzystwa; czuje się gorzej, gdy jest pocieszany.',
                ],
            },
            {
                remedy: 'NUX VOMICA',
                mainSymptoms: [
                    'Uczucie suchości, drapania i łaskotania w nosie',
                    'Nos na przemian z wydzieliną kataralną lub zatkany; nos niedrożny nocą, wydzielina kataralna w ciepłych pomieszczeniach i w ciągu dnia.',
                    'Częste kichanie.',
                ],
                confirmingSymptoms: [
                    'Objawy przeziębienia wystąpiły po narażeniu na zimno lub ekspozycji na suche i zimne warunki atmosferyczne.',
                    'Objawy nasilają się wskutek jedzenia.',
                    'Gardto może sprawiać wrażenie szorstkiego i boli.',
                    'Łaskotanie w krtani; drażniący, suchy kaszel, który wywołuje ból w klatce piersiowej',
                    'Kaszel nasila się W godzinach rannych (szczególnie po obudzeniu), pomiędzy północą, a świtem, przy po oddychaniu zimnym powietrzem, po jedzeniu i po pracy umysłowej; poprawa po wypiciu ciepłego płynu.',
                    'Dreszcze; odkrycie się lub poruszenie wywołuje kolejny napad dreszczy.',
                    'Drażliwość, chory łatwo się obraża',
                ],
            },
            {
                remedy: 'ARSENICUM ALBUM',
                hint: 'zob. także Podsumowanie leczenia kaszlu',
                mainSymptoms: [
                    'Obfita, wodnista wydzielina kataralna, która drażni skórę (z czasem katar może stać się żółty).',
                    'Katar swobodnie odpływa, jednak nos jest zatkany.',
                    'Podrażnienie nosa i łaskotanie w nim powodują częste i silne kichanie.',
                ],
                confirmingSymptoms: [
                    'Dreszcze, które zmniejszają się pod wpływem gorąca.',
                    'Chory jest niespokojny, pobudzony, o nastawieniu lękowym.',
                    'Tępy i pulsujący ból z przodu głowy.',
                    'Chorego zajmuje porządkowanie rzeczy.',
                ],
            },
            {
                remedy: 'GELSEMIUM',
                mainSymptoms: [
                    'Symptomy rozwijają się stopniowo.',
                    'Wodnista wydzielina kataralna.',
                    'Uczucie zmęczenia; ciało sprawia wrażenie ciężkiego.', 
                ],
                confirmingSymptoms: [
                    'Uczucie zimna chodzącego po plecach.',
                    'Ból głowy w okolicy karku.',
                ],
            },
            {
                remedy: 'KALIUM BICHROMICUM',
                mainSymptoms: [
                    'Późniejsze okresy przeziębienia, kiedy katar staje się gęsty, żółty lub zielonkawy',
                ],
                confirmingSymptoms: [
                    'Ciągnąca się wydzielina kataralna; zaschnięta wydzielina i śluz zatykają nos; wydzielina kataralna ma nieprzyjemny zapach.',
                    'Gęsta wydzielina spływa ku tyłowi, do gardła.',
                    'Bóle zatok obocznych nosa; ciągnący ból u nasady nosa',
                ],
            },
            {
                remedy: 'PULSATILLA',
                hint: '(zob. także Podsumowanie leczenia kaszlu)',
                mainSymptoms: [
                    'Nasilone objawy ogólne i umysłowe, charakterystyczne dla Pulsatilla',
                    'i/lub',
                    'Wydzielina kataralna gęsta, zielonkawo-żółta, nie drażni skóry.',
                ],
                confirmingSymptoms: [
                    'Na przemian nasilona wydzielina kataralna i zatkanie nosa; większe wydzielanie kataru po wyjściu na dwór i wieczorem, zatykanie nosa w ciepłych pomieszczeniach.',
                ],
            },
        ],
    },
    {
        illnessName: 'Kaszel',
        description: ``,
        dosage: `Trzy, cztery razy dziennie, następnie - po zmniejszeniu się nasi-
        lenia objawów - rzadziej.
        Kiedy należy podać inny lek: Gdy nie obserwujesz poprawy w ciągu czterdzie-
        stu ośmiu godzin.`,
        arrOfRemedies: [
            {
                remedy: 'BRYONIA',
                mainSymptoms: [
                    `Suchy, napadowy kaszel, który się nasila pod wpływem ruchu - głębokiego oddychania 
                    kaszel jest bolesny; pacjent w czasie kaszlu może ściskać klatkę piersiowa, by
                    ograniczyć bolesne ruchy jej ścian.`,
                ],
                confirmingSymptoms: [
                    `Kaszel nasila się w ciągu dnia, po jedzeniu i piciu, w ciepłych pomieszczeniach;
                    zmniejszenie nasilenia objawu po wyjściu na dwór i pod wpływem ciepłych napojów.`,
                    `Ból w klatce piersiowej zmniejsza się pod wpływem ucisku.`,
                    `Oddech płytki i szybki.`,
                    `Wzmożone pragnienie.`,
                    `Rozdrażnienie, pacjent chce leżeć nieruchomo i być zostawionym w spokoju.`,
                ],
            },
            {
                remedy: 'RUMEX CRISPUS',
                mainSymptoms: [
                    `Suchy, płytki kaszel, który jest spowodowany łaskotaniem w drogach oddechowych, zwłaszcza nieco nad mostkiem.`,
                    `Kaszel nasila się przy wdychaniu zimnego powietrza i przy każdej nieregularności przepływu powietrza w drogach oddechowych; pacjent oddycha płytko,
                    by nie kaszleć.`,
                ],
                confirmingSymptoms: [
                    `Kaszel nasila się w pozycji leżącej; wieczorem, przed północą albo też zaraz po
                    przebudzeniu; kaszel pojawia się pod wpływem dotyku.`,
                    `Wodnista wydzielina nosowa; kichanie`,
                ],
            },
            {
                remedy: 'ARSENICUM ALBUM',
                mainSymptoms: [
                    `Pobudzenie i niepokój`,
                    `Oslabienie.`,
                    `Uczucie zimna i dreszcze, nasilenie tego objawu zmniejsza się, kiedy pacjent
                    się rozgrzeje`,
                ],
                confirmingSymptoms: [
                    `Pacjent kaszle, ponieważ odczuwa łaskotanie w krtani, kaszel może też pochodzić z głębi klatki piersiowej`,
                    `Kaszel nasila się w godzinach nocnych (zwłaszcza między północą i trzecią
                    nad ranem); zimne powietrze, picie zimnych płynów, położenie się i ruch nasilają kaszel.`,
                    `Kaszel zmniejsza się po wypiciu ciepłych napojów.`,
                    `W nocy obecne Świsty.`,
                    `Ból W klatce piersiowej o często palącym charakterze, który nasila się pod
                    wpływem głębokiego oddychania`,
                ],
            },
            {
                remedy: 'PHOSPHORUS',
                mainSymptoms: [
                    `Kaszel każdego rodzaju, zwłaszcza gdy towarzyszą mu dreszcze, wzmożona
                    czujność i lęk chorego, kiedy pozostaje samotny lub w ciemności; pacjenta cieszy towarzystwo 
                    i czuje się lepiej, kiedy zapewnia się mu poczucie bezpieczeństwa`,
                    `i/lub`,
                    `Zapalenie krtani, chrypka - szczególnie gdy objawy nasilają się rano lub wieczorem.`,
                ],
                confirmingSymptoms: [
                    `Flegma z pasemkami krwi.`,
                    `Ogromna chęć na lodowate napoje, które mogą nasilać kaszel.`,
                    `Ból w klatce piersiowej nasila się pod wpływem ruchu, zmniejsza się pod wpływem ucisku; jest silniejszy przy leżeniu na lewym boku`,
                    `Uczucie ściśnięcia klatki piersiowej, ciężaru, który ją przygniata.`,
                    `Kaszel nasila się pod wpływem zimna lub zimnego powietrza, śmiechu, mówienia, jedzenia, picia, w pozycji leżącej, pod wpływem silnych zapachów`,
                    `Kaszel zaczyna się, kiedy pacjent idzie spać lub może wybudzać chorego ze snu.`,
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    `Nasilone objawy ogólne i mentalne, charakterystyczne dla Pulsatilla`,
                    `i/lub`,
                    `Kaszel Z odkrztuszaniem gęstej, żółto-zielonej wydzieliny.`,
                ],
                confirmingSymptoms: [
                    `Kaszel nasila się po położeniu się, pod wpływem wysiłku, w ciepłych pomieszczeniach; zmniejsza się na świeżym powietrzu`,
                    `Kaszel jest suchy w nocy, wilgotny w ciągu dnia.`,
                ],
            },
            {
                remedy: 'LACHESIS',
                mainSymptoms: [
                    `Krótki, suchy, dławiący kaszel z silnym łaskotaniem w krtani`,
                    `Kaszel nasila się po zaśnięciu, w czasie snu lub zaraz po przebudzeniu się;`,
                    `i/lub`,
                    `Kaszel wzmaga się nawet pod najmniejszym dotknięciem lub uciśnięciem gardła
                    (nawet jeśli jest to odzież).`,
                ],
                confirmingSymptoms: [
                    `Kaszel nasila się pod wpływem zimna i po wyjściu na dwór, po wstaniu z pozycji leżącej`,
                    `Kłopoty z przełykaniem, nawet płynów (jeśli ten objaw jest obecny, zob. zapalenie nagłośni)`,
                    `Podekscytowanie, impulsywność, gadatliwość; czasem chory jest nadmiernie
                    zazdrosny lub podejrzliwy.`,
                ],
            },
            {
                remedy: 'IPECACUANHA',
                mainSymptoms: [
                    `Głęboki, mokry kaszel z głośnym, grzechoczącym dźwiękiem w klatce piersiowej, który jest wywołany poruszeniem wydzieliny w drzewie oskrzelowym`,
                    `Wrażenie dławienia się i duszenia, trudności z nabraniem wdechu.`,
                ],
                confirmingSymptoms: [
                    `Choroba rozwija się szybko (w ciągu 1-2 dni).`,
                    `Niemal niekończące się napady kaszlu, które kończą się dławieniem, odruchami wymiotnymi zwracaniem (objaw ten występuje - po innych lekach,
                    ale szczególnie nasilony jest po Ipecacuanha)`,
                    `Flegma jest odkrztuszana z trudem.`,
                    `Zapalenie oskrzeli i oskrzelików u dzieci; wydech jest trudniejszy niż wdech`,
                    `Kaszel nasila się w ciepłych pomieszczeniach.`,
                    `Pacjentowi wydaje się, że czegoś chce, jednak sam nie wie czego;
                    odmawia przyjęcia rzeczy, o które sam wcześniej prosił.`,
                    `Zatkany nos i kichanie; krwawienia z nosa jasna krwią.`,
                ],
            },
            {
                remedy: 'ANTIMONIUM TARTARICUM',
                mainSymptoms: [
                    `Grzechoczący kaszel, w klatce piersiowej zalega dużo wydzieliny.`,
                    `Pacjent jest dość ciężko chory, wyczerpany; zbyt słaby, by odkrztusić wydzielinę.`,                  
                ],
                confirmingSymptoms: [
                    `Symptomy rozwijają się stopniowo`,
                ],
            },
            {
                remedy: 'CAUSTICUM',
                mainSymptoms: [
                    'Kaszel z uczuciem, że pacjent nie kaszle dość mocno, by odkrztusić wydzieline',
                    'lub',
                    'Zapalenie krtani, szczególnie gdy pacjent ma wciąż ochotę pokasływać i chrząkać, by oczyścić gardło.',
                ],
                confirmingSymptoms: [
                    `Stały kaszel.`,
                    `Kaszel nasila się pod wpływem zimnego powietrza; po przebudzeniu się.`,
                    `Kaszel zmniejsza się w ciągu dnia; pod wpływem zimnych napojów.`,
                    `Choremu jest zimno ma dreszcze; może się czuć lepiej przy pochmurnej i deszczowej pogodzie`,
                ],
            },
            {
                remedy: 'RHUS TOXICODENDRON',
                mainSymptoms: [
                    'Suchy kaszel z uczuciem łaskotania za górna częścią mostka'
                ],
                confirmingSymptoms: [
                    `Kaszel nasila się w zimnych pomieszczeniach i przy chłodnej, wilgotnej pogodzie, przy nawet najmniejszym odkryciu się; nasila się przy głębokim oddychaniu, gdy chory leży, po kąpieli, wieczorem lub w nocy.`,
                    `Kaszel uniemożliwia sen lub pojawia się w czasie snu; może budzić pacjenta`,
                    `Ruch zmniejsza nasilenie kaszlu.`,
                    `Chrypa.`,
                    `Nos zatkany gąstą, żółtą lub zieloną wydzieliną; gardło drapie i jest czerwone.`,
                    `Chory pobudzony, lepiej czuje się, kiedy może się ruszać.`,
                ],
            },
            {
                remedy: 'KALIUM CARBONICUM',
                mainSymptoms: [
                    'Napadowy kaszel o największym nasileniu między drugą i piątą nad ranem.',
                ],
                confirmingSymptoms: [
                    `Kaszel nasila się na zimnym powietrzu, po wyziębieniu pacjenta, przy ruchu
                    i wydatkowaniu energii, kiedy pacjent leży.`,
                    `Kłujący ból z boku klatki piersiowej w czasie kaszlu, bardziej nasilony przy oddychaniu i kaszlu po stronie prawej`,
                    `Wydzielina jest trudna do odkrztuszenia.`,
                    `Chory ma wrażenie, jakby w gardle utkwiła mu ość.`,
                    `Wzmożone pragnienie, dreszcze, poty`,
                ],
            },
        ],
    },
    {
        illnessName: 'Gorączka',
        description: ``,
        dosage: `Początkowo, co dwie, cztery godziny,stopniowo - wraz z poprawianiem się stanu chorego - zmniejszaj częstotliwość dawek. Kontynuuj kurację do trzech dni.
        Kiedy należy podać inny lek: Gdy gorączka jest wysoka, osoba dość ciężko chora i nie ma poprawy w ciągu dwóch godzin. Jeśli choroba jest lekka, zmień preparat, gdy stan chorego nie poprawił się po dobie podawania leku.
        `,
        arrOfRemedies: [
            {
                remedy: 'BELLADONNA',
                mainSymptoms: [
                    `Najczęściej stosowany lek w początkowych stadiach gorączki (w pierwszych 12-24 godzinach od jej wystąpienia), szczególnie jeśli objaw ten pojawił się nagle.`, 
                    `Zaczerwieniona twarz, zaczerwienione śluzówki, błyszczące oczy.`,
                ],
                confirmingSymptoms: [
                    `Rozpalona skóra, ciepło szybko przenika do przyłożonej do ciała chorego dłoni badającego`, 
                    `Umysłowe otępienie, splątanie, pobudzenie.`,
                ],
            },
            {
                remedy: 'ACONITUM NAPELLUS',
                mainSymptoms: [
                    `Podanie leku także jest wskazane we wczesnych stadiach nagle pojawiającej się gorączki.`,
                        `Wysoka gorączka, której towarzyszy niepokój, lęk i pobudzenie.`,
                ],
                confirmingSymptoms: [
                    'Objawy występują po narażeniu na zimne powietrze lub wiatr.',
                ],
            },
            {
                remedy: 'FERRUM PHOSPHORICUM',
                mainSymptoms: [
                    `We wczesnym okresie goraczki, gdy objawy narastaly powoli.`,
                    `Pacjent jest bardziej czujny, mniej pobudzony i mniej lękowy niż taki, któremu podajemy Belladonnę czy Aconitum.`,
                    `Podaj ten preparat, jeśli nie ma wyraźnych wskazań do podania konkretnego preparatu, a Belladonna nie przyniosła spodziewanych rezultatów.`,
                ],
                confirmingSymptoms: [
                    'Zaczerwienienie twarzy może występować tylko w postaci okrągłych rumieńców na policzkach.',
                ],
            },
            {
                remedy: 'NUX VOMICA',
                mainSymptoms: [
                    `Silne dreszcze i uczucie zimna; objaw nasila się po odkryciu pacjenta lub wówczas, gdy porusza się on pod przykryciem.`,
                ],
                confirmingSymptoms: [
                    `Objawy pojawiają się po przejedzeniu, po spożyciu nadmiernej ilości alkoholu, po przepracowaniu, przy niedoborze snu.`,
                    `Może im towarzyszyć nadmierna pobudliwość żołądka.`,
                    `Rozdrażnienie.`,
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    `Płaczliwość, potrzeba towarzystwa - okazywania przez innych uczuć; zmienność nastrojów.`,
                    `i/lub`,
                    `Nasilenie dolegliwości w ciepłym otoczeniu i po ciepłym przykryciu; niezwykle małe pragnienie.`,
                ],
                confirmingSymptoms: [
                    'Objawy mogą pojawić się po ciężkim posiłku.',
                ],
            }
        ],
    },
    {
        illnessName: 'Grypa',
        description: `Poza wymienionymi preparatami należy także rozważyć skorzystanie leków stosowanych w gorączce (jeśli gorączka jest podstawowym objawem) oraz w przeziębieniu (jeśli główną dolegliwością jest katar i zapchany nos).`,
        dosage: `Co 6-8 godzin, przez dwa, trzy dni. Zakończ podawanie leku natychmiast po uzyskaniu wyraźnej poprawy. Kiedy podać inny lek: Jeśli nie stwierdzasz wyraźnej poprawy po dobie.`,
        arrOfRemedies: [
            {
                remedy: 'GELSEMIUM',
                mainSymptoms: [
                    `Zmęczenie, osłabienie, uczucie ociężałości.`,
                    `Leżenie w bezruchu i chęć pozostawania w spokoju ze względu na uczucie zmęczenia.`,
                ],
                confirmingSymptoms: [
                    `Uczucie zimna, dreszcze w plecach.`,
                    `Niewielkie pragnienie.`,
                    `Ból głowy, który rozpoczyna się z tyłu głowy lub karku i obejmuje jej czubek i górną część czoła.`,
                ],
            },
            {
                remedy: 'BRYONIA',
                mainSymptoms: [
                    `Ruch nasila ból i inne dolegliwości.`,
                    `Drażliwość, niechętne nastawienie do towarzystwa.`,
                ],
                confirmingSymptoms: [
                    `Chęć na zimne płyny.`,
                    `Gorsze samopoczucie w ciepłych pomieszczeniach, lepsze w chłodzie.`,
                    `Ból głowy, który nasila się przy poruszaniu, chodzeniu i poruszaniu gałkami ocznymi.`,
                ],
            },
            {
                remedy: 'RHUS TOXICODENDRON',
                mainSymptoms: [
                    `Pobudzenie.`,
                    `Bóle ciała w czasie nieruchomego leżenia; nasilenie tej dolegliwości na początku poruszania się, stan poprawia się po rozchodzeniu.`,
                ],
                confirmingSymptoms: [
                    `Uczucie zimna i dreszcze, objaw nasila się w chłodzie i w wilgotnym otoczeniu.`,
                    `Chęć na łyk wody.`,
                    `Suchość w ustach, suche i bolesne gardło.`,
                ],
            },
            {
                remedy: 'EUPATORIUM PERFOLIATUM',
                mainSymptoms: [
                    'Silne bóle, chory ma wrażenie, że łamią mu się kości.',
                ],
                confirmingSymptoms: [
                    `Katar, kichanie i zaczerwienienie oczu wyprzedza dolegliwości bólowe.`,
                    `Uczucie zimna i dreszcze, szczególnie nasilone w godzinach porannych.`,
                    `Chęć na lodowate płyny.`,
                ],
            },
            {
                remedy: 'OSCILLOCOCCINUM',
                mainSymptoms: [
                    'Lek powinien być podawany w ciągu pierwszych czterdziestu ośmiu godzin od pojawienia się stanów grypopodobnych, kiedy jeszcze nie ma wielu objawów.',
                ],
                confirmingSymptoms: [
                    
                ],
            }
        ],
    },
    {
        illnessName: 'Krup rzekomy, czyli ostre podgłośniowe zapalenie krtani',
        description: ``,
        dosage: `W przypadku krupu rzekomego podawaj Aconitum co dwie, trzy godziny, a co najmniej dwa razy dziennie. 
            Jeśli to nie przynosi poprawy lub zacząłeś leczenie w dwanaście godzin po wystąpieniu objawów, wybierz inny lek i podawaj go trzy, cztery razy dziennie.
            Kiedy należy podać inny lek: We wczesnych okresach krupu rzekomego, kiedy nie ma poprawy po podaniu dwóch dawek Aconitum. 
            W późniejszych okresach, gdy zastosowałeś inny lek, zmień go, jeśli objawy nie zmniejszają się w ciągu 12-24 godzin. Jeśli objawy nasilają się, zmień lek po sześciu godzinach.`,
        arrOfRemedies: [
            {
                remedy: 'ACONITUM NAPELLUS',
                mainSymptoms: [
                    'Najwcześniejsze okresy rozwoju choroby, z suchym kaszlem, który właśnie się zaczyna.',
                ],
                confirmingSymptoms: [
                    `Lęk, niepokój, pobudzenie.`,
                    `Objawy pojawiają się nagle.`,
                    `Pacjent siedzi w łóżku i dłońmi obejmuje gardło.`,
                ],
            },
            {
                remedy: 'SPONGIA',
                mainSymptoms: [
                    'Podaj lek, jeśli nie było efektu po Aconitum lub gdy objawy już trwały ponad dwanaście godzin.',
                    `Głośny, suchy, ochrypły kaszel.`,
                ],
                confirmingSymptoms: [
                    `Kaszel przypomina brzmieniem piłowanie suchego kloca drewna.`,
                    `Kaszel budzi chorego ze snu, ma on wówczas wrażenie zaciskania gardła.`,
                    `Kaszel nasila się przy mówieniu, pod wpływem zimnych napojów i podekscytowania.`,
                ],
            },
            {
                remedy: 'HEPAR SULFURIS',
                mainSymptoms: [
                    'Do stosowania w późniejszych okresach krupu rzekomego, kiedy kaszel jest bardziej grzechoczący.',
                ],
                confirmingSymptoms: [
                    `Drażliwość.`,
                    `Objawy nasilają się pod wpływem zimna i zimnego powietrza; odkrycie się wywołuje napad kaszlu.`,
                    `Kaszel nasila się przy głębokim oddychaniu i przed północą.`,
                ],
            },
            {
                remedy: 'drosera rotundifolia',
                mainSymptoms: [
                    'Suchy, szczekający kaszel z dzwoniącym pogłosem.',
                ],
                confirmingSymptoms: [
                    
                ],
            }
        ],
    },
    {
        illnessName: 'Kolka',
        description: ``,
        dosage: `Nawet co godzina, jeśli objawy są nasilone: gdy objawy już będą ustępować, lek podajemy rzadziej, przez okres dwóch dni.
            Kiedy należy podać inny lek: Jeśli nie stwierdza się istotnej poprawy w ciągu dwunastu godzin od początku leczenia.`,
        arrOfRemedies: [
            {
                remedy: 'CHAMOMILLA',
                mainSymptoms: [
                    `Niezwykle silna drażliwość.`,
                    `Głośny, niemal nieustanny krzyk.`,
                ],
                confirmingSymptoms: [
                    `Nasilenie objawów w nocy.`,
                    `Poprawa przy noszeniu i kołysaniu.`,
                    `Jeden policzek zaczerwieniony, drugi blady.`,
                    `Pogorszenie pod wpływem ciepła.`,
                ],
            },
            {
                remedy: 'COLOCYNTHIS',
                mainSymptoms: [
                    'Rozdrażnienie i kolka zmniejszają się pod wpływem ucisku na brzuszek; dziecko przyciąga kolana do klatki piersiowej.',
                ],
                confirmingSymptoms: [
                    `Poprawa pod wpływem ciepła.`,
                    `Dziecko mocno chwyta i obejmuje przedmioty i osoby.`,
                ],
            },
            {
                remedy: 'magnesium phosphoricum',
                mainSymptoms: [
                    'Objawy kolki zmniejszają się głównie pod wpływem ciepła, jednak także przy delikatnym ucisku na brzuszek.',
                ],
                confirmingSymptoms: [
                    `Dziecko leży z kolanami przywiedzionymi do klatki piersiowej.`,
                    `Dziecko sprawia wrażenie rozzłoszczonego, nie jest to jednak bardzo typowy objaw.`,
                ],
            },
            {
                remedy: 'NUX VOMICA',
                mainSymptoms: [
                    'Objawy pojawiają się po tym, gdy dziecko lub matka zjedli coś ciężkostrawnego lub po tym, gdy matka wzięła lek, narkotyk lub napiła się alkoholu.',
                ],
                confirmingSymptoms: [
                    'Dziecko sprawia wrażenie rozdrażnionego i rozzłoszczonego.',
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    'Objawy ogólne Pulsatilla to łagodne usposobienie - dziecko zatem sprawia raczej wrażenie rozdrażnionego i rozkapryszonego niż bardzo rozzłoszczonego.',
                ],
                confirmingSymptoms: [
                    `Dziecko chce być noszone i przytulane; pragnie fizycznego kontaktu i okazania uczucia. Podobnie, może troszkę mniej, pragnie się samo poruszać.`,
                    `Objawy mogą wystąpić po zjedzeniu ciężkostrawnego pokarmu.`,
                ],
            },
            {
                remedy: 'BRYONIA',
                mainSymptoms: [
                    'Ruch nasila objawy - dziecko leży nieruchomo i raczej krzyczy niż marudzi.',
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'IPECACUANHA',
                mainSymptoms: [
                    'Częste ulewanie i wymioty.',
                ],
                confirmingSymptoms: [
                    'Ślinienie się.',
                ],
            },
            {
                remedy: 'IGNATIA',
                mainSymptoms: [
                    'Objawy pojawiają się po przeżyciach emocjonalnych i stresie, którego doświadczyło dziecko lub matka.',
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'JALAPA',
                mainSymptoms: [
                    'Lek pomocny w niektórych przypadkach kolki, gdy inne preparaty zawiodły.',
                ],
                confirmingSymptoms: [
                    
                ],
            }
        ],
    },
    {
        illnessName: 'Bolesne ząbkowanie',
        description: ``,
        dosage: `Do trzech razy dziennie; zacznij znów podawać lek, gdy tylko objawy nawrócą. Kiedy należy podać inny lek: Jeśli nie ma wyraźnej poprawy w ciągu doby.`,
        arrOfRemedies: [
            {
                remedy: 'CHAMOMILLA',
                mainSymptoms: [
                    'Dziecko krzyczy z powodu silnego bólu; nie można go utulić.',
                    `Bardzo duża drażliwość.`,
                ],
                confirmingSymptoms: [
                    `Dziecko wciąż trzyma palce w ustach.`,
                    `Dziecko ciągle czegoś chce, jednak nie można go zadowolić; odmawia przyjęcia rzeczy, o które prosiło.`,
                    `Wybuchy gniewu, dziecko uderza innych.`,
                    `Dziecko uspokaja się na rękach, kiedy się je kołysze.`,
                    `Jeden policzek zaczerwieniony, drugi blady.`,
                ],
            },
            {
                remedy: 'IGNATIA',
                mainSymptoms: [
                    'Dziecko jest bardzo zestresowane bólem, nie jest jednak tak bardzo rozdrażnione - raczej popłakuje i spazmatycznie łapie powietrze niż krzyczy.',
                ],
                confirmingSymptoms: [
                    `Wzdychanie.`,
                    `Dziecko się trzęsie, czasem jest to ograniczone do jednej części ciała.`,
                    `Budzi się w nocy z przejmującym płaczem.`,
                ],
            },
            {
                remedy: 'KREOSOTUM',
                mainSymptoms: [
                    'Dziecko odczuwa silny ból, niekoniecznie jest jednak gniewnie rozdrażnione.',
                ],
                confirmingSymptoms: [
                    'Czerwone, zapalne dziąsła tak spuchnięte, że przypominają w dotyku gąbkę.',
                ],
            }
        ],
    },
    {
        illnessName: 'Moczenie nocne',
        description: ``,
        dosage: ` Podaj pojedynczą dawkę leku w potencji trzydziestej. 
            Kiedy należy podać inny lek: Jeśli nie ma poprawy po trzech, czterech tygodniach.`,
        arrOfRemedies: [
            {
                remedy: 'KREOSOTUM',
                mainSymptoms: [
                    'Dziecko bardzo trudno jest obudzić.',
                ],
                confirmingSymptoms: [
                    `Moczy się we wczesnych godzinach nocnych.`,
                    `Moczy się podczas marzeń sennych; może śnić o oddawaniu moczu.`,
                ],
            },
            {
                remedy: 'CAUSTICUM',
                mainSymptoms: [
                    `Dziecko moczy się dość wcześnie po zaśnięciu.`,
                    `Częściej moczy się zimą, kiedy dni lub noce są zimne, w czasie zmian pogody; moczenie nocne jest rzadsze latem.`,
                    `Popuszcza w ciągu dnia, gdy kaszle, kicha, śmieje się lub przy każdej gwałtownej emocji.`,
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'EQUISETUM',
                mainSymptoms: [
                    'Oddawanie moczu w czasie marzeń sennych lub nie ma typowego schematu moczenia nocnego.',
                ],
                confirmingSymptoms: [
                    'Dziecko oddaje dużą ilość moczu.',
                    `Tępy ból pęcherza lub uczucie parcia na mocz, które nie ustępuje po oddaniu moczu.`,
                ],
            },
            {
                remedy: 'SEPIA',
                mainSymptoms: [
                    'Dziecko oddaje mocz wkrótce po zaśnięciu.',
                ],
                confirmingSymptoms: [
                    `Popuszczanie moczu w ciągu dnia, przy śmiechu i kaszlu.`,
    `Objawy umysłowe i rysy osobowości typowe dla osób ze wskazaniem do podania preparatu Sepia: dziecko zachowuje rezerwę, nie lubi współczucia, chce przebywać w samotności.`,
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    'Dziecko jest delikatnej natury, wrażliwe, łatwo płacze i pragnie, by mu okazywano uczucia.',
                ],
                confirmingSymptoms: [
                    'Sypia na plecach, prawdopodobnie z rękami nad głową lub złożonymi na brzuchu.',
                ],
            },
            {
                remedy: 'BELLADONNA',
                mainSymptoms: [
                    'Dziecko śpi niespokojnie, jęczy przez sen, nawet krzyczy.',
                ],
                confirmingSymptoms: [
                    'Dziecko popuszcza mocz w ciągu dnia, szczególnie w pozycji stojącej.',
                ],
            }
        ],
    },
    {
        illnessName: 'Odra',
        description: ``,
        dosage: `Co cztery, sześć godzin, przez trzy dni. Kiedy należy podać inny lek: jeśli objawy nie zmniejszają się po upływie trzech dni.`,
        arrOfRemedies: [
            {
                remedy: 'ACONITUM NAPELLUS',
                mainSymptoms: [
                    'Pierwszy okres choroby, która najprawdopodobniej jest odrą, przy szybko narastających objawach.',
                ],
                confirmingSymptoms: [
                    'Gorączka, pobudzenie, wydzielina kataralna, zaczerwienione oczy, światło-wstręt, suchy krupowy kaszel, kłujące bóle i niespokojny sen.',
                ],
            },
            {
                remedy: 'BELLADONNA',
                mainSymptoms: [
                    `Gorączka z zaczerwienieniem twarzy, pulsujący ból głowy.`,
                    `Lek może być stosowany we wczesnych okresach choroby oraz wówczas, gdy
                    już pojawiła się wysypka.`,
                ],
                confirmingSymptoms: [
                    `Splątanie, jakiekolwiek majaczenie.`,
                    `Mimowolne skurcze mięśni nóg.`,
                    `Przewrażliwienie na światło, hałas i uciążliwe dźwięki.`,
                ],
            },
            {
                remedy: 'GELSEMIUM',
                mainSymptoms: [
                    `Powolne narastanie objawów, stopniowo narastająca gorączka i dreszcze.`, 
                    `Dziecko czuje się ociężałe i zmęczone.`,
                    `Lek przydatny przed pojawieniem się wysypki i po jej wystąpieniu.`,
                ],
                confirmingSymptoms: [
                    `Małe pragnienie.`,
                    `Ból u podstawy czaszki.`,
                    `Wodnista wydzielina kataralna, która drażni skórę górnej wargi.`,
                    `Dziecko jest apatyczne, leży bez ruchu, chce, by mu nie przeszkadzano.`,
                ],
            },
            {
                remedy: 'EUPHRASIA',
                mainSymptoms: [
                    `Wśród objawów dominuje katar i podrażnienie oczu.`,
                    `Oczy są zaczerwienione i błyszczące; pod wpływem światła występuje ból oczu.`,
                ],
                confirmingSymptoms: [
                    `Obfita wydzielina kataralna, która nie drażni skóry.`,
                    `Objawy ze strony nosa i oczu łagodnieją na świeżym powietrzu.`,
                    `Suchy kaszel i chrypa.`,
                    `Pulsujący ból głowy, który zmniejsza się po pojawieniu się wysypki.`,
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    `Lek przydatny w późniejszych okresach odry, po zmniejszeniu się gorączki.`,
                    `Wydzielina kataralna żółta i gęsta.`,
                    `Lek może być zastosowany w każdym okresie, gdy wyraźne są objawy ogólne, charakterystyczne dla tego preparatu.`,
                ],
                confirmingSymptoms: [
                    `Kaszel; może być suchy nocą, wilgotny w ciągu dnia.`,
                    `Nudności lub biegunka.`,
                    `Ból ucha.`,
                    `Dolegliwości ze strony oczu, które utrzymują się jeszcze po ustąpieniu odry.`,
                ],
            },
            {
                remedy: 'BRYONIA',
                mainSymptoms: [
                    `Wysypka, która pojawia się późno w przebiegu odry.`,
                    `Wyraźne objawy ze strony klatki piersiowej: suchy i bolesny kaszel, kłujące bóle.`,
                ],
                confirmingSymptoms: [
                    `Bóle kończyn i reszty ciała, które nasilają się pod wpływem ruchu.`,
                    `Skurcze mięśni twarzy, wokół oczu i ust.`,
                    `Zaparcia.`,
                    `Bóle okolicy czołowej głowy.`,
                    `Uczucie suchości w ustach; ogromna ochota na chłodne napoje.`,
                ],
            }
        ],
    },
    {
        illnessName: 'Wirusowe zapalenie przyusznic/Świnka',
        description: ``,
        dosage: `Co cztery, sześć godzin, do trzech dni.
            Kiedy należy podać inny lek: Jeśli po dwóch dniach nie spostrzegłeś poprawy.`,
        arrOfRemedies: [
            {
                remedy: 'BELLADONNA',
                mainSymptoms: [
                    `Choroba rozpoczyna się nagle.`,
                    `Okolica ślinianek przyusznych jest gorąca i czerwona.`,
                ],
                confirmingSymptoms: [
                    `Dziecko wydaje się być splątane, może majaczyć.`,
                    `Zaczerwienienie twarzy, twarz błyszczy.`,
                    `Nagłe i silne bóle w okolicy ślinianek; palący ból gardła`,
                ],
            },
            {
                remedy: 'PHYTOLACCA',
                mainSymptoms: [
                    'Zajęte gruczoły ślinowe są bardzo twarde, niemal jak kamień.',
                ],
                confirmingSymptoms: [
                    `Zajęcie ślinianek podżuchwowych.`,
                    `Uczucie ciśnięcia i ciągnięcia w okolicy ślinianek.`,
                    `W czasie połykania występuje ból strzelający do ucha.`,
                    `Skóra ciała i twarz blade.`,
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    `Lek szczególnie przydatny w późniejszych okresach świnki lub wówczas, gdy zajęte są gruczoły piersiowe, jądra lub jajniki.`,
                    `lub`,
                    `Obecne są ogólne objawy preparatu Pulsatilla (dziecko jest delikatnej natury, wrażliwe, łatwo płacze, pragnie, by mu okazywano uczucia, nie ma zwiększonej ochoty na napoje i pragnie świeżego powietrza).`,
                ],
                confirmingSymptoms: [
                    'Uczucie suchości w jamie ustnej, grubo obłożony język.',
                ],
            },
            {
                remedy: 'mercurius vivus i mercurius solubilis',
                mainSymptoms: [
                    `Nieprzyjemny posmak na języku, odór z ust, nadmierne ślinienie się.`,
                    `Nasilona potliwość, pot ma nieprzyjemny zapach. Poty są najbardziej nasilone w nocy.`,
                ],
                confirmingSymptoms: [
                    'Zajęcie ślinianek podżuchwowych.',
                ],
            },
            {
                remedy: 'PILOCARPINUM',
                mainSymptoms: [
                    'Lek, który może być stosowany zamiast Belladonny, jeśli nie ma wyraźnych wskazań do podania innego preparatu.',
                ],
                confirmingSymptoms: [
                    'Obfite poty z następującym po nich silnym pragnieniem, ślinienie się, ogólne osłabienie.',
                ],
            }
        ],
    },
    {
        illnessName: 'Ospa wietrzna',
        description: ``,
        dosage: `Co cztery do sześciu godzin, przez trzy dni. Kiedy należy podać inny lek: Jeśli objawy nie zmniejszyły się w ciągu dwóch dni.`,
        arrOfRemedies: [
            {
                remedy: 'RHUS TOXICODENDRON',
                mainSymptoms: [
                    'Silny świąd, który nasila się wskutek drapania, w nocy i podczas odpoczynku.',
                ],
                confirmingSymptoms: [
                    `Dziecko jest pobudzone, nie może spać.`,
                    `Zmiany na skórze są duże, zawierają dużo ropy.`,
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    'Dziecko jest delikatnej natury, wrażliwe, łatwo płacze, pragnie, by mu okazywano uczucie.',
                ],
                confirmingSymptoms: [
                    `Małe pragnienie, nawet mimo gorączki.`,
                    `Dziecko czuje się gorzej w ciepłych pomieszczeniach i w nocy, lepsze samopoczucie po wyjściu na powietrze.`,
                ],
            },
            {
                remedy: 'ANTIMONIUM TARTARICUM',
                mainSymptoms: [
                    'Wysypka rozwija się powoli.',
                ],
                confirmingSymptoms: [
                    `Zmiany skórne są duże.`,
                    `Grzechoczący kaszel.`,
                ],
            }
        ],
    },
    {
        illnessName: 'Ból ucha',
        description: ``,
        dosage: `Co trzy, sześć godzin, przez 2-3 dni. Zaprzestań podawania leku po stwierdzeniu wyraźnej poprawy; powtórz kurację, jeśli objawy znów się nasilają lub jeśli nie stwierdzasz dalszej poprawy po dwunastu godzinach.
            Kiedy należy podać inny lek: Jeśli nie stwierdzasz poprawy po 12-24 godzinach leczenia.`,
        arrOfRemedies: [
            {
                remedy: 'BELLADONNA',
                mainSymptoms: [
                    'Ból ucha pojawia się nagle i jest silny. Przed pojawieniem się bólu występuje niewiele objawów przeziębienia (nie stwierdza się gęstej lub podbarwionej wydzieliny kataralnej).',
                ],
                confirmingSymptoms: [
                    `Jasnoczerwone zabarwienie małżowiny usznej, przewodu słuchowego zewnętrznego lub błony bębenkowej. Nie stwierdza się w badaniu obecności ropy. Zapaleniu ucha towarzyszy nagłe wystąpienie wysokiej gorączki.`,
                    `Ból ucha szerzy się w dół i obejmuje szyję, może też współwystępować ból gardła lub twarzy.`,
                ],
            },
            {
                remedy: 'FERRUM PHOSPHORICUM',
                mainSymptoms: [
                    `Wczesne okresy zapalenia ucha, nie ma jeszcze wydzieliny ropnej; objawy są podobne jak te, które są wskazaniem do podania Belladonny, nie są jednak tak intensywne.`,
                    `Podaj lek, jeśli przy istniejących wskazaniach do Belladonny, podanie tego leku nie przyniosło spodziewanej poprawy.`,
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'HEPAR SULFURIS',
                mainSymptoms: [
                    `Ostry i intensywny ból ucha.`,
                    `Bólowi ucha towarzyszy gęsta, podbarwiona wydzielina kataralna lub taki też wyciek z ucha.`,
                    `Drażliwość.`,
                ],
                confirmingSymptoms: [
                    `Uczucie zimna, dreszcze. Chory nie znosi chłodu, nie lubi się odkrywać, pragnie przebywać w cieple.`,
                    `Ból ucha nasila się pod wpływem zimna, na dworze, pod wpływem chłodnych okładów lub w nocy; poprawa pod wpływem ciepła.`,
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    `Łagodne usposobienie; chory pragnie, by mu okazywać uczucie, chce fizycznego kontaktu.`,
                    `Gęsta, żółta bądź zielona wydzielina kataralna lub wyciek z ucha treści o podobnym charakterze.`,
                ],
                confirmingSymptoms: [
                    `Ból ucha nasila się w nocy i w ciepłych pomieszczeniach.`,
                    `Ogólne pogorszenie samopoczucia w cieple; chory pragnie świeżego powietrza.`,
                    `Pragnienie niewielkie lub brak pragnienia.`,
                ],
            },
            {
                remedy: 'CHAMOMILLA',
                mainSymptoms: [
                    `Niezwykle silne rozdrażnienie; dziecko płacze i krzyczy gniewnie, nie chce, by go dotykano, nic go nie zadowala, może uderzać inne osoby.`,
                    `Silny ból ucha.`,
                ],
                confirmingSymptoms: [
                    `Dziecko uspokaja się, jeśli się je nosi.`,
                    `Bóle uszu, które towarzyszą ząbkowaniu.`,
                    `Objawy nasilają się przy pochylaniu się, łagodnieją pod wpływem ciepła lub ciepłego okrycia chorego.`,
                    `Przejrzysta wydzielina kataralna, zwykle wodnista.`,
                ],
            },
            {
                remedy: 'mercurius vivus i mercurius solubilis',
                mainSymptoms: [
                    'Inny lek, często stosowany w tym stadium zapalenia ucha, kiedy już ropa gromadzi się w uchu środkowym.',
                ],
                confirmingSymptoms: [
                    `Ból ucha nasila się pod wpływem ciepła i w nocy.`,
                    `Chory obficie się poci, pot ma nieprzyjemny zapach; głowa silnie spocona.`,
                    `Zwiększone ślinienie, nieprzyjemny zapach z ust, obrzęk języka.`,
                    `Objawy nasilają się przy pochylaniu się, zmniejszają się w cieple lub po ciepłym okryciu.`,
                ],
            },
            {
                remedy: 'SILICEA',
                mainSymptoms: [
                    `Późniejsze okresy zapalenia ucha.`,
                    `Osłabienie, uczucie fizycznego zmęczenia.`,
                    `Uczucie zimna, chory chce być dodatkowo okrywany.`,
                ],
                confirmingSymptoms: [
                    
                ],
            }
        ],
    },
    {
        illnessName: 'Ból gardła',
        description: `Uwaga: Wszystkie poniżej przedstawione leki pokrywają swoim działaniem także powiększenie węzłów chłonnych i wysypkę płoniczą.`,
        dosage: `Co sześć-osiem godzin przez dwa lub trzy dni. Zakończ leczenie po stwierdzeniu poprawy.
            Kiedy należy podać inny lek: Jeśli nie ma wyraźnej poprawy po dwudziestu
            czterech godzinach.`,
        arrOfRemedies: [
            {
                remedy: 'BELLADONNA',
                mainSymptoms: [
                    `W ciągu pierwszych dwudziestu czterech godzin, gdy ból występuje nagle i towarzyszy mu gorączka i zaczerwienienie skóry.`,
                    `Zaczerwienie migdałków lub gardła, często z obrzękiem, jednak nie stwierdza się treści ropnej.`,
                ],
                confirmingSymptoms: [
                    `"Poziomkowy" wygląd języka, jaki widuje się w płonicy.`,
                    `Ból gardła nasila się przy połykaniu, szczególnie płynów.`,
                    `Uczucie wysuszenia śluzówek gardła.`,
                ],
            },
            {
                remedy: 'PHYTOLACCA',
                mainSymptoms: [
                    `Ból gardła, gorączka, ciało jest obolałe.`,
                    `Gardło jest ciemnoczerwone, nawet purpurowe lub sinawe.`,
                    `Ból nasila się pod wpływem ciepłych napojów.`,
                ],
                confirmingSymptoms: [
                    `W czasie połykania ból promieniuje do ucha.`,
                    `Nieustanna potrzeba przełykania.`,
                    `Uczucie zimna i dreszcze.`,
                    `Przy wysuwaniu języka pojawia się ból u jego podstawy.`,
                ],
            },
            {
                remedy: 'mercurius vivus i mercurius solubilis',
                mainSymptoms: [
                    `W gardle stwierdza się ropę lub żółtą bądź białą wydzielinę.`,
                    `Ślinotok.`,
                ],
                confirmingSymptoms: [
                    `Nadwrażliwość na ciepło i zimno.`,
                    `Ból gardła ma większe nasilenie w nocy.`,
                    `Pragnienie.`,
                    `Język obrzęknięty, brzydki zapach z ust.`,
                ],
            },
            {
                remedy: 'LYCOPODIUM',
                mainSymptoms: [
                    `Ból gardła ma większe nasilenie po stronie prawej lub zaczyna się po stronie prawej, następnie obejmuje stronę przeciwną.`,
                    `Ból zmniejsza się po ciepłych napojach i pokarmach.`,
                ],
                confirmingSymptoms: [
                    'Objawy ogólne nasilają się późnym popołudniem i pacjent czuje się najgorzej między czwartą po południu a ósmą wieczorem.',
                ],
            },
            {
                remedy: 'LACHESIS',
                mainSymptoms: [
                    `Ból silniejszy po lewej stronie gardła lub rozpoczyna się po tej stronie, by następnie objąć i stronę przeciwną.`,
                    `Ból nasila się przy piciu płynów.`,
                ],
                confirmingSymptoms: [
                    `Ból gardła ma największe nasilenie rano, szczególnie po przebudzeniu się.`,
                    `Gardło jest wrażliwe na dotyk; ubranie uciskające gardło bardzo przeszkadza, może wywoływać wrażenie duszenia się i dławienia.`,
                    `Objawy ogólne chorego nasilają się w ciepłym otoczeniu.`,
                ],
            },
            {
                remedy: 'HEPAR SULFURIS',
                mainSymptoms: [
                    `Tworzy się ropa, migdałki i gardło są silnie obrzęknięte.`,
                    `Drażliwość.`,
                    `Uczucie zimna i dreszcze.`,
                ],
                confirmingSymptoms: [
                    `Wrażenie jakby coś utknęło w gardle.`,
                    `Ból gardła nasila się pod wpływem zimna, poprawa po wypiciu ciepłego płynu
                    i w ciepłym otoczeniu.`,
                ],
            },
            {
                remedy: 'ARSENICUM ALBUM',
                mainSymptoms: [
                    `Bólowi gardła towarzyszą dreszcze, wzmożone pragnienie, pobudzenie i uczucie zmęczenia.`,
                    `Ból gardła łagodnieje po wypiciu ciepłych napojów.`,
                ],
                confirmingSymptoms: [
                    `Ból gardła jest palący.`,
                    `Ból gardła nasila się przy przełykaniu, pod wpływem chłodnych napojów i w zimnym otoczeniu.`,
                ],
            },
            {
                remedy: 'RHUS TOXICODENDRON',
                mainSymptoms: [
                    `Ból gardła zmniejsza się pod wpływem ciepłych napojów i w ciepłym otoczeniu.`,
                    `Pobudzenie.`,
                ],
                confirmingSymptoms: [
                    `Ból gardła rozpoczyna się po nadwyrężeniu gardła śpiewaniem lub mówieniem lub pod wpływem wilgoci i zimna.`,
                    `Chory ma wciąż ochotę na łyk wody.`,
                    `Uczucie suchości w ustach i w gardle.`,
                    `Bóle kostno-mięśniowe przy nieruchomym leżeniu; nasilają się przy pierwszym poruszeniu, zmniejszają się jednak, gdy pacjent się rozrusza.`,
                ],
            },
            {
                remedy: 'APIS MELLIFICA',
                mainSymptoms: [
                    `Kłujące bóle gardła.`,
                    `Wyraźny obrzęk migdałków lub gardła.`,
                ],
                confirmingSymptoms: [
                    `Ból gardła zmniejsza się po chłodnych napojach, nasila się po ciepłych płynach i w ciepłym otoczeniu.`,
                    `Obrzęknięte partie gardła wyglądają jak ostrzyknięte wodą.`,
                    `Brak pragnienia.`,
                ],
            },
            {
                remedy: 'SULFUR',
                mainSymptoms: [
                    `Przedłużający się ból gardła.`,
                    `Obecność co najmniej jednego z następujących objawów ogólnych: pogorszenie samopoczucia w ciepłym otoczeniu; ospałość; nieprzyjemny zapach z ust, pot i wydzieliny mają także nieprzyjemna woń.`,
                ],
                confirmingSymptoms: [
                    `Palący ból gardła i wysuszenie śluzówek; poprawa po wypiciu ciepłego płynu.`,
                    `Uczucie, jakby w gardle utknął koralik, ość lub włos.`,
                ],
            }
        ],
    },
    {
        illnessName: 'Zaburzenia trawienia',
        description: `Większość wymienionych w tym miejscu leków może być pomocna dla pacjentów z najprzeróżniejszymi kombinacjami takich objawów chorobowych przewodu pokarmowego, jak: wymioty, biegunka lub ból brzucha.`,
        dosage: `Co godzina, jeśli ból jest intensywny lub chory wciąż zwraca. Jeśli objawy są mniej nasilone, podawaj lek rzadziej - nawet co dwanaście godzin, jeśli wymioty i biegunka są niewielkie.
            Kiedy należy podać inny lek: Przy znacznie nasilonych objawach poprawa powinna być szybka, konieczne jest jednak odczekanie godziny lub dwóch, zanim zdecydujemy się na podanie innego preparatu. Jeśli objawy są łagodne, ze zmiana preparatu należy odczekać dwanaście, dwadzieścia cztery godziny.`,
        arrOfRemedies: [
            {
                remedy: 'ARSENICUM ALBUM',
                mainSymptoms: [
                    `Bardzo silne wymioty`,
                    `i/lub`,
                    `Biegunka z towarzyszącymi silnymi bólami żołądka i jelit.`,
                    `Jakiekolwiek objawy z przewodu pokarmowego, którym towarzyszy pobudzenie, wyczerpanie, lęk, dreszcze i wzmożone pragnienie.`,
                    `Najczęściej jest wskazane podanie tego właśnie preparatu w przypadku zatruć pokarmowych; należy go podać, jeśli nie ma wyraźnych wskazań do zastosowania innego preparatu.`,
                ],
                confirmingSymptoms: [
                    `Palący ból, który zmniejsza się pod wpływem ciepła, nasila się pod wpływem zimna; uczucie palenia w kiszce stolcowej w czasie oddawania stolca lub po wypróżnieniu.`,
                    `Pragnienie i chęć wypicia tylko łyka zimnej wody.`,
                    `Objawy po raz pierwszy występują w nocy lub są najsilniejsze o tej porze doby, często po północy.`,
                    `Wymioty nasilają się po jedzeniu i piciu, szczególnie rzeczy zimnych; wypicie niewielkiej ilości płynu może wywołać natychmiastowe wymioty.`,
                ],
            },
            {
                remedy: 'IPECACUANHA',
                mainSymptoms: [
                    'Ciągłe, niezwykle silne nudności z jakimikolwiek towarzyszącymi objawami ze strony przewodu pokarmowego; nudności nie ustępują po wymiotach.',
                ],
                confirmingSymptoms: [
                    `Wymioty mogą mieć znaczne nasilenie, częstsze są po jedzeniu i piciu.`,
                    `Nudności nasilają się pod wpływem zapachu jedzenia.`,
                    `Niewielkie pragnienie.`,
                    `Kłujące i przeszywające bóle brzucha.`,
                    `Zielone stolce.`,
                    `Język nie jest obłożony, zauważalne jest jednak wzmożone wydzielanie śliny, ślinotok.`,
                ],
            },
            {
                remedy: 'COLOCYNTHIS',
                mainSymptoms: [
                    'Kurczowe bóle brzucha, kolka; ulgę przynosi ucisk brzucha i ciepło.',
                ],
                confirmingSymptoms: [
                    `Ból nasila się po jedzeniu i piciu.`,
                    `Chory wymiotuje, gdy ból jest najsilniejszy.`,
                    `Biegunkę poprzedzają kurczowe bóle brzucha; oddanie stolca zmniejsza ból,
                    przynajmniej na pewien czas.`,
                    `Objawy występują po tym, jak chory rozgniewał się lub został obrażony.`,
                ],
            },
            {
                remedy: 'magnesium phosphoricum',
                mainSymptoms: [
                    'Ból brzucha, który zmniejsza się pod wpływem ciepła i/lub ucisku; wymioty i biegunka mniej nasilone niż w przypadku chorych ze wskazaniem do Colocynthis.',
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'BELLADONNA',
                mainSymptoms: [
                    `Wczesne okresy choroby, gdy objawy wystąpiły nagle.`,
                    `Wyraźne objawy ogólne: gorączka, zaczerwienienie twarzy, otępienie.`,
                    `Lek także pomocny w innych chorobach, które rozpoczynają się od wymiotów i biegunki, z towarzyszącą gorączką.`,
                ],
                confirmingSymptoms: [
                    `Ostre, napadowe bóle.`,
                    `Ból nasila się po jedzeniu, ruchu i lekkim ucisku; poprawa pod wpływem dość silnego ucisku.`,
                    `Zarówno zwracana treść, jak i stolec zawierają śluz.`,
                ],
            },
            {
                remedy: 'BRYONIA',
                mainSymptoms: [
                    'Jakiekolwiek objawy ze strony przewodu pokarmowego, które wyraźnie nasilają się pod wpływem ruchu.',
                ],
                confirmingSymptoms: [
                    `Pacjent jest drażliwy, chce, by go zostawiono w spokoju, pragnie leżeć w bezruchu.`,
                    `Poruszenie nawet jedną częścią ciała wywołuje objawy.`,
                    `Wymioty po jedzeniu lub piciu, nawet niewielkiej ilości płynu.`,
                    `Ból brzucha zmniejsza się pod wpływem ucisku i po wypróżnieniu.`,
                    `Biegunka ma większe nasilenie w godzinach rannych, po wstaniu z łóżka; stolec papkowaty.`,
                ],
            },
            {
                remedy: 'NUX VOMICA',
                mainSymptoms: [
                    `Dolegliwości przewodu pokarmowego wystąpiły po nadmiernym wysiłku umysłowym, po napięciach, po przejedzeniu, nadużyciu alkoholu, kawy lub innych używek; przede wszystkim lek wskazany dla osób z dolegliwościami po nadużyciu alkoholu.`,
                    `Zgaga, nudności, odruchy wymiotne, kwaśne odbijania.`,
                    `Drażliwość`,
                ],
                confirmingSymptoms: [
                    `Objawy mają większe nasilenie w godzinach porannych.`,
                    `Chory oddaje stolec płynny, brązowy lub też stolec śluzowy - często i w niewielkich ilościach.`,
                    `Jedzenie wywołuje nudności, wzdęcie, wiatry lub wymioty.`,
                    `Silne parcie na stolec, jednak bez wypróżnienia lub też wypróżnienie niewielkie.`,
                    `Ból w krzyżu przed lub w czasie wypróżnienia.`,
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    `Objawy ze strony przewodu pokarmowego po ciężkim, tłustym posiłku, szczególnie po lodach`,
                    `lub`,
                    `Każde dolegliwości przewodu pokarmowego wówczas, gdy są obecne objawy ogólne charakterystyczne dla preparatu Pulsatilla.`,
                ],
                confirmingSymptoms: [
                    `Zgaga, mdłości, przykry smak w ustach, uczucie ociężałości po posiłku.`,
                    `Język grubo obłożony, żółty lub biały.`,
                    `Nudności po przyjęciu płynu, szczególnie ciepłego; poprawa po wypiciu zimnego napoju.`,
                    `Chory zwraca częściowo przetrawiony pokarm.`,
                    `Biegunka z zielonymi wypróżnieniami, domieszką śluzu lub też stolec o wciąż zmieniającym się charakterze.`,
                ],
            },
            {
                remedy: 'PHOSPHORUS',
                mainSymptoms: [
                    'Objawy podobne do tych, w których należy podać Arsenicum: silne wymioty, obfita biegunka, palące bóle, osłabienie, niepokój, pobudzenie, wzmożone pragnienie, zwłaszcza na zimne napoje (w takich przypadkach należy zastosować Arsenicum, chyba że u pacjenta stwierdza się wymienione poniżej objawy).',
                ],
                confirmingSymptoms: [
                    `Nudności i wymioty nasilają się po ciepłych płynach; chory zwraca, gdy wypity płyn ogrzeje się w żołądku.`,
                    `Wymioty występują po zjedzeniu lub wypiciu nawet niewielkich ilości.`,
                    `Biegunka i nietrzymanie stolca; stolec wypływa w sposób niekontrolowany
                    z odbytnicy lub też chory ma wrażenie że zwieracz odbytu jest niedomknięty.`,
                    `Chory skarży się na uczucie czczości, pustki w żołądku lub całym brzuchu; uczucie głodu może uniemożliwiać choremu zaśnięcie w nocy.`,
                ],
            },
            {
                remedy: 'VERATRUM ALBUM',
                mainSymptoms: [
                    `Silna biegunka, chory oddaje stolec pod dużym ciśnieniem, czemu towarzyszą bóle kolkowe; po oddaniu stolca bóle na jakiś czas ustępują.`,
                    `Stolec przypomina wyglądem wodę, w której gotowano ryż, lub też pacjent oddaje wodnisty, zielony stolec, zawierający drobne, zielone płatki.`,
                    `Biegunce zwykle towarzyszą nasilone wymioty; jednoczesne oddawanie stolca i wymioty.`,
                ],
                confirmingSymptoms: [
                    `Ruch nasila i biegunkę, i wymioty.`,
                    `Silne dreszcze, zimne poty (szczególnie na czole).`,
                    `Znaczne osłabienie.`,
                    `Chory ma znaczne pragnienie i pije duże ilości zimnej wody.`,
                ],
            }
        ],
    },
    {
        illnessName: 'Żylaki odbytu',
        description: ``,
        dosage: `Dwa, trzy razy na dobę, do trzech dni.
            Kiedy należy podać inny lek: Jeśli po trzecim dniu nie stwierdza się poprawy.`,
        arrOfRemedies: [
            {
                remedy: 'AESCULUS HIPPOCASTANUM',
                mainSymptoms: [
                    'Ból nisko, w plecach, w okolicy ostatnich kręgów kręgosłupa.',
                ],
                confirmingSymptoms: [
                    `Wrażenie, jakby w odbycie utkwiła drzazga lub ość lub wrażenie ciężkości i ucisku w okolicy odbytu - jakby odbyt wypadał.`,
                    `Chory nie krwawi lub krwawienie jest niewielkie.`,
                ],
            },
            {
                remedy: 'NUX VOMICA',
                mainSymptoms: [
                    `Stosunkowo niewielkie dolegliwości; kłujące bóle, uczucie ściśnięcia lub trudne do sprecyzowania dolegliwości.`,
                    `lub`,
                    `Obecne objawy ogólne Nux.`,
                    `Dolegliwości wystąpiły u pacjenta nadużywającego leków, w tym preparatów na wypróżnienie, i kawy.`,
                ],
                confirmingSymptoms: [
                    `Dolegliwości mają największe nasilenie we wczesnych godzinach rannych,
                    w chłodnym otoczeniu, na świeżym powietrzu, po odkryciu się, w ciasnych ubraniach.`,
                    `Krwawienie nieobecne lub niewielkie.`,
                    `Świąd; poprawę przynosi przemywanie chłodną wodą.`,
                    `Przewlekłe zaparcie; parcie na stolec bez wypróżnienia.`,
                ],
            },
            {
                remedy: 'BELLADONNA',
                mainSymptoms: [
                    'Wczesne okresy zapalenia okolicy zmienionej żylakowato, silne zaczerwienienie, obrzęk, ból i silna wrażliwość na dotyk.',
                ],
                confirmingSymptoms: [
                    'Krwawienie jasnoczerwoną krwią.',
                ],
            },
            {
                remedy: 'hamamelis virginica',
                mainSymptoms: [
                    'Krwawienie z żylaka gęstą, ciemną krwią.',
                ],
                confirmingSymptoms: [
                    `Chory skarży się na ból, jednak sam żylak przy dotyku nie boli zbyt mocno.`,
                    `Uczucie pulsowania w kiszce stolcowej.`,
                ],
            },
            {
                remedy: 'ALOE',
                mainSymptoms: [
                    `Silny świąd.`,
                    `lub`,
                    `Palący ból; chory opisuje go, jakby ktoś drapał okolicę odbytu.`,
                ],
                confirmingSymptoms: [
                    `Ulga przy przemywaniu zimną wodą.`,
                    `Biegunka; uczucie osłabienia zwieracza odbytu, jakby chory nie był w stanie utrzymać stolca przy oddawaniu gazów lub moczu.`,
                    `Ból ma większe nasilenie w godzinach porannych, może budzić pacjenta.`,
                ],
            },
            {
                remedy: 'MURIATICUM ACIDUM',
                mainSymptoms: [
                    'Bardzo duża wrażliwość na dotyk; nawet lekkie dotknięcie wywołuje bardzo silny ból.',
                ],
                confirmingSymptoms: [
                    `Ból nasila się przy chodzeniu i jeździe na rowerze, motorze itp.`,
                    `Ciepła woda przynosi ulgę.`,
                    `Krwawienie.`,
                    `Hemoroidy widoczne są jedynie przy oddawaniu stolca lub moczu.`,
                    `Przy oddawaniu moczu i gazów chory nie jest w stanie utrzymać stolca.`,
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    `Ulga po przyłożeniu zimna`,
                    `lub`,
                    `Obecne ogólne objawy Pulsatilla.`,
                ],
                confirmingSymptoms: [
                    `Chory oddaje stolce o wciąż zmieniającej się barwie i konsystencji.`,
                    `Obecność żylaków w okresie dojrzewania i ciąży.`,
                ],
            }
        ],
    },
    {
        illnessName: 'Zapalenie wątroby',
        description: ``,
        dosage: `Co sześć-dwanaście godzin do sześciu dawek. Zakończ podawanie leku bezpośrednio po stwierdzeniu wyraźnych zmian w intensywności lub jakości objawów.
            Kiedy należy podać inny lek: Jeśli nie ma żadnych zmian w ciągu trzech lub czterech dni; szybciej, gdy wyraźne jest pogorszenie stanu.`,
        arrOfRemedies: [
            {
                remedy: 'ACONITUM NAPELLUS',
                mainSymptoms: [
                    'Najwcześniejsze stadia ostrej choroby wątroby, jeśli obecne są objawy ogólne, charakterystyczne dla tego preparatu - chory ma wysoką gorączkę, jest płaczliwy, pobudzony i lękowy.',
                ],
                confirmingSymptoms: [
                    'Silne, "strzelające" bóle w okolicy wątroby.',
                ],
            },
            {
                remedy: 'BELLADONNA',
                mainSymptoms: [
                    'Wczesne okresy zapalenia wątroby, jeśli obecne są objawy ogólne, charakterystyczne dla tego preparatu.',
                ],
                confirmingSymptoms: [
                    `Napadowy ból wątroby - nagle pojawia się i szybko znika.`,
                    `Ból nasila się przy oddychaniu, wstrząsach, przy leżeniu na prawym boku.`,
                ],
            },
            {
                remedy: 'CHELIDONIUM',
                mainSymptoms: [
                    'Ból promieniuje z wątroby do pleców, w okolice prawej łopatki (lub też promieniuje w jakimkolwiek innym kierunku).',
                ],
                confirmingSymptoms: [
                    `Silne bóle, kłucie w okolicy wątroby; dolegliwości zmniejszają się po jedzeniu.`,
                    `Biegunka, chory oddaje szary lub żółty stolec.`,
                    `Chory skarży się na ciężką głowę i dreszcze.`,
                    `Gorzki posmak w ustach.`,
                    `Język żółto obłożony.`,
                    `Niezwykła chęć na mleko.`,
                ],
            },
            {
                remedy: 'mercurius vivus i mercurius solubilis',
                mainSymptoms: [
                    `*Obecność kilku, charakterystycznych objawów:`,
                    `Język obrzmiały, na jego powierzchni widoczne odciski zębów, język obłożony, szaro-żółty.`,
                    `Brzydki zapach z ust. Obrzęk dziąseł; dziąsła osłabione, łatwo krwawią.`,
                    `Wątroba obrzęknięta, bolesna w dotyku; leżenie na prawym boku nasila dolegliwości bólowe.`,
                    `Stolce szare lub żółto-zielone.`,
                    `Lepki pot.`,
                    `Nadwrażliwość na ciepło i chłód.`,
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'LYCOPODIUM',
                mainSymptoms: [
                    `Ból promieniujący z wątroby do pleców, zwykle bardziej tępy niż w przypadku chorych ze wskazaniem do podania Chelidonium`,
                    `lub`,
                    `Obecne u chorego ogólne objawy, charakterystyczne dla tego właśnie preparatu.`,
                ],
                confirmingSymptoms: [
                    `Okolica wątroby nadwrażliwa na obmacywanie, bolesna, dolegliwości są wie sze przy leżeniu na prawym boku; brzuch wrażliwy na dotyk lub ucisk, jaki wywiera ubranie.`,
                    `Uczucie pełności już po kilku kęsach jedzenia.`,
                    `Wzdęcie, uczucie dyskomfortu w brzuchu po jedzeniu; przelewanie w górnej partii jamy brzusznej.`,
                ],
            },
            {
                remedy: 'NUX VOMICA',
                mainSymptoms: [
                    'Zapalenie wątroby u pacjentów nadużywających alkoholu lub leków, jeśli obecne są objawy ogólne tego preparatu.',
                ],
                confirmingSymptoms: [
                    `Wątroba obrzęknięta, bolesna w obmacywaniu.`,
                    `Ból wątroby nasila się po pracy umysłowej.`,
                    `Obecne objawy z przewodu pokarmowego, typowe dla Nux.`,
                ],
            },
            {
                remedy: 'CHINA',
                mainSymptoms: [
                    'Wątroba jest wyraźnie bolesna przy uciskaniu i obmacywaniu.',
                ],
                confirmingSymptoms: [
                    `Uczucie ciężkości lub pełności w brzuchu, szczególnie po jedzeniu.`,
                    `Częste odbijanie, co nie zmniejsza dolegliwości.`,
                    `Niezwykle silna ochota na zimne napoje, słodycze i kawę.`,
                ],
            }
        ],
    },
    {
        illnessName: 'Zapalenie pochwy',
        description: ``,
        dosage: `Jeden-trzy razy dziennie, zależnie od nasilenia objawów, przez trzy dni. Zakończ podawanie preparatu, gdy tylko stwierdzisz wyraźną poprawę lub zmianę.
            Kiedy należy podać inny lek: Jeśli pierwszy preparat nie pomógł, odczekaj dwa, trzy dni bez podawania żadnych preparatów, nim zdecydujesz się na podanie kolejnego leku.`,
        arrOfRemedies: [
            {
                remedy: 'KREOSOTUM',
                mainSymptoms: [
                    `Silne podrażnienie i pieczenie pochwy i zewnętrznych narządów płciowych; śluzówki są bolesne, palą, może występować świąd; tkanki są zaczerwienione i obrzęknięte.`,
                    `Nieprzyjemny zapach.`,
                ],
                confirmingSymptoms: [
                    `Upławy są obfitsze w godzinach porannych i w pozycji stojącej; znacznie zmniejszają swoje nasilenie w pozycji siedzącej i leżącej.`,
                    `Upławy pojawiają się i znikają.`,
                ],
            },
            {
                remedy: 'SEPIA',
                mainSymptoms: [
                    `Wydzielina jest żółtawa lub zielonkawa.`,
                    `Nieprzyjemny zapach.`,
                    `Lek pierwszego wyboru w leczeniu dzieci, chyba że występują wyraźne objawy, które wskazują na inny preparat.`,
                ],
                confirmingSymptoms: [
                    `Upławy mają największe nasilenie bezpośrednio przed miesiączką lub w połowie cyklu.`,
                    `Wydzielina jest bardziej obfita rano i przy chodzeniu.`,
                    `Uczucie nieprzyjemnego ucisku i ciężaru w dole brzucha i w miednicy.`,
                ],
            },
            {
                remedy: 'CALCAREA CARBONICA',
                mainSymptoms: [
                    `Upławy gęste, białe lub żółte.`,
                    `Silny świąd narządów płciowych (może się nasilać po oddaniu moczu).`,
                    `Obecność typowych objawów ogólnych tego preparatu.`,
                ],
                confirmingSymptoms: [
                    `Nagły wyciek wydzieliny z pochwy.`,
                    `Zapalenie pochwy u dziewczynki.`,
                ],
            },
            {
                remedy: 'GRAPHITES',
                mainSymptoms: [
                    `Upławy rzadkie, białawe, palące.`,
                    `Nagłe, bardzo obfite wycieki wydzieliny z pochwy.`,
                ],
                confirmingSymptoms: [
                    `Upławy nasilają się pod wpływem chodzenia.`,
                    `Uczucie słabości w plecach lub ciągnięcia w jamie brzusznej.`,
                    `Objawy nasilają się w godzinach rannych.`,
                ],
            },
            {
                remedy: 'BORAX',
                mainSymptoms: [
                    `Upławy przejrzyste i gęste jak białko jaja lub też gęste i białe jak biała pasta lub krochmal.`,
                ],
                confirmingSymptoms: [
                    `Uczucie ciepła, jakby z pochwy wypływała ciepła woda.`,
                    `Upławy najbardziej obfite w połowie cyklu.`,
                    `Silny lęk przed poruszaniem się w dół.`,
                    `Wyraźna nadwrażliwość na nagłe hałasy.`,
                ],
            },
            {
                remedy: 'NITRICUM ACIDUM',
                mainSymptoms: [
                    `Upławy są zielonkawe, brązowawe lub brunatne lub jest to przejrzysty, ciągnący się śluz.`,
                    `Wydzielina z pochwy silnie drażni skórę i śluzówki, ma nieprzyjemny zapach.`,
                ],
                confirmingSymptoms: [
                    'Upławy nasilają się bezpośrednio po miesiączce.',
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    `Białe upławy o konsystencji mleka lub śmietany`,
                    `lub`,
                    `Jakiekolwiek upławy, którym towarzyszą wyraźne objawy ogólne, charakterystyczne dla tego preparatu: brak pragnienia, płaczliwość, zmienność nastrojów, Ignięcie do innych ludzi, chory pragnie, by mu okazywano uczucie; pacjent czuje się gorzej w ciepłych pomieszczeniach.`,
                ],
                confirmingSymptoms: [
                    `Upławy nasilają się w pozycji leżącej.`,
                    `Zapalenie pochwy w okresie ciąży.`,
                    `Zapalenie pochwy u dziewczynki.`,
                ],
            }
        ],
    },
    {
        illnessName: 'Dolegliwości/Bóle menstruacyjne',
        description: ``,
        dosage: `Nawet co cztery godziny w czasie ostrych dolegliwości menstruacyjnych, leczenie należy powtórzyć przy nawrocie dolegliwości.
            Kiedy należy podać inny lek: Jeśli nie ma żadnej poprawy po sześciu-ośmiu godzinach.`,
        arrOfRemedies: [
            {
                remedy: 'BELLADONNA',
                mainSymptoms: [
                    `Ból zaczyna się i kończy nagle.`,
                    `Bóle kurczowe lub przypominające porodowe.`,
                    `Pogorszenie pod wpływem ruchu, chodzenia, wstrząsów.`,
                ],
                confirmingSymptoms: [
                    `Silne uczucie ciężaru i ucisku w dole brzucha i miednicy, czasem chora skarży się na wrażenie, że narządy miednicy zaraz jej wypadną dołem; dolegliwości zmniejszają się pod wpływem ucisku na narządy płciowe lub brzuch.`,
                    `Ból promieniuje z macicy do krzyża. Ból jajników przed lub w czasie miesiączki.`,
                    `Ból nasila się przy pochylaniu w pozycji siedzącej, a zmniejsza się po wyprostowaniu się.`,
                    `Bóle głowy wyprzedzają miesiączkę lub pojawiają się w czasie jej trwania.`,
                ],
            },
            {
                remedy: 'magnesium phosphoricum',
                mainSymptoms: [
                    `Poprawa pod wpływem ucisku i ciepła.`,
                    `Bóle skurczowe lub przypominające bóle porodowe.`,
                ],
                confirmingSymptoms: [
                    `Pacjentka odczuwa ulgę po pochyleniu się do przodu.`,
                    `Ból ogniskuje się w macicy, promieniuje we wszystkich kierunkach.`,
                ],
            },
            {
                remedy: 'COLOCYNTHIS',
                mainSymptoms: [
                    `Chora odczuwa ulgę po zgięciu się wpół, pod wpływem ucisku i ciepła.`,
                    `Ostre bóle okolicy jajników, szczególnie na krótko przed miesiączką.`,
                ],
                confirmingSymptoms: [
                    'Pacjentka jest drażliwa, łatwo wpada w gniew; bóle skurczowe mogą pojawiać się po tym, gdy pacjentka wpadnie w gniew lub będzie zmuszona stłumić uczucie gniewu.',
                ],
            },
            {
                remedy: 'actea racemosa cimicifuga racemosa',
                mainSymptoms: [
                    `Ostre bóle przemieszczające się z jednej strony na drugą`,
                    `i/lub`,
                    `Bóle krzyża przy krwawieniu miesięcznym.`,
                ],
                confirmingSymptoms: [
                    `Ból zmusza kobietę do zgięcia się wpół (choć przyjęcie takiej pozycji wcale nie musi zmniejszać bólu).`,
                    `Ból nasila się pod wpływem ruchu.`,
                ],
            },
            {
                remedy: 'CHAMOMILLA',
                mainSymptoms: [
                    `Ból tak silny, że zmusza kobietę do krzyku.`,
                    `Pacjentka jest wyraźnie rozdrażniona i gniewna.`,
                ],
                confirmingSymptoms: [
                    `Najwłaściwszy lek, jeśli bóle przypominają bóle porodowe.`,
                    `Uczucie ciężaru i ciągnięcia w dół.`,
                    `Ból pojawia się po rozdrażnieniu i irytacji.`,
                    `Ulga pod wpływem ciepła.`,
                ],
            },
            {
                remedy: 'LACHESIS',
                mainSymptoms: [
                    `Ból i inne dolegliwości, które radykalnie ustępują po rozpoczęciu się krwawienia miesięcznego.`,
                    `Objawy nasilają się pod wpływem dotyku i ucisku, nawet tego, który wywiera
                    ubranie.`,
                ],
                confirmingSymptoms: [
                    `Bóle umiejscowione po stronie lewej; ból w okolicy lewego jajnika.`, 
                    `Ból szerzy się w kierunku nadbrzusza i klatki piersiowej.`,
                    `Objawy pojawiają się lub nasilają się w czasie snu lub też bezpośrednio po przebudzeniu.`,
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    'Pacjentka jest płaczliwa, pragnie, by jej okazywać przywiązanie, ma zmienne nastroje, może być drażliwa, jednak nie jest gniewna; brak pragnienia; objawy nasilają się w ciepłych pomieszczeniach.',
                ],
                confirmingSymptoms: [
                    ` Ból ma największe nasilenie bezpośrednio przed krwawieniem lub w czasie jego trwania.`,
                    `Ból zmusza kobietę do krzyku lub jęku.`,
                    `Przed krwawieniem lub w czasie jego trwania występują takie objawy, jak: zawroty głowy, zasłabnięcia, nudności, wymioty, biegunka, ból krzyża, bóle głowy.`,
                ],
            },
            {
                remedy: 'CAULOPHYLLUM',
                mainSymptoms: [
                    'Bóle kurczowe mają największe nasilenie bezpośrednio przed rozpoczęciem krwawienia miesięcznego (po rozpoczęciu krwawienia dochodzi do poprawy, jednak nie jest ona natychmiastowa).',
                ],
                confirmingSymptoms: [
                    `Ból w krzyżu`,
                    `i/lub`,
                    `Zawroty głowy poprzedzają wystąpienie miesiączki.`,
                ],
            }
        ],
    },
    {
        illnessName: 'Zapalenie pęcherza moczowego',
        description: ``,
        dosage: `Co sześć - osiem godzin, do trzech dni. Zakończ podawanie leku bezpośrednio po stwierdzeniu poprawy lub zmianie objawów.
            Kiedy należy podać inny lek: Jeśli w ciągu dwudziestu czterech godzin nie stwierdzasz żadnej zmiany.`,
        arrOfRemedies: [
            {
                remedy: 'CANTHARIS',
                mainSymptoms: [
                    `Częste, silne parcie na mocz.`,
                    `Silne palące lub kłujące bóle przed, w czasie lub po oddaniu moczu.`,
                ],
                confirmingSymptoms: [
                    `Mocz jest oddawany tylko kroplami.`,
                    `Silne uczucie parcia w czasie oddawania moczu.`,
                    `Silny ból sprawia, że pacjent jest bardzo silnie pobudzony, niespokojny.`,
                    `Zwiększony pociąg seksualny.`,
                ],
            },
            {
                remedy: 'ACONITUM NAPELLUS',
                mainSymptoms: [
                    'Najwcześniejsze okresy infekcji pęcherza moczowego, przy pierwszych objawach utrudnionego lub bolesnego oddawania moczu.',
                ],
                confirmingSymptoms: [
                    'Obecne ogólne objawy, które wskazują na Aconitum: niepokój, lęk, pobudzenie.',
                ],
            },
            {
                remedy: 'SARSAPARILLA',
                mainSymptoms: [
                    'Silny ból w cewce pod koniec oddawania moczu.',
                ],
                confirmingSymptoms: [
                    'W pozycji siedzącej pacjent jest w stanie oddawać mocz jedynie kroplami mocz można oddać swobodnie jedynie stojąc.',
                ],
            },
            {
                remedy: 'mercurius vivus i mercurius solubilis',
                mainSymptoms: [
                    'Obecne objawy ogólne, które wskazują na Mercurius.',
                ],
                confirmingSymptoms: [
                    `Palący ból w cewce, najsilniejszy gdy pacjentka nie oddaje moczu; nasila się tuż przed oddaniem moczu, na samym początku mikcji lub pod sam koniec.`,
                    `Objawy nasilają się w godzinach nocnych.`,
                ],
            },
            {
                remedy: 'NUX VOMICA',
                mainSymptoms: [
                    `Objawy pojawiają się po przejedzeniu się, po nadmiernym spożyciu alkoholu lub kawy, po lekach albo innych objawach ogólnych wskazujących na ten właśnie preparat`,
                    `lub`,
                    `Ból w cewce i/lub pęcherzu moczowym pojawia się przed oddaniem moczu lub gdy chora odczuwa parcie na mocz.`,
                ],
                confirmingSymptoms: [
                    `Parcie na stolec towarzyszy bolesnemu parciu na mocz.`,
                    `Kłujące bóle w cewce, które szerzą się ku tyłowi i obejmują pęcherz.`,
                ],
            },
            {
                remedy: 'APIS MELLIFICA',
                mainSymptoms: [
                    `Bardzo silne bóle lub pieczenie, które nasilają się pod wpływem gorąca, zmniejszają się pod wpływem zimna`,
                    `lub`,
                    `Silny ból i parcie na mocz.`,
                    `Jeśli nie ma poprawy po podaniu Cantharis i nie ma wyraźnych wskazań do podania innego preparatu.`,
                ],
                confirmingSymptoms: [
                    `Objawy nasilają się w godzinach nocnych.`,
                    `Brzuch jest nadmiernie wrażliwy na najmniejszy nawet dotyk.`,
                ],
            },
            {
                remedy: 'STAPHYSAGRIA',
                mainSymptoms: [
                    `Zapalenie pęcherza po stosunku płciowym, kiedy nie ma wyraźnych objawów wskazujących na konieczność podania innego preparatu lub gdy nie przyniósł on spodziewanej poprawy.`,
                    `Zapalenie pęcherza, które nastąpiło po tym, gdy kobieta stała się ofiarą przemocy fizycznej lub słownej bądź przeżyła ciężkie zmartwienie.`,
                ],
                confirmingSymptoms: [
                    'Wrażenie, jakby przez cewkę moczową mocz wciąż wyciekał kroplami.',
                ],
            },
            {
                remedy: 'BERBERIS',
                mainSymptoms: [
                    `Ból w okolicy lędźwiowej, czyli w okolicy nerek lub moczowodów, nasilający się pod wpływem ucisku, ruchu i wstrząsów`,
                    `lub`,
                    `Ból w czasie oddawania moczu szerzy się z pęcherza moczowego na cewkę moczową lub z cewki moczowej na miednicę, uda lub plecy.`,
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    'Wyraźnie obecne są ogólne objawy, które wskazują na konieczność podania preparatu Pulsatilla.',
                ],
                confirmingSymptoms: [
                    `Parcie na mocz silniejsze przy leżeniu na plecach lub przy przekręcaniu się na bok.`,
                    `Nietrzymanie moczu przy kaszlu, kichaniu, śmiechu lub zdziwieniu.`,
                ],
            },
            {
                remedy: 'EQUISETUM',
                mainSymptoms: [
                    'Ból pęcherza moczowego jest najsilniejszy po oddaniu moczu.',
                ],
                confirmingSymptoms: [
                    'Nietrzymanie moczu (mimowolne jego oddawanie); objaw ten najprawdopodobniej będzie występował w nocy.',
                ],
            }
        ],
    },
    {
        illnessName: 'Zapalenie cewki moczowej',
        description: `W czasie kuracji antybiotykowej powinno się podawać dodatkowo leki homeopatyczne, zwłaszcza gdy objawy utrzymują się po zakończeniu antybiotykoterapii.`,
        dosage: `Dwa razy dziennie, do pięciu dni. Po wyraźnej poprawie należy przerwać leczenie, można podać pojedynczą, dodatkową dawkę jedynie wówczas, gdy objawy się nasilają.
            Kiedy należy podać inny lek: Jeśli nie stwierdza się poprawy po dwóch dniach leczenia (należy poczekać do trzeciego dnia, by podjąć tę decyzję).`,
        arrOfRemedies: [
            {
                remedy: 'NATRUM MURIATICUM',
                mainSymptoms: [
                    'Wydzielina z cewki o rzadkiej konsystencji, śluzowa, przejrzysta lub o mlecznym zabarwieniu.',
                ],
                confirmingSymptoms: [
                    `Mimo że wyciek wydaje się zupełnie przejrzysty, po zaschnięciu pozostawia na bieliźnie żółte plamy.`,
                    `Ostre bóle lub pieczenie w ujściu zewnętrznym cewki po oddaniu moczu lub pod koniec lub też po opróżnieniu pęcherza.`,
                    `Niebolesny wyciek z cewki.`,
                ],
            },
            {
                remedy: 'mercurius vivus i mercurius solubilis',
                mainSymptoms: [
                    'Gęsta wydzielina śluzowa lub ropna, której towarzyszy zapalenie i palenie w cewce.',
                ],
                confirmingSymptoms: [
                    `Wyciek z cewki treści białawej, żółtej lub zielonej.`,
                    `Objawy często nasilają się w nocy.`,
                ],
            },
            {
                remedy: 'SULFUR',
                mainSymptoms: [
                    `Wyciek z cewki treści wodnistej lub śluzowej w połączeniu z palącym bólem przy wytrysku nasienia`,
                    `lub`,
                    `Wyraźnie obecne objawy ogólne, które wskazują na konieczność podania tego leku.`,
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'NITRICUM ACIDUM',
                mainSymptoms: [
                    `Palący ból przy wytrysku nasienia.`,
                    `Wyciek z cewki gęstej treści, o żółtawym lub zielonkawym zabarwieniu.`,
                ],
                confirmingSymptoms: [
                    `Oddawanie moczu o silnej woni.`,
                    `Dreszcze i uczucie zimna.`,
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    `Wyciek z cewki treści żółtej lub zielonej, która nie ma własności drażniących, nie wywołuje bólu i podrażnienia`,
                    `i/lub`,
                    `Wyraźnie obecne objawy ogólne, które wskazują na konieczność podania tego leku.`,
                ],
            }
        ],
    },
    {
        illnessName: 'Zapalenie stercza',
        description: ``,
        dosage: `W czasie objawów ostrych lek należy podawać dwa razy dziennie, do pięciu dni. Po złagodzeniu objawów lek podajemy rzadziej. W przypadkach przewlekłych podajemy jedna dawkę leku w trzydziestej potencji na dobę przez pięć dni; jeśli dysponujemy preparatem o niższej potencji, podajemy go dwa razy dziennie przez dwa tygodnie.
            Kiedy należy podać inny lek: W przypadkach ostrych, gdy nie ma poprawy po 36-48 godzinach. W przypadkach przewlekłych, jeśli nie ma poprawy po 10-14 dniach.`,
        arrOfRemedies: [
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    `Ból stercza w czasie oddawania moczu`,
                    `lub`,
                    `Obecne są objawy ogólne, które wskazują właśnie na ten preparat.`,
                ],
                confirmingSymptoms: [
                    `Ostre bóle lub kurcze w okolicy stercza, które szerzą się na miednicę i pęcherz moczowy.`,
                    `Wyciek gęstej, nie drażniącej treści z cewki.`,
                ],
            },
            {
                remedy: 'CHIMAPHILLA UMBELLATA',
                mainSymptoms: [
                    'Bolesność w okolicy gruczołu krokowego, która nasila się pod wpływem ucisku, szczególnie w pozycji siedzącej.',
                ],
                confirmingSymptoms: [
                    `Pacjent ma wrażenie, jakby siedział na piłce lub bolesnej opuchliźnie.`,
                    `Wyciek z cewki treści śluzowej lub obecność ciągnącego się śluzu w moczu.`,
                ],
            },
            {
                remedy: 'KALIUM BICHROMICUM',
                mainSymptoms: [
                    'Ból stercza nasila się przy chodzeniu, co zmusza chorego do przystawania.',
                ],
                confirmingSymptoms: [
                    `Kłujące bóle lub bóle ciągnące, które obejmują stercz i prącie.`,
                    `Palenie w cewce moczowej po oddaniu moczu.`,
                    `Wyciek z cewki bardzo gęstej, lepkiej i ciągnącej się wydzieliny`,
                ],
            },
            {
                remedy: 'CAUSTICUM',
                mainSymptoms: [
                    'Uczucie ciśnięcia i pulsowania w sterczu, ból szerzy się na cewkę moczową i pęcherz moczowy po oddaniu pierwszych kropli moczu.',
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'SABAL SERRULATA',
                mainSymptoms: [
                    'Przewlekłe powiększenie stercza z utrudnionym oddawaniem moczu; w czasie oddawania moczu może także występować palenie.',
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'LYCOPODIUM',
                mainSymptoms: [
                    'Uczucie ciśnięcia w sterczu nasila się w czasie oddawania moczu lub po opróżnieniu pęcherza.',
                ],
                confirmingSymptoms: [
                    'Kłucie w okolicy pęcherza moczowego i odbytu.',
                ],
            }
        ],
    },
    {
        illnessName: 'Ból głowy',
        description: `Jeśli dojdziesz do wniosku, że trudno jest się zdecydować na któryś konkretny
            lek, podaj albo Belladonnę, albo Nux, albo Bryonię.`,
        dosage: `Co dwie godziny; jeśli już stwierdzisz poprawę, podaj lek jedynie w przypadku ponownego nasilenia się dolegliwości lub gdy poprawa ustępuje po upływie godziny.
            Kiedy należy podać inny lek: Jeśli nie stwierdza się poprawy po podaniu 2-3 dawek leku.`,
        arrOfRemedies: [
            {
                remedy: 'BELLADONNA',
                mainSymptoms: [
                    `Intensywny, pulsujący ból głowy.`,
                    `Ból nasila się pod wpływem światła, hałasu, dotyku, silnego lub niezwykłego zapachu, ruchu lub wstrząsów.`,
                    `Ból pojawia się i znika w sposób nagły.`,
                ],
                confirmingSymptoms: [
                    `Ból najczęściej zlokalizowany w okolicy czołowej, skąd może się szerzyć ku tyłowi głowy.`,
                    `Twarz zaczerwieniona lub pacjent ma wrażenie, że jest gorąca, czasami chory ma przy tym zimne dłonie i stopy.`,
                    `Rozszerzone źrenice.`,
                    `Poprawa w pozycji siedzącej i przy silnym ucisku.`,
                    `Ból nasila się przy wchodzeniu po schodach lub poruszaniu się w dół (schodów, zbocza itp.) oraz w godzinach popołudniowych.`,
                ],
            },
            {
                remedy: 'BRYONIA',
                mainSymptoms: [
                    `Ból głowy nasila się pod wpływem ruchu, nawet niewielkich ruchów głowy lub gałek ocznych.`,
                    `Stały ból lub uczucie ciężaru, pulsowanie jest mało wyraźne.`,
                ],
                confirmingSymptoms: [
                    `Ból nasila się pod wpływem najdelikatniejszego dotyku, silny ucisk przynosi jednak poprawę.`,
                    `Ból ma największe nasilenie w godzinach porannych, zwłaszcza przy pierwszym poruszeniu się w łóżku lub bezpośrednio po wstaniu.`,
                    `Ognisko bólu nad lewym okiem.`,
                    `Bólowi głowy towarzyszą nudności, wymioty lub zaparcie.`,
                    `Pacjent jest drażliwy, chce, by go pozostawić w spokoju.`,
                ],
            },
            {
                remedy: 'NUX VOMICA',
                mainSymptoms: [
                    `Ból pojawia się po przejedzeniu; pojawia się po alkoholu, kawie lub lekach; wskutek braku snu; po zbyt intensywnej pracy umysłowej.`,
                    `Pacjent czuje się ogólnie chory, bólowi towarzyszą, nudności, wzdęcie brzucha i kwaśny bądź gorzki posmak w ustach.`,
                ],
                confirmingSymptoms: [
                    `Ból ma największe nasilenie bezpośrednio po przebudzeniu się, po wstaniu z łóżka powoli się zmniejsza.`,
                    `Ból nasilają dźwięki, na przykład odgłos kroków.`,
                    `Ból zmniejsza się po zawinięciu głowy i w ciepłych pomieszczeniach.`,
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    `Ból głowy pojawia się po posiłku lub po pokarmach ciepłych, tłustych i ciężkich oraz po lodach`,
                    `lub`,
                    `Ból głowy ma związek z fazą cyklu miesięcznego (pojawia się przed, w czasie lub pod koniec miesiączki).`,
                ],
                confirmingSymptoms: [
                    `Chory pragnie towarzystwa i pocieszenia.`,
                    `Chory odczuwa ulgę przy umiarkowanym ruchu, szczególnie przy spokojnym spacerze na świeżym powietrzu.`,
                    `Ból okolicy czołowej, zlokalizowany po jednej stronie; lub też ból o często zmieniającej się lokalizacji.`,
                    `Ból zmniejsza się pod wpływem ucisku, nasila się przy wydmuchiwaniu nosa.`,
                ],
            },
            {
                remedy: 'GELSEMIUM',
                mainSymptoms: [
                    `Ból zaczyna się z tyłu głowy i szerzy się ku górze i do przodu obejmując okolicę czołową`,
                    `lub`,
                    `Przed dolegliwościami bólowymi występuje osłabienie widzenia lub inne jego
                    zaburzenia.`,
                ],
                confirmingSymptoms: [
                    `Pacjent ma wrażenie obręczy zaciskającej się wokół głowy lub że na głowę nałożona jest zbyt ciasna czapka.`,
                `Ból jest zlokalizowany po prawej stronie głowy.`,
                `Ból zmniejsza się po oddaniu moczu lub po drzemce.`,
                `Światło, hałas, ruch i wstrząsy nasilają dolegliwości bólowe.`,
                `Pacjent czuje się otępiały, zmęczony, ociężały, jest apatyczny; chce, by go pozostawiono w spokoju, nie jest jednak drażliwy.`,
                ],
            },
            {
                remedy: 'IRIS',
                mainSymptoms: [
                    ` Ból zlokalizowany w okolicy czołowej, jednostronny, najczęściej po stronie prawej.`,
                    `Migrenowe bóle głowy, które nawracają w regularnych odstępach czasu.`,
                ],
                confirmingSymptoms: [
                    `Ból głowy jest poprzedzony lub współistnieje z osłabieniem widzenia lub zaburzeniami widzenia.`,
                    `Wskutek bólu głowy pacjent ma nudności i wymiotuje; ból głowy nasila się po
                    wymiotach.`,
                    `Ból zmniejsza się przy spacerze na świeżym powietrzu.`,
                ],
            },
            {
                remedy: 'SANGUINARIA',
                mainSymptoms: [
                    `Ból rozpoczyna się z tyłu głowy, potem obejmuje prawą połowę głowy lub prawe oko.`,
                    `Ból głowy nawraca w regularnych odstępach czasu.`,
                ],
                confirmingSymptoms: [
                    `Nudności i wymioty; po wymiotach pacjent stwierdza poprawę.`,
                    `Ból ostry, rozsadzający, jakby od pchnięcia nożem, pulsujący.`,
                    `Ból nasila się przy ruchach, zmniejszenie dolegliwości po śnie i pod wpływem mocnego ucisku.`,
                ],
            },
            {
                remedy: 'spigelia anthelmintica',
                mainSymptoms: [
                    `Kłujące, palące bóle głowy, czasem pulsujące; zwykle obejmują przednią część głowy, często po stronie lewej.`,
                    `Bólowi głowy towarzyszy usztywnienie szyi i barków, co sprawia, że ruch jest bolesny.`,
                ],
                confirmingSymptoms: [
                    `Ból zmniejsza się przy leżeniu ze sztywnym podparciem głowy; nasila się przy oddawaniu stolca, pod wpływem ruchu, hałasu i chłodnej, wietrznej pogody.`,
                    `Chwilowa poprawa przy myciu się zimną wodą, jednak po tym zabiegu ból się
                    nasila.`,
                    `Ból otacza oczy lub szerzy się w głąb oczodołów.`,
                ],
            }
        ],
    },
    {
        illnessName: 'Zapalenie skóry',
        description: ``,
        dosage: `Dwa-trzy razy dziennie, do trzech dni. Zakończ podawanie leku po stwierdzeniu wyraźnej poprawy, gdy zmniejszy się zarówno nasilenie świądu, jak i poprawi się wygląd skóry.
            Kiedy należy podać inny lek: Jeśli nie ma poprawy w przeciągu jednej, dwóch dób.`,
        arrOfRemedies: [
            {
                remedy: 'CROTON TIGLIUM',
                mainSymptoms: [
                    `Liczne pęcherzyki na twarzy, nasilone zapalenie i świąd.`,
                    `Jeśli zmiany mają niewielkie nasilenie, wówczas ich delikatne pocieranie i drapanie może przynosić ulgę; jeśli jednak reakcja alergiczna jest bardzo nasilona, wysypka staje się bolesna i wrażliwa na dotyk, który staje się wówczas nieznośny.`,
                ],
                confirmingSymptoms: [
                    'Wysypka ma największe nasilenie na owłosionej skórze głowy, wokół oczu i na narządach płciowych.',
                ],
            },
            {
                remedy: 'ANACARDIUM ORIENTALE',
                mainSymptoms: [
                    'Duże pęcherze wypełnione żółtawym płynem.',
                ],
                confirmingSymptoms: [
                    'Największe nasilenie zmian na twarzy.',
                ],
            },
            {
                remedy: 'RHUS TOXICODENDRON',
                mainSymptoms: [
                    `Skóra silnie zmieniona zapalnie, występują wypełnione płynem pęcherze.`, 
                    `Wyraźny świąd i uczucie palenia.`,
                ],
                confirmingSymptoms: [
                    `Świąd nasila się w godzinach nocnych, a także pod wpływem drapania, na świeżym powietrzu i po rozgrzaniu w łóżku.`,
                    `Świąd zmniejsza się pod wpływem gorącej wody i okładów. Pacjent jest pobudzony, drażliwy, o nastawieniu lękowym.`,
                ],
            },
            {
                remedy: 'BRYONIA',
                mainSymptoms: [
                    `Wysypka złożona przede wszystkim z drobnych grudek, bez pęcherzy i sączenia, o największym nasileniu na twarzy.`,
                ],
                confirmingSymptoms: [
                    `Objawy nasilają się wówczas, gdy pacjent jest ruchowo aktywny.`,
                    `Drażliwość, chory chce, by go zostawiono w spokoju.`,
                ],
            },
            {
                remedy: 'SEPIA',
                mainSymptoms: [
                    'Sucha wysypka (czasem występują jedynie drobne pęcherzyki).',
                ],
                confirmingSymptoms: [
                    `Świąd zmniejsza się w ciepłych pomieszczeniach, jednak nasila się po rozgrzaniu się w łóżku.`,
                    `Wysypka ma czerwonawe lub brązowawe zabarwienie, skóra się łuszczy.`,
                ],
            },
            {
                remedy: 'GRAPHITES',
                mainSymptoms: [
                    `Zmiany skórne sączą się, wysięk jest lepki, płyn ma miodowożółte zabarwienie.`,
                    `Świąd ma największe nasilenie w godzinach nocnych, zwiększa się pod wpływem ciepła.`,
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'SULFUR',
                mainSymptoms: [
                    `Świąd nasila się pod wpływem ciepła, większy jest w nocy`,
                    `i/lub`,
                    `Ogólne objawy typowe dla tego preparatu (na przykład pacjent jest szczególnie wrażliwy na ciepło, jest mu gorąco)`,
                ],
                confirmingSymptoms: [
                    
                ],
            }
        ],
    },
    {
        illnessName: 'Uczulenia z objawami z górnych dróg oddechowych',
        description: `Jeśli świsty występują w niewielkim nasileniu, warto zastanowić się nad podaniem Arsenicum, Nux vomica, Euphrasia lub Sabadilla. Jeśli objawy nie wskazują szczególnie na konkretny preparat, podaj Allium cepa.`,
        dosage: `Nawet co godzina, ponawiaj jednak dawkę jedynie wówczas, gdy objawy nawracają. Jeśli leczenie jest konieczne przez ponad dobę, lek podawaj nie częściej niż trzy razy dziennie i nie dłużej niż tydzień. Upewnij się, że nie podajesz leku, gdy trwa jeszcze poprawa po poprzedniej dawce.
            Kiedy należy podać inny lek: Jeśli nie ma poprawy po czterech godzinach i przynajmniej po dwóch dawkach poprzedniego preparatu.`,
        arrOfRemedies: [
            {
                remedy: 'SABADILLA',
                mainSymptoms: [
                    'Obfita wydzielina kataralna; napadowe kichanie; świąd w nosie; oczy łzawią i są zaczerwienione.',
                ],
                confirmingSymptoms: [
                    `Objawy zmniejszają się po wyjściu na dwór.`,
                    `Chory skarży się na uczucie, jakby mu w gardle tkwiła kula, wciąż połyka ślinę.`,
                ],
            },
            {
                remedy: 'WYETHIA',
                mainSymptoms: [
                    'Uczulenie z objawami ze strony nosa, z towarzyszącym silnym świądem tylnej części podniebienia lub świądem w gardle poza nosem.',
                ],
                confirmingSymptoms: [
                    'Uczucie wysuszenia śluzówek nosa i gardła.',
                ],
            }
        ],
    },
    {
        illnessName: 'Astma',
        description: ``,
        dosage: `Nawet co godzina do trzech dawek; potem należy powtarzać dawkę, gdy objawy się nasilają, nawet co dwie godziny. Należy pozostawać w kontakcie z lekarzem.
            Kiedy należy podać inny lek: Jeśli nie ma żadnej poprawy po trzeciej dawce.`,
        arrOfRemedies: [
            {
                remedy: 'SPONGIA',
                mainSymptoms: [
                    'Suche świsty, pacjent oddycha z dużym wysiłkiem, głośno - słyszalne są gwizdy lub dźwięki przypominające piłowanie drewna.',
                ],
                confirmingSymptoms: [
                    `Początek objawów po przemarznięciu lub wówczas, gdy rozwijają się objawy przeziębienia.`,
                    `Objawy zaczynają się nagle, kiedy pacjent zasypia lub wówczas się nasilają; chory ma wrażenie, że się dusi.`,
                    `Świsty nasilają się przy ruchach i po położeniu się; poprawa po ciepłych posiłkach i napojach oraz po odchyleniu głowy ku tyłowi.`,
                    `Kaszel szczekający lub krupowy, suchy.`,
                ],
            },
            {
                remedy: 'IPECACUANHA',
                mainSymptoms: [
                    '(*w przypadkach astmy z wilgotnym kaszlem lub gdy występuje rzężenie związane z gromadzeniem się wydzieliny w drogach oddechowych)',
                    `Astma z rzężeniem wywołanym gromadzeniem się wydzieliny w drogach oddechowych.`,
                    `Kaszel głęboki, wyraźnie słyszalne rzężenie.`,
                ],
                confirmingSymptoms: [
                    `Świsty mają największe nasilenie w nocy.`,
                    `Kaszel w długotrwałych napadach, których efektem są odruchy wymiotne lub zwracanie treści pokarmowej bądź śluzu.`,
                    `Świstom towarzyszą nudności i wymioty, nawet jeśli kaszel nie występuje.`,
                    `Twarz blada, pacjent wygląda na osobę poważnie chorą.`,
                ],
            },
            {
                remedy: 'ARSENICUM ALBUM',
                mainSymptoms: [
                    `Silny lęk, pobudzenie, osłabienie w czasie napadu`,
                    `lub/i`,
                    `Nasilenie się objawów pomiędzy północą a trzecią nad ranem.`,
                ],
                confirmingSymptoms: [
                    `Świstom towarzyszy kaszel i objawy przeziębienia lub kataru siennego.`,
                    `Pacjentowi jest zimno, lepiej się czuje w cieple.`, 
                    `Chory chce wciąż popijać niewielkie ilości płynu.`,
                ],
            },
            {
                remedy: 'LOBELIA',
                mainSymptoms: [
                    'Astma, w której nie zbiera się wydzielina w drogach oddechowych, występuje krótki oddech, pacjent się skarży na uczucie ściśnięcia klatki piersiowej.',
                ],
                confirmingSymptoms: [
                    `Świsty nasilają się na chłodnym powietrzu lub po zmarznięciu.`,
                    `Objawy mają największe nasilenie około południa.`,
                    `Pacjentowi oddycha się łatwiej podczas szybkiego marszu.`,
                ],
            },
            {
                remedy: 'SAMBUCUS',
                mainSymptoms: [
                    'Astma u dzieci, z uczuciem duszenia się.',
                ],
                confirmingSymptoms: [
                    'Nasilenie objawów o północy lub po północy.',
                ],
            },
            {
                remedy: 'CHAMOMILLA',
                mainSymptoms: [
                    `Wyraźna drażliwość`,
                    `lub`,
                    `Objawy rozpoczynają się po napadzie gniewu.`,
                ],
                confirmingSymptoms: [
                    'Ulga pod wpływem zimnego powietrza.',
                ],
            },
            {
                remedy: 'BRYONIA',
                mainSymptoms: [
                    `Świsty, wydzielina śluzowa nie gromadzi się w drogach oddechowych, wyraźne pogorszenie pod wpływem ruchu.`,
                    `Pacjentowi jest ciepło, ma wzmożone pragnienie, jest drażliwy; chce, by go pozostawiono w spokoju.`,
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    `Obecne objawy ogólne, typowe dla tego właśnie preparatu (pacjent jest łagodnego charakteru, płaczliwy, czuje się gorzej w ciepłych pomieszczeniach, ma niewielkie pragnienie)`,
                    `lub`,
                    `Objawy pojawiają się lub nasilają wieczorem lub nocą.`,
                    `W drogach oddechowych gromadzi się wydzielina i pacjent zmuszony jest kasłać.`,
                ],
                confirmingSymptoms: [
                    'Objawy nasilają się po jedzeniu, szczególnie po ciężkich, tłustych posiłkach.',
                ],
            }
        ],
    },
    {
        illnessName: 'Infekcje skórne',
        description: ``,
        dosage: `Co trzy-cztery godziny wówczas, gdy zaczerwienienie, obrzęk i ból są najbardziej nasilone. Następnie należy poprzestać na trzech dawkach dziennie i podawać lek do chwili ustania wytwarzania się ropy, zmniejszenia obrzęku i zaczerwienienia.
            Kiedy należy podać inny lek: Jeśli po co najmniej trzech dawkach leku nie stwierdza się żadnej poprawy.`,
        arrOfRemedies: [
            {
                remedy: 'BELLADONNA',
                mainSymptoms: [
                    `Wczesne okresy tworzenia się wszelkiego rodzaju czyraków i ropni.`,
                    `Zmiana silnie bolesna, jasnoczerwona, występuje obrzęk i zwiększone ucieplenie, jednak ropy albo jeszcze nie ma, albo jest jej niewiele.`,
                ],
                confirmingSymptoms: [
                    'Pulsujący ból.',
                ],
            },
            {
                remedy: 'HEPAR SULFURIS',
                mainSymptoms: [
                    `Po najwcześniejszych stadiach zakażenia skóry, jednak nim jeszcze dojdzie do tworzenia się ropy`,
                    `lub`,
                    `Po utworzeniu się ropy, jeśli zmiana jest bardzo wrażliwa na dotyk i bolesna`,
                    `lub`,
                    `Czyrak goi się powoli, nawet po opróżnieniu z ropy.`,
                ],
                confirmingSymptoms: [
                    `Czyrak bardzo wrażliwy na najlżejszy nawet dotyk, reaguje bólem na zimne powietrze i zimny okład.`,
                    `Ostre lub kłujące bóle, jakby ktoś wetknął w zmianę drzazgę.`,
                ],
            },
            {
                remedy: 'mercurius vivus i mercurius solubilis',
                mainSymptoms: [
                    'Lek z wyboru po zgromadzeniu się ropy, kiedy czyrak jest już w pełni wykształcony.',
                ],
                confirmingSymptoms: [
                    `Czyrak jest bolesny, jednak nie tak wrażliwy na dotyk jak w przypadku wskazań do podania Hepar.`,
                    `Ból nasila się pod wpływem ciepła.`,
                ],
            },
            {
                remedy: 'SILICEA',
                mainSymptoms: [
                    `Czyrak lub ropień goi się powoli, nawet po odpłynięciu ropy`,
    `lub`,
    `Po nacięciu i zdrenowaniu czyraka lub zastrzału`,
    `lub`,
    `Gdy czyrak formuje się powoli i przez parę dni utrzymuje się obrzęk i zaczerwienienie, jednak nie tworzy się ropa`,
    `lub`,
    `Twardy, czerwony, torbielowaty guzek, który utrzymuje się po niemal całkowitym zagojeniu czyraka.`,
                ],
                confirmingSymptoms: [
                    'Stosunkowo niewielka wrażliwość na dotyk, niewielki ból, dolegliwości mogą się zmniejszać pod wpływem ciepła.',
                ],
            },
            {
                remedy: 'ARSENICUM ALBUM',
                mainSymptoms: [
                    'Palący ból, który zmniejsza się po przyłożeniu ciepła.',
                ],
                confirmingSymptoms: [
                    'Obecne objawy ogólne, typowe dla tego właśnie preparatu.',
                ],
            },
            {
                remedy: 'LACHESIS',
                mainSymptoms: [
                    'Zarówno ropień jak i okoliczna skórą mają zabarwienie purpurowe lub sinawe.',
                ],
                confirmingSymptoms: [
                    `Ropa jest ciemna i rzadka.`,
                    `Okolica ropnia jest wrażliwa na dotyk.`,
                ],
            }
        ],
    },
    {
        illnessName: 'Jęczmień/Jęczmyk',
        description: ``,
        dosage: `Co sześć-osiem godzin, przez trzy dni. Zakończ podawanie leku po stwierdzeniu poprawy. Powtórz dawkę, jeśli dojdzie do ponownego pogorszenia lub gdy dalsza poprawa nie następuje w ciągu dwudziestu czterech godzin.
            Kiedy należy podać inny lek: Jeśli nie ma poprawy w ciągu 24 do 48 godzin.`,
        arrOfRemedies: [
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    `Jęczmyk niemal niebolesny.`,
                    `Zmiana występuje na górnej powiece.`,
                    `Sączy się żółta lub zielona ropa.`,
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'HEPAR SULFURIS',
                mainSymptoms: [
                    'Jęczmyk silnie reaguje bólem na dotyk, zimne powietrze czy przyłożenie zimna.',
                ],
                confirmingSymptoms: [
                    `Ból jest pulsujący, czasem chory ma wrażenie, jakby w powiece tkwiła drzazga.`,
                    `Ból zmniejsza się po przyłożeniu ciepła.`,
                ],
            },
            {
                remedy: 'APIS MELLIFICA',
                mainSymptoms: [
                    'Jęczmyk, któremu towarzyszy palący lub kłujący ból.',
                ],
                confirmingSymptoms: [
                    `Ból nasila się pod wpływem ciepłego lub gorącego okładu.`, 
                    `Zaczerwienienie i obrzęk całej powieki.`,
                ],
            },
            {
                remedy: 'GRAPHITES',
                mainSymptoms: [
                    'Jęczmyk jest bolesny, jednak nie jest tak wrażliwy na dotyk, jak w przypadku wskazań do Hepar.',
                ],
                confirmingSymptoms: [
                    `Sączenie się gęstej żółtej wydzieliny z jęczmyka.`,
                    `Obecne na powiece strupki, łuski i owrzodzenia.`,
                ],
            },
            {
                remedy: 'STAPHYSAGRIA',
                mainSymptoms: [
                    `Na powiece, w odstępie tygodnia, pojawiają się nowe zmiany o typie jęczmyka`,
                    `lub`,
                    `Po ustąpieniu stanu ostrego na powiece utrzymuje się twarda zmiana torbielowata.`,
                ],
                confirmingSymptoms: [
                    'Jęczmyk pojawia się po przeżyciu stresu przez pacjenta.',
                ],
            },
            {
                remedy: 'LYCOPODIUM',
                mainSymptoms: [
                    'Jęczmyk jest usadowiony w pobliżu wewnętrznego kącika oka, jeśli inne leki nie przyniosły spodziewanej poprawy.',
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'SILICEA',
                mainSymptoms: [
                    'Jeśli po ostrym stanie przetrwała twarda zmiana torbielowata na powiece.',
                ],
                confirmingSymptoms: [
                    
                ],
            }
        ],
    },
    {
        illnessName: 'Liszajec',
        description: ``,
        dosage: `Co cztery-sześć godzin, przez dwa-trzy dni.
            Kiedy należy podać inny lek: jeśli nie ma zmian po dwudziestu czterech godzinach.`,
        arrOfRemedies: [
            {
                remedy: 'ANTIMONIUM CRUDUM',
                mainSymptoms: [
                    'Sączące się zmiany i żółte, grube strupy.',
                ],
                confirmingSymptoms: [
                    `Zmiany mają tendencję do zlewania się.`,
                    `Zmiany szerzą się lub sprawiają wrażenie bardziej zapalnych po kąpieli.`,
                    `Drażliwość; pacjent nie znosi, kiedy się na niego patrzy.`,
                    `Język obłożony grubym, białym nalotem.`,
                ],
            },
            {
                remedy: 'GRAPHITES',
                mainSymptoms: [
                    'Zmiany pokryte strupami, z których sączy się płyn miodowego koloru.',
                ],
                confirmingSymptoms: [
                    'Zmiany mają największe nasilenie w okolicy ust i nosa.',
                ],
            },
            {
                remedy: 'RHUS TOXICODENDRON',
                mainSymptoms: [
                    'Zmiany pokryte strupami, którym towarzyszy silny świąd.',
                ],
                confirmingSymptoms: [
                    `Gromadnie występujące drobne pęcherzyki.`,
                    `Świąd lub kłujący ból, uczucie ciągnięcia.`,
                    `Wysięk ma ciemne zabarwienie, jest jednak przejrzysty.`,
                    `Dolegliwości zmniejszają się, gdy pacjent jest aktywny.`,
                ],
            },
            {
                remedy: 'mercurius vivus i mercurius solubilis',
                mainSymptoms: [
                    `Niektóre ze zmian nie są pokryte strupem; głębokie owrzodzenia.`,
                    `Wysięk raczej ropny, nie zaś przejrzysty płyn; może być podbarwiony krwią, ma nieprzyjemny zapach.`,
                ],
                confirmingSymptoms: [
                    `Powiększenie węzłów chłonnych szyi i okolicy twarzy.`,
                    `Obecne ogólne objawy typowe dla tego preparatu.`,
                ],
            },
            {
                remedy: 'HEPAR SULFURIS',
                mainSymptoms: [
                    'Zmiany wrażliwe są na dotyk i zimno.',
                ],
                confirmingSymptoms: [
                    `Występują objawy jak przy wskazaniach do podania Mercurius: zmiany są głębokie, tworzy się ropa, występuje krwawienie, powiększone węzły chłonne.`, 
                    `Strupy są często miękkie, łatwo pękają i odpadają.`,
                    `Drażliwość.`,
                ],
            },
            {
                remedy: 'ARSENICUM ALBUM',
                mainSymptoms: [
                    `Zmiany pieką lub występuje ostry ból.`,
                    `Ból zmniejsza się po przyłożeniu ciepła.`,
                    `Zmiany często mają ciemne zabarwienie.`,
                ],
                confirmingSymptoms: [
                    'Sączenie rzadkiej, wodnistej treści.',
                ],
            }
        ],
    },
    {
        illnessName: 'Opryszczka',
        description: ``,
        dosage: `W okresie wysypu zmian dwa razy dziennie, przez dwa, trzy dni. Po stwierdzeniu wyraźnej poprawy zakończ podawanie preparatu.
            Kiedy należy podać inny lek: Jeśli przez dwa dni nie zauważyłeś żadnej zmiany.`,
        arrOfRemedies: [
            {
                remedy: 'RHUS TOXICODENDRON',
                mainSymptoms: [
                    `Drobne zmiany pęcherzykowe w podłożu zmienionej zapalnie skóry, które występują w skupiskach; wypełnia je żółtawy, wodnisty płyn.`,
                    `Intensywny, palący ból, któremu może towarzyszyć świąd.`,
                ],
                confirmingSymptoms: [
                    `Złe samopoczucie ogólne; bóle mięśniowe i kostne, które zmniejszają się, gdy chory jest aktywny.`,
                    `Wykwity występują w okolicy warg i w jamie ustnej.`,
                ],
            },
            {
                remedy: 'ARSENICUM ALBUM',
                mainSymptoms: [
                    'Opryszczka silnie pali, jednak po przyłożeniu ciepła ta dolegliwość się zmniejsza.',
                ],
                confirmingSymptoms: [
                    'Obecne objawy ogólne typowe dla tego leku.',
                ],
            },
            {
                remedy: 'NATRUM MURIATICUM',
                mainSymptoms: [
                    'Pęcherzyki zawierające przejrzysty płyn występują w okolicy ust, przypominają drobne perełki.',
                ],
                confirmingSymptoms: [
                    `Spękane wargi.`,
                    `Opryszczka pojawia się w czasie gorączki lub przeziębienia.`,
                    `Jeśli w ogóle występuje ból, to jest on łagodny.`,
                ],
            },
            {
                remedy: 'SEPIA',
                mainSymptoms: [
                    `Lek podaj, gdy obecne są objawy ogólne typowe dla tego leku`,
                    `lub`,
                    `Podaj ten lek, jeśli wydaje się, że żaden inny nie jest odpowiedni lub gdy inny preparat nie przyniósł poprawy.`,
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'PETROLEUM',
                mainSymptoms: [
                    'Opryszczka na narządach płciowych, zmiana sącząca i swędząca.',
                ],
                confirmingSymptoms: [
                    `Świąd nasila się na świeżym powietrzu, zmniejsza się pod wpływem ciepła.`, 
                    `U mężczyzn zmiana jest zlokalizowana na mosznie lub na skórze pomiędzy moszną a udem.`,
                ],
            },
            {
                remedy: 'HEPAR SULFURIS',
                mainSymptoms: [
                    'Wypryski reagują bólem na dotyk i zimno.',
                ],
                confirmingSymptoms: [
                    'Drażliwość.',
                ],
            },
            {
                remedy: 'GRAPHITES',
                mainSymptoms: [
                    'Ze zmiany sączy się przejrzysty, lepki płyn, w kolorze miodu.',
                ],
                confirmingSymptoms: [
                    `Pojedyncze pęcherzyki są duże (wielkości ziarna grochu lub większe).`,
                    `Występuje świąd.`,
                ],
            }
        ],
    },
    {
        illnessName: 'Półpasiec',
        description: ``,
        dosage: `co osiem-dwanaście godzin, przez dwa dni; jeśli objawy powracają, należy powtórzyć podanie leku, jednak nie częściej niż dwa razy dziennie. 
            Kiedy należy podać inny lek: Jeśli nie ma zmian po dwóch dniach leczenia.`,
        arrOfRemedies: [
            {
                remedy: 'RHUS TOXICODENDRON',
                mainSymptoms: [
                    'Wypryski są bardzo bolesne, występuje silny świąd.',
                ],
                confirmingSymptoms: [
                    `Dolegliwości zmniejszają się przy lekkim pocieraniu zmienionej zapalnie powierzchni.`,
                    `Zmniejszenie dolegliwości, gdy pacjent stale ostrożnie rusza się, jest aktywny fizycznie.`,
                ],
            },
            {
                remedy: 'RANUNCULUS BULBOSUS',
                mainSymptoms: [
                    'Półpasiec na klatce piersiowej lub plecach z wyraźnym bólem, który nasila się pod wpływem dotyku, ruchu lub głębokiego oddychania.',
                ],
                confirmingSymptoms: [
                    'Silny ból okolicy międzyżebrowej.',
                ],
            },
            {
                remedy: 'LACHESIS',
                mainSymptoms: [
                    `Półpasiec, w którym zmiany są ciemnoczerwone, purpurowe lub sinawe.`,
                    `Silne dolegliwości bólowe, znaczna wrażliwość na dotyk.`,
                ],
                confirmingSymptoms: [
                    'Zmiany zajmują lewą połowę ciała.',
                ],
            },
            {
                remedy: 'MEZEREUM',
                mainSymptoms: [
                    'Bóle palące lub ostre, strzelające; ból utrzymuje się po zagojeniu się zmian na skórze.',
                ],
                confirmingSymptoms: [
                    `Ból nasila się podczas posiłków, w łóżku i pod wpływem dotyku.`,
                    `Pacjentowi jest zimno i chłodne powietrze sprawia mu przykrość.`,
                ],
            },
            {
                remedy: 'IRIS VERSICOLOR',
                mainSymptoms: [
                    'Półpasiec ze zmianami po prawej stronie brzucha lub po prawej stronie klatki piersiowej.',
                ],
                confirmingSymptoms: [
                    `Drobne pęcherzyki z ciemnymi punktami.`,
                    `Symptomom ze strony skóry towarzyszą objawy ze strony przewodu pokarmowego.`,
                ],
            },
            {
                remedy: 'ARSENICUM ALBUM',
                mainSymptoms: [
                    'Zmieniona skóra silnie pali.',
                ],
                confirmingSymptoms: [
                    `Ulga pod wpływem ciepła; nasilenie dolegliwości pod wpływem zimnego powietrza lub miejscowego przyłożenia zimna.`,
                    `Obecne objawy ogólne typowe dla tego właśnie preparatu.`,
                ],
            }
        ],
    },
    {
        illnessName: 'Grzybica skóry',
        description: ``,
        dosage: `Jeden raz dziennie przez trzy dni. Zakończ podawanie preparatu,
            gdy tylko stwierdzisz wyraźną poprawę lub zmianę.
            Kiedy należy podać inny lek: Jeśli po tygodniu leczenia nie stwierdzisz żadnej różnicy.`,
        arrOfRemedies: [
            {
                remedy: 'SEPIA',
                mainSymptoms: [
                    'Okrągłe, przesuszone, łuszczące się zmiany w kolorze brązowym lub czerwono-brązowym (może występować świąd).',
                ],
                confirmingSymptoms: [
                    'Po podrapaniu skóry świąd zmienia się w palenie.',
                ],
            },
            {
                remedy: 'TELLURIUM',
                mainSymptoms: [
                    'Zmiany grzybicze na skórze mają raczej zabarwienie czerwone niż brązowe; zmiany na skórze są dobrze odgraniczone i lekko wzniesione.',
                ],
                confirmingSymptoms: [
                    'Występują drobne pęcherzyki wypełnione przejrzystym płynem.',
                ],
            },
            {
                remedy: 'GRAPHITES',
                mainSymptoms: [
                    'Zmiany grzybicze pokryte grubą łuską lub sączące się.',
                ],
                confirmingSymptoms: [
                    'Sączenie się lepkiego płynu, koloru miodowo-żółtego.',
                ],
            },
            {
                remedy: 'SULFUR',
                mainSymptoms: [
                    'Bardzo nasilony świąd.',
                ],
                confirmingSymptoms: [
                    `Ciepło wywołuje świąd lub jego nasilenie.`,
                    `Obecne u chorego objawy ogólne, typowe dla tego właśnie leku.`,
                ],
            },
            {
                remedy: 'ARSENICUM ALBUM',
                mainSymptoms: [
                    `Zmiany są silnie przesuszone, pokryte szorstką łuską.`,
                    `Palenie i świąd.`,
                ],
                confirmingSymptoms: [
                    `Dolegliwości łagodnieją pod wpływem ciepła.`,
                    `Po zadrapaniu ze zmian sączy się przejrzysty płyn.`,
                ],
            }
        ],
    },
    {
        illnessName: 'Zakażenie drożdżycą/candidą',
        description: ``,
        dosage: `Dwa razy dziennie przez dwa-trzy dni. Zakończ podawanie leku bezpośrednio po stwierdzeniu poprawy.
            Kiedy należy podat inny lek: Jeśli w ciągu trzech dni nie stwierdzasz poprawny.`,
        arrOfRemedies: [
            {
                remedy: 'BELLADONNA',
                mainSymptoms: [
                    'Skóra jasnoczerwona i obrzęknięta, jednak bez ubytków naskórka i sączenia się.',
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'CHAMOMILLA',
                mainSymptoms: [
                    'U dzieci z wyprzeniem pod pieluszka, u których występuje charakterystyczna drażliwość lub inne objawy emocjonalne typowe dla tego preparatu.',
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'GRAPHITES',
                mainSymptoms: [
                    `Zmiany sączą się, a treść jest lepka, często koloru miodowo-żółtego.`,
                    `Okolice pozbawione naskórka pokrywają się strupami lub też skóra wydaje się sucha, jest szorstka i spękana.`,
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'ARSENICUM ALBUM',
                mainSymptoms: [
                    'Silne pieczenie i świąd.',
                ],
                confirmingSymptoms: [
                    `Skóra spekana lub pozbawiona naskorka.`,
                    `Sączący się ze zmian płyn drażni skórę.`,
                    `Objawy zmniejszają się pod wpływem ciepła.`,
                    `Obecność objawów ogólnych typowych dla tego preparatu.`,
                ],
            },
            {
                remedy: 'HEPAR SULFURIS',
                mainSymptoms: [
                    'Wtórne nadkażenie bakteryjne - pojawiają się krosty lub ze zmian sączy się ropa.',
                ],
                confirmingSymptoms: [
                    `Zmienione zapalnie obszary są bardzo wrażliwe.`,
                    `Ból zmniejsza się w ciepłej kąpieli.`,
                    `Wysięk ze zmian ma nieprzyjemny zapach.`,
                ],
            },
            {
                remedy: 'SULFUR',
                mainSymptoms: [
                    `Silny świąd, który jeszcze się nasila pod wpływem gorąca lub kąpieli.`,
                    `Skóra może być szorstka i sucha lub też mogą występować krosty i ropa.`,
                ],
                confirmingSymptoms: [
                    'Obecne są objawy ogólne typowe dla tego preparatu.',
                ],
            },
            {
                remedy: 'CANDIDA ALBICANS',
                mainSymptoms: [
                    'Można spróbować podać ten lek, jeśli dobrze dobrane leki nie pomogły.',
                ],
                confirmingSymptoms: [
                    
                ],
            }
        ],
    },
    {
        illnessName: 'Pleśniawki',
        description: ``,
        dosage: ``,
        arrOfRemedies: [
            {
                remedy: 'BORAX',
                mainSymptoms: [
                    `Dziecko krzyczy z bólu, kiedy kończy się karmienie piersią lub butelką.`,
                    `Owrzodzenia w jamie ustnej, zwłaszcza na języku.`,
                ],
                confirmingSymptoms: [
                    `Znaczny lęk przed przemieszczaniem się w dół i spadaniem.`,
                    `Typowa jest suchość w ustach, choć wytwarzanie śliny może być zwiększone.`,
                ],
            },
            {
                remedy: 'mercurius vivus i mercurius solubilis',
                mainSymptoms: [
                    'Jama ustna z owrzodzeniami, zapalna, nieprzyjemny zapach z ust.',
                ],
                confirmingSymptoms: [
                    `Zwiększone wytwarzanie śliny, ślinotok.`,
                    `Dziąsła obrzęknięte, gąbczaste, łatwo krwawią.`,
                    `Język napuchnięty z widocznymi na jego powierzchni odciskami zębów; język obłożony - czarny, biały lub brudnożółty.`,
                ],
            },
            {
                remedy: 'SULFUR',
                mainSymptoms: [
                    'Pieczenie i ból, zwłaszcza w czasie jedzenia.',
                ],
                confirmingSymptoms: [
                    `Objawy przypominają te, które wskazują na Mercurius, jednak język i dziąsła nie są aż tak gąbczaste i stabe.`,
                    `Obecne objawy ogólne typowe dla tego preparatu.`,
                ],
            },
            {
                remedy: 'hydrastis canadensis',
                mainSymptoms: [
                    'Gęsty śluz w ustach i na języku.',
                ],
                confirmingSymptoms: [
                    'Chory ma wrażenie, ze sparzył sobie język.',
                ],
            },
            {
                remedy: 'CHAMOMILLA',
                mainSymptoms: [
                    'Drażliwość i podobne objawy emocjonalne, charakterystyczne dla tego właśnie preparatu.',
                ],
                confirmingSymptoms: [
                    
                ],
            }
        ],
    },
    {
        illnessName: 'Bezsenność',
        description: ``,
        dosage: `Do trzech dawek, nawet co pół godziny.
            Kiedy należy podać inny lek: jeśli po dwóch-trzech dawkach nadal nie możesz zasnąć. Jednej nocy nie stosuj więcej niż dwóch leków.`,
        arrOfRemedies: [
            {
                remedy: 'COFFEA',
                mainSymptoms: [
                    `Nadmierna aktywność umysłu nie pozwala zasnąć (pacjent nie jest przy tym ani wyraźnie rozdrażniony, ani niespokojny)`,
                    `lub`,
                    `Bezsenność po usłyszeniu złych lub dobrych wiadomości lub po przeżyciu silnej i nagłej emocji`,
                    `lub`,
                    `Bezsenność po nadużyciu kawy lub innych napojów z kofeiną.`,
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'ARSENICUM ALBUM',
                mainSymptoms: [
                    `Bezsenność wywołana niepokojem lub lekiem; niepokój zmusza pacjenta do opuszczenia łóżka lub też czuje się on niespokojny, kiedy zasypia`,
                    `lub`,
                    `Pacjent czuje się "zbyt zmęczony", by zasnąć (na przykład po ciężkiej pracy fizycznej lub umysłowej).`,
                ],
                confirmingSymptoms: [
                    `Pacjent pobudzony przed snem lub w czasie snu.`,
                    `Bezsenność po północy; pacjent budzi się pomiędzy północą a pierwszą nad ranem.`,
                ],
            },
            {
                remedy: 'NUX VOMICA',
                mainSymptoms: [
                    `Bezsenność po nadużyciu kawy, alkoholu lub leków; bezsenność po napięciu umysłowym lub po nadmiernej pracy umysłowej.`,
                    `Drażliwość.`,
                    `Nadwrażliwość na nawet niewielki hałas czy inne bodźce.`,
                ],
                confirmingSymptoms: [
                    `O trzeciej- czwartej nad ranem pacjenta budzą myśli; nie potrafi znów zasnąć.`,
                    `O świcie ponownie zasypia; późno się budzi, czuje się zmęczony.`,
                ],
            },
            {
                remedy: 'PULSATILLA',
                mainSymptoms: [
                    ' Po głowie krąży jedna myśl, która nie pozwala zasnąć.',
                ],
                confirmingSymptoms: [
                    `Pacjent jest płaczliwy z powodu bezsenności.`,
                    `W czasie snu ręce są złożone ponad głową.`,
                ],
            },
            {
                remedy: 'IGNATIA',
                mainSymptoms: [
                    'Bezsenność wywołana uczuciem smutku i żalu.',
                ],
                confirmingSymptoms: [
                    `Pacjent przez sen popłakuje, gwałtownie wdycha.`,
                    `W okresie czuwania częste ziewanie i wzdychanie.`,
                ],
            },
            {
                remedy: 'CHAMOMILLA',
                mainSymptoms: [
                    `Bezsenność wywołana drażliwością`,
                    `lub`,
                    `Bezsenność wywołana fizycznym bólem`,
                    `lub`,
                    `Bezsenność wywołana zależnością od leków uspokajających.`,
                ],
                confirmingSymptoms: [
                    'Popłakiwanie przez sen.',
                ],
            },
            {
                remedy: 'PASSIFLORA',
                mainSymptoms: [
                    `Bezsenność bez innych objawów u dzieci i ludzi w podeszłym wieku.`,
                    `Nadaktywny umysł.`,
                ],
                confirmingSymptoms: [
                    
                ],
            },
            {
                remedy: 'ARNICA MONTANA',
                mainSymptoms: [
                    `Łóżko lub poduszka wydają się zbyt twarde.`,
                    `Pobudzenie w łóżku, pacjent nie może się wygodnie ułożyć.`,
                ],
                confirmingSymptoms: [
                    
                ],
            }
        ],
    }
]

// const showSortedRemediesNames = (arr) => {
//     const listOfNames = arr.reduce((acc, illness) => {
//         for (const remedyObj of illness.arrOfRemedies) {
            
//             if (!existingInDb.includes(remedyObj.remedy.toLowerCase())) {
//                 acc.push(remedyObj.remedy.toLowerCase())
//             }
//         }

//         return acc;
//     }, [])
//     const sortedListOfIllness = [...new Set(listOfNames)];
//     console.log(sortedListOfIllness.length)
//     return sortedListOfIllness.sort();
// }

// console.log(showSortedRemediesNames(arrOfIllness));

// KOCHANIE!!! 
// Teraz Ty możesz wykazać się swoimi umiejętnościami :)
// Cieszę się, że mogłam dorzucić cegiełke do Twojej apki. Pamiętaj! Zawsze jestem do usług! (Co prawda zapłata będzie wysoka, ale powinieneś dać sobie radę :3)
// Twoja Gaba.
// Ps. Wszystkiego najlepszego z okazji Dnia Mężczyzn! Mój mężczyzno!

/* 1 */
