$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'resComponents/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})