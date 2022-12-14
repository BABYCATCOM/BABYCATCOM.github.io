$(document).ready((function(){"use strict";var e=/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator&&self._navigator.userAgent),t=!!("ontouchend"in window||self._navigator&&self._navigator.maxTouchPoints>0||self._navigator&&self._navigator.msMaxTouchPoints>0),n=$(".loader");n.length&&$(window).on("load",(function(){n.addClass("fade-out"),setTimeout((function(){n.hide()}),1e3)}));var a=$(".count-down");if(a.length){var i=new Date(a.data("end-date"));a.countdown({date:i,render:function(e){$(this.el).html('<div class="cd-row"><div><h1>'+this.leadingZeros(e.days,3)+"</h1><p>days</p></div><div><h1>"+this.leadingZeros(e.hours,2)+'</h1><p>hrs</p></div></div><div class="cd-row"><div><h1>'+this.leadingZeros(e.min,2)+"</h1><p>min</p></div><div><h1>"+this.leadingZeros(e.sec,2)+"</h1><p>sec</p></div></div>")}})}function o(e){$("html, body").stop().animate({scrollTop:$(e).offset().top},{duration:1e3,specialEasing:{width:"linear",height:"easeInOutCubic"}})}$("a.smooth-scroll").on("click",(function(e){o($(this).attr("href")),e.preventDefault()})),$(".reveal").length&&(window.sr=ScrollReveal(),sr.isSupported()&&document.documentElement.classList.add("sr"),sr.reveal(".reveal.scale-in",{origin:"bottom",distance:"20px",duration:1500,delay:400,opacity:1,scale:1.1,easing:"linear",reset:!1}),sr.reveal(".reveal.scale-out",{origin:"bottom",distance:"20px",duration:1500,delay:400,opacity:1,scale:.9,easing:"linear",reset:!1}));var r=$(".collapse");r.on("show.bs.collapse",(function(){$(".navbar-button").addClass("open")})),r.on("hide.bs.collapse",(function(){$(".navbar-button").removeClass("open")}));var s=$(".navbar-links li"),l=$("body"),d=$(".navbar"),c=$(".col-transform");function p(e,t,n,a,i){$(e).each((function(){var e=this;window.setTimeout((function(){$(e).css({"-webkit-transform":"translate("+t+",0)",opacity:n,visibility:a})}),i),i+=300}))}$(".show-info").click((function(){window.innerWidth>990&&(l.hasClass("show-content")?(c.removeClass("col-md-6").addClass("col-md-12"),l.removeClass("show-content"),setTimeout((function(){d.removeClass("navbar-open")}),900),p(s,"100%","0","hidden",600)):(c.removeClass("col-md-12").addClass("col-md-6"),l.addClass("show-content"),setTimeout((function(){d.addClass("navbar-open")}),300),p(s.get().reverse(),"0","1","visible",600))),o($(this).data("href"))}));var u=$("#page-slider");u.length&&u.owlCarousel({loop:!0,items:1,autoplay:!0,animateOut:"fadeOut",slideTransition:"linear",autoplaySpeed:8e3,mouseDrag:!1});var h=$("#page-youtube");!h.length||e||t||h.YTPlayer({fitToBackground:!0,videoId:h.data("video-id"),playerVars:{modestbranding:0,autoplay:1,controls:0,showinfo:0,branding:0,rel:0,autohide:0,start:0}});var m=$("#page-video");!m.length||e||t||new $.backgroundVideo($("body"),{align:"centerXY",width:960,height:540,path:m.data("path"),filename:m.data("file"),types:["mp4","ogg","webm"]});var g=$("#kenburn-slider, body");$("#kenburn-slider").length&&g.vegas({slides:[{src:"images/page-slide-1.jpg"},{src:"images/page-slide-2.jpg"},{src:"images/page-slide-3.jpg"}],transition:"fade",animation:"random",transitionDuration:4e3,delay:8e3,timer:!1});var f=$("#page-particle");f.length&&f.particleground({dotColor:f.data("dot-color"),lineColor:f.data("line-color")});var v=$("#page-gradient");v.length&&v.gradientify({gradients:[{start:[35,72,200],stop:[192,33,114]},{start:[10,155,102],stop:[82,98,176]}],fps:80});var w=$("#page-rain");if(w.length&&!e&&!t){var b=w[0];b.onload=function(){var e=new RainyDay({image:this,parentElement:$(".section-overlay")[0]});e.rain([[1,2,4e3]]),e.rain([[3,3,1],[5,5,1],[6,2,1]],100)},b.crossOrigin="anonymous",b.src=w.attr("src")}var S=$("#page-amplitude"),y=$("#volume"),C=$("#playback");if(S.length){var x=new SiriWave({speed:.05,amplitude:1,container:S[0],autostart:!0,frequency:4,height:300,style:"ios9"});if(e||t)y.hide(),C.hide();else{var R=new Howl({src:["audio/egotype.webm","audio/egotype.mp3"],autoplay:!0,loop:!0});C.on("click",(function(){C.hasClass("pause")?(C.addClass("play").removeClass("pause"),C.find("i").removeClass("icon-music-pause-button").addClass("icon-music-play-button"),R.pause(),x.stop()):(C.removeClass("play").addClass("pause"),C.find("i").removeClass("icon-music-play-button").addClass("icon-music-pause-button"),R.play(),x.start())})),y.on("click",(function(){y.hasClass("vol-1")?(y.removeClass("vol-1").addClass("vol-0"),y.find("i").removeClass("icon-music-volume-up").addClass("icon-music-volume-down"),R.volume(0)):(y.addClass("vol-1").removeClass("vol-0"),y.find("i").removeClass("icon-music-volume-down").addClass("icon-music-volume-up"),R.volume(1))}))}}var T,M,E,_,F,I,A=100,H=0;window.innerWidth,window.innerHeight;function O(){window.innerWidth/2,window.innerHeight/2,M.aspect=window.innerWidth/window.innerHeight,M.updateProjectionMatrix(),_.setSize(window.innerWidth,window.innerHeight)}var k=$("#particle-waves");k.length&&(!function(e,t){T=$("#particle-waves")[0],(M=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1e4)).position.z=1e3,E=new THREE.Scene,F=[];for(var n=2*Math.PI,a=new THREE.SpriteCanvasMaterial({color:e,program:function(e){e.beginPath(),e.arc(0,0,.5,0,n,!0),e.fill()}}),i=0,o=0;o<50;o++)for(var r=0;r<50;r++)(I=F[i++]=new THREE.Sprite(a)).position.x=o*A-2500,I.position.z=r*A-2500,E.add(I);(_=new THREE.CanvasRenderer).setPixelRatio(window.devicePixelRatio),_.setSize(window.innerWidth,window.innerHeight),_.setClearColor(t,1),T.appendChild(_.domElement),window.addEventListener("resize",O,!1)}(k.data("wave-color"),k.data("bg-color")),function e(){requestAnimationFrame(e),function(){M.position.x+=.05*(0-M.position.x),M.position.y+=.05*(-0-M.position.y),M.lookAt(E.position);for(var e=0,t=0;t<50;t++)for(var n=0;n<50;n++)(I=F[e++]).position.y=50*Math.sin(.3*(t+H))+50*Math.sin(.5*(n+H)),I.scale.x=I.scale.y=4*(Math.sin(.3*(t+H))+1)+4*(Math.sin(.5*(n+H))+1);_.render(E,M),H+=.1}()}());var V=$("#waterpipe");V.length&&V.waterpipe({gradientStart:"#fa05fa",gradientEnd:"#6b71e3",smokeOpacity:.1,numCircles:1,maxMaxRad:"auto",minMaxRad:"auto",minRadFactor:0,iterations:8,drawsPerFrame:10,lineWidth:2,speed:20,bgColorInner:"#444444",bgColorOuter:"#000000"});var L=$("#page-ripple");!L.length||e||t||(L.ripples({resolution:512,dropRadius:10,perturbance:.04,interactive:!1}),setInterval((function(){var e=L,t=Math.random()*e.outerWidth(),n=Math.random()*e.outerHeight(),a=.04+.04*Math.random();e.ripples("drop",t,n,20,a)}),3e3));var N=$("#page-starfield");N.length&&N.starfield({speed:0,quantity:500,ratio:200}),$("#alongway").length&&(defaults={dt:.015,time:0}),$("#raindrop").length&&(defaults={length:30,speed:15,startColor:"#00a8ff",middleColor:"#00a8ff",endColor:"white"}),$("#homing-particles").length&&(defaults={BASE_PARTICLE_COUNT:30,WATCH_INTERVAL:1,THRESHOLD:30,SPRING_AMOUNT:.01,LIMIT_RATE:.8,BACKGROUND_COLOR_HUE:0,BACKGROUND_COLOR_SATURATION:0,BACKGROUND_COLOR_LIGHTNESS:0,BACKGROUND_COLOR_ALPHA:.3,PARTICLE_COLOR_SATURATION:70,PARTICLE_COLOR_LIGHTNESS:40}),$("#intertwined").length&&(defaults={dt:.005,time:0});var z=$("#page-square");z.length&&particlesJS("page-square",{particles:{number:{value:20,density:{enable:!1,value_area:800}},color:{value:z.data("square-color")},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},shape:{type:"edge",stroke:{width:0,color:"#000000"}},size:{value:58,random:!1,anim:{enable:!0,speed:10,size_min:40,sync:!1}},line_linked:{enable:!1,distance:200,color:"#ffffff",opacity:1,width:2},move:{enable:!0,speed:4,direction:"right",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});var P=$("#page-bubbles");P.length&&particlesJS("page-bubbles",{particles:{number:{value:30,density:{enable:!0,value_area:800}},color:{value:P.data("bubble-color")},opacity:{value:.3,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:58,random:!1,anim:{enable:!0,speed:10,size_min:40,sync:!1}},line_linked:{enable:!1,distance:200,color:"#ffffff",opacity:1,width:2},move:{enable:!0,speed:8,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});var D=$("#page-fss");if(D.length)var W,U,B,q,G,j,K,Z={width:1.2,height:1.2,depth:0,segments:16,slices:8,xRange:.8,yRange:.1,zRange:1,ambient:"#555555",diffuse:"#ffffff",speed:.002},Y={count:2,xyScalar:1,zOffset:100,ambient:D.data("ambient-color"),diffuse:D.data("diffuse-color"),speed:.002,gravity:500,dampening:.95,minLimit:10,maxLimit:null,minDistance:20,maxDistance:800,autopilot:!0,draw:!1,bounds:FSS.Vector3.create(),step:FSS.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1))},X={renderer:"canvas"},J=Date.now(),Q=FSS.Vector3.create(),ee=FSS.Vector3.create(),te=D[0],ne=D[0];function ae(){var e,t;for(B.remove(q),U.clear(),G=new FSS.Plane(Z.width*U.width,Z.height*U.height,Z.segments,Z.slices),j=new FSS.Material(Z.ambient,Z.diffuse),q=new FSS.Mesh(G,j),B.add(q),e=G.vertices.length-1;e>=0;e--)(t=G.vertices[e]).anchor=FSS.Vector3.clone(t.position),t.step=FSS.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1)),t.time=Math.randomInRange(0,Math.PIM2)}function ie(e,t){U.setSize(e,t),FSS.Vector3.set(Q,U.halfWidth,U.halfHeight),ae()}function oe(){W=Date.now()-J,function(){var e,t,n,a,i,o,r,s=Z.depth/2;FSS.Vector3.copy(Y.bounds,Q),FSS.Vector3.multiplyScalar(Y.bounds,Y.xyScalar),FSS.Vector3.setZ(ee,Y.zOffset),Y.autopilot&&(e=Math.sin(Y.step[0]*W*Y.speed),t=Math.cos(Y.step[1]*W*Y.speed),FSS.Vector3.set(ee,Y.bounds[0]*e,Y.bounds[1]*t,Y.zOffset));for(a=B.lights.length-1;a>=0;a--){i=B.lights[a],FSS.Vector3.setZ(i.position,Y.zOffset);var l=Math.clamp(FSS.Vector3.distanceSquared(i.position,ee),Y.minDistance,Y.maxDistance),d=Y.gravity*i.mass/l;FSS.Vector3.subtractVectors(i.force,ee,i.position),FSS.Vector3.normalise(i.force),FSS.Vector3.multiplyScalar(i.force,d),FSS.Vector3.set(i.acceleration),FSS.Vector3.add(i.acceleration,i.force),FSS.Vector3.add(i.velocity,i.acceleration),FSS.Vector3.multiplyScalar(i.velocity,Y.dampening),FSS.Vector3.limit(i.velocity,Y.minLimit,Y.maxLimit),FSS.Vector3.add(i.position,i.velocity)}for(o=G.vertices.length-1;o>=0;o--)r=G.vertices[o],e=Math.sin(r.time+r.step[0]*W*Z.speed),t=Math.cos(r.time+r.step[1]*W*Z.speed),n=Math.sin(r.time+r.step[2]*W*Z.speed),FSS.Vector3.set(r.position,Z.xRange*G.segmentWidth*e,Z.yRange*G.sliceHeight*t,Z.zRange*s*n-s),FSS.Vector3.add(r.position,r.anchor);G.dirty=!0}(),re(),requestAnimationFrame(oe)}function re(){var e,t,n,a;if(U.render(B),Y.draw)for(e=B.lights.length-1;e>=0;e--)t=(a=B.lights[e]).position[0],n=a.position[1],U.context.lineWidth=.5,U.context.beginPath(),U.context.arc(t,n,10,0,Math.PIM2),U.context.strokeStyle=a.ambientHex,U.context.stroke(),U.context.beginPath(),U.context.arc(t,n,4,0,Math.PIM2),U.context.fillStyle=a.diffuseHex,U.context.fill()}function se(){ie(te.offsetWidth,te.offsetHeight),re()}D.length&&(K=new FSS.CanvasRenderer,X.renderer,U&&ne.removeChild(U.element),(U=K).setSize(te.offsetWidth,te.offsetHeight),ne.appendChild(U.element),B=new FSS.Scene,ae(),function(){var e,t;for(e=B.lights.length-1;e>=0;e--)t=B.lights[e],B.remove(t);for(U.clear(),e=0;e<Y.count;e++)(t=new FSS.Light(Y.ambient,Y.diffuse)).ambientHex=t.ambient.format(),t.diffuseHex=t.diffuse.format(),B.add(t),t.mass=Math.randomInRange(.5,1),t.velocity=FSS.Vector3.create(),t.acceleration=FSS.Vector3.create(),t.force=FSS.Vector3.create(),t.ring=document.createElementNS(FSS.SVGNS,"circle"),t.ring.setAttributeNS(null,"stroke",t.ambientHex),t.ring.setAttributeNS(null,"stroke-width","0.5"),t.ring.setAttributeNS(null,"fill","none"),t.ring.setAttributeNS(null,"r","10"),t.core=document.createElementNS(FSS.SVGNS,"circle"),t.core.setAttributeNS(null,"fill",t.diffuseHex),t.core.setAttributeNS(null,"r","4")}(),window.addEventListener("resize",se),ie(te.offsetWidth,te.offsetHeight),oe());var le=function(e){for(var t=function e(t,n){return t&&(n(t)?t:e(t.parentNode,n))},n=function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1;var n=e.target||e.srcElement,i=t(n,(function(e){return e.tagName&&"FIGURE"===e.tagName.toUpperCase()}));if(i){for(var o,r=i.parentNode,s=i.parentNode.childNodes,l=s.length,d=0,c=0;c<l;c++)if(1===s[c].nodeType){if(s[c]===i){o=d;break}d++}return o>=0&&a(o,r),!1}},a=function(e,t,n,a){var i,o,r=document.querySelectorAll(".pswp")[0];if(o=function(e){for(var t,n,a,i,o=e.childNodes,r=o.length,s=[],l=0;l<r;l++)1===(t=o[l]).nodeType&&(a=(n=t.children[0]).getAttribute("data-size").split("x"),i={src:n.getAttribute("href"),w:parseInt(a[0],10),h:parseInt(a[1],10)},t.children.length>1&&(i.title="<h4>"+t.children[1].innerHTML+"</h4><p>"+t.children[2].innerHTML+"</p>"),n.children.length>0&&(i.msrc=n.children[0].getAttribute("src")),i.el=t,s.push(i));return s}(t),i={barsSize:{top:64,bottom:"auto",padding:"10px"},bgOpacity:.98,closeEl:!0,captionEl:!0,fullscreenEl:!1,zoomEl:!1,shareEl:!1,counterEl:!0,arrowEl:!0,preloaderEl:!0,galleryUID:t.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var t=o[e].el.getElementsByTagName("img")[0],n=window.pageYOffset||document.documentElement.scrollTop,a=t.getBoundingClientRect();return{x:a.left,y:a.top+n,w:a.width}}},a)if(i.galleryPIDs){for(var s=0;s<o.length;s++)if(o[s].pid==e){i.index=s;break}}else i.index=parseInt(e,10)-1;else i.index=parseInt(e,10);isNaN(i.index)||(n&&(i.showAnimationDuration=0),new PhotoSwipe(r,PhotoSwipeUI_Default,o,i).init())},i=document.querySelectorAll(e),o=0,r=i.length;o<r;o++)i[o].setAttribute("data-pswp-uid",o+1),i[o].onclick=n;var s=function(){var e=window.location.hash.substring(1),t={};if(e.length<5)return t;for(var n=e.split("&"),a=0;a<n.length;a++)if(n[a]){var i=n[a].split("=");i.length<2||(t[i[0]]=i[1])}return t.gid&&(t.gid=parseInt(t.gid,10)),t}();s.pid&&s.gid&&a(s.pid,i[s.gid-1],!0,!0)};$("#photoswipe").load("js/plugins/photoswipe/include/photoswipe.html",(function(){le(".gallery")}));var de=$("textarea");de.length&&de[0].addEventListener("keydown",(function(){var e=this;setTimeout((function(){e.style.cssText="height:50px; padding:15px",e.style.cssText="height:"+e.scrollHeight+"px"}),0)}));var ce=$(".form-control");ce.on("focus",(function(){$(this).parent().addClass("focus")})),ce.on("blur",(function(){$(this).parent().removeClass("focus")}));var pe=$("#mc-form");function ue(e){var t,n,a=new google.maps.LatLng(40.72020106,-73.97163391),i=[['<div class="wrapper"><h4>Kounter Office</h4><h5>Opening Hours</h5><p>Mo – Fr: 08:30 – 20:00</p></div>',40.7486332,-73.9797129],['<div class="wrapper"><h4>Kounter Agency</h4><h5>Opening Hours</h5><p>Mo – Fr: 08:30 – 20:00</p></div>',40.6681,-73.9448]],o=new google.maps.Size(50,49),r={zoom:11,center:a,mapTypeId:google.maps.MapTypeId.TERRAIN,mapTypeControl:!1,streetViewControl:!1,scrollwheel:!1,styles:[{featureType:"road",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"poi",elementType:"label",stylers:[{visibility:"off"}]},{featureType:"all",stylers:[{saturation:-100},{gamma:.9}]}]},s=new google.maps.Map(e[0],r),l=new google.maps.InfoWindow;google.maps.event.addListener(l,"domready",(function(){var e=$(".gm-style-iw").prev();e.children(":nth-child(2)").css({"box-shadow":"none","background-color":"rgba(0, 0, 0, 0.1)"}),e.children(":nth-child(3)").find("div").children().css({"box-shadow":"none","border-top-color":"rgba(0, 0, 0, 0.1)"})}));var d={url:"images/marker.png",scaledSize:o};for(n=0;n<i.length;n++){var c=i[n][0];t=new google.maps.Marker({position:new google.maps.LatLng(i[n][1],i[n][2]),map:s,icon:d}),google.maps.event.addListener(t,"click",function(e){return function(){l.setContent(e),l.open(s,this)}}(c))}}pe.length&&pe.ajaxChimp({callback:function(e){var t=$("#message-newsletter");t.removeClass("error"),pe.find(".form-group").removeClass("error"),"error"===e.result?(pe.find(".input-group").addClass("error"),t.addClass("error")):pe.find(".form-control").fadeIn().val("");t.slideDown("slow","swing"),setTimeout((function(){t.slideUp("slow","swing")}),1e4)},url:"https://egotype.us13.list-manage.com/subscribe/post?u=0d5d3b57e890f53491f92e353&amp;id=27fdfeeb31"});var he=$("#map");if(he.length&&(google.maps.event.addDomListener(window,"load",ue(he)),google.maps.event.addDomListener(window,"resize",ue(he))),navigator.userAgent.match(/IEMobile\/10\.0/)){var me=document.createElement("style");me.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.querySelector("head").appendChild(me)}}));