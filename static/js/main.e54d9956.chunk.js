(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(e,t,n){e.exports={form:"ContactForm_form__B7wqV",label:"ContactForm_label__2f087",input:"ContactForm_input__38YTE"}},10:function(e,t,n){e.exports={box:"App_box__V2W_-"}},13:function(e,t,n){e.exports=n(18)},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=n(11),l=n(2),u=n(3),m=n(5),s=n(4),b=n(20),h=n(9),f=n(1),d=n.n(f),p=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;e.props.onAddContact(a,r),e.setState({name:"",number:""})},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit,className:d.a.form},r.a.createElement("label",{className:d.a.label},"Name",r.a.createElement("input",{className:d.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),r.a.createElement("label",{className:d.a.label},"Number",r.a.createElement("input",{className:d.a.input,type:"number",name:"number",value:this.state.number,onChange:this.handleChange})),r.a.createElement("button",{type:"submit"},"Add contact"))}}]),n}(a.Component),v=n(12),C=n(6),E=n.n(C),g=function(e){var t=e.name,n=e.id,a=e.number,c=e.onRemove;return r.a.createElement("li",{key:n,className:E.a.item},r.a.createElement("p",null,t,":",a),r.a.createElement("section",{className:E.a.btn},r.a.createElement("button",{type:"button",className:"TaskList-button",onClick:c},"Delete")))},_=function(e){var t=e.contacts,n=e.onRemoveContact;return r.a.createElement("ul",null,t.map((function(e){var t=e.id,a=Object(v.a)(e,["id"]);return r.a.createElement(g,Object.assign({key:t},a,{onRemove:function(){return n(t)}}))})))},y=function(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}}))},j=n(10),O=n.n(j),k=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t,n){var a={id:Object(b.a)(),name:t,number:n};e.state.contacts.map((function(e){return e.name.toLowerCase()})).includes(a.name.toLowerCase().trim())?alert("".concat(a.name," is already in contacts")):e.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[a])}}))},e.removeContact=function(t){e.setState((function(n){var a={contacts:n.contacts.filter((function(e){return e.id!==t}))};e.setState({contacts:a})}))},e.changeFilter=function(t){e.setState({filter:t})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return r.a.createElement("div",{className:O.a.box},r.a.createElement("h1",null,"Phonebook"),r.a.createElement(p,{onAddContact:this.addContact}),r.a.createElement("h2",null,"Contacts"),t.length>1&&r.a.createElement(y,{value:e,onChangeFilter:this.changeFilter}),r.a.createElement(_,{contacts:t,onRemoveContact:this.removeContact}))}}]),n}(a.Component);o.a.render(r.a.createElement(k,null),document.getElementById("root"))},6:function(e,t,n){e.exports={item:"ContactListItem_item__1Z5hl"}}},[[13,1,2]]]);
//# sourceMappingURL=main.e54d9956.chunk.js.map