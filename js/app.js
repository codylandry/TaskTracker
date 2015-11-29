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
     due_date: new Date('11/18/2015').toDateString()}
];


function updateTask(index){
    var row = $('[data-index=' + index + ']').parent();
    console.log(row);

    tasks[index] = {
        status: row.children('.taskChkBox').val(),
        description: row.siblings('.taskDescription').text(),
        due_date: row.siblings('.taskDueDate').text()
    };
    console.log(tasks)
}



function buildTaskTable () {
    var taskTableHTML = '<table class="table"><col width="10%"><col width="70%"><col width="20%">';
    tasks.forEach(function(v, i, a) {
        taskTableHTML += "<tr><td><input class='taskChkBox' data-index=" + i + " id='taskChkBox" + i + "' type='checkbox'></td>" +
                        "<td class='taskDescription'>" + v.description +"</td>" +
                        "<td class='taskDueDate'>" + v.due_date + "</td></tr>";});
    taskTableHTML += "<tr>" +
                        "<td>" +
                        "<input type='submit'></td>" +
                        "<td><input type='text'></td>" +
                        "<td><input id='newTaskDate' type='text'></td>" +
                        "</tr></table>";
    $('#task-table').html(taskTableHTML);
}

$(document).ready(function(){

    buildTaskTable();
    $('#newTaskDate').datepicker();
    $('.taskChkBox').click(function(){
        $(this).parent().siblings().toggleClass('strike-through');
        updateTask($(this).attr('data-index'));
    });
});