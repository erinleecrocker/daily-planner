$(document).ready(function() {

    var displayDate = moment().format("dddd, MMMM Do YYYY");
    var currentHour = moment().format("h");

    // create planner object
    var timeBlockInfo = [
        {
            value: 0,
            hour: 9,
            time: "9:00",
            userEvent: ""
        },{
            value: 1,
            hour: 10,
            time: "10:00",
            userEvent: ""
        },{
            value: 2,
            hour: 11,
            time: "11:00",
            userEvent: ""
        },{
            value: 3,
            hour: 12,
            time: "12:00", 
            userEvent: ""
        },{
            value: 4,
            hour: 13,
            time: "1:00",
            userEvent: ""
        },{
            value: 5,
            hour: 14,
            time: "2:00",
            userEvent: ""
        },{
            value: 6,
            hour: 15,
            time: "3:00",
            userEvent: ""
        },{
            value: 7,
            hour: 16,
            time: "4:00",
            userEvent: ""
        },{
            value: 8,
            hour: 17,
            time: "5:00",
            userEvent: ""
        }
    ];
    var displayTimeBlocks = function () {
        for (i=0; i<timeBlockInfo.length; i++) {
            // create elements
            var timeBlock = $("<div>");
            var hourEl = $("<p>");
            var userEventEl = $("<textarea>");
            var saveEl = $("<button>");
            var hourColor = timeBlockInfo[i].hour
            //add content
            timeBlock.addClass("row");
            hourEl.addClass("hour col-sm-1");
            userEventEl.addClass("col-sm-10 description", timeBlockInfo[i].value);
            saveEl.addClass("col-sm-1 saveBtn");
            saveEl.attr("data-value", timeBlockInfo[i].value);
            hourEl.text(timeBlockInfo[i].time);
            userEventEl.text(timeBlockInfo[i].userEvent);

            if (hourColor == moment().hour()) {
                userEventEl.addClass("present")
            } else if (hourColor < moment().hour()) {
                userEventEl.addClass("past")
            } else {
                userEventEl.addClass("future")
            }
            // append to existing
            $(".time-block").append(timeBlock);
            timeBlock.append(hourEl);
            timeBlock.append(userEventEl);
            timeBlock.append(saveEl);
            console.log(".saveBtn")
        };
    };
     // format date and set #currentDay w/ current: Day of week, month, day, year
    $("#currentDay").text(displayDate);
   //add event listener click for submit buttons

   var storeTimeBlocks = function(){
    localStorage.setItem("timeBlockInfo",JSON.stringify(timeBlockInfo))
   };

   function init() {
        // Parsing the JSON string to time block object
        var storedTimeBlockInfo = JSON.parse(localStorage.getItem("timeBlockInfo"));
        // If todos were retrieved from localStorage, update the todos array to it
        if (storedTimeBlockInfo !== null) {
        timeBlockInfo = storedTimeBlockInfo;
        }
        // Render time blocks
        displayTimeBlocks();
    };

    init();

  $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        // Write code to grab the text the user types into the input field

        var userInput = ($(this).siblings('.description').val());
        //console.log(userInput);
        i = ($(this).attr("data-value"));
        //console.log(i);
        timeBlockInfo[i].userEvent = userInput

        storeTimeBlocks();
        displayTimeBlocks();
    });
    


})