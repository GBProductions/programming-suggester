$(document).ready(function() {
    $("#formQuiz").submit(function(event) {
        event.preventDefault();
        let vacation = $("input:radio[name=question1]:checked").val();
        let disney = $("input:radio[name=question2]:checked").val();
        let cool = $("input:radio[name=question3]:checked").val();
        let dreamworks = $("input:radio[name=question4]:checked").val();
        let emoji = $("input:radio[name=question5]:checked").val();
        console.log(vacation, disney, cool, dreamworks, emoji);
    });
});
