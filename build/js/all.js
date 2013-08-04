(function() {
  var Whippy;

  $(function() {
    return Whippy.init();
  });

  Whippy = (function() {
    var self;

    return self = {
      init: function() {
        self.x = 0;
        self.y = 0;
        self.handleDown = false;
        self.pageWidth = $(window).width();
        $(document).on('mousemove', self.moveHandler);
        $(document).on('mouseup', self.upHandler);
        $('#handle').on('mousedown', self.handleDownHandler);
        return $('#handle').on('click', self.handleClickHandler);
      },
      moveHandler: function(e) {
        self.x = e.pageX;
        self.y = e.pageY;
        $('#handle').css({
          top: self.y - 10
        });
        if (self.handleDown) {
          return $('#wrapper').css({
            maxWidth: (self.x - (self.pageWidth / 2)) * 2
          });
        }
      },
      upHandler: function() {
        self.handleDown = false;
        return $('body').removeClass('moving');
      },
      handleDownHandler: function(e) {
        self.handleDown = true;
        return $('body').addClass('moving');
      },
      handleClickHandler: function(e) {
        return e.preventDefault();
      }
    };
  })();

}).call(this);
