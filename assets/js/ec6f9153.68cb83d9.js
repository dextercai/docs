"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[750],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=n,c=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return a?r.createElement(c,o(o({ref:t},d),{},{components:a})):r.createElement(c,o({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6875:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(3117),n=(a(7294),a(3905));const i={title:"Air-Gap Install",weight:60},o=void 0,l={unversionedId:"installation/airgap",id:"installation/airgap",title:"Air-Gap Install",description:"You can install K3s in an air-gapped environment using two different methods. An air-gapped environment is any environment that is not directly connected to the Internet. You can either deploy a private registry and mirror docker.io, or you can manually deploy images such as for small clusters.",source:"@site/docs/installation/airgap.md",sourceDirName:"installation",slug:"/installation/airgap",permalink:"/installation/airgap",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/airgap.md",tags:[],version:"current",lastUpdatedAt:1690876146,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{title:"Air-Gap Install",weight:60},sidebar:"mySidebar",previous:{title:"Private Registry Configuration",permalink:"/installation/private-registry"},next:{title:"Managing Server Roles",permalink:"/installation/server-roles"}},s={},p=[{value:"Private Registry Method",id:"private-registry-method",level:2},{value:"Create the Registry YAML",id:"create-the-registry-yaml",level:3},{value:"Manually Deploy Images Method",id:"manually-deploy-images-method",level:2},{value:"Prepare the Images Directory and K3s Binary",id:"prepare-the-images-directory-and-k3s-binary",level:3},{value:"Install K3s",id:"install-k3s",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing K3s in an Air-Gapped Environment",id:"installing-k3s-in-an-air-gapped-environment",level:3},{value:"Upgrading",id:"upgrading",level:2},{value:"Install Script Method",id:"install-script-method",level:3},{value:"Automated Upgrades Method",id:"automated-upgrades-method",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=d("Tabs"),m=d("TabItem"),h={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can install K3s in an air-gapped environment using two different methods. An air-gapped environment is any environment that is not directly connected to the Internet. You can either deploy a private registry and mirror docker.io, or you can manually deploy images such as for small clusters."),(0,n.kt)("h2",{id:"private-registry-method"},"Private Registry Method"),(0,n.kt)("p",null,"This document assumes you have already created your nodes in your air-gap environment and have a Docker private registry on your bastion host."),(0,n.kt)("p",null,"If you have not yet set up a private Docker registry, refer to the official documentation ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/#run-an-externally-accessible-registry"},"here"),"."),(0,n.kt)("h3",{id:"create-the-registry-yaml"},"Create the Registry YAML"),(0,n.kt)("p",null,"Follow the ",(0,n.kt)("a",{parentName:"p",href:"/installation/private-registry"},"Private Registry Configuration")," guide to create and configure the registry.yaml file."),(0,n.kt)("p",null,"Once you have completed this, you may now go to the ",(0,n.kt)("a",{parentName:"p",href:"#install-k3s"},"Install K3s")," section below."),(0,n.kt)("h2",{id:"manually-deploy-images-method"},"Manually Deploy Images Method"),(0,n.kt)("p",null,"We are assuming you have created your nodes in your air-gap environment and use containerd as container runtime.\nThis method requires you to manually deploy the necessary images to each node and is appropriate for edge deployments where running a private registry is not practical."),(0,n.kt)("h3",{id:"prepare-the-images-directory-and-k3s-binary"},"Prepare the Images Directory and K3s Binary"),(0,n.kt)("p",null,"Obtain the images tar file for your architecture from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases"},"releases")," page for the version of K3s you will be running."),(0,n.kt)("p",null,"Place the tar file in the ",(0,n.kt)("inlineCode",{parentName:"p"},"images")," directory, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p /var/lib/rancher/k3s/agent/images/\nsudo cp ./k3s-airgap-images-$ARCH.tar /var/lib/rancher/k3s/agent/images/\n")),(0,n.kt)("p",null,"Once you have completed this, you may now go to the ",(0,n.kt)("a",{parentName:"p",href:"#install-k3s"},"Install K3s")," section below."),(0,n.kt)("h2",{id:"install-k3s"},"Install K3s"),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Before installing K3s, complete the ",(0,n.kt)("a",{parentName:"li",href:"#private-registry-method"},"Private Registry Method")," or the ",(0,n.kt)("a",{parentName:"li",href:"#manually-deploy-images-method"},"Manually Deploy Images Method")," above to prepopulate the images that K3s needs to install."),(0,n.kt)("li",{parentName:"ul"},"Download the K3s binary from the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/releases"},"releases")," page, matching the same version used to get the airgap images. Place the binary in ",(0,n.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," on each air-gapped node and ensure it is executable."),(0,n.kt)("li",{parentName:"ul"},"Download the K3s install script at ",(0,n.kt)("a",{parentName:"li",href:"https://get.k3s.io"},"get.k3s.io"),". Place the install script anywhere on each air-gapped node, and name it ",(0,n.kt)("inlineCode",{parentName:"li"},"install.sh"),"."),(0,n.kt)("li",{parentName:"ul"},"If your nodes do not have an interface with a default route, a default route must be configured; even a black-hole route via a dummy interface will suffice. K3s requires a default route in order to auto-detect the node's primary IP, and for kube-proxy ClusterIP routing to function properly. To add a dummy route, do the following:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"ip link add dummy0 type dummy\nip link set dummy0 up\nip addr add 169.254.255.254/31 dev dummy0\nip route add default via 169.254.255.255 dev dummy0 metric 1000\n")))),(0,n.kt)("p",null,"When running the K3s script with the ",(0,n.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_SKIP_DOWNLOAD")," environment variable, K3s will use the local version of the script and binary."),(0,n.kt)("h3",{id:"installing-k3s-in-an-air-gapped-environment"},"Installing K3s in an Air-Gapped Environment"),(0,n.kt)("p",null,"You can install K3s on one or more servers as described below."),(0,n.kt)(u,{mdxType:"Tabs"},(0,n.kt)(m,{value:"Single Server Configuration",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"To install K3s on a single server, simply do the following on the server node:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_K3S_SKIP_DOWNLOAD=true ./install.sh\n")),(0,n.kt)("p",null,"To add additional agents, do the following on each agent node: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_K3S_SKIP_DOWNLOAD=true K3S_URL=https://<SERVER_IP>:6443 K3S_TOKEN=<YOUR_TOKEN> ./install.sh\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The token from the server is typically found at ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/token"),"."))),(0,n.kt)(m,{value:"High Availability Configuration",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Reference the ",(0,n.kt)("a",{parentName:"p",href:"/datastore/ha"},"High Availability with an External DB")," or ",(0,n.kt)("a",{parentName:"p",href:"/datastore/ha-embedded"},"High Availability with Embedded DB")," guides. You will be tweaking install commands so you specify ",(0,n.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_SKIP_DOWNLOAD=true")," and run your install script locally instead of via curl. You will also utilize ",(0,n.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_EXEC='args'")," to supply any arguments to k3s."),(0,n.kt)("p",null,"For example, step two of the High Availability with an External DB guide mentions the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n')),(0,n.kt)("p",null,"Instead, you would modify such examples like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_K3S_SKIP_DOWNLOAD=true INSTALL_K3S_EXEC='server --token=SECRET' \\\nK3S_DATASTORE_ENDPOINT='mysql://username:password@tcp(hostname:3306)/database-name' \\\n./install.sh\n")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"K3s additionally provides a ",(0,n.kt)("inlineCode",{parentName:"p"},"--resolv-conf")," flag for kubelets, which may help with configuring DNS in air-gap networks.")),(0,n.kt)("h2",{id:"upgrading"},"Upgrading"),(0,n.kt)("h3",{id:"install-script-method"},"Install Script Method"),(0,n.kt)("p",null,"Upgrading an air-gap environment can be accomplished in the following manner:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download the new air-gap images (tar file) from the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/releases"},"releases")," page for the version of K3s you will be upgrading to. Place the tar in the ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/agent/images/")," directory on each\nnode. Delete the old tar file."),(0,n.kt)("li",{parentName:"ol"},"Copy and replace the old K3s binary in ",(0,n.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," on each node. Copy over the install script at ",(0,n.kt)("a",{parentName:"li",href:"https://get.k3s.io"},"https://get.k3s.io")," (as it is possible it has changed since the last release). Run the script again just as you had done in the past\nwith the same environment variables."),(0,n.kt)("li",{parentName:"ol"},"Restart the K3s service (if not restarted automatically by installer).")),(0,n.kt)("h3",{id:"automated-upgrades-method"},"Automated Upgrades Method"),(0,n.kt)("p",null,"K3s supports ",(0,n.kt)("a",{parentName:"p",href:"/upgrades/automated"},"automated upgrades"),". To enable this in air-gapped environments, you must ensure the required images are available in your private registry."),(0,n.kt)("p",null,"You will need the version of rancher/k3s-upgrade that corresponds to the version of K3s you intend to upgrade to. Note, the image tag replaces the ",(0,n.kt)("inlineCode",{parentName:"p"},"+")," in the K3s release with a ",(0,n.kt)("inlineCode",{parentName:"p"},"-")," because Docker images do not support ",(0,n.kt)("inlineCode",{parentName:"p"},"+"),"."),(0,n.kt)("p",null,"You will also need the versions of system-upgrade-controller and kubectl that are specified in the system-upgrade-controller manifest YAML that you will deploy. Check for the latest release of the system-upgrade-controller ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller/releases/latest"},"here")," and download the system-upgrade-controller.yaml to determine the versions you need to push to your private registry. For example, in release v0.4.0 of the system-upgrade-controller, these images are specified in the manifest YAML:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rancher/system-upgrade-controller:v0.4.0\nrancher/kubectl:v0.17.0\n")),(0,n.kt)("p",null,"Once you have added the necessary rancher/k3s-upgrade, rancher/system-upgrade-controller, and rancher/kubectl images to your private registry, follow the ",(0,n.kt)("a",{parentName:"p",href:"/upgrades/automated"},"automated upgrades")," guide."))}c.isMDXComponent=!0}}]);