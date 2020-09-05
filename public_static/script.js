$(function(){
    let inpKm = $('#inpKm');
    let inpMin = $('#inpMin');
    let btnCalcfare = $('#btnCalcfare');
    let fareDiv = $('#fare');
    let btnGetrates = $('#btnGetrates');
    let rates = $('#rates');



    btnCalcfare.click(function (){
       
        $.post('/calfare',{
            km: inpKm.val(),
            min: inpMin.val(),
        },function(data){
            console.log("hello")
            console.log(data.fare)
            fareDiv.text(data.fare);
        })
    })


    btnGetrates.click(function(){
        
        $.get('/rate',function(data){
            console.log(data);
            let prettyData = `
            Fixed Fare = Rs. ${data.fixed} for ${data.minKm} KM
            <br>
            Fare(Distance) = Rs. ${data.perKm}/KM
            <br>
            Fare (waiting) = Rs. ${data.perMin}/ min (after ${data.freeMin})
            `
            rates.html(prettyData);
        })
    })
    

})
