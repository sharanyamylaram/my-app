(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[9],{82:function(e,a,t){"use strict";t.r(a);var n=t(16),s=t(18),r=t(19),l=t(30),i=t(29),o=t(0),c=t(78),m=t.n(c),u=t(77),h=t.n(u),d=t(79),j=t.n(d),f=t(80),b=t(13),p=t(20),g=t(1),v={},O="",x=function(e){if(!e)return Object(g.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},N=function(e){if(!Object(f.isEmail)(e))return Object(g.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid email."})},C=function(e){if(e.length<3||e.length>20||!e.match("[a-zA-Z_]+"))return Object(g.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid Name."})},w=function(e){if(e.length<3||e.length>20||!e.match("[a-zA-Z_]+"))return Object(g.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid Name."})},y=function(e){if(e.length<3||e.length>20||!e.match("[a-zA-Z_]+"))return Object(g.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid Location."})},F=function(e){if(!e.match("^[0-9]{10}$"))return Object(g.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid Number."})},T=function(e){if(!e.match("^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]*$"))return Object(g.jsx)("div",{className:"alert alert-danger",role:"alert",children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"The password must be min 8 characters."}),Object(g.jsx)("li",{children:"Must contain atleast one uppercase, lowercase and a special character."})]})})},k=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).load=function(){if(O=r.props.match.params.id,r.props.users){for(var e=r.props.users.map((function(e){return e.email})),a=r.props.users.map((function(e){return e.password})),t=r.props.users.map((function(e){return e.firstname})),s=r.props.users.map((function(e){return e.lastname})),l=r.props.users.map((function(e){return e.location})),i=r.props.users.map((function(e){return e.mobileno})),o=r.props.users.map((function(e){return e.id})),c=[].concat(Object(n.a)(e),Object(n.a)(a),Object(n.a)(t),Object(n.a)(s),Object(n.a)(l),Object(n.a)(i)),m=c.length/6,u="",h=0;h<o.length;h++)O==o[h]&&(u=h);v.email=c[u],v.password=c[u+m],v.firstname=c[u+m+m],v.lastname=c[u+m+m+m],v.location=c[u+m+m+m+m],v.mobileno=c[u+m+m+m+m+m]}},r.onChangeEmail=function(e){v.email=e.target.value},r.onChangePassword=function(e){v.password=e.target.value},r.onChangefirstname=function(e){v.firstname=e.target.value},r.onChangelastname=function(e){v.lastname=e.target.value},r.onChangelocation=function(e){v.location=e.target.value},r.onChangemobileno=function(e){v.mobileno=e.target.value},r.handleRegister=function(e){e.preventDefault(),r.setState({successful:!1}),r.form.validateAll(),0===r.checkBtn.context._errors.length?r.props.dispatch(Object(b.r)(v.email,v.password,v.firstname,v.lastname,v.location,v.mobileno,O)).then((function(){r.setState({successful:!0}),r.props.history.push("/profile"),window.location.reload()})):r.setState({successful:!1})},r.state={successful:!1},r}return Object(r.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch(Object(b.g)())}},{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsx)("div",{className:"card card-container",children:Object(g.jsxs)(m.a,{onSubmit:this.handleRegister,ref:function(a){e.form=a},children:[this.load(),!this.state.successful&&Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"email",children:"Email"}),Object(g.jsx)(h.a,{type:"text",className:"form-control ",name:"email",value:v.email,onChange:this.onChangeEmail,validations:[x,N],disabled:!0})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"firstname",children:"Firstname"}),Object(g.jsx)(h.a,{type:"firstname",className:"form-control",name:"firstname",value:v.firstname,onChange:this.onChangefirstname,validations:[x,C]})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"lastname",children:"Lastname"}),Object(g.jsx)(h.a,{type:"lastname",className:"form-control",name:"lastname",value:v.lastname,onChange:this.onChangelastname,validations:[x,w]})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"location",children:"Location"}),Object(g.jsx)(h.a,{type:"location",className:"form-control",name:"location",value:v.location,onChange:this.onChangelocation,validations:[x,y]})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"mobileno",children:"Mobile No"}),Object(g.jsx)(h.a,{type:"mobileno",className:"form-control",name:"mobileno",value:v.mobileno,onChange:this.onChangemobileno,validations:[x,F]})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"password",children:"Password"}),Object(g.jsx)(h.a,{type:"text",className:"form-control",name:"password",value:v.password,onChange:this.onChangePassword,validations:[x,T]})]}),Object(g.jsx)("div",{className:"form-group",children:Object(g.jsx)("button",{className:"btn btn-warning ",style:{paddingLeft:50,paddingRight:50,borderRadius:50},children:"Confirm"})})]}),Object(g.jsx)(j.a,{style:{display:"none"},ref:function(a){e.checkBtn=a}})]})})})}}]),t}(o.Component);a.default=Object(p.b)((function(e){return{user:e.auth.user,users:e.auth.users,message:e.message.message}}))(k)}}]);
//# sourceMappingURL=9.26a0cd02.chunk.js.map