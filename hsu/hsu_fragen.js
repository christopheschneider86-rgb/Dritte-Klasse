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

};
