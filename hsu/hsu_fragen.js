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
      // Bonusfragen
      { q: "Welcher Pilz im Wald ist GIFTIG und hat rote Punkte?", hint: "Vorsicht, nicht anfassen!", choices: ["Champignon","Pfifferling","Fliegenpilz","Steinpilz"], sol: 2, bonus: true },
      { q: "Wie nennt man Tiere, die sich von Pflanzen UND anderen Tieren ernähren?", hint: "Weder reiner Pflanzenfresser noch reiner Fleischfresser.", choices: ["Pflanzenfresser","Fleischfresser","Allesfresser","Insektenfresser"], sol: 2, bonus: true },
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
      // Bonusfragen
      { q: "Wie viel Prozent der Erde sind mit Wasser bedeckt?", hint: "Mehr als die Hälfte!", choices: ["30 %","50 %","71 %","90 %"], sol: 2, bonus: true },
      { q: "Welcher Aggregatzustand hat Wasser als Eis?", hint: "Fest, flüssig oder gasförmig?", choices: ["Flüssig","Gasförmig","Fest","Weich"], sol: 2, bonus: true },
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
      { q: "Kann Feuerwehr auch bei Hochwasser helfen?", hint: "", isYesNo: true, sol: 1 },
      { q: "Was sind die 5 W beim Notruf? Welches W gehört NICHT dazu?", hint: "Wer, Was, Wo, Wie viele … und?", choices: ["Wann","Wetter","Warte auf Rückfragen","Warum"], sol: 1 },
      // Bonusfragen
      { q: "Wie heißt das Fahrzeug der Feuerwehr mit der großen Leiter?", hint: "Für hohe Gebäude.", choices: ["Tanklöschfahrzeug","Drehleiter","Einsatzleitwagen","Rüstwagen"], sol: 1, bonus: true },
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
      { q: "Womit kann man ein kleines Feuer löschen?", hint: "Feuer und … vertragen sich nicht.", choices: ["Öl","Sand oder Wasser","Papier","Benzin"], sol: 1 },
      { q: "Darf man alleine mit Streichhölzern spielen?", hint: "", isYesNo: true, sol: 0 },
      { q: "Welche Farbe hat eine heiße Flamme?", hint: "Je heißer, desto …", choices: ["Rot","Orange","Blau","Grün"], sol: 2 },
      { q: "Was entsteht beim Verbrennen von Holz außer Wärme?", hint: "Du siehst es am Lagerfeuer.", choices: ["Wasser","Stahl","Rauch und Asche","Metall"], sol: 2 },
      { q: "Ist Kohlendioxid zum Löschen von Feuer geeignet?", hint: "Es verdrängt den Sauerstoff.", isYesNo: true, sol: 1 },
      // Bonusfragen
      { q: "Was ist die Zündtemperatur?", hint: "Ab wann fängt etwas Feuer?", choices: ["Die Temperatur, bei der Wasser kocht","Die Temperatur, ab der ein Stoff sich entzündet","Die Temperatur im Feuer","Die Löschtemperatur"], sol: 1, bonus: true },
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
      { q: "Hat jedes Kind das Recht auf Bildung?", hint: "", isYesNo: true, sol: 1 },
      { q: "Was kann man in der Klassenversammlung besprechen?", hint: "Gemeinsam Probleme lösen.", choices: ["Noten","Schulprobleme und Klassenregeln","Hausaufgaben des Lehrers","Nix Wichtiges"], sol: 1 },
      { q: "Wie nennt man die Chefin / den Chef einer Gemeinde?", hint: "In Bayern bekannt.", choices: ["Bundeskanzler","Bürgermeister","Landrat","Pfarrer"], sol: 1 },
      // Bonusfragen
      { q: "Wie heißt das deutsche Parlament?", hint: "Sitzt in Berlin.", choices: ["Bundesrat","Bundestag","Landtag","Stadtrat"], sol: 1, bonus: true },
      { q: "Ab welchem Alter darf man in Deutschland wählen?", hint: "Eine runde Zahl.", choices: ["14","16","18","21"], sol: 2, bonus: true },
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
      { q: "Wo lebte ein Ritter im Mittelalter?", hint: "Ein Gebäude mit Türmen.", choices: ["Im Schloss","In der Burg","Im Dorf","Im Kloster"], sol: 1 },
      { q: "Wie nennt man die Schutzrüstung des Ritters?", hint: "Aus Metall gefertigt.", choices: ["Talar","Rüstung","Tracht","Umhang"], sol: 1 },
      { q: "Was ist ein Knappe?", hint: "Er hilft dem Ritter.", choices: ["Ein kleines Schwert","Ein Lehrling auf dem Weg zum Ritter","Ein Burgwächter","Ein Bauer"], sol: 1 },
      { q: "Wie nennt man das Wasser, das eine Burg umgibt?", hint: "Schutz gegen Feinde.", choices: ["See","Fluss","Burggraben","Teich"], sol: 2 },
      { q: "Wurde ein Ritter schon als Kind ausgebildet?", hint: "", isYesNo: true, sol: 1 },
      { q: "Was ist ein Turnier?", hint: "Ritter kämpfen …", choices: ["Ein Fest mit Tanz","Ein Wettkampf zwischen Rittern","Eine Ratsversammlung","Ein Gottesdienst"], sol: 1 },
      { q: "Womit schossen Bogenschützen auf Burgen?", hint: "Pfeil und …", choices: ["Pfeil und Bogen","Kanone","Steinschleuder","Speer"], sol: 0 },
      // Bonusfragen
      { q: "Wie nennt man den Herrn über ein großes Gebiet mit vielen Burgen?", hint: "Über den Rittern.", choices: ["König","Ritter","Knappe","Burgherr"], sol: 0, bonus: true },
      { q: "Was ist ein Herold?", hint: "Er ruft Botschaften aus.", choices: ["Ein Burgkoch","Ein Bote und Ankündiger","Ein Stallmeister","Ein Burgpriester"], sol: 1, bonus: true },
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
      { q: "Welche Himmelsrichtung zeigt ein Kompass immer an?", hint: "Die erste Himmelsrichtung.", choices: ["Süden","Westen","Norden","Osten"], sol: 2 },
      { q: "Wo geht die Sonne auf?", hint: "Morgens schaust du dorthin.", choices: ["Norden","Süden","Westen","Osten"], sol: 3 },
      { q: "Was bedeutet die Abkürzung N auf einer Karte?", hint: "", choices: ["Neu","Norden","Normal","Neben"], sol: 1 },
      { q: "Wie nennt man eine vereinfachte Zeichnung der Erdoberfläche?", hint: "", choices: ["Globus","Foto","Karte","Gemälde"], sol: 2 },
      { q: "Zeigt ein Kompass immer in die gleiche Richtung?", hint: "", isYesNo: true, sol: 1 },
      { q: "Was ist ein Maßstab auf einer Karte?", hint: "Verhältnis von Karte zur Wirklichkeit.", choices: ["Die Farbe der Karte","Das Verhältnis Karte zu Wirklichkeit","Der Name der Karte","Die Größe des Papiers"], sol: 1 },
      { q: "Welche Himmelsrichtung liegt gegenüber von Norden?", hint: "Gegenteil von Norden.", choices: ["Osten","Westen","Süden","Nordosten"], sol: 2 },
      // Bonusfragen
      { q: "Wie viele Himmelsrichtungen gibt es (Haupt- und Nebenhimmelsrichtungen)?", hint: "Denk auch an Nordost, Südwest usw.", choices: ["4","6","8","12"], sol: 2, bonus: true },
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
      { q: "Welches Organ ist für das Sehen zuständig?", hint: "", choices: ["Ohr","Nase","Auge","Haut"], sol: 2 },
      { q: "Mit welchem Sinn hörst du Musik?", hint: "", choices: ["Tastsinn","Gehörsinn","Sehsinn","Geruchssinn"], sol: 1 },
      { q: "Wie viele Sinne hat der Mensch?", hint: "", choices: ["3","4","5","6"], sol: 2 },
      { q: "Welches Organ nimmt Gerüche wahr?", hint: "", choices: ["Zunge","Ohr","Nase","Auge"], sol: 2 },
      { q: "Schützen Sonnenbrillen die Augen?", hint: "", isYesNo: true, sol: 1 },
      { q: "Welcher Sinn wird durch laute Musik geschädigt?", hint: "", choices: ["Sehsinn","Geruchssinn","Gehörsinn","Tastsinn"], sol: 2 },
      { q: "Was macht die Pupille bei Dunkelheit?", hint: "Sie will mehr Licht reinlassen.", choices: ["Sie wird kleiner","Sie verschwindet","Sie wird größer","Sie dreht sich"], sol: 2 },
      // Bonusfragen
      { q: "Wie nennt man den Arzt für Augen?", hint: "", choices: ["Zahnarzt","Augenarzt","Kinderarzt","Orthopäde"], sol: 1, bonus: true },
      { q: "Was ist das Trommelfell?", hint: "Es befindet sich im Ohr.", choices: ["Ein Musikinstrument","Eine dünne Membran im Ohr","Ein Knochen","Ein Nerv"], sol: 1, bonus: true },
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
      { q: "Was ist ein Hebel?", hint: "Er erleichtert das Heben.", choices: ["Ein Seil","Eine Stange um Lasten zu heben","Ein Rad","Ein Motor"], sol: 1 },
      { q: "Was ist ein Beispiel für einen Hebel im Alltag?", hint: "Du benutzt es zum Trinken von Limo.", choices: ["Schere","Schaukel","Flaschenöffner","Hammer"], sol: 2 },
      { q: "Wozu dient eine schiefe Ebene?", hint: "Rollstuhlfahrer nutzen sie.", choices: ["Zum Springen","Um schwere Dinge leichter hochzuschieben","Zum Drehen","Zum Schneiden"], sol: 1 },
      { q: "Wer hat die Glühbirne erfunden?", hint: "Ein berühmter Erfinder aus Amerika.", choices: ["Albert Einstein","Thomas Edison","Konrad Zuse","Nikola Tesla"], sol: 1 },
      { q: "Kann man mit Sonnenlicht Strom erzeugen?", hint: "Denk an Solarzellen.", isYesNo: true, sol: 1 },
      { q: "Was ist stabiler: ein Dreieck oder ein Viereck?", hint: "Brücken nutzen oft diese Form.", choices: ["Dreieck","Viereck","Beide gleich","Keines"], sol: 0 },
      { q: "Was ist ein Zahnrad?", hint: "Zwei davon greifen ineinander.", choices: ["Ein Rad mit Zähnen zum Übertragen von Kraft","Ein Fahrzeugrad","Ein Spielzeug","Ein Messwerkzeug"], sol: 0 },
      // Bonusfragen
      { q: "Wie nennt man eine Maschine, die Strom aus Wind erzeugt?", hint: "Du siehst sie auf Feldern.", choices: ["Solarzelle","Windrad / Windkraftanlage","Wasserpumpe","Dampfmaschine"], sol: 1, bonus: true },
    ]
  },
  
    // ──────────────────────────────────────────────
    // 10. MEDIEN & WERBUNG
    // ──────────────────────────────────────────────
    medien: {
    title: "Medien & Werbung",
    icon: "📱",
    sub: "Analog, Digital & Werbung",
    color: "#9b59b6",
    questions: [
    // --- TEIL 1: GRUNDLAGEN MEDIEN ---
    { q: "Wobei helfen uns Medien?", hint: "Wir nutzen sie zum Beispiel, um etwas Neues zu erfahren.", choices: ["Essen zu kochen", "Informationen zu bekommen oder weiterzugeben", "Schneller zu rennen", "Besser zu schlafen"], sol: 1 },
    { q: "Was können alles in Medien enthalten sein?", hint: "Schau in deine Aufzeichnungen vom 25.2.", choices: ["Nur Buchstaben", "Nur bunte Farben", "Texte, Bilder, Töne oder Zeichen", "Nur geheime Codes"], sol: 2 },
    { q: "Welche Medien nutzt du laut deinen Notizen vielleicht zu Hause?", hint: "Was gibt es im Kinderzimmer oder Wohnzimmer?", choices: ["Alexa, Tablet, CD, Fernseher", "Mikrowelle, Kühlschrank, Herd", "Fahrrad, Roller, Inliner", "Baum, Strauch, Blume"], sol: 0 },
    { q: "Ist eine Landkarte auch ein Medium?", hint: "Gibt sie dir Informationen weiter?", isYesNo: true, sol: 1 },
    { q: "Was meint man mit dem Wort 'Medienzeit'?", hint: "Es geht um die Uhr...", choices: ["Die Zeit, in der das Tablet geladen wird", "Die Zeit am Tag, die man mit digitalen Medien verbringen darf", "Die Uhrzeit in den Nachrichten", "Die Zeit, in der man schläft"], sol: 1 },

    // --- TEIL 2: ANALOG VS. DIGITAL ---
    { q: "Woraus bestehen analoge Medien oft?", hint: "Denk an ein Buch oder ein Plakat.", choices: ["Aus Plastik und Kabeln", "Aus Strom und Akkus", "Aus Papier oder anderen Materialien", "Aus Glas und Metall"], sol: 2 },
    { q: "Arbeiten analoge Medien mit Computertechnik?", hint: "Braucht ein Plakat einen Computer in sich drin?", isYesNo: true, sol: 0 },
    { q: "Welches dieser Beispiele ist ein analoges Medium?", hint: "Es braucht keinen Strom.", choices: ["Tablet", "Smartphone", "Zeitung", "Laptop"], sol: 2 },
    { q: "Was brauchen digitale Medien IMMER, damit sie funktionieren?", hint: "Ohne das bleibt der Bildschirm schwarz.", choices: ["Internet", "Strom oder einen Akku", "Eine Antenne", "Gutes Wetter"], sol: 1 },
    { q: "Wie verarbeiten digitale Medien ihre Informationen?", hint: "Das Wort klingt nach Technik.", choices: ["Magisch", "Mechanisch", "Elektronisch", "Gar nicht"], sol: 2 },
    { q: "Welches der folgenden Geräte ist ein digitales Medium?", hint: "Es hat einen Akku.", choices: ["Tafel", "Buch", "Smartphone", "Notizblock"], sol: 2 },

    // --- TEIL 3: FARBEN IN DER WERBUNG ---
    { q: "Warum werden in der Werbung oft ganz bestimmte Farben benutzt?", hint: "Was machen Farben mit uns?", choices: ["Weil sie billiger zu drucken sind", "Um Aufmerksamkeit zu wecken und Gefühle auszulösen", "Weil der Drucker kaputt ist", "Um den Text zu verstecken"], sol: 1 },
    { q: "Welche Farbe fällt in der Werbung schnell auf und wirkt 'stark und spannend'?", hint: "Achtung, hier passiert was!", choices: ["Blau", "Grün", "Rot", "Schwarz"], sol: 2 },
    { q: "Welche Farbe wirkt oft 'ruhig und vertrauenswürdig'?", hint: "Denk an einen klaren See oder den weiten Himmel.", choices: ["Rot", "Grün", "Weiß", "Blau"], sol: 3 },
    { q: "Welche Farbe wählt man, wenn eine Werbung an 'Natur und Gesundheit' erinnern soll?", hint: "Denk an Bäume und Wiesen.", choices: ["Gelb", "Rot", "Grün", "Schwarz"], sol: 2 },
    { q: "Wofür steht die Farbe Weiß in der Werbung oft?", hint: "Denk an frisch gewaschene Wäsche.", choices: ["Natur", "Spannung", "Sauberkeit", "Teuer"], sol: 2 },
    { q: "Wie wirkt die Farbe Schwarz oder Dunkelgrau in der Werbung meistens?", hint: "Denk an eine Werbung für Schmuck oder ein schickes Auto.", choices: ["Edel und teuer", "Billig und kaputt", "Gesund und frisch", "Laut und wild"], sol: 0 },

    // --- TEIL 4: BILDER, HELDEN & PERSONEN ---
    { q: "Warum werden oft Bilder in der Werbung verwendet?", hint: "Ein Bild sagt mehr als tausend Worte.", choices: ["Weil Text zu langweilig ist", "Sie zeigen schnell worum es geht und sprechen Gefühle an", "Weil der Platz sonst leer ist", "Damit man nicht lesen muss"], sol: 1 },
    { q: "Was sieht man ganz oft auf Werbebildern?", hint: "Schau in deinen Hefteintrag vom 11.3.", choices: ["Das Produkt, Menschen, Figuren oder Tiere", "Nur leere Straßen", "Nur schwarze Flächen", "Nur Buchstaben"], sol: 0 },
    { q: "Wen zeigen Firmen oft in ihrer Werbung, damit wir das Produkt toll finden?", hint: "Wir bewundern sie oft.", choices: ["Unbekannte Menschen", "Helden, Sportler und Vorbilder", "Leute, die schlafen", "Nur Zeichentrickfiguren"], sol: 1 },
    { q: "Warum nutzen Firmen bekannte Personen für die Werbung?", hint: "Was haben wir für ein Gefühl bei diesen Menschen?", choices: ["Wir kennen sie, finden sie gut und achten mehr auf die Werbung", "Sie arbeiten umsonst", "Sie haben die Firma gegründet", "Sie können gut zeichnen"], sol: 0 },
    { q: "Was ist oft die WIRKUNG auf uns, wenn unser Held in der Werbung auftritt?", hint: "Was wollen wir dann?", choices: ["Wir schalten den Fernseher aus", "Wir wollen auch so sein und das Produkt haben", "Wir vergessen das Produkt sofort", "Wir werden wütend"], sol: 1 },
    { q: "Wird in der Werbung das Leben immer genau so gezeigt, wie es in echt ist?", hint: "In der Werbung sieht immer alles perfekt aus...", isYesNo: true, sol: 0 },
    { q: "Warum wird in der Werbung vieles 'extra gut dargestellt'?", hint: "Was will der Verkäufer erreichen?", choices: ["Damit die Werbung wie ein Märchen ist", "Damit wir das Produkt unbedingt kaufen wollen", "Weil sie lügen wollen", "Damit der Film länger dauert"], sol: 1 },

    // --- TEIL 5: BAUSTEINE EINES PLAKATS ---
    { q: "Was ist das Hauptziel von einem Werbeplakat?", hint: "Was sollen die Leute am Ende tun?", choices: ["Dass die Menschen das Plakat abreißen", "Dass das beworbene Produkt im Einkaufswagen landet", "Dass die Straße schöner aussieht", "Dass die Leute stehen bleiben und lesen lernen"], sol: 1 },
    { q: "Was ist ein 'Logo' auf einem Werbeplakat?", hint: "Man verbindet es sofort mit einer bestimmten Firma.", choices: ["Ein langer Text über die Firma", "Der Preis des Produkts", "Ein Zeichen aus Bildern oder Symbolen für eine Firma", "Das Ablaufdatum"], sol: 2 },
    { q: "Was ist ein 'Slogan'?", hint: "Haribo macht Kinder froh...", choices: ["Ein kurzer, einprägsamer Spruch zum Werben", "Der Erfinder des Produkts", "Die Zutatenliste", "Das Bild in der Mitte"], sol: 0 },
    { q: "Welcher Begriff passt zu Wörtern wie 'Lecker', 'Fruchtig' oder 'Gesund' auf einem Plakat?", hint: "Wie ist etwas?", choices: ["Wichtige Informationen", "Passende Adjektive (Wiewörter)", "Logo", "Slogan"], sol: 1 },
    { q: "Was ist das 'Produktbild' auf einem Plakat?", hint: "Das, worum es geht.", choices: ["Ein Bild von den Chefs", "Eine Abbildung von dem, was verkauft wird", "Ein Bild vom Supermarkt", "Ein Bild von der Plakatfarbe"], sol: 1 },
    { q: "Wie nennt man die große Überschrift ganz oben auf dem Plakat?", hint: "Kopfzeile oder...", choices: ["Logo", "Slogan", "Headline", "Adjektiv"], sol: 2 },

    // --- TEIL 6: WERBETRICKS & WAHRHEIT (KETCHUP-BEISPIEL) ---
    { q: "Stimmen die Aussagen auf Werbeplakaten immer mit der Wahrheit überein?", hint: "Erinnere dich an den Tomatig-Ketchup.", isYesNo: true, sol: 0 },
    { q: "Warum steht auf einem ungesunden Ketchup 'gesund & lecker' oder 'viele Vitamine'?", hint: "Was soll das bei den Käufern auslösen?", choices: ["Weil der Chef das selbst glaubt", "Damit Mamas und Papas denken es sei gesund und es kaufen", "Weil es das Gesetz so vorschreibt", "Damit Kinder nicht weinen"], sol: 1 },
    { q: "Woran kann man am besten erkennen, ob ein Lebensmittel wirklich gesund ist?", hint: "Wo steht die Wahrheit?", choices: ["Am schönen Produktbild", "Am lustigen Slogan", "An der Zutatenliste", "An der Headline"], sol: 2 },
    { q: "Wenn in den Zutaten von Ketchup 'Tomatenmark, Zucker, Essig, Salz' steht, ist es dann sehr gesund?", hint: "Ein bestimmter Stoff macht es ungesund.", choices: ["Ja, wegen dem Tomatenmark", "Nein, weil viel Zucker und Salz drin ist", "Ja, wegen dem Essig", "Nein, weil keine Tomaten drin sind"], sol: 1 },
    
    // --- TEIL 7: NOCH MEHR DETAILS ZU DEN ARBEITSBLÄTTERN ---
    { q: "Auf dem Limo-Plakat steht ganz unten klein: 'Nur für kurze Zeit...'. Welcher Baustein ist das?", hint: "Es ist kein Slogan und keine Überschrift.", choices: ["Logo", "Wichtige Informationen zum Produkt", "Headline", "Produktbild"], sol: 1 },
    { q: "Was gehört zu den 'bildlichen Gestaltungselementen' auf dem Power-Limo Plakat?", hint: "Es ist nicht das Produkt selbst, sondern das drumherum.", choices: ["Die aufgeschnittenen Zitronen und Orangen", "Die große Überschrift", "Die Zutatenliste", "Das Logo"], sol: 0 },
    { q: "Ein Logo besteht häufig aus...", hint: "Schau auf den Text beim Limo-Plakat links.", choices: ["Langen Sätzen", "Bildern, Symbolen oder kurzen Wörtern", "Zutaten", "Vielen bunten Farben"], sol: 1 },
    { q: "Mit welchen Argumenten wirbt das Tomatig-Ketchup auf dem Plakat?", hint: "Was hast du auf die erste Linie geschrieben?", choices: ["Scharf und würzig", "Billig und in einer großen Flasche", "Mit besonders vielen Vitaminen, gesund & lecker", "Garantiert zuckerfrei"], sol: 2 },
    { q: "Marie hat aufgeschrieben, warum der Ketchup in Wirklichkeit NICHT gesund ist. Warum?", hint: "Schau dir die Zutaten an.", choices: ["Weil Tomaten ungesund sind", "Weil er abgelaufen ist", "Weil Tomatenmark, Zucker, Essig und Salz drin sind", "Weil er schlecht schmeckt"], sol: 2 },
    { q: "Was genau wollen die Ketchup-Verkäufer mit dem Wort 'gesund' bei den Eltern erreichen?", hint: "Das hast du ganz unten auf dein Arbeitsblatt geschrieben!", choices: ["Dass Mamas und Papas denken es ist gesund und es für die Kinder kaufen", "Dass die Eltern den Ketchup selbst essen", "Dass die Eltern den Ketchup wegwerfen", "Dass sie sich beschweren"], sol: 0 },
    
    // --- TEIL 8: TRANSFER- & BONUSFRAGEN (SCHWIERIGER) ---
    { q: "Welches der folgenden Dinge ist KEIN Medium zur Informationsweitergabe?", hint: "Ein Medium überträgt Text, Bild oder Ton.", choices: ["Ein Radio", "Ein Buch", "Ein Apfel", "Ein Verkehrsschild"], sol: 2, bonus: true },
    { q: "Eine Werbung für eine leckere Bio-Limonade. Welche Farbe wird im Hintergrund wahrscheinlich viel zu sehen sein?", hint: "Es geht um Natur und Gesundheit.", choices: ["Schwarz", "Rot", "Grün", "Weiß"], sol: 2, bonus: true },
    { q: "In der Waschmittel-Werbung tragen die Menschen fast immer Kleidung in welcher Farbe?", hint: "Es soll extrem sauber wirken.", choices: ["Bunt gemischt", "Weiß", "Dunkelbraun", "Rot"], sol: 1, bonus: true },
    { q: "Eine Werbung für ein ganz neues, extrem teures Auto. Welche Farben passen laut deinen Notizen am besten?", hint: "Es soll edel und teuer wirken.", choices: ["Schwarz oder dunkle, edle Farben", "Knalliges Grün", "Nur Weiß", "Viele bunte Punkte"], sol: 0, bonus: true },
    { q: "Ein Plakat an der Bushaltestelle leuchtet im Dunkeln, weil eine Lampe darauf strahlt. Ist das Plakat dadurch ein 'digitales Medium'?", hint: "Verarbeitet das Plakat selbst Informationen mit Computertechnik?", choices: ["Ja, weil es leuchtet", "Nein, es bleibt ein analoges Medium aus Papier", "Ja, weil es Strom braucht", "Nein, es ist gar kein Medium mehr"], sol: 1, bonus: true },
    { q: "Warum ist es wichtig, dass Eltern eine 'Medienzeit' mit ihren Kindern absprechen?", hint: "Gibt es noch andere wichtige Dinge am Tag?", choices: ["Damit der Akku nicht kaputt geht", "Weil Strom so teuer ist", "Damit man genug Zeit für andere Dinge wie Spielen, Freunde und Hausaufgaben hat", "Damit das Internet nicht leer wird"], sol: 2, bonus: true },
    { q: "Wenn ein berühmter Fußballer Werbung für Gummibärchen macht: Machen ihn die Gummibärchen wirklich zu einem guten Sportler?", hint: "Denk an den Satz: 'In der Werbung wird vieles extra gut dargestellt'.", choices: ["Ja, deshalb ist er so gut", "Nein, das ist nur Werbung, damit wir sie kaufen", "Ja, in Gummibärchen ist viel Kraft", "Nein, er isst sie gar nicht"], sol: 1, bonus: true },
    { q: "Warum sollte ein Slogan 'einzigartig sein und sich leicht einprägen lassen'?", hint: "Was passiert, wenn du im Supermarkt stehst?", choices: ["Damit du den Spruch singst und dich an das Produkt erinnerst", "Weil lange Sätze zu teuer zu drucken sind", "Damit Lehrer es in der Schule abfragen", "Damit die Konkurrenz ihn klaut"], sol: 0, bonus: true },
    { q: "Eine Werbung zeigt eine Limo, die aus echten Früchten tropft (bildliche Gestaltungselemente). Welches Gefühl soll das wecken?", hint: "Frisch, frischer...", choices: ["Das Gefühl von künstlichem Zucker", "Das Gefühl von Natur und großer Frische", "Das Gefühl von Wärme", "Das Gefühl von billigem Wasser"], sol: 1, bonus: true },
    { q: "Stell dir vor, du erfindest einen Schokoriegel. Welcher Slogan wäre laut Arbeitsblatt am besten?", hint: "Kurz, einprägsam, einzigartig.", choices: ["Dieser Riegel hat Schokolade, Nüsse und Karamel.", "Schoko-Kracher: Knuspert lauter als du denkst!", "Er kostet 1 Euro.", "Ein Schokoriegel von mir gemacht."], sol: 1, bonus: true },
    { q: "Werbung nutzt Tricks, damit Menschen Produkte kaufen, die sie vielleicht gar nicht brauchen. Stimmt das?", hint: "Ist das der Sinn von Werbung?", isYesNo: true, sol: 1, bonus: true }
    ]
    },

};
