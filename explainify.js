(function ( $ ) {

    $.fn.explainify = function( options ) {

        // set default options
        var settings = $.extend({
          linkClass: 'explanation_link',
          newWindow: true,
          linkTitle: true,
          linkTitleText: "See What This Command Does At ExplainShell.com"
        }, options );

        // format explain shell url
        function explainUrl(cmd) {
          var explainBase = 'http://explainshell.com/explain?cmd=';
          var explainCommand = encodeURIComponent(cmd);
          return explainBase + explainCommand;
        }

        // loop through elements with target class
        return this.each(function (index) {
          // grab inner text
          var cmd = $(this).text();
          // format explain link markup
          var explainLink = '<a class="' + settings.linkClass + '" href="' + explainUrl(cmd) + '"';
          if (settings.newWindow) {
            explainLink += ' target="_blank"';
          }
          if (settings.linkTitle) {
            explainLink += ' title="' + settings.linkTitleText + '"';
          }
          explainLink += '></a>';
          // wrap element with the link
          $(this).wrap(explainLink);
        });

    };

}( jQuery ));

