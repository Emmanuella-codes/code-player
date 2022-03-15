// function to display css, html and javascript on iframe.
function updateOutput() {
  $("iframe").contents().find("html").html(`<html><head><style type='text/css'>
  ${$("#cssPanel").val()}</style></head><body>${$("#htmlPanel").val()}</body></html>`);

  document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
  
}

// accessing the toggle button to change color when the user hovers.
$(".toggleButton").hover( function() {
  $(this).addClass("highlightedButton");
}, function() {
  $(this).removeClass("highlightedButton");
});

// click functions on each buttons.
$(".toggleButton").click( function() {

  $(this).toggleClass("active");
  $(this).removeClass("highlightedButton");

  var panelId = $(this).attr("id") + "Panel";
  $("#" + panelId).toggleClass("hidden");

  var numOfActivePanels = 4 - $(".hidden").length;
  $(".panel").width(($(window).width() / numOfActivePanels) - 10);

});

// Setting the general window's height and width
$(".panel").height($(window).height() - $("#header").height()- 15);
$(".panel").width(($(window).width() / 2) - 10);
updateOutput();

// 
$("iframe").contents().find("html").html($("#htmlPanel").val());

$("textarea").on("change keyup paste", function() {
  updateOutput();
});

