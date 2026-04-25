'use strict';

// Worttypen: 'noun' | 'verb' | 'modal' | 'adjective' | 'adverb' | 'number' | 'phrase' | 'pronoun' | 'grammar'
// forms (bei Verben): { base, he_she_it, past, neg, neg_he_she_it, note }

const ENG_TOPICS = {

  greeting: {
    title_de: 'Begrüßung',
    title_en: 'Hello & Goodbye',
    icon: '👋',
    sub: 'Hallo, Tschüss & sich vorstellen',
    color: '#7d3c98',
    words: [
      { word_en: 'hello',     word_de: 'Hallo',               type: 'phrase', example: 'Hello! My name is Mia.' },
      { word_en: 'hi',        word_de: 'Hallo (locker)',       type: 'phrase', example: 'Hi! How are you?' },
      { word_en: 'goodbye',   word_de: 'Auf Wiedersehen',      type: 'phrase', example: 'Goodbye! See you tomorrow.' },
      { word_en: 'bye',       word_de: 'Tschüss',              type: 'phrase', example: 'Bye! Have a nice day.' },
      { word_en: 'please',    word_de: 'Bitte',                type: 'phrase', example: 'Can I have a pen, please?' },
      { word_en: 'thank you', word_de: 'Danke',                type: 'phrase', example: 'Thank you for your help.' },
      { word_en: 'sorry',     word_de: 'Entschuldigung',       type: 'phrase', example: 'Sorry, I am late.' },
      { word_en: 'yes',       word_de: 'Ja',                   type: 'phrase', example: 'Yes, I like apples.' },
      { word_en: 'no',        word_de: 'Nein',                 type: 'phrase', example: "No, I don't like fish." },
      { word_en: 'name',      word_de: 'Name',                 type: 'noun',   example: 'My name is Leo.' },
      { word_en: 'friend',    word_de: 'Freund / Freundin',    type: 'noun',   example: 'Anna is my best friend.' },
      { word_en: 'fine',      word_de: 'gut / prima',          type: 'adjective', example: 'I am fine, thank you.' },
    ]
  },

  numbers: {
    title_de: 'Zahlen & Uhrzeit',
    title_en: 'Numbers & Time',
    icon: '🔢',
    sub: 'Zahlen 1–12 und die Uhr lesen',
    color: '#2471a3',
    words: [
      { word_en: 'one',       word_de: 'eins',           type: 'number', example: 'I have one dog.' },
      { word_en: 'two',       word_de: 'zwei',           type: 'number', example: 'I see two cats.' },
      { word_en: 'three',     word_de: 'drei',           type: 'number', example: 'She has three books.' },
      { word_en: 'four',      word_de: 'vier',           type: 'number', example: 'We need four chairs.' },
      { word_en: 'five',      word_de: 'fünf',           type: 'number', example: 'There are five flowers.' },
      { word_en: 'six',       word_de: 'sechs',          type: 'number', example: 'I have six pencils.' },
      { word_en: 'seven',     word_de: 'sieben',         type: 'number', example: 'Seven birds are in the tree.' },
      { word_en: 'eight',     word_de: 'acht',           type: 'number', example: 'I am eight years old.' },
      { word_en: 'nine',      word_de: 'neun',           type: 'number', example: 'She has nine stickers.' },
      { word_en: 'ten',       word_de: 'zehn',           type: 'number', example: 'Count to ten!' },
      { word_en: 'eleven',    word_de: 'elf',            type: 'number', example: 'There are eleven apples.' },
      { word_en: 'twelve',    word_de: 'zwölf',          type: 'number', example: 'Twelve months in a year.' },
      { word_en: "o'clock",   word_de: 'Uhr (genau)',    type: 'phrase', example: "It is three o'clock." },
      { word_en: 'half past', word_de: 'halb (Uhrzeit)', type: 'phrase', example: 'It is half past five.' },
      { word_en: 'time',      word_de: 'Zeit / Uhrzeit', type: 'noun',   example: 'What time is it?' },
    ]
  },

  family: {
    title_de: 'Familie & Freunde',
    title_en: 'Family & Friends',
    icon: '👨‍👩‍👧',
    sub: 'Familienmitglieder benennen',
    color: '#ba4a00',
    words: [
      { word_en: 'mother',  word_de: 'Mutter',            type: 'noun', example: 'My mother is kind.' },
      { word_en: 'mum',     word_de: 'Mama',              type: 'noun', example: 'My mum bakes cakes.' },
      { word_en: 'father',  word_de: 'Vater',             type: 'noun', example: 'My father is tall.' },
      { word_en: 'dad',     word_de: 'Papa',              type: 'noun', example: 'My dad plays football.' },
      { word_en: 'sister',  word_de: 'Schwester',         type: 'noun', example: 'My sister is funny.' },
      { word_en: 'brother', word_de: 'Bruder',            type: 'noun', example: 'My brother likes football.' },
      { word_en: 'grandma', word_de: 'Oma',               type: 'noun', example: 'My grandma bakes cakes.' },
      { word_en: 'grandpa', word_de: 'Opa',               type: 'noun', example: 'My grandpa reads a lot.' },
      { word_en: 'baby',    word_de: 'Baby',              type: 'noun', example: 'The baby is sleeping.' },
      { word_en: 'family',  word_de: 'Familie',           type: 'noun', example: 'I love my family.' },
      { word_en: 'friend',  word_de: 'Freund / Freundin', type: 'noun', example: 'Tom is my best friend.' },
      { word_en: 'pet',     word_de: 'Haustier',          type: 'noun', example: 'My pet is a cat.' },
      {
        word_en: 'love', word_de: 'lieben / sehr mögen', type: 'verb',
        example: 'I love my family.',
        forms: { base: 'love', he_she_it: 'loves', neg: "don't love", neg_he_she_it: "doesn't love" }
      },
      {
        word_en: 'help', word_de: 'helfen', type: 'verb',
        example: 'I help my mum.',
        forms: { base: 'help', he_she_it: 'helps', neg: "don't help", neg_he_she_it: "doesn't help" }
      },
      {
        word_en: 'visit', word_de: 'besuchen', type: 'verb',
        example: 'We visit grandma on Sunday.',
        forms: { base: 'visit', he_she_it: 'visits', past: 'visited' }
      },
    ]
  },

  school: {
    title_de: 'Schule & Klasse',
    title_en: 'School & Classroom',
    icon: '🏫',
    sub: 'Schulmaterial und Klassenzimmer',
    color: '#1e8449',
    words: [
      { word_en: 'school',        word_de: 'Schule',              type: 'noun', example: 'I go to school every day.' },
      { word_en: 'class',         word_de: 'Klasse',              type: 'noun', example: 'My class is very nice.' },
      { word_en: 'teacher',       word_de: 'Lehrerin / Lehrer',   type: 'noun', example: 'The teacher is friendly.' },
      { word_en: 'book',          word_de: 'Buch',                type: 'noun', example: 'My book is on the table.' },
      { word_en: 'exercise book', word_de: 'Heft',                type: 'noun', example: 'My exercise book is new.' },
      { word_en: 'pencil',        word_de: 'Bleistift',           type: 'noun', example: 'The pencil is in my bag.' },
      { word_en: 'pen',           word_de: 'Stift / Kuli',        type: 'noun', example: 'I write with my pen.' },
      { word_en: 'ruler',         word_de: 'Lineal',              type: 'noun', example: 'I use a ruler to draw lines.' },
      { word_en: 'rubber',        word_de: 'Radiergummi',         type: 'noun', example: 'I need a rubber.' },
      { word_en: 'bag',           word_de: 'Schultasche',         type: 'noun', example: 'The school bag is heavy.' },
      { word_en: 'scissors',      word_de: 'Schere',              type: 'noun', example: 'I cut paper with scissors.' },
      { word_en: 'desk',          word_de: 'Schulbank / Tisch',   type: 'noun', example: 'My desk is near the window.' },
      { word_en: 'board',         word_de: 'Tafel',               type: 'noun', example: 'The teacher writes on the board.' },
      { word_en: 'chair',         word_de: 'Stuhl',               type: 'noun', example: 'Sit on your chair, please.' },
      {
        word_en: 'read', word_de: 'lesen', type: 'verb',
        example: 'I read a book every day.',
        forms: { base: 'read', he_she_it: 'reads', past: 'read', note: 'Past: read (gleiche Schreibweise, andere Aussprache!)' }
      },
      {
        word_en: 'write', word_de: 'schreiben', type: 'verb',
        example: 'She writes her name.',
        forms: { base: 'write', he_she_it: 'writes', past: 'wrote' }
      },
      {
        word_en: 'learn', word_de: 'lernen', type: 'verb',
        example: 'We learn English at school.',
        forms: { base: 'learn', he_she_it: 'learns', past: 'learnt' }
      },
      {
        word_en: 'ask', word_de: 'fragen', type: 'verb',
        example: 'I ask the teacher a question.',
        forms: { base: 'ask', he_she_it: 'asks', past: 'asked' }
      },
      {
        word_en: 'answer', word_de: 'antworten', type: 'verb',
        example: 'He answers the question.',
        forms: { base: 'answer', he_she_it: 'answers', past: 'answered' }
      },
    ]
  },

  feelings: {
    title_de: 'Gefühle & Vorlieben',
    title_en: 'Feelings & Likes',
    icon: '😊',
    sub: 'Gefühle ausdrücken, mögen & nicht mögen',
    color: '#cb4335',
    words: [
      { word_en: 'happy',   word_de: 'glücklich / fröhlich', type: 'adjective', example: 'I am happy today.' },
      { word_en: 'sad',     word_de: 'traurig',              type: 'adjective', example: 'She is sad today.' },
      { word_en: 'angry',   word_de: 'wütend',               type: 'adjective', example: 'He is angry about the game.' },
      { word_en: 'tired',   word_de: 'müde',                 type: 'adjective', example: 'We are tired after school.' },
      { word_en: 'hungry',  word_de: 'hungrig',              type: 'adjective', example: 'I am hungry after sport.' },
      { word_en: 'thirsty', word_de: 'durstig',              type: 'adjective', example: 'She is thirsty after running.' },
      { word_en: 'scared',  word_de: 'ängstlich',            type: 'adjective', example: 'I am scared of spiders.' },
      { word_en: 'excited', word_de: 'aufgeregt',            type: 'adjective', example: 'We are excited for the trip.' },
      {
        word_en: 'like', word_de: 'mögen / gefallen', type: 'verb',
        example: 'I like apples and bananas.',
        forms: { base: 'like', he_she_it: 'likes', neg: "don't like", neg_he_she_it: "doesn't like",
          note: "I/you/we/they like · he/she/it likes · Verneinung: don't like / doesn't like" }
      },
      {
        word_en: 'love', word_de: 'lieben / sehr mögen', type: 'verb',
        example: 'I love my family.',
        forms: { base: 'love', he_she_it: 'loves', neg: "don't love", neg_he_she_it: "doesn't love" }
      },
      {
        word_en: "don't like", word_de: 'nicht mögen', type: 'verb',
        example: "I don't like spiders.",
        forms: { base: "don't like", he_she_it: "doesn't like",
          note: "he/she/it → doesn't like (mit -s beim Hilfsverb!)" }
      },
    ]
  },

  freetime: {
    title_de: 'Freizeit & Können',
    title_en: 'Free Time & Can',
    icon: '⚽',
    sub: 'Hobbys und Fähigkeiten mit can',
    color: '#117a65',
    words: [
      {
        word_en: 'play', word_de: 'spielen', type: 'verb',
        example: 'I play football with my friends.',
        forms: { base: 'play', he_she_it: 'plays', past: 'played',
          neg: "don't play", neg_he_she_it: "doesn't play" }
      },
      {
        word_en: 'read', word_de: 'lesen', type: 'verb',
        example: 'I read a book every evening.',
        forms: { base: 'read', he_she_it: 'reads', past: 'read',
          note: 'Past: read (gleiche Schreibweise!)' }
      },
      {
        word_en: 'swim', word_de: 'schwimmen', type: 'verb',
        example: 'I can swim very well.',
        forms: { base: 'swim', he_she_it: 'swims', past: 'swam' }
      },
      {
        word_en: 'dance', word_de: 'tanzen', type: 'verb',
        example: 'She dances to the music.',
        forms: { base: 'dance', he_she_it: 'dances', past: 'danced' }
      },
      {
        word_en: 'sing', word_de: 'singen', type: 'verb',
        example: 'We sing a song together.',
        forms: { base: 'sing', he_she_it: 'sings', past: 'sang' }
      },
      {
        word_en: 'ride', word_de: 'fahren (Rad / Pferd)', type: 'verb',
        example: 'I ride my bike every day.',
        forms: { base: 'ride', he_she_it: 'rides', past: 'rode' }
      },
      {
        word_en: 'draw', word_de: 'zeichnen', type: 'verb',
        example: 'I draw a funny picture.',
        forms: { base: 'draw', he_she_it: 'draws', past: 'drew' }
      },
      { word_en: 'football', word_de: 'Fußball', type: 'noun', example: 'We play football at school.' },
      { word_en: 'music',    word_de: 'Musik',   type: 'noun', example: 'I love music.' },
      { word_en: 'bike',     word_de: 'Fahrrad', type: 'noun', example: 'My bike is blue.' },
      {
        word_en: 'can', word_de: 'kann (Fähigkeit)', type: 'modal',
        example: 'I can swim and dance.',
        forms: { note: "Nach can: immer Infinitiv! He can swim. (NICHT: He cans swim.)\nI/you/he/she/it/we/they can – kein -s!" }
      },
      {
        word_en: "can't", word_de: 'kann nicht', type: 'modal',
        example: "I can't skate yet.",
        forms: { note: "can't = cannot. He can't skate. (kein -s!)\nNegation: can → can't / cannot" }
      },
    ]
  },

  food: {
    title_de: 'Essen & Einkaufen',
    title_en: 'Food & Shopping',
    icon: '🛒',
    sub: 'Lebensmittel und beim Einkaufen',
    color: '#d35400',
    words: [
      { word_en: 'apple',  word_de: 'Apfel',            type: 'noun', example: 'The apple is red and sweet.' },
      { word_en: 'banana', word_de: 'Banane',           type: 'noun', example: 'I eat a banana every day.' },
      { word_en: 'bread',  word_de: 'Brot',             type: 'noun', example: 'I eat bread for breakfast.' },
      { word_en: 'milk',   word_de: 'Milch',            type: 'noun', example: 'I drink a glass of milk.' },
      { word_en: 'egg',    word_de: 'Ei',               type: 'noun', example: 'We need two eggs for the cake.' },
      { word_en: 'water',  word_de: 'Wasser',           type: 'noun', example: 'I drink water every day.' },
      { word_en: 'juice',  word_de: 'Saft',             type: 'noun', example: 'Orange juice is sweet.' },
      { word_en: 'cake',   word_de: 'Kuchen',           type: 'noun', example: 'My mum bakes a yummy cake.' },
      { word_en: 'shop',   word_de: 'Laden / Geschäft', type: 'noun', example: 'We go to the shop.' },
      { word_en: 'money',  word_de: 'Geld',             type: 'noun', example: 'I have some money.' },
      {
        word_en: 'eat', word_de: 'essen', type: 'verb',
        example: 'I eat an apple every day.',
        forms: { base: 'eat', he_she_it: 'eats', past: 'ate',
          neg: "don't eat", neg_he_she_it: "doesn't eat" }
      },
      {
        word_en: 'drink', word_de: 'trinken', type: 'verb',
        example: 'She drinks orange juice.',
        forms: { base: 'drink', he_she_it: 'drinks', past: 'drank',
          neg: "don't drink", neg_he_she_it: "doesn't drink" }
      },
      {
        word_en: 'buy', word_de: 'kaufen', type: 'verb',
        example: 'I buy bread at the shop.',
        forms: { base: 'buy', he_she_it: 'buys', past: 'bought' }
      },
    ]
  },

  birthday: {
    title_de: 'Geburtstag & Feste',
    title_en: 'Birthday & Festivals',
    icon: '🎂',
    sub: 'Geburtstag feiern und Feste',
    color: '#76448a',
    words: [
      { word_en: 'birthday',  word_de: 'Geburtstag',     type: 'noun',  example: 'Today is my birthday!' },
      { word_en: 'party',     word_de: 'Party / Feier',  type: 'noun',  example: 'I have a birthday party on Saturday.' },
      { word_en: 'cake',      word_de: 'Kuchen / Torte', type: 'noun',  example: 'The birthday cake is delicious.' },
      { word_en: 'present',   word_de: 'Geschenk',       type: 'noun',  example: 'I got a great present.' },
      { word_en: 'card',      word_de: 'Karte',          type: 'noun',  example: 'I write a birthday card.' },
      { word_en: 'balloon',   word_de: 'Luftballon',     type: 'noun',  example: 'The balloon is red and round.' },
      { word_en: 'candle',    word_de: 'Kerze',          type: 'noun',  example: 'Blow out the candles!' },
      { word_en: 'Christmas', word_de: 'Weihnachten',    type: 'noun',  example: 'We get presents at Christmas.' },
      { word_en: 'Easter',    word_de: 'Ostern',         type: 'noun',  example: 'We find eggs at Easter.' },
      {
        word_en: 'invite', word_de: 'einladen', type: 'verb',
        example: 'I invite my friends to my party.',
        forms: { base: 'invite', he_she_it: 'invites', past: 'invited' }
      },
      {
        word_en: 'celebrate', word_de: 'feiern', type: 'verb',
        example: 'We celebrate my birthday together.',
        forms: { base: 'celebrate', he_she_it: 'celebrates', past: 'celebrated' }
      },
      {
        word_en: 'get', word_de: 'bekommen / kriegen', type: 'verb',
        example: 'I get a great present.',
        forms: { base: 'get', he_she_it: 'gets', past: 'got' }
      },
    ]
  },

  animals: {
    title_de: 'Tiere',
    title_en: 'Animals',
    icon: '🐾',
    sub: 'Haustiere, Bauernhof & wilde Tiere',
    color: '#1a5276',
    words: [
      { word_en: 'dog',      word_de: 'Hund',             type: 'noun',      example: 'The dog is brown and fluffy.' },
      { word_en: 'cat',      word_de: 'Katze',            type: 'noun',      example: 'The cat sleeps on the sofa.' },
      { word_en: 'bird',     word_de: 'Vogel',            type: 'noun',      example: 'The bird sings every morning.' },
      { word_en: 'fish',     word_de: 'Fisch',            type: 'noun',      example: 'The fish swims in the water.' },
      { word_en: 'horse',    word_de: 'Pferd',            type: 'noun',      example: 'The horse runs very fast.' },
      { word_en: 'cow',      word_de: 'Kuh',              type: 'noun',      example: 'The cow gives us milk.' },
      { word_en: 'pig',      word_de: 'Schwein',          type: 'noun',      example: 'The pig is pink and round.' },
      { word_en: 'rabbit',   word_de: 'Kaninchen / Hase', type: 'noun',      example: 'The rabbit jumps in the garden.' },
      { word_en: 'lion',     word_de: 'Löwe',             type: 'noun',      example: 'The lion is big and strong.' },
      { word_en: 'elephant', word_de: 'Elefant',          type: 'noun',      example: 'The elephant has a long trunk.' },
      { word_en: 'big',      word_de: 'groß',             type: 'adjective', example: 'The elephant is very big.' },
      { word_en: 'small',    word_de: 'klein',            type: 'adjective', example: 'The rabbit is small and cute.' },
      { word_en: 'fast',     word_de: 'schnell',          type: 'adjective', example: 'The horse is very fast.' },
      { word_en: 'slow',     word_de: 'langsam',          type: 'adjective', example: 'The snail is very slow.' },
      {
        word_en: 'run', word_de: 'laufen / rennen', type: 'verb',
        example: 'The horse runs fast.',
        forms: { base: 'run', he_she_it: 'runs', past: 'ran' }
      },
      {
        word_en: 'jump', word_de: 'springen', type: 'verb',
        example: 'The rabbit jumps in the garden.',
        forms: { base: 'jump', he_she_it: 'jumps', past: 'jumped' }
      },
      {
        word_en: 'fly', word_de: 'fliegen', type: 'verb',
        example: 'Birds fly in the sky.',
        forms: { base: 'fly', he_she_it: 'flies', past: 'flew',
          note: 'he/she/it: fly → flies (y wird zu ies)' }
      },
    ]
  },

  songs: {
    title_de: 'Songs & Reime',
    title_en: 'Songs & Rhymes',
    icon: '🎵',
    sub: 'Lieder, Reime und Lernwörter',
    color: '#b03a8c',
    words: [
      { word_en: 'song',   word_de: 'Lied',                 type: 'noun',   example: 'We sing a song in class.' },
      { word_en: 'rhyme',  word_de: 'Reim',                 type: 'noun',   example: 'Cat and hat – that is a rhyme.' },
      { word_en: 'story',  word_de: 'Geschichte',           type: 'noun',   example: 'Tell me a story, please.' },
      { word_en: 'first',  word_de: 'zuerst / erste(r/s)',  type: 'adverb', example: 'First, listen to the song.' },
      { word_en: 'then',   word_de: 'dann / danach',        type: 'adverb', example: 'Then, write the words.' },
      { word_en: 'next',   word_de: 'als nächstes',         type: 'adverb', example: 'Next, read out loud.' },
      {
        word_en: 'listen', word_de: 'zuhören / hören', type: 'verb',
        example: 'Listen carefully!',
        forms: { base: 'listen', he_she_it: 'listens', past: 'listened' }
      },
      {
        word_en: 'look', word_de: 'schauen / gucken', type: 'verb',
        example: 'Look at the picture.',
        forms: { base: 'look', he_she_it: 'looks', past: 'looked' }
      },
      {
        word_en: 'write', word_de: 'schreiben', type: 'verb',
        example: 'Write your name here.',
        forms: { base: 'write', he_she_it: 'writes', past: 'wrote' }
      },
      {
        word_en: 'read', word_de: 'lesen', type: 'verb',
        example: 'Read the sentence out loud.',
        forms: { base: 'read', he_she_it: 'reads', past: 'read',
          note: 'Past: read (gleiche Schreibweise, andere Aussprache!)' }
      },
      {
        word_en: 'sing', word_de: 'singen', type: 'verb',
        example: 'We sing a song in class.',
        forms: { base: 'sing', he_she_it: 'sings', past: 'sang' }
      },
    ]
  },

  grammar: {
    title_de: 'Grammatik',
    title_en: 'Grammar',
    icon: '📖',
    sub: 'to be · have got · Pronomen',
    color: '#2c3e50',
    words: [
      // Personal Pronouns
      { word_en: 'I',    word_de: 'ich',                 type: 'pronoun', example: 'I like cats.' },
      { word_en: 'you',  word_de: 'du / ihr',            type: 'pronoun', example: 'You are great!' },
      { word_en: 'he',   word_de: 'er',                  type: 'pronoun', example: 'He is my brother.' },
      { word_en: 'she',  word_de: 'sie (weiblich)',       type: 'pronoun', example: 'She is my sister.' },
      { word_en: 'it',   word_de: 'es',                  type: 'pronoun', example: 'It is a dog.' },
      { word_en: 'we',   word_de: 'wir',                 type: 'pronoun', example: 'We play football.' },
      { word_en: 'they', word_de: 'sie (Plural)',         type: 'pronoun', example: 'They are my friends.' },
      // to be
      {
        word_en: 'am', word_de: 'bin (ich)', type: 'grammar',
        example: 'I am eight years old.',
        forms: { note: 'to be: I am · you are · he/she/it is · we/they are\nPast: I was · you were · he/she/it was' }
      },
      {
        word_en: 'is', word_de: 'ist (er/sie/es)', type: 'grammar',
        example: 'She is happy.',
        forms: { note: 'he is · she is · it is → immer is!\nPast: he/she/it was' }
      },
      {
        word_en: 'are', word_de: 'bist / seid / sind', type: 'grammar',
        example: 'You are my friend. We are happy.',
        forms: { note: 'you are · we are · they are\nPast: you were · we were · they were' }
      },
      // have got
      {
        word_en: 'have got', word_de: 'habe / hast / haben (Besitz)', type: 'grammar',
        example: 'I have got a dog. Have you got a pet?',
        forms: { note: 'I/you/we/they have got\nhe/she/it has got\nFrage: Have you got ...? / Has she got ...?' }
      },
      {
        word_en: 'has got', word_de: 'hat (er/sie/es, Besitz)', type: 'grammar',
        example: 'She has got a cat.',
        forms: { note: 'Nur für he/she/it: has got\nAlle anderen: have got\nVerneinung: haven\'t got / hasn\'t got' }
      },
    ]
  }

};
