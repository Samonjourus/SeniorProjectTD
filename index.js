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
    if(req.body.PowerDraw > 0)
      currentPower = currentPower - req.body.PowerDraw;
    else
      currentPower = currentPower + ChargingStation1.PowerDraw;
    ChargingStation1.PowerDraw=req.body.PowerDraw;
    ChargingStation1.inuse=req.body.inuse;
  }
  if(req.body.StationID==2){
    if(req.body.PowerDraw > 0)
      currentPower = currentPower - req.body.PowerDraw;
    else
      currentPower = currentPower + ChargingStation2.PowerDraw;
    ChargingStation2.PowerDraw=req.body.PowerDraw;
    ChargingStation2.inuse=req.body.inuse;
  }
  if(req.body.StationID==3){
    if(req.body.PowerDraw > 0)
      currentPower = currentPower - req.body.PowerDraw;
    else
      currentPower = currentPower + ChargingStation3.PowerDraw;
    ChargingStation3.PowerDraw=req.body.PowerDraw;
    ChargingStation3.inuse=req.body.inuse;
  }
  if(req.body.StationID==4){
    if(req.body.PowerDraw > 0)
      currentPower = currentPower - req.body.PowerDraw;
    else
      currentPower = currentPower + ChargingStation4.PowerDraw;
    ChargingStation4.PowerDraw=req.body.PowerDraw;
    ChargingStation4.inuse=req.body.inuse;
  }
  if(req.body.StationID==5){
    if(req.body.PowerDraw > 0)
      currentPower = currentPower - req.body.PowerDraw;
    else
      currentPower = currentPower + ChargingStation5.PowerDraw;
    ChargingStation5.PowerDraw=req.body.PowerDraw;
    ChargingStation5.inuse=req.body.inuse;
  }
  if(req.body.StationID==6){
    if(req.body.PowerDraw > 0)
      currentPower = currentPower - req.body.PowerDraw;
    else
      currentPower = currentPower + ChargingStation6.PowerDraw;
    ChargingStation6.PowerDraw=req.body.PowerDraw;
    ChargingStation6.inuse=req.body.inuse;
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
