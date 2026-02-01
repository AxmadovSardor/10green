const tengreen = {
    "monday": ["Kelajak soati - 104",
        "Computer Science - 104 / Physics - 201 / Biology - 202",
        "Computer Science - 104 / Physics - 201 / Biology - 202",
        "Math - 102",
        "English - 109",
        "Military Preperation - 207 <Economics>",
        "Physical Education - Sports Hall",
        "Computer Science - 102 / Physics - 201 / Biology - 202 (204)"
    ],
    "tuesday": [
        "Math - 101",
        "History - 106",
        "Chemistry - 203 / Economics - Conference room / Computer Science - 104",
        "Chemistry - 203 / Economics - 106 / Computer Science - 104",
        "Chemistry - 203 / Economics - 106 / Computer Science - 104",
        "Math - 101",
        "Russian - 108 <Biology>",

    ],
    "wednesday": [
        "Chemistry - 203 / Economics - 106 / Computer Science - 104",
        "Chemistry - 203 / Economics - 106 / Computer Science - 104",
        "Math - 109",
        "Military Preperation - 207 <Biology>",
        "History - 105",
        "History - 105",
        "Math - 109",
        "English - 105"
    ],
    "thursday":[
        "Chemistry - 203 / Economics - 106 / Computer Science - 104",
        "Chemistry - 203 / Economics - 106 / Computer Science - 104",
        "Computer Science - 102 / Physics - 201 / Biology - 202",
        "Computer Science - 102 / Physics - 201 / Biology - 202",
        "Global Perspective - 109",
        "English - 106",
        "Computer Science - 104",
        "Economics - Confirence room"
    ],
    "friday":[
        "Computer Science - 104 / Physics - 201 / Biology - 202",
        "Computer Science - 104 / Physics - 201 / Biology - 202",
        "Native Language - 204",
        "Cultural Education - 204",
        "Math - 102",
        "English - 106",
        "Russian - 108"
    ]
}
function timer(day, params) {
    let atmoment = new Date();
    let current = `${atmoment.getHours()}, ${atmoment.getMinutes()}`;
    let weekday = atmoment.getDay();
    let currentLesson = (par)=>{
        if (par == weekday) {
            switch (current) {
                case current >= 830:
                    return `you are in 1st lesson ${params[0]}.`;
                case current >= 920:
                    return `you are in 2nd lesson ${params[1]}.`;
                case current >= 1010:
                    return `you are in 3rd lesson ${params[2]}.`;
                case current >= 1115:
                    return `you are in 4th lesson ${params[3]}.`;
                case current >= 1205:
                    return `you are in 5th lesson ${params[4]}.`;
                case current >= 1250:
                    return "you are in the lunch. Have a nice meal!";
                case current >= 1345:
                    return `you are in 6th lesson ${params[5]}.`;
                case current >= 1430:
                    return `you are in 7th lesson ${params[6]}.`;
                case current >= 1520:
                    return `you are in 8th lesson ${params[7]}.`;
                default:
                    return "you are free.";
            }
        }else if(weekday == 0){
            return "It's weekend! You are free. But, remember that you should be at school at 18:00!";
        }else if(weekday == 6){
            return "It's weekend! You are free. Enjoy your Saturday!";
        }
    }

    let organized =`
    Time table for ${numtochar(day)}: \n
    08:30 - 09:15 : ${params[0] || "Free"}\n
    09:20 - 10:05 : ${params[1] || "Free"}\n
    10:10 - 10:55 : ${params[2] || "Free"}\n
    11:15 - 12:00 : ${params[3] || "Free"}\n
    12:05 - 12:50 : ${params[4] || "Free"}\n
    13:45 - 14:30 : ${params[5] || "Free"}\n
    14:30 - 15:15 : ${params[6] || "Free"}\n
    15:20 - 16:10 : ${params[7] || "Free"}\n
    \n
    At the moment ${currentLesson(day)}.
    `
    return organized;
}

function numtochar(params) {
    switch (params) {
        case 1:
            return "monday";
        case 2:
            return "tuesday";
        case 3:
            return "wednesday";
        case 4:
            return "thursday";
        case 5:
            return "friday";
        default:
            return "unknown";
    }
}


function fulltime() {
    console.log(tengreen)
    let full = "Full time table: \n\n";
    full += `Time table for Monday: \n
    08:30 - 09:15 : ${tengreen.monday[0] || "Free"}\n
    09:20 - 10:05 : ${tengreen.monday[1] || "Free"}\n
    10:10 - 10:55 : ${tengreen.monday[2] || "Free"}\n
    11:15 - 12:00 : ${tengreen.monday[3] || "Free"}\n
    12:05 - 12:50 : ${tengreen.monday[4] || "Free"}\n
    13:45 - 14:30 : ${tengreen.monday[5] || "Free"}\n
    14:30 - 15:15 : ${tengreen.monday[6] || "Free"}\n
    15:20 - 16:10 : ${tengreen.monday[7] || "Free"}\n
    \n`;
    full += `Time table for Tuesday: \n
    08:30 - 09:15 : ${tengreen.tuesday[0] || "Free"}\n
    09:20 - 10:05 : ${tengreen.tuesday[1] || "Free"}\n
    10:10 - 10:55 : ${tengreen.tuesday[2] || "Free"}\n
    11:15 - 12:00 : ${tengreen.tuesday[3] || "Free"}\n
    12:05 - 12:50 : ${tengreen.tuesday[4] || "Free"}\n
    13:45 - 14:30 : ${tengreen.tuesday[5] || "Free"}\n
    14:30 - 15:15 : ${tengreen.tuesday[6] || "Free"}\n
    15:20 - 16:10 : ${tengreen.tuesday[7] || "Free"}\n
    \n`;
    full += `Time table for Wednesday: \n
    08:30 - 09:15 : ${tengreen.wednesday[0] || "Free"}\n
    09:20 - 10:05 : ${tengreen.wednesday[1] || "Free"}\n
    10:10 - 10:55 : ${tengreen.wednesday[2] || "Free"}\n
    11:15 - 12:00 : ${tengreen.wednesday[3] || "Free"}\n
    12:05 - 12:50 : ${tengreen.wednesday[4] || "Free"}\n
    13:45 - 14:30 : ${tengreen.wednesday[5] || "Free"}\n
    14:30 - 15:15 : ${tengreen.wednesday[6] || "Free"}\n
    15:20 - 16:10 : ${tengreen.wednesday[7] || "Free"}\n
    \n`;
            full += `Time table for Thursday: \n
    08:30 - 09:15 : ${tengreen.thursday[0] || "Free"}\n
    09:20 - 10:05 : ${tengreen.thursday[1] || "Free"}\n
    10:10 - 10:55 : ${tengreen.thursday[2] || "Free"}\n
    11:15 - 12:00 : ${tengreen.thursday[3] || "Free"}\n
    12:05 - 12:50 : ${tengreen.thursday[4] || "Free"}\n
    13:45 - 14:30 : ${tengreen.thursday[5] || "Free"}\n
    14:30 - 15:15 : ${tengreen.thursday[6] || "Free"}\n
    15:20 - 16:10 : ${tengreen.thursday[7] || "Free"}\n
    \n`;
    full += `Time table for Friday: \n
    08:30 - 09:15 : ${tengreen.friday[0] || "Free"}\n
    09:20 - 10:05 : ${tengreen.friday[1] || "Free"}\n
    10:10 - 10:55 : ${tengreen.friday[2] || "Free"}\n
    11:15 - 12:00 : ${tengreen.friday[3] || "Free"}\n
    12:05 - 12:50 : ${tengreen.friday[4] || "Free"}\n
    13:45 - 14:30 : ${tengreen.friday[5] || "Free"}\n
    14:30 - 15:15 : ${tengreen.friday[6] || "Free"}\n
    15:20 - 16:10 : ${tengreen.friday[7] || "Free"}\n
    \n`;
    return full;
}

function organizer(day) {
    switch (day) {
        case "monday":
            return timer(1, tengreen.monday);
        case "tuesday":
            return timer(2, tengreen.tuesday);
        case "wednesday":
            return timer(3, tengreen.wednesday);
        case "thursday":
            return timer(4, tengreen.thursday);
        case "friday":
            return timer(5, tengreen.friday);
        case "all":
            return fulltime();
        default:
            return "Unknown day";
    }
}

module.exports = {organizer};