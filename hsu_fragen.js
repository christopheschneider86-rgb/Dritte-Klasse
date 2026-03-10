// ============================================================
//  HSU-TRAINER 3. KLASSE – FRAGENDATEI
//  Hier kannst du neue Fragen hinzufügen oder bestehende
//  ändern. Jede Frage folgt dem Schema:
//
//  {
//    q: "Fragetext",
//    hint: "Kleiner Hinweis",
//    choices: ["Antwort A", "Antwort B", "Antwort C", "Antwort D"],  // bei Multiple Choice
//    sol: 0,          // Index der richtigen Antwort (0=A, 1=B, 2=C, 3=D)
//    isYesNo: true,   // statt choices: Ja/Nein-Frage (sol: 1=Ja, 0=Nein)
//    bonus: true      // Bonusfrage (erscheint nach richtiger Antwort)
//  }
// ============================================================

const HSU_TOPICS = {

  // ──────────────────────────────────────────────
  // 1. WALD
  // ──────────────────────────────────────────────
  wald: {
    title: "Wald",
    icon: "🌲",
    sub: "Tiere & Pflanzen",
    color: "#27ae60",
    questions: [
      { q: "Welches Tier lebt im Wald und schläft den ganzen Winter?", hint: "Es ist ein großes, braunes Tier.", choices: ["Hase","Igel","Bär","Eichhörnchen"], sol: 2 },
      { q: "Wie nennt man die Frucht der Eiche?", hint: "Eichhörnchen lieben sie!", choices: ["Nuss","Zapfen","Eichel","Beere"], sol: 2 },
      { q: "Welcher Vogel hämmert mit dem Schnabel in Baumstämme?", hint: "Der Name verrät schon viel!", choices: ["Eule","Specht","Fink","Schwalbe"], sol: 1 },
      { q: "Was ist ein Laubbaum?", hint: "Er verliert im Herbst seine Blätter.", choices: ["Ein Baum mit Nadeln","Ein Baum mit breiten Blättern","Ein Baum ohne Rinde","Ein immergrüner Baum"], sol: 1 },
      { q: "Igel halten Winterschlaf.", hint: "Denk an den Winter!", isYesNo: true, sol: 1 },
      { q: "Fällt einem Laubbaum im Herbst das Laub ab?", hint: "", isYesNo: true, sol: 1 },
      { q: "Welche Schicht ist ganz oben im Wald?", hint: "Die größten Bäume ragen am höchsten.", choices: ["Bodenschicht","Strauchschicht","Baumschicht","Krautschicht"], sol: 2 },
      { q: "Was fressen Eichhörnchen?", hint: "Sie sammeln es im Herbst.", choices: ["Fleisch","Nüsse und Samen","Fische","Insekten"], sol: 1 },
      { q: "Welcher Baum hat eine auffällige, weiße Rinde?", hint: "Man erkennt sie sofort.", choices: ["Eiche","Tanne","Birke","Kastanie"], sol: 2 },
      { q: "Wie nennt man den Wald, in dem Laub- und Nadelbäume wachsen?", hint: "Eine Mischung aus beiden.", choices: ["Nadelwald","Laubwald","Regenwald","Mischwald"], sol: 3 },
      { q: "Was ist die wichtigste Aufgabe von Blättern?", hint: "Wir brauchen es zum Atmen.", choices: ["Tiere füttern","Sauerstoff herstellen","Schatten spenden","Regen abfangen"], sol: 1 },
      { q: "Welches Tier gräbt sich einen Bau tief unter der Erde?", hint: "Hat weiße Streifen im Gesicht.", choices: ["Dachs","Reh","Eule","Wildschwein"], sol: 0 },
      { q: "Verliert die Tanne im Winter ihre Nadeln?", hint: "Die meisten Nadelbäume bleiben grün.", isYesNo: true, sol: 0 },
      { q: "Welcher Waldvogel ist meistens nachts aktiv?", hint: "Sie kann ihren Kopf sehr weit drehen.", choices: ["Specht","Eule","Amsel","Kuckuck"], sol: 1 },
      { q: "Was ist Moos?", hint: "Wächst am Boden oder auf Baumstämmen.", choices: ["Ein kleiner Baum","Ein Tier","Eine Pflanze in der Bodenschicht","Ein Pilz"], sol: 2 },
      { q: "Wie nennt man die Wohnung des Fuchses?", hint: "Er gräbt ihn meistens in den Boden.", choices: ["Nest","Höhle","Bau","Haus"], sol: 2 },
      // Bonusfragen
      { q: "Welcher Pilz im Wald ist GIFTIG und hat rote Punkte?", hint: "Vorsicht, nicht anfassen!", choices: ["Champignon","Pfifferling","Fliegenpilz","Steinpilz"], sol: 2, bonus: true },
      { q: "Wie nennt man Tiere, die sich von Pflanzen UND anderen Tieren ernähren?", hint: "Weder reiner Pflanzenfresser noch reiner Fleischfresser.", choices: ["Pflanzenfresser","Fleischfresser","Allesfresser","Insektenfresser"], sol: 2, bonus: true },
      { q: "Wie alt kann eine Eiche ungefähr werden?", hint: "Sehr, sehr alt.", choices: ["100 Jahre","300 Jahre","1000 Jahre","5000 Jahre"], sol: 2, bonus: true },
      { q: "Welches Tier wird oft als der 'König des Waldes' bezeichnet?", hint: "Trägt ein großes Geweih.", choices: ["Wildschwein","Rothirsch","Wolf","Bär"], sol: 1, bonus: true },
      { q: "Wie nennt man die Wissenschaft und Pflege des Waldes?", hint: "Dort arbeitet der Förster.", choices: ["Forstwirtschaft","Landwirtschaft","Gartenbau","Waldologie"], sol: 0, bonus: true }
    ]
  },

  // ──────────────────────────────────────────────
  // 2. WASSER & WASSERKREISLAUF
  // ──────────────────────────────────────────────
  wasser: {
    title: "Wasser",
    icon: "💧",
    sub: "Kreislauf & Eigenschaften",
    color: "#2980b9",
    questions: [
      { q: "Was passiert mit Wasser, wenn es erhitzt wird?", hint: "Es steigt in die Luft.", choices: ["Es friert","Es verdunstet","Es wird schwerer","Es wird bunt"], sol: 1 },
      { q: "Woher kommt der Regen?", hint: "Denk an den Wasserkreislauf.", choices: ["Aus dem Boden","Aus Wolken","Aus Flüssen","Aus Bergen"], sol: 1 },
      { q: "Wie nennt man den Vorgang, wenn Wolken Regen geben?", hint: "Niederschlag ist das Stichwort.", choices: ["Verdunstung","Kondensation","Niederschlag","Sickerwasser"], sol: 2 },
      { q: "Ist Wasser ein Löser für Salz?", hint: "Denk an Salzwasser!", isYesNo: true, sol: 1 },
      { q: "Bei welcher Temperatur gefriert Wasser?", hint: "Eine runde Zahl!", choices: ["−10 °C","0 °C","10 °C","100 °C"], sol: 1 },
      { q: "Welche Lebewesen brauchen Wasser zum Überleben?", hint: "Alle oder nur manche?", choices: ["Nur Fische","Nur Pflanzen","Nur Menschen","Alle Lebewesen"], sol: 3 },
      { q: "Was ist ein Bach?", hint: "Er ist kleiner als ein Fluss.", choices: ["Ein stehendes Gewässer","Ein kleines fließendes Gewässer","Ein großes Meer","Eine Pfütze"], sol: 1 },
      { q: "Was passiert, wenn Eis wärmer als 0 °C wird?", hint: "Es bleibt nicht fest.", choices: ["Es wird zu Wasserdampf","Es wird wieder flüssig (schmilzt)","Es verschwindet","Es wird kälter"], sol: 1 },
      { q: "Welches Wasser kommt aus unserem Wasserhahn?", hint: "Man kann es bedenkenlos trinken.", choices: ["Salzwasser","Trinkwasser (Süßwasser)","Regenwasser","Meerwasser"], sol: 1 },
      { q: "Wohin fließt das Wasser von großen Flüssen am Ende meistens?", hint: "Dort ist es salzig.", choices: ["In den Himmel","Ins Meer","In die Berge","In die Wolken"], sol: 1 },
      { q: "Wofür verbrauchen wir zu Hause am meisten Wasser?", hint: "Denk an das Badezimmer.", choices: ["Kochen und Trinken","Zähneputzen","Baden, Duschen, Toilette","Pflanzen gießen"], sol: 2 },
      { q: "Wie nehmen Bäume das meiste Wasser auf?", hint: "Unter der Erde.", choices: ["Durch die Blätter","Durch den Stamm","Durch die Rinde","Durch die Wurzeln"], sol: 3 },
      { q: "Schmutziges Wasser wird im Klärwerk wieder gereinigt.", hint: "Damit es zurück in den Fluss darf.", isYesNo: true, sol: 1 },
      { q: "Kann man Meerwasser einfach so trinken, wenn man Durst hat?", hint: "Es ist sehr salzig.", isYesNo: true, sol: 0 },
      // Bonusfragen
      { q: "Wie viel Prozent der Erde sind mit Wasser bedeckt?", hint: "Mehr als die Hälfte!", choices: ["30 %","50 %","71 %","90 %"], sol: 2, bonus: true },
      { q: "Welcher Aggregatzustand hat Wasser als Eis?", hint: "Fest, flüssig oder gasförmig?", choices: ["Flüssig","Gasförmig","Fest","Weich"], sol: 2, bonus: true },
      { q: "Bei welcher Temperatur ist Wasser am schwersten (hat die größte Dichte)?", hint: "Anomalie des Wassers.", choices: ["0 °C","4 °C","100 °C","-5 °C"], sol: 1, bonus: true },
      { q: "Wie nennt man Wasser, das sich tief unter der Erde sammelt?", hint: "Daraus wird oft unser Trinkwasser gepumpt.", choices: ["Grundwasser","Sickerwasser","Abwasser","Heilwasser"], sol: 0, bonus: true },
      { q: "Welches Meer hat den höchsten Salzgehalt?", hint: "Man geht dort nicht unter.", choices: ["Nordsee","Totes Meer","Ostsee","Mittelmeer"], sol: 1, bonus: true }
    ]
  },

  // ──────────────────────────────────────────────
  // 3. FEUERWEHR
  // ──────────────────────────────────────────────
  feuerwehr: {
    title: "Feuerwehr",
    icon: "🚒",
    sub: "Notruf & Aufgaben",
    color: "#e74c3c",
    questions: [
      { q: "Welche Notrufnummer hat die Feuerwehr?", hint: "Eine zweistellige Zahl.", choices: ["110","112","115","118"], sol: 1 },
      { q: "Was soll man tun, wenn man einen Brand bemerkt?", hint: "Als Erstes …", choices: ["Löschen","Notruf wählen","Verstecken","Warten"], sol: 1 },
      { q: "Wer löscht Brände und rettet Menschen?", hint: "", choices: ["Polizei","Arzt","Feuerwehr","Lehrer"], sol: 2 },
      { q: "Darf man die Feuerwehr auch für Tierrettungen rufen?", hint: "Katze auf dem Baum?", isYesNo: true, sol: 1 },
      { q: "Was trägt die Feuerwehr zum Schutz vor Rauch?", hint: "Man trägt es im Gesicht.", choices: ["Helm","Atemschutzmaske","Handschuhe","Stiefel"], sol: 1 },
      { q: "Was macht ein Rauchmelder?", hint: "Er hängt an der Decke.", choices: ["Er löscht Feuer","Er piepst bei Rauch","Er meldet Einbrecher","Er misst die Temperatur"], sol: 1 },
      { q: "Kann Feuerwehr auch bei Hochwasser helfen?", hint: "Wasser abpumpen?", isYesNo: true, sol: 1 },
      { q: "Was sind die 5 W beim Notruf? Welches W gehört NICHT dazu?", hint: "Wer, Was, Wo, Wie viele … und?", choices: ["Wann","Wetter","Warten auf Rückfragen","Warum"], sol: 1 },
      { q: "Wer darf die Feuerwehr rufen, wenn es brennt?", hint: "Braucht man ein bestimmtes Alter?", choices: ["Nur Erwachsene","Nur die Polizei","Jeder, auch Kinder","Nur der Hausmeister"], sol: 2 },
      { q: "Was macht die Feuerwehr bei einem schweren Autounfall?", hint: "Rettungsschere", choices: ["Sie fegt nur die Straße","Menschen befreien und Öl binden","Sie repariert das Auto","Sie schreibt Strafzettel"], sol: 1 },
      { q: "Wie nennt die Feuerwehr ihren Wasserschlauch?", hint: "Er wird ausgerollt.", choices: ["Druckschlauch / Strahlrohr","Gartenschlauch","Gummiband","Wasserrutsche"], sol: 0 },
      { q: "Darf man aus Spaß den Notruf 112 wählen?", hint: "Es blockiert die Leitung für echte Notfälle.", isYesNo: true, sol: 0 },
      { q: "Wo bekommt die Feuerwehr auf der Straße Wasser her?", hint: "Ein roter Deckel im Boden oder eine Säule.", choices: ["Aus dem Supermarkt","Vom Hydranten","Aus Pfützen","Von der Polizei"], sol: 1 },
      { q: "Welche Farbe haben Feuerwehrautos in Deutschland fast immer?", hint: "Warnfarbe.", choices: ["Blau","Weiß","Rot","Grün"], sol: 2 },
      // Bonusfragen
      { q: "Wie heißt das Fahrzeug der Feuerwehr mit der großen Leiter?", hint: "Für hohe Gebäude.", choices: ["Tanklöschfahrzeug","Drehleiter","Einsatzleitwagen","Rüstwagen"], sol: 1, bonus: true },
      { q: "Was ist eine 'Freiwillige Feuerwehr'?", hint: "Gibt es oft in Dörfern und Kleinstädten.", choices: ["Leute, die kostenlos arbeiten in ihrer Freizeit","Feuerwehrleute, die nie üben","Leute, die nur kleine Feuer löschen dürfen","Feuerwehr für den Garten"], sol: 0, bonus: true },
      { q: "Wie lange dauert es gesetzlich meistens maximal, bis die Feuerwehr da ist (Hilfsfrist)?", hint: "Sie muss sehr schnell sein.", choices: ["Ca. 5-10 Minuten","Ca. 30 Minuten","Ca. 1 Stunde","Am nächsten Tag"], sol: 0, bonus: true },
      { q: "Wofür steht die Abkürzung HLF auf einem Feuerwehrauto?", hint: "Hilfe...", choices: ["Hochleiterfahrzeug","Hilfeleistungslöschgruppenfahrzeug","Hubschrauberlöschflugzeug","Halbeslöschfahrzeug"], sol: 1, bonus: true }
    ]
  },

  // ──────────────────────────────────────────────
  // 4. FEUER & VERBRENNUNG
  // ──────────────────────────────────────────────
  feuer: {
    title: "Feuer",
    icon: "🔥",
    sub: "Sicherheit & Eigenschaften",
    color: "#e67e22",
    questions: [
      { q: "Was braucht Feuer zum Brennen?", hint: "Ein Gas in der Luft.", choices: ["Wasser","Stickstoff","Sauerstoff","Kohlendioxid"], sol: 2 },
      { q: "Was passiert, wenn man eine Kerze mit einem Glas abdeckt?", hint: "Kein Sauerstoff mehr …", choices: ["Sie brennt heller","Sie geht aus","Sie explodiert","Sie brennt weiter"], sol: 1 },
      { q: "Womit kann man ein kleines Lager-Feuer löschen?", hint: "Feuer und … vertragen sich nicht.", choices: ["Öl","Sand oder Wasser","Papier","Benzin"], sol: 1 },
      { q: "Darf man alleine mit Streichhölzern spielen?", hint: "Sehr gefährlich!", isYesNo: true, sol: 0 },
      { q: "Welche Farbe hat eine sehr heiße Flamme?", hint: "Je heißer, desto …", choices: ["Rot","Orange","Blau","Grün"], sol: 2 },
      { q: "Was entsteht beim Verbrennen von Holz außer Wärme?", hint: "Du siehst es am Lagerfeuer aufsteigen.", choices: ["Wasser","Stahl","Rauch und Asche","Metall"], sol: 2 },
      { q: "Ist Kohlendioxid (CO2) zum Löschen von Feuer geeignet?", hint: "Es verdrängt den Sauerstoff.", isYesNo: true, sol: 1 },
      { q: "Was brennt besonders gut?", hint: "Im Wald findet man es oft.", choices: ["Nasses Gras","Trockenes Holz","Steine","Sand"], sol: 1 },
      { q: "Warum darf man nicht mit einem Feuerzeug im Bett spielen?", hint: "Bettzeug fängt leicht an zu...", choices: ["Man könnte einschlafen","Brandgefahr (Decke brennt schnell)","Das Feuerzeug geht kaputt","Es wird zu hell"], sol: 1 },
      { q: "Darf man brennendes Fett oder Öl in der Pfanne mit Wasser löschen?", hint: "Stichflammen-Gefahr!", isYesNo: true, sol: 0 },
      { q: "Was ist ein Funke?", hint: "Es sprüht aus dem Lagerfeuer.", choices: ["Ein Wassertropfen","Ein glühendes kleines Teilchen","Ein Insekt","Ein kaltes Stück Holz"], sol: 1 },
      { q: "Feuer macht hell und warm.", hint: "In der Steinzeit sehr wichtig.", isYesNo: true, sol: 1 },
      // Bonusfragen
      { q: "Was ist die 'Zündtemperatur'?", hint: "Ab wann fängt etwas an zu brennen?", choices: ["Die Temperatur, bei der Wasser kocht","Die Temperatur, ab der ein Stoff sich selbst entzündet","Die Temperatur im Feuer","Die Löschtemperatur"], sol: 1, bonus: true },
      { q: "Welches chemische Element aus dem Periodensystem ist für die Verbrennung nötig?", hint: "Wir atmen es ein.", choices: ["Helium","Wasserstoff","Sauerstoff (Oxygenium)","Gold"], sol: 2, bonus: true },
      { q: "Bei welcher Temperatur entzündet sich normales Papier von selbst (ohne Flamme)?", hint: "Ein berühmtes Buch heißt 'Fahrenheit 451'.", choices: ["Bei ca. 50 °C","Bei ca. 100 °C","Bei ca. 230 °C","Bei über 1000 °C"], sol: 2, bonus: true }
    ]
  },

  // ──────────────────────────────────────────────
  // 5. KLASSENSPRECHER & DEMOKRATIE
  // ──────────────────────────────────────────────
  demokratie: {
    title: "Klasse & Demokratie",
    icon: "🗳️",
    sub: "Mitbestimmung & Rechte",
    color: "#8e44ad",
    questions: [
      { q: "Was macht ein Klassensprecher?", hint: "Er oder sie vertritt …", choices: ["Die Schule nach außen","Die Klasse gegenüber Lehrern","Den Schulleiter","Den Hausmeister"], sol: 1 },
      { q: "Wie wird ein Klassensprecher gewählt?", hint: "Alle dürfen mitmachen.", choices: ["Er wird ernannt","Durch geheime Abstimmung","Der Lehrer entscheidet","Der Älteste gewinnt"], sol: 1 },
      { q: "Was bedeutet Demokratie?", hint: "Das Volk …", choices: ["Ein König regiert","Das Volk regiert sich selbst","Einer entscheidet alles","Kinder dürfen nicht wählen"], sol: 1 },
      { q: "Dürfen alle Kinder in der Klasse abstimmen?", hint: "", isYesNo: true, sol: 1 },
      { q: "Was ist ein Kinderrecht?", hint: "Es gilt für alle Kinder der Welt.", choices: ["Ein Recht nur für reiche Kinder","Etwas, das nur Eltern entscheiden","Ein Recht, das jedes Kind auf der Welt hat","Eine Schulregel"], sol: 2 },
      { q: "Hat jedes Kind das Recht auf Bildung (Schule)?", hint: "", isYesNo: true, sol: 1 },
      { q: "Was kann man im Klassenrat oder in der Klassenversammlung besprechen?", hint: "Gemeinsam Probleme lösen.", choices: ["Noten","Schulprobleme und Klassenregeln","Hausaufgaben des Lehrers","Nix Wichtiges"], sol: 1 },
      { q: "Wie nennt man die Chefin / den Chef einer Gemeinde?", hint: "In Bayern bekannt.", choices: ["Bundeskanzler","Bürgermeister","Landrat","Pfarrer"], sol: 1 },
      { q: "Wie oft wird der Klassensprecher normalerweise gewählt?", hint: "Zu Beginn eines neuen...", choices: ["Jeden Monat","Jedes Schuljahr","Jede Woche","Alle 4 Jahre"], sol: 1 },
      { q: "Was bedeutet 'geheime Wahl'?", hint: "Beim Zettel ausfüllen.", choices: ["Man wählt im Keller","Niemand darf wissen, dass es eine Wahl gibt","Keiner weiß, wen der andere auf den Zettel geschrieben hat","Man wählt mit verbundenen Augen"], sol: 2 },
      { q: "Wer vertritt nicht nur eine Klasse, sondern alle Schüler der Schule?", hint: "Er spricht mit dem Rektor.", choices: ["Der Hausmeister","Der Schülersprecher","Der Elternbeirat","Der Lehrer"], sol: 1 },
      { q: "Ein Klassensprecher darf bestimmen, wer mitspielen darf und wer nicht.", hint: "Ist er der Bestimmer?", isYesNo: true, sol: 0 },
      { q: "Was ist ein 'Kompromiss'?", hint: "Wenn zwei sich streiten.", choices: ["Man einigt sich so, dass beide Seiten damit leben können","Einer gewinnt immer","Man wirft eine Münze","Man bricht den Streit ab"], sol: 0 },
      // Bonusfragen
      { q: "Wie heißt das deutsche Parlament, das Gesetze für ganz Deutschland macht?", hint: "Sitzt in Berlin.", choices: ["Bundesrat","Bundestag","Landtag","Stadtrat"], sol: 1, bonus: true },
      { q: "Ab welchem Alter darf man in Deutschland in den meisten Bundesländern wählen?", hint: "Eine gerade Zahl.", choices: ["14","16 oder 18","21","25"], sol: 1, bonus: true },
      { q: "Wie heißt die Versammlung aller Klassensprecher einer Schule?", hint: "Abkürzung SMV", choices: ["Schüler-Mit-Verantwortung (SMV)","Lehrerkonferenz","Elternbeirat","Schulforum"], sol: 0, bonus: true },
      { q: "Wer ist das Staatsoberhaupt von Deutschland?", hint: "Nicht der Bundeskanzler.", choices: ["Bundespräsident","Bundeskanzler","König","Bürgermeister"], sol: 0, bonus: true }
    ]
  },

  // ──────────────────────────────────────────────
  // 6. RITTER & MITTELALTER
  // ──────────────────────────────────────────────
  ritter: {
    title: "Ritter & Burg",
    icon: "🏰",
    sub: "Mittelalter",
    color: "#7f8c8d",
    questions: [
      { q: "Wo lebte ein Ritter im Mittelalter meistens?", hint: "Ein Gebäude mit dicken Mauern.", choices: ["Im Schloss","In der Burg","Im Dorf","Im Kloster"], sol: 1 },
      { q: "Wie nennt man die Schutzrüstung des Ritters?", hint: "Aus Metall gefertigt.", choices: ["Talar","Rüstung","Tracht","Umhang"], sol: 1 },
      { q: "Was ist ein Knappe?", hint: "Er hilft dem Ritter.", choices: ["Ein kleines Schwert","Ein Lehrling auf dem Weg zum Ritter","Ein Burgwächter","Ein Bauer"], sol: 1 },
      { q: "Wie nennt man das Wasser, das oft eine Burg umgibt?", hint: "Schutz gegen Feinde.", choices: ["See","Fluss","Burggraben","Teich"], sol: 2 },
      { q: "Wurde ein Ritter schon als Kind ausgebildet (erst Page, dann Knappe)?", hint: "", isYesNo: true, sol: 1 },
      { q: "Was ist ein Turnier?", hint: "Ritter kämpfen …", choices: ["Ein Fest mit Tanz","Ein ritterlicher Wettkampf zur Übung","Eine Ratsversammlung","Ein Gottesdienst"], sol: 1 },
      { q: "Wie nennt man den schweren Eingang einer Burg, den man hochziehen kann?", hint: "Brücke über den Graben.", choices: ["Holztor","Burgtür","Zugbrücke","Falltür"], sol: 2 },
      { q: "Woraus bestand das Schutzhemd eines Ritters, bevor es dicke Plattenrüstungen gab?", hint: "Geflochten aus Metallringen.", choices: ["Baumwollhemd","Kettenhemd","Lederjacke","Holzpanzer"], sol: 1 },
      { q: "Was war die Hauptwaffe eines Ritters im Nahkampf?", hint: "Eine lange Klinge.", choices: ["Pistole","Schwert","Bogen","Speer"], sol: 1 },
      { q: "Wie legten Ritter große Entfernungen meistens zurück?", hint: "Sie hatten noch keine Autos.", choices: ["Zu Fuß","Mit dem Schiff","Auf dem Pferd","Mit der Kutsche"], sol: 2 },
      { q: "Trugen Ritter ihre schwere Rüstung auch beim Schlafen?", hint: "Viel zu unbequem!", isYesNo: true, sol: 0 },
      { q: "Wozu diente ein Schild?", hint: "Wird in der anderen Hand getragen.", choices: ["Als Teller","Zum Abwehren von Schlägen und Pfeilen","Als Sitz","Als Waffe zum Schießen"], sol: 1 },
      // Bonusfragen
      { q: "Wie nennt man den Herrn über ein großes Gebiet mit vielen Burgen?", hint: "Über den Rittern.", choices: ["König oder Fürst","Ritter","Knappe","Burgherr"], sol: 0, bonus: true },
      { q: "Was ist ein Herold?", hint: "Er ruft beim Turnier Botschaften aus.", choices: ["Ein Burgkoch","Ein Bote und Ankündiger","Ein Stallmeister","Ein Burgpriester"], sol: 1, bonus: true },
      { q: "Wie nennt man den höchsten und stärksten Turm einer Burg, der als letzter Zufluchtsort diente?", hint: "Das sicherste Gebäude.", choices: ["Burgfried / Bergfried","Glockenturm","Wachturm","Palas"], sol: 0, bonus: true },
      { q: "Welches Tier war als Zeichen für Mut und Stärke besonders oft auf den Schilden und Wappen der Ritter zu sehen?", hint: "Der König der Tiere.", choices: ["Maus","Löwe oder Adler","Pferd","Fisch"], sol: 1, bonus: true }
    ]
  },

  // ──────────────────────────────────────────────
  // 7. HIMMELSRICHTUNGEN & ORIENTIERUNG
  // ──────────────────────────────────────────────
  orientierung: {
    title: "Karte & Kompass",
    icon: "🧭",
    sub: "Orientierung im Raum",
    color: "#16a085",
    questions: [
      { q: "Welche Himmelsrichtung zeigt die farbige Nadel eines Kompass immer an?", hint: "Ganz nach oben auf der Karte.", choices: ["Süden","Westen","Norden","Osten"], sol: 2 },
      { q: "Wo geht die Sonne morgens auf?", hint: "Im ... geht die Sonne auf.", choices: ["Norden","Süden","Westen","Osten"], sol: 3 },
      { q: "Was bedeutet die Abkürzung N auf einer Karte?", hint: "", choices: ["Neu","Norden","Normal","Neben"], sol: 1 },
      { q: "Wie nennt man eine verkleinerte Zeichnung der Erdoberfläche von oben?", hint: "", choices: ["Globus","Foto","Landkarte","Gemälde"], sol: 2 },
      { q: "Zeigt ein Kompass immer in die gleiche Richtung?", hint: "Magnetisch nach Norden.", isYesNo: true, sol: 1 },
      { q: "Was ist der 'Maßstab' auf einer Karte?", hint: "Er zeigt an, wie stark verkleinert wurde.", choices: ["Die Farbe der Karte","Das Verhältnis der Karte zur Wirklichkeit (z.B. 1:1000)","Der Name der Karte","Die Länge der Straßen"], sol: 1 },
      { q: "Welche Himmelsrichtung liegt genau gegenüber von Norden?", hint: "Gegenteil von Norden.", choices: ["Osten","Westen","Süden","Nordosten"], sol: 2 },
      { q: "Wo steht die Sonne am Mittag am höchsten?", hint: "Im ... nimmt sie ihren Lauf.", choices: ["Norden","Osten","Süden","Westen"], sol: 2 },
      { q: "Wie lautet der bekannte Merksatz für die Himmelsrichtungen im Uhrzeigersinn?", hint: "N, O, S, W", choices: ["Nie Ohne Seife Waschen","Nur Oben Sind Wolken","Neun Ochsen Suchen Wasser","Nie Ohne Socken Wandern"], sol: 0 },
      { q: "Wo geht die Sonne abends unter?", hint: "Im ... wird sie untergehen.", choices: ["Osten","Süden","Norden","Westen"], sol: 3 },
      { q: "Kann man mit dem Navi (GPS) im Auto den Weg finden?", hint: "Es ersetzt oft die Karte.", isYesNo: true, sol: 1 },
      { q: "Funktioniert ein Kompass mit Magnetismus?", hint: "Die Erde ist wie ein riesiger Magnet.", isYesNo: true, sol: 1 },
      // Bonusfragen
      { q: "Wie viele Haupt- UND Nebenhimmelsrichtungen gibt es zusammen auf der normalen Windrose (N, NO, O, SO, S, SW, W, NW)?", hint: "Zähle sie durch.", choices: ["4","6","8","12"], sol: 2, bonus: true },
      { q: "Wie heißt der Stern am Nachthimmel, der auf der Nordhalbkugel immer ziemlich genau im Norden steht?", hint: "Teil des Kleinen Wagens.", choices: ["Abendstern","Polarstern","Sirius","Sonnenstern"], sol: 1, bonus: true },
      { q: "Welches moderne System im Smartphone hat den Kompass zur Ortung fast vollständig abgelöst?", hint: "Drei Buchstaben.", choices: ["WLAN","Bluetooth","GPS (Satellitennavigation)","Radio"], sol: 2, bonus: true }
    ]
  },

  // ──────────────────────────────────────────────
  // 8. KÖRPER & SINNE
  // ──────────────────────────────────────────────
  koerper: {
    title: "Körper & Sinne",
    icon: "👁️",
    sub: "Augen, Ohren & Co.",
    color: "#d35400",
    questions: [
      { q: "Welches Organ ist für das Sehen (Sehsinn) zuständig?", hint: "", choices: ["Ohr","Nase","Auge","Haut"], sol: 2 },
      { q: "Mit welchem Sinn hörst du Musik?", hint: "", choices: ["Tastsinn","Gehörsinn","Sehsinn","Geruchssinn"], sol: 1 },
      { q: "Wie viele Sinne hat der Mensch klassischerweise?", hint: "Sehen, Hören, Riechen, Schmecken, Fühlen.", choices: ["3","4","5","6"], sol: 2 },
      { q: "Welches Organ nimmt Gerüche wahr?", hint: "Z.B. den Duft von Blumen.", choices: ["Zunge","Ohr","Nase","Auge"], sol: 2 },
      { q: "Schützen Sonnenbrillen die Augen vor zu starker Sonne?", hint: "", isYesNo: true, sol: 1 },
      { q: "Welcher Sinn wird durch extrem laute Musik auf Dauer geschädigt?", hint: "Du brauchst ihn für Gespräche.", choices: ["Sehsinn","Geruchssinn","Gehörsinn","Tastsinn"], sol: 2 },
      { q: "Was macht die Pupille (das Schwarze im Auge) bei Dunkelheit?", hint: "Sie will mehr Licht hereinlassen.", choices: ["Sie wird kleiner","Sie verschwindet","Sie wird größer","Sie dreht sich"], sol: 2 },
      { q: "Was schützt unseren gesamten Körper wie eine Hülle?", hint: "Sie ist überall außen.", choices: ["Die Knochen","Die Muskeln","Die Haut","Das Blut"], sol: 2 },
      { q: "Welches Körperteil pumpt das Blut ununterbrochen durch den Körper?", hint: "Schlägt in der Brust.", choices: ["Lunge","Gehirn","Magen","Herz"], sol: 3 },
      { q: "Mit welchem Sinn merkst du, ob ein Bonbon süß oder sauer ist?", hint: "Mit der Zunge.", choices: ["Geruchssinn","Geschmackssinn","Sehsinn","Tastsinn"], sol: 1 },
      { q: "Atmen wir Sauerstoff ein, um zu leben?", hint: "Ein Teil der Luft.", isYesNo: true, sol: 1 },
      { q: "Wie nennt man alle Knochen im menschlichen Körper zusammen?", hint: "Es gibt eins im Bio-Raum.", choices: ["Muskulatur","Skelett","Gehirn","Verdauung"], sol: 1 },
      // Bonusfragen
      { q: "Wie nennt man den Arzt, der sich speziell um unsere Augen kümmert?", hint: "", choices: ["Zahnarzt","Augenarzt (Ophthalmologe)","Kinderarzt","Orthopäde"], sol: 1, bonus: true },
      { q: "Was ist das Trommelfell?", hint: "Es befindet sich im Ohr und fängt den Schall auf.", choices: ["Ein Musikinstrument","Eine dünne Membran tief im Ohr","Ein Knochen","Ein Nerv"], sol: 1, bonus: true },
      { q: "Welches ist flächenmäßig das größte Organ des menschlichen Körpers?", hint: "Es ist außen.", choices: ["Die Lunge","Die Haut","Der Darm","Das Gehirn"], sol: 1, bonus: true },
      { q: "Ungefähr wie viele Knochen hat das Skelett eines erwachsenen Menschen?", hint: "Mehr als 100.", choices: ["Ca. 50","Ca. 100","Ca. 206","Über 500"], sol: 2, bonus: true },
      { q: "Welcher Teil des Auges gibt ihm seine Farbe (blau, grün oder braun)?", hint: "Rund um die Pupille.", choices: ["Pupille","Netzhaut","Iris (Regenbogenhaut)","Hornhaut"], sol: 2, bonus: true }
    ]
  },

  // ──────────────────────────────────────────────
  // 9. TECHNIK & EINFACHE MASCHINEN
  // ──────────────────────────────────────────────
  technik: {
    title: "Technik & Maschinen",
    icon: "⚙️",
    sub: "Hebel, Bauen & Erfindungen",
    color: "#2c3e50",
    questions: [
      { q: "Was ist ein Hebel?", hint: "Eine einfache Maschine aus der Physik.", choices: ["Ein Seil","Eine Stange, um Lasten leichter zu heben","Ein schnelles Rad","Ein elektrischer Motor"], sol: 1 },
      { q: "Was ist ein gutes Beispiel für einen Hebel im Alltag?", hint: "Man wippt damit oder öffnet Flaschen.", choices: ["Schere / Flaschenöffner / Wippe","Luftballon","Taschenlampe","Spiegel"], sol: 0 },
      { q: "Wozu dient eine schiefe Ebene (Rampe)?", hint: "Rollstuhlfahrer nutzen sie oft.", choices: ["Um schneller zu laufen","Um schwere Dinge leichter nach oben zu rollen/schieben","Zum Drehen von Schrauben","Zum Schneiden"], sol: 1 },
      { q: "Wer hat die elektrische Glühbirne berühmt gemacht und weiterentwickelt?", hint: "Ein bekannter amerikanischer Erfinder.", choices: ["Albert Einstein","Thomas Edison","Konrad Zuse","Nikola Tesla"], sol: 1 },
      { q: "Kann man mit Sonnenlicht elektrischen Strom erzeugen?", hint: "Denk an Solarzellen auf dem Dach.", isYesNo: true, sol: 1 },
      { q: "Was ist beim Bauen oft stabiler: ein leeres Dreieck oder ein leeres Viereck?", hint: "Brücken nutzen oft diese Form (Fachwerk).", choices: ["Dreieck","Viereck","Kreis","Keines"], sol: 0 },
      { q: "Was ist ein Zahnrad?", hint: "Zwei davon greifen ineinander.", choices: ["Ein Rad mit Zähnen am Rand zum Übertragen von Kraft","Ein Rad am Auto","Ein Spielzeug für Hunde","Ein Messwerkzeug für den Arzt"], sol: 0 },
      { q: "Welches Werkzeug benutzt man am besten, um einen Nagel in Holz zu schlagen?", hint: "Poch poch poch!", choices: ["Zange","Schraubenzieher","Säge","Hammer"], sol: 3 },
      { q: "Warum haben Autos und Fahrräder runde Räder?", hint: "Rund ist besser als eckig.", choices: ["Weil sie schöner aussehen","Weil runde Formen am besten rollen","Weil sie dann nicht umfallen","Weil Gummi immer rund ist"], sol: 1 },
      { q: "Womit zieht man auf einer Baustelle ganz schwere Sachen leichter nach oben?", hint: "Viele Seile und Rollen.", choices: ["Mit einem Flaschenzug / Kran","Mit einem Hebel","Mit einer Schere","Mit einem Magneten"], sol: 0 },
      { q: "Was gibt uns Strom in einem kleinen Gerät, das kein Kabel hat (z. B. eine Fernbedienung)?", hint: "Klein und oft rund.", choices: ["Eine Batterie / ein Akku","Ein Motor","Ein Dynamo","Ein Zahnrad"], sol: 0 },
      { q: "Ein Keil hilft beim Holzhacken, indem er das Holz auseinander drückt.", hint: "Er funktioniert wie zwei schiefe Ebenen.", isYesNo: true, sol: 1 },
      // Bonusfragen
      { q: "Wie nennt man eine große Anlage, die Strom aus Wind erzeugt?", hint: "Du siehst sie oft auf Feldern stehen.", choices: ["Solarzelle","Windkraftanlage (Windrad)","Wasserpumpe","Dampfmaschine"], sol: 1, bonus: true },
      { q: "Wer baute das erste richtige Automobil mit einem Verbrennungsmotor?", hint: "Ein deutscher Erfinder.", choices: ["Henry Ford","Carl Benz","Thomas Edison","Die Gebrüder Wright"], sol: 1, bonus: true },
      { q: "Wie nennt man das Rad mit einer Rille am Rand, über das ein Seil läuft (z.B. beim Flaschenzug)?", hint: "Es lenkt das Seil um.", choices: ["Zahnrad","Lenkrad","Umlenkrolle","Schaufelrad"], sol: 2, bonus: true },
      { q: "Welches dieser Materialien leitet elektrischen Strom besonders gut und wird für Kabel genutzt?", hint: "Es ist rötlich-glänzend.", choices: ["Holz","Glas","Kupfer","Plastik"], sol: 2, bonus: true }
    ]
  }

};
