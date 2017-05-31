$('.spoiler span').hide();
$('.spoiler').append('<button>Click to reveal spoiler!</button>');
//The span with the spoiler text is now hidden, and the button is visible
//When any of the .spoiler paragraphs are clicked, toggle the visibility
//of that paragraph's children so what's visible is hidden and what was hidden becomes visible.
$('.spoiler').click(function() {
  $(this).children().toggle();
});