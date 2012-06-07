(function($){
  $(function(){
    $("#test").change(function(e){
      var $this = $(this),
          val = $this.val(),
          text = $this.find(":selected").text();

      alert("You selected option " + text + " with value " + val);
    });
  });
})(jQuery);
