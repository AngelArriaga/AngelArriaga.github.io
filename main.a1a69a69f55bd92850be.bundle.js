webpackJsonp([1],{0:function(n,t,i){n.exports=i("cDNt")},cDNt:function(n,t,i){"use strict";function l(n){return x._17(0,[(n()(),x._4(0,0,null,null,10,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),x._16(-1,null,["\n  "])),(n()(),x._4(2,0,null,null,1,"div",[["class","panel-heading"]],null,[[null,"click"]],function(n,t,i){var l=!0,e=n.component;if("click"===t){l=!1!==e.seekTo(n.context.$implicit.start.value)&&l}return l},null,null)),(n()(),x._16(3,null,["\n    ","\n  "])),(n()(),x._16(-1,null,["\n  "])),(n()(),x._4(5,0,null,null,1,"div",[["class","panel-body"]],null,null,null,null,null)),(n()(),x._16(6,null,["\n    ","\n    \n  "])),(n()(),x._16(-1,null,["\n  "])),(n()(),x._4(8,0,null,null,1,"div",[["class","panel-footer"]],null,null,null,null,null)),(n()(),x._16(9,null,["\n    start:","\n    end:","\n  "])),(n()(),x._16(-1,null,["\n"]))],null,function(n,t){n(t,0,0,t.context.$implicit.isActive?"panel panel-default active":"panel panel-default"),n(t,3,0,t.context.$implicit.id),n(t,6,0,t.context.$implicit.text),n(t,9,0,null==t.context.$implicit.start?null:t.context.$implicit.start.display,null==t.context.$implicit.end?null:t.context.$implicit.end.display)})}function e(n){return x._17(0,[(n()(),x.Y(16777216,null,null,1,null,l)),x._2(1,802816,null,0,k.c,[x.N,x.K,x.t],{ngForOf:[0,"ngForOf"]},null),(n()(),x._16(-1,null,["\n"]))],function(n,t){n(t,1,0,t.component.captions)},null)}function o(n){return x._17(0,[(n()(),x._4(0,0,null,null,1,"app-captions",[],null,null,null,e,M)),x._2(1,245760,null,0,P,[v],null,null)],function(n,t){n(t,1,0)},null)}function u(n){return A._17(0,[(n()(),A._4(0,0,null,null,1,"app-captions",[],null,null,null,e,M)),A._2(1,245760,null,0,P,[v],null,null)],function(n,t){n(t,1,0)},null)}function s(n){return A._17(0,[(n()(),A._4(0,0,null,null,7,"div",[["class","toggle"]],null,null,null,null,null)),(n()(),A._16(-1,null,["\n  "])),(n()(),A._4(2,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(n,t,i){var l=!0,e=n.component;if("click"===t){l=!1!=(e.captionsVisible=!e.captionsVisible)&&l}return l},null,null)),(n()(),A._16(-1,null,["toggle"])),(n()(),A._16(-1,null,["\n  "])),(n()(),A._4(5,0,null,null,1,"button",[["class","btn btn-info"]],null,null,null,null,null)),(n()(),A._16(6,null,["isPlaying ",""])),(n()(),A._16(7,null,["\n  ","\n  ","\n"])),(n()(),A._16(-1,null,["\n\n"])),(n()(),A._4(9,0,null,null,15,"div",[["id","playerContainer"]],null,null,null,null,null)),(n()(),A._16(-1,null,["\n\n  "])),(n()(),A._4(11,0,null,null,4,"div",[["id","captionSection"]],null,null,null,null,null)),(n()(),A._16(-1,null,["\n    "])),(n()(),A.Y(16777216,null,null,1,null,u)),A._2(14,16384,null,0,j.d,[A.N,A.K],{ngIf:[0,"ngIf"]},null),(n()(),A._16(-1,null,["\n  "])),(n()(),A._16(-1,null,["\n\n  "])),(n()(),A._4(17,0,null,null,6,"div",[["id","playerSection"]],null,null,null,null,null)),(n()(),A._16(-1,null,["\n    "])),(n()(),A._4(19,0,[["playerWrapper",1]],null,3,"div",[["class","rmpPlayerWrapper"]],null,null,null,null,null)),(n()(),A._16(-1,null,["`\n      "])),(n()(),A._4(21,0,null,null,0,"div",[["id","rmpPlayer"]],null,null,null,null,null)),(n()(),A._16(-1,null,["\n    "])),(n()(),A._16(-1,null,["\n  "])),(n()(),A._16(-1,null,["\n\n"])),(n()(),A._16(-1,null,["\n\n\n"]))],function(n,t){n(t,14,0,t.component.captionsVisible)},function(n,t){var i=t.component;n(t,6,0,i.isPlaying),n(t,7,0,i.captionsVisible,i.currentTime)})}function r(n){return A._17(0,[(n()(),A._4(0,0,null,null,1,"app-playercomp",[],null,null,null,s,V)),A._2(1,4440064,null,0,O,[v],null,null)],function(n,t){n(t,1,0)},null)}function c(n){return F._17(0,[(n()(),F._16(-1,null,["\n"])),(n()(),F._4(1,0,null,null,1,"app-playercomp",[],null,null,null,s,V)),F._2(2,4440064,null,0,O,[v],null,null),(n()(),F._16(-1,null,["\n\n\n"]))],function(n,t){n(t,2,0)},null)}function a(n){return F._17(0,[(n()(),F._4(0,0,null,null,1,"app-root",[],null,null,null,c,z)),F._2(1,49152,null,0,d,[],null,null)],null,null)}function p(n){"serviceWorker"in navigator?navigator.serviceWorker.register("/"+n+".js").then(function(n){console.log("[App] Successful service worker registration",n)}).catch(function(n){return console.error("[App] Service worker registration failed",n)}):console.error("[App] Service Worker API is not supported in current browser")}Object.defineProperty(t,"__esModule",{value:!0});var f={production:!0},h=function(){function n(){}return n}(),d=function(){function n(){this.title="app 2"}return n}(),b=[""],_=["#playerContainer[_ngcontent-%COMP%]{padding:10px}#playerContainer[_ngcontent-%COMP%], #toggle[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}#toggle[_ngcontent-%COMP%]{height:10vh}#captionSection[_ngcontent-%COMP%]{width:20vw;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}#playerSection[_ngcontent-%COMP%]{width:80vw;padding:10px;-webkit-box-flex:3;-ms-flex-positive:3;flex-grow:3}"],m=["div.panel.panel-default.active[_ngcontent-%COMP%], div.panel.panel-default.active[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{background-color:#1ed5a3;border:2px solid #000;color:#2325db}div.panel.panel-default.active[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font-weight:700}"],g=i("Dqrr"),y=(i.n(g),i("gvep")),v=(i.n(y),function(){function n(){this.captionSubject=new y.BehaviorSubject(new Array),this.seekSubject=new g.Subject,this.timeSubject=new g.Subject}return n.prototype.subscribeToCaptions=function(){return this.captionSubject.asObservable()},n.prototype.publishToCaptions=function(n){console.log("pushing to subject"),this.captionSubject.next(n)},n.prototype.subscribeToSeek=function(){return this.seekSubject.asObservable()},n.prototype.publishToSeek=function(n){this.seekSubject.next(n)},n.prototype.subscribeToTime=function(){return this.timeSubject.asObservable()},n.prototype.publishToTime=function(n){this.timeSubject.next(n)},n.ctorParameters=function(){return[]},n}()),S=function(){function n(){}return n.prototype.fromMilliToTimeString=function(n,t){var i=t?this.applyTimeCalc(n):n,l=new Date(i);return this.formatTime(l)},n.prototype.applyTimeCalc=function(n){return 1e3*n},n.prototype.formatTime=function(n){var t=n.getUTCHours(),i=n.getUTCMinutes(),l=n.getUTCSeconds(),e=n.getUTCMilliseconds(),o=this.ensurePadded(t),u=this.ensurePadded(i),s=this.ensurePadded(l),r=this.ensureMilliPaddedForDisplay(e);return o+":"+u+":"+s+":"+r},n.prototype.ensurePadded=function(n){return n.toString().length<2?n="0"+n:n},n.prototype.ensureMilliPaddedForDisplay=function(n){var t=n.toString().length;if(t<3){if(1==t){var i="00"+n;return i}var i="0"+n;return i}return n},n}(),T=function(){function n(n){this.isActive=!1,this.text="",this.align="",this.displayState="",this.id="",this.line="",this.lineAlign="",this.position="",this.positionAlign="",this.region="",this.size="",this.snapToLines="",this.vertical="",this.transformData(n)}return n.prototype.isBetween=function(n){return this.start.value<=n&&this.end.value>=n},n.prototype.transformData=function(n){this.assignLocalVariables(n),this.assignCalcValues(n)},n.prototype.assignLocalVariables=function(n){this.origin=n,this.text=n.text,this.align=n.align,this.id=n.id,this.line=n.line,this.lineAlign=n.lineAlign,this.position=n.position,this.positionAlign=n.positionAlign,this.region=n.region,this.size=n.size,this.snapToLines=n.snapToLines,this.vertical=n.vertical},n.prototype.assignCalcValues=function(n){this.start=new w(n.startTime),this.end=new w(n.endTime)},n}(),w=function(){function n(n){this.value=0,this.display="",this.timeUtility=new S,this.resovleTime(n)}return n.prototype.resovleTime=function(n){this.value=this.timeUtility.applyTimeCalc(n),this.display=this.timeUtility.fromMilliToTimeString(n,!0)},n}(),P=function(){function n(n){this.captionService=n,this.captions=new Array,this.initSubscription(),console.log("caption constructor")}return n.prototype.ngOnInit=function(){},n.prototype.initSubscription=function(){var n=this;this.captionSubscription=this.captionService.subscribeToCaptions().subscribe(function(t){n.processSubscriptionData(t)}),this.timeSubscription=this.captionService.subscribeToTime().subscribe(function(t){n.assignSelected(t)})},n.prototype.processSubscriptionData=function(n){n&&(this.captions=n.map(function(n){return new T(n)}))},n.prototype.seekTo=function(n){this.captionService.publishToSeek(n)},n.prototype.assignSelected=function(n){n&&this.captions.forEach(function(t){t.isBetween(n)?t.isActive=!0:t.isActive&&(t.isActive=!1)})},n.prototype.ngOnDestroy=function(){this.captionSubscription.unsubscribe(),this.timeSubscription.unsubscribe()},n.ctorParameters=function(){return[{type:v}]},n}(),x=i("/oeL"),k=i("qbdv"),C=[m],M=x._1({encapsulation:0,styles:C,data:{}}),O=(x.Z("app-captions",P,o,{},{},[]),function(){function n(n){this.captionService=n,this.timeUtlity=new S,this.globalRmpSettings={},this.elementID="rmpPlayer",this.isPlaying=!1,this.currentTime="",this.currentTimeMilli=0,this.captionsVisible=!0}return n.prototype.initSubscription=function(){var n=this;this.seekSubscription=this.captionService.subscribeToSeek().subscribe(function(t){n.seek(t)})},n.prototype.ngOnInit=function(){this.init(),this.initSubscription()},n.prototype.ngAfterViewInit=function(){},n.prototype.init=function(){this.configRmp(),RadiantMP&&(this.rmp=new RadiantMP(this.elementID),this.globalRmpSettings.bitrates={hls:"https://dqwp3xzzbfhtw.cloudfront.net/vod/smil:bbb.smil/playlist.m3u8"},this.rmp.init(this.globalRmpSettings),this.initEvents())},n.prototype.configRmp=function(){this.globalRmpSettings={licenseKey:"Kl8lb2lnMzA3PWRza2QyeWVpP3JvbTVkYXNpczMwZGIwQSVfKg==",delayToFade:3e3,autoHeightMode:!0,skin:"s3",pathToRmpFiles:"assets/radiantmediaplayer-4.5.13",ccFiles:[["en","English","https://www.radiantmediaplayer.com/media/cc.vtt"],["fr","Fran\xe7ais ","https://www.radiantmediaplayer.com/media/cc-fr.vtt","default"]]}},n.prototype.initEvents=function(){var n=this;$("#rmpPlayer").on("texttrackchanged",function(){n.assignCaptions()}),$("#rmpPlayer").on("play",function(){n.updatePlayerState(!0)}),$("#rmpPlayer").on("pause",function(){n.updatePlayerState(!1)}),$("#rmpPlayer").on("timeupdate",function(){n.updateTime()})},n.prototype.updateTime=function(){this.currentTimeMilli=this.rmp.getCurrentTime(),this.currentTime=this.timeUtlity.fromMilliToTimeString(this.currentTimeMilli,!1),this.captionService.publishToTime(this.currentTimeMilli)},n.prototype.updatePlayerState=function(n){this.isPlaying=n},n.prototype.assignCaptions=function(){this.captions=this.rmp.getCaptionsData(),this.captionService.publishToCaptions(this.captions)},n.prototype.seek=function(n){this.rmp.seekTo(n)},n.prototype.ngOnDestroy=function(){this.seekSubscription.unsubscribe()},n.ctorParameters=function(){return[{type:v}]},n}()),A=i("/oeL"),j=i("qbdv"),D=[_],V=A._1({encapsulation:0,styles:D,data:{}}),F=(A.Z("app-playercomp",O,r,{},{},[]),i("/oeL")),L=[b],z=F._1({encapsulation:0,styles:L,data:{}}),I=F.Z("app-root",d,a,{},{},[]),R=i("/oeL"),U=i("qbdv"),W=i("fc+i"),q=R._0(h,[d],function(n){return R._13([R._14(512,R.i,R.W,[[8,[I]],[3,R.i],R.x]),R._14(5120,R.v,R._12,[[3,R.v]]),R._14(4608,U.f,U.e,[R.v]),R._14(4608,R.h,R.h,[]),R._14(5120,R.a,R._5,[]),R._14(5120,R.t,R._10,[]),R._14(5120,R.u,R._11,[]),R._14(4608,W.b,W.s,[U.b]),R._14(6144,R.H,null,[W.b]),R._14(4608,W.e,W.f,[]),R._14(5120,W.c,function(n,t,i,l){return[new W.k(n),new W.o(t),new W.n(i,l)]},[U.b,U.b,U.b,W.e]),R._14(4608,W.d,W.d,[W.c,R.z]),R._14(135680,W.m,W.m,[U.b]),R._14(4608,W.l,W.l,[W.d,W.m]),R._14(6144,R.F,null,[W.l]),R._14(6144,W.p,null,[W.m]),R._14(4608,R.L,R.L,[R.z]),R._14(4608,W.g,W.g,[U.b]),R._14(4608,W.i,W.i,[U.b]),R._14(4608,v,v,[]),R._14(512,U.a,U.a,[]),R._14(1024,R.l,W.q,[]),R._14(1024,R.b,function(n,t){return[W.r(n,t)]},[[2,W.h],[2,R.y]]),R._14(512,R.c,R.c,[[2,R.b]]),R._14(131584,R._3,R._3,[R.z,R.X,R.r,R.l,R.i,R.c]),R._14(2048,R.e,null,[R._3]),R._14(512,R.d,R.d,[R.e]),R._14(512,W.a,W.a,[[3,W.a]]),R._14(512,h,h,[])])}),N=i("/oeL"),E=i("fc+i");f.production&&Object(N.R)(),Object(E.j)().bootstrapModuleFactory(q).then(function(){p("sw-default")})},gFIY:function(n,t){function i(n){return new Promise(function(t,i){i(new Error("Cannot find module '"+n+"'."))})}i.keys=function(){return[]},i.resolve=i,n.exports=i,i.id="gFIY"}},[0]);