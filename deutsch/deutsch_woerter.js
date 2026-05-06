'use strict';

// Struktur: DEUTSCH_THEMEN[key] = { titel, icon, farbe, regel, woerter[] }
// Wort: { wort, emoji, beispiel, loch, tipp }
//   wort     = das vollständige Wort (Infinitiv bei Verben, Singular bei Nomen)
//   emoji    = Bild-Emoji für Bildaufgabe
//   beispiel = Beispielsatz — enthält das Wort in exakt dieser Form!
//   loch     = die schwierige Stelle (wird im Lückentext ausgeblendet)
//   tipp     = kurze Regel-Erinnerung

const DEUTSCH_THEMEN = {

  ie: {
    titel: 'ie – langes i',
    icon: '🐝',
    farbe: '#1565c0',
    regel: 'Hörst du ein langes „i", schreibst du meist „ie" – wie in Biene!',
    woerter: [
      { wort: 'Biene',     emoji: '🐝',  beispiel: 'Die Biene sammelt Blütenpollen.',           loch: 'ie', tipp: 'Bie-ne → langes i → ie' },
      { wort: 'fliegen',   emoji: '✈️',  beispiel: 'Die Vögel wollen nach Süden fliegen.',      loch: 'ie', tipp: 'flie-gen → langes i → ie' },
      { wort: 'Tier',      emoji: '🐾',  beispiel: 'Das Tier schläft im Käfig.',                loch: 'ie', tipp: 'Tier → langes i → ie' },
      { wort: 'viel',      emoji: '💰',  beispiel: 'Sie hat viel Zeit zum Spielen.',            loch: 'ie', tipp: 'viel → langes i → ie' },
      { wort: 'Wiese',     emoji: '🌿',  beispiel: 'Die Kühe stehen auf der Wiese.',            loch: 'ie', tipp: 'Wie-se → langes i → ie' },
      { wort: 'spielen',   emoji: '🎮',  beispiel: 'Wir möchten nach der Schule spielen.',      loch: 'ie', tipp: 'spie-len → langes i → ie' },
      { wort: 'Brief',     emoji: '✉️',  beispiel: 'Ich schreibe einen Brief an Oma.',          loch: 'ie', tipp: 'Brief → langes i → ie' },
      { wort: 'Lied',      emoji: '🎵',  beispiel: 'Wir singen ein schönes Lied.',              loch: 'ie', tipp: 'Lied → langes i → ie' },
      { wort: 'tief',      emoji: '🌊',  beispiel: 'Das Meer ist sehr tief.',                   loch: 'ie', tipp: 'tief → langes i → ie' },
      { wort: 'Ziege',     emoji: '🐐',  beispiel: 'Die Ziege frisst Gras.',                    loch: 'ie', tipp: 'Zie-ge → langes i → ie' },
      { wort: 'sieben',    emoji: '7️⃣',  beispiel: 'Die Woche hat sieben Tage.',                loch: 'ie', tipp: 'sie-ben → langes i → ie' },
      { wort: 'Riese',     emoji: '🗿',  beispiel: 'Der Riese ist sehr groß.',                  loch: 'ie', tipp: 'Rie-se → langes i → ie' },
      { wort: 'Spiegel',   emoji: '🪞',  beispiel: 'Ich schaue in den Spiegel.',                loch: 'ie', tipp: 'Spie-gel → langes i → ie' },
      { wort: 'Stiefel',   emoji: '👢',  beispiel: 'Ich ziehe meinen Stiefel an.',              loch: 'ie', tipp: 'Stie-fel → langes i → ie' },
      { wort: 'Fieber',    emoji: '🌡️',  beispiel: 'Das kranke Kind hat Fieber.',               loch: 'ie', tipp: 'Fie-ber → langes i → ie' },
      { wort: 'Knie',      emoji: '🦵',  beispiel: 'Ich habe mein Knie aufgeschlagen.',         loch: 'ie', tipp: 'Knie → langes i → ie' },
      { wort: 'biegen',    emoji: '↩️',  beispiel: 'Man kann den Ast biegen.',                  loch: 'ie', tipp: 'bie-gen → langes i → ie' },
      { wort: 'riechen',   emoji: '👃',  beispiel: 'Die Blumen riechen wunderbar.',             loch: 'ie', tipp: 'rie-chen → langes i → ie' },
      { wort: 'Dieb',      emoji: '🦹',  beispiel: 'Der Dieb wurde gefasst.',                   loch: 'ie', tipp: 'Dieb → langes i → ie' },
      { wort: 'fließen',   emoji: '💧',  beispiel: 'Bäche können durch den Wald fließen.',      loch: 'ie', tipp: 'flie-ßen → langes i → ie' },
      { wort: 'Liebe',     emoji: '❤️',  beispiel: 'Mama hat mich lieb.',                       loch: 'ie', tipp: 'Lie-be → langes i → ie' },
      { wort: 'niemals',   emoji: '🚫',  beispiel: 'Das darf man niemals machen.',              loch: 'ie', tipp: 'nie-mals → langes i → ie' },
      { wort: 'Wiesel',    emoji: '🦦',  beispiel: 'Das Wiesel ist sehr flink.',                loch: 'ie', tipp: 'Wie-sel → langes i → ie' },
      { wort: 'Schiene',   emoji: '🛤️',  beispiel: 'Der Zug fährt auf der Schiene.',            loch: 'ie', tipp: 'Schie-ne → langes i → ie' },
      { wort: 'Fliege',    emoji: '🪰',  beispiel: 'Die Fliege sitzt auf dem Kuchen.',          loch: 'ie', tipp: 'Flie-ge → langes i → ie' },
      { wort: 'Kiefer',    emoji: '🌲',  beispiel: 'Der Kiefer wächst hoch im Wald.',           loch: 'ie', tipp: 'Kie-fer → langes i → ie' },
      { wort: 'Sieger',    emoji: '🏆',  beispiel: 'Der Sieger bekommt eine Medaille.',         loch: 'ie', tipp: 'Sie-ger → langes i → ie' },
      { wort: 'Miete',     emoji: '🏠',  beispiel: 'Die Miete wird jeden Monat bezahlt.',       loch: 'ie', tipp: 'Mie-te → langes i → ie' },
      { wort: 'wieder',    emoji: '🔄',  beispiel: 'Morgen spielen wir wieder zusammen.',       loch: 'ie', tipp: 'wie-der → langes i → ie' },
      { wort: 'vier',      emoji: '4️⃣',  beispiel: 'Vier Kinder spielen im Park.',              loch: 'ie', tipp: 'vier → langes i → ie' },
      { wort: 'Ziegel',    emoji: '🧱',  beispiel: 'Das Haus ist aus Ziegel gebaut.',           loch: 'ie', tipp: 'Zie-gel → langes i → ie' },
    ]
  },

  doppel: {
    titel: 'Doppelkonsonanten',
    icon: '✌️',
    farbe: '#6a1b9a',
    regel: 'Hörst du einen kurzen Vokal vor einem Konsonanten, verdoppelst du ihn – z.B. Sonne!',
    woerter: [
      { wort: 'Sonne',    emoji: '☀️',  beispiel: 'Die Sonne scheint heute sehr hell.',          loch: 'nn', tipp: 'kurzes o → nn' },
      { wort: 'fallen',   emoji: '🍂',  beispiel: 'Im Herbst fallen die Blätter vom Baum.',     loch: 'll', tipp: 'kurzes a → ll' },
      { wort: 'kommen',   emoji: '🏃',  beispiel: 'Die Kinder wollen nach Hause kommen.',       loch: 'mm', tipp: 'kurzes o → mm' },
      { wort: 'Teller',   emoji: '🍽️',  beispiel: 'Ich esse von einem sauberen Teller.',        loch: 'll', tipp: 'kurzes e → ll' },
      { wort: 'Butter',   emoji: '🧈',  beispiel: 'Das Brot wird mit Butter bestrichen.',       loch: 'tt', tipp: 'kurzes u → tt' },
      { wort: 'immer',    emoji: '🔁',  beispiel: 'Du bist immer mein Freund.',                 loch: 'mm', tipp: 'kurzes i → mm' },
      { wort: 'nennen',   emoji: '💬',  beispiel: 'Man nennt das Tier eine Katze.',             loch: 'nn', tipp: 'kurzes e → nn' },
      { wort: 'Hammer',   emoji: '🔨',  beispiel: 'Mit dem Hammer schlage ich Nägel ein.',      loch: 'mm', tipp: 'kurzes a → mm' },
      { wort: 'Schiff',   emoji: '🚢',  beispiel: 'Das Schiff fährt auf dem Meer.',             loch: 'ff', tipp: 'kurzes i → ff' },
      { wort: 'Wasser',   emoji: '💧',  beispiel: 'Wir trinken sauberes Wasser.',               loch: 'ss', tipp: 'kurzes a → ss' },
      { wort: 'Ball',     emoji: '⚽',  beispiel: 'Wir spielen mit dem Ball.',                  loch: 'll', tipp: 'kurzes a → ll' },
      { wort: 'Bett',     emoji: '🛏️',  beispiel: 'Ich schlafe in meinem Bett.',                loch: 'tt', tipp: 'kurzes e → tt' },
      { wort: 'Kamm',     emoji: '🪮',  beispiel: 'Ich kämme mir die Haare.',                   loch: 'mm', tipp: 'kurzes a → mm' },
      { wort: 'rennen',   emoji: '🏃',  beispiel: 'Wir rennen so schnell wir können.',          loch: 'nn', tipp: 'kurzes e → nn' },
      { wort: 'Welle',    emoji: '🌊',  beispiel: 'Die Welle rollt ans Ufer.',                  loch: 'll', tipp: 'kurzes e → ll' },
      { wort: 'Sommer',   emoji: '🏖️',  beispiel: 'Im Sommer fahren wir ans Meer.',            loch: 'mm', tipp: 'kurzes o → mm' },
      { wort: 'Keller',   emoji: '🏚️',  beispiel: 'Das Gemüse liegt im Keller.',               loch: 'll', tipp: 'kurzes e → ll' },
      { wort: 'lassen',   emoji: '🤲',  beispiel: 'Ich werde das lassen.',                      loch: 'ss', tipp: 'kurzes a → ss' },
      { wort: 'schnell',  emoji: '⚡',  beispiel: 'Der Gepard ist sehr schnell.',               loch: 'll', tipp: 'kurzes e → ll' },
      { wort: 'Puppe',    emoji: '🪆',  beispiel: 'Meine Schwester spielt mit der Puppe.',      loch: 'pp', tipp: 'kurzes u → pp' },
      { wort: 'Suppe',    emoji: '🍲',  beispiel: 'Die Suppe schmeckt lecker.',                 loch: 'pp', tipp: 'kurzes u → pp' },
      { wort: 'Kissen',   emoji: '🛏️',  beispiel: 'Ich schlafe auf einem weichen Kissen.',      loch: 'ss', tipp: 'kurzes i → ss' },
      { wort: 'rennt',    emoji: '🏅',  beispiel: 'Er rennt sehr schnell.',                     loch: 'nn', tipp: 'kurzes e → nn (von rennen)' },
      { wort: 'Affe',     emoji: '🐒',  beispiel: 'Der Affe klettert auf den Baum.',            loch: 'ff', tipp: 'kurzes A → ff' },
      { wort: 'Koffer',   emoji: '🧳',  beispiel: 'Ich packe den Koffer für die Reise.',        loch: 'ff', tipp: 'kurzes o → ff' },
      { wort: 'Kette',    emoji: '⛓️',  beispiel: 'Die Kette liegt auf dem Tisch.',             loch: 'tt', tipp: 'kurzes e → tt' },
      { wort: 'Hütte',    emoji: '🏚️',  beispiel: 'Die Hütte steht mitten im Wald.',            loch: 'tt', tipp: 'kurzes ü → tt' },
      { wort: 'Lippe',    emoji: '👄',  beispiel: 'Er zog eine Lippe.',                         loch: 'pp', tipp: 'kurzes i → pp' },
      { wort: 'Fluss',    emoji: '🌊',  beispiel: 'Der Fluss fließt durch die Stadt.',          loch: 'ss', tipp: 'kurzes u → ss' },
      { wort: 'Rippe',    emoji: '🦴',  beispiel: 'Ich habe mir die Rippe gebrochen.',          loch: 'pp', tipp: 'kurzes i → pp' },
      { wort: 'Wanne',    emoji: '🛁',  beispiel: 'Die Wanne ist voll Wasser.',                 loch: 'nn', tipp: 'kurzes a → nn' },
    ]
  },

  ck: {
    titel: 'ck – statt kk',
    icon: '🔑',
    farbe: '#2e7d32',
    regel: 'Nach einem kurzen Vokal schreiben wir „ck" statt „kk" – wie in Ecke!',
    woerter: [
      { wort: 'Bäcker',    emoji: '🥐',  beispiel: 'Der Bäcker backt frisches Brot.',            loch: 'ck', tipp: 'kurzes ä → ck' },
      { wort: 'Ecke',      emoji: '📐',  beispiel: 'Das Buch liegt in der Ecke.',                loch: 'ck', tipp: 'kurzes e → ck' },
      { wort: 'backen',    emoji: '🍰',  beispiel: 'Wir backen einen leckeren Kuchen.',          loch: 'ck', tipp: 'kurzes a → ck' },
      { wort: 'stecken',   emoji: '📌',  beispiel: 'Ich möchte den Stift ins Mäppchen stecken.',loch: 'ck', tipp: 'kurzes e → ck' },
      { wort: 'Brücke',    emoji: '🌉',  beispiel: 'Wir gehen über die Brücke.',                 loch: 'ck', tipp: 'kurzes ü → ck' },
      { wort: 'wecken',    emoji: '⏰',  beispiel: 'Ich lasse mich gerne wecken.',               loch: 'ck', tipp: 'kurzes e → ck' },
      { wort: 'Fleck',     emoji: '🎨',  beispiel: 'Auf meinem Hemd ist ein Fleck.',             loch: 'ck', tipp: 'kurzes e → ck' },
      { wort: 'Glück',     emoji: '🍀',  beispiel: 'Das bringt dir viel Glück!',                 loch: 'ck', tipp: 'kurzes ü → ck' },
      { wort: 'Socke',     emoji: '🧦',  beispiel: 'Ich habe eine Socke verloren.',              loch: 'ck', tipp: 'kurzes o → ck' },
      { wort: 'drücken',   emoji: '👇',  beispiel: 'Man muss den Knopf drücken.',                loch: 'ck', tipp: 'kurzes ü → ck' },
      { wort: 'Rücken',    emoji: '🦴',  beispiel: 'Mein Rücken tut weh.',                       loch: 'ck', tipp: 'kurzes ü → ck' },
      { wort: 'Decke',     emoji: '🛏️',  beispiel: 'Ich kuschle mich unter die Decke.',         loch: 'ck', tipp: 'kurzes e → ck' },
      { wort: 'Mücke',     emoji: '🦟',  beispiel: 'Die Mücke hat mich gestochen.',              loch: 'ck', tipp: 'kurzes ü → ck' },
      { wort: 'packen',    emoji: '🎒',  beispiel: 'Ich muss meinen Rucksack packen.',           loch: 'ck', tipp: 'kurzes a → ck' },
      { wort: 'Dackel',    emoji: '🐕',  beispiel: 'Der Dackel läuft schnell.',                  loch: 'ck', tipp: 'kurzes a → ck' },
      { wort: 'spucken',   emoji: '🤮',  beispiel: 'Das ist ekelig, nicht spucken!',             loch: 'ck', tipp: 'kurzes u → ck' },
      { wort: 'blicken',   emoji: '👀',  beispiel: 'Ich mag durch das Fenster blicken.',         loch: 'ck', tipp: 'kurzes i → ck' },
      { wort: 'Hacke',     emoji: '⛏️',  beispiel: 'Mit der Hacke wird der Boden gelockert.',    loch: 'ck', tipp: 'kurzes a → ck' },
      { wort: 'lecken',    emoji: '👅',  beispiel: 'Katzen lecken ihr Fell.',                    loch: 'ck', tipp: 'kurzes e → ck' },
      { wort: 'Frühstück', emoji: '🥞',  beispiel: 'Ich esse Frühstück vor der Schule.',        loch: 'ck', tipp: 'kurzes ü → ck' },
      { wort: 'nicken',    emoji: '👍',  beispiel: 'Man kann nicken wenn man Ja sagt.',          loch: 'ck', tipp: 'kurzes i → ck' },
      { wort: 'flicken',   emoji: '🪡',  beispiel: 'Mama will meine Hose flicken.',              loch: 'ck', tipp: 'kurzes i → ck' },
      { wort: 'Zucker',    emoji: '🍬',  beispiel: 'Ich nehme Zucker in den Tee.',              loch: 'ck', tipp: 'kurzes u → ck' },
      { wort: 'Jacke',     emoji: '🧥',  beispiel: 'Ich hänge die Jacke an den Haken.',         loch: 'ck', tipp: 'kurzes a → ck' },
      { wort: 'Schnecke',  emoji: '🐌',  beispiel: 'Die Schnecke kriecht ganz langsam.',        loch: 'ck', tipp: 'kurzes e → ck' },
      { wort: 'Flocke',    emoji: '❄️',  beispiel: 'Eine weiße Flocke fällt vom Himmel.',       loch: 'ck', tipp: 'kurzes o → ck' },
      { wort: 'Locke',     emoji: '💇',  beispiel: 'Sie hat eine Locke im Gesicht.',             loch: 'ck', tipp: 'kurzes o → ck' },
      { wort: 'Dreck',     emoji: '💩',  beispiel: 'Meine Schuhe sind voller Dreck.',            loch: 'ck', tipp: 'kurzes e → ck' },
      { wort: 'Knick',     emoji: '📐',  beispiel: 'Das Blatt hat einen Knick.',                 loch: 'ck', tipp: 'kurzes i → ck' },
      { wort: 'Stück',     emoji: '🎫',  beispiel: 'Ich esse ein Stück Kuchen.',                 loch: 'ck', tipp: 'kurzes ü → ck' },
    ]
  },

  tz: {
    titel: 'tz – statt zz',
    icon: '⚡',
    farbe: '#e65100',
    regel: 'Nach einem kurzen Vokal schreiben wir „tz" statt „zz" – wie in Katze!',
    woerter: [
      { wort: 'Katze',    emoji: '🐱',  beispiel: 'Die Katze schläft auf der Couch.',           loch: 'tz', tipp: 'kurzes a → tz' },
      { wort: 'Platz',    emoji: '🏟️',  beispiel: 'Wir spielen auf dem Marktplatz.',            loch: 'tz', tipp: 'kurzes a → tz' },
      { wort: 'setzen',   emoji: '🪑',  beispiel: 'Ich möchte mich auf die Bank setzen.',       loch: 'tz', tipp: 'kurzes e → tz' },
      { wort: 'Mütze',    emoji: '🧢',  beispiel: 'Im Winter trage ich eine warme Mütze.',      loch: 'tz', tipp: 'kurzes ü → tz' },
      { wort: 'Netz',     emoji: '🕸️',  beispiel: 'Die Spinne spinnt ein Netz.',                loch: 'tz', tipp: 'kurzes e → tz' },
      { wort: 'Blitz',    emoji: '⚡',  beispiel: 'Bei Gewitter gibt es Blitz und Donner.',     loch: 'tz', tipp: 'kurzes i → tz' },
      { wort: 'nutzen',   emoji: '🔧',  beispiel: 'Das Werkzeug kann ich gut nutzen.',          loch: 'tz', tipp: 'kurzes u → tz' },
      { wort: 'Witz',     emoji: '😄',  beispiel: 'Papa erzählt immer lustige Witze.',          loch: 'tz', tipp: 'kurzes i → tz' },
      { wort: 'jetzt',    emoji: '⏱️',  beispiel: 'Jetzt ist der richtige Zeitpunkt!',          loch: 'tz', tipp: 'kurzes e → tz' },
      { wort: 'Hitze',    emoji: '🌡️',  beispiel: 'Im Sommer gibt es große Hitze.',             loch: 'tz', tipp: 'kurzes i → tz' },
      { wort: 'sitzen',   emoji: '🪑',  beispiel: 'Wir sitzen am Tisch und essen.',             loch: 'tz', tipp: 'kurzes i → tz' },
      { wort: 'schützen', emoji: '🛡️',  beispiel: 'Ein Helm kann mich schützen.',               loch: 'tz', tipp: 'kurzes ü → tz' },
      { wort: 'Satz',     emoji: '📝',  beispiel: 'Ich schreibe einen Satz ins Heft.',          loch: 'tz', tipp: 'kurzes a → tz' },
      { wort: 'Klotz',    emoji: '🪵',  beispiel: 'Der Holzklotz ist sehr schwer.',             loch: 'tz', tipp: 'kurzes o → tz' },
      { wort: 'stützen',  emoji: '🩺',  beispiel: 'Krücken können mein Bein stützen.',          loch: 'tz', tipp: 'kurzes ü → tz' },
      { wort: 'trotzdem', emoji: '💪',  beispiel: 'Es regnet, trotzdem gehe ich spielen.',      loch: 'tz', tipp: 'kurzes o → tz' },
      { wort: 'Kratzer',  emoji: '🩹',  beispiel: 'Ich habe einen Kratzer am Arm.',             loch: 'tz', tipp: 'kurzes a → tz' },
      { wort: 'putzen',   emoji: '🧹',  beispiel: 'Wir putzen heute das Klassenzimmer.',        loch: 'tz', tipp: 'kurzes u → tz' },
      { wort: 'Spatz',    emoji: '🐦',  beispiel: 'Der Spatz sitzt auf dem Dach.',              loch: 'tz', tipp: 'kurzes a → tz' },
      { wort: 'netzen',   emoji: '🌧️',  beispiel: 'Der Regen kann das Gras netzen.',            loch: 'tz', tipp: 'kurzes e → tz' },
      { wort: 'Schatz',   emoji: '💎',  beispiel: 'Du bist mein größter Schatz!',               loch: 'tz', tipp: 'kurzes a → tz' },
      { wort: 'witzig',   emoji: '😂',  beispiel: 'Die Geschichte ist sehr witzig.',            loch: 'tz', tipp: 'kurzes i → tz' },
      { wort: 'Pfütze',   emoji: '💦',  beispiel: 'Nach dem Regen gibt es eine große Pfütze.',  loch: 'tz', tipp: 'kurzes ü → tz' },
      { wort: 'Tatze',    emoji: '🐾',  beispiel: 'Die Tatze des Bären ist sehr groß.',         loch: 'tz', tipp: 'kurzes a → tz' },
      { wort: 'Spitze',   emoji: '🔝',  beispiel: 'Das ist die Spitze des Berges.',             loch: 'tz', tipp: 'kurzes i → tz' },
      { wort: 'Schutz',   emoji: '🛡️',  beispiel: 'Ein Helm bietet Schutz.',                    loch: 'tz', tipp: 'kurzes u → tz' },
      { wort: 'Schmutz',  emoji: '🙈',  beispiel: 'Meine Hände sind voller Schmutz.',           loch: 'tz', tipp: 'kurzes u → tz' },
      { wort: 'Metzger',  emoji: '🥩',  beispiel: 'Der Metzger verkauft frisches Fleisch.',     loch: 'tz', tipp: 'kurzes e → tz' },
      { wort: 'Stütze',   emoji: '🏗️',  beispiel: 'Eine Stütze hält die schwere Brücke.',      loch: 'tz', tipp: 'kurzes ü → tz' },
      { wort: 'hetzen',   emoji: '🏃',  beispiel: 'Man soll Tiere nicht hetzen.',               loch: 'tz', tipp: 'kurzes e → tz' },
    ]
  }

};

// Gemischt: alle Wörter aus allen Themen
DEUTSCH_THEMEN.gemischt = {
  titel: 'Gemischt',
  icon: '🎲',
  farbe: '#37474f',
  regel: 'Gemischte Übung: ie, Doppelkonsonanten, ck und tz – pass gut auf!',
  woerter: [
    ...DEUTSCH_THEMEN.ie.woerter.slice(0, 8).map(w => ({...w, thema: 'ie'})),
    ...DEUTSCH_THEMEN.doppel.woerter.slice(0, 8).map(w => ({...w, thema: 'doppel'})),
    ...DEUTSCH_THEMEN.ck.woerter.slice(0, 8).map(w => ({...w, thema: 'ck'})),
    ...DEUTSCH_THEMEN.tz.woerter.slice(0, 8).map(w => ({...w, thema: 'tz'})),
  ].sort(() => 0.5 - Math.random())
};

// Negativwörter: Wörter, bei denen die Regel NICHT gilt (für Übungen als Distractoren)
const DEUTSCH_NEGATIV = {
  ie: [
    'Kind', 'springen', 'Film', 'Wind', 'Bild', 'gibt', 'Milch', 'nimmt',
    'still', 'mit', 'Tisch', 'Fisch', 'Winter', 'Finger', 'Kirche',
    'Stift', 'Ding', 'Ring', 'fit', 'Grill', 'Wirt', 'Stimme'
  ],
  doppel: [
    'Mal', 'Weg', 'Tag', 'Wal', 'Salz', 'Ofen', 'Schal', 'tragen',
    'Hund', 'Hand', 'Land', 'Wald', 'Held', 'Welt', 'Bild',
    'Tal', 'Hof', 'Plan', 'Gras', 'Mus', 'Haus', 'Baum'
  ],
  ck: [
    'Hafen', 'Dach', 'Buch', 'Haken', 'Bach', 'Loch', 'Fach', 'Zweig',
    'Tank', 'Park', 'Werk', 'Bank', 'Turm', 'Markt', 'Zank',
    'Takt', 'Funk', 'Rang', 'klug', 'stark', 'Blick', 'Tok'
  ],
  tz: [
    'Holz', 'Pelz', 'Pilz', 'kurz', 'März', 'schwarz', 'Arzt', 'Salz',
    'Herz', 'Glanz', 'Tanz', 'Franz', 'Schmalz', 'Schwanz', 'Lenz',
    'Stolz', 'Malz', 'Kreuz', 'Mehl', 'Grenz', 'Benz', 'Walz'
  ],
  gemischt: [
    'Kind', 'Mal', 'Hafen', 'Holz', 'springen', 'Weg', 'Dach', 'Pilz',
    'Tisch', 'Hand', 'Park', 'Herz', 'Winter', 'Bild', 'Tank',
    'Fisch', 'Land', 'Werk', 'Tanz', 'Wald', 'Ofen', 'Gras'
  ]
};
