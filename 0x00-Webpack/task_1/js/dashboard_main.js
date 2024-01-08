// js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';

const updateCounter = _.debounce(() => {
  const count = $('#count');
  const currentCount = parseInt(count.text(), 10) || 0;
  count.text(`${currentCount + 1} clicks on the button`);
}, 1000);

$(document).ready(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startBtn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  $('#startBtn').on('click', updateCounter);
});
