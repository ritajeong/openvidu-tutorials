(function(e){function t(t){for(var s,o,a=t[0],c=t[1],u=t[2],l=0,p=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},i={app:0},r=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"main-container"}},[e.session?e._e():n("div",{attrs:{id:"join"}},[e._m(0),n("div",{staticClass:"jumbotron vertical-center",attrs:{id:"join-dialog"}},[n("h1",[e._v("Join a video session")]),n("div",{staticClass:"form-group"},[n("p",[n("label",[e._v("Participant")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.myUserName,expression:"myUserName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.myUserName},on:{input:function(t){t.target.composing||(e.myUserName=t.target.value)}}})]),n("p",[n("label",[e._v("Session")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mySessionId,expression:"mySessionId"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.mySessionId},on:{input:function(t){t.target.composing||(e.mySessionId=t.target.value)}}})]),n("p",{staticClass:"text-center"},[n("button",{staticClass:"btn btn-lg btn-success",on:{click:function(t){return e.joinSession()}}},[e._v("Join!")])])])])]),e.session?n("div",{attrs:{id:"session"}},[n("div",{attrs:{id:"session-header"}},[n("h1",{attrs:{id:"session-title"}},[e._v(e._s(e.mySessionId))]),n("input",{staticClass:"btn btn-large btn-danger",attrs:{type:"button",id:"buttonLeaveSession",value:"Leave session"},on:{click:e.leaveSession}})]),n("div",{staticClass:"col-md-6",attrs:{id:"main-video"}},[n("user-video",{attrs:{"stream-manager":e.mainStreamManager}})],1),n("div",{staticClass:"col-md-6",attrs:{id:"video-container"}},[n("user-video",{attrs:{"stream-manager":e.publisher},nativeOn:{click:function(t){return e.updateMainVideoStreamManager(e.publisher)}}}),e._l(e.subscribers,(function(t){return n("user-video",{key:t.stream.connection.connectionId,attrs:{"stream-manager":t},nativeOn:{click:function(n){return e.updateMainVideoStreamManager(t)}}})}))],2)]):e._e()])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"img-div"}},[n("img",{attrs:{src:"resources/images/openvidu_grey_bg_transp_cropped.png"}})])}],o=(n("a434"),n("d3b7"),n("99af"),n("bc3a")),a=n.n(o),c=n("3d9c"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.streamManager?n("div",[n("ov-video",{attrs:{"stream-manager":e.streamManager}}),n("div",[n("p",[e._v(e._s(e.clientData))])])],1):e._e()},d=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("video",{attrs:{autoplay:""}})},p=[],m={name:"OvVideo",props:{streamManager:Object},mounted:function(){this.streamManager.addVideoElement(this.$el)}},v=m,f=n("2877"),h=Object(f["a"])(v,l,p,!1,null,null,null),b=h.exports,g={name:"UserVideo",components:{OvVideo:b},props:{streamManager:Object},computed:{clientData:function(){var e=this.getConnectionData(),t=e.clientData;return t}},methods:{getConnectionData:function(){var e=this.streamManager.stream.connection;return JSON.parse(e.data)}}},y=g,S=Object(f["a"])(y,u,d,!1,null,null,null),O=S.exports;a.a.defaults.headers.post["Content-Type"]="application/json";var _="https://"+location.hostname+":4443",w="MY_SECRET",M={name:"App",components:{UserVideo:O},data:function(){return{OV:void 0,session:void 0,mainStreamManager:void 0,publisher:void 0,subscribers:[],mySessionId:"SessionA",myUserName:"Participant"+Math.floor(100*Math.random())}},methods:{joinSession:function(){var e=this;this.OV=new c["OpenVidu"],this.session=this.OV.initSession(),this.session.on("streamCreated",(function(t){var n=t.stream,s=e.session.subscribe(n);e.subscribers.push(s)})),this.session.on("streamDestroyed",(function(t){var n=t.stream,s=e.subscribers.indexOf(n.streamManager,0);s>=0&&e.subscribers.splice(s,1)})),this.session.on("exception",(function(e){var t=e.exception;console.warn(t)})),this.getToken(this.mySessionId).then((function(t){e.session.connect(t,{clientData:e.myUserName}).then((function(){var t=e.OV.initPublisher(void 0,{audioSource:void 0,videoSource:void 0,publishAudio:!0,publishVideo:!0,resolution:"640x480",frameRate:30,insertMode:"APPEND",mirror:!1});e.mainStreamManager=t,e.publisher=t,e.session.publish(e.publisher)})).catch((function(e){console.log("There was an error connecting to the session:",e.code,e.message)}))})),window.addEventListener("beforeunload",this.leaveSession)},leaveSession:function(){this.session&&this.session.disconnect(),this.session=void 0,this.mainStreamManager=void 0,this.publisher=void 0,this.subscribers=[],this.OV=void 0,window.removeEventListener("beforeunload",this.leaveSession)},updateMainVideoStreamManager:function(e){this.mainStreamManager!==e&&(this.mainStreamManager=e)},getToken:function(e){var t=this;return this.createSession(e).then((function(e){return t.createToken(e)}))},createSession:function(e){return new Promise((function(t,n){a.a.post("".concat(_,"/openvidu/api/sessions"),JSON.stringify({customSessionId:e}),{auth:{username:"OPENVIDUAPP",password:w}}).then((function(e){return e.data})).then((function(e){return t(e.id)})).catch((function(s){409===s.response.status?t(e):(console.warn("No connection to OpenVidu Server. This may be a certificate error at ".concat(_)),window.confirm("No connection to OpenVidu Server. This may be a certificate error at ".concat(_,'\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "').concat(_,'"'))&&location.assign("".concat(_,"/accept-certificate")),n(s.response))}))}))},createToken:function(e){return new Promise((function(t,n){a.a.post("".concat(_,"/openvidu/api/sessions/").concat(e,"/connection"),{},{auth:{username:"OPENVIDUAPP",password:w}}).then((function(e){return e.data})).then((function(e){return t(e.token)})).catch((function(e){return n(e.response)}))}))}}},P=M,j=Object(f["a"])(P,i,r,!1,null,null,null),V=j.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(V)}}).$mount("#app")}});
//# sourceMappingURL=app.42185eaf.js.map