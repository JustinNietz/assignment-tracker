var MOCK_DATA = {
    "User": [
        {
            "id": "1",
            "Username": "", 
            "Password": "iliketrumpet",
            "firstName": "Justin",
            "lastName": 'Nietzer',
            "isAdmin": true,
        },
        {
            "id": "1111111",
            "Username": "trumpet1",
            "Password": "iliketrumpet1",
            "firstName": "Justin",
            "lastName": 'Nietzer',
            "isAdmin": false,
            "grades": ["A", "B", "C", "D"]
        },
        {
            "id": "1111111",
            "Username": "trumpet2",
            "Password": "iliketrumpet2",
            "firstName": "Justin",
            "lastName": 'Nietzer',
            "isAdmin": false,
            "grades": ["A", "B", "C", "D"]
        },
        {
            "id": "1111111",
            "Username": "trumpet3",
            "Password": "iliketrumpet3",
            "firstName": "Justin",
            "lastName": 'Nietzer',
            "isAdmin": false,
            "grades": ["A", "B", "C", "D"]
        }
    ],
    "Assignments": [
        {
            "title": "assignment1",
            "datePosted": "07/25/2018",
            "dateDue": "08/06/2018",
         
        },
        {
            "title": "assignment2",
            "datePosted": "07/25/2018",
            "dateDue": "08/06/2018",
      
        },
        {
            "title": "assignment3",
            "datePosted": "07/25/2018",
            "dateDue": "08/06/2018",
       
        },
        {
            "title": "assignment4",
            "datePosted": "07/25/2018",
            "dateDue": "08/06/2018",
         
        }
    ]
};

function getRecentStatusUpdates(callbackFn) {
    setTimeout(function(){ callbackFn(MOCK_DATA)}, 100);
}

// this function stays the same when we connect
// to real API later
function displayStatusUpdates(data) {
    for (index in data.Assignments) {
       $('body').append(
            '<p>' + data.Assignments[index].title + '</p>');
    }
}

// this function can stay the same even when we
// are connecting to real API
function getAndDisplayStatusUpdates() {
    getRecentStatusUpdates(displayStatusUpdates);
}

$(function() {
    getAndDisplayStatusUpdates();
})