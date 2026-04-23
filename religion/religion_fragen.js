const RELIGION_TOPICS = {
  jakobesau: {
    title: "Jakob & Esau",
    icon: "🍲",
    sub: "Brüder, Segen & Flucht",
    color: "#e67e22",
    questions: [
      // TEIL 1: DIE ZWILLINGE
      { q: "Wer waren die Eltern der Zwillinge Jakob und Esau?", hint: "Schau auf die Überschrift bei deinen gezeichneten Köpfen.", choices: ["Abraham und Sara", "Isaak und Rebekka", "Josef und Maria", "Adam und Eva"], sol: 1 },
      { q: "Wer von den beiden Zwillingen war der Ältere?", hint: "Er hatte rote, raue Haare.", choices: ["Jakob", "Esau", "Beide waren exakt gleich alt", "Laban"], sol: 1 },
      { q: "Wie sah Esau aus und was machte er gerne?", hint: "Erinnere dich an deine Zeichnung mit dem großen Bart.", imgEmoji: "🧔", imgLabel: "Esau – der Jäger mit dem Bart", choices: ["Er hatte zarte Haut und blieb lieber zu Hause", "Er war stark behaart, hatte Sommersprossen und ging auf die Jagd", "Er war blond und hütete Schafe", "Er war klein und trug eine Brille"], sol: 1 },
      { q: "Welche Eigenschaften passen zu Jakob (dem Fersenhalter)?", hint: "Was hat er in der Hand auf deinem Bild?", imgEmoji: "🧑", imgLabel: "Jakob – das Mamakind", choices: ["Er geht jagen und ist ein Papa-Kind", "Er ist der Jüngere, hat zarte Haut, hütet Schafe und ist ein Mama-Kind", "Er ist sehr stark und baut Häuser", "Er reitet auf Pferden"], sol: 1 },
      { q: "Wer war das Lieblingskind von Papa Isaak?", hint: "Isaak mochte das wilde Leben und die Jagd.", choices: ["Jakob", "Esau", "Beide gleich", "Gar keins"], sol: 1 },
      // TEIL 2: LINSENGERICHT & ERSTGEBURTSRECHT
      { q: "Was kaufte Jakob seinem hungrigen Bruder Esau ab?", hint: "Esau kam erschöpft von der Jagd.", choices: ["Seinen Bogen", "Sein Erstgeburtsrecht", "Seine Schafe", "Sein Zelt"], sol: 1 },
      { q: "Womit bezahlte Jakob das Erstgeburtsrecht?", hint: "Ein leckeres, rotes Essen aus dem Topf.", imgEmoji: "🍲", imgLabel: "Der rote Linsentopf", choices: ["Mit einem Linsengericht", "Mit Goldmünzen", "Mit einem gebratenen Tier", "Mit einem neuen Bogen"], sol: 0 },
      { q: "Warum war das Erstgeburtsrecht damals so wichtig?", hint: "Was bekam der Erstgeborene vom Vater?", choices: ["Er durfte länger schlafen", "Er bekam den besonderen Segen und wurde der Chef der Familie", "Er durfte sich das Essen aussuchen", "Er musste nicht mehr arbeiten"], sol: 1 },
      // TEIL 3: DER GESTOHLENE SEGEN
      { q: "Isaak war alt und blind geworden. Was wollte er tun?", hint: "Er schickte Esau auf die Jagd.", choices: ["Er wollte umziehen", "Er wollte Esau den Segen des Vaters geben", "Er wollte ein neues Zelt bauen", "Er wollte Jakob bestrafen"], sol: 1 },
      { q: "Wer half Jakob dabei, den Vater Isaak auszutricksen?", hint: "Wer wollte, dass Jakob das 'Mamakind' den Segen bekommt?", choices: ["Sein Onkel Laban", "Seine Mutter Rebekka", "Esau selbst", "Ein Engel"], sol: 1 },
      { q: "Wie verkleidete sich Jakob, damit sein blinder Vater Isaak dachte, er sei Esau?", hint: "Esau war ja sehr behaart.", choices: ["Er zog Esaus Kleider an und wickelte sich Felle um die Arme", "Er malte sich das Gesicht an", "Er verstellte nur seine Stimme", "Er klebte sich Wolle ins Gesicht"], sol: 0 },
      { q: "Konnte Isaak den Segen wieder zurücknehmen, als Esau von der Jagd kam?", hint: "Ein Segen vor Gott ist bindend.", choices: ["Ja, er segnete einfach beide gleich", "Nein, was geschehen ist, ist geschehen", "Ja, er schimpfte Jakob und nahm ihn zurück", "Er vergaß den Segen einfach"], sol: 1 },
      { q: "Wie fühlte sich Esau nach dem Betrug?", hint: "Schau auf dein Bild mit dem wilden Gekritzel.", imgEmoji: "😡", imgLabel: "Esaus wilde Wut", choices: ["Er war fröhlich", "Er war extrem wütend auf Jakob und wollte ihn bestrafen", "Es war ihm völlig egal", "Er umarmte Jakob"], sol: 1 },
      // TEIL 4: FLUCHT & HIMMELSLEITER
      { q: "Wohin musste Jakob fliehen, weil Esau so wütend war und ihn bedrohte?", hint: "Zu wem ging er?", choices: ["Nach Ägypten", "Zu seinem Onkel Laban", "In die Wüste", "Ans Meer"], sol: 1 },
      { q: "Was träumte Jakob auf seiner Flucht in der Nacht, als er einen Stein als Kissen hatte?", hint: "Erinnere dich an dein tolles Bastel-Bild.", imgEmoji: "✨", imgLabel: "Die Himmelsleiter im Traum", choices: ["Von einem großen Festessen", "Von einer Himmelsleiter, auf der Engel auf- und niederstiegen", "Von einem goldenen Schloss", "Von einem wilden Tier"], sol: 1 },
      { q: "Was versprach Gott dem Jakob im Traum an der Himmelsleiter?", hint: "Die Sprechblasen auf deinem Bild sagen es dir.", choices: ["Ich behüte dich und du wirst in dieses Land zurückkommen", "Du musst für immer wegbleiben", "Du wirst sehr reich werden", "Esau wird dich finden"], sol: 0 },
      { q: "Welche tröstlichen Worte hörte Jakob von Gott im Traum?", hint: "Die erste Sprechblase auf deinem Bastel-Bild.", imgEmoji: "👼", imgLabel: "Der Engel mit Sprechblasen", choices: ["Ich bin wütend auf dich!", "Ich bin bei dir!", "Geh nach Hause!", "Du bist allein."], sol: 1 },
      // TEIL 5: BEI LABAN & NOMADENLEBEN
      { q: "Wie viele Jahre musste Jakob für seinen Onkel Laban arbeiten, um Rahel heiraten zu dürfen?", hint: "Eine verflixte Zahl, und dann musste er nochmal so lange arbeiten!", choices: ["2 Jahre", "7 Jahre (und dann nochmal 7 Jahre)", "10 Jahre", "20 Jahre"], sol: 1 },
      { q: "Warum arbeitete Jakob am Ende insgesamt 14 Jahre für eine Frau?", hint: "Sein Onkel Laban war listig und gab ihm zuerst die Schwester.", choices: ["Weil er langsam arbeitete", "Weil Laban ihn betrog und ihm zuerst die 'falsche' Frau (Lea) gab", "Weil er so viel Geld brauchte", "Weil Rahel noch zu jung war"], sol: 1 },
      { q: "Welche Frau bekam Jakob in der Hochzeitsnacht statt Rahel – weil Laban sie heimlich schickte?", hint: "Sie war die ältere Schwester von Rahel.", choices: ["Lea", "Rahel", "Rebekka", "Sara"], sol: 0 },
      { q: "Nach 20 Jahren brach Jakob heimlich auf. Was passierte, als Laban ihn einholte?", hint: "Schau auf dein Bild mit den zusammengeklebten Steinen.", imgEmoji: "🪨", imgLabel: "Der Steinhaufen des Friedens", choices: ["Sie kämpften mit Schwertern", "Sie schlossen Frieden, bauten einen Steinhaufen und gingen getrennte Wege", "Laban nahm Rahel wieder mit", "Jakob musste wieder zurück zu Laban"], sol: 1 },
      { q: "Jakob, Esau und ihre Familien lebten als 'Nomaden'. In was für Behausungen lebten Nomaden damals?", hint: "Ein Gebäude, das man schnell auf- und abbauen kann.", choices: ["In festen Steinhäusern", "In großen Burgen", "In Zelten", "In Höhlen"], sol: 2 },
      { q: "Warum ließen sich Nomaden damals meistens an Flüssen oder Quellen nieder?", hint: "Was war dort in der Wüstenlandschaft so wichtig?", choices: ["Weil es dort schönen Sand gab", "Weil es dort Wasser für sie und ihre Tiere gab", "Weil sie gerne schwammen", "Weil es dort Bäume gab"], sol: 1 },
      { q: "Wie nannte man die große Familie, in der Nomaden wie Jakobs Familie lebten?", hint: "Ein Wort mit S.", choices: ["Sippe", "Bande", "Truppe", "Klasse"], sol: 0 }
    ]
  }
};
