$(document).ready(function() {

    var displayDate = moment().format("dddd, MMMM Do YYYY");
    var currentHour = moment().format("h");

    // create planner object
    var timeBlockInfo = [
        {
            hour: 9,
            time: "9:00",
            userEvent: (""),
        },
        {
            hour: 10,
            time: "10:00",
            userEvent: (""),
        },
        {
            hour: 11,
            time: "11:00",
            userEvent: (""),
        },
        {
            hour: 12,
            time: "12:00", 
            userEvent: (""),
        },
        {
            hour: 1,
            time: "1:00",
            userEvent: ("")
        },
        {
            hour: 2,
            time: "2:00",
            userEvent: ("")
        },
        {
            hour: 3,
            time: "3:00",
            userEvent: ("")
        },
        {
            hour: 4,
            time: "4:00",
            userEvent: ("")
        },
        {
            hour: 5,
            time: "5:00",
            userEvent: ("")
        }

    ];

    //create time blocks
    var displayTimeBlocks = function () {
        

        for (i=0; i<timeBlockInfo.length; i++) {
            // create elements
            var timeBlock = $("<div>");
            var hourEl = $("<p>");
            var userEventEl = $("<textarea>");
            var saveEl = $("<button>");
            //add content
            timeBlock.addClass("row");
            hourEl.addClass("hour col-sm-1");
            userEventEl.addClass("col-sm-10");
            saveEl.addClass("col-sm-1 saveBtn");
            hourEl.text(timeBlockInfo[i].time);
            userEventEl.text(timeBlockInfo[i].userEvent);
            // append to existing
            $(".time-block").append(timeBlock);
            timeBlock.append(hourEl);
            timeBlock.append(userEventEl);
            timeBlock.append(saveEl);
            
            //console.log(timeBlockInfo[i].hour);
            //console.log(currentHour);
        };
        

    };
    

    // format date and set #currentDay w/ current: Day of week, month, day, year
    $("#currentDay").text(displayDate);

   //add event listener click for submit buttons
   


    displayTimeBlocks(); 



})