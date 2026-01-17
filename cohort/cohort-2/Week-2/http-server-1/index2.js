const express = require("express")

const app = express();

app.use(express.json())

const users = [{
    name:'kamlesh',
    kidneys:[{
        healthy:false
    }]
}];

app.get('/',function(req,res){
   //
   const johnkidney = users[0].kidneys;
   const numberofkidneys = johnkidney.length;
   let numberofheathykidneys = 0;
   for(let i=0;i<numberofheathykidneys.length;++i){
    if(johnkidney[i].healthy){
        numberofheathykidneys+=1;
    }
   }
   const numberofunheathykidneys = numberofkidneys-numberofheathykidneys;
   res.json({
    numberofkidneys,
    numberofheathykidneys,
    numberofunheathykidneys
   })
})

app.post('/',function(req,res){
    //add kidneys
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"done mfs"
    })
})
app.put('/',function(req,res){
    for(let i=0;i<users[0].kidneys.length;++i){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})
app.delete('/',function(req,res){
    //if no unhealthy kidney
     const newKidneys = [];
     for(let i=0;i<users[0].kidneys.length;++i){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                isHealthy:true
            });
    }
}
    res.json({

    })
})

function ishtereatleastonehealthykidney(){
    
}

app.listen(3000)