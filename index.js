function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(hello) {
    console.log(hello.toUpperCase());
}
function logWhisper(hello) {
    console.log(hello.toLowerCase());
}
function sayHiToGrandma (aword){
    var cantUnswer = "I can't hear you!";
    var yesUnswer = "YES INDEED!";
    var loveUnswer ="I love you, too."
    if (aword.toLowerCase(aword)===(aword)){
        return cantUnswer;
    }
    else if (aword.toUpperCase(aword)===(aword)){
        return yesUnswer;
    }
    else if ("I love you, Grandma."===(aword)){
        return loveUnswer;
    }

}

