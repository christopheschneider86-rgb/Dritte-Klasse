// ═══════════════════════════════════════════════════════════════
//  MUSIK-TRAINER – Fragenkatalog
//  Struktur: Ein Thema pro Lerneinheit (z.B. "Peter und der Wolf")
//  Jedes Thema enthält Unterkategorien als Frage-Tags (für Dashboard)
//  Erweiterbar: Neues Thema als Schlüssel in MUSIK_TOPICS hinzufügen
// ═══════════════════════════════════════════════════════════════

// Instrument-Bilder (SVG-Dateien im img/ Unterordner)
// visual: nur bei Fragen setzen, wo das INSTRUMENT gezeigt werden soll
// Bei Figuren-Fragen (z.B. "Welches Instrument ist Peter?") → KEIN visual!
const INSTRUMENT_BILD = {
  geige:      'img/geige.svg',
  fagott:     'img/fagott.svg',
  querfloete: 'img/querfloete.svg',
  oboe:       'img/oboe.svg',
  klarinette: 'img/klarinette.svg',
  pauken:     'img/pauken.svg',
  horn:       'img/horn.svg',
};

// ─── THEMEN-STRUKTUR ────────────────────────────────────────
// Alle Fragen zu einer Schuleinheit sind IN EINEM THEMA zusammengefasst.
// Das Kind wählt das Thema (z.B. "Peter und der Wolf") und bekommt
// alle Fragen gemischt aus allen Unterkategorien.
const MUSIK_TOPICS = {

  peter_wolf: {
    icon: '🐺',
    title: 'Peter und der Wolf',
    sub: 'Instrumente, Geschichte & Komponist',
    questions: [

      // ══════════════════════════════════════════════════
      //  FIGUREN & IHRE INSTRUMENTE
      //  KEIN visual – man soll sich an den Charakter erinnern,
      //  nicht das Instrument abschreiben!
      // ══════════════════════════════════════════════════
      {
        tag: 'Figuren',
        q: 'Welches Instrument stellt Peter im Musikstück dar?',
        hint: '🎻 Peter ist jung und lebhaft – das Instrument klingt hell und lebhaft!',
        choices: ['Geige (Violine)', 'Fagott', 'Querflöte', 'Pauken'],
        sol: 0,
      },
      {
        tag: 'Figuren',
        q: 'Welches Instrument stellt den Großvater dar?',
        hint: '💡 Der Großvater ist alt und schwerfällig – das Instrument klingt tief und schwer.',
        choices: ['Horn', 'Fagott', 'Oboe', 'Klarinette'],
        sol: 1,
      },
      {
        tag: 'Figuren',
        q: 'Welches Instrument stellt den Vogel dar?',
        hint: '💡 Der Vogel zwitschert hoch und leicht – das Instrument klingt klar und hell.',
        choices: ['Oboe', 'Klarinette', 'Querflöte', 'Horn'],
        sol: 2,
      },
      {
        tag: 'Figuren',
        q: 'Welches Instrument stellt die Ente dar?',
        hint: '💡 Die Ente schnattert – das Instrument hat einen näselnden Klang.',
        choices: ['Querflöte', 'Oboe', 'Klarinette', 'Fagott'],
        sol: 1,
      },
      {
        tag: 'Figuren',
        q: 'Welches Instrument stellt die Katze dar?',
        hint: '💡 Die Katze schleicht leise – das Instrument klingt warm und samtig.',
        choices: ['Horn', 'Pauken', 'Fagott', 'Klarinette'],
        sol: 3,
      },
      {
        tag: 'Figuren',
        q: 'Welches Instrument stellt den Wolf dar?',
        hint: '💡 Der Wolf ist gefährlich und dunkel – das Instrument klingt mächtig.',
        choices: ['Pauken', 'Geige', 'Horn (Waldhorn)', 'Oboe'],
        sol: 2,
      },
      {
        tag: 'Figuren',
        q: 'Welches Instrument stellt die Jäger mit Gewehren dar?',
        hint: '💡 Die Gewehre schießen – Bumm, Bumm! Das Instrument klingt wie Schüsse!',
        choices: ['Geige', 'Pauken', 'Oboe', 'Fagott'],
        sol: 1,
      },
      {
        tag: 'Figuren',
        q: 'Welche Figur wird von der Querflöte dargestellt?',
        hint: '💡 Hoch, leicht, zwitschernd – wer ist das wohl?',
        choices: ['Die Ente', 'Die Katze', 'Der Vogel', 'Peter'],
        sol: 2,
      },
      {
        tag: 'Figuren',
        q: 'Welche Figur wird von der Oboe dargestellt?',
        hint: '💡 Näselnder Klang – wie ein Schnattern im Wasser.',
        choices: ['Die Ente', 'Der Vogel', 'Die Katze', 'Der Wolf'],
        sol: 0,
      },
      {
        tag: 'Figuren',
        q: 'Welche Figur wird vom Fagott dargestellt?',
        hint: '💡 Tief, schwer, langsam – wer geht so?',
        choices: ['Der Wolf', 'Peter', 'Der Großvater', 'Die Katze'],
        sol: 2,
      },
      {
        tag: 'Figuren',
        q: 'Welche Figur wird von den Pauken dargestellt?',
        hint: '💡 Bumm, Bumm – wie Gewehrschüsse!',
        choices: ['Der Wolf', 'Die Ente', 'Die Jäger mit Gewehren', 'Peter'],
        sol: 2,
      },
      {
        tag: 'Figuren',
        q: 'Welche Figur wird von der Klarinette dargestellt?',
        hint: '💡 Weicher, samtiger Klang – wer schleicht so lautlos?',
        choices: ['Die Ente', 'Die Katze', 'Der Vogel', 'Der Großvater'],
        sol: 1,
      },
      {
        tag: 'Figuren',
        q: 'Welche Figur wird von den Hörnern (Waldhörnern) dargestellt?',
        hint: '💡 Dunkel, mächtig – wer lauert im Wald?',
        choices: ['Die Jäger', 'Der Großvater', 'Peter', 'Der Wolf'],
        sol: 3,
      },
      {
        tag: 'Figuren',
        q: 'Wie viele verschiedene Instrumente/Figuren spielen in "Peter und der Wolf" mit?',
        hint: '💡 Zähl mit: Peter, Großvater, Vogel, Ente, Katze, Wolf, Jäger = 7 Figuren!',
        choices: ['5', '6', '7', '8'],
        sol: 2,
      },

      // ══════════════════════════════════════════════════
      //  INSTRUMENT-WISSEN – MIT BILD (visual gesetzt!)
      //  Hier wird das Instrument gezeigt und man soll
      //  Klang, Bauart oder Name erkennen
      // ══════════════════════════════════════════════════
      {
        tag: 'Instrumente',
        q: 'Was für ein Instrument ist das hier?',
        visual: 'geige',
        hint: '💡 Mit einem Bogen über vier Saiten – das kleinste Streichinstrument!',
        choices: ['Cello', 'Geige (Violine)', 'Kontrabass', 'Bratsche'],
        sol: 1,
      },
      {
        tag: 'Instrumente',
        q: 'Was für ein Instrument ist das hier?',
        visual: 'fagott',
        hint: '💡 Achte auf das s-förmige Verbindungsrohr!',
        choices: ['Klarinette', 'Oboe', 'Fagott', 'Querflöte'],
        sol: 2,
      },
      {
        tag: 'Instrumente',
        q: 'Was für ein Instrument ist das hier?',
        visual: 'querfloete',
        hint: '💡 Man hält es waagerecht (quer) – deshalb der Name!',
        choices: ['Oboe', 'Klarinette', 'Fagott', 'Querflöte'],
        sol: 3,
      },
      {
        tag: 'Instrumente',
        q: 'Was für ein Instrument ist das hier?',
        visual: 'oboe',
        hint: '💡 Schlankes Holzrohr mit Doppelrohrblatt oben!',
        choices: ['Klarinette', 'Fagott', 'Oboe', 'Querflöte'],
        sol: 2,
      },
      {
        tag: 'Instrumente',
        q: 'Was für ein Instrument ist das hier?',
        visual: 'klarinette',
        hint: '💡 Schwarzes Rohr mit vielen silbernen Klappen – 5 Teile!',
        choices: ['Oboe', 'Klarinette', 'Fagott', 'Blockflöte'],
        sol: 1,
      },
      {
        tag: 'Instrumente',
        q: 'Was für ein Instrument ist das hier?',
        visual: 'pauken',
        hint: '💡 Kesselförmig, auf einem Stativ – man schlägt mit Schlägeln drauf!',
        choices: ['Trommel', 'Xylophon', 'Gong', 'Pauke'],
        sol: 3,
      },
      {
        tag: 'Instrumente',
        q: 'Was für ein Instrument ist das hier?',
        visual: 'horn',
        hint: '💡 Rundes, gewickeltes Metallrohr mit großem Schallbecher!',
        choices: ['Trompete', 'Posaune', 'Tuba', 'Horn (Waldhorn)'],
        sol: 3,
      },
      {
        tag: 'Instrumente',
        q: 'Was ist eine Besonderheit des Fagotts?',
        visual: 'fagott',
        hint: '💡 Schau dir das Rohr oben an – es hat eine besondere Form!',
        choices: ['Es hat 6 Saiten', 'Es hat ein s-förmiges Verbindungsrohr (Bocal)', 'Es wird wie eine Geige gespielt', 'Es ist aus Metall'],
        sol: 1,
      },
      {
        tag: 'Instrumente',
        q: 'Was ist eine Besonderheit der Oboe?',
        visual: 'oboe',
        hint: '💡 Das Mundstück der Oboe ist anders als bei der Klarinette!',
        choices: ['Sie hat einen Bogen', 'Sie ist aus Blech', 'Sie hat ein Doppelrohrblatt', 'Sie hat 5 Teile'],
        sol: 2,
      },
      {
        tag: 'Instrumente',
        q: 'Was ist besonders an den Pauken (im Vergleich zu anderen Trommeln)?',
        visual: 'pauken',
        hint: '💡 Die Pauken können etwas, das andere Schlaginstrumente nicht können!',
        choices: ['Sie sind größer', 'Man kann sie auf eine bestimmte Tonhöhe stimmen', 'Sie haben mehr Felle', 'Sie sind aus Holz'],
        sol: 1,
      },
      {
        tag: 'Instrumente',
        q: 'Wie klingt die Querflöte?',
        visual: 'querfloete',
        choices: ['Tief und schwer', 'Warm und samtig', 'Klar und hell', 'Näselnd'],
        sol: 2,
        hint: '💡 Wie ein Vogel – klar und hell!',
      },
      {
        tag: 'Instrumente',
        q: 'Wie klingt das Fagott?',
        visual: 'fagott',
        choices: ['Hell und leicht', 'Tief und schwer', 'Warm und samtig', 'Klar und hoch'],
        sol: 1,
        hint: '💡 Tief und schwer – deshalb stellt es den alten Großvater dar!',
      },
      {
        tag: 'Instrumente',
        q: 'Wie klingt die Klarinette?',
        visual: 'klarinette',
        choices: ['Tief und dunkel', 'Näselnd', 'Warm und samtig', 'Laut und scharf'],
        sol: 2,
        hint: '💡 Samtig = weich wie Samt. Angenehm und weich – wie eine Katze!',
      },
      {
        tag: 'Instrumente',
        q: 'Wie klingt die Oboe?',
        visual: 'oboe',
        choices: ['Hell und fröhlich', 'Näselnd', 'Tief und dunkel', 'Samtig und weich'],
        sol: 1,
        hint: '💡 Die Oboe klingt näselnd – deshalb eignet sie sich für die schnarchende Ente!',
      },
      {
        tag: 'Instrumente',
        q: 'Wie klingt das Horn (Waldhorn)?',
        visual: 'horn',
        choices: ['Schrill und laut', 'Tief und dunkel', 'Weich und warm', 'Hoch und hell'],
        sol: 2,
        hint: '💡 Weich und warm – trotzdem klingt es mächtig beim Wolf!',
      },
      {
        tag: 'Instrumente',
        q: 'Was für ein Instrument ist die Geige?',
        visual: 'geige',
        choices: ['Blasinstrument', 'Schlaginstrument', 'Streichinstrument', 'Zupfinstrument'],
        sol: 2,
        hint: '💡 Mit einem Bogen über die Saiten gestrichen = Streichinstrument!',
      },
      {
        tag: 'Instrumente',
        q: 'Was für ein Instrument ist das Fagott?',
        visual: 'fagott',
        choices: ['Blechblasinstrument', 'Schlaginstrument', 'Streichinstrument', 'Holzblasinstrument'],
        sol: 3,
        hint: '💡 Es hat ein Rohrblatt aus Holz – ein Holzblasinstrument!',
      },
      {
        tag: 'Instrumente',
        q: 'Was für ein Instrument ist die Querflöte?',
        visual: 'querfloete',
        choices: ['Streichinstrument', 'Holzblasinstrument', 'Schlaginstrument', 'Blechblasinstrument'],
        sol: 1,
        hint: '💡 Auch wenn sie heute aus Metall gebaut wird – sie heißt trotzdem Holzblasinstrument!',
      },
      {
        tag: 'Instrumente',
        q: 'Was für ein Instrument ist das Horn?',
        visual: 'horn',
        choices: ['Holzblasinstrument', 'Streichinstrument', 'Schlaginstrument', 'Blechblasinstrument'],
        sol: 3,
        hint: '💡 Aus Metall (Blech) und man bläst hinein = Blechblasinstrument!',
      },
      {
        tag: 'Instrumente',
        q: 'Was für ein Instrument ist die Pauke?',
        visual: 'pauken',
        choices: ['Blasinstrument', 'Streichinstrument', 'Schlaginstrument', 'Zupfinstrument'],
        sol: 2,
        hint: '💡 Man schlägt mit Schlägeln drauf = Schlaginstrument!',
      },
      {
        tag: 'Instrumente',
        q: 'Was für ein Instrument ist die Klarinette?',
        visual: 'klarinette',
        choices: ['Blechblasinstrument', 'Streichinstrument', 'Holzblasinstrument', 'Schlaginstrument'],
        sol: 2,
        hint: '💡 Einfaches Rohrblatt aus Holz = Holzblasinstrument!',
      },
      {
        tag: 'Instrumente',
        q: 'Was für ein Instrument ist die Oboe?',
        visual: 'oboe',
        choices: ['Blechblasinstrument', 'Holzblasinstrument', 'Streichinstrument', 'Schlaginstrument'],
        sol: 1,
        hint: '💡 Doppelrohrblatt aus Holz = Holzblasinstrument!',
      },
      {
        tag: 'Instrumente',
        q: 'Wozu wurden Hörner früher benutzt?',
        visual: 'horn',
        choices: ['Als Tanzmusik', 'Als Signalinstrument', 'Nur im Orchester', 'Als Kinderinstrument'],
        sol: 1,
        hint: '💡 Früher riefen Jäger und Soldaten sich damit über weite Entfernungen zu!',
      },
      {
        tag: 'Instrumente',
        q: 'Wie viele Saiten hat die Geige?',
        visual: 'geige',
        choices: ['2', '3', '4', '6'],
        sol: 2,
        hint: '💡 Vier Saiten – mit einem Bogen drüber gestrichen!',
      },
      {
        tag: 'Instrumente',
        q: 'Woraus wird die Querflöte heute meistens gebaut?',
        visual: 'querfloete',
        choices: ['Holz', 'Plastik', 'Metall', 'Glas'],
        sol: 2,
        hint: '💡 Früher Holz, heute Metall – aber der Name "Holzblasinstrument" blieb!',
      },
      {
        tag: 'Instrumente',
        q: 'Welche Instrumente gehören zu den Streichinstrumenten?',
        choices: ['Querflöte, Oboe, Fagott, Klarinette', 'Violine, Bratsche, Cello, Kontrabass', 'Trompete, Horn, Posaune, Tuba', 'Pauke, Trommel, Xylophon, Gong'],
        sol: 1,
        hint: '💡 Alle haben die gleiche Form, aber unterschiedliche Größen – von klein bis groß!',
      },

      // ══════════════════════════════════════════════════
      //  GESCHICHTE (Handlung)
      // ══════════════════════════════════════════════════
      {
        tag: 'Geschichte',
        q: 'Wohin geht Peter am Morgen, obwohl es gefährlich ist?',
        choices: ['In den Wald', 'Auf die große grüne Wiese', 'Zum Fluss', 'In die Stadt'],
        sol: 1,
        hint: '💡 Peter öffnet die Gartentür und geht hinaus – auf die Wiese!',
      },
      {
        tag: 'Geschichte',
        q: 'Was sitzt auf einem hohen Baum, als Peter auf die Wiese kommt?',
        choices: ['Eine Katze', 'Eine Ente', 'Ein Vogel', 'Ein Wolf'],
        sol: 2,
        hint: '💡 Peters Freund zwitschert fröhlich von oben!',
      },
      {
        tag: 'Geschichte',
        q: 'Was kommt aus dem Gebüsch am Zaun?',
        choices: ['Die Katze', 'Der Wolf', 'Eine Ente', 'Der Großvater'],
        sol: 2,
        hint: '💡 Sie watschelt heraus und freut sich, dass Peter die Tür offen gelassen hat.',
      },
      {
        tag: 'Geschichte',
        q: 'Warum ist der Großvater böse auf Peter?',
        choices: ['Peter hat Lärm gemacht', 'Peter ist auf die Wiese gegangen und hat die Gartentür offen gelassen', 'Peter hat die Ente erschreckt', 'Peter hat den Vogel gestört'],
        sol: 1,
        hint: '💡 "Das ist gefährlich! Wenn nun der Wolf aus dem Walde kommt?"',
      },
      {
        tag: 'Geschichte',
        q: 'Was tut die Katze, als der Wolf kommt?',
        choices: ['Sie läuft weg', 'Sie klettert auf den Baum', 'Sie springt ins Wasser', 'Sie versteckt sich im Gebüsch'],
        sol: 1,
        hint: '💡 Auf den Baum – weit genug vom Wolf entfernt!',
      },
      {
        tag: 'Geschichte',
        q: 'Was passiert mit der Ente, als der Wolf kommt?',
        choices: ['Sie fliegt weg', 'Sie versteckt sich im Gebüsch', 'Der Wolf schnappt sie und schluckt sie hinunter', 'Sie klettert auf den Baum'],
        sol: 2,
        hint: '💡 Die Ente springt aus dem Wasser, aber der Wolf ist schneller...',
      },
      {
        tag: 'Geschichte',
        q: 'Wie fängt Peter den Wolf?',
        choices: ['Er schießt mit einem Gewehr', 'Er lässt eine Schlinge herunter und fängt ihn am Schwanz', 'Er sperrt ihn in die Hütte', 'Er lässt die Jäger ihn erschießen'],
        sol: 1,
        hint: '💡 Peter klettert auf den Baum, macht eine Schlinge aus einem Seil!',
      },
      {
        tag: 'Geschichte',
        q: 'Was ruft Peter den Jägern zu, als sie ankommen?',
        choices: ['Schießt ihn ab!', 'Helft mir!', 'Schießt nicht! Helft uns, ihn in den Zoo zu bringen!', 'Lauft weg!'],
        sol: 2,
        hint: '💡 Der kleine Vogel und Peter haben den Wolf schon gefangen!',
      },
      {
        tag: 'Geschichte',
        q: 'Was kann man am Ende hören, wenn man ganz genau hinhört?',
        choices: ['Den Wolf heulen', 'Den Vogel zwitschern', 'Die Ente im Bauch des Wolfes quaken', 'Peter singen'],
        sol: 2,
        hint: '💡 Der Wolf hat die Ente lebendig heruntergeschluckt – sie quakt noch!',
      },
      {
        tag: 'Geschichte',
        q: 'Wohin wird der Wolf am Ende gebracht?',
        choices: ['In den Wald', 'In den Zoo', 'In einen Käfig zuhause', 'Er wird erschossen'],
        sol: 1,
        hint: '💡 Peter und der Vogel führen den Triumphzug an!',
      },
      {
        tag: 'Geschichte',
        q: 'Was sagt der Großvater am Ende des Stücks?',
        choices: ['Gut gemacht, Peter!', 'Na ja – aber wenn nun Peter den Wolf nicht gefangen hätte – was dann?', 'Das war gefährlich!', 'In den Zoo mit dem Wolf!'],
        sol: 1,
        hint: '💡 Der Großvater schüttelt den Kopf – er macht sich Sorgen!',
      },
      {
        tag: 'Geschichte',
        q: 'Worüber streiten der Vogel und die Ente?',
        choices: ['Wer mehr isst', 'Wer besser schwimmen oder fliegen kann', 'Wer schöner singt', 'Wer größer ist'],
        sol: 1,
        hint: '💡 "Was bist du für ein Vogel, wenn du nicht schwimmen kannst?" – "Was bist du für eine Ente, wenn du nicht fliegen kannst?"',
      },

      // ══════════════════════════════════════════════════
      //  SERGEJ PROKOFJEW (Komponist)
      // ══════════════════════════════════════════════════
      {
        tag: 'Komponist',
        q: 'Von wann bis wann lebte Sergej Prokofjew?',
        choices: ['1800 – 1850', '1856 – 1920', '1891 – 1953', '1900 – 1970'],
        sol: 2,
        hint: '💡 1891 bis 1953 – er lebte 62 Jahre.',
      },
      {
        tag: 'Komponist',
        q: 'Wo wuchs Prokofjew auf?',
        choices: ['In einem deutschen Stadthaus', 'In einem kleinen russischen Dorf', 'In Paris', 'In Wien'],
        sol: 1,
        hint: '💡 Ein kleines russisches Dorf!',
      },
      {
        tag: 'Komponist',
        q: 'Mit wie vielen Jahren lernte Prokofjew Klavierspielen?',
        choices: ['Mit zwei', 'Mit vier', 'Mit sechs', 'Mit acht'],
        sol: 1,
        hint: '💡 Sehr früh – mit vier Jahren lehrte ihn seine Mutter!',
      },
      {
        tag: 'Komponist',
        q: 'Mit wie vielen Jahren begann Prokofjew, kleine Stücke zu komponieren?',
        choices: ['Mit vier', 'Mit fünf', 'Mit sechs', 'Mit acht'],
        sol: 2,
        hint: '💡 Mit sechs Jahren – da gehen andere Kinder gerade in die Schule!',
      },
      {
        tag: 'Komponist',
        q: 'Wann wurde "Peter und der Wolf" zum ersten Mal aufgeführt?',
        choices: ['1900', '1920', '1936', '1953'],
        sol: 2,
        hint: '💡 1936 – in Moskau, vor vielen Kindern!',
      },
      {
        tag: 'Komponist',
        q: 'Wo wurde "Peter und der Wolf" zum ersten Mal aufgeführt?',
        choices: ['In Berlin', 'In Wien', 'In Paris', 'In einem Moskauer Konzertsaal'],
        sol: 3,
        hint: '💡 In Moskau – der russischen Heimat von Prokofjew!',
      },
      {
        tag: 'Komponist',
        q: 'Was ist "Peter und der Wolf" für ein Werk?',
        choices: ['Eine Oper', 'Ein Ballett', 'Ein musikalisches Märchen', 'Eine Sinfonie'],
        sol: 2,
        hint: '💡 Ein "musikalisches Märchen" – Musik erzählt eine Geschichte!',
      },
      {
        tag: 'Komponist',
        q: 'Wer lehrte Prokofjew das Klavierspielen?',
        choices: ['Sein Vater', 'Ein Lehrer', 'Seine Mutter', 'Ein Dirigent'],
        sol: 2,
        hint: '💡 Seine Mutter war seine erste Lehrerin!',
      },

      // ══════════════════════════════════════════════════
      //  WAHR / FALSCH
      // ══════════════════════════════════════════════════
      {
        tag: 'Wahr/Falsch',
        q: 'Die Querflöte wird heute meistens aus Metall gebaut.',
        hint: '💡 Früher Holz, heute Metall – trotzdem noch "Holzblasinstrument"!',
        isYesNo: true,
        sol: 1,
      },
      {
        tag: 'Wahr/Falsch',
        q: 'Das Fagott ist ein Blechblasinstrument.',
        hint: '💡 Falsch! Das Fagott ist ein Holzblasinstrument – Rohrblatt aus Holz!',
        isYesNo: true,
        sol: 0,
      },
      {
        tag: 'Wahr/Falsch',
        q: 'Die Pauke kann auf eine bestimmte Tonhöhe gestimmt werden.',
        hint: '💡 Richtig! Das macht sie besonders – normale Trommeln haben keine feste Tonhöhe!',
        isYesNo: true,
        sol: 1,
      },
      {
        tag: 'Wahr/Falsch',
        q: 'Im Stück stellt die Oboe die Ente dar.',
        hint: '💡 Richtig! Der näselnde Klang der Oboe klingt wie ein Schnattern!',
        isYesNo: true,
        sol: 1,
      },
      {
        tag: 'Wahr/Falsch',
        q: 'Im Stück stellt die Oboe den Vogel dar.',
        hint: '💡 Falsch! Den Vogel spielt die Querflöte. Die Oboe ist die Ente!',
        isYesNo: true,
        sol: 0,
      },
      {
        tag: 'Wahr/Falsch',
        q: 'Hörner wurden früher als Signalinstrumente genutzt.',
        hint: '💡 Richtig! Jäger und Soldaten nutzten sie zum Signalgeben!',
        isYesNo: true,
        sol: 1,
      },
      {
        tag: 'Wahr/Falsch',
        q: 'Prokofjew schrieb "Peter und der Wolf" für Erwachsene.',
        hint: '💡 Falsch! Er schrieb es speziell für Kinder!',
        isYesNo: true,
        sol: 0,
      },
      {
        tag: 'Wahr/Falsch',
        q: 'Die Ente wird am Ende des Stücks vom Wolf gefressen.',
        hint: '💡 Richtig! Der Wolf schluckt sie lebendig – man hört sie am Ende noch quaken!',
        isYesNo: true,
        sol: 1,
      },
      {
        tag: 'Wahr/Falsch',
        q: 'Peter fängt den Wolf mit einem Gewehr.',
        hint: '💡 Falsch! Peter macht eine Schlinge aus einem Seil!',
        isYesNo: true,
        sol: 0,
      },
      {
        tag: 'Wahr/Falsch',
        q: 'Die Geige ist das kleinste Streichinstrument.',
        hint: '💡 Richtig! Kleiner als Bratsche, Cello und Kontrabass!',
        isYesNo: true,
        sol: 1,
      },
      {
        tag: 'Wahr/Falsch',
        q: '"Peter und der Wolf" wurde zum ersten Mal 1936 in Berlin aufgeführt.',
        hint: '💡 Falsch! Es war in Moskau – der russischen Heimat von Prokofjew!',
        isYesNo: true,
        sol: 0,
      },
      {
        tag: 'Wahr/Falsch',
        q: 'Die Katze klettert auf den Baum, als der Wolf kommt.',
        hint: '💡 Richtig! Die Katze ist schlau – sie ist sofort auf dem Baum!',
        isYesNo: true,
        sol: 1,
      },
    ],
  },

  nationalhymne: {
    icon: '🇩🇪',
    title: 'Deutsche Nationalhymne',
    sub: 'Haydn, Melodie, Text & Geschichte',
    questions: [
      // KOMPONIST (JOSEPH HAYDN)
      {
        tag: 'Komponist',
        q: 'Wie hieß der Komponist der Melodie der deutschen Nationalhymne?',
        choices: ['Wolfgang Amadeus Mozart', 'Joseph Haydn', 'Ludwig van Beethoven', 'Sergej Prokofjew'],
        sol: 1,
        hint: '💡 Er lebte von 1732 bis 1809 und arbeitete lange für Fürst Esterházy.',
      },
      {
        tag: 'Komponist',
        q: 'Wann und wo wurde Joseph Haydn geboren?',
        choices: ['1732 in Wien', '1756 in Salzburg', '1732 in Rohrau', '1800 in Berlin'],
        sol: 2,
        hint: '💡 Rohrau ist ein kleines österreichisches Dorf nahe der ungarischen Grenze.',
      },
      {
        tag: 'Komponist',
        q: 'Welchen Beruf hatten Joseph Haydns Eltern?',
        choices: ['Musiker', 'Wagenbauer', 'Bäcker', 'Lehrer'],
        sol: 1,
        hint: '💡 Sie waren rechtschaffene Handwerksleute und bauten Fortbewegungsmittel.',
      },
      {
        tag: 'Komponist',
        q: 'Wohin kam Joseph Haydn mit acht Jahren, weil er eine so schöne Stimme hatte?',
        choices: ['Zum berühmten Wiener Domchor', 'Nach London', 'In eine Musikschule in Paris', 'Nach München'],
        sol: 0,
        hint: '💡 Der Stephansdom ist die bekannteste Kirche in Wien.',
      },
      {
        tag: 'Komponist',
        q: 'Warum musste Haydn den Domchor mit 17 Jahren verlassen?',
        choices: ['Er wollte lieber komponieren', 'Er kam in den Stimmbruch', 'Er zog nach England', 'Er wurde krank'],
        sol: 1,
        hint: '💡 Wenn Jungen erwachsen werden, verändert sich ihre Stimme.',
      },
      {
        tag: 'Komponist',
        q: 'Wie verdiente der junge Haydn nach dem Domchor sein erstes Geld?',
        choices: ['Als Bäcker', 'Als Wagenbauer', 'Als Musiklehrer und durch eigene Kompositionen', 'Als Sänger in der Oper'],
        sol: 2,
        hint: '💡 Er gab Musikunterricht und schrieb eigene kleine Stücke.',
      },
      {
        tag: 'Komponist',
        q: 'Bei wem bekam Haydn schließlich eine feste Anstellung als Kapellmeister?',
        choices: ['Beim Kaiser von Österreich', 'Bei Fürst Esterházy', 'Beim englischen König', 'Beim König von Preußen'],
        sol: 1,
        hint: '💡 Der Fürst war so reich, dass er gleich zwei Schlösser besaß.',
      },
      {
        tag: 'Komponist',
        q: 'Was gehörte zu Haydns Aufgaben bei Fürst Esterházy?',
        choices: ['Er musste das Schloss putzen', 'Er probte mit Chor und Orchester und komponierte ständig neue Musik', 'Er musste nur singen', 'Er baute Instrumente'],
        sol: 1,
        hint: '💡 Der Fürst wollte nicht mit ständigen Wiederholungen gelangweilt werden.',
      },
      {
        tag: 'Komponist',
        q: 'Wie alt wurde Joseph Haydn?',
        choices: ['Er starb mit 40 Jahren', 'Er starb mit 60 Jahren in England', 'Er starb mit 77 Jahren in Wien', 'Er wurde über 90 Jahre alt'],
        sol: 2,
        hint: '💡 Er lebte ein langes, erfolgreiches Musikerleben (1732 - 1809).',
      },

      // MELODIE
      {
        tag: 'Melodie',
        q: 'Für wen komponierte Joseph Haydn die Melodie ursprünglich?',
        choices: ['Für den englischen König', 'Zum Geburtstag des Kaisers von Österreich', 'Für Fürst Esterházy', 'Für den König von Deutschland'],
        sol: 1,
        hint: '💡 Die Melodie hieß am Anfang "Österreichische Kaiserhymne".',
      },
      {
        tag: 'Melodie',
        q: 'Aus welchen zwei musikalischen Teilen setzte Haydn die Melodie zusammen?',
        choices: ['Aus einer Oper und einem Tanz', 'Aus einem kroatischen Volkslied und einem feierlichen Kirchenlied', 'Aus einem Kinderlied und einem Marsch', 'Aus englischer und deutscher Musik'],
        sol: 1,
        hint: '💡 Er verband ein einfaches Volkslied mit etwas sehr Feierlichem.',
      },
      {
        tag: 'Melodie',
        q: 'In welchem Jahr wurde die Kaiserhymne zum ersten Mal aufgeführt?',
        choices: ['1732', '1797', '1841', '1952'],
        sol: 1,
        hint: '💡 Zum Geburtstag des Kaisers im Februar 1797.',
      },
      {
        tag: 'Melodie',
        q: 'Für welche Instrumentengruppe arbeitete Haydn die Melodie später um?',
        choices: ['Für ein Streichquartett (Kaiserquartett)', 'Für ein Blasorchester', 'Für ein großes Klavierkonzert', 'Für eine Rockband'],
        sol: 0,
        hint: '💡 Ein Quartett besteht aus vier Instrumenten.',
      },
      {
        tag: 'Melodie',
        q: 'Welche Instrumente gehören zu einem Streichquartett?',
        choices: ['Klavier, Gitarre, Bass, Schlagzeug', 'Zwei Geigen, eine Bratsche, ein Cello', 'Geige, Querflöte, Oboe, Fagott', 'Vier Geigen'],
        sol: 1,
        hint: '💡 Das Kaiserquartett wird von vier Streichinstrumenten gespielt, das größte davon ist das Cello.',
      },
      {
        tag: 'Melodie',
        q: 'Wie wird die Melodie als Kaiserquartett (von Haydn) gespielt?',
        choices: ['Mit Gesang, schwungvoll', 'Ohne Gesang, feierlich, ruhig', 'Laut und schnell', 'Nur gesungen, ohne Instrumente'],
        sol: 1,
        hint: '💡 Ein Streichquartett hat keine Sänger, die Stimmung ist feierlich und ruhig.',
      },
      {
        tag: 'Melodie',
        q: 'Wie wird die Melodie heute als deutsche Nationalhymne gespielt (z. B. im Stadion)?',
        choices: ['Ohne Gesang, ruhig', 'Nur mit Geigen', 'Mit Gesang, feierlich, schwungvoll', 'Ganz leise'],
        sol: 2,
        hint: '💡 Die Menschen singen mit und die Musik hat Schwung!',
      },

      // TEXT & GESCHICHTE
      {
        tag: 'Text',
        q: 'Wer dichtete den Text zur deutschen Nationalhymne?',
        choices: ['Joseph Haydn', 'Heinrich Hoffmann von Fallersleben', 'Johann Wolfgang von Goethe', 'Ein unbekannter Soldat'],
        sol: 1,
        hint: '💡 Er schrieb auch Kinderlieder wie "Kuckuck, Kuckuck" und "Ein Männlein steht im Walde".',
      },
      {
        tag: 'Geschichte',
        q: 'In welchem Jahr schrieb Hoffmann von Fallersleben den neuen Text zur Melodie?',
        choices: ['1797', '1841', '1922', '1952'],
        sol: 1,
        hint: '💡 Es war 1841. Er nannte sein Werk das "Lied der Deutschen".',
      },
      {
        tag: 'Geschichte',
        q: 'Warum schrieb Hoffmann von Fallersleben das "Lied der Deutschen"?',
        choices: ['Weil ihn der Kaiser darum gebeten hatte', 'Weil er Geld brauchte', 'Weil das deutschsprachige Gebiet aus 39 Kleinstaaten bestand und er sich ein einiges Deutschland wünschte', 'Weil er die Melodie nicht mochte'],
        sol: 2,
        hint: '💡 Damals gab es überall Grenzen und Zölle in Deutschland. Die Menschen wünschten sich "Einigkeit".',
      },
      {
        tag: 'Geschichte',
        q: 'Wann wurde das "Lied der Deutschen" erstmals zur deutschen Nationalhymne erklärt?',
        choices: ['1841', '1922', '1933', '1952'],
        sol: 1,
        hint: '💡 Es dauerte 81 Jahre! Erst 1922 (in der Weimarer Republik) wurde es die offizielle Hymne.',
      },
      {
        tag: 'Geschichte',
        q: 'Warum wird heute nicht mehr das ganze Lied als Nationalhymne gesungen?',
        choices: ['Weil es zu lang ist', 'Weil die Melodie für drei Strophen nicht passt', 'Weil die 1. Strophe zwischen 1933 und 1945 (von den Nationalsozialisten) missbraucht wurde', 'Weil man den Text vergessen hat'],
        sol: 2,
        hint: '💡 Die 1. Strophe wurde genutzt, um den Menschen einzureden, sie seien besser als andere und dürften Krieg führen.',
      },
      {
        tag: 'Text',
        q: 'Welche Strophe des "Liedes der Deutschen" wird heute als Nationalhymne gesungen?',
        choices: ['Die 1. Strophe', 'Die 2. Strophe', 'Die 3. Strophe', 'Alle drei Strophen'],
        sol: 2,
        hint: '💡 Seit 1952 singen wir nur noch diese eine Strophe.',
      },
      {
        tag: 'Text',
        q: 'Mit welchen drei Worten beginnt die 3. Strophe (die heutige Nationalhymne)?',
        choices: ['Deutschland, Deutschland über...', 'Einigkeit und Recht und Freiheit', 'Blüh im Glanze dieses Glückes', 'Kuckuck, Kuckuck ruft\'s aus...'],
        sol: 1,
        hint: '💡 Diese Begriffe sind auch heute noch wichtig für das Wohlergehen unseres Landes!',
      },
      
      // WAHR / FALSCH
      {
        tag: 'Wahr/Falsch',
        q: 'Joseph Haydn hatte eigene Kinder.',
        hint: '💡 Falsch! Er war zwar 40 Jahre verheiratet, aber die Ehe blieb kinderlos.',
        isYesNo: true,
        sol: 0,
      },
      {
        tag: 'Wahr/Falsch',
        q: 'Joseph Haydn reiste mit 60 Jahren nach England.',
        hint: '💡 Richtig! Dort hörte er auch eine Hymne für den englischen König, die ihn inspirierte.',
        isYesNo: true,
        sol: 1,
      },
      {
        tag: 'Wahr/Falsch',
        q: 'Ein Streichquartett besteht aus vier Geigen.',
        hint: '💡 Falsch! Es besteht aus zwei Geigen, einer Bratsche und einem Cello.',
        isYesNo: true,
        sol: 0,
      },
      {
        tag: 'Wahr/Falsch',
        q: 'Heinrich Hoffmann von Fallersleben schrieb auch bekannte Kinderlieder.',
        hint: '💡 Richtig! Zum Beispiel "Kuckuck, Kuckuck" oder "Ein Männlein steht im Walde".',
        isYesNo: true,
        sol: 1,
      },
      {
        tag: 'Wahr/Falsch',
        q: 'Das "Lied der Deutschen" bestand ursprünglich aus drei Strophen.',
        hint: '💡 Richtig! Es hatte drei Strophen, von denen heute aber nur noch die dritte gesungen wird.',
        isYesNo: true,
        sol: 1,
      },
      
      // PUZZLE
      {
        tag: 'Puzzle',
        q: 'Bringe den Text der Nationalhymne in die richtige Reihenfolge!',
        hint: '💡 Dieses Puzzle wird in einem eigenen Fenster gespielt.',
        isPuzzle: true,
      },
    ],
  },


  // ── HIER KOMMEN NEUE THEMEN DAZU (z.B. wenn neue Schulaufgabe ansteht) ──
  // beispiel_thema: {
  //   icon: '🎸',
  //   title: 'Die Rockband',
  //   sub: 'Neue Schuleinheit',
  //   questions: [ ... ]
  // },
};

// ─── HILFS-FUNKTIONEN ─────────────────────────────────────────
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
