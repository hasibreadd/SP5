let ulTasks = $('#ulTasks')
let inpNewTask = $('#inpNewTask')
let btnAdd = $('#btnAdd')
let btnCleanUp = $('#btnCleanup')
let btnSort = $('#btnSort')
let btnReset = $('#btnReset')

function addItem(){
    let listItem = $('<li>',{
        'class' : 'list-group-item',
        text : inpNewTask.val() 
    })
    listItem.click(function(){
        listItem.toggleClass('done')
    })
   ulTasks.append(listItem);
   inpNewTask.val('')
   enableInputBtns()
}

inpNewTask.keypress(function(e){
    if(e.which == 13)
        addItem()
})

function clearDone(){
    $('#ulTasks .done').remove()
    enableInputBtns()
}
function sortTasks(){
    $('#ulTasks .done').appendTo(ulTasks)
}

function enableInputBtns(){
    btnAdd.prop('disabled', inpNewTask.val() == '')
    btnReset.prop('disabled', inpNewTask.val() == '')
    btnSort.prop('disabled', ulTasks.children().length < 2)
    btnCleanUp.prop('disabled', ulTasks.children().length == 0)
}

inpNewTask.on('input',enableInputBtns)

btnAdd.click(addItem)
btnReset.click(function(){
    inpNewTask.val('')
    enableInputBtns()
})
btnCleanUp.click(clearDone)
btnSort.click(sortTasks)
