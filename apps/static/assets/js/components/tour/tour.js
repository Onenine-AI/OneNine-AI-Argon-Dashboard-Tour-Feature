$(document).ready(function (){
    var tour = new Tour({
        steps: [
            {
                element:"#Total-traffic",
                content:"<h5>View your total traffic and percentage</h5>",
                placement: "top",
            }
        ]
    });
    tour.init();
    tour.start(true);  
});