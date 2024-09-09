var navigation = []
var students = []
var parents = []


function addNavBar() {
    let nav = `<nav>`
    $.each(navigation, function (idx, navName) { 
         nav += `<a href="${navName.urlAddress}">${navName  .name}</a>`
    });
    nav += `</nav>`
    $('#navbar').prepend(nav)
}
function addStudents() {
    let studentHolder = `<div>`
    $.each(students, function (idx, student) { 
        let studentDiv = `<div class="student">`
        studentDiv += `<h3>${student.name}</h3>`
        studentDiv += `<p>${student.email}</p>`
        studentDiv += `<p>${student.phone}</p>`
        studentDiv += `<p>${student.grade}</p>`
        studentDiv += `</div>`
        studentHolder += studentDiv
    });
   studentHolder += `</div>`
    $('.students-holder').append(studentHolder)
}

function addParents() {
    let parentHolder = `<div>`
    $.each(parents, function (idx, parent) { 
        let parentDiv = `<div class="student">`
        parentDiv += `<h3>${parent.name}</h3>`
        parentDiv += `<p>${parent.email}</p>`
        parentDiv += `<p>${parent.phone}</p>`
        parentDiv += `<p>${parent.grade}</p>`
        parentDiv += `</div>`
        parentHolder += parentDiv
    });
   parentHolder += `</div>`
    $('.parents-holder').append(parentHolder)
}
function getData() {
   $.getJSON("data/data.json",
    function (data) {
        navigation = data.Navigation
        students = data.Students
        parents = data.Parents
        addNavBar()
        addStudents()
        addParents()
    }).fail(function (error) {
        console.log(`ERROR ${error.status}: ${error.statusText}`)
    })

}

function initListeners() {
    
}
 
$(document).ready(function () {

getData();
initListeners();
});

