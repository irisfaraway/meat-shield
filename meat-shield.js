// ==UserScript==
// @name        Highlight meat words on food sites
// @namespace   https://github.com/irisfaraway
// @include     *.asda.com/*
// @include     *.dominos.co*
// @include     *.iceland.co.uk/*
// @include     *.morrisons.com/*
// @include     *.ocado.com/*
// @include     *.papajohns.co*
// @include     *.sainsburys.co.uk/*
// @include     *.tesco.com/*
// @include     *.waitrose.com/*
// @version     1
// @grant       none
// ==/UserScript==

function highlightWord(word) {
    var xpath = "//text()[contains(., '" + word + "')]";
    var texts = document.evaluate(xpath, document.body, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (n = 0; n < texts.snapshotLength; n++) {
        var textNode = texts.snapshotItem(n);
        var p = textNode.parentNode;
        var a = [];
        var frag = document.createDocumentFragment();
        textNode.nodeValue.split(word).forEach(function(text, i) {
            var node;
            if (i) {
                node = document.createElement('span');
                node.style.backgroundColor = 'red';
                node.style.color = 'white';
                node.appendChild(document.createTextNode(word));
                frag.appendChild(node);
            }
            if (text.length) {
                frag.appendChild(document.createTextNode(text));
            }
            return a;
        });
        p.replaceChild(frag, textNode);
    }
}

/* BEWARE THE MEATS */

highlightWord('bacon');
highlightWord('Bacon');
highlightWord('bass');
highlightWord('Bass');
highlightWord('Beef');
highlightWord('beef');
highlightWord('chicken');
highlightWord('Chicken');
highlightWord('Clam');
highlightWord('clam');
highlightWord('cod');
highlightWord('Cod');
highlightWord('duck');
highlightWord('Duck');
highlightWord('Fish');
highlightWord('fish');
highlightWord('gammon');
highlightWord('Gammon');
highlightWord('haddock');
highlightWord('Haddock');
highlightWord('ham');
highlightWord('Ham');
highlightWord('Lamb');
highlightWord('lamb');
highlightWord('lobster');
highlightWord('Lobster');
highlightWord('meat');
highlightWord('Meat');
highlightWord('oyster');
highlightWord('Oyster');
highlightWord('pepperoni');
highlightWord('Pepperoni');
highlightWord('Pollo');
highlightWord('pollo');
highlightWord('pork');
highlightWord('Pork');
highlightWord('Prawn');
highlightWord('prawn');
highlightWord('salami');
highlightWord('Salami');
highlightWord('Salmon');
highlightWord('salmon');
highlightWord('sausage');
highlightWord('Sausage');
highlightWord('Shrimp');
highlightWord('shrimp');
highlightWord('Steak');
highlightWord('steak');
highlightWord('Tuna');
highlightWord('tuna');
highlightWord('Turkey');
highlightWord('turkey');
highlightWord('venison');
highlightWord('Venison')