'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');


$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
const bookEvents = require('./books/events');


// On document ready
$(() => {
  $('#book-search').on('submit', bookEvents.onGetBooks);
  $('#book-destroy').on('submit', bookEvents.onDeleteBook);
  $('#edit-book').on('submit', bookEvents.onPatchBook);
  $('#post-book').on('submit', bookEvents.onPostBook);
});
