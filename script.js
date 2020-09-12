$(document).ready(function() {

    var userInput = $(".userEventInput")
    var saveInput = $(".saveBtn")
    var hourOfDay = $(".hour")  
    var displayDate = moment().format("dddd, MMMM Do YYYY")
    
    


    $("#currentDay").text(displayDate);

    console.log(moment().format("hA"));



})