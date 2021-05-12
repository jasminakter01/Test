// JavaScript Document
$(document).ready(function() {
    $('#autoWidt2h').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidt2h').removeClass('cS-hiddenn');
        } 
    });  
  });