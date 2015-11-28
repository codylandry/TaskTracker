/**
 * Created by codylandry on 11/28/15.
 */

var taskTableHTML = '<table class="table"><col width="10%"><col width="70%"><col width="20%">';
var tasks = [
    {status: false,
     description: "Clean the house",
     due_date: "11-15-2015"},
    {status: false,
     description: "Mow the yard",
     due_date: "11-15-2015"},
    {status: false,
     description: "Take medicine",
     due_date: "11-15-2015"},
    {status: false,
     description: "Cook Dinner",
     due_date: "11-15-2015"}
];



function createTblRow (element, index) {
    return "<tr><td><input id='taskChkBox" + index + "' type='checkbox'></td>" +
                        "<td>" + element.description +"</td>" +
                        "<td>" + element.due_date + "</td></tr>";
}


function buildTaskTable () {
    var taskTableHTML = '<table class="table"><col width="10%"><col width="70%"><col width="20%">';
    tasks.forEach(function(v, i , a) {
        taskTableHTML += createTblRow(v,i,a)});
    taskTableHTML += "<tr>" +
                        "<td>" +
                        "<input type='submit'></td>" +
                        "<td><input type='text'></td>" +
                        "<td><input type='date'></td>" +
                        "</tr></table>";
    $('#task-table').html(taskTableHTML);
}



$(document).ready(function(){

    buildTaskTable();



});