$(document).ready(function() {
    $("form#quiz").submit(function(event) {
        event.preventDefault();
        const vacation = $("input:radio[name=question1]:checked").val();
        const disney = $("input:radio[name=question2]:checked").val();
        const cool = $("input:radio[name=question3]:checked").val();
        const dreamworks = $("input:radio[name=question4]:checked").val();
        const emoji = $("input:radio[name=question5]:checked").val();
    });
    console.log(vacation, disney, cool, dreamworks, emoji)
});

