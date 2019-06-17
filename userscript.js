// ==UserScript==
// @name         Update Heading Numbers
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Keyboard Shortcut ctrl+shift+H to update the heading numbers for Google Docs extension Heading Numbers (https://chrome.google.com/webstore/detail/heading-numbers/pomhgonejhponfnckfnonolnciipappm?utm_source=permalink)
// @author       Atif Ali atifsyedali AT gmail [.] com
// @match        *://docs.google.com/document/d/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.updateHeadingNumbersAlreadyInserted) {
        return;
    }

    window.updateHeadingNumbersAlreadyInserted = true;


    function updateHeadings() {
        var mousedown = new MouseEvent("mousedown", {
            altKey: false,
            bubbles: true,
            button: 0,
            buttons: 1,
            cancelBubble: false,
            cancelable: true,
            composed: true,
            ctrlKey: false,
            defaultPrevented: false,
            detail: 1,
            eventPhase: 1,
            fromElement: null,
            isTrusted: true,
            metaKey: false,
            relatedTarget: null,
            returnValue: true,
            shiftKey: false,
            which: 1,
        });
        var mouseup = new MouseEvent("mouseup", {
            altKey: false,
            bubbles: true,
            button: 0,
            buttons: 1,
            cancelBubble: false,
            cancelable: true,
            composed: true,
            ctrlKey: false,
            defaultPrevented: false,
            detail: 1,
            eventPhase: 1,
            fromElement: null,
            isTrusted: true,
            metaKey: false,
            relatedTarget: null,
            returnValue: true,
            shiftKey: false,
            which: 1,
        });
        var mouseclick = new MouseEvent("click", {
            altKey: false,
            bubbles: true,
            button: 0,
            buttons: 1,
            cancelBubble: false,
            cancelable: true,
            composed: true,
            ctrlKey: false,
            defaultPrevented: false,
            detail: 1,
            eventPhase: 1,
            fromElement: null,
            isTrusted: true,
            metaKey: false,
            relatedTarget: null,
            returnValue: true,
            shiftKey: false,
            which: 1,
        });
        var mouseover = new MouseEvent("mouseover", {
            altKey: false,
            bubbles: true,
            button: 0,
            buttons: 1,
            cancelBubble: false,
            cancelable: true,
            composed: true,
            ctrlKey: false,
            defaultPrevented: false,
            detail: 1,
            eventPhase: 1,
            fromElement: null,
            isTrusted: true,
            metaKey: false,
            relatedTarget: null,
            returnValue: true,
            shiftKey: false,
            which: 1,
        });

        var xpath1 = "//div[text()='Add-ons' and contains(@class, 'menu-button')]";
        var addons = document.evaluate(xpath1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, 	null).singleNodeValue;

        addons.dispatchEvent(mousedown);

        setTimeout(() => {
            var xpath2 = "//span[text()='Heading Numbers']";
            var headingNumbers = document.evaluate(xpath2, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, 	null).singleNodeValue;

            console.log("headingNumbers:" + headingNumbers);
            headingNumbers = headingNumbers.parentElement;
            console.log("headingNumbers parent:" + headingNumbers);

            headingNumbers.dispatchEvent(mouseover);

            setTimeout(() => {

                var xpath3 = "//div[text()='Update' and contains(@class, 'goog-menuitem-content')]";
                var update = document.evaluate(xpath3, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, 	null).singleNodeValue;

                console.log("update:" + update);
                update = update.parentElement;
                console.log("update parent:" + update);

                update.dispatchEvent(mouseover);
                update.dispatchEvent(mousedown);
                update.dispatchEvent(mouseup);
                update.dispatchEvent(mouseclick);
            }, 250);
        }, 250);
    }

    document.getElementsByClassName("docs-texteventtarget-iframe")[0].contentDocument.addEventListener("keypress", (e) => {
        if (e.ctrlKey && e.shiftKey && e.code === "KeyH") {
            updateHeadings();
        }
    });
})();
