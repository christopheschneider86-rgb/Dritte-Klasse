// ═══════════════════════════════════════════════════════════════
//  MUSIK-TRAINER – Fragenkatalog
//  Thema: Peter und der Wolf (Sergej Prokofjew)
//  Erweiterbar: einfach neue Objekte in MUSIK_FRAGEN hinzufügen
// ═══════════════════════════════════════════════════════════════

// Instrument-Emojis und SVG-Platzhalter für visuelle Unterstützung
const INSTRUMENT_BILDER = {
  geige:      { emoji: '🎻', beschreibung: 'Geige (Violine)' },
  fagott:     { emoji: '🎵', beschreibung: 'Fagott' },
  querfloete: { emoji: '🪗', beschreibung: 'Querflöte' },
  oboe:       { emoji: '🎶', beschreibung: 'Oboe' },
  klarinette: { emoji: '🎷', beschreibung: 'Klarinette' },
  pauken:     { emoji: '🥁', beschreibung: 'Pauken' },
  horn:       { emoji: '📯', beschreibung: 'Horn (Waldhorn)' },
};

// ─── FRAGENKATALOG ────────────────────────────────────────────
// Typen: "choice" | "bild" | "luecke" | "wahr_falsch"
// Bei "bild": instrumentKey aus INSTRUMENT_BILDER
// tip: Eselsbrücke / Hinweis für das Kind
const MUSIK_FRAGEN = [

  // ── MULTIPLE CHOICE ──────────────────────────────────────
  {
    id: 'mq1',
    typ: 'choice',
    thema: 'Peter und der Wolf',
    frage: 'Welches Instrument spielt Peter im Musikstück „Peter und der Wolf"?',
    antworten: ['Geige (Violine)', 'Fagott', 'Querflöte', 'Pauken'],
    richtig: 0,
    tip: '🎻 Eselsbrücke: Peter ist jung und lebhaft – die Geige klingt hell und lebendig!',
  },
  {
    id: 'mq2',
    typ: 'choice',
    thema: 'Peter und der Wolf',
    frage: 'Welches Instrument stellt den Großvater dar?',
    antworten: ['Horn', 'Fagott', 'Oboe', 'Klarinette'],
    richtig: 1,
    tip: '🎵 Eselsbrücke: Das Fagott klingt tief und schwer – so wie ein alter, müder Großvater!',
  },
  {
    id: 'mq3',
    typ: 'choice',
    thema: 'Peter und der Wolf',
    frage: 'Welches Instrument stellt den Wolf dar?',
    antworten: ['Pauken', 'Geige', 'Horn (Waldhorn)', 'Oboe'],
    richtig: 2,
    tip: '📯 Eselsbrücke: Hörner wurden früher als Signal genutzt – der Wolf jagt wie ein Jäger!',
  },
  {
    id: 'mq4',
    typ: 'choice',
    thema: 'Peter und der Wolf',
    frage: 'Welches Instrument stellt die Ente dar?',
    antworten: ['Querflöte', 'Oboe', 'Klarinette', 'Fagott'],
    richtig: 1,
    tip: '🎶 Eselsbrücke: Die Oboe hat einen etwas „schnatternden", näselnden Klang – wie eine Ente!',
  },
  {
    id: 'mq5',
    typ: 'choice',
    thema: 'Peter und der Wolf',
    frage: 'Welches Instrument stellt den Vogel dar?',
    antworten: ['Oboe', 'Klarinette', 'Querflöte', 'Horn'],
    richtig: 2,
    tip: '🪗 Eselsbrücke: Die Querflöte klingt hoch und leicht – so wie ein Vogel zwitschert!',
  },
  {
    id: 'mq6',
    typ: 'choice',
    thema: 'Peter und der Wolf',
    frage: 'Welches Instrument stellt die Katze dar?',
    antworten: ['Horn', 'Pauken', 'Fagott', 'Klarinette'],
    richtig: 3,
    tip: '🎷 Eselsbrücke: Die Klarinette hat einen weichen, samtigen Klang – so wie eine Katze schleicht!',
  },
  {
    id: 'mq7',
    typ: 'choice',
    thema: 'Peter und der Wolf',
    frage: 'Welches Instrument stellt die Jäger mit Gewehren dar?',
    antworten: ['Geige', 'Pauken', 'Oboe', 'Fagott'],
    richtig: 1,
    tip: '🥁 Eselsbrücke: Pauken klingen wie Schüsse – Bumm, Bumm! Das sind die Gewehre der Jäger!',
  },
  {
    id: 'mq8',
    typ: 'choice',
    thema: 'Instrumente',
    frage: 'Was für eine Art Instrument ist die Geige?',
    antworten: ['Blasinstrument', 'Schlaginstrument', 'Streichinstrument', 'Tasteninstrument'],
    richtig: 2,
    tip: '🎻 Mit einem Bogen werden die Saiten gestrichen – deshalb heißt es Streichinstrument!',
  },
  {
    id: 'mq9',
    typ: 'choice',
    thema: 'Instrumente',
    frage: 'Was für eine Art Instrument ist die Querflöte?',
    antworten: ['Streichinstrument', 'Holzblasinstrument', 'Schlaginstrument', 'Blechblasinstrument'],
    richtig: 1,
    tip: '🪗 Man bläst in die Querflöte – und obwohl sie heute aus Metall gebaut wird, heißt sie Holzblasinstrument!',
  },
  {
    id: 'mq10',
    typ: 'choice',
    thema: 'Instrumente',
    frage: 'Was für eine Art Instrument ist das Horn (Waldhorn)?',
    antworten: ['Holzblasinstrument', 'Streichinstrument', 'Schlaginstrument', 'Blechblasinstrument'],
    richtig: 3,
    tip: '📯 Das Horn ist aus Metall (Blech) – deshalb ist es ein Blechblasinstrument!',
  },
  {
    id: 'mq11',
    typ: 'choice',
    thema: 'Instrumente',
    frage: 'Was für eine Art Instrument ist die Pauke?',
    antworten: ['Blasinstrument', 'Schlaginstrument', 'Streichinstrument', 'Zupfinstrument'],
    richtig: 1,
    tip: '🥁 Die Pauke wird mit Schlägeln geschlagen – deshalb ist sie ein Schlaginstrument!',
  },
  {
    id: 'mq12',
    typ: 'choice',
    thema: 'Sergej Prokofjew',
    frage: 'Wann wurde das Musikstück „Peter und der Wolf" zum ersten Mal aufgeführt?',
    antworten: ['1900', '1920', '1936', '1953'],
    richtig: 2,
    tip: '🎼 1936 – in einem Moskauer Konzertsaal, vor vielen Kindern!',
  },
  {
    id: 'mq13',
    typ: 'choice',
    thema: 'Sergej Prokofjew',
    frage: 'Aus welchem Land kommt Sergej Prokofjew?',
    antworten: ['Deutschland', 'Russland', 'Österreich', 'Frankreich'],
    richtig: 1,
    tip: '🇷🇺 Prokofjew wuchs in einem kleinen russischen Dorf auf.',
  },

  // ── BILD-ZUORDNUNG ───────────────────────────────────────
  {
    id: 'bq1',
    typ: 'bild',
    thema: 'Instrumente',
    instrumentKey: 'geige',
    frage: 'Welches Instrument siehst du hier?',
    antworten: ['Geige (Violine)', 'Cello', 'Klarinette', 'Oboe'],
    richtig: 0,
    tip: '🎻 Die Geige ist das kleinste Streichinstrument – sie hat vier Saiten und einen Bogen!',
  },
  {
    id: 'bq2',
    typ: 'bild',
    thema: 'Instrumente',
    instrumentKey: 'fagott',
    frage: 'Welches Instrument siehst du hier?',
    antworten: ['Querflöte', 'Fagott', 'Klarinette', 'Oboe'],
    richtig: 1,
    tip: '🎵 Das Fagott hat ein langes, s-förmiges Verbindungsrohr – das ist sein Erkennungszeichen!',
  },
  {
    id: 'bq3',
    typ: 'bild',
    thema: 'Instrumente',
    instrumentKey: 'querfloete',
    frage: 'Welches Instrument siehst du hier?',
    antworten: ['Oboe', 'Klarinette', 'Querflöte', 'Fagott'],
    richtig: 2,
    tip: '🪗 Die Querflöte hält man waagerecht (quer) – deshalb heißt sie Querflöte!',
  },
  {
    id: 'bq4',
    typ: 'bild',
    thema: 'Instrumente',
    instrumentKey: 'oboe',
    frage: 'Welches Instrument siehst du hier?',
    antworten: ['Klarinette', 'Fagott', 'Querflöte', 'Oboe'],
    richtig: 3,
    tip: '🎶 Die Oboe hat ein Doppelrohrblatt – zwei dünne Blättchen zusammen. Das macht ihren besonderen Klang!',
  },
  {
    id: 'bq5',
    typ: 'bild',
    thema: 'Instrumente',
    instrumentKey: 'klarinette',
    frage: 'Welches Instrument siehst du hier?',
    antworten: ['Oboe', 'Klarinette', 'Fagott', 'Horn'],
    richtig: 1,
    tip: '🎷 Die Klarinette hat nur ein einfaches Rohrblatt und eine zylindrische Röhre.',
  },
  {
    id: 'bq6',
    typ: 'bild',
    thema: 'Instrumente',
    instrumentKey: 'pauken',
    frage: 'Welches Instrument siehst du hier?',
    antworten: ['Trommel', 'Pauke', 'Gong', 'Xylophon'],
    richtig: 1,
    tip: '🥁 Die Pauke sieht aus wie ein runder Kessel – und kann auf eine bestimmte Tonhöhe gestimmt werden!',
  },
  {
    id: 'bq7',
    typ: 'bild',
    thema: 'Instrumente',
    instrumentKey: 'horn',
    frage: 'Welches Instrument siehst du hier?',
    antworten: ['Trompete', 'Posaune', 'Horn (Waldhorn)', 'Tuba'],
    richtig: 2,
    tip: '📯 Das Horn ist ein gekrümmtes Rohr – früher wurde es für Signale im Wald benutzt!',
  },

  // ── LÜCKENTEXT ───────────────────────────────────────────
  {
    id: 'lq1',
    typ: 'luecke',
    thema: 'Instrumente',
    frage: 'Die Geige ist das kleinste ___ .',
    lueckenWort: 'Streichinstrument',
    antworten: ['Blasinstrument', 'Streichinstrument', 'Schlaginstrument', 'Zupfinstrument'],
    richtig: 1,
    tip: '🎻 Mit einem Bogen wird über die Saiten gestrichen – deshalb heißt es Streichinstrument!',
  },
  {
    id: 'lq2',
    typ: 'luecke',
    thema: 'Instrumente',
    frage: 'Das Fagott klingt ___ und schwer.',
    lueckenWort: 'tief',
    antworten: ['hoch', 'tief', 'laut', 'leise'],
    richtig: 1,
    tip: '🎵 Tiefe Töne = großes, schweres Instrument. Das Fagott ist lang und klingt tief!',
  },
  {
    id: 'lq3',
    typ: 'luecke',
    thema: 'Instrumente',
    frage: 'Die Querflöte hat einen klaren, ___ Ton.',
    lueckenWort: 'hellen',
    antworten: ['dunklen', 'hellen', 'tiefen', 'brummigen'],
    richtig: 1,
    tip: '🪗 Hoch und leicht – wie ein Vogel! Die Querflöte klingt hell und klar.',
  },
  {
    id: 'lq4',
    typ: 'luecke',
    thema: 'Instrumente',
    frage: 'Die Klarinette hat einen warmen, ___ Klang.',
    lueckenWort: 'samtigen',
    antworten: ['harten', 'lauten', 'samtigen', 'metallischen'],
    richtig: 2,
    tip: '🎷 Samtig = weich wie Samt. Die Klarinette klingt weich und angenehm!',
  },
  {
    id: 'lq5',
    typ: 'luecke',
    thema: 'Instrumente',
    frage: 'Das Horn ist ein ___ aus einem gekrümmten Rohr.',
    lueckenWort: 'Blechblasinstrument',
    antworten: ['Holzblasinstrument', 'Streichinstrument', 'Blechblasinstrument', 'Schlaginstrument'],
    richtig: 2,
    tip: '📯 Blech = Metall. Das Horn ist aus Metall gebaut und wird geblasen – ein Blechblasinstrument!',
  },
  {
    id: 'lq6',
    typ: 'luecke',
    thema: 'Peter und der Wolf',
    frage: 'Sergej Prokofjew lebte von 1891 bis ___ .',
    lueckenWort: '1953',
    antworten: ['1945', '1950', '1953', '1960'],
    richtig: 2,
    tip: '🎼 Prokofjew starb 1953 – das Musikmärchen entstand 1936, also 17 Jahre vorher.',
  },

  // ── WAHR / FALSCH ────────────────────────────────────────
  {
    id: 'wq1',
    typ: 'wahr_falsch',
    thema: 'Instrumente',
    frage: 'Die Querflöte wird heute meistens aus Metall gebaut.',
    richtig: true,
    tip: '🪗 Stimmt! Früher war sie aus Holz, heute ist sie meist aus Metall – heißt aber trotzdem Holzblasinstrument!',
  },
  {
    id: 'wq2',
    typ: 'wahr_falsch',
    thema: 'Instrumente',
    frage: 'Das Fagott ist ein Blechblasinstrument.',
    richtig: false,
    tip: '🎵 Falsch! Das Fagott ist ein Holzblasinstrument – es hat ein Rohrblatt aus Holz.',
  },
  {
    id: 'wq3',
    typ: 'wahr_falsch',
    thema: 'Instrumente',
    frage: 'Die Pauke kann auf eine bestimmte Tonhöhe gestimmt werden.',
    richtig: true,
    tip: '🥁 Richtig! Das ist besonders – die meisten Trommeln haben keine feste Tonhöhe, aber die Pauke schon!',
  },
  {
    id: 'wq4',
    typ: 'wahr_falsch',
    thema: 'Instrumente',
    frage: 'Zur Geige gehören: Violine, Bratsche, Cello und Kontrabass.',
    richtig: true,
    tip: '🎻 Richtig! Das sind die vier Streichinstrumente – alle haben die gleiche Form, aber unterschiedliche Größen!',
  },
  {
    id: 'wq5',
    typ: 'wahr_falsch',
    thema: 'Peter und der Wolf',
    frage: 'Im Musikstück „Peter und der Wolf" stellt die Oboe den Vogel dar.',
    richtig: false,
    tip: '🎶 Falsch! Die Oboe stellt die Ente dar. Den Vogel spielt die Querflöte!',
  },
  {
    id: 'wq6',
    typ: 'wahr_falsch',
    thema: 'Peter und der Wolf',
    frage: 'Hörner wurden früher als Signalinstrumente genutzt.',
    richtig: true,
    tip: '📯 Richtig! Früher riefen Jäger und Soldaten sich damit über weite Entfernungen zu.',
  },
  {
    id: 'wq7',
    typ: 'wahr_falsch',
    thema: 'Sergej Prokofjew',
    frage: 'Prokofjew schrieb „Peter und der Wolf" für Erwachsene.',
    richtig: false,
    tip: '🎼 Falsch! Er schrieb es speziell für Kinder – es wurde zum ersten Mal vor vielen Kindern in Moskau aufgeführt.',
  },
  {
    id: 'wq8',
    typ: 'wahr_falsch',
    thema: 'Instrumente',
    frage: 'Die Oboe hat einen näselnden Klang und wird oft für traurige Melodien eingesetzt.',
    richtig: true,
    tip: '🎶 Richtig! Der besondere Doppelrohrblatt-Klang der Oboe klingt etwas näselnd – das macht sie ausdrucksstark.',
  },
];

// ─── HILFS-FUNKTIONEN ─────────────────────────────────────────
function getMusicFragen(thema = null) {
  if (!thema) return [...MUSIK_FRAGEN];
  return MUSIK_FRAGEN.filter(f => f.thema === thema);
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
