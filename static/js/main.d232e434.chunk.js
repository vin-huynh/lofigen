(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{697:function(e,t,a){e.exports=a(713)},702:function(e,t,a){},704:function(e,t,a){},713:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),s=a(535),o=a.n(s),c=(a(702),a(536)),i=(a(704),a(6)),l=a(0),u=a(1),h=a(5),d=a(3),m=a(2),f=a(10),p=a(12),g=[0,2,4,5,7,9,11],k=[].concat(g,Object(p.a)(g.map((function(e){return e+12})))),O=([].concat(Object(p.a)(k),Object(p.a)(g.map((function(e){return e+24})))),[].concat(Object(p.a)(g.map((function(e){return e-12})).slice(4)),g,Object(p.a)(g.map((function(e){return e+12})).slice(0,5)))),b=function(){function e(t,a,n){Object(l.a)(this,e),this.degree=t,this.semitoneDist=g[t-1],this.intervals=a,this.nextChordIdxs=n}return Object(u.a)(e,[{key:"degree",value:function(){return this.degree}},{key:"semitoneDist",value:function(){return this.semitoneDist}},{key:"intervals",value:function(){return this.intervals}},{key:"nextChordIdxs",value:function(){return this.nextChordIdxs}},{key:"nextChordIdx",value:function(){return this.nextChordIdxs[Math.floor(Math.random()*this.nextChordIdxs.length)]}},{key:"generateVoicing",value:function(e){if(e<3)return this.intervals.slice(0,3);var t=this.intervals.slice(1,e);t.sort((function(){return Math.random()-.5}));for(var a=1;a<t.length;a++)for(;t[a]<t[a-1];)t[a]+=12;return t.unshift(0),t}},{key:"generateMode",value:function(){return this.intervals.map((function(e){return e>=12?e-12:e}))}}]),e}(),j=function(e){return e.map((function(e){return e-1}))},v=[new b(1,[0,4,7,11,14,17,21],j([2,3,4,5,6,7])),new b(2,[0,3,7,10,14,17,21],j([3,5,7])),new b(3,[0,3,7,10,13,17,20],j([4,6])),new b(4,[0,4,7,11,14,18,21],j([2,5])),new b(5,[0,4,7,10,14,17,21],j([1,3,6])),new b(6,[0,3,7,10,14,17,20],j([2,4])),new b(7,[0,3,6,10,13,17,20],j([1,3]))],w=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,null,[{key:"generate",value:function(e){if(e<2)return null;for(var t=[],a=v[Math.floor(Math.random()*v.length)],n=0;n<e;n++)t.push(new b(a.degree,Object(p.a)(a.intervals),Object(p.a)(a.nextChordIdxs))),a=v[a.nextChordIdx()];return t}}]),e}(),y=[1,2,3,4,5,6],C="".concat("/lofigen","/PianoSamples/"),E=[];["A","C","D#","F#"].forEach((function(e){y.forEach((function(t){E.push(e+t)}))}));var L={};E.forEach((function(e){var t=e;e.includes("#")&&(t=e.replace("#","sharp")),L[e]="".concat(C+t,"v").concat(1,".wav")}));var x=L,M=new f.c(1e3,"lowpass"),A=new f.i(.5),S=function(){function e(t){Object(l.a)(this,e),this.sampler=new f.g(x,(function(){t()})).chain(M,A,f.e)}return Object(u.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),N={C4:"".concat("/lofigen","/DrumSamples/kick.wav")},D=new f.k(-3),P=function(){function e(t){Object(l.a)(this,e),this.sampler=new f.g(N,(function(){t()})).chain(D,f.e)}return Object(u.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),I={C4:"".concat("/lofigen","/DrumSamples/snare.wav")},z=new f.c(6e3,"lowpass"),B=new f.k(-6),W=new f.i(.3),F=function(){function e(t){Object(l.a)(this,e),this.sampler=new f.g(I,(function(){t()})).chain(z,B,W,f.e)}return Object(u.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),H={C4:"".concat("/lofigen","/DrumSamples/hat.wav")},V=new f.c(2400,"lowpass"),q=new f.k(-9),G=new f.i(.7),J=function(){function e(t){Object(l.a)(this,e),this.sampler=new f.g(H,(function(){t()})).chain(V,q,G,f.e)}return Object(u.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),R=new f.c(2e3,"lowshelf"),$=new f.k(-32),K=new f.f("pink").chain(R,$,f.e),Q=a(15),T=new f.b(16),U=function(e){var t=Object(n.useState)(Object(p.a)(T.getValue())),a=Object(Q.a)(t,2),s=a[0],o=a[1],c=Object(n.useRef)(),i=function e(){o(Object(p.a)(T.getValue())),c.current=requestAnimationFrame(e)};return Object(n.useEffect)((function(){return e.audio.connect(T),c.current=requestAnimationFrame(i),function(){return cancelAnimationFrame(c.current)}}),[]),r.a.createElement("div",{className:"freqList"},s.map((function(e,t){var a=Math.max(3*(69+.5*e),10);return r.a.createElement("div",{key:t,className:"freqBar",style:{height:"".concat(a,"px")}})})))},X=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],Y=[.1,.3,.2,.15,.15,.025,.025,.05],Z=new f.a({threshold:-6,ratio:3,attack:.5,release:.1}),_=new f.c(2e3,"lowpass"),ee=new f.k(-6);f.e.chain(Z,_,ee),f.j.bpm.value=156,f.j.swing=1;var te=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).nextChord=function(){var e=n.state.progress===n.state.progression.length-1?0:n.state.progress+1,t=Math.random()<.15,a=Math.random()<.2,r=Math.random()<.25,s=.3*Math.random()+.2,o=Math.random()<.25;4===n.state.progress?n.setState(Object(i.a)(Object(i.a)({},n.state),{},{progress:e,kickOff:t,snareOff:a,hatOff:r})):0===n.state.progress?n.setState(Object(i.a)(Object(i.a)({},n.state),{},{progress:e,kickOff:t,snareOff:a,hatOff:r,melodyDensity:s,melodyOff:o})):n.setState(Object(i.a)(Object(i.a)({},n.state),{},{progress:e}))},n.playChord=function(){var e=n.state.progression[n.state.progress],t=f.d(n.state.key+"3").transpose(e.semitoneDist),a=e.generateVoicing(4),r=f.d(t).harmonize(a).map((function(e){return f.d(e).toNote()}));n.pnc.triggerAttackRelease(r,"1n"),n.setState(Object(i.a)(Object(i.a)({},n.state),{},{temp:r})),n.nextChord()},n.playMelody=function(){if(!n.state.melodyOff&&Math.random()<n.state.melodyDensity){var e=Math.min(n.state.scalePos,7)+1,t=Math.min(n.state.scale.length-n.state.scalePos,7),a=e>1,r=t>1;a&&r&&(Math.random()>.5?r=!a:a=!r);var s=a?Y.slice(0,e):Y.slice(0,t),o=s.reduce((function(e,t){return e+t}),0);s=s.map((function(e){return e/o}));for(var c=1;c<s.length;c++)s[c]+=s[c-1];for(var l=Math.random(),u=0,h=!1;!h;)l<=s[u]?h=!0:u++;var d=a?-u:u,m=n.state.scalePos+d;n.setState(Object(i.a)(Object(i.a)({},n.state),{},{scalePos:m})),n.pn.triggerAttack(n.state.scale[m])}},n.generateProgression=function(){var e=O,t=X[Math.floor(Math.random()*X.length)],a=f.d(t+"5").harmonize(e).map((function(e){return f.d(e).toNote()})),r=w.generate(8),s=Math.floor(Math.random()*e.length);n.setState(Object(i.a)(Object(i.a)({},n.state),{},{key:t,progress:0,progression:r,scale:a,genChordsOnce:!0,scalePos:s}))},n.toggle=function(){n.setState(Object(i.a)(Object(i.a)({},n.state),{},{progress:0})),"started"===f.j.state?(n.noise.stop(),f.j.stop(),n.props.toggleWakeLock()):(f.l(),f.j.start(),n.noise.start(0),n.chords.start(0),n.melody.start(0),n.kickLoop.start(0),n.snareLoop.start(0),n.hatLoop.start(0),n.props.toggleWakeLock())},n.state={key:"C",progression:[],scale:[],progress:0,pianoLoaded:!1,kickLoaded:!1,snareLoaded:!1,hatLoaded:!1,contextStarted:!1,genChordsOnce:!1,kickOff:!1,snareOff:!1,hatOff:!1,melodyDensity:.33,melodyOff:!1,scalePos:0,temp:[]},n.pn=new S((function(){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{pianoLoaded:!0}))})).sampler,n.pnc=new S((function(){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{pianoLoaded:!0}))})).sampler,n.kick=new P((function(){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{kickLoaded:!0}))})).sampler,n.snare=new F((function(){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{snareLoaded:!0}))})).sampler,n.hat=new J((function(){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{hatLoaded:!0}))})).sampler,n.noise=K,n.chords=new f.h((function(e,t){n.playChord()}),[""],"1n"),n.melody=new f.h((function(e,t){n.playMelody()}),[""],"8n"),n.kickLoop=new f.h((function(e,t){n.state.kickOff||("C4"===t&&Math.random()<.9?n.kick.triggerAttack(t):"."===t&&Math.random()<.1&&n.kick.triggerAttack("C4"))}),["C4","","","","","","","C4","C4","",".","","","","",""],"8n"),n.snareLoop=new f.h((function(e,t){n.state.snareOff||""!==t&&Math.random()<.8&&n.snare.triggerAttack(t)}),["","C4"],"2n"),n.hatLoop=new f.h((function(e,t){n.state.hatOff||""!==t&&Math.random()<.8&&n.hat.triggerAttack(t)}),["C4","C4","C4","C4","C4","C4","C4","C4"],"4n"),n.chords.humanize=!0,n.melody.humanize=!0,n.kickLoop.humanize=!0,n.snareLoop.humanize=!0,n.hatLoop.humanize=!0,n.nextChord=n.nextChord.bind(Object(h.a)(n)),n.playChord=n.playChord.bind(Object(h.a)(n)),n.playMelody=n.playMelody.bind(Object(h.a)(n)),n.generateProgression=n.generateProgression.bind(Object(h.a)(n)),n.toggle=n.toggle.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.progression.map((function(t,a){return r.a.createElement("li",{className:a===(e.state.progress+7)%8?"live":"",key:a},t.degree)})),a=r.a.createElement("div",{className:"prep"},r.a.createElement("div",{className:"sampleLoad"},this.state.pianoLoaded&&this.state.kickLoaded&&this.state.snareLoaded&&this.state.hatLoaded?this.state.contextStarted?"":r.a.createElement("button",{className:"contextBtn",onClick:function(){f.l(),e.setState(Object(i.a)(Object(i.a)({},e.state),{},{contextStarted:!0}))}},"stArt Audio context"):"loAding sAmples")),n=r.a.createElement("div",{className:"playable"},r.a.createElement("button",{className:"generateBtn",onClick:this.generateProgression},"generAte cHords"),this.state.genChordsOnce?r.a.createElement("div",null,r.a.createElement("div",{className:"info"},r.a.createElement("h3",{className:"key"},this.state.key.toLowerCase()),r.a.createElement("ol",{className:"progressionList"},t)),r.a.createElement("h1",null,"still testing chord issues :/"),r.a.createElement("div",null,this.state.temp.map((function(e,t){return r.a.createElement("p",{key:t},e.toLowerCase())}))),r.a.createElement("button",{className:"playBtn",onClick:this.toggle},"started"===f.j.state?"stop":"plAy")):""),s=r.a.createElement("section",{className:"visualizer"},r.a.createElement(U,{audio:f.e}));return r.a.createElement("div",null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"lofi generAtor"),r.a.createElement("h5",null,"by Vin-HuynH")),r.a.createElement("div",{className:"instructions"},r.a.createElement("h3",null,"How to use lofigen"),r.a.createElement("ol",null,this.state.pianoLoaded&&this.state.kickLoaded&&this.state.snareLoaded&&this.state.hatLoaded?"":r.a.createElement("li",null,"WAit for sAmples to loAd"),this.state.contextStarted?"":r.a.createElement("li",null,"stArt Audio context"),r.a.createElement("li",null,"generAte cHords"),r.a.createElement("li",null,"press plAy And enjoy"))),this.state.pianoLoaded&&this.state.kickLoaded&&this.state.snareLoaded&&this.state.hatLoaded&&this.state.contextStarted?n:a),r.a.createElement("section",{className:"gradient "+this.state.key.replace("#","s")}),"started"===f.j.state?s:"",r.a.createElement("section",{className:"backdrop"}))}}]),a}(n.Component),ae=function(e){var t=Object(c.a)(),a=t.toggleWakeLock;t.wakeLockActive;return r.a.createElement("div",{className:"App"},r.a.createElement(te,{toggleWakeLock:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[697,1,2]]]);
//# sourceMappingURL=main.d232e434.chunk.js.map