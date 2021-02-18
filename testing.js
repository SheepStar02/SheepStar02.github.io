const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.get("code") !== null){

    console.log(urlParams.get("code"));
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        }
    };
    xhttp.open("GET", "https://id.twitch.tv/oauth2/token?client_id=pb2sm0c9905ajy8fcmjfo0m7sqacpw&?client_secret=7vncvriwsn8x7ut8m2jnmd54mumsls?code=" + urlParams.get("code") + "&grant_type=authorization_code&redirect_uri=http://localhost:8080/tournaments", true);
    //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}



//https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=jwk4v6qrymwe3odjf
//13oaif4&force_verify=true&redirect_uri=https%3A%2F%2Fapi.nightbot.tv%2Fauth%2Ftwitch%2Fcallback&scope=user_read%20channel_editor%20
//channel_commercial%20channel_subscriptions%20user%3Aedit%3Abroadcast%20user%3Aread%3Aemail%20bits%3Aread%20clips%3Aedit&state=a8c1e1b0f4f06e44d804b209cff686d3

//https://id.twitch.tv/oauth2/token?client_id=pb2sm0c9905ajy8fcmjfo0m7sqacpw&?client_secret=7vncvriwsn8x7ut8m2jnmd54mumsls?code=&grant_type=authorization_code&redirect_uri=http://localhost:8080/tournaments