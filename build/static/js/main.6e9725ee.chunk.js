(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={item:"ContactItem_item__2KdFa",text:"ContactItem_text__2iGCr",button:"ContactItem_button__1siMh"}},,,,,function(t,e,n){t.exports={form__label:"ContactForm_form__label__3Qoq2",form__button:"ContactForm_form__button__231Nl"}},,function(t,e,n){t.exports={title:"App_title__-GfWs"}},function(t,e,n){t.exports={filter__label:"Filter_filter__label__3r5QH",filter__input:"Filter_filter__input__b9DYy"}},,,function(t,e,n){t.exports={list:"ContactList_list__2T7aG"}},,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=(n(19),n(14)),s=n(3),l=n(4),u=n(6),b=n(5),m=n(23),d=n(9),f=n.n(d),h=n(12),j=n(7),_=n.n(j),p=n(0),C=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.addContact=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.addContact,children:[Object(p.jsxs)("label",{className:_.a.form__label,children:["Name:",Object(p.jsx)("input",{value:this.state.name,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{className:_.a.form__label,children:["Tel:",Object(p.jsx)("input",{value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{className:_.a.form__button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),x=C,O=n(13),v=n.n(O),g=n(2),N=n.n(g),y=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(p.jsxs)("li",{className:N.a.item,children:[Object(p.jsx)("p",{className:N.a.text,children:n}),Object(p.jsx)("p",{className:N.a.text,children:a}),Object(p.jsx)("button",{className:N.a.button,onClick:function(){return c(e)},children:"Delete"})]})},w=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:v.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsx)(y,{id:e,name:a,number:c,onDeleteContact:n},e)}))})},A=n(10),S=n.n(A),k=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:S.a.filter__label,children:["Find contacts by name",Object(p.jsx)("input",{className:S.a.filter__input,type:"text",value:e,onChange:n,placeholder:"Name contact"})]})},F=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(m.a)(),name:n,number:a},r=n.toLowerCase();if(t.state.contacts.find((function(t){return t.name.toLowerCase()===r})))return alert("".concat(n," is already in contacts"));t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value}),console.log(t.state)},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:f.a.title,children:"Phonebook"}),Object(p.jsx)(x,{onSubmit:this.addContact}),Object(p.jsx)("h2",{className:f.a.title,children:"Contacts "}),Object(p.jsx)(k,{value:this.filter,onChange:this.changeFilter}),Object(p.jsx)(w,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),D=F;o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.6e9725ee.chunk.js.map