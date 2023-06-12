(function(g){var window=this;'use strict';var zgb=function(a,b){a.Na("onAutonavCoundownStarted",b)},a6=function(a,b,c){g.Up(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.xg(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.XL&&(b.lengthText?(e=b.lengthText||null,f=b.zv||null):b.lengthSeconds&&(e=g.fR(b.lengthSeconds),f=g.fR(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.VL(d).type;var l=b instanceof g.XL?b.isLivePlayback:null,m=b instanceof g.XL?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,t=[],v=[];n&&t.push(n);p&&(t.push(p),v.push(p));q&&v.push(q);c={title:b.title,author:n,author_and_views:t.join(" \u2022 "),aria_label:b.ariaLabel||
g.DO("Assistir a $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Bk(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:v.join(" \u2022 "),autoplayAlternativeHeader:b.Hr};b instanceof g.WL&&(c.playlist_length=b.playlistLength);a.update(c)},b6=function(a){var b=a.V(),c=b.C;
g.V.call(this,{G:"a",N:"ytp-autonav-suggestion-card",X:{href:"{{url}}",target:c?b.ea:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{G:"div",Ia:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],X:{style:"{{background}}"},W:[{G:"div",X:{"aria-label":"{{timestamp}}"},Ia:["ytp-autonav-timestamp"],ra:"{{duration}}"},{G:"div",Ia:["ytp-autonav-live-stamp"],ra:"Ao vivo"},
{G:"div",Ia:["ytp-autonav-upcoming-stamp"],ra:"Em breve"},{G:"div",N:"ytp-autonav-list-overlay",W:[{G:"div",N:"ytp-autonav-mix-text",ra:"Mix"},{G:"div",N:"ytp-autonav-mix-icon"}]}]},{G:"div",Ia:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],ra:"{{title}}"},{G:"div",Ia:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],ra:"{{author}}"},{G:"div",Ia:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],ra:"{{views_and_publish_time}}"}]});this.F=a;this.suggestion=
null;this.j=c;this.Ra("click",this.onClick);this.Ra("keypress",this.onKeyPress)},c6=function(a,b){b=void 0===b?!1:b;
g.V.call(this,{G:"div",N:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.I=b;this.D=void 0;this.B=0;this.container=new g.V({G:"div",N:"ytp-autonav-endscreen-countdown-container"});g.J(this,this.container);this.container.Ga(this.element);b=a.V();var d=b.C;this.F=a;this.suggestion=null;this.onVideoDataChange("newdata",this.F.getVideoData());this.S(a,"videodatachange",this.onVideoDataChange);this.j=new g.V({G:"div",N:"ytp-autonav-endscreen-upnext-container",X:{"aria-label":"{{aria_label}}",
"data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{G:"div",N:"ytp-autonav-endscreen-upnext-header"},{G:"div",N:"ytp-autonav-endscreen-upnext-alternative-header",ra:"{{autoplayAlternativeHeader}}"},{G:"a",N:"ytp-autonav-endscreen-link-container",X:{href:"{{url}}",target:d?b.ea:""},W:[{G:"div",N:"ytp-autonav-endscreen-upnext-thumbnail",X:{style:"{{background}}"},W:[{G:"div",X:{"aria-label":"{{timestamp}}"},Ia:["ytp-autonav-timestamp"],
ra:"{{duration}}"},{G:"div",Ia:["ytp-autonav-live-stamp"],ra:"Ao vivo"},{G:"div",Ia:["ytp-autonav-upcoming-stamp"],ra:"Em breve"}]},{G:"div",N:"ytp-autonav-endscreen-video-info",W:[{G:"div",N:"ytp-autonav-endscreen-premium-badge"},{G:"div",N:"ytp-autonav-endscreen-upnext-title",ra:"{{title}}"},{G:"div",N:"ytp-autonav-endscreen-upnext-author",ra:"{{author}}"},{G:"div",N:"ytp-autonav-view-and-date",ra:"{{views_and_publish_time}}"},{G:"div",N:"ytp-autonav-author-and-view",ra:"{{author_and_views}}"}]}]}]});
g.J(this,this.j);this.j.Ga(this.container.element);d||this.S(this.j.Da("ytp-autonav-endscreen-link-container"),"click",this.JQ);this.F.sb(this.container.element,this,115127);this.F.sb(this.j.Da("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.V({G:"div",N:"ytp-autonav-overlay"});g.J(this,this.overlay);this.overlay.Ga(this.container.element);this.u=new g.V({G:"div",N:"ytp-autonav-endscreen-button-container"});g.J(this,this.u);this.u.Ga(this.container.element);this.cancelButton=
new g.V({G:"button",Ia:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.K("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{"aria-label":"Cancelar reprodu\u00e7\u00e3o autom\u00e1tica"},ra:"Cancelar"});g.J(this,this.cancelButton);this.cancelButton.Ga(this.u.element);this.cancelButton.Ra("click",this.b_,this);this.F.sb(this.cancelButton.element,this,115129);this.playButton=new g.V({G:"a",Ia:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button",
b.K("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{href:"{{url}}",role:"button","aria-label":"Reproduzir pr\u00f3ximo v\u00eddeo"},ra:"Assista agora"});g.J(this,this.playButton);this.playButton.Ga(this.u.element);this.playButton.Ra("click",this.JQ,this);this.F.sb(this.playButton.element,this,115130);this.C=new g.Ip(function(){Agb(c)},500);
g.J(this,this.C);this.IQ();this.S(a,"autonavvisibility",this.IQ);this.F.K("web_autonav_color_transition")&&(this.S(a,"autonavchange",this.a_),this.S(a,"onAutonavCoundownStarted",this.V5))},d6=function(a){var b=a.F.Ak(!0,a.F.isFullscreen());
g.Up(a.container.element,"ytp-autonav-endscreen-small-mode",a.Xg(b));g.Up(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.eI);g.Up(a.F.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.F.Cf());g.Up(a.F.getRootNode(),"countdown-running",a.Hk());g.Up(a.container.element,"ytp-player-content",a.F.Cf());g.Rm(a.overlay.element,{width:b.width+"px"});if(!a.Hk()){a.F.Cf()?Bgb(a,Math.round(Cgb(a)/1E3)):Bgb(a);b=!!a.suggestion&&!!a.suggestion.Hr;var c=a.F.Cf()||!b;
g.Up(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.Up(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.xQ(a.u,a.F.Cf());g.Up(a.element,"ytp-enable-w2w-color-transitions",Dgb(a))}},Agb=function(a){var b=Cgb(a),c=Math,d=c.min;
var e=a.B?Date.now()-a.B:0;c=d.call(c,e,b);Bgb(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Hk()?a.select(!0):a.Hk()&&a.C.start()},Cgb=function(a){if(a.F.isFullscreen()){var b;
a=null==(b=a.F.getVideoData())?void 0:b.jQ;return-1===a||void 0===a?8E3:a}return 0<=a.F.Zr()?a.F.Zr():g.wJ(a.F.V().experiments,"autoplay_time")||1E4},Dgb=function(a){var b;
return!(null==(b=a.F.getVideoData())||!b.watchToWatchTransitionRenderer)},Bgb=function(a,b){b=void 0===b?-1:b;
a=a.j.Da("ytp-autonav-endscreen-upnext-header");g.gf(a);if(0<=b){b=String(b);var c="Pr\u00f3ximo v\u00eddeo em $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Pr\u00f3ximo v\u00eddeo em $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.ef("Pr\u00f3ximo v\u00eddeo em $SECONDS".slice(0,d)));var e=g.Ze("span");g.Op(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.mf(e,b);a.appendChild(e);a.appendChild(g.ef("Pr\u00f3ximo v\u00eddeo em $SECONDS".slice(d+c.length)));return}}g.mf(a,"Pr\u00f3ximo")},
e6=function(a,b){g.V.call(this,{G:"div",
Ia:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},f6=function(a){g.V.call(this,{G:"div",
Ia:["ytp-upnext","ytp-player-content"],X:{"aria-label":"{{aria_label}}"},W:[{G:"div",N:"ytp-cued-thumbnail-overlay-image",X:{style:"{{background}}"}},{G:"span",N:"ytp-upnext-top",W:[{G:"span",N:"ytp-upnext-header",ra:"Pr\u00f3ximo"},{G:"span",N:"ytp-upnext-title",ra:"{{title}}"},{G:"span",N:"ytp-upnext-author",ra:"{{author}}"}]},{G:"a",N:"ytp-upnext-autoplay-icon",X:{role:"button",href:"{{url}}","aria-label":"Reproduzir pr\u00f3ximo v\u00eddeo"},W:[{G:"svg",X:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},W:[{G:"circle",N:"ytp-svg-autoplay-circle",X:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{G:"circle",N:"ytp-svg-autoplay-ring",X:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{G:"path",N:"ytp-svg-fill",X:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{G:"span",N:"ytp-upnext-bottom",W:[{G:"span",N:"ytp-upnext-cancel"},{G:"span",N:"ytp-upnext-paused",
ra:"Reprodu\u00e7\u00e3o autom\u00e1tica pausada"}]}]});this.api=a;this.cancelButton=null;this.D=this.Da("ytp-svg-autoplay-ring");this.B=this.notification=this.j=this.suggestion=null;this.C=new g.Ip(this.hF,5E3,this);this.u=0;var b=this.Da("ytp-upnext-cancel");this.cancelButton=new g.V({G:"button",Ia:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:"0","aria-label":"Cancelar reprodu\u00e7\u00e3o autom\u00e1tica"},ra:"Cancelar"});g.J(this,this.cancelButton);this.cancelButton.Ra("click",this.c_,
this);this.cancelButton.Ga(b);this.cancelButton&&this.api.sb(this.cancelButton.element,this,115129);g.J(this,this.C);this.api.sb(this.element,this,18788);b=this.Da("ytp-upnext-autoplay-icon");this.S(b,"click",this.d_);this.api.sb(b,this,115130);this.KQ();this.S(a,"autonavvisibility",this.KQ);this.S(a,"mdxnowautoplaying",this.I6);this.S(a,"mdxautoplaycanceled",this.J6);g.Up(this.element,"ytp-upnext-mobile",this.api.V().u)},Egb=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.jQ;return-1===a||void 0===a?8E3:a}return 0<=a.api.Zr()?a.api.Zr():g.wJ(a.api.V().experiments,"autoplay_time")||1E4},Fgb=function(a,b){b=Egb(a,b);
var c=Math,d=c.min;var e=(0,g.QA)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.D.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Hk()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Hk()&&a.j.start()},g6=function(a){e6.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.V({G:"div",N:"ytp-suggestion-panel",W:[{G:"div",Ia:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],ra:"Mais v\u00eddeos"}]});this.J=new g.V({G:"div",N:"ytp-suggestions-container"});this.videos=[];this.B=null;this.D=this.I=!1;this.u=new c6(this.player);g.J(this,this.u);this.u.Ga(this.element);a.getVideoData().Fe?this.j=this.u:(this.j=new f6(a),g.uS(this.player,this.j.element,4),g.J(this,this.j));this.overlay=new g.V({G:"div",
N:"ytp-autonav-overlay-cancelled-state"});g.J(this,this.overlay);this.overlay.Ga(this.element);this.C=new g.aI(this);g.J(this,this.C);g.J(this,this.table);this.table.Ga(this.element);this.table.show();g.J(this,this.J);this.J.Ga(this.table.element);this.hide()},h6=function(a){var b=a.Cf();
b!==a.D&&(a.D=b,a.player.ma("autonavvisibility"),a.D?(a.u!==a.j&&a.u.hide(),a.table.hide()):(a.u!==a.j&&a.u.show(),a.table.show()))},i6=function(a,b){g.V.call(this,{G:"button",
Ia:["ytp-watch-on-youtube-button","ytp-button"],ra:"{{content}}"});this.F=a;this.buttonType=this.buttonType=b;b=this.F.getVideoData();if(a.K("embeds_enable_server_driven_watch_again_on_youtube")){var c,d;if(c=(a=null==(c=b.jd)?void 0:null==(d=c.playerOverlays)?void 0:d.playerOverlayRenderer)&&g.S(a.watchOnYoutubeButton,g.kKa))this.j=c}if(this.j)this.update({content:this.j.title}),this.F.ag(this.element,this),this.F.pg(this.element,this.j.trackingParams||null);else{switch(this.buttonType){case 1:c=
"Assista outra vez no YouTube";d=156915;break;case 2:c="Continue assistindo no YouTube";d=156942;break;default:c="Continue assistindo no YouTube",d=156942}this.update({content:c});this.F.sb(this.element,this,d)}2===this.buttonType&&g.Qp(this.element,"ytp-continue-watching-button");this.Ra("click",this.onClick);g.xQ(this,!0)},j6=function(a,b){e6.call(this,a,"embeds-lite-endscreen");
this.F=a;this.j=b;this.F.sb(this.element,this,156943);this.watchButton=new i6(a,2);g.J(this,this.watchButton);this.watchButton.Ga(this.element);this.hide()},Ggb=function(a){e6.call(this,a,"subscribecard-endscreen");
this.j=new g.V({G:"div",N:"ytp-subscribe-card",W:[{G:"img",N:"ytp-author-image",X:{src:"{{profilePicture}}"}},{G:"div",N:"ytp-subscribe-card-right",W:[{G:"div",N:"ytp-author-name",ra:"{{author}}"},{G:"div",N:"html5-subscribe-button-container"}]}]});g.J(this,this.j);this.j.Ga(this.element);var b=a.getVideoData();this.subscribeButton=new g.hU("Inscreva-se",null,"Cancelar assinatura",null,!0,!1,b.bk,b.subscribed,"trailer-endscreen",null,a);g.J(this,this.subscribeButton);this.subscribeButton.Ga(this.j.Da("html5-subscribe-button-container"));
this.S(a,"videodatachange",this.Qa);this.Qa();this.hide()},k6=function(a){var b=a.V(),c=g.dI||g.tK?{style:"will-change: opacity"}:void 0,d=b.C,e=["ytp-videowall-still"];
b.u&&e.push("ytp-videowall-show-text");g.V.call(this,{G:"a",Ia:e,X:{href:"{{url}}",target:d?b.ea:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},W:[{G:"div",N:"ytp-videowall-still-image",X:{style:"{{background}}"}},{G:"span",N:"ytp-videowall-still-info",X:{"aria-hidden":"true"},W:[{G:"span",N:"ytp-videowall-still-info-bg",W:[{G:"span",N:"ytp-videowall-still-info-content",X:c,W:[{G:"span",N:"ytp-videowall-still-info-title",ra:"{{title}}"},
{G:"span",N:"ytp-videowall-still-info-author",ra:"{{author_and_views}}"},{G:"span",N:"ytp-videowall-still-info-live",ra:"Ao vivo"},{G:"span",N:"ytp-videowall-still-info-duration",ra:"{{duration}}"}]}]}]},{G:"span",Ia:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},W:[{G:"span",N:"ytp-videowall-still-listlabel-icon"},"Playlist",{G:"span",N:"ytp-videowall-still-listlabel-length",W:[" (",{G:"span",ra:"{{playlist_length}}"},")"]}]},{G:"span",Ia:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},W:[{G:"span",N:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{G:"span",N:"ytp-videowall-still-listlabel-length",ra:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.j=new g.aI(this);g.J(this,this.j);this.Ra("click",this.onClick);this.Ra("keypress",this.onKeyPress);this.j.S(a,"videodatachange",this.onVideoDataChange);a.ag(this.element,this);this.onVideoDataChange()},l6=function(a){e6.call(this,a,"videowall-endscreen");
var b=this;this.F=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.D=this.J=!1;this.T=null;this.u=new g.aI(this);g.J(this,this.u);this.I=new g.Ip(function(){g.Qp(b.element,"ytp-show-tiles")},0);
g.J(this,this.I);var c=new g.V({G:"button",Ia:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":"Anterior"},W:[g.CQ()]});g.J(this,c);c.Ga(this.element);c.Ra("click",this.h_,this);this.table=new g.uQ({G:"div",N:"ytp-endscreen-content"});g.J(this,this.table);this.table.Ga(this.element);c=new g.V({G:"button",Ia:["ytp-button","ytp-endscreen-next"],X:{"aria-label":"Pr\u00f3ximo"},W:[g.DQ()]});g.J(this,c);c.Ga(this.element);c.Ra("click",this.g_,this);a.getVideoData().Fe?this.j=new c6(a,!0):this.j=
new f6(a);g.J(this,this.j);g.uS(this.player,this.j.element,4);a.sb(this.element,this,158789);this.hide()},m6=function(a){return g.vS(a.player)&&a.YA()&&!a.C},n6=function(a){var b=a.Cf();
b!==a.J&&(a.J=b,a.player.ma("autonavvisibility"))},o6=function(a){e6.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new i6(a,1);g.J(this,this.watchButton);this.watchButton.Ga(this.element);g.c8a(a)&&(this.j=new g.Y2(a,g.eS(a)),g.J(this,this.j),this.u=new g.V({G:"div",Ia:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],X:{tabIndex:"-1"},W:[this.j]}),g.J(this,this.u),this.j.Ga(this.u.element),this.u.Ga(this.element));a.sb(this.element,this,156914);this.hide()},Kgb=function(a){g.sT.call(this,a);
var b=this;this.endScreen=null;this.u=this.j=this.B=this.C=!1;this.listeners=new g.aI(this);g.J(this,this.listeners);var c=a.V(),d=a.getVideoData();d=d&&0!==d.endSeconds;if(g.wz(g.MK(c))&&d&&!g.rS(a))this.u=!0,this.endScreen=new j6(a,g.eS(a));else{var e;(c.K("shorts_mode_to_player_api")?a.Ub():null==(e=g.eS(a))?0:e.Ub())?this.endScreen=new o6(a):Hgb(a)?(this.C=!0,Igb(this),this.j?this.endScreen=new g6(a):this.endScreen=new l6(a)):c.Qg?this.endScreen=new Ggb(a):this.endScreen=new e6(a)}g.J(this,this.endScreen);
g.uS(a,this.endScreen.element,4);Jgb(this);this.listeners.S(a,"videodatachange",this.onVideoDataChange,this);this.listeners.S(a,g.iE("endscreen"),function(f){b.onCueRangeEnter(f)});
this.listeners.S(a,g.jE("endscreen"),function(f){b.onCueRangeExit(f)})},Igb=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.lm&&a.B===b.Fe)return!1;a.j=b.lm;a.B=b.Fe;return!0},Hgb=function(a){a=a.V();
return a.wd&&!a.Qg},Jgb=function(a){a.player.lf("endscreen");
var b=a.player.getVideoData();b=new g.gE(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.gE(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.Ge([b,c])};
g.VV.prototype.Qz=g.ba(36,function(a){this.fO!==a&&(this.fO=a,this.ll())});
g.KU.prototype.Tq=g.ba(35,function(a){this.u!==a&&(this.u=a,this.Qa())});
g.VV.prototype.Tq=g.ba(34,function(a){this.shareButton&&this.shareButton.Tq(a)});
g.GU.prototype.Sq=g.ba(33,function(a){this.u!==a&&(this.u=a,this.Qa())});
g.VV.prototype.Sq=g.ba(32,function(a){this.overflowButton&&this.overflowButton.Sq(a)});
g.ZT.prototype.PD=g.ba(31,function(a){this.gO!==a&&(this.gO=a,this.wp())});
g.nS.prototype.Zr=g.ba(5,function(){return this.app.Zr()});
g.xZ.prototype.Zr=g.ba(4,function(){return this.getVideoData().VR});g.x(b6,g.V);b6.prototype.select=function(){this.F.Kn(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.tB||void 0)&&this.F.qb(this.element)};
b6.prototype.onClick=function(a){g.OT(a,this.F,this.j,this.suggestion.sessionData||void 0)&&this.select()};
b6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.UO(a)||(this.select(),g.VO(a))}};g.x(c6,g.V);g.k=c6.prototype;g.k.zE=function(a){this.suggestion!==a&&(this.suggestion=a,a6(this.j,a),this.playButton.updateValue("url",this.suggestion.Bk()),d6(this))};
g.k.Hk=function(){return 0<this.B};
g.k.Yz=function(){this.Hk()||(this.B=Date.now(),Agb(this),zgb(this.F,Cgb(this)),g.Up(this.F.getRootNode(),"countdown-running",this.Hk()))};
g.k.Ov=function(){this.Yq();Agb(this);var a=this.j.Da("ytp-autonav-endscreen-upnext-header");a&&g.mf(a,"Pr\u00f3ximo")};
g.k.Yq=function(){this.Hk()&&(this.C.stop(),this.B=0)};
g.k.select=function(a){this.F.nextVideo(!1,void 0===a?!1:a);this.Yq()};
g.k.JQ=function(a){g.OT(a,this.F)&&(a.currentTarget===this.playButton.element?this.F.qb(this.playButton.element):a.currentTarget===this.j.Da("ytp-autonav-endscreen-link-container")&&(a=this.j.Da("ytp-autonav-endscreen-link-container"),this.F.Va(a,!0),this.F.qb(a)),this.select())};
g.k.b_=function(){this.F.qb(this.cancelButton.element);g.pS(this.F,!0);this.D&&this.F.Na("innertubeCommand",this.D)};
g.k.onVideoDataChange=function(a,b){var c;this.D=null==(c=b.v1)?void 0:c.command};
g.k.V5=function(a){if(Dgb(this)){var b=this.F.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.mR(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.mR(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.mR(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.mR(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.mR(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.mR(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.Up(this.element,"ytp-w2w-animate",!0)}};
g.k.a_=function(a){this.F.K("web_autonav_color_transition")&&2!==a&&g.Up(this.element,"ytp-w2w-animate",!1)};
g.k.IQ=function(){var a=this.F.Cf();this.I&&this.zb!==a&&g.xQ(this,a);d6(this);this.F.Va(this.container.element,a);this.F.Va(this.cancelButton.element,a);this.F.Va(this.j.Da("ytp-autonav-endscreen-link-container"),a);this.F.Va(this.playButton.element,a)};
g.k.Xg=function(a){return 400>a.width||459>a.height};g.x(e6,g.V);g.k=e6.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.YA=function(){return!1};
g.k.Cf=function(){return!1};
g.k.dV=function(){return!1};g.x(f6,g.V);g.k=f6.prototype;g.k.hF=function(){this.notification&&(this.C.stop(),this.Hc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.k.zE=function(a){this.suggestion=a;a6(this,a,"hqdefault.jpg")};
g.k.KQ=function(){g.xQ(this,this.api.Cf());this.api.Va(this.element,this.api.Cf());this.api.Va(this.Da("ytp-upnext-autoplay-icon"),this.api.Cf());this.cancelButton&&this.api.Va(this.cancelButton.element,this.api.Cf())};
g.k.R6=function(){window.focus();this.hF()};
g.k.Yz=function(a){var b=this;this.Hk()||(g.yC("a11y-announce","Pr\u00f3ximo "+this.suggestion.title),this.u=(0,g.QA)(),this.j=new g.Ip(function(){Fgb(b,a)},25),Fgb(this,a),zgb(this.api,Egb(this,a)));
g.Sp(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.V.prototype.hide.call(this)};
g.k.Hk=function(){return!!this.j};
g.k.Ov=function(){this.Yq();this.u=(0,g.QA)();Fgb(this);g.Qp(this.element,"ytp-upnext-autoplay-paused")};
g.k.Yq=function(){this.Hk()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.V().K("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.hF(),this.notification=new Notification("Pr\u00f3ximo",{body:this.suggestion.title,icon:this.suggestion.xg()}),this.B=this.S(this.notification,"click",this.R6),this.C.start())}this.Yq();this.api.nextVideo(!1,a)};
g.k.d_=function(a){!g.lf(this.cancelButton.element,g.SO(a))&&g.OT(a,this.api)&&(this.api.Cf()&&this.api.qb(this.Da("ytp-upnext-autoplay-icon")),this.select())};
g.k.c_=function(){this.api.Cf()&&this.cancelButton&&this.api.qb(this.cancelButton.element);g.pS(this.api,!0)};
g.k.I6=function(a){this.api.getPresentingPlayerType();this.show();this.Yz(a)};
g.k.J6=function(){this.api.getPresentingPlayerType();this.Yq();this.hide()};
g.k.qa=function(){this.Yq();this.hF();g.V.prototype.qa.call(this)};g.x(g6,e6);g.k=g6.prototype;g.k.create=function(){e6.prototype.create.call(this);this.C.S(this.player,"appresize",this.BA);this.C.S(this.player,"onVideoAreaChange",this.BA);this.C.S(this.player,"videodatachange",this.onVideoDataChange);this.C.S(this.player,"autonavchange",this.LQ);this.C.S(this.player,"autonavcancel",this.e_);this.onVideoDataChange()};
g.k.show=function(){e6.prototype.show.call(this);(this.I||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.pS(this.player,!1);g.vS(this.player)&&this.YA()&&!this.B?(h6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.Yz():3===this.videoData.autonavState&&this.j.Ov()):(g.pS(this.player,!0),h6(this));this.BA()};
g.k.hide=function(){e6.prototype.hide.call(this);this.j.Ov();h6(this)};
g.k.BA=function(){var a=this.player.Ak(!0,this.player.isFullscreen());h6(this);d6(this.u);g.Up(this.element,"ytp-autonav-cancelled-small-mode",this.Xg(a));g.Up(this.element,"ytp-autonav-cancelled-tiny-mode",this.sG(a));g.Up(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Rm(this.overlay.element,{width:a.width+"px"});if(!this.D)for(a=0;a<this.videos.length;a++)g.Up(this.videos[a].element,"ytp-suggestion-card-with-margin",1===a%2)};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length||this.player.K("web_player_autonav_empty_suggestions_fix")){var b=g.HM(this.videoData);b&&(this.j.zE(b),this.j!==this.u&&this.u.zE(b))}if(a&&a.length)for(b=0;b<Lgb.length;++b){var c=Lgb[b];if(a&&a[c]){this.videos[b]=new b6(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,a6(d,c));g.J(this,this.videos[b]);this.videos[b].Ga(this.J.element)}}this.BA()}};
g.k.LQ=function(a){1===a?(this.I=!1,this.B=this.videoData.clientPlaybackNonce,this.j.Yq(),this.zb&&this.BA()):(this.I=!0,this.Cf()&&(2===a?this.j.Yz():3===a&&this.j.Ov()))};
g.k.e_=function(a){a?this.LQ(1):(this.B=null,this.I=!1)};
g.k.YA=function(){return 1!==this.videoData.autonavState};
g.k.Xg=function(a){return(910>a.width||459>a.height)&&!this.sG(a)&&!(400>=a.width||360>=a.height)};
g.k.sG=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Cf=function(){return this.zb&&g.vS(this.player)&&this.YA()&&!this.B};
var Lgb=[1,3,2,4];g.x(i6,g.V);g.k=i6.prototype;g.k.onClick=function(a){this.F.K("web_player_log_click_before_generating_ve_conversion_params")&&this.F.qb(this.element);this.j?this.F.Na("innertubeCommand",g.S(this.j.onTap,g.qQ)):g.PT(this.getVideoUrl(),this.F,a);this.F.K("web_player_log_click_before_generating_ve_conversion_params")||this.F.qb(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.F.getVideoUrl(a,!1,!1,!0);var b=this.F.V();if(g.vK(b)||g.EK(b)){var c={};b.Fa&&g.vK(b)&&g.VR(c,b.loaderUrl);g.vK(b)&&g.cS(this.F,"addEmbedsConversionTrackingParams",[c]);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.UR(c,b);a=g.Xi(a,c)}return a};
g.k.Va=function(){this.F.Va(this.element,this.zb&&this.ea)};
g.k.show=function(){g.V.prototype.show.call(this);this.Va()};
g.k.hide=function(){g.V.prototype.hide.call(this);this.Va()};
g.k.ac=function(a){g.V.prototype.ac.call(this,a);this.Va()};g.x(j6,e6);j6.prototype.show=function(){3!==this.player.getPlayerState()&&(e6.prototype.show.call(this),this.j.Qz(!0),this.j.Tq(!0),this.F.V().jm||this.j.Sq(!0),this.F.Va(this.element,!0),this.watchButton.ac(!0))};
j6.prototype.hide=function(){e6.prototype.hide.call(this);this.j.Qz(!1);this.j.Tq(!1);this.j.Sq(!1);this.F.Va(this.element,!1);this.watchButton.ac(!1)};g.x(Ggb,e6);Ggb.prototype.Qa=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.bk;var b=this.subscribeButton;a.subscribed?b.j():b.u()};g.x(k6,g.V);k6.prototype.select=function(){this.api.Kn(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.tB||void 0)&&this.api.qb(this.element)};
k6.prototype.onClick=function(a){if(g.vK(this.api.V())&&this.api.K("web_player_log_click_before_generating_ve_conversion_params")){this.api.qb(this.element);var b=this.suggestion.Bk(),c={};g.uJa(this.api,c,"emb_rel_end");b=g.Xi(b,c);g.PT(b,this.api,a)}else g.OT(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
k6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.UO(a)||(this.select(),g.VO(a))}};
k6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.V();this.u=a.rd?!1:b.C};g.x(l6,e6);g.k=l6.prototype;g.k.create=function(){e6.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Dp();this.u.S(this.player,"appresize",this.Dp);this.u.S(this.player,"onVideoAreaChange",this.Dp);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.u.S(this.player,"autonavchange",this.bJ);this.u.S(this.player,"autonavcancel",this.f_);a=this.videoData.autonavState;a!==this.T&&this.bJ(a);this.u.S(this.element,"transitionend",this.f8)};
g.k.destroy=function(){g.Rz(this.u);g.ib(this.stills);this.stills=[];e6.prototype.destroy.call(this);g.Sp(this.element,"ytp-show-tiles");this.I.stop();this.T=this.videoData.autonavState};
g.k.YA=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.zb;e6.prototype.show.call(this);g.Sp(this.element,"ytp-show-tiles");this.player.V().u?g.Kp(this.I):this.I.start();(this.D||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.pS(this.player,!1);m6(this)?(n6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.Yz():3===this.videoData.autonavState&&this.j.Ov()):(g.pS(this.player,!0),n6(this));a!==this.zb&&this.player.Va(this.element,!0)};
g.k.hide=function(){var a=this.zb;e6.prototype.hide.call(this);this.j.Ov();n6(this);a!==this.zb&&this.player.Va(this.element,!1)};
g.k.f8=function(a){g.SO(a)===this.element&&this.Dp()};
g.k.Dp=function(){var a,b,c,d;var e=(null==(a=this.videoData)?0:null==(b=a.suggestions)?0:b.length)?null==(c=this.videoData)?void 0:c.suggestions:[null==(d=this.videoData)?void 0:g.HM(d)];if(e.length){g.Qp(this.element,"ytp-endscreen-paginate");var f=this.F.Ak(!0,this.F.isFullscreen());if(a=g.eS(this.F))a=a.zg()?48:32,f.width-=2*a;var h=f.width/f.height;d=96/54;b=a=2;var l=Math.max(f.width/96,2),m=Math.max(f.height/54,2);c=e.length;var n=Math.pow(2,2);var p=c*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-
n;for(p-=n;0<p&&(a<l||b<m);){var q=a/2,t=b/2,v=a<=l-2&&p>=t*n,z=b<=m-2&&p>=q*n;if((q+1)/t*d/h>h/(q/(t+1)*d)&&z)p-=q*n,b+=2;else if(v)p-=t*n,a+=2;else if(z)p-=q*n,b+=2;else break}d=!1;p>=3*n&&6>=c*n-p&&(4<=b||4<=a)&&(d=!0);n=96*a;p=54*b;h=n/p<h?f.height/p:f.width/n;h=Math.min(h,2);n=Math.floor(Math.min(f.width,n*h));p=Math.floor(Math.min(f.height,p*h));f=this.table.element;f.ariaLive="polite";g.an(f,n,p);g.Rm(f,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.zE(g.HM(this.videoData));this.j instanceof
c6&&d6(this.j);g.Up(this.element,"ytp-endscreen-takeover",m6(this));n6(this);n+=4;p+=4;h=0;f.ariaBusy="true";for(l=0;l<a;l++)for(m=0;m<b;m++)if(q=h,v=0,d&&l>=a-2&&m>=b-2?v=1:0===m%2&&0===l%2&&(2>m&&2>l?0===m&&0===l&&(v=2):v=2),q=g.qe(q+this.B,c),0!==v){t=this.stills[h];t||(t=new k6(this.player),this.stills[h]=t,f.appendChild(t.element));z=Math.floor(p*m/b);var B=Math.floor(n*l/a),G=Math.floor(p*(m+v)/b)-z-4,O=Math.floor(n*(l+v)/a)-B-4;g.Xm(t.element,B,z);g.an(t.element,O,G);g.Rm(t.element,"transitionDelay",
(m+l)/20+"s");g.Up(t.element,"ytp-videowall-still-mini",1===v);g.Up(t.element,"ytp-videowall-still-large",2<v);v=Math.max(O,G);g.Up(t.element,"ytp-videowall-still-round-large",256<=v);g.Up(t.element,"ytp-videowall-still-round-medium",96<v&&256>v);g.Up(t.element,"ytp-videowall-still-round-small",96>=v);q=e[q];t.suggestion!==q&&(t.suggestion=q,v=t.api.V(),z=g.Pp(t.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",a6(t,q,z),g.vK(v)&&!t.api.K("web_player_log_click_before_generating_ve_conversion_params")&&
(z=q.Bk(),B={},v.Fa&&g.VR(B,v.loaderUrl),g.cS(t.api,"addEmbedsConversionTrackingParams",[B]),z=g.Xi(z,g.UR(B,"emb_rel_end")),t.updateValue("url",z)),(q=(q=q.sessionData)&&q.itct)&&t.api.pg(t.element,q));h++}f.ariaBusy="false";g.Up(this.element,"ytp-endscreen-paginate",h<c);for(e=this.stills.length-1;e>=h;e--)a=this.stills[e],g.jf(a.element),g.gb(a);this.stills.length=h}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.Dp())};
g.k.g_=function(){this.B+=this.stills.length;this.Dp()};
g.k.h_=function(){this.B-=this.stills.length;this.Dp()};
g.k.dV=function(){return this.j.Hk()};
g.k.bJ=function(a){1===a?(this.D=!1,this.C=this.videoData.clientPlaybackNonce,this.j.Yq(),this.zb&&this.Dp()):(this.D=!0,this.zb&&m6(this)&&(2===a?this.j.Yz():3===a&&this.j.Ov()))};
g.k.f_=function(a){if(a){for(a=0;a<this.stills.length;a++)this.F.Va(this.stills[a].element,!0);this.bJ(1)}else this.C=null,this.D=!1;this.Dp()};
g.k.Cf=function(){return this.zb&&m6(this)};g.x(o6,e6);o6.prototype.show=function(){if(3!==this.player.getPlayerState()){e6.prototype.show.call(this);var a=this.u;if(a){var b=0<this.j.suggestionData.length;g.Up(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;null==(c=g.eS(this.player))||c.PD(!0);this.player.Va(this.element,!0);this.watchButton.ac(!0)}};
o6.prototype.hide=function(){e6.prototype.hide.call(this);var a;null==(a=g.eS(this.player))||a.PD(!1);this.player.Va(this.element,!1);this.watchButton.ac(!1)};g.x(Kgb,g.sT);g.k=Kgb.prototype;g.k.jw=function(){var a;if((this.player.V().K("shorts_mode_to_player_api")?this.player.Ub():null==(a=g.eS(this.player))?0:a.Ub())||this.u)return!0;a=this.player.getVideoData();var b;var c=!!((null==a?0:g.HM(a))||(null==a?0:null==(b=a.suggestions)?0:b.length));b=!Hgb(this.player)||c;c=a.aj||g.EK(a.u);var d=this.player.FB();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Cf=function(){return this.endScreen.Cf()};
g.k.J4=function(){return this.Cf()?this.endScreen.dV():!1};
g.k.qa=function(){this.player.lf("endscreen");g.sT.prototype.qa.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.wb().jf.get("heartbeat"),d=g.HM(a);!d||b.videoId!==d.videoId||a.jY?(this.player.Kn(b.videoId,void 0,void 0,!0,!0,b),c&&c.zG("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.sT.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.sT.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.jw()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){Jgb(this);this.C&&Igb(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new g6(this.player):this.endScreen=new l6(this.player),g.J(this,this.endScreen),g.uS(this.player,this.endScreen.element,4))};g.rT("endscreen",Kgb);})(_yt_player);
