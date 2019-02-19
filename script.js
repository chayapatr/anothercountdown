(function () {
  console.log("start")

  var config = {
    apiKey: "AIzaSyDXUZqWzbXuLeGfmjl8ywe66Bh7LlBsG9Y",
    authDomain: "fbtest-85b73.firebaseapp.com",
    databaseURL: "https://fbtest-85b73.firebaseio.com",
    projectId: "fbtest-85b73",
    storageBucket: "fbtest-85b73.appspot.com",
  };
  firebase.initializeApp(config);
  let database = firebase.database()
  domObject = document.getElementById('object')
  let ref = database.ref().child('time')
  ref.on('value', snap => {
    for(i=0; i<100; i++) window.clearInterval(i);
    setInterval(() => {
      let text = ''
      Object.values(snap.val()).forEach(el => {
        text = text + `${el.name}: <br/>${updateTime(el.time)} <br /><hr />`
      })
      domObject.innerHTML = text
    },1000)
  })
})()

let updateTime = el => {
  let countdown = Math.floor((el - Date.now()) / 1000);
  let day = Math.floor(countdown / 86400);
  let hour = Math.floor((countdown % 86400) / 3600);
  let minute = Math.floor((countdown % 3600) / 60);
  let sec = (countdown % 3600) % 60;
  return `${day}d ${hour}h ${minute}m ${sec}s`;
}

let database = firebase.database()

let countdown = class {
  constructor(name, time) {
    this.name = name
    this.time = time
  }
  formattime() {
    let dateOutput = new Date(this.time)
    return dateOutput
  }
  log() {
    return `update name: ${this.name}, time: ${formattime()}`
  }
}