// Script to rotate objects within a composition in the order of their playback.
var comp = app.project.activeItem;

if (comp != null && comp instanceof CompItem) {
    // Reset the angle of all layers to 0 degrees
    for (var i = 1; i <= comp.numLayers; i++) {
        var layer = comp.layer(i);
        layer.rotation.setValue(0);
    }

    // Set the angle based on playback order
    for (var i = 1; i <= comp.numLayers; i++) {
        var layer = comp.layer(i);
        var rotationAmount = (i - 1) * 90; // Calculate the angle based on playback order
        layer.rotation.setValue(rotationAmount);
    }
}
