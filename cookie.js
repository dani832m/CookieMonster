// Når denne funktion kaldes, bliver der lagret en cookie med navnet "CookieMonster" og værdien "Haps!"
function createCookie() {
    document.cookie = "CookieMonster=Haps!";
    document.getElementById("info").innerHTML = "Cookie blev oprettet!"
}

/* Når denne funktion kaldes, bliver cookien med navnet "CookieMonster" slettet, idet den angivne
udløbsdato er udløbet for mange år siden. Det er måden, hvorpå man sletter en cookie.
Husk dog at angive "path" til, hvor cookien er lagret. */
function deleteCookie() {
    document.cookie = "CookieMonster=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.getElementById("info").innerHTML = "Cookie blev fjernet!"
}