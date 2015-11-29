/**
 * Created by codylandry on 11/28/15.
 */

var taskTableHTML = '<table class="table"><col width="10%"><col width="70%"><col width="20%">';
var tasks = [];

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

function setupEventHandlers(){
    $('#newTaskDate').datepicker();
    $('.taskChkBox').click(function(){
        $(this).parent().siblings().toggleClass('strike-through');
    });
    $('#newTaskBtn').click(newTask);

}

function newTask () {
    if ($('#newTaskDesc').val() == '') {alert('Please Enter a Description.'); return}
    if ($('#newTaskDate').val() == '') {alert('Please Enter a Due Date.'); return}

    // Todo: fix status value.  needs to reflect value of unchecked input checkbox not 'false'
    tasks.push({status: false,
              description: $('#newTaskDesc').val(),
              due_date: new Date($('#newTaskDate').val())});

    buildTaskTable();

    $('#newTaskDesc').text('');
    $('#newTaskDate').text('');

}

function taskFilter(days){
    var today = new Date();
    var nextWeek = new Date();
    nextWeek.addDays(parseInt(days));
    buildTaskTable(today, nextWeek);
}



function buildTaskTable (start, end, incompleteOnly) {
    start = start || 0;
    end = end || 0;
    incompleteOnly = incompleteOnly || false;
    console.log(tasks);

    var taskTableHTML = '<table class="table"><col width="10%"><col width="70%"><col width="20%">';

    var sorted_tasks = tasks.filter(function (v, i, a) {
        if (incompleteOnly && v.status == true) {
            return false
        }
        if (start == 0 || end == 0) {
            return true
        }
        return start <= v.due_date && v.due_date <= end
    }).sort(function (a, b) {
        return new Date(a.due_date) - new Date(b.due_date);
    });

    sorted_tasks.forEach(function (v, i, a) {
        taskTableHTML += "<tr><td><input class='taskChkBox' data-index=" + i + " id='taskChkBox" + i + "' type='checkbox'></td>" +
            "<td class='taskDescription'>" + v.description + "</td>" +
            "<td class='taskDueDate'>" + v.due_date.toDateString() + "</td></tr>";
    });
    taskTableHTML += "<tr>" +
        "<td>" +
        "<input id='newTaskBtn' type='submit'></td>" +
        "<td><input id='newTaskDesc' type='text'></td>" +
        "<td><input id='newTaskDate' type='text'></td>" +
        "</tr></table>";
    $('#task-table').html(taskTableHTML);
    setupEventHandlers();
}


$(document).ready(function(){

    buildTaskTable();
    setupEventHandlers();
    $('#showAllBtn').click(function(){buildTaskTable()});
    $('#showIncompleteBtn').click(function(){taskFilter(1)});
    $('#todayBtn').click(function(){taskFilter(1)});
    $('#thisWeekBtn').click(function(){taskFilter(7)});
    $('#thisMonthBtn').click(function(){taskFilter(30)});
});