(this["webpackJsonptodo-list-app"]=this["webpackJsonptodo-list-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),r=a.n(c);a(13);var o=function(){return l.a.createElement("h1",null,l.a.createElement("center",null,"Harine's Todo Task Listing Page"))};var s=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("p",null,"Total Task")),l.a.createElement("div",{className:"col-4"},l.a.createElement("p",null,"Pending")),l.a.createElement("div",{className:"col-4"},l.a.createElement("p",null,"Completed")))},m=a(1),i=a(2),u=a(4),p=a(3),d=a(5),E=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("p",null,this.props.count[0])),l.a.createElement("div",{className:"col-4"},l.a.createElement("p",null,this.props.count[1])),l.a.createElement("div",{className:"col-4"},l.a.createElement("p",null,this.props.count[2])))}}]),t}(l.a.Component);var b=function(){return l.a.createElement("h3",null,"Want to add a new Task?")},h=(a(14),function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("input",{class:"form-control",type:"text",placeholder:"Add new task here",id:"example-text-input"})),l.a.createElement("div",{className:"col-2"},l.a.createElement("input",{class:"form-control",type:"date",placeholder:"13-12-2019",id:"example-date-input"})),l.a.createElement("div",{className:"col-2"},l.a.createElement("p",null,l.a.createElement("button",{type:"button",class:"btn btn-secondary"},"Add")," ")))}}]),t}(l.a.Component)),v=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1 md-1"},l.a.createElement("p",null,this.props.slno)),l.a.createElement("div",{class:"form-check form-check-inline"},l.a.createElement("label",{class:"form-check-label"},l.a.createElement("input",{class:"form-check-input",type:"checkbox",name:"inlineCheckboxOptions",id:"inlineCheckbox1",value:"option1"}))),l.a.createElement("div",{className:"col-4"},l.a.createElement("p",null,this.props.taskitem)),l.a.createElement("div",{className:"col-3"},l.a.createElement("p",null,this.props.duedt)),l.a.createElement("div",{class:"btn-group btn-group-sm",role:"group"},l.a.createElement("div",{class:"dropdown"},l.a.createElement("button",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Select "),l.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenu2"},l.a.createElement("button",{class:"dropdown-item",type:"button"},"Done"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Modify"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Delete")),l.a.createElement("button",{type:"button",class:"btn btn-info"},"Submit"))))}}]),t}(l.a.Component),f=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1 md-1"},l.a.createElement("p",null,this.props.slno1)),l.a.createElement("div",{class:"form-check form-check-inline"},l.a.createElement("label",{class:"form-check-label"},l.a.createElement("input",{class:"form-check-input",type:"checkbox",name:"inlineCheckboxOptions",id:"inlineCheckbox1",value:"option1"}))),l.a.createElement("div",{className:"col-4"},l.a.createElement("p",null,this.props.taskitem)),l.a.createElement("div",{className:"col-3"},l.a.createElement("p",null,this.props.donedt)),l.a.createElement("div",{class:"btn-group btn-group-sm",role:"group"},l.a.createElement("button",{id:"btnGroupDrop1",type:"button",class:"btn btn-secondary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Select"),l.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"btnGroupDrop1"},l.a.createElement("button",{class:"dropdown-item",type:"button"},"Modify"),l.a.createElement("button",{class:"dropdown-item",type:"button"},"Delete"))),l.a.createElement("div",{className:"col-2"},l.a.createElement("p",null,l.a.createElement("button",{type:"button",class:"btn btn-info"},"Submit"))))}}]),t}(l.a.Component);a(15);var k=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"},l.a.createElement("p",null,l.a.createElement("center",null," "))))};var y=function(){return l.a.createElement("h3",null,"Completed Tasks")};var N=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("div",{className:"container"},l.a.createElement(s,null),l.a.createElement(E,{count:["5","3","2"]})),l.a.createElement(b,null),l.a.createElement(h,null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("h3",null,"List of Tasks to do:"),l.a.createElement(k,null),l.a.createElement("div",{className:"container"},l.a.createElement(v,{slno:"1",taskitem:"To learn React",duedt:"15.12.2019"}),l.a.createElement(v,{slno:"2",taskitem:"To Apply on my website",duedt:"16.12.2019"}),l.a.createElement(v,{slno:"3",taskitem:"To go live",duedt:"17.12.2019"})),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement(y,null),l.a.createElement("div",{className:"container"},l.a.createElement(f,{slno1:"1",taskitem:"To learn javascript",donedt:"07.12.2019"}),l.a.createElement(f,{slno1:"2",taskitem:"To write HTML",donedt:"08.12.2019"})))};r.a.render(l.a.createElement(N,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.7c8043de.chunk.js.map