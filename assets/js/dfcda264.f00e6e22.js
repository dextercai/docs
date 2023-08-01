"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2098],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(t),h=a,f=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return t?r.createElement(f,s(s({ref:n},d),{},{components:t})):r.createElement(f,s({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(3117),a=(t(7294),t(3905));const o={title:"FAQ",weight:60},s=void 0,i={unversionedId:"faq/faq",id:"faq/faq",title:"FAQ",description:"The FAQ is updated periodically and designed to answer the questions our users most frequently ask about K3s.",source:"@site/docs/faq/faq.md",sourceDirName:"faq",slug:"/faq/",permalink:"/faq/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/faq/faq.md",tags:[],version:"current",lastUpdatedAt:1690876146,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{title:"FAQ",weight:60},sidebar:"mySidebar",previous:{title:"Advanced Options / Configuration",permalink:"/advanced/"},next:{title:"CLI Tools",permalink:"/cli/"}},l={},u=[{value:"Is K3s a suitable replacement for Kubernetes?",id:"is-k3s-a-suitable-replacement-for-kubernetes",level:3},{value:"How can I use my own Ingress instead of Traefik?",id:"how-can-i-use-my-own-ingress-instead-of-traefik",level:3},{value:"Does K3s support Windows?",id:"does-k3s-support-windows",level:3},{value:"How can I build from source?",id:"how-can-i-build-from-source",level:3},{value:"Where are the K3s logs?",id:"where-are-the-k3s-logs",level:3},{value:"Can I run K3s in Docker?",id:"can-i-run-k3s-in-docker",level:3},{value:"What is the difference between K3s Server and Agent Tokens?",id:"what-is-the-difference-between-k3s-server-and-agent-tokens",level:3},{value:"How compatible are different versions of K3s?",id:"how-compatible-are-different-versions-of-k3s",level:3},{value:"I&#39;m having an issue, where can I get help?",id:"im-having-an-issue-where-can-i-get-help",level:3}],d={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The FAQ is updated periodically and designed to answer the questions our users most frequently ask about K3s."),(0,a.kt)("h3",{id:"is-k3s-a-suitable-replacement-for-kubernetes"},"Is K3s a suitable replacement for Kubernetes?"),(0,a.kt)("p",null,"K3s is a CNCF-certified Kubernetes distribution, and can do everything required of a standard Kubernetes cluster. It is just a more lightweight version. See the ",(0,a.kt)("a",{parentName:"p",href:"/"},"main")," docs page for more details."),(0,a.kt)("h3",{id:"how-can-i-use-my-own-ingress-instead-of-traefik"},"How can I use my own Ingress instead of Traefik?"),(0,a.kt)("p",null,"Simply start K3s server with ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable=traefik")," and deploy your ingress."),(0,a.kt)("h3",{id:"does-k3s-support-windows"},"Does K3s support Windows?"),(0,a.kt)("p",null,"At this time K3s does not natively support Windows, however we are open to the idea in the future."),(0,a.kt)("h3",{id:"how-can-i-build-from-source"},"How can I build from source?"),(0,a.kt)("p",null,"Please reference the K3s ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/blob/master/BUILDING.md"},"BUILDING.md")," with instructions."),(0,a.kt)("h3",{id:"where-are-the-k3s-logs"},"Where are the K3s logs?"),(0,a.kt)("p",null,"The location of K3s logs will vary depending on how you run K3s and the node's OS."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When run from the command line, logs are sent to stdout and stderr."),(0,a.kt)("li",{parentName:"ul"},"When running under openrc, logs will be created at ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/log/k3s.log"),"."),(0,a.kt)("li",{parentName:"ul"},"When running under Systemd, logs will be sent to Journald and can be viewed using ",(0,a.kt)("inlineCode",{parentName:"li"},"journalctl -u k3s"),"."),(0,a.kt)("li",{parentName:"ul"},"Pod logs can be found at ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/log/pods"),"."),(0,a.kt)("li",{parentName:"ul"},"Containerd logs can be found at ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/agent/containerd/containerd.log"),".")),(0,a.kt)("p",null,"You can generate more detailed logs by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--debug")," flag when starting K3s (or ",(0,a.kt)("inlineCode",{parentName:"p"},"debug: true")," in the configuration file)."),(0,a.kt)("p",null,"Kubernetes uses a logging framework known as ",(0,a.kt)("inlineCode",{parentName:"p"},"klog"),", which uses a single logging configuration for all components within a process.\nSince K3s runs all Kubernetes components within a single process, it is not possible to configure different log levels or destinations for individual Kubernetes components.\nUse of the ",(0,a.kt)("inlineCode",{parentName:"p"},"-v=<level>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--vmodule=<module>=<level>")," component args will likely not have the desired effect. "),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/advanced/#additional-logging-sources"},"Additional Logging Sources")," for even more log options."),(0,a.kt)("h3",{id:"can-i-run-k3s-in-docker"},"Can I run K3s in Docker?"),(0,a.kt)("p",null,"Yes, there are multiple ways to run K3s in Docker. See ",(0,a.kt)("a",{parentName:"p",href:"/advanced/#running-k3s-in-docker"},"Advanced Options")," for more details."),(0,a.kt)("h3",{id:"what-is-the-difference-between-k3s-server-and-agent-tokens"},"What is the difference between K3s Server and Agent Tokens?"),(0,a.kt)("p",null,"For more information on managing K3s join tokens, see the ",(0,a.kt)("a",{parentName:"p",href:"/cli/token"},(0,a.kt)("inlineCode",{parentName:"a"},"k3s token")," command documentation"),"."),(0,a.kt)("h3",{id:"how-compatible-are-different-versions-of-k3s"},"How compatible are different versions of K3s?"),(0,a.kt)("p",null,"In general, the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/release/version-skew-policy/"},"Kubernetes version skew policy")," applies."),(0,a.kt)("p",null,"In short, servers can be newer than agents, but agents cannot be newer than servers."),(0,a.kt)("h3",{id:"im-having-an-issue-where-can-i-get-help"},"I'm having an issue, where can I get help?"),(0,a.kt)("p",null,"If you are having an issue with deploying K3s, you should:"),(0,a.kt)("p",null,"1) Check the ",(0,a.kt)("a",{parentName:"p",href:"/known-issues/"},"Known Issues")," page."),(0,a.kt)("p",null,"2) Check that you have resolved any ",(0,a.kt)("a",{parentName:"p",href:"/advanced/#additional-os-preparations"},"Additional OS Preparation"),". Run ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s check-config")," and ensure that it passes."),(0,a.kt)("p",null,"3) Search the K3s ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/issues"},"Issues")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/discussions"},"Discussions")," for one that matches your problem."),(0,a.kt)("p",null,"4) Join the ",(0,a.kt)("a",{parentName:"p",href:"https://slack.rancher.io/"},"Rancher Slack")," K3s channel to get help."),(0,a.kt)("p",null,"5) Submit a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/issues/new/choose"},"New Issue")," on the K3s Github describing your setup and the issue you are experiencing."))}p.isMDXComponent=!0}}]);