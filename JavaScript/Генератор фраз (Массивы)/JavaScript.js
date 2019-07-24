



function phraseGen () {

	var phrase1 = ["Никита", "Саша", "Богдан", "Паша", "Костя", "Роман",];
	var phrase2 = ["Станет миллионером", "Будет сосать хуй", "Сбухается", "Застрелится", "Женится", "Умрет",];
	var phrase3 = ["в 27", "в 30", "раньше всех", "никогда", "в 50", "в 45",];

	var phraserand1 = Math.floor(Math.random() * phrase1.length);
	var phraserand2 = Math.floor(Math.random() * phrase2.length);
	var phraserand3 = Math.floor(Math.random() * phrase3.length);

	var Phrase = phrase1[phraserand1] + ' ' + phrase2[phraserand2] + ' ' + phrase3[phraserand3];

	alert(Phrase);
}

phraseGen ();
