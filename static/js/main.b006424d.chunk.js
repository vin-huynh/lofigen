(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{696:function(e,t,n){e.exports=n(713)},701:function(e,t,n){},702:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},703:function(e,t,n){},713:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n.n(a),s=n(535),o=n.n(s),i=(n(701),n(702),n(703),n(7)),c=n(0),l=n(1),u=n(5),d=n(3),h=n(2),m=n(10),p=n(11),f=[0,2,4,5,7,9,11],g=function(){function e(t,n,a){Object(c.a)(this,e),this.degree=t,this.semitoneDist=f[t-1],this.intervals=n,this.nextChordIdxs=a}return Object(l.a)(e,[{key:"degree",value:function(){return this.degree}},{key:"semitoneDist",value:function(){return this.semitoneDist}},{key:"intervals",value:function(){return this.intervals}},{key:"nextChordIdxs",value:function(){return this.nextChordIdxs}},{key:"nextChordIdx",value:function(){return this.nextChordIdxs[Math.floor(Math.random()*this.nextChordIdxs.length)]}}]),e}(),k=function(e){return e.map((function(e){return e-1}))},w=[new g(1,[0,4,7,11,14,17,21],k([2,3,4,5,6,7])),new g(2,[0,3,7,10,14,17,21],k([3,5,7])),new g(3,[0,3,7,10,13,17,20],k([4,6])),new g(4,[0,4,7,11,14,18,21],k([2,5])),new g(5,[0,4,7,10,14,17,21],k([1,3,6])),new g(6,[0,3,7,10,14,17,20],k([2,4])),new g(7,[0,3,6,10,13,17,20],k([1,3]))],b=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"generate",value:function(e){if(e<2)return null;for(var t=[],n=w[Math.floor(Math.random()*w.length)],a=0;a<e;a++)t.push(new g(n.degree,Object(p.a)(n.intervals),Object(p.a)(n.nextChordIdxs))),n=w[n.nextChordIdx()];return t}}]),e}(),v=[1,2,3,4,5,6],y="".concat("/lofigen","/PianoSamples/"),j=[];["A","C","D#","F#"].forEach((function(e){v.forEach((function(t){j.push(e+t)}))}));var O={};j.forEach((function(e){var t=e;e.includes("#")&&(t=e.replace("#","sharp")),O[e]="".concat(y+t,"v").concat(1,".wav")}));var C=O,E=new m.b(1e3,"lowpass"),L=new m.j(.5),x=function(){function e(t){Object(c.a)(this,e),this.sampler=new m.h(C,(function(){t()})).chain(E,L,m.f)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),A={C4:"".concat("/lofigen","/DrumSamples/kick.wav")},S=new m.l(-3),N=new m.c({roomSize:.66,dampening:1200,wet:.1}),M=function(){function e(t){Object(c.a)(this,e),this.sampler=new m.h(A,(function(){t()})).chain(N,S,m.f)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),D={C4:"".concat("/lofigen","/DrumSamples/snare.wav")},I=new m.b(6e3,"lowpass"),z=new m.l(-6),B=new m.c({roomSize:.5,dampening:4e3,wet:.1}),H=new m.j(.3),F=function(){function e(t){Object(c.a)(this,e),this.sampler=new m.h(D,(function(){t()})).chain(B,I,z,H,m.f)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),P={C4:"".concat("/lofigen","/DrumSamples/hat.wav")},W=new m.b(2400,"lowpass"),G=new m.l(-9),J=new m.j(.7),R=new m.c({roomSize:.33,dampening:1200,wet:.1}),V=function(){function e(t){Object(c.a)(this,e),this.sampler=new m.h(P,(function(){t()})).chain(W,R,G,J,m.f)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),$=new m.b(2e3,"lowshelf"),q=new m.l(-32),K=new m.g("pink").chain($,q,m.f),Q=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],T=new m.a({threshold:-6,ratio:3,attack:.5,release:.1}),U=new m.b(2e3,"lowpass"),X=new m.l(-6);m.f.chain(U,T,X),m.k.bpm.value=156,m.k.swing=1;var Y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).nextChord=function(){var e=a.state.progress===a.state.progression.length-1?0:a.state.progress+1;a.setState(Object(i.a)(Object(i.a)({},a.state),{},{progress:e}))},a.playChord=function(){var e=a.state.progression[a.state.progress],t=m.d(a.state.key+"3").transpose(e.semitoneDist),n=m.d(t).harmonize(e.intervals).map((function(e){return m.d(e).toNote()})).filter((function(e,t){return t<4}));a.pn.triggerAttackRelease(n,"1n"),a.nextChord()},a.playMelody=function(){var e=a.state.progression[a.state.progress],t=m.d(a.state.key+"5").transpose(e.semitoneDist),n=e.intervals.map((function(e){return e>=12?e-12:e})),r=m.d(t).harmonize(n).map((function(e){return m.d(e).toNote()})),s=Math.floor(Math.random()*r.length);Math.random()<.33&&a.pn.triggerAttackRelease(r[s])},a.generateProgression=function(){a.setState({key:Q[Math.floor(Math.random()*Q.length)],progress:0,progression:b.generate(8),genChordsOnce:!0})},a.toggle=function(){a.setState(Object(i.a)(Object(i.a)({},a.state),{},{progress:0})),"started"===m.k.state?(m.k.stop(),a.noise.stop()):(a.noise.start(0),a.chords.start(0),a.melody.start(0),a.kickLoop.start(0),a.snareLoop.start(0),a.hatLoop.start(0),m.k.start())},a.state={key:"C",progression:[],progress:0,pianoLoaded:!1,kickLoaded:!1,snareLoaded:!1,hatLoaded:!1,contextStarted:!1,genChordsOnce:!1},a.pn=new x((function(){return a.setState(Object(i.a)(Object(i.a)({},a.state),{},{pianoLoaded:!0}))})).sampler,a.kick=new M((function(){return a.setState(Object(i.a)(Object(i.a)({},a.state),{},{kickLoaded:!0}))})).sampler,a.snare=new F((function(){return a.setState(Object(i.a)(Object(i.a)({},a.state),{},{snareLoaded:!0}))})).sampler,a.hat=new V((function(){return a.setState(Object(i.a)(Object(i.a)({},a.state),{},{hatLoaded:!0}))})).sampler,a.noise=K,a.chords=new m.e(a.playChord,"1n"),a.melody=new m.e(a.playMelody,"8n"),a.kickLoop=new m.i((function(e,t){""!==t&&a.kick.triggerAttack(t)}),["C4","","","","","","","C4","C4","","","","","","",""],"8n"),a.snareLoop=new m.i((function(e,t){""!==t&&a.snare.triggerAttack(t)}),["","C4"],"2n"),a.hatLoop=new m.e((function(){return a.hat.triggerAttack("C4")}),"4n"),a.kickLoop.humanize=!0,a.snareLoop.humanize=!0,a.hatLoop.humanize=!0,a.nextChord=a.nextChord.bind(Object(u.a)(a)),a.playChord=a.playChord.bind(Object(u.a)(a)),a.playMelody=a.playMelody.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.progression.map((function(t,n){return r.a.createElement("li",{className:n===(e.state.progress+7)%8?"live":"",key:n},t.degree)})),n=r.a.createElement("div",{className:"prep"},r.a.createElement("div",{className:"sampleLoad"},this.state.pianoLoaded&&this.state.kickLoaded&&this.state.snareLoaded&&this.state.hatLoaded?this.state.contextStarted?"":r.a.createElement("button",{className:"contextBtn",onClick:function(){m.m(),e.setState(Object(i.a)(Object(i.a)({},e.state),{},{contextStarted:!0}))}},"stArt Audio context"):"loAding sAmples")),a=r.a.createElement("div",{className:"playable"},r.a.createElement("button",{className:"generateBtn",onClick:this.generateProgression},"generAte cHords"),this.state.genChordsOnce?r.a.createElement("div",null,r.a.createElement("div",{className:"info"},r.a.createElement("h3",{className:"key"},this.state.key.toLowerCase()),r.a.createElement("ol",{className:"progressionList"},t)),r.a.createElement("button",{className:"playBtn",onClick:this.toggle},"started"===m.k.state?"stop":"plAy")):"");return r.a.createElement("div",null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"lofi generAtor"),r.a.createElement("h5",null,"by Vin-HuynH")),r.a.createElement("div",{className:"instructions"},r.a.createElement("h3",null,"How to use lofigen"),r.a.createElement("ol",null,this.state.pianoLoaded&&this.state.kickLoaded&&this.state.snareLoaded&&this.state.hatLoaded?"":r.a.createElement("li",null,"WAit for sAmples to loAd"),this.state.contextStarted?"":r.a.createElement("li",null,"stArt Audio context"),r.a.createElement("li",null,"generAte cHords"),r.a.createElement("li",null,"press plAy And enjoy"))),this.state.pianoLoaded&&this.state.kickLoaded&&this.state.snareLoaded&&this.state.hatLoaded&&this.state.contextStarted?a:n),r.a.createElement("section",{className:"gradient "+this.state.key.replace("#","s")}),r.a.createElement("section",{className:"backdrop"}))}}]),n}(a.Component);var Z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[696,1,2]]]);
//# sourceMappingURL=main.b006424d.chunk.js.map