function createCookie() {
    document.cookie = "CookieMonster=Haps!";
    document.getElementById("info").innerHTML = "Cookie blev oprettet!"
}

function deleteCookie() {
    document.cookie = "CookieMonster=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.getElementById("info").innerHTML = "Cookie blev fjernet!"
}