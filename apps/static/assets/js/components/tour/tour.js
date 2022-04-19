$(document).ready(function (){
    var tour = new Tour({  
        steps: [
            {
                element:"#Total-traffic",
                title: "Total Traffic",
                content:"View your total traffic and percentage",
                placement: "top",
                backdrop: true
            }
        ]
    });
    tour.init();
    tour.start(true);  
});