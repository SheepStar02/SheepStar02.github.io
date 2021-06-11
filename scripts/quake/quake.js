console.log("test");
console.log(firebase.database().ref());
firebase.database().ref("testing").set({
    name:"naeme",
    tiddies:"tiddies"
});

console.log(firebase.database()); 