(this["webpackJsonpwheel-of-fortune"]=this["webpackJsonpwheel-of-fortune"]||[]).push([[0],{18:function(t,e,n){t.exports=n(45)},23:function(t,e,n){},24:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),i=n(17),r=n.n(i),o=(n(23),n(1)),l=n(4),c=n(5),u=n(7),p=n(6),d=(n(24),n(3)),h=n.n(d),m=(n(42),function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={name:""},t.handleSubmit=function(e){e.preventDefault();var n={name:t.state.name};""!==t.state.name&&t.props.addElement(n),h.a.post("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/new",n).then((function(t){console.log(t),console.log(t.data)})),t.setState({name:""})},t.handleChange=function(e){t.setState({name:e.target.value})},t}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"addElementForm"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.name}),s.a.createElement("button",{className:"addBtn"},"Add New Candidate")))}}]),n}(a.Component)),f=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).handleChange=function(e){t.props.reSetElementList(e)},t}return Object(c.a)(n,[{key:"createList",value:function(){var t=this,e=Object(o.a)(this.props.allList);return e.length>0?e.map((function(e){return s.a.createElement("div",{key:e.id},s.a.createElement("input",{type:"checkbox",checked:t.props.pieList.filter((function(t){return t.name===e.name})).length>0,onChange:function(){t.handleChange(e.name)}}),s.a.createElement("label",{htmlFor:e.id},e.name))})):s.a.createElement("div",null,"Loading...")}},{key:"render",value:function(){return s.a.createElement("div",{className:"LeftBox"},s.a.createElement("h3",null,this.props.mode," Wheel"),s.a.createElement("p",null,"(Ver 3.0.0.dev1.2007010_beta)"),s.a.createElement("button",{className:"shuffleButton",onClick:this.props.shuffleWheel},"Shuffle the wheel"),s.a.createElement("p",null,"No less than 3 options"),this.createList(),s.a.createElement(m,{addElement:this.props.addElement}))}}]),n}(a.Component),L=(n(43),function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={degree:null,host:null},t.alertHost=function(e){var n=360-e%360,a=Math.floor(n*t.props.pieList.length/360),s=t.props.pieList[a].name;t.setState({host:a});var i={name:s};h.a.post("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/add-standup-host",i).then((function(t){console.log(t),console.log(t.data)})),console.log(t.props.pieList),console.log(t.props.pieList[a].id),alert("Congrats, "+s+"! You will run the next stand-up")},t.handleClick=function(){var e=Math.floor(-59180*Math.random())+60204;t.setState({degree:e}),setTimeout((function(){return t.alertHost(e)}),5500);t.props.pieList,t.props.originPieList;console.log(t.props.pieList)},t}return Object(c.a)(n,[{key:"createPie",value:function(){var t,e,n=Object(o.a)(this.props.pieList),a=Object(o.a)(this.props.colorsList);return t=360/n.length,e=t+90,n.length>0&&a.length>0?n.map((function(i,r){return s.a.createElement("div",{key:i.id},s.a.createElement("li",{className:"midBoxPie__pieSlice",style:{transform:"rotate("+t*r+"deg) skewY("+e+"deg)",background:a[r].hex}},s.a.createElement("div",{className:"midBoxPie__pieSliceName",style:{transform:"skewY("+(180-e)+"deg) rotate("+t/2+"deg)"}},n[r].name)))})):s.a.createElement("div",null,"Loading...")}},{key:"render",value:function(){return s.a.createElement("div",{className:"MidBox"},s.a.createElement("ul",{className:"midBoxPie",id:"pie",style:{transform:"rotate("+this.state.degree+"deg)"}},this.createPie()),s.a.createElement("button",{className:"midBoxSpin",onClick:this.handleClick},"GO"))}}]),n}(a.Component)),v=(n(44),function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={standupBtn:!0,retroBtn:!1,sprintPlanBtn:!1},t.handleClick=function(e){switch(console.log(e.target.value),t.props.determinePieList(e.target.value),e.target.value){case"Standup":t.setState({standupBtn:!0,retroBtn:!1,sprintPlanBtn:!1});break;case"Retro":t.setState({standupBtn:!1,retroBtn:!0,sprintPlanBtn:!1});break;case"Sprint-planning":t.setState({standupBtn:!1,retroBtn:!1,sprintPlanBtn:!0})}},t}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"RightBox"},s.a.createElement("div",{className:"btnGroup"},s.a.createElement("button",{className:"standupBtn",value:"Standup",disabled:this.state.standupBtn,onClick:this.handleClick},"Standup"),s.a.createElement("button",{className:"retroBtn",value:"Retro",disabled:this.state.retroBtn,onClick:this.handleClick},"Retro"),s.a.createElement("button",{className:"sprintPlanBtn",value:"Sprint-planning",disabled:this.state.sprintPlanBtn,onClick:this.handleClick},"Sprint Planning")))}}]),n}(a.Component)),b=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={mode:"Standup",allList:[],pieList:[],originPieList:[],standupList:[],retroList:[],spriintPlanList:[],colorsList:[]},t.determinePieList=function(e){switch(t.setState({mode:e}),e){case"Standup":t.setState({pieList:Object(o.a)(t.state.standupList),originPieList:Object(o.a)(t.state.standupList)}),console.log(t.state.pieList);break;case"Retro":t.setState({pieList:Object(o.a)(t.state.retroList),originPieList:Object(o.a)(t.state.retroList)});break;case"Sprint-planning":t.setState({pieList:Object(o.a)(t.state.spriintPlanList),originPieList:Object(o.a)(t.state.spriintPlanList)})}},t.reSetElementList=function(e){var n=Object(o.a)(t.state.pieList),a=n.some((function(t){return t.name===e}))?n.length>=4?n.filter((function(t){return t.name!==e})):n:[].concat(Object(o.a)(n),[t.state.allList.find((function(t){return t.name===e}))]);t.setState({pieList:a})},t.resetCan=function(){t.state.allList.map((function(t){return h.a.post("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/update-can",t)}))},t.addElement=function(e){e.id=t.state.allList.length;var n=[].concat(Object(o.a)(t.state.pieList),[e]),a=[].concat(Object(o.a)(t.state.allList),[e]);t.setState({pieList:n,allList:a})},t.shuffleWheel=function(){var e=Object(o.a)(t.state.pieList);t.setState({pieList:e.sort((function(){return Math.random()-.5}))})},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;h.a.get("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/all").then((function(e){var n=e.data;t.setState({allList:n})})),h.a.get("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/colors").then((function(e){var n=e.data;t.setState({colorsList:n})})),h.a.get("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/standup").then((function(e){var n=e.data;t.setState({standupList:n,pieList:n})})),h.a.get("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/retro").then((function(e){var n=e.data;t.setState({retroList:n})})),h.a.get("https://us-central1-wheel-of-fortune-b4c69.cloudfunctions.net/api/sprint-plan").then((function(e){var n=e.data;t.setState({spriintPlanList:n})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm"},s.a.createElement(f,{mode:this.state.mode,allList:this.state.allList,pieList:this.state.pieList,reSetElementList:this.reSetElementList,addElement:this.addElement,shuffleWheel:this.shuffleWheel})),s.a.createElement("div",{className:"col-sm"},s.a.createElement(L,{pieList:this.state.pieList,colorsList:this.state.colorsList,resetCan:this.resetCan,mode:this.state.mode})),s.a.createElement("div",{className:"col-sm"},s.a.createElement(v,{determinePieList:this.determinePieList}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.bb813f1d.chunk.js.map