$ ->
  Whippy.init()

Whippy = (->
  self =
    init: ->
      self.x = 0
      self.y = 0
      self.handleDown = false
      self.pageWidth = $(window).width()
          
      $(document).on 'mousemove', self.moveHandler
      $(document).on 'mouseup', self.upHandler
      $('#handle').on 'mousedown', self.handleDownHandler
      $('#handle').on 'click', self.handleClickHandler

      
    moveHandler: (e) ->
      self.x = e.pageX
      self.y = e.pageY
      $('#handle').css
        top: self.y - 10
      if self.handleDown
        $('#wrapper').css
          maxWidth: (self.x - (self.pageWidth / 2)) * 2
      
    upHandler: ->
      self.handleDown = false
      $('body').removeClass('moving')
      
    handleDownHandler: (e) ->
      self.handleDown = true
      $('body').addClass('moving')
      
    handleClickHandler: (e) ->
      e.preventDefault()
      
      
      
)()