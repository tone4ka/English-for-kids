const cardsArr = [
  [
    "Main Page",
    "Action (set A)",
    "Action (set B)",
    "Animal (set A)",
    "Animal (set B)",
    "Colors",
    "Emotions",
    "Adjective",
    "Profession",
  ],
  [
    {
      word: "Action (set A)",
      image: "./assets/cards/img/dive.jpg",
    },
    {
      word: "Action (set B)",
      image: "./assets/cards/img/play.jpg",
    },
    {
      word: "Animal (set A)",
      image: "./assets/cards/img/dog.jpg",
    },
    {
      word: "Animal (set B)",
      image: "./assets/cards/img/lion.jpg",
    },
    {
      word: "Colors",
      image: "./assets/cards/img/yellow.jpg",
    },
    {
      word: "Emotions",
      image: "./assets/cards/img/happy.jpg",
    },
    {
      word: "Adjective",
      image: "./assets/cards/img/slow.jpg",
    },
    {
      word: "Profession",
      image: "./assets/cards/img/cook.jpg",
    },
  ],
  [
    {
      word: "cry",
      translation: "плакать",
      image: "./assets/cards/img/cry.jpg",
      audioSrc: "audio/cry.mp3",
    },
    {
      word: "dance",
      translation: "танцевать",
      image: "./assets/cards/img/dance.jpg",
      audioSrc: "audio/dance.mp3",
    },
    {
      word: "dive",
      translation: "нырять",
      image: "./assets/cards/img/dive.jpg",
      audioSrc: "audio/dive.mp3",
    },
    {
      word: "draw",
      translation: "рисовать",
      image: "./assets/cards/img/draw.jpg",
      audioSrc: "audio/draw.mp3",
    },
    {
      word: "fish",
      translation: "ловить рыбу",
      image: "./assets/cards/img/fish.jpg",
      audioSrc: "audio/fish.mp3",
    },
    {
      word: "fly",
      translation: "летать",
      image: "./assets/cards/img/fly.jpg",
      audioSrc: "audio/fly.mp3",
    },
    {
      word: "hug",
      translation: "обнимать",
      image: "./assets/cards/img/hug.jpg",
      audioSrc: "audio/hug.mp3",
    },
    {
      word: "jump",
      translation: "прыгать",
      image: "./assets/cards/img/jump.jpg",
      audioSrc: "audio/jump.mp3",
    },
  ],
  [
    {
      word: "open",
      translation: "открывать",
      image: "./assets/cards/img/open.jpg",
      audioSrc: "audio/open.mp3",
    },
    {
      word: "play",
      translation: "играть",
      image: "./assets/cards/img/play.jpg",
      audioSrc: "audio/play.mp3",
    },
    {
      word: "point",
      translation: "указывать",
      image: "./assets/cards/img/point.jpg",
      audioSrc: "audio/point.mp3",
    },
    {
      word: "ride",
      translation: "ездить",
      image: "./assets/cards/img/ride.jpg",
      audioSrc: "audio/ride.mp3",
    },
    {
      word: "run",
      translation: "бегать",
      image: "./assets/cards/img/run.jpg",
      audioSrc: "audio/run.mp3",
    },
    {
      word: "sing",
      translation: "петь",
      image: "./assets/cards/img/sing.jpg",
      audioSrc: "audio/sing.mp3",
    },
    {
      word: "skip",
      translation: "прыгать",
      image: "./assets/cards/img/skip.jpg",
      audioSrc: "audio/skip.mp3",
    },
    {
      word: "swim",
      translation: "плавать",
      image: "./assets/cards/img/swim.jpg",
      audioSrc: "audio/swim.mp3",
    },
  ],
  [
    {
      word: "cat",
      translation: "кот",
      image: "./assets/cards/img/cat.jpg",
      audioSrc: "audio/cat.mp3",
    },
    {
      word: "chick",
      translation: "цыплёнок",
      image: "./assets/cards/img/chick.jpg",
      audioSrc: "audio/chick.mp3",
    },
    {
      word: "chicken",
      translation: "курица",
      image: "./assets/cards/img/chicken.jpg",
      audioSrc: "audio/chicken.mp3",
    },
    {
      word: "dog",
      translation: "собака",
      image: "./assets/cards/img/dog.jpg",
      audioSrc: "audio/dog.mp3",
    },
    {
      word: "horse",
      translation: "лошадь",
      image: "./assets/cards/img/horse.jpg",
      audioSrc: "audio/horse.mp3",
    },
    {
      word: "pig",
      translation: "свинья",
      image: "./assets/cards/img/pig.jpg",
      audioSrc: "audio/pig.mp3",
    },
    {
      word: "rabbit",
      translation: "кролик",
      image: "./assets/cards/img/rabbit.jpg",
      audioSrc: "audio/rabbit.mp3",
    },
    {
      word: "sheep",
      translation: "овца",
      image: "./assets/cards/img/sheep.jpg",
      audioSrc: "audio/sheep.mp3",
    },
  ],
  [
    {
      word: "bird",
      translation: "птица",
      image: "./assets/cards/img/bird.jpg",
      audioSrc: "audio/bird.mp3",
    },
    {
      word: "fish",
      translation: "рыба",
      image: "./assets/cards/img/fish1.jpg",
      audioSrc: "audio/fish.mp3",
    },
    {
      word: "frog",
      translation: "жаба",
      image: "./assets/cards/img/frog.jpg",
      audioSrc: "audio/frog.mp3",
    },
    {
      word: "giraffe",
      translation: "жираф",
      image: "./assets/cards/img/giraffe.jpg",
      audioSrc: "audio/giraffe.mp3",
    },
    {
      word: "lion",
      translation: "лев",
      image: "./assets/cards/img/lion.jpg",
      audioSrc: "audio/lion.mp3",
    },
    {
      word: "mouse",
      translation: "мышь",
      image: "./assets/cards/img/mouse.jpg",
      audioSrc: "audio/mouse.mp3",
    },
    {
      word: "turtle",
      translation: "черепаха",
      image: "./assets/cards/img/turtle.jpg",
      audioSrc: "audio/turtle.mp3",
    },
    {
      word: "dolphin",
      translation: "дельфин",
      image: "./assets/cards/img/dolphin.jpg",
      audioSrc: "audio/dolphin.mp3",
    },
  ],
  [
    {
      word: "black",
      translation: "черный",
      image: "./assets/cards/img/black.jpg",
      audioSrc: "audio/black.mp3",
    },
    {
      word: "blue",
      translation: "синий",
      image: "./assets/cards/img/blue.jpg",
      audioSrc: "audio/blue.mp3",
    },
    {
      word: "brown",
      translation: "коричневый",
      image: "./assets/cards/img/brown.jpg",
      audioSrc: "audio/brown.mp3",
    },
    {
      word: "green",
      translation: "зеленый",
      image: "./assets/cards/img/green.jpg",
      audioSrc: "audio/green.mp3",
    },
    {
      word: "orange",
      translation: "оранжевый",
      image: "./assets/cards/img/orange.jpg",
      audioSrc: "audio/orange.mp3",
    },
    {
      word: "pink",
      translation: "розовый",
      image: "./assets/cards/img/pink.jpg",
      audioSrc: "audio/pink.mp3",
    },
    {
      word: "red",
      translation: "красный",
      image: "./assets/cards/img/red.jpg",
      audioSrc: "audio/red.mp3",
    },
    {
      word: "yellow",
      translation: "желтый",
      image: "./assets/cards/img/yellow.jpg",
      audioSrc: "audio/yellow.mp3",
    },
  ],
  [
    {
      word: "sad",
      translation: "грустный",
      image: "./assets/cards/img/sad.jpg",
      audioSrc: "audio/sad.mp3",
    },
    {
      word: "angry",
      translation: "сердитый",
      image: "./assets/cards/img/angry.jpg",
      audioSrc: "audio/angry.mp3",
    },
    {
      word: "happy",
      translation: "счастливый",
      image: "./assets/cards/img/happy.jpg",
      audioSrc: "audio/happy.mp3",
    },
    {
      word: "tired",
      translation: "уставший",
      image: "./assets/cards/img/tired.jpg",
      audioSrc: "audio/tired.mp3",
    },
    {
      word: "surprised",
      translation: "удивлённый",
      image: "./assets/cards/img/surprised.jpg",
      audioSrc: "audio/surprised.mp3",
    },
    {
      word: "scared",
      translation: "испуганный",
      image: "./assets/cards/img/scared.jpg",
      audioSrc: "audio/scared.mp3",
    },
    {
      word: "smile",
      translation: "улыбка",
      image: "./assets/cards/img/smile.jpg",
      audioSrc: "audio/smile.mp3",
    },
    {
      word: "laugh",
      translation: "смех",
      image: "./assets/cards/img/laugh.jpg",
      audioSrc: "audio/laugh.mp3",
    },
  ],
  [
    {
      word: "big",
      translation: "большой",
      image: "./assets/cards/img/big.jpg",
      audioSrc: "audio/big.mp3",
    },
    {
      word: "small",
      translation: "маленький",
      image: "./assets/cards/img/small.jpg",
      audioSrc: "audio/small.mp3",
    },
    {
      word: "fast",
      translation: "быстрый",
      image: "./assets/cards/img/fast.jpg",
      audioSrc: "audio/fast.mp3",
    },
    {
      word: "slow",
      translation: "медленный",
      image: "./assets/cards/img/slow.jpg",
      audioSrc: "audio/slow.mp3",
    },
    {
      word: "friendly",
      translation: "дружелюбный",
      image: "./assets/cards/img/friendly.jpg",
      audioSrc: "audio/friendly.mp3",
    },
    {
      word: "unfriendly",
      translation: "недружелюбный",
      image: "./assets/cards/img/unfriendly.jpg",
      audioSrc: "audio/unfriendly.mp3",
    },
    {
      word: "young",
      translation: "молодой",
      image: "./assets/cards/img/young.jpg",
      audioSrc: "audio/young.mp3",
    },
    {
      word: "old",
      translation: "старый",
      image: "./assets/cards/img/old.jpg",
      audioSrc: "audio/old.mp3",
    },
  ],
  [
    {
      word: "artist",
      translation: "художник",
      image: "./assets/cards/img/artist.jpg",
      audioSrc: "audio/artist.mp3",
    },
    {
      word: "programmer",
      translation: "программист",
      image: "./assets/cards/img/programmer.jpg",
      audioSrc: "audio/programmer.mp3",
    },
    {
      word: "doctor",
      translation: "врач",
      image: "./assets/cards/img/doctor.jpg",
      audioSrc: "audio/doctor.mp3",
    },
    {
      word: "builder",
      translation: "строитель",
      image: "./assets/cards/img/builder.jpg",
      audioSrc: "audio/builder.mp3",
    },
    {
      word: "engineer",
      translation: "инженер",
      image: "./assets/cards/img/engineer.jpg",
      audioSrc: "audio/engineer.mp3",
    },
    {
      word: "archaeologist",
      translation: "археолог",
      image: "./assets/cards/img/archaeologist.jpg",
      audioSrc: "audio/archaeologist.mp3",
    },
    {
      word: "cook",
      translation: "повар",
      image: "./assets/cards/img/cook.jpg",
      audioSrc: "audio/cook.mp3",
    },
    {
      word: "teacher",
      translation: "учитель",
      image: "./assets/cards/img/teacher.jpg",
      audioSrc: "audio/teacher.mp3",
    },
  ],
  [
    {
      image: "./assets/cards/img/home.png",
    },
    {
      image: "./assets/cards/img/dance.png",
    },
    {
      image: "./assets/cards/img/bicycle.png",
    },
    {
      image: "./assets/cards/img/lion.png",
    },
    {
      image: "./assets/cards/img/fox.png",
    },
    {
      image: "./assets/cards/img/rainbow.png",
    },
    {
      image: "./assets/cards/img/emotion.png",
    },
    {
      image: "./assets/cards/img/star.png",
    },
    {
      image: "./assets/cards/img/businessman.png",
    },
  ],
];

export default cardsArr;
