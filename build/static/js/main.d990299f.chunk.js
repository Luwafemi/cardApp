(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(49)},29:function(e,t,a){},30:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);a(21),a(22);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),i=(a(29),a(30),a(19)),l=a(6),s=a.n(l),m=a(17),u=a(2),p=a(3),f=a(5),d=a(4),h=a(18),v=a.n(h),b=[];function g(e){return r.a.createElement(r.a.Fragment,null,e.profiles.map((function(e){return r.a.createElement(y,Object.assign({key:e.id},e))})))}var y=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cards",style:{color:"whitesmoke",marginTop:10,marginLeft:10,display:"block"}},r.a.createElement("div",{style:{border:"1px solid white",display:"inline-block"}},r.a.createElement("img",{style:{height:100,width:100},src:e.avatar_url,alt:"image"})),r.a.createElement("div",{style:{display:"inline-block",marginLeft:9}},r.a.createElement("div",{style:{font:"20px "}},e.name," "),r.a.createElement("div",{style:{font:"10px bold"}},e.company))))}}]),a}(r.a.Component),E=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={userName:""},e.handleSubmit=function(){var t=Object(m.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,v.a.get("https://api.github.com/users/".concat(e.state.userName));case 3:n=t.sent,e.props.onSubmit(n.data),e.setState({userName:""});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{marginBottom:30,width:"90%"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-9 col-sm-7 col-md-6 col-lg-6 col-xl-5"},r.a.createElement("form",{onSubmit:this.handleSubmit,action:"",style:{marginTop:20}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-control-sm",type:"text",placeholder:"GitHub username",style:{marginLeft:10,marginBottom:10},required:!0,value:this.state.userName,onChange:function(t){return e.setState({userName:t.target.value})}}),r.a.createElement("button",{style:{marginLeft:10,marginBottom:0},className:"btn btn-success btn-sm"},"Add card"))))))}}]),a}(r.a.Component),w=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={profiles:b},e.addNewProfile=function(t){e.setState((function(e){return{profiles:[].concat(Object(i.a)(e.profiles),[t])}}))},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{color:"white",marginLeft:"2rem",marginTop:10,fontSize:20,fontWeight:900}},"GitHub Cards App"),r.a.createElement(E,{onSubmit:this.addNewProfile}),r.a.createElement(g,{profiles:this.state.profiles}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.d990299f.chunk.js.map