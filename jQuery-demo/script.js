$(document).ready(function() {
    //Write out functions for the sans-serif and monospace buttons and attach event listeners to them.
    
    $("#serif").click(makeSerif);

    $("#puppy").click(togglePuppy);

    function makeSerif() {
        $("p").css('font-family', 'serif');
    }

    function togglePuppy() {
        $(".image-container").toggleClass("toggled");
    }
});