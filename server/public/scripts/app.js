$(document).ready(function(){
    $.ajax({
        type : "GET",
        url  : "/kittyFooFoo",
        success : function(data) {
            appendDom(data);
        }
    });
});

function appendDom(data) {

}