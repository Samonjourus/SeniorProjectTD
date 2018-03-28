var EXPRESS = require("express");
const BODYPARSER = require("body-parser")

var server = EXPRESS();
var currentPower = 400;

server.use(BODYPARSER.json())
server.use(BODYPARSER.urlencoded({extended:true}))

var ChargingStation1={
  PowerDraw:0,
  inuse:false
}
var ChargingStation2={
  PowerDraw:0,
  inuse:false
}
var ChargingStation3={
  PowerDraw:0,
  inuse:false
}
var ChargingStation4={
  PowerDraw:0,
  inuse:false
}
var ChargingStation5={
  PowerDraw:0,
  inuse:false
}
var ChargingStation6={
  PowerDraw:0,
  inuse:false
}

server.get("/", function(req,res){
  res.end(JSON.stringify({"CurrentPower":currentPower,
                          "ChargingStation1":ChargingStation1,
                          "ChargingStation2":ChargingStation2,
                          "ChargingStation3":ChargingStation3,
                          "ChargingStation4":ChargingStation4,
                          "ChargingStation5":ChargingStation5,
                          "ChargingStation6":ChargingStation6,}))
  //console.log("went to root");
})
server.post("/", function(req,res){
  req.body.StationID;
  if (req.body.StationID==1){
    ChargingStation1.PowerDraw=req.body.PowerDraw;
    currentPower = currentPower - req.body.PowerDraw;
    ChargingStation1.inuse=req.body.inuse;
  }
  res.end(JSON.stringify({}))

})

//hosts the server on port 80 and run the function afterwards
server.listen(80, function(){
  console.log("Server started");
})

/*
make sure the server doesnt exceed 3000kWh
is pump in use?
*/
