(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{697:function(e,t,n){e.exports=n(714)},702:function(e,t,n){},703:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},704:function(e,t,n){},714:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n.n(a),o=n(535),s=n.n(o),i=(n(702),n(703),n(704),n(7)),c=n(0),l=n(1),u=n(5),h=n(3),d=n(2),p=n(10),f=n(685),m=n.n(f),g=n(11),w=[0,2,4,5,7,9,11],k=function(){function e(t,n,a){Object(c.a)(this,e),this.degree=t,this.semitoneDist=w[t-1],this.intervals=n,this.nextChordIdxs=a}return Object(l.a)(e,[{key:"degree",value:function(){return this.degree}},{key:"semitoneDist",value:function(){return this.semitoneDist}},{key:"intervals",value:function(){return this.intervals}},{key:"nextChordIdxs",value:function(){return this.nextChordIdxs}},{key:"nextChordIdx",value:function(){return this.nextChordIdxs[Math.floor(Math.random()*this.nextChordIdxs.length)]}}]),e}(),v=function(e){return e.map((function(e){return e-1}))},b=[new k(1,[0,4,7,11,14,17,21],v([2,3,4,5,6,7])),new k(2,[0,3,7,10,14,17,21],v([3,5,7])),new k(3,[0,3,7,10,13,17,20],v([4,6])),new k(4,[0,4,7,11,14,18,21],v([2,5])),new k(5,[0,4,7,10,14,17,21],v([1,3,6])),new k(6,[0,3,7,10,14,17,20],v([2,4])),new k(7,[0,3,6,10,13,17,20],v([1,3]))],j=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"generate",value:function(e){if(e<2)return null;for(var t=[],n=b[Math.floor(Math.random()*b.length)],a=0;a<e;a++)t.push(new k(n.degree,Object(g.a)(n.intervals),Object(g.a)(n.nextChordIdxs))),n=b[n.nextChordIdx()];return t}}]),e}(),y=[1,2,3,4,5,6],O="".concat("/lofigen","/PianoSamples/"),C=[];["A","C","D#","F#"].forEach((function(e){y.forEach((function(t){C.push(e+t)}))}));var x={};C.forEach((function(e){var t=e;e.includes("#")&&(t=e.replace("#","sharp")),x[e]="".concat(O+t,"v").concat(1,".wav")}));var L=x,E=new p.c(1e3,"lowpass"),S=new p.j(.5),M=function(){function e(t){Object(c.a)(this,e),this.sampler=new p.h(L,(function(){t()})).chain(E,S,p.g)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),D={C4:"".concat("/lofigen","/DrumSamples/kick.wav")},A=new p.l(-3),I=new p.d({roomSize:.66,dampening:1200,wet:.1}),z=function(){function e(t){Object(c.a)(this,e),this.sampler=new p.h(D,(function(){t()})).chain(I,A,p.g)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),P={C4:"".concat("/lofigen","/DrumSamples/snare.wav")},B=new p.c(6e3,"lowpass"),F=new p.l(-6),G=new p.d({roomSize:.5,dampening:4e3,wet:.1}),N=new p.j(.3),J=function(){function e(t){Object(c.a)(this,e),this.sampler=new p.h(P,(function(){t()})).chain(G,B,F,N,p.g)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),R={C4:"".concat("/lofigen","/DrumSamples/hat.wav")},W=new p.c(2400,"lowpass"),$=new p.l(-9),q=new p.j(.7),H=new p.d({roomSize:.33,dampening:1200,wet:.1}),K=function(){function e(t){Object(c.a)(this,e),this.sampler=new p.h(R,(function(){t()})).chain(W,H,$,q,p.g)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),Q=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],T=new p.a({threshold:-6,ratio:3,attack:.5,release:.1}),U=new p.b({distortion:.1,wet:.1}),V=new p.c(2e3,"lowpass"),X=new p.l(-6);p.g.chain(U,V,T,X),p.k.bpm.value=156,p.k.swing=1,m()(p.m);var Y=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).nextChord=function(){var e=a.state.progress===a.state.progression.length-1?0:a.state.progress+1;a.setState(Object(i.a)(Object(i.a)({},a.state),{},{progress:e}))},a.playChord=function(){var e=a.state.progression[a.state.progress],t=p.e(a.state.key+"3").transpose(e.semitoneDist),n=p.e(t).harmonize(e.intervals).map((function(e){return p.e(e).toNote()})).filter((function(e,t){return t<4}));a.pn.triggerAttackRelease(n,"1n"),a.nextChord()},a.playMelody=function(){var e=a.state.progression[a.state.progress],t=p.e(a.state.key+"5").transpose(e.semitoneDist),n=e.intervals.map((function(e){return e>=12?e-12:e})),r=p.e(t).harmonize(n).map((function(e){return p.e(e).toNote()})),o=Math.floor(Math.random()*r.length);Math.random()<.33&&a.pn.triggerAttackRelease(r[o])},a.generateProgression=function(){a.setState({key:Q[Math.floor(Math.random()*Q.length)],progress:0,progression:j.generate(8)})},a.toggle=function(){a.setState(Object(i.a)(Object(i.a)({},a.state),{},{progress:0})),"started"===p.k.state?p.k.stop():(a.chords.start(0),a.melody.start(0),a.kickLoop.start(0),a.snareLoop.start(0),a.hatLoop.start(0),p.k.start())},a.state={key:"C",progression:[],progress:0,pianoLoaded:!1,kickLoaded:!1,snareLoaded:!1,hatLoaded:!1},a.pn=new M((function(){return a.setState(Object(i.a)(Object(i.a)({},a.state),{},{pianoLoaded:!0}))})).sampler,a.kick=new z((function(){return a.setState(Object(i.a)(Object(i.a)({},a.state),{},{kickLoaded:!0}))})).sampler,a.snare=new J((function(){return a.setState(Object(i.a)(Object(i.a)({},a.state),{},{snareLoaded:!0}))})).sampler,a.hat=new K((function(){return a.setState(Object(i.a)(Object(i.a)({},a.state),{},{hatLoaded:!0}))})).sampler,a.chords=new p.f(a.playChord,"1n"),a.melody=new p.f(a.playMelody,"8n"),a.kickLoop=new p.i((function(e,t){""!==t&&a.kick.triggerAttack(t)}),["C4","","","","","","","C4","C4","","","","","","",""],"8n"),a.snareLoop=new p.i((function(e,t){""!==t&&a.snare.triggerAttack(t)}),["","C4"],"2n"),a.hatLoop=new p.f((function(){return a.hat.triggerAttack("C4")}),"4n"),a.kickLoop.humanize=!0,a.snareLoop.humanize=!0,a.hatLoop.humanize=!0,a.nextChord=a.nextChord.bind(Object(u.a)(a)),a.playChord=a.playChord.bind(Object(u.a)(a)),a.playMelody=a.playMelody.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.progression.map((function(t,n){return r.a.createElement("li",{key:n},t.degree,n===(e.state.progress+7)%8?"<":"")}));return r.a.createElement("div",null,r.a.createElement("div",null,this.state.pianoLoaded?"":"loading piano",this.state.kickLoaded?"":"loading kick",this.state.snareLoaded?"":"loading snare",this.state.hatLoaded?"":"loading hat"),r.a.createElement("div",null,"now with audio context"),r.a.createElement("button",{onClick:this.generateProgression},"Generate Chords"),r.a.createElement("p",null,this.state.key),r.a.createElement("ol",null,t),r.a.createElement("button",{onClick:this.toggle},"Play"))}}]),n}(a.Component);var Z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[697,1,2]]]);
//# sourceMappingURL=main.6a975279.chunk.js.map