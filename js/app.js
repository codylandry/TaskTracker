/**
 * Created by codylandry on 11/28/15.
 */

var taskTableHTML = '<table class="table"><col width="10%"><col width="70%"><col width="20%">';
var tasks = [];


function newTask () {
    if ($('#newTaskDesc').val() == '') {alert('Please Enter a Description.'); return}
    if ($('#newTaskDate').val() == '') {alert('Please Enter a Due Date.'); return}

    tasks.push({status: false,
              description: $('#newTaskDesc').val(),
              due_date: new Date($('#newTaskDate').val())});

    buildTaskTable();

    $('#newTaskDesc').text('');
    $('#newTaskDate').text('');
    $('#newTaskBtn').click(newTask);
    $('#newTaskDate').datepicker();
    $('.taskChkBox').click(function(){
        $(this).parent().siblings().toggleClass('strike-through');
    });

}


function buildTaskTable () {
    var taskTableHTML = '<table class="table"><col width="10%"><col width="70%"><col width="20%">';

    var sorted_tasks = tasks.sort(function(a, b){return new Date(a.due_date) - new Date(b.due_date);});

    sorted_tasks.forEach(function(v, i, a) {
        taskTableHTML += "<tr><td><input class='taskChkBox' data-index=" + i + " id='taskChkBox" + i + "' type='checkbox'></td>" +
                        "<td class='taskDescription'>" + v.description +"</td>" +
                        "<td class='taskDueDate'>" + v.due_date.toDateString() + "</td></tr>";});
    taskTableHTML += "<tr>" +
                        "<td>" +
                        "<input id='newTaskBtn' type='submit'></td>" +
                        "<td><input id='newTaskDesc' type='text'></td>" +
                        "<td><input id='newTaskDate' type='text'></td>" +
                        "</tr></table>";
    $('#task-table').html(taskTableHTML);
}


$(document).ready(function(){

    buildTaskTable();
<<<<<<< HEAD



});
=======
    $('#newTaskDate').datepicker();
    $('.taskChkBox').click(function(){
        $(this).parent().siblings().toggleClass('strike-through');
    });
    $('#newTaskBtn').click(newTask);
});
>>>>>>> refs/remotes/origin/master
