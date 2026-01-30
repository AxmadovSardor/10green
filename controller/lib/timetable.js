const tengreen = {
    monday: ["Kelajak soati - 104",
        "Computer Science - 104 / Physics - 201 / Biology - 202",
        "Computer Science - 104 / Physics - 201 / Biology - 202",
        "Math - 102",
        "English - 109",
        "Military Preperation - 207 <Economics>",
        "Physical Education - Sports Hall",
        "Computer Science - 102 / Physics - 201 / Biology - 202 (204)"
    ],
    tuesday: [
        "Math - 101",
        "History - 106",
        "Chemistry - 203 / Economics - Conference room / Computer Science - 104",
        "Chemistry - 203 / Economics - 106 / Computer Science - 104",
        "Chemistry - 203 / Economics - 106 / Computer Science - 104",
        "Math - 101",
        "Russian - 108 <Biology>",

    ],
    wednesday: [
        "Chemistry - 203 / Economics - 106 / Computer Science - 104",
        "Chemistry - 203 / Economics - 106 / Computer Science - 104",
        "Math - 109",
        "Military Preperation - 207 <Biology>",
        "History - 105",
        "History - 105",
        "Math - 109",
        "English - 105"
    ],
    thursday:[
        "Chemistry - 203 / Economics - 106 / Computer Science - 104",
        "Chemistry - 203 / Economics - 106 / Computer Science - 104",
        "Computer Science - 102 / Physics - 201 / Biology - 202",
        "Computer Science - 102 / Physics - 201 / Biology - 202",
        "Global Perspective - 109",
        "English - 106",
        "Computer Science - 104",
        "Economics - Confirence room"
    ],
    friday:[
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
    let current = +atmoment.getHours() + atmoment.getMinutes();
    let weekday = atmoment.getDay();
    let currentLesson = (par)=>{
        if (weekday == nowaday) {
            switch (current) {
                case value:
                    
                    break;
            
                default:
                    break;
            }
        }
    }
    let organized =`
    Time table for ${day.charAt(0).toUpperCase() + day.slice(1)}: \n
    08:30 - 09:15 : ${params[0] || "Free"}\n
    09:20 - 10:05 : ${params[1] || "Free"}\n
    10:10 - 10:55 : ${params[2] || "Free"}\n
    11:15 - 12:00 : ${params[3] || "Free"}\n
    12:05 - 12:50 : ${params[4] || "Free"}\n
    13:45 - 14:30 : ${params[5] || "Free"}\n
    14:30 - 15:15 : ${params[6] || "Free"}\n
    15:20 - 16:10 : ${params[7] || "Free"}\n
    \n
    ${currentLesson(day, )}
    `
    return organized;
}

function organizer(day) {
    switch (day) {
        case "monday":
            return timer("monday", tengreen.monday);
        case "tuesday":
            return timer("tuesday", tengreen.tuesday);
        case "wednesday":
            return timer("wednesday", tengreen.wednesday);
        case "thursday":
            return timer("thursday", tengreen.thursday);
        case "friday":
            return timer("friday", tengreen.friday);
        case "":
            return tengreen;
        default:
            return "Unknown day";
    }
}

module.exports = {organizer};