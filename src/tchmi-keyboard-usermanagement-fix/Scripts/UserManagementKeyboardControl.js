// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.59/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {

    let destroyOnInitialized = TcHmi.EventProvider.register('onInitialized', (e, data) => {
        e.destroy();

        // This is the configuration section of this script. 
        // -------------------------------------------------

        var keyboardContainerId = 'MyKeyboardContainer'; // this must match the ID of the container holding the keyboard control
        var keyboardTopPosition = '20px'; // when made visible, this will be the top position used
        var keyboardLeftPosition = '20px'; // when made visible, this will be the left position used

        // You do not need to change anything under this line.
        // ---------------------------------------------------
        
        TcHmi.EventProvider.register('Desktop.onAttached', function (e, data) {

            var theKeyboard = document.getElementById(keyboardContainerId);

            document.addEventListener('click', function (e) {

                var theTopLayer = $("#tchmi-system-topmostlayer-master").length ? $("#tchmi-system-topmostlayer-master") : $("#tchmi-system-top-layer-master");

                if (theTopLayer.length === 0) {
                    return;
                }

                var validPlaceholders = [
                    'Enter your password.',
                    'Enter your current password.',
                    'Enter your new password.',
                    'Repeat your new password.',
                    'Enter your user name.'
                ];

                if (validPlaceholders.includes(e.srcElement.placeholder)) {

                    var index = theTopLayer[0].children.length == 1 ? 0 : 1;
                    var theTopLayerContainer = theTopLayer[0].children[index].children[0];

                    theKeyboard.style.top = keyboardTopPosition;
                    theKeyboard.style.left = keyboardLeftPosition;
                    theTopLayerContainer.appendChild(theKeyboard);
                }

            });

        });

    });
})(TcHmi);
