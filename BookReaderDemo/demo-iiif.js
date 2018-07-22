// This demo uses a slightly modified version of
// https://github.com/aeschylus/IIIFBookReader
//
// It is intended as a rapid proof of concept.
// More development could be done.


br.IIIF({
    url: manifest,
    sequenceId : sequence,
    maxWidth: 2000,
    initCallback: function() {
    } 
});

// Let's go!
br.init();
