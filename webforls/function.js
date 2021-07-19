document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByTagName('form')[0].onsubmit = function(evt) {
    evt.preventDefault();
    checkWord();
    window.scrollTo(0,150);
    }
    document.getElementById('terminalTextInput').focus();
    var textInputValue = document.getElementById('terminalTextInput').value.trim();
    var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;
    var clearInput = function(){
    document.getElementById('terminalTextInput').value = "";
    }
    var scrollToBottomOfResults = function(){
    var terminalResultsDiv = document.getElementById('terminalReslutsCont');
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    }
    scrollToBottomOfResults();
    var addTextToResults = function(textToAdd){
    document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
    scrollToBottomOfResults();
    }
    
    var postHelpList = function(){
    var helpKeyWords = [
    "- Open + link ( otwiera stronę )",
    "- Google + słowa do wyszukania ( wyszukuje w google ))",
    "- YouTube + słowa do wyszukania ( wyszukuje film / kanał)",
    "- Wiki + słowa do wyszukania ( w serwisie wikipedia )",
    "- 'Time' pokazuje czas systemowy",
    "- 'omnie' pokazuje datę systemową",
    "- 'pwn' pokazuje datę systemową",
    "- 'passwd' komenda służąca do zmienienia hasła użytkownika",
    "- 'whoami' komenda służąca do wyświetlania hasła użytkownika",
    "- 'id' komenda służąca do wyświetlania obecnej nazwy i grupy użytkownika oraz jego numeru (UID i GID)",
    "- 'cd' komenda służąca do zmieny aktualnego katalogu (od 'change directory')",
    "- 'ls' komenda służąca do listowania katalogu",
    "- 'clear' komenda służąca do czyszczenia konsoli",
    "* kilka słów opisujących cię"
    
    ].join('<br>');
    addTextToResults(helpKeyWords);
    }
    var getTimeAndDate = function(postTimeDay){
    var timeAndDate = new Date();
    var timeHours = timeAndDate.getHours();
    var timeMinutes = timeAndDate.getMinutes();
    var dateDay = timeAndDate.getDate();
    console.log(dateDay);
    var dateMonth = timeAndDate.getMonth() + 1;
    var dateYear = timeAndDate.getFullYear();
    if (timeHours < 10){
    timeHours = "0" + timeHours;
    }
    if (timeMinutes < 10){
    timeMinutes = "0" + timeMinutes;
    }
    var currentTime = timeHours + ":" + timeMinutes;
    var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;
    if (postTimeDay == "time"){
    addTextToResults(currentTime);
    }
    if (postTimeDay == "date"){
    addTextToResults(currentDate);
    }
    }
    var openLinkInNewWindow = function(linkToOpen){
    window.open(linkToOpen, '_blank');
    clearInput();
    }
    var textReplies = function() {
    switch(textInputValueLowerCase){
    case "omnie":
    clearInput();
    addTextToResults("Strona autorstwa Adama Prątnickiego");
    break;
    case "logout":
    clearInput();
    addTextToResults("komenda służąca do wylogowania się z terminal");
    break;
    case "passwd":
    clearInput();
    addTextToResults("komenda służąca do zmienienia hasła użytkownika");
    break;
    case "whoami":
    clearInput();
    addTextToResults("komenda służąca do wyświetlania hasła użytkownika");
    break;
    case "id":
    clearInput();
    addTextToResults("komenda służąca do wyświetlania obecnej nazwy i grupy użytkownika oraz jego numeru (UID i GID)");
    break;
    case "finger":
    clearInput();
    addTextToResults("komenda służąca do wypisywania wszystkich użytkowników obecnie zalogowanych na danej maszynie (i ich terminale)");
    break;
    case "cd":
    clearInput();
    addTextToResults("komenda służąca do zmieny aktualnego katalogu (od 'change directory')");
    break;
    case "technikum":
        clearInput();
        addTextToResults("komenda służąca do zmieny aktualnego katalogu (od 'change directory')");
        break;
    case "pwd":
    clearInput();
    addTextToResults("komenda służąca do wypisywania ścieżki do obecnego katalogu (od 'print working directory')");
    break;
    case "ls":
    clearInput();
    addTextToResults("komenda służąca do listowania katalogu");
    break;
    case "ProgrammingWithNiko":
    case "PWN":
    case "programming":
    clearInput();
    addTextToResults('Web development examples!');
    openLinkInNewWindow('https://www.youtube.com/channel/UCjJGyqNHgIOntnY_MDoXVZA?view_as=subscriber');
    break;
    case "czesc":
    case "cześć":
    clearInput();
    addTextToResults("Siemka, jestem twoim wirtualnym asystentem, bazuje na kodzie JS :) ");
    break;
    case "elektronik":
    clearInput();
    addTextToResults("💩");
    break;
    case "youtube":
    case "yt":
    clearInput();
    addTextToResults("Napisz youtube + co chcesz wyszukać");
    case "google":
    clearInput();
    addTextToResults("Napisz google + co chcesz wyszukać");
    break;
    case "wiki":
    case "wikipedia":
    clearInput();
    addTextToResults("Napisz wiki + co chcesz wyszukać");
    break;
    case "time":
    clearInput();
    getTimeAndDate("time");
    break;
    case "date":
    clearInput();
    getTimeAndDate("date");
    break;
    case "***** ***":
    clearInput();
    addTextToResults("Dobre poglądy :)");
    break;
    case "help":
    case "?":
    clearInput();
    postHelpList();
    break;
    case "clear":
    clearInput();
    document.getElementById('terminalReslutsCont').innerHTML='';
    break;
    default:
    clearInput();
    addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " Nie znalazłem :/. Wpisz <b>Help/Pomoc</b>Aby zobaczyć podstwawowe komendy.</i></p>");
    break;
    }
    }
    var checkWord = function() {
    textInputValue = document.getElementById('terminalTextInput').value.trim();
    textInputValueLowerCase = textInputValue.toLowerCase();
    if (textInputValue != ""){
    addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
    if (textInputValueLowerCase.substr(0,5) == "open ") {
    openLinkInNewWindow('http://' + textInputValueLowerCase.substr(5));
    addTextToResults("<i>The URL " + "<b>" + textInputValue.substr(5) + "</b>" + " strona powinna się otworzyć w twojej przeglądarce.</i>");
    } else if (textInputValueLowerCase.substr(0,8) == "youtube ") {
    openLinkInNewWindow('https://www.youtube.com/results?search_query=' + textInputValueLowerCase.substr(8));
    addTextToResults("<i>To wyszukałem dla ciebie w serwisie YouTube" + "<b>" + textInputValue.substr(8) + "</b>" + " strona powinna się otworzyć w twojej przeglądarce.</i>");
    } else if (textInputValueLowerCase.substr(0,7) == "google ") {
    openLinkInNewWindow('https://www.google.com/search?q=' + textInputValueLowerCase.substr(7));
    addTextToResults("<i>To wyszukałem dla ciebie w serwisie Google " + "<b>" + textInputValue.substr(7) + "</b>" + " strona powinna się otworzyć w twojej przeglądarce.</i>");
    } else if (textInputValueLowerCase.substr(0,5) == "wiki "){
    openLinkInNewWindow('https://wikipedia.org/w/index.php?search=' + textInputValueLowerCase.substr(5));
    addTextToResults("<i>To wyszukałem dla ciebie w serwisie wikipedia " + "<b>" + textInputValue.substr(5) + "</b>" + " strona powinna się otworzyć w twojej przeglądarce.</i>");
    } else{
    textReplies();
    }
    }
    };
    });