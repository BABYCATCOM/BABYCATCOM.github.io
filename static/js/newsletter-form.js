!function(e,n,t,r){"use strict";var s=e("#newsletter-form"),o=e("#message-newsletter"),l=e("#message-newsletter .message-text");s.submit((function(n){s.find(".input-group").removeClass("error"),o.removeClass("error");var t="",r={email:e('input[name="email"]').val(),"textfield-nl":e('input[name="text-field-nl"]').val()};e.ajax({type:"POST",url:"php/newsletter-process.php",data:r,dataType:"json",encode:!0}).done((function(e){e.success?(l.html(e.confirmation),s.find(".form-control").fadeIn().val("")):(e.errors.email&&(s.find(".input-group").addClass("error"),o.addClass("error"),t=t+" "+e.errors.email),l.html(t)),o.slideDown("slow","swing"),setTimeout((function(){o.slideUp("slow","swing")}),1e4)})).fail((function(e){console.log(e)})),n.preventDefault()}))}(jQuery,window,document);