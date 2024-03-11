import{d as u,aM as d,b as _,ah as f,w as e,g as a,j as o,b2 as h}from"./entry.BA3wuCO8.js";import{_ as g}from"./AuthForm.vue.Cc8yETAu.js";import{_ as b}from"./Card.D2F3bNAl.js";import"./Divider.CqiBHo-c.js";const v=u({__name:"login",setup(w){d({title:"Login"});const r=[{name:"email",type:"text",label:"Email",placeholder:"Enter your email"},{name:"password",label:"Password",type:"password",placeholder:"Enter your password"}],n=t=>{const s=[];return t.email||s.push({path:"email",message:"Email is required"}),t.password||s.push({path:"password",message:"Password is required"}),s},c=[{label:"Continue with GitHub",icon:"i-simple-icons-github",color:"white",click:()=>{console.log("Redirect to GitHub")}}];function l(t){console.log("Submitted",t)}return(t,s)=>{const i=h,m=g,p=b;return _(),f(p,{class:"max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur"},{default:e(()=>[a(m,{fields:r,validate:n,providers:c,title:"Welcome back",align:"top",icon:"i-heroicons-lock-closed",ui:{base:"text-center",footer:"text-center"},"submit-button":{trailingIcon:"i-heroicons-arrow-right-20-solid"},onSubmit:l},{description:e(()=>[o(" Don't have an account? "),a(i,{to:"/signup",class:"text-primary font-medium"},{default:e(()=>[o("Sign up")]),_:1}),o(". ")]),"password-hint":e(()=>[a(i,{to:"/",class:"text-primary font-medium"},{default:e(()=>[o("Forgot password?")]),_:1})]),footer:e(()=>[o(" By signing in, you agree to our "),a(i,{to:"/",class:"text-primary font-medium"},{default:e(()=>[o("Terms of Service")]),_:1}),o(". ")]),_:1})]),_:1})}}});export{v as default};
