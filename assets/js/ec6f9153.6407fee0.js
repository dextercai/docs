"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[750],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(3117),n=a(7294),l=a(6010),i=a(2466),o=a(6775),s=a(1980),u=a(7392),p=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=c(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:a,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),y=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var y=a(2389);const f="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),r=u[a].value;r!==o&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",v,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",f)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(b,(0,r.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},6875:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=a(3117),n=(a(7294),a(3905)),l=a(4866),i=a(5162);const o={title:"Air-Gap Install",weight:60},s=void 0,u={unversionedId:"installation/airgap",id:"installation/airgap",title:"Air-Gap Install",description:"You can install K3s in an air-gapped environment using two different methods. An air-gapped environment is any environment that is not directly connected to the Internet. You can either deploy a private registry and mirror docker.io, or you can manually deploy images such as for small clusters.",source:"@site/docs/installation/airgap.md",sourceDirName:"installation",slug:"/installation/airgap",permalink:"/installation/airgap",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/airgap.md",tags:[],version:"current",lastUpdatedAt:1683756691,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{title:"Air-Gap Install",weight:60},sidebar:"mySidebar",previous:{title:"Private Registry Configuration",permalink:"/installation/private-registry"},next:{title:"Managing Server Roles",permalink:"/installation/server-roles"}},p={},d=[{value:"Private Registry Method",id:"private-registry-method",level:2},{value:"Create the Registry YAML",id:"create-the-registry-yaml",level:3},{value:"Manually Deploy Images Method",id:"manually-deploy-images-method",level:2},{value:"Prepare the Images Directory and K3s Binary",id:"prepare-the-images-directory-and-k3s-binary",level:3},{value:"Install K3s",id:"install-k3s",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing K3s in an Air-Gapped Environment",id:"installing-k3s-in-an-air-gapped-environment",level:3},{value:"Upgrading",id:"upgrading",level:2},{value:"Install Script Method",id:"install-script-method",level:3},{value:"Automated Upgrades Method",id:"automated-upgrades-method",level:3}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can install K3s in an air-gapped environment using two different methods. An air-gapped environment is any environment that is not directly connected to the Internet. You can either deploy a private registry and mirror docker.io, or you can manually deploy images such as for small clusters."),(0,n.kt)("h2",{id:"private-registry-method"},"Private Registry Method"),(0,n.kt)("p",null,"This document assumes you have already created your nodes in your air-gap environment and have a Docker private registry on your bastion host."),(0,n.kt)("p",null,"If you have not yet set up a private Docker registry, refer to the official documentation ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/#run-an-externally-accessible-registry"},"here"),"."),(0,n.kt)("h3",{id:"create-the-registry-yaml"},"Create the Registry YAML"),(0,n.kt)("p",null,"Follow the ",(0,n.kt)("a",{parentName:"p",href:"/installation/private-registry"},"Private Registry Configuration")," guide to create and configure the registry.yaml file."),(0,n.kt)("p",null,"Once you have completed this, you may now go to the ",(0,n.kt)("a",{parentName:"p",href:"#install-k3s"},"Install K3s")," section below."),(0,n.kt)("h2",{id:"manually-deploy-images-method"},"Manually Deploy Images Method"),(0,n.kt)("p",null,"We are assuming you have created your nodes in your air-gap environment and use containerd as container runtime.\nThis method requires you to manually deploy the necessary images to each node and is appropriate for edge deployments where running a private registry is not practical."),(0,n.kt)("h3",{id:"prepare-the-images-directory-and-k3s-binary"},"Prepare the Images Directory and K3s Binary"),(0,n.kt)("p",null,"Obtain the images tar file for your architecture from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases"},"releases")," page for the version of K3s you will be running."),(0,n.kt)("p",null,"Place the tar file in the ",(0,n.kt)("inlineCode",{parentName:"p"},"images")," directory, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p /var/lib/rancher/k3s/agent/images/\nsudo cp ./k3s-airgap-images-$ARCH.tar /var/lib/rancher/k3s/agent/images/\n")),(0,n.kt)("p",null,"Once you have completed this, you may now go to the ",(0,n.kt)("a",{parentName:"p",href:"#install-k3s"},"Install K3s")," section below."),(0,n.kt)("h2",{id:"install-k3s"},"Install K3s"),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Before installing K3s, complete the ",(0,n.kt)("a",{parentName:"li",href:"#private-registry-method"},"Private Registry Method")," or the ",(0,n.kt)("a",{parentName:"li",href:"#manually-deploy-images-method"},"Manually Deploy Images Method")," above to prepopulate the images that K3s needs to install."),(0,n.kt)("li",{parentName:"ul"},"Download the K3s binary from the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/releases"},"releases")," page, matching the same version used to get the airgap images. Place the binary in ",(0,n.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," on each air-gapped node and ensure it is executable."),(0,n.kt)("li",{parentName:"ul"},"Download the K3s install script at ",(0,n.kt)("a",{parentName:"li",href:"https://get.k3s.io"},"get.k3s.io"),". Place the install script anywhere on each air-gapped node, and name it ",(0,n.kt)("inlineCode",{parentName:"li"},"install.sh"),"."),(0,n.kt)("li",{parentName:"ul"},"K3s requires a default route in order to auto-detect the node's primary IP, and for kube-proxy ClusterIP routing to function properly. Therefore, a default route must be configured on each node, even if that route is a dummy route or a black hole.")),(0,n.kt)("p",null,"When running the K3s script with the ",(0,n.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_SKIP_DOWNLOAD")," environment variable, K3s will use the local version of the script and binary."),(0,n.kt)("h3",{id:"installing-k3s-in-an-air-gapped-environment"},"Installing K3s in an Air-Gapped Environment"),(0,n.kt)("p",null,"You can install K3s on one or more servers as described below."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Single Server Configuration",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"To install K3s on a single server, simply do the following on the server node:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_K3S_SKIP_DOWNLOAD=true ./install.sh\n")),(0,n.kt)("p",null,"To add additional agents, do the following on each agent node: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_K3S_SKIP_DOWNLOAD=true K3S_URL=https://<SERVER_IP>:6443 K3S_TOKEN=<YOUR_TOKEN> ./install.sh\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The token from the server is typically found at ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/token"),"."))),(0,n.kt)(i.Z,{value:"High Availability Configuration",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Reference the ",(0,n.kt)("a",{parentName:"p",href:"/datastore/ha"},"High Availability with an External DB")," or ",(0,n.kt)("a",{parentName:"p",href:"/datastore/ha-embedded"},"High Availability with Embedded DB")," guides. You will be tweaking install commands so you specify ",(0,n.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_SKIP_DOWNLOAD=true")," and run your install script locally instead of via curl. You will also utilize ",(0,n.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_EXEC='args'")," to supply any arguments to k3s."),(0,n.kt)("p",null,"For example, step two of the High Availability with an External DB guide mentions the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n')),(0,n.kt)("p",null,"Instead, you would modify such examples like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_K3S_SKIP_DOWNLOAD=true INSTALL_K3S_EXEC='server --token=SECRET' \\\nK3S_DATASTORE_ENDPOINT='mysql://username:password@tcp(hostname:3306)/database-name' \\\n./install.sh\n")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"K3s additionally provides a ",(0,n.kt)("inlineCode",{parentName:"p"},"--resolv-conf")," flag for kubelets, which may help with configuring DNS in air-gap networks.")),(0,n.kt)("h2",{id:"upgrading"},"Upgrading"),(0,n.kt)("h3",{id:"install-script-method"},"Install Script Method"),(0,n.kt)("p",null,"Upgrading an air-gap environment can be accomplished in the following manner:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download the new air-gap images (tar file) from the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/releases"},"releases")," page for the version of K3s you will be upgrading to. Place the tar in the ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/agent/images/")," directory on each\nnode. Delete the old tar file."),(0,n.kt)("li",{parentName:"ol"},"Copy and replace the old K3s binary in ",(0,n.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," on each node. Copy over the install script at ",(0,n.kt)("a",{parentName:"li",href:"https://get.k3s.io"},"https://get.k3s.io")," (as it is possible it has changed since the last release). Run the script again just as you had done in the past\nwith the same environment variables."),(0,n.kt)("li",{parentName:"ol"},"Restart the K3s service (if not restarted automatically by installer).")),(0,n.kt)("h3",{id:"automated-upgrades-method"},"Automated Upgrades Method"),(0,n.kt)("p",null,"K3s supports ",(0,n.kt)("a",{parentName:"p",href:"/upgrades/automated"},"automated upgrades"),". To enable this in air-gapped environments, you must ensure the required images are available in your private registry."),(0,n.kt)("p",null,"You will need the version of rancher/k3s-upgrade that corresponds to the version of K3s you intend to upgrade to. Note, the image tag replaces the ",(0,n.kt)("inlineCode",{parentName:"p"},"+")," in the K3s release with a ",(0,n.kt)("inlineCode",{parentName:"p"},"-")," because Docker images do not support ",(0,n.kt)("inlineCode",{parentName:"p"},"+"),"."),(0,n.kt)("p",null,"You will also need the versions of system-upgrade-controller and kubectl that are specified in the system-upgrade-controller manifest YAML that you will deploy. Check for the latest release of the system-upgrade-controller ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller/releases/latest"},"here")," and download the system-upgrade-controller.yaml to determine the versions you need to push to your private registry. For example, in release v0.4.0 of the system-upgrade-controller, these images are specified in the manifest YAML:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rancher/system-upgrade-controller:v0.4.0\nrancher/kubectl:v0.17.0\n")),(0,n.kt)("p",null,"Once you have added the necessary rancher/k3s-upgrade, rancher/system-upgrade-controller, and rancher/kubectl images to your private registry, follow the ",(0,n.kt)("a",{parentName:"p",href:"/upgrades/automated"},"automated upgrades")," guide."))}m.isMDXComponent=!0}}]);