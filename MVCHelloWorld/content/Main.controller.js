// the controller for the view Main
sap.ui.controller("content.Main", { // controller logic goes here onInit: function() {
// this function is called when the view is instantiated.
// Used to modify the view before displaying },
onExit: function() {
// this function is called when the view is destroyed.
// Used for clean-up activities
},
onAfterRendering: function() {
// this function is called when the view has been rendered.
// Used for post-rendering manipulation of the HTML code
},
onBeforeRendering: function() {
// this function is called before the view is re-rendered // (not before first rendering)
},
changeText : function(oEvent) {
// get the button control from the event
var myButton = oEvent.getSource();
// change the button's text
myButton.setText("Clicked!");
}

});