/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {

        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
        setupScale(480);
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

//-------------------------------------------------------------
//----- Correções de escala
//-------------------------------------------------------------
/*
window.addEventListener("touchstart", function(e) {
    e.preventDefault();
}, false);


window.addEventListener("touchmove", function(e) {
    e.preventDefault();
}, false);
*/
/*
 * Make sure that the device is scaled so that it is at least minWidth px in width
 * in any orientation. This is done by setting the zoom appropriately.
 * Right now, we only need this on Android, which supports zoom.
 * Plan B is to use transforms with scale and transform-origin.
 */
function setupScale (minWidth) {
    var viewWidth = window.outerWidth;//Math.max(document.documentElement.clientWidth, window.outerWidth);
    var viewHeight =window.outerHeight; //Math.max(document.documentElement.clientHeight, window.outerHeight);
    var portWidth = Math.min(viewWidth, viewHeight);
    var landWidth = Math.max(viewWidth, viewHeight);

    var fixScale = function () {
        if (Math.abs(window.orientation) != 90) {
            // portrait
            document.body.style.zoom = portWidth / minWidth;
        } else if (landWidth < minWidth) {
            // landscape, but < minWidth
            document.body.style.zoom = landWidth / minWidth;
        } else {
            // landscape >= minWidth. Turn off zoom.
            // This will make things "larger" in landscape.
            document.body.style.zoom = 1;
        }
    };
    /*
    if (gPortWidth >= minWidth) {
        return;     // device is greater than minWidth even in portrait.
    }*/
    fixScale();                             // fix the current scale.       
    window.onorientationchange = fixScale;  // and when orientation is changed
}
//-------------------------------------------------------------