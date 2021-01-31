$(document).ready(function() {
    $("#formQuiz").submit(function(event) {
        event.preventDefault();
        const vacation = $("input:radio[name=question1]:checked").val();
        const disney = $("input:radio[name=question2]:checked").val();
        // const cool = $("input:radio[name=question3]:checked").val();
        // const dreamworks = $("input:radio[name=question4]:checked").val();
        // const emoji = $("input:radio[name=question5]:checked").val();
    
        if (vacation === "Greece" && disney === "Cinderella") {
            $("#ruby").show();
            $("#javascript").hide();
            $("#csharp").hide();
        }
            else if (vacation === "Greece" && disney === "Mulan") {
            $("#javascript").show();
            $("#ruby").hide();
            $("#csharp").hide();
        }
            else if (vacation === "France") {
            $("#csharp").show();
            $("#javascript").hide();
            $("#ruby").hide();
        }

    });
});
