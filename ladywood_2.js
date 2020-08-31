(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4043,3888);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1774,2120);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.womanblink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lady_blink_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330000").s().p("AgrBDQgFgSAEgjQADgjAVgXQAUgXAvgDQgmATgYBEQgUA2gGAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape.setTransform(51.5734,-89.8627);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330000").s().p("AgrBDQgFgSAEgjQADgjAVgXQAUgYAvgCQgNAegkA+QgdAxgJAAQgCAAgBgEg");
	this.shape_1.setTransform(51.0234,-89.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330000").s().p("Ag3B0IgHgKQgEgFAAgCIAAgDIgDgCIgBgBIgBgEQgEgGgEgIQgXg6AIgpQAIgrAzglQAzgmBRBJQgrA7g2BHQgTAYgQAKIAAAAIgSAXIgCgCg");
	this.shape_2.setTransform(56.3468,-85.0975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330000").s().p("AhIBpIgBgCIgIgJQgEgGABgCIgBgCIgCgCIgBgCIgCgDQgEgGgDgJQgXg5AIgqQAHgqA0gmQAzgmBRBKQAhA6AEBAIgBAAQgVABgmAbIgMAJIgFADQgVAPgRAFIg3Adg");
	this.shape_3.setTransform(58.1968,-83.8475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#330000").s().p("AhLBWIgBgCIgIgKQgEgFABgCIgBgDIgCgCIgBgBIgCgEQgEgGgDgIQgXg5AIgqQAHgrA0glQAzgmBRBJQAhA6AEBBIAFA7Ih5BFQgugYgagog");
	this.shape_4.setTransform(58.4718,-81.8975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("AgWCGQghgVgUggIgBgCIgIgJQgEgGABgCIgBgCIgCgCIgBgCIgCgDQgEgGgDgJQgXg4AIgrQAHgqA0gmQAzgmBRBKQAhA6AEBAIAFA7IgJAFIAAAEQAAAdgXAUQgXAUggAAQgfAAgWgUg");
	this.shape_5.setTransform(58.4718,-81.4475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:51.5734}}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape,p:{x:51.0234}}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.4,-96.9,23.9,30.900000000000006);


(lib.tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,63.6,0.3326,0.3326);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tree, new cjs.Rectangle(0,63.6,1344.5,1293), null);


(lib.roundplata = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFA07A").s().p("AjjgwQEzgLCUBmIgtADQgtAEgqAAQjUAAhvhig");
	this.shape.setTransform(913.725,308.9343);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5A571").s().p("AjNgpQExghBpB7IgtAAIgKAAQjeAAiFhag");
	this.shape_1.setTransform(824.65,276.3386);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E29F6E").s().p("ACKA9Qi/geiBhiQEFAMBoB7g");
	this.shape_2.setTransform(763,260.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C69470").s().p("AjtDaQhUh+hFiJIAAguIAAgtQBOBLAKhMQADgWAAgXIAAgtIAuAAIAuAAQCqA6B6BmQAaAXAeAVQA/AtBagDQB5gDgeB5QgWAAgWgFQktg9icjPQjJhgCoCwQAhAiAZAkIAVAfQiNAFhYhfQAaCFA4BkQAKARAAAYQgXAAgHgLg");
	this.shape_3.setTransform(678.798,208.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C49D7D").s().p("AgYBLQgWhUgsgvQBahBBRB2QAKAPAAAXIgtAAIguAAIAAAtQgWAAgCgFg");
	this.shape_4.setTransform(648.825,181.8456);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#844621").s().p("ApRBaQBzAABtgWQAFgBAAgXQHZhIG4hoQAWgFAXAAIAAAtQgvBEhcAOQh/ARhmAfQjEA7kAAPQgYABgbAGQhSAThCAAQhoAAhAgwg");
	this.shape_5.setTransform(1265.425,285.944);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B37F57").s().p("ALEKnIguAAIqsAAIgtAAIluAAQAAgXgDAAQi0gXi2AAQr2gTo6jJQhYgfhdgMQkkgljZhcQijhEiVhRQksihj4jSQAAgXgKgSQg3hjgaiGQBXBfCNgEIgVggQgYglgigiQioivDKBfQCcDREtA9QAWAEAXAAQDmBxEMBVQD8BQEpA8QCNAcCMAZQDmArDtAdQF1AuGHANQUoArSxhmIBQgHQCbgMAAATQAAAIgbANIhIAlQhyA8jZgJIhYgFQizgLkUA3QgbAFgXAAQgtAAgqAGQk/AsmggGQq4gJpxhKQiXgSiqAJQkBANEuAMQCXABhuAXQhuAWhtgZQiYgijaANQBbBbC3gEQC+gECBA2QCxBKEZgRQC2gLC2AJQCfAHDPAMQEoAREngTIBegGQE/gUE/AAQBcguBXg0QAbgRAbgNQATgJAXAAQC2AXC3AUQAXACAXAAQAAAXgFABQhtAWhzAAQBoBPDUgyQAbgGAYgBQEBgPDEg7QBmgfB/gSQBcgOAvhEQDxAOCJhVQANgIAOgFQAXgJAcgDQBOgIAlg4IAXAAQAtABAPgjQAZg9BhAcQAAAXgLALQgMAMgWAAQAAAVALAMQALALAXAAQgsAbgtAaQnTEGp0BzQhnASh8AdQitAojFAhQogBap8AAIhjAAgA1CHCQCFB2EWgXIAtgDQiGhdkIAAIg6ABgEgimACDQCHBdDmgCIAuAAQhThijRAAQg4AAg/AHgEgm3ABOIAsAHQhnh8kGgMQCBBjDAAeg");
	this.shape_6.setTransform(1025.625,259.016);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D69E71").s().p("AuxE9QjQgMiegIQi3gJi2ALQkYASixhKQiBg2i/AEQi2AEhchcQDbgMCYAiQBtAYBtgWQBvgWiYgCQktgMEBgNQCpgICXASQJyBJK5AKQGgAGE+gtQApgGAuAAQAXAAAagFQEUg3CzAMIBZAFQDZAIBxg8IBJgkQAbgNAAgIQgBgSiaALIAAgtQF2AJEMhdQAUgIAXAAQAAAXgMAMQgLALgXAAQBwBXCphIQDGhUD5gpQAagEAYgVQCFh1BFBZQACADgXAXQAAAXgHACQlKB1lcBWIAAAHIAAAmQgXAAgVAFQm5BonaBKQgXAAgWgDQi3gUi3gXQgXAAgSAJQgcAOgaAQQhYA0hbAuQlAAAk9AUIheAGQieALieAAQiKAAiKgIg");
	this.shape_7.setTransform(1122.5873,270.6733);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DAAA7D").s().p("AhsAwQgcgOgXgXQCfgsCggXIAAAWQAAAXgKAHQhaA0h/AJQgYAAgRgJg");
	this.shape_8.setTransform(1395.6,216.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7D441D").s().p("AnqDNIAAguIAAgnIAAgHQFchWFJh0QAHgCAAgXQCGgaBkg4QARgJAXAAIAXAAQgjB8iqANIAAAtQhigcgZA8QgPAkgtAAIgXAAQglA3hNAJQgcACgXAJQgOAGgNAIQh2BIjDAAQggAAghgBg");
	this.shape_9.setTransform(1373.9,256.193);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8D6249").s().p("AjYDCQgLgLAAgXQAWAAAMgMQALgLAAgXIAAguQCrgMAih8IgXAAIAAgtQB9g6BngiIgNAqQgKAbAAAXQAAAXAXAWQAAAYgLAHQi8CHjTBsQgXAAgLgMg");
	this.shape_10.setTransform(1420.725,242.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B78158").s().p("As/GxQAXAAALgMQAMgLAAgXQCgguCMhQQAUgLAWgXQAXgXAsAJQBjAUgGhKQBlg6CyAfQARAEAXgXIAuguQCAgIBag2QAKgFAAgXQCahKBCieQAIgTAAgXQCrBEBPj0QACgHAXAAQAkCLgiERQgCAWAAAXQgXAAgBAEQgiClh9A6QgXgXAAgWQAAgXAJgcIAOgpQhoAih9A6IAAAtQgWAAgSAKQhkA4iGAaQAXgXgCgEQhFhZiEB1QgYAVgaAFQj5AojGBVQhNAhhAAAQhPAAg9gwg");
	this.shape_11.setTransform(1380.5574,215.1052);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ECBB96").s().p("AsaVUQmHgNl1guQjtgdjmgrQiMgaiNgcQkpg8j8hQQkMhVjmhxQAeh5h5AEQhbADg+gvQgegVgbgXQh6hmirg6QAAgXgKgQQhRh2hbBBQAsAwAWBUQACAFAXAAQAAAXgDAXQgLBLhNhKIAAAtIAAAuQguhFgThLQgEgQgDgUQgokvAUmAQBFhcA6hhQAKgQAAgYQEtjKEyi8QAhgVAngPQHoi9I5hzQFbhHF2guQM+hoPAAOQIHAHG6AwQCNAQCKATQHbBAGuBrQGyBrGvB/QAbAIAcAOQFACkE7ClQBbBzBnBmQALALAXAAQA9CRBDCGQAJASAAAXQguFthDFpQgBAEgXAAQAAgWADgXQAhkRgkiLQgXAAgCAHQhOD0irhEQAAAXgIATQhCCeiaBKIAAgXQigAXigAuQAXAWAbAOQASAJAXAAIgtAuQgXAXgTgEQixgfhlA6QAGBKhjgUQgsgIgXAWQgXAXgUAMQiMBPigAuQgWAAgVAHQkLBel3gJIAAAtIhQAHQtMBIuIAAQl9AAmIgNg");
	this.shape_12.setTransform(1052.7055,137.7002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roundplata, new cjs.Rectangle(629.9,0,845.6999999999999,327), null);


(lib.rightwalkingleg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D08F29").s().p("AEJH5Qg/gFhNgkQhQglgzgzQg7g5AAg2QgChSg3i6QgXhRg6hlIgHADIAAgBQgEgUgPgOIgJgIQgxg+hCgpIAAgdIgPAAIgciUIAXACQBzALB1AAIAAABQAWApAnAVIAUAKQAiAoAdArIAAAAIAeB2QAkCOgFAJIAkBzQAZBOAkBfQAZBEB5AgQA7APAMAGQAbANgLAYQgXAzADgBQACgBgaAyQgOAcg0AAIgTgBgAi7jCIgEACQAYAQACgWIAAgJIgWANg");
	this.shape.setTransform(0.524,0.0143);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rightwalkingleg, new cjs.Rectangle(-39.2,-50.6,79.5,101.30000000000001), null);


(lib.mouthsmileoouchrevers = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAGCBQgfgCgTgnQgTgngCgSIgDgLIgBgDQgCgRABgrIABgOIAEgSIABgUQACgMAGgHIADgEIABAAIAHgEIAAgBIAkASIABABIACgBIAqgWIABgBIAAABIAHAGQAGAGADAJIACALIAGAPQAFAMADAYQACAQABAPQABASgEAkIAAAEQgGANgFAOQgUA5gfAAIgBAAg");
	this.shape.setTransform(0.8968,3.6771);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAGB/QgPgBgOgKQgNgKgKgUQgTgngEgSIAAgCIgEgKIAAgDQgFgSADgpIADgNIAEgRQACgGAAgNQADgJAEgGIACgDIAEgEIAAAAIAHgEIABgBIAIADIAbAOIABAAIABABIACgBIABAAIACgCIAYgMIAQgHIABgBIAAABIAHAGIABABQAGAFADAIIACAKIAIAPQADAHADANIADAOQADAPAAAQQAAAKgCAQIgDAcIAAAEQgHANgFAPQgJAXgKANQgOARgPACIgCAAIgCABIgCAAg");
	this.shape_1.setTransform(0.8561,3.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAGB9QgPgBgOgLQgOgKgLgUQgTgmgFgTIgBgBIgEgKIAAgEQgIgTAGgnIABAAQACgMABAAIAFgRQACgFABgNQADgIAEgGIACgDIAFgDIAAgBIAHgEIABgBIAIADIAZANIACABIABAAIACABIACgBIABAAIABgBIAZgNIARgGIABgBIAAABIAHAFIABABQAGAGADAHIADAKIAIAOQAEAGAEANIADANQAFAOgCARQAAAKgDAPIgEAcIAAAEQgHAOgGAPQgKAXgLANQgOARgPACIgCAAIgCABIgCAAg");
	this.shape_2.setTransform(0.8202,3.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAFB7QgOgBgPgKQgOgLgLgUQgUgmgHgUIAAgBIgFgKIgBgEQgJgUAIgkIABAAQACgMACAAIAFgPQADgFACgNQADgIAEgFIADgDIAEgDIABgBIAHgFIABgBIAIADIAaAOIACAAIABAAIACABIABgBIABAAIABgBIAagNIARgFIABgBIABABIAHAFIABACQAFAEAFAIIADAJIAJANQAEAGAEAMIAEAMQAGAOgDAQIgEAaIgFAcIAAAFIgOAcQgLAXgLAOQgPAQgPADIgCAAIgDAAIgCAAg");
	this.shape_3.setTransform(0.7993,3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAFB5QgPgBgPgLQgOgKgNgUQgUgmgIgVIgBAAIgEgKIgBgEQgMgXALghQAEgMABABIAHgPQADgFACgKQAEgJAEgFIADgCIAFgEIAAgBIAHgEIABgBIAJACIAaANIACABIABABIAAAAIACABIABgBIABAAIACgCIAagNIARgFIACAAIAAAAIAHAGIABABQAGAFAFAHIAEAIQAFAJAEAEQAFAFAEAMIAFALQAHAMgEASQgBALgEAPIgGAcIgBAEQgIAOgHAOQgLAYgMANQgPARgQACIgCAAIgCABIgCAAg");
	this.shape_4.setTransform(0.778,3.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAEB3QgPgBgQgMQgNgKgOgUQgVglgJgVIgBgCIgFgKIgBgDQgOgYAOgfIAAAAQAEgKACAAIAHgNQAEgFACgLIAJgMIADgDIAFgEIAAAAIAIgFIABgBIAIADIAbANIACAAIABAAIACABIACgBIABAAIABgBIAbgMIARgFIACAAIAAAAIAHAGIABABIAMALIAFAIQAFAJAFACQAFAGAFAKIAFALQAJALgGATQgCALgEAPIgIAcIgBAEQgIAOgHAOQgNAYgLANQgRARgPACIgCAAIgDABIgCAAg");
	this.shape_5.setTransform(0.7761,3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAEB1QgPgBgRgMQgOgKgOgUQgVglgLgWIgBgCIgFgJIgBgDQgRgbAQgcIABAAQAEgKACABIAIgNQAFgEADgKIAJgMIADgDIAFgDIABAAIAHgFIABgBIAJABIAbAOIACAAIABABIACABIACgBIABAAIABgBIABgBIAbgNIARgCIACgBIAAABIAIAFIAAABIANAKIAFAIQAGAHAFAEQAFAEAGAKIAFAKQALAKgHAUQgCAKgGAQIgIAcIgBAEQgJAOgIAOQgNAYgMANQgRASgQACIgCAAIgCAAIgCAAg");
	this.shape_6.setTransform(0.7587,3.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAEBzQgPgBgSgMQgOgKgPgVIgig6IgBgCIgFgKIgBgCQgUgdATgaIABABQAEgKADABQAEgDAFgJQAFgEADgJIAKgLIAEgDIAFgEIAAAAIAIgEIABgBIAJABIAcANIABAAIACAAIACABIABgBIABAAIACgBIABAAIAbgMIASgDIABAAIABAAIAHAGIABAAIANAKIAGAHQAGAHAGADQAFAEAGAKIAHAJQALAJgIAVIgIAbIgKAaIgBAEIgSAeQgOAXgMANQgSASgQACIgCAAIgCAAIgCAAg");
	this.shape_7.setTransform(0.7368,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAIBxIgDAAIgCAAQgPgBgSgMQgOgKgQgVIgkg7IgBgCIgFgIIgCgDQgVgfAVgXIAAAAQAFgJAEABQAEgDAFgHQAGgEAEgJIAKgLIAEgCIAFgEIABgBIAHgDIACgCIAIABIAdANIABABIACAAIACABIACgBIABAAIABgBIABAAIAcgNIASgBIABgBIABABIAIAFIAAABIAOAJIAHAGQAGAHAGACQAGAFAGAHQAEAEADAFQANAJgJAVQgDAKgHARIgKAbIgCAEQgKAOgIAPQgPAYgNAMQgTASgPACIgCAAg");
	this.shape_8.setTransform(0.7256,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAHBvIgDAAIgCAAQgOgBgTgNQgPgJgQgWIgmg7IgBgCIgGgIIgCgDQgXggAXgVIABAAQAFgIAEABQAEgDAGgHQAHgDAEgHIALgLIAEgDIAFgDIABgBIAIgFIABgBIAJAAIAdAPIADAAIACABIACAAIABgBIABgBIABAAIAcgOIATAAIABAAIABAAIAIAGIABABIAOAJIAHAGQAHAGAGABQAHAEAHAIIAHAHQAOAIgKAVIgLAcIgMAbIgBAEQgLAOgJAPQgQAYgMANQgUARgPACIgDAAg");
	this.shape_9.setTransform(0.7125,3.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAHBtIgDAAIgCAAQgOgBgUgNQgPgKgRgVIgog7IgBgCIgGgIIgCgEQgaghAagTIABAAQAGgHAEABQAFgCAGgHQAHgCAFgIIAMgJIADgDIAGgDIABgBIAHgFIACgBIAJAAIAdAOIAEAAIACACIABgBIABgBIACgBIAAABIAdgOQAKABAJgBIACAAIABABIAIAFIABABIAPAIIAHAFQAHAGAHABQAHADAHAHIAJAHQAPAHgMAWQgEALgIARIgNAbIgBAEIgVAdQgRAYgNANQgUARgPACIgDAAg");
	this.shape_10.setTransform(0.6917,3.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAHBsIgDAAIgCAAQgPgBgUgNQgPgKgSgWIgqg7IgBgCIgGgJIgCgDQgdgjAdgQIABAAQAGgHAFACQAFgCAGgGQAIgCAFgHIAMgJIAEgDIAGgDIABgBIAIgFIABgBIAJgBIAfAPIABAAIABAAIABAAIACABIACgBIABAAIABgBIAAAAIAegOIATACIACAAIABAAIAIAFIABABQAGAEAKAEIAIAEQAHAFAHABQAHADAIAGQAFADAEAEQARAFgNAXIgNAcIgOAbIgCAEQgMAPgJAOQgSAZgNAMQgWASgPACIgCAAg");
	this.shape_11.setTransform(0.6801,2.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAGBqIgDAAIgCAAQgPgBgVgNQgPgKgSgWIgsg8IgCAAIgGgKIgCgEQgfgkAggOIABABQAGgGAFABQAGgBAGgGQAIgBAGgHIANgIIAEgDIAGgDIABgBIAIgFIACgBIAJgBIAfAPIABgBIABABIABAAIACABIACgBIABAAIABgBIAAAAIAfgOQAKACAJAAIACAAIABABIAIAFIABAAQAHAEAKADIAIAFQAIAEAHABQAIACAJAGQAFACAEADQASAFgPAYQgEALgJAQIgPAbIgCAEQgNAPgKAPQgTAYgNAMQgWASgPACIgDAAg");
	this.shape_12.setTransform(0.6597,2.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAGBpIgDAAIgCAAQgPgCgVgNQgQgKgTgWIgug7IgBgCIgHgJIgCgEQghgmAigLIABAAQAHgFAFACQAGgBAHgGQAJAAAGgHQAIgDAGgEIAEgDIAGgDIABgBIAIgFIACgBIAJgCIAfAPIABAAIACAAIAAAAIADACIABgBIACgCIABABIAfgPQAKADAKAAIACAAIABABIAIAFIABABQAHADAKADIAJAEQAIAEAIAAQAIACAJAFQAGABAEAEQATADgPAZQgFALgKARIgQAbIgCAEQgNAPgLAOQgTAZgOAMQgXASgPACIgDAAg");
	this.shape_13.setTransform(0.6355,2.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAGBnIgDAAIgDAAQgOgBgXgOQgPgKgUgWIgwg7IgCgCIgGgJIgDgEQgjgoAkgJIABABQAIgFAGACQAGgBAHgEQAKgBAGgFQAJgDAGgEIAEgDIAGgDIABgBIAIgFIACgBIAJgCIAgAPIABgBIACABIAAAAIADABIACgBIABAAIAAgBIABAAIAggOQAKADAKABIACAAIABABIAJAEIAAABQAHAEALACIAKADQAIADAIAAQAJACAJAEQAGABAFADQAUADgQAZQgGALgKARIgSAbIgCAEQgNAPgLAPQgVAYgOAMQgYASgPACIgCAAg");
	this.shape_14.setTransform(0.6228,2.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AAABmQgPgCgXgOQgPgKgVgWIgyg7IgCgCIgHgKIgCgDQgmgqAngGIABABQAIgEAGACQAHgBAHgEQAKAAAHgFQAKgDAFgDIAFgDIAHgEIAAAAIAJgFIABgBIAKgDIAgAQIABgBIACAAIABAAIACACIACgBIACgCIAAABIAhgPQAKAEAKABIACAAIABABIAJAFIAAAAQAHAEAMABIALADQAIADAJAAQAJABAKADQAGABAFACQAWACgTAaIgRAcIgSAbIgDAEIgZAeQgVAZgPAMQgYASgPABIgDAAIgDABIgCAAg");
	this.shape_15.setTransform(0.6099,2.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AAABkQgPgBgYgPQgPgKgWgWIg0g8IgCgCIgHgJIgCgEQgpgrAqgDIABAAQAIgDAHACQAHAAAIgDQALAAAHgEQAKgDAGgDIAFgDIAGgEIABAAIAJgFIABgBIAKgDIAhAPIABgBIACABIAAAAIACABIADgBIAAAAIABgBIABABIAhgPQAKAEAKABIACABIABAAIAKAFIAAAAQAHAEANABIALACQAIADAJgBIAUADQAHABAFACQAXAAgTAbQgHAMgLAQIgUAcIgDAEIgaAdQgWAZgPAMQgZATgPABIgDAAIgDAAIgCAAg");
	this.shape_16.setTransform(0.5972,2.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AAABjQgPgCgZgPQgQgKgWgWIg2g8IgCgCIgHgJIgDgEQgrgtAsgBIACABQAIgDAHADQAIAAAIgDQAMABAHgEQALgCAGgDIAFgDIAHgEIAAAAIAJgFIACgCIAKgDIAhAQIABgBIACAAIAAAAIADACIACgBIAAgBIACgBIAAABIAigPQAKAFAKACIACAAIACABIAJAEIAAABQAIADANABIALABQAJACAKgBQAJAAALACQAIAAAFACQAYAAgUAbIgUAdIgUAbIgDAEIgbAeQgXAZgPAMQgbASgPABIgDAAIgDABIgBAAg");
	this.shape_17.setTransform(0.5729,2.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgBBhQgPgCgZgPQgQgKgXgWIg4g8IgCgCIgIgJIgDgEQgtgvAvACIACAAQAIgBAIACQAIABAIgDQAMACAJgEQAKgBAHgDIAFgDIAHgEIABAAIAIgFIACgCIAKgDIAiAQIABgCIACABIAAAAIADACIACgBIAAgBIACgBIAAABIAigPQALAFAKACIACAAIACABIAJAFIABAAQAHADAOAAIAMACQAJABAKgBQAKgBAMACQAHgBAGACQAZgCgWAdQgHALgNARIgWAbIgDAEIgcAeQgYAZgPAMQgbATgPABIgDAAIgDAAIgCAAg");
	this.shape_18.setTransform(0.5529,2.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgBBgQgPgCgagPQgQgKgYgXIg6g8IgCgDIgIgJIgDgDQgvgxAxAEIACABQAJgBAIADQAJAAAIgBQANABAIgCQAMgBAGgDIAFgDIAIgEIAAAAIAJgFIACgCIAKgEIAjAQIAAgBIACABIABAAIACABIACgBIADgBIAAABIAjgQQAKAGALACIACABIABABIAKAEIAAAAQAIAEAOgBIANABQAJABALgCIAWAAQAIgBAGABQAbgCgXAdIgWAcIgWAcIgEAEIgdAeQgZAZgPALQgcATgPABIgDAAIgDABIgCAAg");
	this.shape_19.setTransform(0.541,2.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgBBeQgQgCgagPQgRgKgYgXIg8g9IgCgCIgIgJIgDgEQgygyA0AHIABABQAKgBAIADQAKABAIgBQANACAKgCQALgBAHgCIAFgDIAIgEIABAAIAIgFIADgCIAKgEIAjAQIAAgCIACABIABAAIADACIABgBIADgCIAAACIAjgQQALAGALACIACABIACABIAJAEIABABQAHADAPgBIANAAQAKAAALgCQALgBAMAAQAJgBAGABQAcgEgZAeQgIAMgOARIgYAbIgDAEIgeAeQgaAZgQAMQgdATgPABIgDAAIgDAAIgBAAg");
	this.shape_20.setTransform(0.5212,2.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgCBdQgPgCgcgQQgQgKgagXIg9g9IgCgCIgJgJIgDgEQg0gzA2AJIACAAQAKAAAJAEQAJABAJgBQAOADAKgCQAMAAAHgCIAFgDIAIgEIABAAIAJgGIACgBIAKgFIAkARIAAgCIACABIABAAIADABIABgBIADgBIAAABIAkgQQALAHALADIACABIACAAIAKAFIAAAAQAIADAPgBIAOgBQAKAAALgDIAZgCIAPgBQAdgEgaAeQgIAMgPARIgZAbIgEAEIgfAeQgbAagQALQgdATgPABIgDAAIgDABIgCAAg");
	this.shape_21.setTransform(0.5086,1.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AADBbIgDAAIgCAAQgPgCgcgQQgRgKgagXIg/g9IgDgCIgIgJIgEgEQg2g1A4AMIACAAQALABAJADQAKACAJAAQAPADAKgBQAMABAHgDIAGgCIAIgEIABgBIAJgFIACgCIAKgFIAkARIABgCIACABIABAAIACACIACgBIABgBIACgBIAAABIAkgQQALAHALAEIADAAIABABIALAEIAAABQAIADAQgCIAOgBQAKgBAMgDIAZgDQAJgCAHAAQAegFgaAfQgJAMgQARIgaAbIgEAEIggAeQgbAagRALQgeATgPABIgDAAg");
	this.shape_22.setTransform(0.4966,1.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AACBaIgCAAIgDAAQgPgCgdgQQgRgKgbgYIhBg9IgCgCIgJgJIgEgEQg4g3A7AOIACABQALABAJAEQALACAJABQAPADALAAQANAAAHgCIAGgCIAIgEIABgBIAJgFIACgCQAFgCAGgEIAkARIABgBIACAAIABAAIACACIACgBIABgBIACgBIAAACIAlgRQALAIALAEIADABIABABIALAEIAAAAQAIADARgCIAOgCQALgBAMgEIAagEIARgDQAfgGgcAgIgZAdIgbAcIgEADIghAfQgdAagRALQgfATgOABIgEAAg");
	this.shape_23.setTransform(0.4769,1.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AACBYIgDAAIgCAAQgPgCgegQQgRgKgcgYIhDg9IgDgDIgIgIIgEgEQg7g5A9ARIACABQAMACAKADQALADAJABQAQAEALAAQAOABAHgCIAGgCIAIgEIABgBIAJgFIADgCIAKgGIAlARIABgCIACABIABAAIADACIABgBIABgBIACgBIAAACIAmgRQALAIALAEIADABIACABIAKAEQAIADASgDIAPgCQALgCAMgDIAbgGIARgDQAhgHgdAgQgKAMgRARIgcAdIgEADIgiAeQgdAagRALQggATgPABIgDAAg");
	this.shape_24.setTransform(0.4588,1.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AABBYIgCAAIgDAAQgPgCgegRQgRgKgdgYIhFg9IgDgDIgJgIIgEgEQg9g6BAATIACABIAWAGIAVAFQARAEALABQAPACAHgDIAGgCIAIgEIABgBIAKgFIACgBIALgHIAlARIABgCIACABIABAAIADACIABgBIABgBIACgBIAAACIAmgRQAMAIALAFIADABIACABIALAEIAAAAQAIADASgEIAQgCIAYgGIAcgHIARgEQAjgJgfAiQgKAMgSARIgdAdIgFADIgiAeQgfAagRALQghATgOABIgEAAg");
	this.shape_25.setTransform(0.4587,1.389);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AABBYIgCAAIgDAAQgPgCgfgRQgRgKgegYQgegagogkIgEgCIgJgJIgEgEQhAg8BDAWIACABIAXAHIAWAGQARAEAMACQAPACAHgCIAHgCIAIgEIABgBIAKgFIACgCIALgHIAmARIAAgCIADABIAAAAIADACIACgBIABgBIACgBIAAACIAngRQALAJAMAFIADABIABABIALAEQAJACASgDIARgEIAYgHIAdgIQALgDAHgBQAkgKggAjQgKAMgTARIgeAcIgFADIgjAfQggAagRALQgiATgOABIgEAAg");
	this.shape_26.setTransform(0.4396,1.1224);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AABBZIgDAAIgDAAQgPgDgfgRQgSgKgegYQgegZgrglIgDgDIgJgIIgFgEQhCg9BGAYIACABIAYAIIAWAGQASAFAMACQAQADAHgCIAHgCIAIgEIABgBIAKgGIACgBIALgIIAnASIAAgCIADABIABAAIACACIACgBIABgBIACgBIAAACIAngSQAMAKAMAFIADABIABABIAMAEQAIACATgEIARgEIAagHIAdgKIATgFQAlgKghAjIgeAdIgfAdIgFADIglAeQggAbgSAKQgiAUgPABIgDAAg");
	this.shape_27.setTransform(0.4205,0.8389);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AABBZIgDAAIgDAAQgPgDgggRQgSgKgfgZQgfgYgrgmIgEgCIgJgJIgFgEQhEg/BIAbIACABIAZAJIAXAHQASAFANADQAQADAHgCIAHgCIAJgEIABgBIAKgFIACgCQAGgDAFgFIAoASIAAgCIACABIABAAIACACIADgBIABgBIACgBIAAACIAogSQALAKAMAGIADABIACABIALAEQAJACAUgEIARgFIAagJIAfgKIATgGQAngLgjAkQgLAMgUARIggAcIgFADIgmAfQghAbgSAKQgjAUgPABIgDAAg");
	this.shape_28.setTransform(0.3954,0.5713);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgDBZQgOgBgkgTQgkgVhehPQhehRBWAiQBVAiAUgFQAVgFAUgRIAoASIAAgDIACABIADACIAEgCIACgBIAAADIAogSQAUARAVAFQAUAFBVgiQBWgiheBRQheBQgkAUQgkATgOABIgEAAIgCAAIgBAAg");
	this.shape_29.setTransform(0.3716,0.299);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-9.2,46.599999999999994,25.8);


(lib.mouthsmileoouch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgDBZQgOgBgkgTQgkgVhehPQhehRBWAiQBVAiAUgFQAVgFAUgRIAoASIAAgDIACABIADACIAEgCIACgBIAAADIAogSQAUARAVAFQAUAFBVgiQBWgiheBRQheBQgkAUQgkATgOABIgEAAIgCAAIgBAAg");
	this.shape.setTransform(0.3716,0.299);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AABBZIgDAAIgDAAQgPgDgggRQgSgKgfgZQgfgYgrgmIgEgCIgJgJIgFgEQhEg/BIAbIACABIAZAJIAXAHQASAFANADQAQADAHgCIAHgCIAJgEIABgBIAKgFIACgCQAGgDAFgFIAoASIAAgCIACABIABAAIACACIADgBIABgBIACgBIAAACIAogSQALAKAMAGIADABIACABIALAEQAJACAUgEIARgFIAagJIAfgKIATgGQAngLgjAkQgLAMgUARIggAcIgFADIgmAfQghAbgSAKQgjAUgPABIgDAAg");
	this.shape_1.setTransform(0.3954,0.5713);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AABBZIgDAAIgDAAQgPgDgfgRQgSgKgegYQgegZgrglIgDgDIgJgIIgFgEQhCg9BGAYIACABIAYAIIAWAGQASAFAMACQAQADAHgCIAHgCIAIgEIABgBIAKgGIACgBIALgIIAnASIAAgCIADABIABAAIACACIACgBIABgBIACgBIAAACIAngSQAMAKAMAFIADABIABABIAMAEQAIACATgEIARgEIAagHIAdgKIATgFQAlgKghAjIgeAdIgfAdIgFADIglAeQggAbgSAKQgiAUgPABIgDAAg");
	this.shape_2.setTransform(0.4205,0.8389);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AABBYIgCAAIgDAAQgPgCgfgRQgRgKgegYQgegagogkIgEgCIgJgJIgEgEQhAg8BDAWIACABIAXAHIAWAGQARAEAMACQAPACAHgCIAHgCIAIgEIABgBIAKgFIACgCIALgHIAmARIAAgCIADABIAAAAIADACIACgBIABgBIACgBIAAACIAngRQALAJAMAFIADABIABABIALAEQAJACASgDIARgEIAYgHIAdgIQALgDAHgBQAkgKggAjQgKAMgTARIgeAcIgFADIgjAfQggAagRALQgiATgOABIgEAAg");
	this.shape_3.setTransform(0.4396,1.1224);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AABBYIgCAAIgDAAQgPgCgegRQgRgKgdgYIhFg9IgDgDIgJgIIgEgEQg9g6BAATIACABIAWAGIAVAFQARAEALABQAPACAHgDIAGgCIAIgEIABgBIAKgFIACgBIALgHIAlARIABgCIACABIABAAIADACIABgBIABgBIACgBIAAACIAmgRQAMAIALAFIADABIACABIALAEIAAAAQAIADASgEIAQgCIAYgGIAcgHIARgEQAjgJgfAiQgKAMgSARIgdAdIgFADIgiAeQgfAagRALQghATgOABIgEAAg");
	this.shape_4.setTransform(0.4587,1.389);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AACBYIgDAAIgCAAQgPgCgegQQgRgKgcgYIhDg9IgDgDIgIgIIgEgEQg7g5A9ARIACABQAMACAKADQALADAJABQAQAEALAAQAOABAHgCIAGgCIAIgEIABgBIAJgFIADgCIAKgGIAlARIABgCIACABIABAAIADACIABgBIABgBIACgBIAAACIAmgRQALAIALAEIADABIACABIAKAEQAIADASgDIAPgCQALgCAMgDIAbgGIARgDQAhgHgdAgQgKAMgRARIgcAdIgEADIgiAeQgdAagRALQggATgPABIgDAAg");
	this.shape_5.setTransform(0.4588,1.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AACBaIgCAAIgDAAQgPgCgdgQQgRgKgbgYIhBg9IgCgCIgJgJIgEgEQg4g3A7AOIACABQALABAJAEQALACAJABQAPADALAAQANAAAHgCIAGgCIAIgEIABgBIAJgFIACgCQAFgCAGgEIAkARIABgBIACAAIABAAIACACIACgBIABgBIACgBIAAACIAlgRQALAIALAEIADABIABABIALAEIAAAAQAIADARgCIAOgCQALgBAMgEIAagEIARgDQAfgGgcAgIgZAdIgbAcIgEADIghAfQgdAagRALQgfATgOABIgEAAg");
	this.shape_6.setTransform(0.4769,1.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AADBbIgDAAIgCAAQgPgCgcgQQgRgKgagXIg/g9IgDgCIgIgJIgEgEQg2g1A4AMIACAAQALABAJADQAKACAJAAQAPADAKgBQAMABAHgDIAGgCIAIgEIABgBIAJgFIACgCIAKgFIAkARIABgCIACABIABAAIACACIACgBIABgBIACgBIAAABIAkgQQALAHALAEIADAAIABABIALAEIAAABQAIADAQgCIAOgBQAKgBAMgDIAZgDQAJgCAHAAQAegFgaAfQgJAMgQARIgaAbIgEAEIggAeQgbAagRALQgeATgPABIgDAAg");
	this.shape_7.setTransform(0.4966,1.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgCBdQgPgCgcgQQgQgKgagXIg9g9IgCgCIgJgJIgDgEQg0gzA2AJIACAAQAKAAAJAEQAJABAJgBQAOADAKgCQAMAAAHgCIAFgDIAIgEIABAAIAJgGIACgBIAKgFIAkARIAAgCIACABIABAAIADABIABgBIADgBIAAABIAkgQQALAHALADIACABIACAAIAKAFIAAAAQAIADAPgBIAOgBQAKAAALgDIAZgCIAPgBQAdgEgaAeQgIAMgPARIgZAbIgEAEIgfAeQgbAagQALQgdATgPABIgDAAIgDABIgCAAg");
	this.shape_8.setTransform(0.5086,1.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgBBeQgQgCgagPQgRgKgYgXIg8g9IgCgCIgIgJIgDgEQgygyA0AHIABABQAKgBAIADQAKABAIgBQANACAKgCQALgBAHgCIAFgDIAIgEIABAAIAIgFIADgCIAKgEIAjAQIAAgCIACABIABAAIADACIABgBIADgCIAAACIAjgQQALAGALACIACABIACABIAJAEIABABQAHADAPgBIANAAQAKAAALgCQALgBAMAAQAJgBAGABQAcgEgZAeQgIAMgOARIgYAbIgDAEIgeAeQgaAZgQAMQgdATgPABIgDAAIgDAAIgBAAg");
	this.shape_9.setTransform(0.5212,2.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgBBgQgPgCgagPQgQgKgYgXIg6g8IgCgDIgIgJIgDgDQgvgxAxAEIACABQAJgBAIADQAJAAAIgBQANABAIgCQAMgBAGgDIAFgDIAIgEIAAAAIAJgFIACgCIAKgEIAjAQIAAgBIACABIABAAIACABIACgBIADgBIAAABIAjgQQAKAGALACIACABIABABIAKAEIAAAAQAIAEAOgBIANABQAJABALgCIAWAAQAIgBAGABQAbgCgXAdIgWAcIgWAcIgEAEIgdAeQgZAZgPALQgcATgPABIgDAAIgDABIgCAAg");
	this.shape_10.setTransform(0.541,2.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgBBhQgPgCgZgPQgQgKgXgWIg4g8IgCgCIgIgJIgDgEQgtgvAvACIACAAQAIgBAIACQAIABAIgDQAMACAJgEQAKgBAHgDIAFgDIAHgEIABAAIAIgFIACgCIAKgDIAiAQIABgCIACABIAAAAIADACIACgBIAAgBIACgBIAAABIAigPQALAFAKACIACAAIACABIAJAFIABAAQAHADAOAAIAMACQAJABAKgBQAKgBAMACQAHgBAGACQAZgCgWAdQgHALgNARIgWAbIgDAEIgcAeQgYAZgPAMQgbATgPABIgDAAIgDAAIgCAAg");
	this.shape_11.setTransform(0.5529,2.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAABjQgPgCgZgPQgQgKgWgWIg2g8IgCgCIgHgJIgDgEQgrgtAsgBIACABQAIgDAHADQAIAAAIgDQAMABAHgEQALgCAGgDIAFgDIAHgEIAAAAIAJgFIACgCIAKgDIAhAQIABgBIACAAIAAAAIADACIACgBIAAgBIACgBIAAABIAigPQAKAFAKACIACAAIACABIAJAEIAAABQAIADANABIALABQAJACAKgBQAJAAALACQAIAAAFACQAYAAgUAbIgUAdIgUAbIgDAEIgbAeQgXAZgPAMQgbASgPABIgDAAIgDABIgBAAg");
	this.shape_12.setTransform(0.5729,2.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAABkQgPgBgYgPQgPgKgWgWIg0g8IgCgCIgHgJIgCgEQgpgrAqgDIABAAQAIgDAHACQAHAAAIgDQALAAAHgEQAKgDAGgDIAFgDIAGgEIABAAIAJgFIABgBIAKgDIAhAPIABgBIACABIAAAAIACABIADgBIAAAAIABgBIABABIAhgPQAKAEAKABIACABIABAAIAKAFIAAAAQAHAEANABIALACQAIADAJgBIAUADQAHABAFACQAXAAgTAbQgHAMgLAQIgUAcIgDAEIgaAdQgWAZgPAMQgZATgPABIgDAAIgDAAIgCAAg");
	this.shape_13.setTransform(0.5972,2.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAABmQgPgCgXgOQgPgKgVgWIgyg7IgCgCIgHgKIgCgDQgmgqAngGIABABQAIgEAGACQAHgBAHgEQAKAAAHgFQAKgDAFgDIAFgDIAHgEIAAAAIAJgFIABgBIAKgDIAgAQIABgBIACAAIABAAIACACIACgBIACgCIAAABIAhgPQAKAEAKABIACAAIABABIAJAFIAAAAQAHAEAMABIALADQAIADAJAAQAJABAKADQAGABAFACQAWACgTAaIgRAcIgSAbIgDAEIgZAeQgVAZgPAMQgYASgPABIgDAAIgDABIgCAAg");
	this.shape_14.setTransform(0.6099,2.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AAGBnIgDAAIgDAAQgOgBgXgOQgPgKgUgWIgwg7IgCgCIgGgJIgDgEQgjgoAkgJIABABQAIgFAGACQAGgBAHgEQAKgBAGgFQAJgDAGgEIAEgDIAGgDIABgBIAIgFIACgBIAJgCIAgAPIABgBIACABIAAAAIADABIACgBIABAAIAAgBIABAAIAggOQAKADAKABIACAAIABABIAJAEIAAABQAHAEALACIAKADQAIADAIAAQAJACAJAEQAGABAFADQAUADgQAZQgGALgKARIgSAbIgCAEQgNAPgLAPQgVAYgOAMQgYASgPACIgCAAg");
	this.shape_15.setTransform(0.6228,2.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AAGBpIgDAAIgCAAQgPgCgVgNQgQgKgTgWIgug7IgBgCIgHgJIgCgEQghgmAigLIABAAQAHgFAFACQAGgBAHgGQAJAAAGgHQAIgDAGgEIAEgDIAGgDIABgBIAIgFIACgBIAJgCIAfAPIABAAIACAAIAAAAIADACIABgBIACgCIABABIAfgPQAKADAKAAIACAAIABABIAIAFIABABQAHADAKADIAJAEQAIAEAIAAQAIACAJAFQAGABAEAEQATADgPAZQgFALgKARIgQAbIgCAEQgNAPgLAOQgTAZgOAMQgXASgPACIgDAAg");
	this.shape_16.setTransform(0.6355,2.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AAGBqIgDAAIgCAAQgPgBgVgNQgPgKgSgWIgsg8IgCAAIgGgKIgCgEQgfgkAggOIABABQAGgGAFABQAGgBAGgGQAIgBAGgHIANgIIAEgDIAGgDIABgBIAIgFIACgBIAJgBIAfAPIABgBIABABIABAAIACABIACgBIABAAIABgBIAAAAIAfgOQAKACAJAAIACAAIABABIAIAFIABAAQAHAEAKADIAIAFQAIAEAHABQAIACAJAGQAFACAEADQASAFgPAYQgEALgJAQIgPAbIgCAEQgNAPgKAPQgTAYgNAMQgWASgPACIgDAAg");
	this.shape_17.setTransform(0.6597,2.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AAHBsIgDAAIgCAAQgPgBgUgNQgPgKgSgWIgqg7IgBgCIgGgJIgCgDQgdgjAdgQIABAAQAGgHAFACQAFgCAGgGQAIgCAFgHIAMgJIAEgDIAGgDIABgBIAIgFIABgBIAJgBIAfAPIABAAIABAAIABAAIACABIACgBIABAAIABgBIAAAAIAegOIATACIACAAIABAAIAIAFIABABQAGAEAKAEIAIAEQAHAFAHABQAHADAIAGQAFADAEAEQARAFgNAXIgNAcIgOAbIgCAEQgMAPgJAOQgSAZgNAMQgWASgPACIgCAAg");
	this.shape_18.setTransform(0.6801,2.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AAHBtIgDAAIgCAAQgOgBgUgNQgPgKgRgVIgog7IgBgCIgGgIIgCgEQgaghAagTIABAAQAGgHAEABQAFgCAGgHQAHgCAFgIIAMgJIADgDIAGgDIABgBIAHgFIACgBIAJAAIAdAOIAEAAIACACIABgBIABgBIACgBIAAABIAdgOQAKABAJgBIACAAIABABIAIAFIABABIAPAIIAHAFQAHAGAHABQAHADAHAHIAJAHQAPAHgMAWQgEALgIARIgNAbIgBAEIgVAdQgRAYgNANQgUARgPACIgDAAg");
	this.shape_19.setTransform(0.6917,3.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AAHBvIgDAAIgCAAQgOgBgTgNQgPgJgQgWIgmg7IgBgCIgGgIIgCgDQgXggAXgVIABAAQAFgIAEABQAEgDAGgHQAHgDAEgHIALgLIAEgDIAFgDIABgBIAIgFIABgBIAJAAIAdAPIADAAIACABIACAAIABgBIABgBIABAAIAcgOIATAAIABAAIABAAIAIAGIABABIAOAJIAHAGQAHAGAGABQAHAEAHAIIAHAHQAOAIgKAVIgLAcIgMAbIgBAEQgLAOgJAPQgQAYgMANQgUARgPACIgDAAg");
	this.shape_20.setTransform(0.7125,3.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AAIBxIgDAAIgCAAQgPgBgSgMQgOgKgQgVIgkg7IgBgCIgFgIIgCgDQgVgfAVgXIAAAAQAFgJAEABQAEgDAFgHQAGgEAEgJIAKgLIAEgCIAFgEIABgBIAHgDIACgCIAIABIAdANIABABIACAAIACABIACgBIABAAIABgBIABAAIAcgNIASgBIABgBIABABIAIAFIAAABIAOAJIAHAGQAGAHAGACQAGAFAGAHQAEAEADAFQANAJgJAVQgDAKgHARIgKAbIgCAEQgKAOgIAPQgPAYgNAMQgTASgPACIgCAAg");
	this.shape_21.setTransform(0.7256,3.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AAEBzQgPgBgSgMQgOgKgPgVIgig6IgBgCIgFgKIgBgCQgUgdATgaIABABQAEgKADABQAEgDAFgJQAFgEADgJIAKgLIAEgDIAFgEIAAAAIAIgEIABgBIAJABIAcANIABAAIACAAIACABIABgBIABAAIACgBIABAAIAbgMIASgDIABAAIABAAIAHAGIABAAIANAKIAGAHQAGAHAGADQAFAEAGAKIAHAJQALAJgIAVIgIAbIgKAaIgBAEIgSAeQgOAXgMANQgSASgQACIgCAAIgCAAIgCAAg");
	this.shape_22.setTransform(0.7368,3.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AAEB1QgPgBgRgMQgOgKgOgUQgVglgLgWIgBgCIgFgJIgBgDQgRgbAQgcIABAAQAEgKACABIAIgNQAFgEADgKIAJgMIADgDIAFgDIABAAIAHgFIABgBIAJABIAbAOIACAAIABABIACABIACgBIABAAIABgBIABgBIAbgNIARgCIACgBIAAABIAIAFIAAABIANAKIAFAIQAGAHAFAEQAFAEAGAKIAFAKQALAKgHAUQgCAKgGAQIgIAcIgBAEQgJAOgIAOQgNAYgMANQgRASgQACIgCAAIgCAAIgCAAg");
	this.shape_23.setTransform(0.7587,3.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AAEB3QgPgBgQgMQgNgKgOgUQgVglgJgVIgBgCIgFgKIgBgDQgOgYAOgfIAAAAQAEgKACAAIAHgNQAEgFACgLIAJgMIADgDIAFgEIAAAAIAIgFIABgBIAIADIAbANIACAAIABAAIACABIACgBIABAAIABgBIAbgMIARgFIACAAIAAAAIAHAGIABABIAMALIAFAIQAFAJAFACQAFAGAFAKIAFALQAJALgGATQgCALgEAPIgIAcIgBAEQgIAOgHAOQgNAYgLANQgRARgPACIgCAAIgDABIgCAAg");
	this.shape_24.setTransform(0.7761,3.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AAFB5QgPgBgPgLQgOgKgNgUQgUgmgIgVIgBAAIgEgKIgBgEQgMgXALghQAEgMABABIAHgPQADgFACgKQAEgJAEgFIADgCIAFgEIAAgBIAHgEIABgBIAJACIAaANIACABIABABIAAAAIACABIABgBIABAAIACgCIAagNIARgFIACAAIAAAAIAHAGIABABQAGAFAFAHIAEAIQAFAJAEAEQAFAFAEAMIAFALQAHAMgEASQgBALgEAPIgGAcIgBAEQgIAOgHAOQgLAYgMANQgPARgQACIgCAAIgCABIgCAAg");
	this.shape_25.setTransform(0.778,3.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AAFB7QgOgBgPgKQgOgLgLgUQgUgmgHgUIAAgBIgFgKIgBgEQgJgUAIgkIABAAQACgMACAAIAFgPQADgFACgNQADgIAEgFIADgDIAEgDIABgBIAHgFIABgBIAIADIAaAOIACAAIABAAIACABIABgBIABAAIABgBIAagNIARgFIABgBIABABIAHAFIABACQAFAEAFAIIADAJIAJANQAEAGAEAMIAEAMQAGAOgDAQIgEAaIgFAcIAAAFIgOAcQgLAXgLAOQgPAQgPADIgCAAIgDAAIgCAAg");
	this.shape_26.setTransform(0.7993,3.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AAGB9QgPgBgOgLQgOgKgLgUQgTgmgFgTIgBgBIgEgKIAAgEQgIgTAGgnIABAAQACgMABAAIAFgRQACgFABgNQADgIAEgGIACgDIAFgDIAAgBIAHgEIABgBIAIADIAZANIACABIABAAIACABIACgBIABAAIABgBIAZgNIARgGIABgBIAAABIAHAFIABABQAGAGADAHIADAKIAIAOQAEAGAEANIADANQAFAOgCARQAAAKgDAPIgEAcIAAAEQgHAOgGAPQgKAXgLANQgOARgPACIgCAAIgCABIgCAAg");
	this.shape_27.setTransform(0.8202,3.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AAGB/QgPgBgOgKQgNgKgKgUQgTgngEgSIAAgCIgEgKIAAgDQgFgSADgpIADgNIAEgRQACgGAAgNQADgJAEgGIACgDIAEgEIAAAAIAHgEIABgBIAIADIAbAOIABAAIABABIACgBIABAAIACgCIAYgMIAQgHIABgBIAAABIAHAGIABABQAGAFADAIIACAKIAIAPQADAHADANIADAOQADAPAAAQQAAAKgCAQIgDAcIAAAEQgHANgFAPQgJAXgKANQgOARgPACIgCAAIgCABIgCAAg");
	this.shape_28.setTransform(0.8561,3.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AAGCBQgfgCgTgnQgTgngCgSIgDgLIgBgDQgCgRABgrIABgOIAEgSIABgUQACgMAGgHIADgEIABAAIAHgEIAAgBIAkASIABABIACgBIAqgWIABgBIAAABIAHAGQAGAGADAJIACALIAGAPQAFAMADAYQACAQABAPQABASgEAkIAAAEQgGANgFAOQgUA5gfAAIgBAAg");
	this.shape_29.setTransform(0.8968,3.6771);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-9.2,46.599999999999994,25.8);


(lib.mouthsmilemove = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAABcQgNgBgkgTQglgUgegdQgfgcAZgQQAYgQAageQAagdACAGIArAWIABABIACgBIArgWQACgGAaAdQAaAeAYAQQAZAQgfAcQgeAdglAVQgiATgPAAIgBAAg");
	this.shape.setTransform(0,-0.0064);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAABbQgGAAgJgEQgPgFgVgMQgbgPgZgVIgQgOQgfgcAagPQAagPAagdIAEgFQAPgPAGgDQABAAAAgBQABAAAAABQABAAAAAAQABAAAAABIAVAKIACACIAEABIADACIABABIAMAFIABABIACgBIAKgGIAbgLIAHgEQADgGAaAcIAPAOIAkAfQANAJgEANQgEAJgNANQggAdgjAVIgBAAQgSALgNAEIgCABIgCABQgHADgGAAIgDgBg");
	this.shape_1.setTransform(-0.0408,0.0208);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAABbIgQgEQgOgGgWgMQgbgQgagVIgQgOQgggeAcgNQAbgNAagcIAFgFQAPgPAGgEQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAWALIACACIAFACIACABIAAABIANAEIABABIACgBIAKgFIAbgKIAIgEQAEgGAbAaIAPANQAWAQANAOQAMAJgFAOQgDAJgOANQghAegjAVIgBAAQgTALgMAFIgCAAIgCABQgIACgGAAIgDAAg");
	this.shape_2.setTransform(-0.1015,0.0458);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAABaQgHgBgJgDQgPgGgWgNQgbgQgbgWIgQgOQgigfAegLQAdgMAagbIAFgFQAPgOAHgEQAAgBABAAQAAAAABAAQAAABABAAQAAAAABABIAXALIABABIAEABIADACIABABIAMAEIACABIACgBIAKgGQAOgDAOgGIAIgDQAEgGAbAZIAQAMQAYAOALAQQALAJgFANQgFAKgNANQgiAfgjAVIgBAAQgTALgNAEIgCABIgCABIgMACIgFgBg");
	this.shape_3.setTransform(-0.1625,0.0865);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgBBZQgGgBgKgEQgPgFgWgOQgcgQgbgXIgRgOQgigfAfgLQAfgKAZgZIAGgFQAPgPAIgEQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIAZAMIABABIADABIACAAIACACIANAEIACAAIABgBIALgFQAOgDAOgFIAJgDQAFgGAbAXIAQAMQAaAMAIARQALAJgGAOQgFAKgNAMQgkAggiAVIgBAAQgUALgNAFIgCABIgDABIgKABIgHgBg");
	this.shape_4.setTransform(-0.2072,0.1144);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgCBZIgQgGQgPgFgXgOQgcgRgcgYIgQgOQgkggAhgJQAggJAagYIAFgFQAQgOAIgFQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAIAYAMIABABIAHACIABACIANACIACABIACgBIAKgFQAPgCAOgFIAJgDQAFgGAcAWQAIAGAJAEQAbALAHASQAJAKgGANQgFAKgOANQglAhgiAVIgBAAQgVALgMAFIgDAAIgCABIgLACIgHgBg");
	this.shape_5.setTransform(-0.2355,0.1632);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgCBYIgRgFQgPgGgXgOQgcgSgdgYIgRgPQgkghAigHQAigHAagXIAFgFIAYgTQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAIAYAMIAAAAIACABIADABIACABIACAAIAAACIAOACIABAAIACgBIALgFQAPgBAOgEIAJgEQAGgFAdAUQAIAFAJAEQAdAKAFATQAIAJgHAOQgFAKgOANQgmAigiAVIgBAAQgWAMgMAEIgDAAIgCABIgKABIgIgBg");
	this.shape_6.setTransform(-0.2801,0.1825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgDBXIgRgFQgPgGgXgPQgdgSgdgZIgRgPQgmgiAkgFQAjgGAagWIAGgEQAQgOAJgGQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABIAZALIABAAIABABIADACIADAAIABAAIABACIANACIACAAIACgBIALgGQAPAAAPgEIAJgDQAHgFAcATIATAIQAeAIACAUQAIAKgHAOQgGAKgOANQgoAjgiAUIgBAAQgWAMgMAEIgDABIgCABIgJABQgGAAgEgCg");
	this.shape_7.setTransform(-0.3252,0.2268);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgDBXQgHgBgKgFQgQgGgYgPQgcgSgegaIgSgPQgmgjAmgEQAkgFAagUIAGgEIAagUQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABIAZALIABAAIABABIADACIADAAIABAAIABACIAOABIACAAIABgBIAMgFQAPAAAPgDIAJgDQAIgGAdASIATAHQAgAHAAAVQAHAKgIAOQgHAKgNANQgpAkgiAUIgBAAQgWANgNADIgDABIgCABIgJAAIgKgBg");
	this.shape_8.setTransform(-0.3555,0.2444);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgDBWQgIgBgKgFQgQgGgYgRQgcgRgggbIgRgOQgoglAogDQAmgDAagTQAEgCACgDIAbgTQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAIAZANIABAAIABABIAGABIACAAIAAABIAOABIACABIACgBIAMgGQAPABAPgDIAKgCQAIgGAeAQIATAHQAiAFgCAWQAGAKgIAOQgIALgNAMQgrAlghAUIgBABQgXAMgNAEIgDAAIgCACIgHAAQgHAAgFgCg");
	this.shape_9.setTransform(-0.4005,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgEBVQgIgBgKgFQgQgHgYgQQgdgSgggbIgSgPQgpgmAqgBQAngBAagTIAHgEIAbgTQAAgBABAAQABABAAAAQABAAAAAAQABABAAAAIAaAMIABAAIABABIAEABIACAAIACABIAAABIAOABIACAAIACgBIAMgGQAPACAQgCIAKgDQAJgFAeAOIAUAGQAjADgEAXQAFAKgJAPQgHALgOAMQgsAmghAUIgBAAQgYANgNAEIgCAAIgDABIgGABQgHAAgGgDg");
	this.shape_10.setTransform(-0.4359,0.3425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgFBVQgHgCgLgFQgQgHgZgRQgdgSghgcIgSgPQgpgnArABQApAAAagSIAHgDIAcgUQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABIAaAMIABgBIABABIAEACIAEAAIAAABIAPABIACAAIACgBIAMgGQAQADAPgDIALgCQAJgFAeANIAVAFQAlABgGAZQAEAKgJAOQgIAMgOAMQgtAnghATIgBABQgZANgNADIgCABIgDABIgGAAQgHAAgHgCg");
	this.shape_11.setTransform(-0.4598,0.3725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgGBUQgHgCgLgFQgQgHgZgRQgegTghgdIgTgPQgqgoAtACQAqACAagQIAHgEIAdgUQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAbAMIABAAIABABIAEABIACAAIABAAIAAACIAQgBIACABIACgBIAMgHQAQAEAQgCIALgCQAKgFAfALIAVAEQAnAAgJAaQAEAKgKAPQgJAMgOALQguAoghAUIgBAAQgZAOgNADIgDABIgDAAIgFABQgIAAgHgDg");
	this.shape_12.setTransform(-0.4561,0.4205);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgHBTQgIgCgLgFQgQgHgagRQgdgUgigdIgTgQQgsgoAvAEQAsADAagQIAHgDQARgLAMgJQADAAACACIAbAMIABAAIABABIAEABIADAAIAAAAIABACIAPgBIADAAIACgBIAMgHQAQAFARgBIAKgDQALgEAfAJIAWADQApgBgLAbQADAKgLAPQgJAMgOALQgwAqggATIgBAAQgaAOgNADIgDABIgDAAIgFAAQgHAAgIgDg");
	this.shape_13.setTransform(-0.4182,0.4438);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgJBTIgTgIQgQgHgagSQgegUgjgeIgTgQQgsgpAwAFQAuAFAagOIAHgDQASgLAMgKQABAAAAAAQABAAABABQAAAAABAAQAAABABAAIAbANIABgBIAFADIADgBIABAAIAAACIAQgBIACAAIACgBIANgHQAQAGARgBIALgDQALgEAgAIQALACALAAQArgDgNAcQACAKgMAPQgJAMgOAMQgxAqghATIgBABQgaAOgNADIgDAAIgDABIgFAAQgHAAgJgDg");
	this.shape_14.setTransform(-0.3726,0.4938);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgKBSIgTgIQgQgHgbgTQgegUgkgeIgTgRQgtgqAxAHQAvAGAbgNIAHgDQASgKANgLIAFACIAcANIAAgBIACABIADACIADgBIABAAIAAACIARgCIACAAIACgBIANgGQAQAGARgBIAMgCQALgEAhAHIAXABQArgFgOAdQAAALgLAPQgKAMgOAMQgyArghATIgBAAQgbAPgNADIgDAAIgDABIgDAAQgIAAgKgEg");
	this.shape_15.setTransform(-0.3334,0.5333);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgMBRIgTgIQgQgIgbgTQgegUglgeIgTgSQgvgrA0AIQAwAIAagMQAFgBADgCQASgKAOgKIAEACIAdANIAAgBIAGACIACAAIABAAIABABIAQgCIACAAIADgBIAMgGQARAGARAAIAMgCQAMgEAhAFQALABANAAQAtgHgQAeQgBALgMAPQgKANgOALQg0AsggATIgBABQgcAOgNADIgDABIgDAAIgDAAQgIAAgLgEg");
	this.shape_16.setTransform(-0.2836,0.5833);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgNBQIgUgIQgQgIgcgTQgegVglgfIgUgSQgvgsA1AKQAyAJAagLIAIgCQASgKAOgLQADAAACACIAdANIAAgBIAGADIAEgBIAAACIARgDIACAAIACgBIANgHQARAIASAAIAMgCQAMgEAiAEIAYgBQAvgIgSAgQgCAKgNAQQgLAMgOAMQg0AtggATIgBAAQgcAPgOADIgDAAIgDABIgDAAQgIAAgLgFg");
	this.shape_17.setTransform(-0.2363,0.6077);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgPBPIgTgIQgRgIgcgUQgegVgmggIgUgSQgxgtA3AMQA0AKAagJIAIgDQASgJAPgMIAFACIAdAOIABgBIAFACIACgBIACAAIAAACIARgDIADAAIACgBIANgHQARAIASABIAMgCQAOgEAiACIAYgBQAxgKgVAhQgCALgNAPQgMANgOALQg2AvggASIgBABQgcAPgOADIgDAAIgDAAIgCABQgJAAgMgGg");
	this.shape_18.setTransform(-0.1964,0.6571);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgQBPIgUgJQgRgIgcgUQgfgWgnggIgUgSQgxguA4ANQA1AMAbgJIAIgCQATgJAPgMIAFACIAeAOIAAgCIAFADIAEgBIABACIARgEIACAAIADgBIANgHQASAJARABIANgBQAOgEAiABIAagDQAygLgXAiQgDALgOAPQgMANgOAMQg3AvggASIgBABQgdAPgOADIgDAAIgDAAIgDAAQgIAAgMgFg");
	this.shape_19.setTransform(-0.1459,0.6821);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgRBOIgUgJQgRgIgdgVQgfgWgnghIgVgSQgygvA6APQA3ANAagHIAJgCQASgJAQgNQADABACACIAeANIABgBIAFADIACgCIACAAIABACIARgEIACAAIADgBIANgHQASAKASABIANgBQAPgEAigBIAagDQA1gNgaAjQgDALgPAQQgMANgPAMQg4AwggASIgBAAQgeAQgNACIgDABIgEAAIgDAAQgHAAgNgGg");
	this.shape_20.setTransform(-0.103,0.7317);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgTBNIgVgJQgQgJgdgVQgfgWgpgiIgUgTQg0gwA8ARQA4APAbgHIAJgCQATgIAQgNIAFACIAeAOIABgBIACABIAEABIAEgBIAAACIARgFIADAAIADgBIANgHQASALASACIAOgCQAPgDAjgDIAagEQA3gOgcAkQgFALgPAQQgMANgPAMQg6AxgfASIgBAAQgfAQgNADIgDAAIgEAAIgBABQgJAAgOgHg");
	this.shape_21.setTransform(-0.0504,0.8017);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgUBNIgVgKQgRgJgegVQgfgXgpgiIgVgTQg1gxA+ASQA6AQAagFIAJgCQATgHARgOIAFACIAfAOIAAgBIAGACIACgBIADAAIAAACIARgFIADgBIADgBIANgHQATAMASACIAOgBQAPgEAkgEQANgBAOgEQA4gQgdAlQgGAMgQAQIgbAZQg8AygfARIgBABQgfARgOACIgDAAIgDAAQgJAAgPgGg");
	this.shape_22.setTransform(0.0053,0.8085);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AADBUQgIAAgQgHIgWgJQgRgJgdgXQgggWgqgkIgVgTQg2gyBAAUQA7ASAagEQAGAAAEgCQATgHARgOIAFACIAgAOIAAgCIAGADIACgBIACgBIABACIARgFIADAAIADgBIAOgIQASANATACQAFABAJgCQAQgDAkgFIAcgGQA6gSggAmQgHAMgQAQIgcAaQg9AygfARIgBABQgfARgOACIgDAAIgEAAg");
	this.shape_23.setTransform(0.0489,0.7491);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AACBVQgJAAgQgIIgWgJQgRgKgegWQgggXgrgkIgVgUQg3gzBCAWQA8ATAbgDIAJgBQAUgHARgPIAGADIAgAOIAAgCIACABIAEACIACgCIACAAIABACIARgGIADgBIADgBIAOgHQATANATADQAFABAJgCIA1gKIAdgHQA7gTgiAnQgHAMgRAQIgdAaQg+A0geARIgBABQghARgOABIgDABIgDAAg");
	this.shape_24.setTransform(0.1056,0.6638);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AAEBWIgDAAQgJAAgRgIIgVgKQgSgJgegXQgggYgsglIgVgTQg4g0BDAXQA+AVAbgCIAJgBQAUgHASgPIAGACIAgAPIAAgCIAGADIAFgDIAAADIASgHIADAAIADgBIAOgIQATAOATAEQAGAAAIgBIA3gMIAdgIQA9gUgkAoQgIAMgSAQIgdAaQg/A1gfARIgBABQghARgNACIgEAAg");
	this.shape_25.setTransform(0.169,0.5805);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AADBWIgDAAQgJAAgRgIIgWgKQgSgKgfgXQgggYgsglIgWgUQg4g1BEAYQBAAXAagBIAKgBQAUgGATgQIAFADIAhAOIAAgCIADABIADACIADgCIACAAIAAACIATgHIACgBIADgBIAPgHQATAPAUAEQAFAAAJgBQASgDAmgKIAdgJQA/gWgmApQgJAMgSARIgeAaQhBA1geARIgBABQgiASgNABIgEAAg");
	this.shape_26.setTransform(0.2165,0.5045);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgBBXQgJAAgSgJIgWgKQgSgKgfgYQgggYgtgmIgWgUQg6g2BGAaQBBAYAbAAQAGABAEgCQAUgFATgRIAGADIAhAPIAAgDIAGADIAFgCIABACIASgHIADgBIADgBIAPgIQATAQAUAEQAFABAKgBQASgDAmgLIAfgKQBAgYgoArQgLAMgSAQIgeAbQhCA2geARIgBABQgiASgOABIgEAAIgDAAg");
	this.shape_27.setTransform(0.2727,0.4566);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AABBYIgDAAQgJAAgSgJIgXgLQgRgKgggYQgggZgvgmIgWgVQg6g2BIAbQBCAaAbABIAKgBQAVgFATgRIAGADIAiAPIAAgDIACABIADACIADgCIADAAIAAACIATgIIADgBIADgBIAOgHQAUAQAUAFQAGABAJgCQAUgCAmgNIAfgLQBCgZgrArQgLAMgTARIgeAbQhEA3gdARIgBABQgjASgOABIgEAAg");
	this.shape_28.setTransform(0.3212,0.3788);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgDBZQgOgBgkgTQgkgVhehPQhehRBWAiQBVAiAUgFQAVgFAUgRIAoASIAAgDIACABIADACIAEgCIACgBIAAADIAogSQAUARAVAFQAUAFBVgiQBWgiheBRQheBQgkAUQgkATgOABIgEAAIgCAAIgBAAg");
	this.shape_29.setTransform(0.3716,0.299);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-9.2,46.599999999999994,18.4);


(lib.mouthsmile = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgDBZQgOgBgkgTQgkgVhehPQhehRBWAiQBVAiAUgFQAVgFAUgRIAoASIAAgDIACABIADACIAEgCIACgBIAAADIAogSQAUARAVAFQAUAFBVgiQBWgiheBRQheBQgkAUQgkATgOABIgEAAIgCAAIgBAAg");
	this.shape.setTransform(0.3716,0.299);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouthsmile, new cjs.Rectangle(-22.9,-8.6,46.599999999999994,17.799999999999997), null);


(lib.mouthmove = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAABcQgNgBgkgTQglgUgegdQgfgcAZgQQAYgQAageQAagdACAGIArAWIABABIACgBIArgWQACgGAaAdQAaAeAYAQQAZAQgfAcQgeAdglAVQgiATgPAAIgBAAg");
	this.shape.setTransform(0,-0.0064);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouthmove, new cjs.Rectangle(-13.4,-9.2,26.8,18.4), null);


(lib.mouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAABcQgNgBgkgTQglgUgegdQgfgcAZgQQAYgQAageQAagdACAGIArAWIABABIACgBIArgWQACgGAaAdQAaAeAYAQQAZAQgfAcQgeAdglAVQgiATgPAAIgBAAg");
	this.shape.setTransform(0,-0.0064);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(-13.4,-9.2,26.8,18.4), null);


(lib.idia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-443.4,-530.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.idia, new cjs.Rectangle(-443.4,-530,887,1060), null);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D08F29").s().p("Ai4IBQADgOgCgPQgBggAAggIAAg8IAAgIIgCgEIgDgFIgEgEIgCgEIgBgFIgBgEIgBgCIgBgCIgDgFIgDgEIgCgEIAAgEIAAgEIgCgFIgCgEQgTgegZgaQgbgbgWggIgPgVIgBgFIgBgIIgBgFIgCgEIgDgEIAAgEIAAgnIAAgzIAAgqIAAgIIACgEIADgFIACgEIAAgEIAAgEIAAgFIAAgEIACgEIABgFIABgEIABgEIAAgEIACgEIADgFIAFgEIAEgEIACgEQARgeAZgYQAcgcAMgnQAEgQABgRIABgEIACgFIACgEIAAgDQAEgNACgOIAAgLQAAgLgBgKQgCgSgEgRQgGgigcgVQgdgVgbgXIgCgEQgGgMgLgIQgSgOgFgXQgDgLgGgJIAAgFIAAgMIAAgJIAAgeIAAgNIACgEQAFgFgBgIQAAgGABgHIAHgeQACgIAEgIIAFgFIAOgJIAFgEIAEgEIEAADIAtAAIC3gBIB2gCIAFAEIAEAEIAPAJIAFAFQAEAIACAIIADARIAEANQABAHAAAGQgBAIAFAFIACAEIAAANIAAAeIAAAJIAAAMIAAAFQgGAJgDALQgFAXgSAOQgLAIgGAMIgCAEQgbAXgdAVQgcAVgGAiQgEARgCASQgBAKAAALIAAAEIAAAHQACAOAEANIAAADIACAEIACAFIABAEQABARAEAQQALAnAdAcQAZAYARAeIABAEIAFAEIAEAEIAEAFIACAEIAAAEIABAEIABAEIABAFIACAEIAAAEIAAAFIAAAEIAAAEIACAEIADAFIACAEIAAAIIAAAqIAAAzIAAAnIAAAEIgDAEIgCAEIgBAFIgBAIIgBAFIgPAVQgWAggbAbQgZAagTAeIgCAEIgCAFIAAAEIAAAEIgCAEIgDAEIgDAFIgBACIgBACIgBAEIgBAFIgCAEIgEAEIgDAFIgCAEIAAAIIAAA8QAAAggBAgQgCAPADAOQhlC5hbAAQhdAAhUi5g");
	this.shape.setTransform(0,2.2355);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(-35,-67.5,70,139.5), null);


(lib.HandWalkingboth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D08F29").s().p("AkTBnIgBjQIIpAAIAADTg");
	this.shape.setTransform(-1.95,-25.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D08F29").s().p("AMKF2QhegEhQgjQhagmgmhBIgEgHQg6hdidiuIAAk+QBkB3ADAMIBuB5QBMBQBgBfQBFBEB/gXQA9gMAPABQAXACAKASQAEAHACAKQAPBJACgEIAEASIAIA1QAIApgtAaIgRAIQgxAWhIAAIgdgBgAufFTIgRgIQgtgaAIgpIAMhHQACAEAPhJQACgKAEgHQAKgSAXgCQAPgBA9AMQB/AXBFhEQBghfBMhQIBuh5QADgMBkh3IAAE+QijC1g4BdQgmBBhaAmQhQAjheAEIgdABQhIAAgxgWg");
	this.shape_1.setTransform(0.025,0.016);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HandWalkingboth, new cjs.Rectangle(-98.3,-37.4,196.7,74.9), null);


(lib.handwalking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D08F29").s().p("AnYHWIgRgIQgtgaAIgpIAMhHQACAEAPhJQACgKAEgHQAKgSAXgCQAPgBA9AMQB/AXBFhEQBghgBMhQIBth4QADgOCBiXIBrh9IABgBQA3gkA5gfIAYgDQAdgDAdgOIAAE1QgfAOgfASQgHABgGADQgXAKgRAWIgBABIgEgIQh3BdhNBUQiwDDg5BhQgmBBhaAmQhQAjheAEIgdAAQhIAAgxgVgAGCiaQgOAcAggHIgCgEIgKgcIgGALg");
	this.shape.setTransform(0.4896,-0.009);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.handwalking, new cjs.Rectangle(-52.3,-49.1,105.69999999999999,98.30000000000001), null);


(lib.handfold = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D08F29").s().p("AibH9IgLgIQgfgaAFgpIAIhHQACAEAKhKIAEgQQAIgSAPgCQAKgBAqALQBXAXAuhEQBBhdA0hOQgdhAgpguQgZgchrgUQhygVgogfIgDAIIgBgBQgRgWgXgKQgGgDgHgBQgfgSgfgOIAAk1QAdAOAdADIAYADQA5AfA3AkIABABIBrB9QAzA+B1AbQA6AOAwAHIAHAHIABADIAIAJIAAAEIAAAEIABAFIADAEIAEAEIADAEIAAAFIAAAEIABAEIAEAEIADAFIADAEIAAAEIAAAEIAAAFIACAEIAEAEIADAFIADAEIgBBAQAAAdAMAZIAAAJIAAAeIAAAMQgFAIgBAKIgCAIIgBAEIgDAEIgFAFIgDAEIgCAJIgBAGIhSCSQgoBIgTAxQgaBAg+AnQg4Ajg/ADIgUABQgxAAgigVgAjAiwIgBAEQAgAHgOgcIgGgLIgLAcg");
	this.shape.setTransform(0,0.016);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.handfold, new cjs.Rectangle(-31.9,-53,63.8,106.1), null);


(lib.EYElashes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060606").s().p("AhRCWQgMg0AEhEIABgKQAviwB6gDIAKAAQgOBJguBTQgWAlgbAoIg8BWIgDgKg");
	this.shape.setTransform(-68.5846,175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020202").s().p("AkHBRQCckvFzCVQACAAAAAFQgHATgkAMQg1AShxAHQggACgdAFQibAYhfBlQgDADgDAAQgHAAAEgqg");
	this.shape_1.setTransform(-96.0658,143.8903);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AVkbfQgFgiAAgjIAAgKIAAgeQASgmgIg+IAAgKIAAgKIAAgKIAAhNIAEgBQAVgGAQgRQAPgQAJgXQAGgSADgZQABgPABgeIAEjEQAAg2gBgXQgBgrgHghIgKgpQgHgZgCgPQgEgUAAgdIAAgwQACh9gQiWQgLhlgRhMIgfh9QgQhBgCgdIgCgtQAAgdgBgPQgHg1gegZQgPgNgUgDQjFrLpGl7QgDgBAAgFQjSgpjmgTIgKAAQpUDQi7JmQg/DOhdB6QgBgTgKgCQnKg8iXlnIgFAAQgFgjAAgjQANgMAaAGQABABAAAFQC7DuF/ApIAKABIBFkPIABgJQm1hsh5mnQgCgEAAgFIgFgBQgFhKAAhLIAKAAIAAgKQC8GMG6CLIAAgFQA4hZA9hTQADgDAAgFQjJifhEkkIgBgJIgFgBQgFgxAAgyIAKAAIAAgKIAAgUQAaiBBMhOQADgDAFAAQAABfAFBeIAFABQAuE/DOCeQADADAFAAQFGmiKOCyQEWBNC2DAQHjIAB+NbQASB6AMB1IAAFoIAAAKIgBAKQgdHCh4FoIAAAKIAAAKIgFgBgAyqTiQBEg0BaghQACAAAAgFQCrgUA+BXQACADAFAAQjHABjJAYg");
	this.shape_2.setTransform(0,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.EYElashes, new cjs.Rectangle(-153.5,-191,307,382), null);


(lib.eyeballgreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("AkxExQh/h+AAizQAAiyB/h/QB/h/CyAAQCzAAB+B/QB/B/AACyQAACzh/B+Qh+B/izAAQiyAAh/h/g");
	this.shape.setTransform(14.8076,22.2065,0.5133,0.3422,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyeballgreen, new cjs.Rectangle(0,0,29.6,44.4), null);


(lib.eyeblinkmove = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiyA2QATgiAtgjQAtgkBBgCQBAgCAoAhQApAgAlAsQioh/i8B/g");
	this.shape.setTransform(25,5.63);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABqApQgugIgxgBQgwgBgvAEQg0AHg2ATQAWgnAugnQAJgJAKgGQApgeA2gCIAEAAQAzgCAmAZQANAHAdAWQAdAUAOAZQANAYAIAIQgsgQgpgIg");
	this.shape_1.setTransform(25.125,6.7707);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABwBHQgwACg2gBQg1gCgygEQg1gDg6AKQAdgzAugsQAJgKAKgIQAsgkA6gCIAggBQAdgBAdASQAdARAaAYQAbAWAQAdQAQAdAJAVQgygJgrAAg");
	this.shape_2.setTransform(25.175,8.1218);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAHBmQg5gCg0gKIhygTQAghAAbgcQAcgeAdgYQAdgZA+gBIAGAAQA7gBAgAVQAhAUAXAdQAXAeAUAeQATAfALAfQg3AAgwAHQgmAFgtAAIgYAAg");
	this.shape_3.setTransform(25.375,10.4792);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhsByIh3gfQAlhTAagiQAZgiAhgcQAigcBDgCIAkgBQAiAAAhAYQAhAYAZAgQAZAgAPAiIAgBIQg0AHgyAOQg1AOhAACIgKAAQg5AAgygOg");
	this.shape_4.setTransform(25.125,12.9437);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah8CRQhAgLg3gUQAoiFAdgnQAcgoAjgbQAjgcBHgCIAmABQAkAAAjAdQAjAdAaAhQAaAhANAmQANAmAbA8Qg5AYg2AMQg5AOhFAAIgCAAQhCAAg/gLg");
	this.shape_5.setTransform(25.225,15.7877);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAJC2QhHgBhMgFQhNgEghgYQAeiyAkgnIBGhLQAhgmApABIBOAAQAmABAiAkIBBBFQAfAhAQArQARAsAIBnQgtANg3AKQhAALhGAAIgGAAg");
	this.shape_6.setTransform(25,18.3756);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAIDQIhrAAQh5gNgdgKIAKiIQAahcAdgpQAcgpAmgpQAlgpBQgBIAIAAQBLADAhAjQAiAjAXAfQAXAfAcA8QAcA7gCCMQgpALg4AEQg7AIhEAAIgRgBg");
	this.shape_7.setTransform(25.0058,21.0556);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRD7IiYgHQg4gDgPgcIgGiMQATiBAfgxQAegxAqgwQAqgwAsgBIAwAAQBPADApArQApArAeAzQAeAyAKBDQALBDgHCAQgyAhg6ALQgoAHg9AAIg1gBg");
	this.shape_8.setTransform(24.8875,25.4378);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAHEZIicgIQhGgEgBgMQgnhNALhkQAKiJAig/QAhg/ArgwQAqgxBXgBIAKAAQBTAEAoAwQAnAwAcAvQAcAuASBpQARBpgrCNIhIAMQgoAHg4AAIgugBg");
	this.shape_9.setTransform(24.9196,28.374);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFE3IiVgHQhAgCABguQg7h5AViBQAUiAAegtQAegtAngxQAmgxBcgBIAKAAQBXAEAqA1QApA0AcBBQAcBAAKBiQALBkg8CbIg9AUQgkAMg8AAIgngBg");
	this.shape_10.setTransform(24.7592,31.3528);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AidFDQhyiUATicQATibAdgwQAcgvA1gyQA1gyApgCQAogCArAGQAsAGAwA2QAvA2AeA8QAdA9ADCOQAECQhWB0QgFAYgfgBQgggBgvABQgwAAhFADIgWAAQg0AAgYgLg");
	this.shape_11.setTransform(24.772,33.1376);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiBFUQgHgEgkgvQglgvgVhKQgWhKAChbQAGhwAvhZQAMgXAOgVQBJhkBkgBIAMAAQBeAGBDBfQATAaAOAcQApBVACBqQABAbgCAaQgUBwgcBIQgdBIgaALQgbALhFAFQhEAFg9AAQgrAAgIgEg");
	this.shape_12.setTransform(25.1727,34.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ai0EFQhKhtAAiYQAAiXBKhsQBLhsBpAAQBqAABKBsQBLBsAACXQAACYhLBtQhKBshqAAQhpAAhLhsg");
	this.shape_13.setTransform(25.525,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.3,51.800000000000004,74.2);


(lib.eyeblink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiyA2QATgiAtgjQAtgkBBgCQBAgCAoAhQApAgAlAsQioh/i8B/g");
	this.shape.setTransform(25,5.63);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AD6AAQAACZhJBsQhJBshoAAQhnAAhJhsQhJhsAAiZQAAiYBJhsQBJhsBnAAQBoAABJBsQBJBsAACYg");
	this.shape_1.setTransform(25,36.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiwEFQhJhsAAiZQAAiYBJhsQBJhsBnAAQBnAABKBsQBJBsAACYQAACZhJBsQhKBshnAAQhnAAhJhsg");
	this.shape_2.setTransform(25,36.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyeblink, new cjs.Rectangle(-1,-1,52,75.9), null);


(lib.eshonMW = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkZEaQh0h2AAikQAAijB0h2QB0h2ClAAQCmAAB0B2QB0B2AACjQAACkh0B2Qh0B2imAAQilAAh0h2g");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eshonMW, new cjs.Rectangle(-39.7,-39.9,79.5,79.9), null);


(lib.ESHONBLUEM = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7AB0C7").s().p("Ar0OeQiFotB+pHQB+pJFbj6QCjh1CbgZQCwgbClBdQAjASAgAaQEFDMB4JdIAJAyQhMi/h4iXQkMlPlTA6QlSA6jOGgQjNGgAwIOQAiFmCNEJQi8gDhBkNg");
	this.shape.setTransform(-9.4524,-24.43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7AB0C7").s().p("Ag+TrQlkgUjpl/Qjol+AaoJQAaoKEOliQEOljFjAUQFjAUDpF/QDpGAgbIJQgZIJkPFjQj+FOlLAAIgngBg");
	this.shape_1.setTransform(-8.6158,1.0555);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ESHONBLUEM, new cjs.Rectangle(-94.7,-144.2,172.2,271.29999999999995), null);


(lib.eshonB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQBiQgggGgSghQgQggAHgoQAHgpAbgZQAbgYAfAGQAfAGARAfQASAhgHAoQgHApgcAYQgWAVgYAAIgLgBg");
	this.shape.setTransform(0,7.55,1,1,0,0,0,-7.8,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eshonB, new cjs.Rectangle(0,0,15.6,19.8), null);


(lib.body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AABAFIgBgJ");
	this.shape.setTransform(31.65,285.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D08F29").s().p("Ag6LiQhPgYh9A+QBDhOAAgIIAGgFIAHgIQAJhegWhYQgCgLgGgLQgOgZgEgbQgOgTAEgYQACgSgIgQIAAgEIAAgFIAAgEIAAgEIgCgEIgCgEIgCgFIABgdQACgRgIgOQgIhjAIhlQAEgpgWgcIAAgtQAAgdgLgbQABgNgDgMQgEgNgFgNIAAgIIAAgJIAAgEIgEgJIgGgNIgCgEQAAiXAGiYIABgZQADg5gjgBQAfg3AcgNQAbgNgBgDIACgEIAGgNIADgEQAPgMAFgTIACgDIAEgFIAEgEIAFgFIABgEQAFgMACgOQC5EZC4k9QACAxAFANIACAEIAEAFIAEAEIAFAFIABADQAGATAPAMIADAEIAGANIABAEQAnAYAKAFQAKAEAeBBQgmgNACA5IABAZQAGCYAACXIgCAEIgGANIgDAJIAAAEIAAAJIAAAIQgGANgDANQgEAMABANQgLAbAAAdIAAAtQgWAcAEApQAIBlgHBjQgIAOABARIABAdIgBAFIgDAEIgBAEIAAAEIAAAEIAAAFIAAAEQgHAMAAANIABAJQADAYgNATQgFAbgNAZQgGALgDALQgVBYAIBeIAIAIIABACQgBANADAPQAFARAAAEIAAANQgBAIABAFIADAJIADAKIgBAJQgBAGABAEIACAEIAAAQQiEhJiAgJg");
	this.shape_1.setTransform(35.025,199.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(2.4,117.5,65.3,170), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.eshonMW();
	this.instance.setTransform(92.2,30.8,0.0667,0.0667,129.2599,0,0,-4.7,14.5);

	this.instance_1 = new lib.eshonMW();
	this.instance_1.setTransform(28.25,55.45,0.0696,0.0696,145.0059,0,0,0.9,13.8);

	this.instance_2 = new lib.eshonB();
	this.instance_2.setTransform(84,29.7,0.9976,0.9976,129.937,0,0,6.5,15.1);

	this.instance_3 = new lib.eshonB();
	this.instance_3.setTransform(22.5,56.1,0.9977,0.9977,129.9374,0,0,6.5,15);

	this.instance_4 = new lib.eyeballgreen();
	this.instance_4.setTransform(89.6,39.8,0.9985,0.9985,144.9632,0,0,15,24.6);

	this.instance_5 = new lib.eyeballgreen();
	this.instance_5.setTransform(27.7,66.25,0.9985,0.9985,144.9635,0,0,14.9,24.5);

	this.instance_6 = new lib.eyeblink();
	this.instance_6.setTransform(35.9,68.05,0.9992,0.9992,159.9664,0,0,24.7,38.4);

	this.instance_7 = new lib.eyeblink();
	this.instance_7.setTransform(98.9,41.55,0.9992,0.9992,159.9664,0,0,24.6,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-0.6,-0.6,136.4,114), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.eshonMW();
	this.instance.setTransform(35.7,56.55,0.0667,0.0667,9.2642,0,0,-2.9,14.9);

	this.instance_1 = new lib.eshonMW();
	this.instance_1.setTransform(89.05,99.6,0.0696,0.0696,24.9979,0,0,3.1,13.6);

	this.instance_2 = new lib.eshonB();
	this.instance_2.setTransform(38.75,64.15,0.9978,0.9978,9.9374,0,0,6.5,15.1);

	this.instance_3 = new lib.eshonB();
	this.instance_3.setTransform(92.6,104.2,0.9979,0.9979,9.9383,0,0,6.7,14.9);

	this.instance_4 = new lib.eyeballgreen();
	this.instance_4.setTransform(44.75,54.25,0.9987,0.9987,24.9628,0,0,15.1,24.6);

	this.instance_5 = new lib.eyeballgreen();
	this.instance_5.setTransform(98.65,94.7,0.9987,0.9987,24.9628,0,0,15.1,24.5);

	this.instance_6 = new lib.eyeblink();
	this.instance_6.setTransform(96.1,86.6,0.9993,0.9993,39.9654,0,0,24.8,38.3);

	this.instance_7 = new lib.eyeblink();
	this.instance_7.setTransform(41.75,45.3,0.9993,0.9993,39.9654,0,0,24.8,38.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-0.7,-0.7,141.39999999999998,131.39999999999998), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(208,143,41,0.996)").ss(1,1,1).p("ADpgMQAAAMAHASQAEAKAHASQALAeghATQgiAThggBQhqgGgnAAQhiAAgDAAQgvgEgkgUQghgTAOg0QAXg6AAgWQAAgUABABQANAIAegRQAhgTAzAEQAeADBHAGQAnAAAygBQAlADAkAUQAbAQAbANQAOAKAAAdg");
	this.shape.setTransform(53.1288,149.0387,2.2267,1.6982,0,70.8915,40.3998);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D08F29").s().p("ABjBxQhqgGgnAAIhlAAQgvgEgkgUQghgTAOg0QAXg6AAgWQAAgUABABQANAIAegRQAhgTAzAEIBlAJIBZgBQAlADAkAUQAbAQAbANQAOAKAAAdQAAAMAHASIALAcQALAeghATQggAShUAAIgOAAg");
	this.shape_1.setTransform(53.1288,149.0387,2.2267,1.6982,0,70.8915,40.3998);

	this.instance = new lib.rightwalkingleg();
	this.instance.setTransform(133.3,69.55,1.1563,0.9147,0,21.748,-109.6736,-26.5,-54.3);

	this.instance_1 = new lib.rightwalkingleg();
	this.instance_1.setTransform(165.4,98.75,2.2809,1.5047,0,70.7125,57.7766,-11.9,-42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-0.8,0.1,241.3,245.5), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(208,143,41,0.996)").ss(1,1,1).p("ADpgMQAAAMAHASQAEAKAHASQALAeghATQgiAThggBQhqgGgnAAQhiAAgDAAQgvgEgkgUQghgTAOg0QAXg6AAgWQAAgUABABQANAIAegRQAhgTAzAEQAeADBHAGQAnAAAygBQAlADAkAUQAbAQAbANQAOAKAAAdg");
	this.shape.setTransform(65.9819,156.7589,2.227,1.6984,0,55.8923,25.4017);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D08F29").s().p("ABjBxQhqgGgnAAIhlAAQgvgEgkgUQghgTAOg0QAXg6AAgWQAAgUABABQANAIAegRQAhgTAzAEIBlAJIBZgBQAlADAkAUQAbAQAbANQAOAKAAAdQAAAMAHASIALAcQALAeghATQggAShUAAIgOAAg");
	this.shape_1.setTransform(65.9819,156.7589,2.227,1.6984,0,55.8923,25.4017);

	this.instance = new lib.rightwalkingleg();
	this.instance.setTransform(113.35,60.1,1.1564,0.9148,0,6.7497,-124.6716,-26.5,-54.3);

	this.instance_1 = new lib.rightwalkingleg();
	this.instance_1.setTransform(161.25,79,2.2811,1.5048,0,55.7137,42.7778,-12,-42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,259,238.9), null);


(lib.Scene_1_tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tree
	this.instance = new lib.tree();
	this.instance.setTransform(182.75,-348.2,1.1108,1.5035,0,0,0,672,709.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(112).to({scaleX:1.1107,scaleY:1.5034,x:157.95,y:-400.5},0).wait(514));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_plata_eye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// plata_eye
	this.instance = new lib.eshonMW();
	this.instance.setTransform(400.3,386.85,0.067,0.067,-60.6465,0,0,-0.3,1);

	this.instance_1 = new lib.eshonMW();
	this.instance_1.setTransform(459,351.5,0.0699,0.0699,-45,0,0,0,1);

	this.instance_2 = new lib.eshonB();
	this.instance_2.setTransform(398.9,395.6,0.999,0.999,-60.0141,0,0,7,12.7);

	this.instance_3 = new lib.eshonB();
	this.instance_3.setTransform(454.95,358.85,0.999,0.999,-60.0136,0,0,7,12.6);

	this.instance_4 = new lib.eyeballgreen();
	this.instance_4.setTransform(394.45,382.5,0.9998,0.9998,-44.9994,0,0,14.8,22.4);

	this.instance_5 = new lib.eyeballgreen();
	this.instance_5.setTransform(450.9,345.6,0.9999,0.9999,-44.9994,0,0,14.8,22.3);

	this.instance_6 = new lib.eyeblink();
	this.instance_6.setTransform(449.25,331.6,0.9998,0.9998,-29.9988,0,0,24.4,37.6);

	this.instance_7 = new lib.eyeblink();
	this.instance_7.setTransform(391.8,368.45,0.9998,0.9998,-29.9988,0,0,24.4,37.6);

	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(426.7,-684.35,1,1,0,0,0,69.9,64.8);

	this.instance_9 = new lib.Symbol6();
	this.instance_9.setTransform(325.75,50.35,1,1,0,0,0,67.8,56.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:391.8,y:368.45,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:449.25,y:331.6,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:22.3,scaleX:0.9999,scaleY:0.9999,x:450.9,y:345.6,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:22.4,scaleX:0.9998,scaleY:0.9998,x:394.45,y:382.5,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:12.6,scaleX:0.999,scaleY:0.999,rotation:-60.0136,x:454.95,y:358.85,regX:7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:12.7,scaleX:0.999,scaleY:0.999,rotation:-60.0141,x:398.9,y:395.6,regX:7,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:1,y:351.5,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-0.3,regY:1,rotation:-60.6465,y:386.85,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_7,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:391.8,y:368.45,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:449.25,y:331.6,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:22.4,scaleX:0.9997,scaleY:0.9997,x:454.2,y:344.6,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:22.5,scaleX:0.9997,scaleY:0.9997,x:397.7,y:381.45,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:12.8,scaleX:0.9989,scaleY:0.9989,rotation:-60.0142,x:461,y:353.6,regX:7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:13,scaleX:0.9988,scaleY:0.9988,rotation:-60.0147,x:405.05,y:390.4,regX:7,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:1,y:351.5,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-0.3,regY:1,rotation:-60.6465,y:386.85,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]},30).to({state:[{t:this.instance_7,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:391.8,y:368.45,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:449.25,y:331.6,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:23.7,scaleX:0.9993,scaleY:0.9993,x:457.75,y:340.85,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:23.7,scaleX:0.9993,scaleY:0.9993,x:401.2,y:377.65,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14,scaleX:0.9985,scaleY:0.9985,rotation:-60.0196,x:464.55,y:349.8,regX:6.7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:14.1,scaleX:0.9984,scaleY:0.9984,rotation:-60.0201,x:408.5,y:386.55,regX:6.7,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:1,y:351.5,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-0.3,regY:1,rotation:-60.6465,y:386.85,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]},7).to({state:[{t:this.instance_7,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:391.8,y:368.45,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:449.25,y:331.6,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:23.7,scaleX:0.9992,scaleY:0.9992,x:457.7,y:336,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:23.8,scaleX:0.9992,scaleY:0.9992,x:401.2,y:372.85,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14.1,scaleX:0.9984,scaleY:0.9984,rotation:-60.0198,x:464.6,y:345,regX:6.7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:14.2,scaleX:0.9984,scaleY:0.9984,rotation:-60.0203,x:408.5,y:381.85,regX:6.6,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:2,y:346.7,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-0.6,regY:2,rotation:-60.6515,y:382.05,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]},9).to({state:[{t:this.instance_7,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:391.8,y:368.45,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:449.25,y:331.6,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:23.8,scaleX:0.9992,scaleY:0.9992,x:457.7,y:332.05,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:23.9,scaleX:0.9991,scaleY:0.9991,x:401.25,y:368.95,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14.1,scaleX:0.9984,scaleY:0.9984,rotation:-60.02,x:464.55,y:341,regX:6.7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:14.3,scaleX:0.9983,scaleY:0.9983,rotation:-60.0205,x:408.5,y:377.9,regX:6.6,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:3.1,y:342.75,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-0.8,regY:3.1,rotation:-60.6565,y:378.1,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]},8).to({state:[{t:this.instance_7,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:391.8,y:368.45,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:449.25,y:331.6,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:23.7,scaleX:0.9992,scaleY:0.9992,x:457.7,y:336,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:23.8,scaleX:0.9992,scaleY:0.9992,x:401.2,y:372.85,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14.1,scaleX:0.9984,scaleY:0.9984,rotation:-60.0198,x:464.6,y:345,regX:6.7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:14.2,scaleX:0.9984,scaleY:0.9984,rotation:-60.0203,x:408.5,y:381.85,regX:6.6,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:2,y:346.7,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-0.6,regY:2,rotation:-60.6515,y:382.05,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]},30).to({state:[{t:this.instance_7,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:391.8,y:368.45,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:449.25,y:331.6,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:23.7,scaleX:0.9993,scaleY:0.9993,x:457.75,y:340.85,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:23.7,scaleX:0.9993,scaleY:0.9993,x:401.2,y:377.65,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14,scaleX:0.9985,scaleY:0.9985,rotation:-60.0196,x:464.55,y:349.8,regX:6.7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:14.1,scaleX:0.9984,scaleY:0.9984,rotation:-60.0201,x:408.5,y:386.55,regX:6.7,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:1,y:351.5,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-0.3,regY:1,rotation:-60.6465,y:386.85,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]},8).to({state:[{t:this.instance_7,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:391.8,y:368.45,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:449.25,y:331.6,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:22.4,scaleX:0.9997,scaleY:0.9997,x:454.2,y:344.6,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:22.5,scaleX:0.9997,scaleY:0.9997,x:397.7,y:381.45,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:12.8,scaleX:0.9989,scaleY:0.9989,rotation:-60.0142,x:461,y:353.6,regX:7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:13,scaleX:0.9988,scaleY:0.9988,rotation:-60.0147,x:405.05,y:390.4,regX:7,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:1,y:351.5,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-0.3,regY:1,rotation:-60.6465,y:386.85,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]},9).to({state:[{t:this.instance_7,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:391.8,y:368.45,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:449.25,y:331.6,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:22.3,scaleX:0.9999,scaleY:0.9999,x:450.9,y:345.6,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:22.4,scaleX:0.9998,scaleY:0.9998,x:394.45,y:382.5,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:12.6,scaleX:0.999,scaleY:0.999,rotation:-60.0136,x:454.95,y:358.85,regX:7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:12.7,scaleX:0.999,scaleY:0.999,rotation:-60.0141,x:398.9,y:395.6,regX:7,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:1,y:351.5,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-0.3,regY:1,rotation:-60.6465,y:386.85,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]},8).to({state:[{t:this.instance_7,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:391.8,y:368.45,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:449.25,y:331.6,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:22.4,scaleX:0.9997,scaleY:0.9997,x:454.2,y:344.6,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:22.5,scaleX:0.9997,scaleY:0.9997,x:397.7,y:381.45,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:12.8,scaleX:0.9989,scaleY:0.9989,rotation:-60.0142,x:461,y:353.6,regX:7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:13,scaleX:0.9988,scaleY:0.9988,rotation:-60.0147,x:405.05,y:390.4,regX:7,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:1,y:351.5,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-0.3,regY:1,rotation:-60.6465,y:386.85,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]},30).to({state:[{t:this.instance_7,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:391.8,y:368.45,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:449.25,y:331.6,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:23.7,scaleX:0.9993,scaleY:0.9993,x:457.75,y:340.85,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:23.7,scaleX:0.9993,scaleY:0.9993,x:401.2,y:377.65,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14,scaleX:0.9985,scaleY:0.9985,rotation:-60.0196,x:464.55,y:349.8,regX:6.7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:14.1,scaleX:0.9984,scaleY:0.9984,rotation:-60.0201,x:408.5,y:386.55,regX:6.7,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:1,y:351.5,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-0.3,regY:1,rotation:-60.6465,y:386.85,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]},3).to({state:[{t:this.instance_7,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:391.8,y:368.45,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:449.25,y:331.6,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:23.7,scaleX:0.9992,scaleY:0.9992,x:457.7,y:336,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:23.8,scaleX:0.9992,scaleY:0.9992,x:401.2,y:372.85,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14.1,scaleX:0.9984,scaleY:0.9984,rotation:-60.0198,x:464.6,y:345,regX:6.7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:14.2,scaleX:0.9984,scaleY:0.9984,rotation:-60.0203,x:408.5,y:381.85,regX:6.6,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:2,y:346.7,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-0.6,regY:2,rotation:-60.6515,y:382.05,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]},4).to({state:[{t:this.instance_7,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:391.8,y:368.45,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:449.25,y:331.6,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:23.8,scaleX:0.9992,scaleY:0.9992,x:457.7,y:332.05,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:23.9,scaleX:0.9991,scaleY:0.9991,x:401.25,y:368.95,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14.1,scaleX:0.9984,scaleY:0.9984,rotation:-60.02,x:464.55,y:341,regX:6.7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:14.3,scaleX:0.9983,scaleY:0.9983,rotation:-60.0205,x:408.5,y:377.9,regX:6.6,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:3.1,y:342.75,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-0.8,regY:3.1,rotation:-60.6565,y:378.1,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]},34).to({state:[{t:this.instance_7,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:391.8,y:368.45,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:449.25,y:331.6,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:23.8,scaleX:0.9992,scaleY:0.9992,x:457.7,y:332.05,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:23.9,scaleX:0.9991,scaleY:0.9991,x:401.25,y:368.95,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14.1,scaleX:0.9984,scaleY:0.9984,rotation:-60.02,x:464.55,y:341,regX:6.7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:14.3,scaleX:0.9983,scaleY:0.9983,rotation:-60.0205,x:408.5,y:377.9,regX:6.6,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:3.1,y:342.75,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-0.8,regY:3.1,rotation:-60.6565,y:378.1,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]},173).to({state:[{t:this.instance_7,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:391.8,y:368.45,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9988,x:449.25,y:331.6,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:23.8,scaleX:0.9992,scaleY:0.9992,x:457.7,y:332.05,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:23.9,scaleX:0.9991,scaleY:0.9991,x:401.25,y:368.95,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14.1,scaleX:0.9984,scaleY:0.9984,rotation:-60.02,x:464.55,y:341,regX:6.7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:14.3,scaleX:0.9983,scaleY:0.9983,rotation:-60.0205,x:408.5,y:377.9,regX:6.6,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:3.1,y:342.75,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-0.8,regY:3.1,rotation:-60.6565,y:378.1,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]},82).to({state:[{t:this.instance_7,p:{regY:37.8,scaleX:0.9997,scaleY:0.9997,rotation:-29.9989,x:391.85,y:355.85,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:37.8,scaleX:0.9997,scaleY:0.9997,rotation:-29.9989,x:449.3,y:319,regX:24.4,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:23.9,scaleX:0.9991,scaleY:0.9991,x:457.75,y:319.35,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:23.9,scaleX:0.9991,scaleY:0.9991,x:401.2,y:356.15,regX:14.8,rotation:-44.9994,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14.2,scaleX:0.9983,scaleY:0.9983,rotation:-60.0198,x:464.55,y:328.35,regX:6.6,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:14.3,scaleX:0.9983,scaleY:0.9983,rotation:-60.0204,x:408.45,y:365.1,regX:6.6,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:4,y:330,regX:0,scaleX:0.0699,scaleY:0.0699,rotation:-45,x:459,skewX:0,skewY:0}},{t:this.instance,p:{regX:-1.2,regY:4,rotation:-60.6614,y:365.35,scaleX:0.067,scaleY:0.067,x:400.3,skewX:0,skewY:0}}]},74).to({state:[{t:this.instance_7,p:{regY:38.4,scaleX:0.9995,scaleY:0.9995,rotation:-20.035,x:404.9,y:309.65,regX:24.7,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:38.4,scaleX:0.9995,scaleY:0.9995,rotation:-20.035,x:467.8,y:283.35,regX:24.6,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:24.6,scaleX:0.9989,scaleY:0.9989,x:476.2,y:285.1,regX:15,rotation:-35.0377,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:24.6,scaleX:0.9988,scaleY:0.9988,x:414.15,y:311.55,regX:15,rotation:-35.038,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14.8,scaleX:0.9981,scaleY:0.9981,rotation:-50.0614,x:481.2,y:295.2,regX:6.5,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:15,scaleX:0.998,scaleY:0.998,rotation:-50.0624,x:419.7,y:321.7,regX:6.5,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:13.6,y:295.85,regX:1.9,scaleX:0.0697,scaleY:0.0697,rotation:-35.0126,x:475.55,skewX:0,skewY:0}},{t:this.instance,p:{regX:-3,regY:14.1,rotation:-50.7207,y:320.55,scaleX:0.0668,scaleY:0.0668,x:411.6,skewX:0,skewY:0}}]},6).to({state:[]},3).to({state:[{t:this.instance_7,p:{regY:38.4,scaleX:0.9995,scaleY:0.9995,rotation:-20.0348,x:322,y:-1.7,regX:24.7,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:38.4,scaleX:0.9995,scaleY:0.9995,rotation:-20.0348,x:385,y:-28.05,regX:24.7,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:24.6,scaleX:0.9988,scaleY:0.9988,x:393.3,y:-26.25,regX:15,rotation:-35.0373,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:24.6,scaleX:0.9988,scaleY:0.9988,x:331.35,y:0.15,regX:15.1,rotation:-35.0376,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14.9,scaleX:0.998,scaleY:0.998,rotation:-50.0616,x:398.45,y:-16.2,regX:6.6,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:15.1,scaleX:0.998,scaleY:0.998,rotation:-50.0626,x:336.85,y:10.35,regX:6.5,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:14,y:-15.5,regX:2.5,scaleX:0.0697,scaleY:0.0697,rotation:-35.0095,x:392.7,skewX:0,skewY:0}},{t:this.instance,p:{regX:-3.1,regY:15.1,rotation:-50.7226,y:9.2,scaleX:0.0668,scaleY:0.0668,x:328.75,skewX:0,skewY:0}}]},5).to({state:[]},7).to({state:[{t:this.instance_7,p:{regY:38.4,scaleX:0.9993,scaleY:0.9993,rotation:39.9654,x:398.65,y:-682,regX:24.8,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:38.3,scaleX:0.9993,scaleY:0.9993,rotation:39.9654,x:453,y:-640.7,regX:24.8,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:24.5,scaleX:0.9987,scaleY:0.9987,x:455.55,y:-632.6,regX:15.1,rotation:24.9628,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:24.6,scaleX:0.9987,scaleY:0.9987,x:401.65,y:-673.05,regX:15.1,rotation:24.9628,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14.9,scaleX:0.9979,scaleY:0.9979,rotation:9.9383,x:449.5,y:-623.1,regX:6.7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:15.1,scaleX:0.9978,scaleY:0.9978,rotation:9.9374,x:395.65,y:-663.15,regX:6.5,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:13.6,y:-627.7,regX:3.1,scaleX:0.0696,scaleY:0.0696,rotation:24.9979,x:445.95,skewX:0,skewY:0}},{t:this.instance,p:{regX:-2.9,regY:14.9,rotation:9.2642,y:-670.75,scaleX:0.0667,scaleY:0.0667,x:392.6,skewX:0,skewY:0}}]},7).to({state:[{t:this.instance_7,p:{regY:38.3,scaleX:0.9993,scaleY:0.9993,rotation:39.9652,x:380.7,y:-606.65,regX:24.9,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:38.3,scaleX:0.9993,scaleY:0.9993,rotation:39.9652,x:434.95,y:-565.4,regX:24.8,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:24.4,scaleX:0.9987,scaleY:0.9987,x:437.55,y:-557.4,regX:15.1,rotation:24.9628,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:24.6,scaleX:0.9986,scaleY:0.9986,x:383.7,y:-597.7,regX:15.2,rotation:24.9627,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14.8,scaleX:0.9979,scaleY:0.9979,rotation:9.9378,x:431.45,y:-547.9,regX:6.7,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:15,scaleX:0.9978,scaleY:0.9978,rotation:9.9368,x:377.7,y:-587.9,regX:6.6,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:12.7,y:-552.45,regX:3.5,scaleX:0.0696,scaleY:0.0696,rotation:24.9918,x:427.95,skewX:0,skewY:0}},{t:this.instance,p:{regX:-2.3,regY:14.1,rotation:9.2533,y:-595.45,scaleX:0.0667,scaleY:0.0667,x:374.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7,p:{regY:38.1,scaleX:0.8518,scaleY:1.1719,rotation:0,x:338.3,y:-517.15,regX:24.8,skewX:46.3168,skewY:45.8499}},{t:this.instance_6,p:{regY:38.1,scaleX:0.8518,scaleY:1.1719,rotation:0,x:381.5,y:-478.05,regX:24.8,skewX:46.3168,skewY:45.8499}},{t:this.instance_5,p:{regY:24.3,scaleX:0.8787,scaleY:1.1507,x:382,y:-469.95,regX:15.2,rotation:0,skewX:35.2768,skewY:25.6675}},{t:this.instance_4,p:{regY:24.4,scaleX:0.8787,scaleY:1.1507,x:338.95,y:-508.15,regX:15.3,rotation:0,skewX:35.277,skewY:25.6684}},{t:this.instance_3,p:{regY:14.7,scaleX:0.9447,scaleY:1.0957,rotation:0,x:373.35,y:-460.05,regX:6.9,skewX:23.4581,skewY:7.5397}},{t:this.instance_2,p:{regY:14.9,scaleX:0.9446,scaleY:1.0956,rotation:0,x:330.35,y:-497.8,regX:6.8,skewX:23.4568,skewY:7.5383}},{t:this.instance_1,p:{regY:9.7,y:-464.55,regX:4.5,scaleX:0.0612,scaleY:0.0801,rotation:0,x:371.05,skewX:35.2852,skewY:25.6894}},{t:this.instance,p:{regX:-0.2,regY:11.9,rotation:0,y:-505.45,scaleX:0.0634,scaleY:0.073,x:329.3,skewX:22.8604,skewY:6.7501}}]},1).to({state:[{t:this.instance_7,p:{regY:37.9,scaleX:0.9445,scaleY:1.0574,rotation:0,x:279.65,y:-445.9,regX:24.8,skewX:53.2627,skewY:51.0876}},{t:this.instance_6,p:{regY:37.9,scaleX:0.9445,scaleY:1.0574,rotation:0,x:322.85,y:-397.8,regX:24.8,skewX:53.2627,skewY:51.0876}},{t:this.instance_5,p:{regY:24.1,scaleX:0.9618,scaleY:1.0405,x:323.3,y:-389.65,regX:15.2,rotation:0,skewX:39.6904,skewY:34.5753}},{t:this.instance_4,p:{regY:24.2,scaleX:0.9617,scaleY:1.0405,x:280.2,y:-436.75,regX:15.3,rotation:0,skewX:39.6908,skewY:34.5763}},{t:this.instance_3,p:{regY:14.6,scaleX:0.9893,scaleY:1.0128,rotation:0,x:314.55,y:-381.5,regX:6.9,skewX:25.508,skewY:18.8293}},{t:this.instance_2,p:{regY:14.8,scaleX:0.9893,scaleY:1.0127,rotation:0,x:271.55,y:-428.2,regX:6.8,skewX:25.5064,skewY:18.8279}},{t:this.instance_1,p:{regY:7.7,y:-386.45,regX:4.6,scaleX:0.0669,scaleY:0.0724,rotation:0,x:312.3,skewX:39.6912,skewY:34.5886}},{t:this.instance,p:{regX:0.7,regY:10.3,rotation:0,y:-436.05,scaleX:0.0662,scaleY:0.0675,x:270.55,skewX:24.7932,skewY:18.1006}}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7,p:{regY:38.5,scaleX:0.9992,scaleY:0.9992,rotation:159.9661,x:357.4,y:-232.65,regX:24.7,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:38.4,scaleX:0.9992,scaleY:0.9992,rotation:159.9661,x:294.4,y:-206.15,regX:24.8,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:24.6,scaleX:0.9985,scaleY:0.9985,x:286.2,y:-208,regX:15,rotation:144.9631,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:24.6,scaleX:0.9985,scaleY:0.9985,x:348.2,y:-234.45,regX:15,rotation:144.9628,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:15,scaleX:0.9978,scaleY:0.9978,rotation:129.9376,x:281.05,y:-218.15,regX:6.5,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:15.1,scaleX:0.9977,scaleY:0.9977,rotation:129.9372,x:342.6,y:-244.55,regX:6.5,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:14.2,y:-218.8,regX:1.4,scaleX:0.0696,scaleY:0.0696,rotation:145.0028,x:286.8,skewX:0,skewY:0}},{t:this.instance,p:{regX:-4.2,regY:15.1,rotation:129.2617,y:-243.45,scaleX:0.0667,scaleY:0.0667,x:350.75,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7,p:{regY:38.5,scaleX:0.9992,scaleY:0.9992,rotation:159.9669,x:380.15,y:-163.7,regX:24.6,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:38.4,scaleX:0.9992,scaleY:0.9992,rotation:159.9669,x:317.15,y:-137.2,regX:24.7,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:24.6,scaleX:0.9985,scaleY:0.9985,x:308.9,y:-139.05,regX:14.9,rotation:144.963,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:24.6,scaleX:0.9985,scaleY:0.9985,x:371,y:-165.55,regX:14.8,rotation:144.9627,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:15,scaleX:0.9977,scaleY:0.9977,rotation:129.938,x:303.75,y:-149.15,regX:6.5,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:15.1,scaleX:0.9976,scaleY:0.9976,rotation:129.9375,x:365.3,y:-175.6,regX:6.4,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:14.3,y:-149.85,regX:0.5,scaleX:0.0696,scaleY:0.0696,rotation:145.0059,x:309.5,skewX:0,skewY:0}},{t:this.instance,p:{regX:-5.3,regY:15,rotation:129.2599,y:-174.5,scaleX:0.0667,scaleY:0.0667,x:373.45,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7,p:{regY:38.5,scaleX:0.9991,scaleY:0.9991,rotation:159.9676,x:380.05,y:-122.35,regX:24.6,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:38.5,scaleX:0.9991,scaleY:0.9991,rotation:159.9676,x:317.1,y:-96,regX:24.6,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:24.6,scaleX:0.9984,scaleY:0.9984,x:308.9,y:-97.75,regX:14.8,rotation:144.9629,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:24.6,scaleX:0.9984,scaleY:0.9984,x:370.9,y:-124.2,regX:14.8,rotation:144.9626,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:15,scaleX:0.9977,scaleY:0.9977,rotation:129.9383,x:303.7,y:-107.85,regX:6.4,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:15.1,scaleX:0.9976,scaleY:0.9976,rotation:129.9379,x:365.2,y:-134.25,regX:6.4,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:14.6,y:-108.55,regX:-0.6,scaleX:0.0695,scaleY:0.0695,rotation:145.009,x:309.45,skewX:0,skewY:0}},{t:this.instance,p:{regX:-6.3,regY:14.8,rotation:129.258,y:-133.2,scaleX:0.0666,scaleY:0.0666,x:373.4,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7,p:{regY:38.6,scaleX:0.9991,scaleY:0.9991,rotation:159.9684,x:380.15,y:-76.3,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:38.5,scaleX:0.9991,scaleY:0.9991,rotation:159.9684,x:317.05,y:-49.8,regX:24.6,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:24.6,scaleX:0.9984,scaleY:0.9984,x:308.8,y:-51.55,regX:14.8,rotation:144.9629,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:24.7,scaleX:0.9983,scaleY:0.9983,x:370.85,y:-78.15,regX:14.7,rotation:144.9626,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:15,scaleX:0.9976,scaleY:0.9976,rotation:129.9386,x:303.65,y:-61.75,regX:6.3,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:15.1,scaleX:0.9975,scaleY:0.9975,rotation:129.9382,x:365.15,y:-88.15,regX:6.3,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:14.8,y:-62.4,regX:-1.6,scaleX:0.0695,scaleY:0.0695,rotation:145.0121,x:309.4,skewX:0,skewY:0}},{t:this.instance,p:{regX:-7.4,regY:14.8,rotation:129.2562,y:-87.05,scaleX:0.0666,scaleY:0.0666,x:373.35,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7,p:{regY:38.5,scaleX:0.999,scaleY:0.999,rotation:159.9691,x:391.85,y:2.05,regX:24.4,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:38.5,scaleX:0.999,scaleY:0.999,rotation:159.9691,x:328.8,y:28.45,regX:24.5,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:24.6,scaleX:0.9983,scaleY:0.9983,x:320.55,y:26.65,regX:14.7,rotation:144.9628,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:24.6,scaleX:0.9983,scaleY:0.9983,x:382.55,y:0.2,regX:14.7,rotation:144.9625,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:15,scaleX:0.9975,scaleY:0.9975,rotation:129.939,x:315.3,y:16.5,regX:6.3,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:15.1,scaleX:0.9975,scaleY:0.9975,rotation:129.9386,x:376.9,y:-9.9,regX:6.2,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:14.3,y:15.85,regX:-2.1,scaleX:0.0695,scaleY:0.0695,rotation:145.0152,x:321.1,skewX:0,skewY:0}},{t:this.instance,p:{regX:-8.4,regY:14.7,rotation:129.2543,y:-8.8,scaleX:0.0666,scaleY:0.0666,x:385.05,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_7,p:{regY:38.6,scaleX:0.9994,scaleY:0.9994,rotation:-87.9875,x:692.95,y:207.25,regX:24.6,skewX:0,skewY:0}},{t:this.instance_6,p:{regY:38.5,scaleX:0.9994,scaleY:0.9994,rotation:-87.9875,x:692.1,y:139,regX:24.6,skewX:0,skewY:0}},{t:this.instance_5,p:{regY:24.7,scaleX:0.9987,scaleY:0.9987,x:696.95,y:131.9,regX:14.9,rotation:-102.9878,skewX:0,skewY:0}},{t:this.instance_4,p:{regY:24.7,scaleX:0.9987,scaleY:0.9987,x:698.15,y:199.35,regX:14.9,rotation:-102.9882,skewX:0,skewY:0}},{t:this.instance_3,p:{regY:14.9,scaleX:0.9979,scaleY:0.9979,rotation:-118.0125,x:708.1,y:130.9,regX:6.5,skewX:0,skewY:0}},{t:this.instance_2,p:{regY:15.2,scaleX:0.9978,scaleY:0.9978,rotation:-118.0138,x:709.7,y:197.95,regX:6.4,skewX:0,skewY:0}},{t:this.instance_1,p:{regY:15.5,y:136.55,regX:0.1,scaleX:0.0696,scaleY:0.0696,rotation:-102.9429,x:706.65,skewX:0,skewY:0}},{t:this.instance,p:{regX:-4.3,regY:15.6,rotation:-118.669,y:205.05,scaleX:0.0667,scaleY:0.0667,x:705.55,skewX:0,skewY:0}}]},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(547).to({_off:false},0).wait(1).to({regX:67.6,regY:56.4,x:325.55,y:50.45},0).wait(5).to({_off:true},1).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_plata_blink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// plata_blink
	this.instance = new lib.eyeblinkmove();
	this.instance.setTransform(449.25,331.6,0.9998,0.9998,-29.9988,0,0,24.4,37.6);

	this.instance_1 = new lib.eyeblinkmove();
	this.instance_1.setTransform(391.8,368.45,0.9998,0.9998,-29.9988,0,0,24.4,37.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},30).to({state:[{t:this.instance_1},{t:this.instance}]},24).to({state:[]},30).to({state:[{t:this.instance_1},{t:this.instance}]},25).to({state:[]},30).to({state:[{t:this.instance_1},{t:this.instance}]},157).to({state:[]},28).to({state:[{t:this.instance_1},{t:this.instance}]},29).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_plata = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// plata
	this.instance = new lib.roundplata();
	this.instance.setTransform(291.65,308.95,0.5877,0.8882,0,64.8895,60.7674,752.5,220.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(509).to({scaleX:0.5876,skewY:60.7672,x:291.6,y:296.2},0).wait(6).to({regX:752.3,regY:219.5,scaleX:0.5874,scaleY:0.888,skewX:74.855,skewY:70.7352,x:316.5,y:233.65},0).wait(3).to({regX:749.1,regY:217.2,skewX:74.8566,skewY:70.7362,y:233.7},0).wait(1).to({regX:1052.7,regY:163.5,skewX:78.0134,skewY:73.8936,x:396.05,y:332.85},0).wait(1).to({skewX:81.1716,skewY:77.0518,x:370.4,y:275.75},0).wait(1).to({skewX:84.3299,skewY:80.21,x:344.55,y:218},0).wait(1).to({skewX:87.4881,skewY:83.3682,x:318.35,y:159.75},0).wait(1).to({skewX:90.6463,skewY:86.5264,x:292,y:101},0).wait(1).to({skewX:93.8042,skewY:89.6844,x:282.15,y:3.35},0).wait(1).to({skewX:96.9621,skewY:92.8424,x:272.1,y:-94.85},0).wait(1).to({skewX:100.12,skewY:96.0004,x:261.85,y:-193.65},0).wait(1).to({skewX:103.2779,skewY:99.1585,x:251.6,y:-293},0).wait(1).to({skewX:106.4358,skewY:102.3165,x:241.25,y:-392.9},0).wait(1).to({skewX:109.5937,skewY:105.4745,x:230.85,y:-493.35},0).wait(1).to({skewX:112.7516,skewY:108.6325,x:220.55,y:-594.35},0).wait(1).to({skewX:115.9095,skewY:111.7905,x:236.85,y:-597.5},0).wait(1).to({skewX:119.0674,skewY:114.9486,x:253.3,y:-601.15},0).wait(1).to({skewX:122.2253,skewY:118.1066,x:269.8,y:-605.3},0).wait(1).to({skewX:125.3832,skewY:121.2646,x:286.45,y:-610.1},0).wait(1).to({skewX:128.5411,skewY:124.4226,x:303.25,y:-615.45},0).wait(1).to({skewX:131.699,skewY:127.5807,x:320.25,y:-621.3},0).wait(1).to({skewX:134.8569,skewY:130.7387,x:337.45,y:-627.7},0).wait(1).to({skewX:158.8569,skewY:154.7388,x:281.1,y:-547.95},0).wait(1).to({skewX:182.8569,skewY:178.7389,x:249.65,y:-489.1},0).wait(1).to({skewX:206.8568,skewY:202.739,x:249.45,y:-439.1},0).wait(1).to({skewX:230.8568,skewY:226.7391,x:281.4,y:-384.65},0).wait(1).to({skewX:254.8568,skewY:250.7392,x:340.9,y:-312.9},0).wait(1).to({x:340.75,y:-259.25},0).wait(1).to({x:340.6,y:-205.6},0).wait(1).to({x:340.45,y:-151.95},0).wait(1).to({x:340.3,y:-98.3},0).wait(1).to({x:340.15,y:-44.65},0).wait(7).to({regX:1051,regY:160.8,scaleX:0.8231,scaleY:0.8341,skewX:337.1645,skewY:355.5227,x:752.6,y:219.85},0).wait(1).to({regX:1052.7,regY:163.5,skewX:337.1635,skewY:355.5216,x:754.9,y:221.8},0).wait(71));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_lady_mouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lady_mouth
	this.instance = new lib.mouthmove();
	this.instance.setTransform(727.35,318.5,0.9999,0.9999,0,0,0,0,0.1);

	this.instance_1 = new lib.mouthsmilemove();
	this.instance_1.setTransform(727.35,318.5,0.9999,0.9999,0,0,0,0,0.1);

	this.instance_2 = new lib.mouthsmile();
	this.instance_2.setTransform(726.25,318.45,0.9999,0.9999,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.instance_3 = new lib.mouthsmileoouch();
	this.instance_3.setTransform(786.5,408.65,0.9995,0.9995,0,0,0,1.1,1.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.mouthsmileoouchrevers();
	this.instance_4.setTransform(786.5,408.65,0.9995,0.9995,0,0,0,1.1,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},376).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},30).to({state:[{t:this.instance_2}]},26).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},52).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},26).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(409).to({_off:false},0).wait(26).to({regY:0.2,scaleX:1.0061,skewX:-0.0149,skewY:6.3809,x:724.65,y:319.9},0).wait(9).to({scaleX:1.0485,skewY:17.5128,y:318.3},0).wait(9).to({regY:0.3,scaleX:1.1404,scaleY:1.0111,skewX:-2.8165,skewY:27.068,x:720.75,y:317},0).wait(11).to({regX:0.3,regY:0.1,scaleX:1.185,scaleY:1.0205,skewX:-8.2662,skewY:25.9711,x:706.9,y:313.7},0).wait(15).to({regY:0.2,skewX:-3.7775,skewY:30.4589,x:696.4},0).wait(19).to({regX:0.4,scaleX:1.1849,scaleY:1.0204,skewX:-3.7769,skewY:30.4587,x:623.15},0).wait(56).to({regX:0.1,regY:0.1,scaleX:0.9999,scaleY:0.9999,skewX:0,skewY:0,x:782.15,y:366.8},0).wait(2).to({regX:0.3,regY:0.4,scaleX:0.9998,scaleY:0.9998,x:782.1,y:377.85},0).wait(1).to({regX:0.7,regY:0.8,scaleX:0.9997,scaleY:0.9997,x:782.15,y:393.3},0).wait(1).to({regX:1,regY:1.1,scaleX:0.9996,scaleY:0.9996,x:786.5,y:404.25},0).to({_off:true},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(559).to({_off:false},0).wait(28).to({_off:true},1).wait(38));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_lady_legs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lady_legs
	this.instance = new lib.rightwalkingleg();
	this.instance.setTransform(680.85,687.8,1.4781,1.2798,0,0,180,0.5,27.4);

	this.instance_1 = new lib.rightwalkingleg();
	this.instance_1.setTransform(773.3,652.7,1.3521,1.376,0,0,0,0.6,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(208,143,41,0.996)").ss(1,1,1).p("ADpgMQAAAMAHASQAEAKAHASQALAeghATQgiAThggBQhqgGgnAAQhiAAgDAAQgvgEgkgUQghgTAOg0QAXg6AAgWQAAgUABABQANAIAegRQAhgTAzAEQAeADBHAGQAnAAAygBQAlADAkAUQAbAQAbANQAOAKAAAdg");
	this.shape.setTransform(740.7054,675.3448);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D08F29").s().p("ABjBxQhqgGgnAAIhlAAQgvgEgkgUQghgTAOg0QAXg6AAgWQAAgUABABQANAIAegRQAhgTAzAEIBlAJIBZgBQAlADAkAUQAbAQAbANQAOAKAAAdQAAAMAHASIALAcQALAeghATQggAShUAAIgOAAg");
	this.shape_1.setTransform(740.7054,675.3448);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(653.7,631.3,1,1,0,0,0,129.4,119.4);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(624.2,625.2,1,1,0,0,0,120,122.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{scaleX:1.3521,skewY:0,y:652.7,regX:0.6,regY:0,scaleY:1.376,skewX:0,x:773.3}},{t:this.instance,p:{regY:27.4,scaleX:1.4781,skewY:180,x:680.85,y:687.8,regX:0.5,scaleY:1.2798,skewX:0}}]},376).to({state:[{t:this.instance_1,p:{scaleX:1.3606,skewY:6.3805,y:659.5,regX:0.6,regY:0,scaleY:1.376,skewX:0,x:773.3}},{t:this.instance,p:{regY:27.5,scaleX:1.6089,skewY:-156.7395,x:701.65,y:665.2,regX:0.5,scaleY:1.2798,skewX:0}}]},59).to({state:[{t:this.instance_1,p:{scaleX:1.1098,skewY:-19.1683,y:596.5,regX:-2.5,regY:-43.9,scaleY:0.9826,skewX:7.5585,x:755.45}},{t:this.instance,p:{regY:27.5,scaleX:1.4791,skewY:177.9243,x:689.5,y:674.1,regX:0.5,scaleY:1.2798,skewX:0}}]},9).to({state:[{t:this.instance_1,p:{scaleX:1.3906,skewY:13.1275,y:603,regX:-12.9,regY:-42.4,scaleY:1.2141,skewX:-3.7731,x:755.95}},{t:this.instance,p:{regY:-54.4,scaleX:1.2307,skewY:-146.5578,x:728.8,y:581.4,regX:-25.9,scaleY:1.0722,skewX:-2.8012}}]},9).to({state:[{t:this.instance_1,p:{scaleX:1.4202,skewY:12.8496,y:599.8,regX:-12.8,regY:-42.4,scaleY:1.2273,skewX:-9.2048,x:769.65}},{t:this.instance,p:{regY:-54.5,scaleX:1.2856,skewY:-148.1583,x:740.25,y:578.1,regX:-25.9,scaleY:1.0821,skewX:-8.2516}}]},11).to({state:[{t:this.instance_1,p:{scaleX:1.0367,skewY:27.8485,y:599.85,regX:-12.8,regY:-42.3,scaleY:0.8402,skewX:5.7934,x:743.15}},{t:this.instance,p:{regY:-54.4,scaleX:1.4866,skewY:-154.6686,x:714.05,y:578.25,regX:-26.1,scaleY:1.0821,skewX:-23.2503}}]},15).to({state:[{t:this.instance_1,p:{scaleX:1.2478,skewY:21.8993,y:599.7,regX:-12.8,regY:-42.4,scaleY:0.8876,skewX:-0.1546,x:735.1}},{t:this.instance,p:{regY:-54.2,scaleX:0.9569,skewY:-139.6692,x:706.15,y:574,regX:-26.2,scaleY:0.915,skewX:-8.2508}},{t:this.shape_1,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:740.7054,y:675.3448}},{t:this.shape,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:740.7054,y:675.3448}}]},5).to({state:[{t:this.instance_1,p:{scaleX:2.0313,skewY:43.2266,y:588.4,regX:-12.1,regY:-42.3,scaleY:1.1735,skewX:35.3326,x:665.6}},{t:this.instance,p:{regY:-54.3,scaleX:1.1565,skewY:-139.6701,x:637.6,y:572,regX:-26.4,scaleY:0.9148,skewX:-8.2481}},{t:this.shape_1,p:{scaleX:1.764,scaleY:1.3228,skewX:35.539,skewY:25.8416,x:616.4861,y:674.3822}},{t:this.shape,p:{scaleX:1.764,scaleY:1.3228,skewX:35.539,skewY:25.8416,x:616.4861,y:674.3822}}]},14).to({state:[{t:this.instance_1,p:{scaleX:2.2812,skewY:37.5689,y:588.25,regX:-12,regY:-42.4,scaleY:1.5049,skewX:50.5044,x:680.5}},{t:this.instance,p:{regY:-54.3,scaleX:1.1565,skewY:-139.6701,x:637.6,y:572,regX:-26.4,scaleY:0.9148,skewX:-8.2481}},{t:this.shape_1,p:{scaleX:2.2271,scaleY:1.6985,skewX:50.6832,skewY:20.1924,x:592.6618,y:674.2809}},{t:this.shape,p:{scaleX:2.2271,scaleY:1.6985,skewX:50.6832,skewY:20.1924,x:592.6618,y:674.2809}}]},4).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.3521,skewY:0,y:701.15,regX:0.6,regY:0.1,scaleY:1.376,skewX:0,x:828}},{t:this.instance,p:{regY:27.4,scaleX:1.4781,skewY:180,x:735.55,y:736.1,regX:0.5,scaleY:1.2798,skewX:0}}]},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(509).to({_off:false},0).wait(1).to({regX:128.1,x:652.4},0).wait(4).to({_off:true},1).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(515).to({_off:false},0).wait(1).to({regX:115.4,x:619.6},0).wait(37).to({_off:true},1).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_lady_head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lady_head
	this.instance = new lib.head();
	this.instance.setTransform(780.95,316.05,1.4858,1.3305,0,-2.2459,0,35.3,2.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(376).to({_off:false},0).wait(59).to({regX:35.4,scaleX:1.495,scaleY:1.3364,skewX:-2.2511,skewY:6.3809,x:779.5,y:323.55},0).wait(9).to({scaleX:1.558,scaleY:1.3471,skewX:-2.2332,skewY:17.5129,y:333.1},0).wait(9).to({regY:2.7,scaleX:1.6945,scaleY:1.375,skewX:-4.9657,skewY:27.0681,x:776.3,y:343},0).wait(11).to({regX:35.5,regY:2.6,scaleX:1.7608,scaleY:1.3926,skewX:-10.3701,skewY:25.9708,x:765,y:339.7},0).wait(15).to({skewX:-5.8822,skewY:30.4585,x:752.25,y:344.1},0).wait(19).to({scaleY:1.3925,skewX:-5.8818,skewY:30.4587,x:678.9,y:344.05},0).wait(56).to({regX:35.4,scaleX:1.4857,scaleY:1.3305,skewX:-2.2453,skewY:0,x:835.8,y:364.35},0).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_lady_body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lady_body
	this.instance = new lib.body();
	this.instance.setTransform(730.2,517.15,1.3151,1.3836,0,-0.2635,0,33,219.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(376).to({_off:false},0).wait(59).to({scaleX:1.3233,scaleY:1.3843,skewX:-0.2634,skewY:6.3808,y:519.1},0).wait(9).to({scaleX:1.379,scaleY:1.3855,skewX:-0.2631,skewY:17.5125,y:518.6},0).wait(9).to({regY:219.7,scaleX:1.4999,scaleY:1.4025,skewX:-3.0591,skewY:27.0679,x:736.2,y:520.4},0).wait(11).to({regX:33.1,scaleX:1.5585,scaleY:1.4161,skewX:-8.5049,skewY:25.9707,x:741.9,y:517.3},0).wait(15).to({regX:33,skewX:-3.8091,skewY:30.6664,x:715.35,y:517.2},0).wait(19).to({regX:33.1,scaleY:1.416,skewX:-3.8086,skewY:30.6663,x:642.1},0).wait(56).to({regX:33,regY:219.6,scaleX:1.315,scaleY:1.3835,skewX:-0.2629,skewY:0,x:784.9,y:565.45},0).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_lady_blink_copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lady_blink_copy
	this.instance = new lib.womanblink();
	this.instance.setTransform(756.1,271.4,0.9994,0.9994,0,0,180,52.5,-88.5);

	this.instance_1 = new lib.womanblink();
	this.instance_1.setTransform(692.3,270.7,0.9996,0.9996,0,0,0,52.5,-88.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},326).to({state:[]},18).wait(66));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_idia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// idia
	this.instance = new lib.idia();
	this.instance.setTransform(865.05,135,0.1021,0.1021,29.9816,0,0,0.9,0.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(384).to({_off:false},0).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_eye_move_lady = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eye_move_lady
	this.instance = new lib.eshonMW();
	this.instance.setTransform(701.5,268.2,0.0815,0.0715);

	this.instance_1 = new lib.eshonB();
	this.instance_1.setTransform(701.8,276.25,0.9887,1.1201,0,-37.4484,-42.2729,8.1,10.2);

	this.instance_2 = new lib.ESHONBLUEM();
	this.instance_2.setTransform(694.3,263.35,0.091,0.0868,-25.1872,0,0,-9.2,-152.8);

	this.instance_3 = new lib.eshonMW();
	this.instance_3.setTransform(747.2,268.35,0.0815,0.0715,0,0,180);

	this.instance_4 = new lib.eshonB();
	this.instance_4.setTransform(746.9,276.4,0.9887,1.1201,0,37.4484,-137.7271,8.1,10.2);

	this.instance_5 = new lib.ESHONBLUEM();
	this.instance_5.setTransform(754.4,263.5,0.091,0.0868,0,25.1872,-154.8147,-9.2,-152.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5,p:{x:754.4,y:263.5,regX:-9.2,regY:-152.8,skewX:25.1872,skewY:-154.8147,scaleX:0.091,scaleY:0.0868}},{t:this.instance_4,p:{x:746.9,y:276.4,skewX:37.4484,skewY:-137.7271,regX:8.1,regY:10.2}},{t:this.instance_3,p:{x:747.2,y:268.35,regX:0,regY:0,skewX:0,skewY:180}},{t:this.instance_2,p:{y:263.35,x:694.3}},{t:this.instance_1,p:{y:276.25,x:701.8}},{t:this.instance,p:{y:268.2,x:701.5}}]},276).to({state:[{t:this.instance_5,p:{x:753.3,y:264.55,regX:-9.2,regY:-152.8,skewX:25.1872,skewY:-154.8147,scaleX:0.091,scaleY:0.0868}},{t:this.instance_4,p:{x:745.8,y:277.45,skewX:37.4484,skewY:-137.7271,regX:8.1,regY:10.2}},{t:this.instance_3,p:{x:746.1,y:269.4,regX:0,regY:0,skewX:0,skewY:180}},{t:this.instance_2,p:{y:264.55,x:694.3}},{t:this.instance_1,p:{y:277.45,x:701.8}},{t:this.instance,p:{y:269.4,x:701.5}}]},5).to({state:[{t:this.instance_5,p:{x:749.4,y:265.9,regX:-9,regY:-152.7,skewX:10.1824,skewY:-169.8155,scaleX:0.091,scaleY:0.0868}},{t:this.instance_4,p:{x:745.85,y:280.25,skewX:22.4489,skewY:-152.7263,regX:8.1,regY:10.2}},{t:this.instance_3,p:{x:744,y:272.4,regX:0.1,regY:0.7,skewX:-14.9944,skewY:165.0064}},{t:this.instance_2,p:{y:266.1,x:693.3}},{t:this.instance_1,p:{y:279,x:700.8}},{t:this.instance,p:{y:270.95,x:700.5}}]},9).to({state:[{t:this.instance_5,p:{x:748.3,y:280.85,regX:-20.5,regY:13.1,skewX:15.9343,skewY:-161.0725,scaleX:0.0909,scaleY:0.0869}},{t:this.instance_4,p:{x:746.35,y:281,skewX:16.2036,skewY:-158.972,regX:8,regY:10.1}},{t:this.instance_3,p:{x:744.35,y:275.25,regX:-0.7,regY:1.8,skewX:-21.2404,skewY:158.7623}},{t:this.instance_2,p:{y:267.05,x:693.55}},{t:this.instance_1,p:{y:279.95,x:699.7}},{t:this.instance,p:{y:272.5,x:699.4}}]},9).to({state:[{t:this.instance_5,p:{x:748.75,y:281.55,regX:-21.3,regY:13.2,skewX:13.1605,skewY:-163.8486,scaleX:0.0909,scaleY:0.0869}},{t:this.instance_4,p:{x:746.7,y:281.55,skewX:27.1759,skewY:-147.9987,regX:8.1,regY:10.2}},{t:this.instance_3,p:{x:744.4,y:277.3,regX:-0.5,regY:0.8,skewX:-14.9944,skewY:165.0064}},{t:this.instance_2,p:{y:268.55,x:693.65}},{t:this.instance_1,p:{y:281.45,x:699.8}},{t:this.instance,p:{y:275.7,x:698.5}}]},9).to({state:[{t:this.instance_5,p:{x:748.75,y:281.55,regX:-21.3,regY:13.2,skewX:13.1605,skewY:-163.8486,scaleX:0.0909,scaleY:0.0869}},{t:this.instance_4,p:{x:746.7,y:281.55,skewX:27.1759,skewY:-147.9987,regX:8.1,regY:10.2}},{t:this.instance_3,p:{x:743.3,y:280.95,regX:0,regY:0,skewX:-14.9944,skewY:165.0064}},{t:this.instance_2,p:{y:270.05,x:692.75}},{t:this.instance_1,p:{y:282.95,x:698.9}},{t:this.instance,p:{y:279.4,x:696.6}}]},9).to({state:[{t:this.instance_5,p:{x:748.75,y:281.55,regX:-21.3,regY:13.2,skewX:13.1605,skewY:-163.8486,scaleX:0.0909,scaleY:0.0869}},{t:this.instance_4,p:{x:746.7,y:281.55,skewX:27.1759,skewY:-147.9987,regX:8.1,regY:10.2}},{t:this.instance_3,p:{x:743.35,y:283.45,regX:-0.6,regY:0.2,skewX:-14.9944,skewY:165.0064}},{t:this.instance_2,p:{y:270.05,x:692.75}},{t:this.instance_1,p:{y:282.95,x:698.9}},{t:this.instance,p:{y:282.7,x:696.6}}]},9).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.handlifting = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.handfold();
	this.instance.setTransform(45.95,77.15,1.3047,1.1234,0,-8.2529,25.9705);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.handlifting, new cjs.Rectangle(0,0,91.9,154.4), null);


(lib.eyeWomennew = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// small_white
	this.instance = new lib.eshonMW();
	this.instance.setTransform(200.75,120.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eshonb
	this.instance_1 = new lib.eshonB();
	this.instance_1.setTransform(176.85,294.8,10.6916,12.6367,0,-27.8283,-29.9999,1.4,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// eshon
	this.instance_2 = new lib.ESHONBLUEM();
	this.instance_2.setTransform(203.85,197.65,1,1,-23.0318,0,0,-3.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// wylashes
	this.instance_3 = new lib.EYElashes();
	this.instance_3.setTransform(153.5,201.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// white
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("AxNFQQDlK/HkGRQHjGSHKiMQHKiMCgpWQCfpWjkq+Qjlq/nkmRQnjmRnKCMQnKCMigJVQifJWDkK+g");
	this.shape.setTransform(182.425,232.8354);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmEWgQnkmRjlq/Qjkq+CfpWQCgpVHKiMQHKiMHjGRQHkGRDlK/QDkK+ifJWQigJWnKCMQh2Akh4AAQlYAAlnkqg");
	this.shape_1.setTransform(182.425,232.8354);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyeWomennew, new cjs.Rectangle(0,10.9,337,399.3), null);


(lib.eyeWomenmove = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wylashes
	this.instance = new lib.EYElashes();
	this.instance.setTransform(150.5,203.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// white
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("AxNFQQDlK/HkGRQHjGSHKiMQHKiMCgpWQCfpWjkq+Qjlq/nkmRQnjmRnKCMQnKCMigJVQifJWDkK+g");
	this.shape.setTransform(182.425,232.8354);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmEWgQnkmRjlq/Qjkq+CfpWQCgpVHKiMQHKiMHjGRQHkGRDlK/QDkK+ifJWQigJWnKCMQh2Akh4AAQlYAAlnkqg");
	this.shape_1.setTransform(182.425,232.8354);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyeWomenmove, new cjs.Rectangle(-3,12.9,312.6,397.3), null);


(lib.Scene_1_lady_heand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lady_heand
	this.instance = new lib.handwalking();
	this.instance.setTransform(653.65,446.1,1.0512,1.1236,0,0,0,0.5,0.1);

	this.instance_1 = new lib.handfold();
	this.instance_1.setTransform(791.85,454.8,1.1009,1.1009);

	this.instance_2 = new lib.handlifting();
	this.instance_2.setTransform(772.1,449.45,1,1,7.4954,0,0,19.6,40.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{scaleX:1.1009,skewY:0,y:454.8,regX:0,regY:0,x:791.85,scaleY:1.1009,skewX:0}},{t:this.instance,p:{scaleX:1.0512,skewY:0,y:446.1,regY:0.1,scaleY:1.1236,skewX:0,x:653.65,regX:0.5}}]},376).to({state:[{t:this.instance_1,p:{scaleX:1.1077,skewY:6.3808,y:463.7,regX:0,regY:0,x:791.85,scaleY:1.1009,skewX:0}},{t:this.instance,p:{scaleX:1.0578,skewY:6.3805,y:439.5,regY:0.1,scaleY:1.1236,skewX:0,x:653.65,regX:0.5}}]},59).to({state:[{t:this.instance_1,p:{scaleX:1.1544,skewY:17.5126,y:475.9,regX:0.1,regY:0.1,x:791.95,scaleY:1.1009,skewX:0}},{t:this.instance,p:{scaleX:1.1023,skewY:17.5127,y:423.35,regY:0.1,scaleY:1.1236,skewX:0,x:653.65,regX:0.5}}]},9).to({state:[{t:this.instance_1,p:{scaleX:1.2555,skewY:27.0677,y:489.55,regX:0.1,regY:0.1,x:795.85,scaleY:1.1131,skewX:-2.802}},{t:this.instance,p:{scaleX:1.1989,skewY:27.0676,y:408.9,regY:0.2,scaleY:1.1361,skewX:-2.8023,x:654.95,regX:0.5}}]},9).to({state:[{t:this.instance,p:{scaleX:1.2458,skewY:25.9706,y:405.7,regY:0.1,scaleY:1.1466,skewX:-8.2537,x:649.95,regX:0.7}},{t:this.instance_2,p:{x:772.1,regY:40.4,rotation:7.4954,y:449.45}}]},11).to({state:[{t:this.instance,p:{scaleX:1.2458,skewY:25.9706,y:405.7,regY:0.1,scaleY:1.1466,skewX:-8.2537,x:649.95,regX:0.7}},{t:this.instance_2,p:{x:772.1,regY:40.4,rotation:7.4954,y:449.45}}]},2).to({state:[{t:this.instance,p:{scaleX:1.2458,skewY:25.9706,y:405.7,regY:0.1,scaleY:1.1466,skewX:-8.2537,x:623.55,regX:0.7}},{t:this.instance_2,p:{x:745.7,regY:40.4,rotation:7.4954,y:449.45}}]},13).to({state:[{t:this.instance,p:{scaleX:1.2458,skewY:25.9706,y:405.7,regY:0.1,scaleY:1.1466,skewX:-8.2537,x:623.55,regX:0.7}},{t:this.instance_2,p:{x:745.7,regY:40.4,rotation:7.4954,y:449.45}}]},5).to({state:[{t:this.instance,p:{scaleX:1.2458,skewY:25.9703,y:405.65,regY:0.1,scaleY:1.1465,skewX:-8.2533,x:550.2,regX:0.7}},{t:this.instance_2,p:{x:672.3,regY:40.5,rotation:7.4948,y:449.5}}]},14).to({state:[{t:this.instance,p:{scaleX:1.2458,skewY:25.9703,y:405.65,regY:0.1,scaleY:1.1465,skewX:-8.2533,x:550.2,regX:0.7}},{t:this.instance_2,p:{x:672.3,regY:40.5,rotation:7.4948,y:449.5}}]},4).to({state:[{t:this.instance,p:{scaleX:1.2458,skewY:25.9703,y:405.65,regY:0.1,scaleY:1.1465,skewX:-8.2533,x:550.2,regX:0.7}},{t:this.instance_2,p:{x:672.3,regY:40.5,rotation:7.4948,y:449.5}}]},7).to({state:[{t:this.instance_1,p:{scaleX:1.1008,skewY:0,y:503.2,regX:0.1,regY:0.1,x:846.65,scaleY:1.1008,skewX:0}},{t:this.instance,p:{scaleX:1.0512,skewY:0,y:494.4,regY:0.1,scaleY:1.1235,skewX:0,x:708.45,regX:0.6}}]},45).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_lady_eyeW = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lady_eyeW
	this.instance = new lib.eyeWomennew();
	this.instance.setTransform(750.5,287.25,0.0821,0.098,0,0,180,194.3,302);

	this.instance_1 = new lib.eyeWomennew();
	this.instance_1.setTransform(699.25,286.05,0.0823,0.0982,0,0,0,213.9,295.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{regX:213.9,regY:295.4,scaleX:0.0823,skewX:0,skewY:0,x:699.25,y:286.05,scaleY:0.0982}},{t:this.instance,p:{regY:302,scaleX:0.0821,skewY:180,x:750.5,y:287.25,regX:194.3,scaleY:0.098,skewX:0}}]},376).to({state:[{t:this.instance_1,p:{regX:215.1,regY:295.6,scaleX:0.0828,skewX:-0.0089,skewY:6.3798,x:697.75,y:287.7,scaleY:0.0982}},{t:this.instance,p:{regY:302.4,scaleX:0.0826,skewY:-173.6271,x:748.95,y:294.55,regX:194.3,scaleY:0.098,skewX:0}}]},59).to({state:[{t:this.instance_1,p:{regX:215.1,regY:296.1,scaleX:0.0863,skewX:-0.0089,skewY:17.5057,x:697.75,y:280.55,scaleY:0.0982}},{t:this.instance,p:{regY:302.9,scaleX:0.0861,skewY:-162.4963,x:748.95,y:297.9,regX:194.3,scaleY:0.098,skewX:0}}]},9).to({state:[{t:this.instance_1,p:{regX:215.6,regY:296.1,scaleX:0.0938,skewX:-2.8109,skewY:27.0485,x:692,y:273.4,scaleY:0.0993}},{t:this.instance,p:{regY:303.7,scaleX:0.0936,skewY:-152.9505,x:744.05,y:301.25,regX:194,scaleY:0.0991,skewX:-2.7981}}]},9).to({state:[{t:this.instance_1,p:{regX:216.8,regY:295.6,scaleX:0.0975,skewX:-8.2498,skewY:25.9593,x:673.9,y:270.2,scaleY:0.1002}},{t:this.instance,p:{regY:303.1,scaleX:0.0972,skewY:-154.038,x:728.65,y:298.05,regX:192.6,scaleY:0.1,skewX:-8.229}}]},11).to({state:[{t:this.instance_1,p:{regX:217.3,regY:295.4,scaleX:0.0975,skewX:-3.756,skewY:30.4437,x:666.9,y:267.65,scaleY:0.1002}},{t:this.instance,p:{regY:303.4,scaleX:0.0972,skewY:-149.5559,x:719.25,y:299.65,regX:192.4,scaleY:0.1,skewX:-3.7361}}]},15).to({state:[{t:this.instance_1,p:{regX:217.3,regY:295.4,scaleX:0.0975,skewX:-3.756,skewY:30.4437,x:666.9,y:267.65,scaleY:0.1002}},{t:this.instance,p:{regY:303.4,scaleX:0.0972,skewY:-149.5559,x:719.25,y:299.65,regX:192.4,scaleY:0.1,skewX:-3.7361}}]},5).to({state:[{t:this.instance_1,p:{regX:218.1,regY:295.6,scaleX:0.0974,skewX:-3.7479,skewY:30.4405,x:593.6,y:267.65,scaleY:0.1001}},{t:this.instance,p:{regY:303.7,scaleX:0.0972,skewY:-149.5591,x:645.95,y:299.7,regX:191.8,scaleY:0.1,skewX:-3.728}}]},14).to({state:[{t:this.instance_1,p:{regX:218.1,regY:295.6,scaleX:0.0974,skewX:-3.7479,skewY:30.4405,x:593.6,y:267.65,scaleY:0.1001}},{t:this.instance,p:{regY:303.7,scaleX:0.0972,skewY:-149.5591,x:645.95,y:299.7,regX:191.8,scaleY:0.1,skewX:-3.728}}]},4).to({state:[{t:this.instance_1,p:{regX:218.1,regY:295.6,scaleX:0.0974,skewX:-3.7479,skewY:30.4405,x:593.6,y:267.65,scaleY:0.1001}},{t:this.instance,p:{regY:303.7,scaleX:0.0972,skewY:-149.5591,x:645.95,y:299.7,regX:191.8,scaleY:0.1,skewX:-3.728}}]},7).to({state:[{t:this.instance_1,p:{regX:214.5,regY:295.9,scaleX:0.0823,skewX:0,skewY:0,x:754,y:334.4,scaleY:0.0982}},{t:this.instance,p:{regY:302.6,scaleX:0.0821,skewY:180,x:805.25,y:335.6,regX:193.7,scaleY:0.098,skewX:0}}]},45).to({state:[{t:this.instance_1,p:{regX:217.8,regY:298.7,scaleX:0.0822,skewX:0,skewY:0,x:754,y:345.4,scaleY:0.0981}},{t:this.instance,p:{regY:305.4,scaleX:0.082,skewY:180,x:805.25,y:346.6,regX:190.8,scaleY:0.0979,skewX:0}}]},2).to({state:[{t:this.instance_1,p:{regX:222.3,regY:302.6,scaleX:0.0821,skewX:0,skewY:0,x:754,y:360.8,scaleY:0.098}},{t:this.instance,p:{regY:309.3,scaleX:0.0819,skewY:180,x:805.25,y:362,regX:186.8,scaleY:0.0978,skewX:0}}]},1).to({state:[{t:this.instance_1,p:{regX:226.8,regY:306.5,scaleX:0.082,skewX:0,skewY:0,x:758.4,y:371.8,scaleY:0.0979}},{t:this.instance,p:{regY:313.2,scaleX:0.0818,skewY:180,x:809.65,y:373,regX:182.8,scaleY:0.0977,skewX:0}}]},1).to({state:[{t:this.instance_1,p:{regX:228.2,regY:307.6,scaleX:0.082,skewX:0,skewY:0,x:758.4,y:376.2,scaleY:0.0979}},{t:this.instance,p:{regY:314.3,scaleX:0.0818,skewY:180,x:809.65,y:377.4,regX:181.6,scaleY:0.0977,skewX:0}}]},1).wait(67));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.longlegwalking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// right_leg
	this.instance = new lib.rightwalkingleg();
	this.instance.setTransform(30.3,119.7,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.9595,y:117.5},0).wait(1).to({scaleY:0.919,y:115.35},0).wait(1).to({scaleY:0.8785,y:113.2},0).wait(1).to({scaleY:0.838,y:111.05},0).wait(1).to({scaleY:0.7975,y:108.9},0).wait(5).to({scaleY:1,y:119.7},0).wait(5).to({scaleY:0.7975,y:108.9},0).wait(4).to({scaleY:1,y:119.7},0).wait(1));

	// left_leg
	this.instance_1 = new lib.rightwalkingleg();
	this.instance_1.setTransform(-3.25,81.85,1,0.7206,0,0,180,-27.3,-30.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.5,regY:0,scaleY:0.8045,x:-31.05,y:106.3},0).wait(1).to({scaleY:0.8885,y:108.85},0).wait(1).to({scaleY:0.9725,y:111.4},0).wait(1).to({scaleY:1.0564,y:113.95},0).wait(1).to({scaleY:1.1404,y:116.5},0).wait(5).to({regX:-27.3,regY:-30.3,scaleY:0.7206,x:-3.25,y:81.8},0).wait(1).to({regX:0.5,regY:0,x:-31.05,y:103.65},0).wait(4).to({regX:-27.3,regY:-30.4,scaleY:1.1404,x:-3.25,y:81.8},0).wait(1).to({regX:0.5,regY:0,x:-31.05,y:116.45},0).wait(3).to({regX:-27.3,regY:-30.1,scaleY:0.7206,x:-3.25,y:81.85},0).wait(1));

	// hands
	this.instance_2 = new lib.HandWalkingboth();
	this.instance_2.setTransform(0.15,-29.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({rotation:14.9992},0).wait(5).to({rotation:-14.9994},0).wait(10));

	// mouth
	this.instance_3 = new lib.mouth();
	this.instance_3.setTransform(1,-116.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({scaleX:1.0037,skewY:-4.8988,y:-117},0).wait(5).to({scaleX:1.0198,skewY:11.3098,y:-116.85},0).wait(5).to({scaleX:1.0102,skewY:-8.1299,y:-117},0).wait(5));

	// eyes
	this.instance_4 = new lib.eyeWomennew();
	this.instance_4.setTransform(-19.55,-155.45,0.0655,0.0655,0,0,0,152,189.5);

	this.instance_5 = new lib.eyeWomennew();
	this.instance_5.setTransform(18.8,-155.45,0.0655,0.0655,0,0,180,152,189.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{regY:189.5,scaleX:0.0655,skewY:180,y:-155.45}},{t:this.instance_4,p:{scaleX:0.0655,skewY:0,y:-155.45,regY:189.5}}]}).to({state:[{t:this.instance_5,p:{regY:189.4,scaleX:0.0657,skewY:175.1104,y:-157.05}},{t:this.instance_4,p:{scaleX:0.0657,skewY:-4.8896,y:-153.75,regY:189.5}}]},5).to({state:[{t:this.instance_5,p:{regY:189.3,scaleX:0.0668,skewY:-168.7029,y:-151.8}},{t:this.instance_4,p:{scaleX:0.0668,skewY:11.2971,y:-159.45,regY:188.8}}]},5).to({state:[{t:this.instance_5,p:{regY:189.2,scaleX:0.0661,skewY:171.8811,y:-158.1}},{t:this.instance_4,p:{scaleX:0.0661,skewY:-8.1189,y:-152.6,regY:189}}]},5).wait(5));

	// head
	this.instance_6 = new lib.head();
	this.instance_6.setTransform(0.35,-125.2,1,1,0,0,0,0,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({regY:2.1,scaleX:1.0037,skewY:-4.8988,y:-125.3},0).wait(5).to({scaleX:1.0198,skewY:11.3098},0).wait(5).to({regY:2.2,scaleX:1.0102,skewY:-8.1299,y:-125.2},0).wait(5));

	// body
	this.instance_7 = new lib.body();
	this.instance_7.setTransform(0,-54.4,1,1,0,0,0,35,143.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({scaleY:1.0001,skewX:-0.8995},0).wait(5).to({regX:9.6,scaleY:1.0005,skewX:1.8406,x:-25.35},0).wait(5).to({scaleY:1.0001,skewX:-0.8987},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-201.9,209.4,376.1);


(lib.longlegstand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// right_leg
	this.instance = new lib.rightwalkingleg();
	this.instance.setTransform(30.3,119.7,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// left_leg
	this.instance_1 = new lib.rightwalkingleg();
	this.instance_1.setTransform(-37.35,89,1,1,0,0,180,4.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5));

	// hands
	this.instance_2 = new lib.HandWalkingboth();
	this.instance_2.setTransform(0.15,-29.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5));

	// mouth
	this.instance_3 = new lib.mouth();
	this.instance_3.setTransform(1,-116.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5));

	// eyes
	this.instance_4 = new lib.eyeWomenmove();
	this.instance_4.setTransform(-19.55,-155.45,0.0655,0.0655,0,0,0,152,189.5);

	this.instance_5 = new lib.eyeWomenmove();
	this.instance_5.setTransform(18.8,-155.45,0.0655,0.0655,0,0,180,152,189.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(5));

	// head
	this.instance_6 = new lib.head();
	this.instance_6.setTransform(0.35,-125.2,1,1,0,0,0,0,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5));

	// body
	this.instance_7 = new lib.body();
	this.instance_7.setTransform(0,-54.4,1,1,0,0,0,35,143.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.1,-194.9,196.6,365.3);


(lib.Scene_1_ladylegstand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ladylegstand
	this.instance = new lib.eyeWomennew();
	this.instance.setTransform(747.2,279.9,0.0973,0.0872,0,0.9724,-179.0384,212.1,250.5);

	this.instance_1 = new lib.eyeWomennew();
	this.instance_1.setTransform(701.3,279.9,0.0973,0.0872,-0.9724,0,0,212.1,250.5);

	this.instance_2 = new lib.longlegstand();
	this.instance_2.setTransform(725.45,621.4,1.4975,1.3797,0,0,0,0.3,96);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},276).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_2}]},18).to({state:[{t:this.instance_2}]},7).to({state:[]},55).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(276).to({_off:false},0).wait(45).to({_off:true},55).wait(223));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_lady_walking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lady_walking
	this.instance = new lib.longlegwalking();
	this.instance.setTransform(1210.5,162.6,0.7555,0.8121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,regY:-13.8,scaleX:0.7575,scaleY:0.8142,rotation:-0.0109,x:1209.25,y:166.6},0).wait(1).to({scaleX:0.7596,scaleY:0.8162,rotation:-0.0218,x:1208.1,y:177},0).wait(1).to({scaleX:0.7616,scaleY:0.8183,rotation:-0.0326,x:1207.05,y:185.3},0).wait(1).to({scaleX:0.7636,scaleY:0.8203,rotation:-0.0435,x:1206.05,y:192.4},0).wait(1).to({scaleX:0.7657,scaleY:0.8224,rotation:-0.0544,x:1205.1,y:198.65},0).wait(1).to({scaleX:0.7677,scaleY:0.8244,rotation:-0.0653,x:1204.2,y:204.25},0).wait(1).to({scaleX:0.7697,scaleY:0.8265,rotation:-0.0762,x:1203.3,y:209.45},0).wait(1).to({scaleX:0.7718,scaleY:0.8285,rotation:-0.087,x:1202.4,y:214.2},0).wait(1).to({scaleX:0.7738,scaleY:0.8306,rotation:-0.0979,x:1201.5,y:218.7},0).wait(1).to({scaleX:0.7759,scaleY:0.8326,rotation:-0.1088,x:1200.65,y:222.9},0).wait(1).to({scaleX:0.7779,scaleY:0.8347,rotation:-0.1197,x:1199.8,y:226.9},0).wait(1).to({scaleX:0.7799,scaleY:0.8367,rotation:-0.1306,x:1198.9,y:230.65},0).wait(1).to({scaleX:0.782,scaleY:0.8388,rotation:-0.1415,x:1198,y:234.2},0).wait(1).to({scaleX:0.784,scaleY:0.8408,rotation:-0.1523,x:1197.2,y:237.7},0).wait(1).to({scaleX:0.7861,scaleY:0.8429,rotation:0,skewX:-0.1632,skewY:-0.214,x:1196.35,y:240.95},0).wait(1).to({scaleX:0.7881,scaleY:0.8449,skewX:-0.1741,skewY:-0.2282,x:1195.5,y:244.15},0).wait(1).to({scaleX:0.7902,scaleY:0.847,skewX:-0.185,skewY:-0.2425,x:1194.65,y:247.2},0).wait(1).to({scaleX:0.7922,scaleY:0.849,skewX:-0.1959,skewY:-0.2568,x:1193.8,y:250.15},0).wait(1).to({scaleX:0.7942,scaleY:0.8511,skewX:-0.2067,skewY:-0.271,x:1193,y:252.95},0).wait(1).to({scaleX:0.7963,scaleY:0.8531,skewX:-0.2176,skewY:-0.2853,x:1192.15,y:255.75},0).wait(1).to({scaleX:0.7983,scaleY:0.8552,skewX:-0.2285,skewY:-0.2996,x:1191.3,y:258.4},0).wait(1).to({scaleX:0.8003,scaleY:0.8572,skewX:-0.2394,skewY:-0.3138,x:1190.45,y:260.95},0).wait(1).to({scaleX:0.8024,scaleY:0.8593,skewX:-0.2503,skewY:-0.3281,x:1189.65,y:263.5},0).wait(1).to({scaleX:0.8044,scaleY:0.8613,skewX:-0.2611,skewY:-0.3424,x:1188.8,y:265.95},0).wait(1).to({scaleX:0.8065,scaleY:0.8634,skewX:-0.272,skewY:-0.3566,x:1187.95,y:268.35},0).wait(1).to({scaleX:0.8085,scaleY:0.8654,skewX:-0.2829,skewY:-0.3709,x:1187.15,y:270.65},0).wait(1).to({scaleX:0.8105,scaleY:0.8675,skewX:-0.2938,skewY:-0.3852,x:1186.3,y:272.95},0).wait(1).to({scaleX:0.8126,scaleY:0.8695,skewX:-0.3047,skewY:-0.3994,x:1185.45,y:275.1},0).wait(1).to({scaleX:0.8146,scaleY:0.8716,skewX:-0.3156,skewY:-0.4137,x:1184.65,y:277.25},0).wait(1).to({scaleX:0.8167,scaleY:0.8736,skewX:-0.3264,skewY:-0.428,x:1183.8,y:279.4},0).wait(1).to({scaleX:0.8187,scaleY:0.8757,skewX:-0.3373,skewY:-0.4422,x:1182.95,y:281.45},0).wait(1).to({scaleX:0.8207,scaleY:0.8777,skewX:-0.3482,skewY:-0.4565,x:1182.1,y:283.5},0).wait(1).to({scaleX:0.8228,scaleY:0.8798,skewX:-0.3591,skewY:-0.4708,x:1181.2,y:285.45},0).wait(1).to({scaleX:0.8248,scaleY:0.8818,skewX:-0.37,skewY:-0.485,x:1180.4,y:287.4},0).wait(1).to({scaleX:0.8268,scaleY:0.8839,skewX:-0.3808,skewY:-0.4993,x:1179.55,y:289.3},0).wait(1).to({scaleX:0.8289,scaleY:0.8859,skewX:-0.3917,skewY:-0.5136,x:1178.7,y:291.1},0).wait(1).to({scaleX:0.8309,scaleY:0.888,skewX:-0.4026,skewY:-0.5278,x:1177.85,y:292.95},0).wait(1).to({scaleX:0.833,scaleY:0.89,skewX:-0.4135,skewY:-0.5421,x:1177,y:294.75},0).wait(1).to({scaleX:0.835,scaleY:0.8921,skewX:-0.4244,skewY:-0.5564,x:1176.15,y:296.5},0).wait(1).to({scaleX:0.837,scaleY:0.8941,skewX:-0.4352,skewY:-0.5706,x:1175.3,y:298.25},0).wait(1).to({scaleX:0.8391,scaleY:0.8962,skewX:-0.4461,skewY:-0.5849,x:1174.45,y:299.95},0).wait(1).to({scaleX:0.8411,scaleY:0.8982,skewX:-0.457,skewY:-0.5991,x:1173.6,y:301.6},0).wait(1).to({scaleX:0.8432,scaleY:0.9003,skewX:-0.4679,skewY:-0.6134,x:1172.75,y:303.25},0).wait(1).to({scaleX:0.8452,scaleY:0.9023,skewX:-0.4788,skewY:-0.6277,x:1171.85,y:304.85},0).wait(1).to({scaleX:0.8472,scaleY:0.9044,skewX:-0.4896,skewY:-0.6419,x:1171,y:306.4},0).wait(1).to({scaleX:0.8493,scaleY:0.9064,skewX:-0.5005,skewY:-0.6562,x:1170.15,y:308},0).wait(1).to({scaleX:0.8513,scaleY:0.9085,skewX:-0.5114,skewY:-0.6705,x:1169.3,y:309.5},0).wait(1).to({scaleX:0.8533,scaleY:0.9105,skewX:-0.5223,skewY:-0.6847,x:1168.4,y:311.05},0).wait(1).to({scaleX:0.8554,scaleY:0.9126,skewX:-0.5332,skewY:-0.699,x:1167.55,y:312.5},0).wait(1).to({scaleX:0.8574,scaleY:0.9146,skewX:-0.5441,skewY:-0.7133,x:1166.65,y:314},0).wait(1).to({scaleX:0.8595,scaleY:0.9166,skewX:-0.5549,skewY:-0.7275,x:1165.8,y:315.45},0).wait(1).to({scaleX:0.8615,scaleY:0.9187,skewX:-0.5658,skewY:-0.7418,x:1164.85,y:316.85},0).wait(1).to({scaleX:0.8635,scaleY:0.9208,skewX:-0.5767,skewY:-0.7561,x:1164,y:318.25},0).wait(1).to({scaleX:0.8656,scaleY:0.9228,skewX:-0.5876,skewY:-0.7703,x:1163.1,y:319.65},0).wait(1).to({scaleX:0.8676,scaleY:0.9248,skewX:-0.5985,skewY:-0.7846,x:1162.25,y:321},0).wait(1).to({scaleX:0.8696,scaleY:0.9269,skewX:-0.6093,skewY:-0.7989,x:1161.35,y:322.35},0).wait(1).to({scaleX:0.8717,scaleY:0.9289,skewX:-0.6202,skewY:-0.8131,x:1160.45,y:323.7},0).wait(1).to({scaleX:0.8737,scaleY:0.931,skewX:-0.6311,skewY:-0.8274,x:1159.55,y:325},0).wait(1).to({scaleX:0.8758,scaleY:0.933,skewX:-0.642,skewY:-0.8417,x:1158.75,y:326.3},0).wait(1).to({scaleX:0.8778,scaleY:0.9351,skewX:-0.6529,skewY:-0.8559,x:1157.85,y:327.55},0).wait(1).to({scaleX:0.8798,scaleY:0.9371,skewX:-0.6637,skewY:-0.8702,x:1156.95,y:328.8},0).wait(1).to({scaleX:0.8819,scaleY:0.9392,skewX:-0.6746,skewY:-0.8845,x:1156.05,y:330.05},0).wait(1).to({scaleX:0.8839,scaleY:0.9412,skewX:-0.6855,skewY:-0.8987,x:1155.15,y:331.25},0).wait(1).to({scaleX:0.8859,scaleY:0.9433,skewX:-0.6964,skewY:-0.913,x:1154.2,y:332.5},0).wait(1).to({scaleX:0.888,scaleY:0.9453,skewX:-0.7073,skewY:-0.9273,x:1153.3,y:333.65},0).wait(1).to({scaleX:0.89,scaleY:0.9474,skewX:-0.7182,skewY:-0.9415,x:1152.4,y:334.9},0).wait(1).to({scaleX:0.8921,scaleY:0.9494,skewX:-0.729,skewY:-0.9558,x:1151.5,y:336.05},0).wait(1).to({scaleX:0.8941,scaleY:0.9515,skewX:-0.7399,skewY:-0.9701,x:1150.55,y:337.15},0).wait(1).to({scaleX:0.8961,scaleY:0.9535,skewX:-0.7508,skewY:-0.9843,x:1149.65,y:338.3},0).wait(1).to({scaleX:0.8982,scaleY:0.9556,skewX:-0.7617,skewY:-0.9986,x:1148.7,y:339.4},0).wait(1).to({scaleX:0.9002,scaleY:0.9576,skewX:-0.7726,skewY:-1.0128,x:1147.75,y:340.55},0).wait(1).to({scaleX:0.9023,scaleY:0.9597,skewX:-0.7834,skewY:-1.0271,x:1146.8,y:341.65},0).wait(1).to({scaleX:0.9043,scaleY:0.9617,skewX:-0.7943,skewY:-1.0414,x:1145.9,y:342.75},0).wait(1).to({scaleX:0.9063,scaleY:0.9638,skewX:-0.8052,skewY:-1.0556,x:1144.95,y:343.8},0).wait(1).to({scaleX:0.9084,scaleY:0.9658,skewX:-0.8161,skewY:-1.0699,x:1144,y:344.85},0).wait(1).to({scaleX:0.9104,scaleY:0.9679,skewX:-0.827,skewY:-1.0842,x:1143.1,y:345.9},0).wait(1).to({scaleX:0.9125,scaleY:0.9699,skewX:-0.8378,skewY:-1.0984,x:1142.15,y:346.95},0).wait(1).to({scaleX:0.9145,scaleY:0.9719,skewX:-0.8487,skewY:-1.1127,x:1141.2,y:348},0).wait(1).to({scaleX:0.9165,scaleY:0.974,skewX:-0.8596,skewY:-1.127,x:1140.25,y:349},0).wait(1).to({scaleX:0.9186,scaleY:0.976,skewX:-0.8705,skewY:-1.1412,x:1139.3,y:350},0).wait(1).to({scaleX:0.9206,scaleY:0.9781,skewX:-0.8814,skewY:-1.1555,x:1138.35,y:351},0).wait(1).to({scaleX:0.9227,scaleY:0.9801,skewX:-0.8922,skewY:-1.1698,x:1137.35,y:352},0).wait(1).to({scaleX:0.9247,scaleY:0.9822,skewX:-0.9031,skewY:-1.184,x:1136.4,y:352.95},0).wait(1).to({scaleX:0.9267,scaleY:0.9842,skewX:-0.914,skewY:-1.1983,x:1135.45,y:353.9},0).wait(1).to({scaleX:0.9288,scaleY:0.9863,skewX:-0.9249,skewY:-1.2126,x:1134.45,y:354.9},0).wait(1).to({scaleX:0.9308,scaleY:0.9883,skewX:-0.9358,skewY:-1.2268,x:1133.5,y:355.8},0).wait(1).to({scaleX:0.9329,scaleY:0.9904,skewX:-0.9467,skewY:-1.2411,x:1132.5,y:356.75},0).wait(1).to({scaleX:0.9349,scaleY:0.9924,skewX:-0.9575,skewY:-1.2554,x:1131.5,y:357.65},0).wait(1).to({scaleX:0.9369,scaleY:0.9945,skewX:-0.9684,skewY:-1.2696,x:1130.5,y:358.6},0).wait(1).to({scaleX:0.939,scaleY:0.9965,skewX:-0.9793,skewY:-1.2839,x:1129.55,y:359.5},0).wait(1).to({scaleX:0.941,scaleY:0.9986,skewX:-0.9902,skewY:-1.2982,x:1128.55,y:360.4},0).wait(1).to({scaleX:0.9431,scaleY:1.0006,skewX:-1.0011,skewY:-1.3124,x:1127.55,y:361.3},0).wait(1).to({scaleX:0.9451,scaleY:1.0027,skewX:-1.0119,skewY:-1.3267,x:1126.55,y:362.15},0).wait(1).to({scaleX:0.9471,scaleY:1.0047,skewX:-1.0228,skewY:-1.341,x:1125.55,y:363.05},0).wait(1).to({scaleX:0.9492,scaleY:1.0068,skewX:-1.0337,skewY:-1.3552,x:1124.55,y:363.9},0).wait(1).to({scaleX:0.9512,scaleY:1.0088,skewX:-1.0446,skewY:-1.3695,x:1123.55,y:364.8},0).wait(1).to({scaleX:0.9533,scaleY:1.0109,skewX:-1.0555,skewY:-1.3837,x:1122.55,y:365.6},0).wait(1).to({scaleX:0.9553,scaleY:1.0129,skewX:-1.0663,skewY:-1.398,x:1121.5,y:366.4},0).wait(1).to({scaleX:0.9573,scaleY:1.015,skewX:-1.0772,skewY:-1.4123,x:1120.5,y:367.3},0).wait(1).to({scaleX:0.9594,scaleY:1.017,skewX:-1.0881,skewY:-1.4265,x:1119.5,y:368.1},0).wait(1).to({scaleX:0.9614,scaleY:1.0191,skewX:-1.099,skewY:-1.4408,x:1118.45,y:368.95},0).wait(1).to({scaleX:0.9634,scaleY:1.0211,skewX:-1.1099,skewY:-1.4551,x:1117.4,y:369.7},0).wait(1).to({scaleX:0.9655,scaleY:1.0232,skewX:-1.1208,skewY:-1.4693,x:1116.35,y:370.55},0).wait(1).to({scaleX:0.9675,scaleY:1.0252,skewX:-1.1316,skewY:-1.4836,x:1115.3,y:371.3},0).wait(1).to({scaleX:0.9696,scaleY:1.0273,skewX:-1.1425,skewY:-1.4979,x:1114.25,y:372.15},0).wait(1).to({scaleX:0.9716,scaleY:1.0293,skewX:-1.1534,skewY:-1.5121,x:1113.2,y:372.9},0).wait(1).to({scaleX:0.9736,scaleY:1.0314,skewX:-1.1643,skewY:-1.5264,x:1112.15,y:373.65},0).wait(1).to({scaleX:0.9757,scaleY:1.0334,skewX:-1.1752,skewY:-1.5407,x:1111.1,y:374.45},0).wait(1).to({scaleX:0.9777,scaleY:1.0355,skewX:-1.186,skewY:-1.5549,x:1110.05,y:375.2},0).wait(1).to({scaleX:0.9797,scaleY:1.0375,skewX:-1.1969,skewY:-1.5692,x:1109,y:375.95},0).wait(1).to({scaleX:0.9818,scaleY:1.0396,skewX:-1.2078,skewY:-1.5835,x:1107.95,y:376.7},0).wait(1).to({scaleX:0.9838,scaleY:1.0416,skewX:-1.2187,skewY:-1.5977,x:1106.85,y:377.45},0).wait(1).to({scaleX:0.9859,scaleY:1.0437,skewX:-1.2296,skewY:-1.612,x:1105.8,y:378.15},0).wait(1).to({scaleX:0.9879,scaleY:1.0457,skewX:-1.2404,skewY:-1.6263,x:1104.7,y:378.85},0).wait(1).to({scaleX:0.9899,scaleY:1.0478,skewX:-1.2513,skewY:-1.6405,x:1103.65,y:379.6},0).wait(1).to({scaleX:0.992,scaleY:1.0498,skewX:-1.2622,skewY:-1.6548,x:1102.55,y:380.3},0).wait(1).to({scaleX:0.994,scaleY:1.0519,skewX:-1.2731,skewY:-1.6691,x:1101.45,y:381.05},0).wait(1).to({scaleX:0.996,scaleY:1.0539,skewX:-1.284,skewY:-1.6833,x:1100.3,y:381.75},0).wait(1).to({scaleX:0.9981,scaleY:1.056,skewX:-1.2948,skewY:-1.6976,x:1099.2,y:382.45},0).wait(1).to({scaleX:1.0001,scaleY:1.058,skewX:-1.3057,skewY:-1.7119,x:1098.1,y:383.15},0).wait(1).to({scaleX:1.0022,scaleY:1.0601,skewX:-1.3166,skewY:-1.7261,x:1097,y:383.85},0).wait(1).to({scaleX:1.0042,scaleY:1.0621,skewX:-1.3275,skewY:-1.7404,x:1095.9,y:384.5},0).wait(1).to({scaleX:1.0062,scaleY:1.0642,skewX:-1.3384,skewY:-1.7547,x:1094.75,y:385.15},0).wait(1).to({scaleX:1.0083,scaleY:1.0662,skewX:-1.3493,skewY:-1.7689,x:1093.65,y:385.85},0).wait(1).to({scaleX:1.0103,scaleY:1.0683,skewX:-1.3601,skewY:-1.7832,x:1092.5,y:386.5},0).wait(1).to({scaleX:1.0123,scaleY:1.0703,skewX:-1.371,skewY:-1.7974,x:1091.4,y:387.2},0).wait(1).to({scaleX:1.0144,scaleY:1.0724,skewX:-1.3819,skewY:-1.8117,x:1090.25,y:387.85},0).wait(1).to({scaleX:1.0164,scaleY:1.0744,skewX:-1.3928,skewY:-1.826,x:1089.1,y:388.5},0).wait(1).to({scaleX:1.0185,scaleY:1.0765,skewX:-1.4037,skewY:-1.8402,x:1087.95,y:389.15},0).wait(1).to({scaleX:1.0205,scaleY:1.0785,skewX:-1.4145,skewY:-1.8545,x:1086.8,y:389.75},0).wait(1).to({scaleX:1.0225,scaleY:1.0806,skewX:-1.4254,skewY:-1.8688,x:1085.65,y:390.4},0).wait(1).to({scaleX:1.0246,scaleY:1.0826,skewX:-1.4363,skewY:-1.883,x:1084.5,y:391},0).wait(1).to({scaleX:1.0266,scaleY:1.0846,skewX:-1.4472,skewY:-1.8973,x:1083.25,y:391.65},0).wait(1).to({scaleX:1.0287,scaleY:1.0867,skewX:-1.4581,skewY:-1.9116,x:1082.1,y:392.25},0).wait(1).to({scaleX:1.0307,scaleY:1.0888,skewX:-1.4689,skewY:-1.9258,x:1080.9,y:392.9},0).wait(1).to({scaleX:1.0327,scaleY:1.0908,skewX:-1.4798,skewY:-1.9401,x:1079.75,y:393.5},0).wait(1).to({scaleX:1.0348,scaleY:1.0928,skewX:-1.4907,skewY:-1.9544,x:1078.55,y:394.1},0).wait(1).to({scaleX:1.0368,scaleY:1.0949,skewX:-1.5016,skewY:-1.9686,x:1077.35,y:394.7},0).wait(1).to({scaleX:1.0389,scaleY:1.0969,skewX:-1.5125,skewY:-1.9829,x:1076.15,y:395.3},0).wait(1).to({scaleX:1.0409,scaleY:1.099,skewX:-1.5234,skewY:-1.9972,x:1074.95,y:395.9},0).wait(1).to({scaleX:1.0429,scaleY:1.101,skewX:-1.5342,skewY:-2.0114,x:1073.75,y:396.5},0).wait(1).to({scaleX:1.045,scaleY:1.1031,skewX:-1.5451,skewY:-2.0257,x:1072.55,y:397.1},0).wait(1).to({scaleX:1.047,scaleY:1.1051,skewX:-1.556,skewY:-2.04,x:1071.3,y:397.65},0).wait(1).to({scaleX:1.0491,scaleY:1.1072,skewX:-1.5669,skewY:-2.0542,x:1070.1,y:398.25},0).wait(1).to({scaleX:1.0511,scaleY:1.1092,skewX:-1.5778,skewY:-2.0685,x:1068.85,y:398.8},0).wait(1).to({scaleX:1.0531,scaleY:1.1113,skewX:-1.5886,skewY:-2.0828,x:1067.55,y:399.35},0).wait(1).to({scaleX:1.0552,scaleY:1.1133,skewX:-1.5995,skewY:-2.097,x:1066.3,y:399.95},0).wait(1).to({scaleX:1.0572,scaleY:1.1154,skewX:-1.6104,skewY:-2.1113,x:1065.05,y:400.5},0).wait(1).to({scaleX:1.0592,scaleY:1.1174,skewX:-1.6213,skewY:-2.1256,x:1063.8,y:401.1},0).wait(1).to({scaleX:1.0613,scaleY:1.1195,skewX:-1.6322,skewY:-2.1398,x:1062.55,y:401.6},0).wait(1).to({scaleX:1.0633,scaleY:1.1215,skewX:-1.643,skewY:-2.1541,x:1061.3,y:402.2},0).wait(1).to({scaleX:1.0654,scaleY:1.1236,skewX:-1.6539,skewY:-2.1683,x:1060,y:402.7},0).wait(1).to({scaleX:1.0674,scaleY:1.1256,skewX:-1.6648,skewY:-2.1826,x:1058.75,y:403.25},0).wait(1).to({scaleX:1.0695,scaleY:1.1277,skewX:-1.6757,skewY:-2.1969,x:1057.45,y:403.8},0).wait(1).to({scaleX:1.0715,scaleY:1.1297,skewX:-1.6866,skewY:-2.2111,x:1056.15,y:404.3},0).wait(1).to({scaleX:1.0735,scaleY:1.1318,skewX:-1.6975,skewY:-2.2254,x:1054.85,y:404.9},0).wait(1).to({scaleX:1.0756,scaleY:1.1338,skewX:-1.7083,skewY:-2.2397,x:1053.55,y:405.4},0).wait(1).to({scaleX:1.0776,scaleY:1.1359,skewX:-1.7192,skewY:-2.2539,x:1052.2,y:405.95},0).wait(1).to({scaleX:1.0796,scaleY:1.1379,skewX:-1.7301,skewY:-2.2682,x:1050.9,y:406.45},0).wait(1).to({scaleX:1.0817,scaleY:1.1399,skewX:-1.741,skewY:-2.2825,x:1049.55,y:407},0).wait(1).to({scaleX:1.0837,scaleY:1.142,skewX:-1.7519,skewY:-2.2967,x:1048.2,y:407.5},0).wait(1).to({scaleX:1.0858,scaleY:1.144,skewX:-1.7627,skewY:-2.311,x:1046.85,y:407.95},0).wait(1).to({scaleX:1.0878,scaleY:1.1461,skewX:-1.7736,skewY:-2.3253,x:1045.5,y:408.5},0).wait(1).to({scaleX:1.0898,scaleY:1.1481,skewX:-1.7845,skewY:-2.3395,x:1044.15,y:409},0).wait(1).to({scaleX:1.0919,scaleY:1.1502,skewX:-1.7954,skewY:-2.3538,x:1042.8,y:409.5},0).wait(1).to({scaleX:1.0939,scaleY:1.1522,skewX:-1.8063,skewY:-2.3681,x:1041.4,y:410},0).wait(1).to({scaleX:1.096,scaleY:1.1543,skewX:-1.8171,skewY:-2.3823,x:1040.05,y:410.5},0).wait(1).to({scaleX:1.098,scaleY:1.1563,skewX:-1.828,skewY:-2.3966,x:1038.65,y:411},0).wait(1).to({scaleX:1.1,scaleY:1.1584,skewX:-1.8389,skewY:-2.4109,x:1037.25,y:411.45},0).wait(1).to({scaleX:1.1021,scaleY:1.1604,skewX:-1.8498,skewY:-2.4251,x:1035.85,y:412},0).wait(1).to({scaleX:1.1041,scaleY:1.1625,skewX:-1.8607,skewY:-2.4394,x:1034.45,y:412.45},0).wait(1).to({scaleX:1.1061,scaleY:1.1645,skewX:-1.8715,skewY:-2.4537,x:1033,y:412.95},0).wait(1).to({scaleX:1.1082,scaleY:1.1666,skewX:-1.8824,skewY:-2.4679,x:1031.55,y:413.4},0).wait(1).to({scaleX:1.1102,scaleY:1.1686,skewX:-1.8933,skewY:-2.4822,x:1030.1,y:413.9},0).wait(1).to({scaleX:1.1123,scaleY:1.1707,skewX:-1.9042,skewY:-2.4965,x:1028.65,y:414.35},0).wait(1).to({scaleX:1.1143,scaleY:1.1727,skewX:-1.9151,skewY:-2.5107,x:1027.2,y:414.85},0).wait(1).to({scaleX:1.1163,scaleY:1.1748,skewX:-1.926,skewY:-2.525,x:1025.75,y:415.3},0).wait(1).to({scaleX:1.1184,scaleY:1.1768,skewX:-1.9368,skewY:-2.5393,x:1024.3,y:415.75},0).wait(1).to({scaleX:1.1204,scaleY:1.1789,skewX:-1.9477,skewY:-2.5535,x:1022.8,y:416.25},0).wait(1).to({scaleX:1.1224,scaleY:1.1809,skewX:-1.9586,skewY:-2.5678,x:1021.3,y:416.7},0).wait(1).to({scaleX:1.1245,scaleY:1.183,skewX:-1.9695,skewY:-2.582,x:1019.8,y:417.2},0).wait(1).to({scaleX:1.1265,scaleY:1.185,skewX:-1.9804,skewY:-2.5963,x:1018.35,y:417.6},0).wait(1).to({scaleX:1.1285,scaleY:1.1871,skewX:-1.9912,skewY:-2.6106,x:1016.85,y:418.1},0).wait(1).to({scaleX:1.1306,scaleY:1.1891,skewX:-2.0021,skewY:-2.6248,x:1015.3,y:418.55},0).wait(1).to({scaleX:1.1326,scaleY:1.1912,skewX:-2.013,skewY:-2.6391,x:1013.75,y:418.95},0).wait(1).to({scaleX:1.1347,scaleY:1.1932,skewX:-2.0239,skewY:-2.6534,x:1012.2,y:419.45},0).wait(1).to({scaleX:1.1367,scaleY:1.1953,skewX:-2.0348,skewY:-2.6676,x:1010.65,y:419.85},0).wait(1).to({scaleX:1.1387,scaleY:1.1973,skewX:-2.0456,skewY:-2.6819,x:1009.05,y:420.35},0).wait(1).to({scaleX:1.1408,scaleY:1.1994,skewX:-2.0565,skewY:-2.6962,x:1007.5,y:420.75},0).wait(1).to({scaleX:1.1428,scaleY:1.2014,skewX:-2.0674,skewY:-2.7104,x:1005.9,y:421.2},0).wait(1).to({scaleX:1.1449,scaleY:1.2035,skewX:-2.0783,skewY:-2.7247,x:1004.3,y:421.65},0).wait(1).to({scaleX:1.1469,scaleY:1.2055,skewX:-2.0892,skewY:-2.739,x:1002.7,y:422.1},0).wait(1).to({scaleX:1.1489,scaleY:1.2076,skewX:-2.1001,skewY:-2.7532,x:1001.05,y:422.5},0).wait(1).to({scaleX:1.151,scaleY:1.2096,skewX:-2.1109,skewY:-2.7675,x:999.45,y:422.95},0).wait(1).to({scaleX:1.153,scaleY:1.2117,skewX:-2.1218,skewY:-2.7818,x:997.8,y:423.4},0).wait(1).to({scaleX:1.155,scaleY:1.2137,skewX:-2.1327,skewY:-2.796,x:996.15,y:423.8},0).wait(1).to({scaleX:1.1571,scaleY:1.2158,skewX:-2.1436,skewY:-2.8103,x:994.4,y:424.25},0).wait(1).to({scaleX:1.1591,scaleY:1.2178,skewX:-2.1545,skewY:-2.8246,x:992.75,y:424.65},0).wait(1).to({scaleX:1.1612,scaleY:1.2199,skewX:-2.1653,skewY:-2.8388,x:991.05,y:425.1},0).wait(1).to({scaleX:1.1632,scaleY:1.2219,skewX:-2.1762,skewY:-2.8531,x:989.35,y:425.5},0).wait(1).to({scaleX:1.1653,scaleY:1.224,skewX:-2.1871,skewY:-2.8674,x:987.6,y:425.9},0).wait(1).to({scaleX:1.1673,scaleY:1.226,skewX:-2.198,skewY:-2.8816,x:985.9,y:426.35},0).wait(1).to({scaleX:1.1693,scaleY:1.2281,skewX:-2.2089,skewY:-2.8959,x:984.15,y:426.75},0).wait(1).to({scaleX:1.1714,scaleY:1.2301,skewX:-2.2197,skewY:-2.9102,x:982.4,y:427.2},0).wait(1).to({scaleX:1.1734,scaleY:1.2322,skewX:-2.2306,skewY:-2.9244,x:980.6,y:427.6},0).wait(1).to({scaleX:1.1754,scaleY:1.2342,skewX:-2.2415,skewY:-2.9387,x:978.8,y:428.05},0).wait(1).to({scaleX:1.1775,scaleY:1.2363,skewX:-2.2524,skewY:-2.9529,x:977,y:428.45},0).wait(1).to({scaleX:1.1795,scaleY:1.2383,skewX:-2.2633,skewY:-2.9672,x:975.2,y:428.9},0).wait(1).to({scaleX:1.1816,scaleY:1.2404,skewX:-2.2741,skewY:-2.9815,x:973.3,y:429.25},0).wait(1).to({scaleX:1.1836,scaleY:1.2424,skewX:-2.285,skewY:-2.9957,x:971.45,y:429.65},0).wait(1).to({scaleX:1.1857,scaleY:1.2445,skewX:-2.2959,skewY:-3.01,x:969.6,y:430.1},0).wait(1).to({scaleX:1.1877,scaleY:1.2465,skewX:-2.3068,skewY:-3.0243,x:967.7,y:430.5},0).wait(1).to({scaleX:1.1897,scaleY:1.2486,skewX:-2.3177,skewY:-3.0385,x:965.8,y:430.9},0).wait(1).to({scaleX:1.1918,scaleY:1.2506,skewX:-2.3286,skewY:-3.0528,x:963.9,y:431.3},0).wait(1).to({scaleX:1.1938,scaleY:1.2527,skewX:-2.3394,skewY:-3.0671,x:961.95,y:431.75},0).wait(1).to({scaleX:1.1958,scaleY:1.2547,skewX:-2.3503,skewY:-3.0813,x:960,y:432.15},0).wait(1).to({scaleX:1.1979,scaleY:1.2567,skewX:-2.3612,skewY:-3.0956,x:958.05,y:432.5},0).wait(1).to({scaleX:1.1999,scaleY:1.2588,skewX:-2.3721,skewY:-3.1099,x:956.05,y:432.95},0).wait(1).to({scaleX:1.202,scaleY:1.2608,skewX:-2.383,skewY:-3.1241,x:954.05,y:433.35},0).wait(1).to({scaleX:1.204,scaleY:1.2629,skewX:-2.3938,skewY:-3.1384,x:951.95,y:433.75},0).wait(1).to({scaleX:1.206,scaleY:1.2649,skewX:-2.4047,skewY:-3.1527,x:949.9,y:434.15},0).wait(1).to({scaleX:1.2081,scaleY:1.267,skewX:-2.4156,skewY:-3.1669,x:947.85,y:434.6},0).wait(1).to({scaleX:1.2101,scaleY:1.269,skewX:-2.4265,skewY:-3.1812,x:945.75,y:435},0).wait(1).to({scaleX:1.2121,scaleY:1.2711,skewX:-2.4374,skewY:-3.1955,x:943.6,y:435.4},0).wait(1).to({scaleX:1.2142,scaleY:1.2731,skewX:-2.4482,skewY:-3.2097,x:941.45,y:435.8},0).wait(1).to({scaleX:1.2162,scaleY:1.2752,skewX:-2.4591,skewY:-3.224,x:939.3,y:436.2},0).wait(1).to({scaleX:1.2183,scaleY:1.2772,skewX:-2.47,skewY:-3.2383,x:937.1,y:436.65},0).wait(1).to({scaleX:1.2203,scaleY:1.2793,skewX:-2.4809,skewY:-3.2525,x:934.9,y:437},0).wait(1).to({scaleX:1.2223,scaleY:1.2813,skewX:-2.4918,skewY:-3.2668,x:932.65,y:437.45},0).wait(1).to({scaleX:1.2244,scaleY:1.2834,skewX:-2.5027,skewY:-3.2811,x:930.4,y:437.85},0).wait(1).to({scaleX:1.2264,scaleY:1.2854,skewX:-2.5135,skewY:-3.2953,x:928.05,y:438.3},0).wait(1).to({scaleX:1.2285,scaleY:1.2875,skewX:-2.5244,skewY:-3.3096,x:925.75,y:438.65},0).wait(1).to({scaleX:1.2305,scaleY:1.2895,skewX:-2.5353,skewY:-3.3239,x:923.4,y:439.05},0).wait(1).to({scaleX:1.2325,scaleY:1.2916,skewX:-2.5462,skewY:-3.3381,x:921,y:439.5},0).wait(1).to({scaleX:1.2346,scaleY:1.2936,skewX:-2.5571,skewY:-3.3524,x:918.6,y:439.9},0).wait(1).to({scaleX:1.2366,scaleY:1.2957,skewX:-2.5679,skewY:-3.3666,x:916.15,y:440.35},0).wait(1).to({scaleX:1.2386,scaleY:1.2977,skewX:-2.5788,skewY:-3.3809,x:913.65,y:440.75},0).wait(1).to({scaleX:1.2407,scaleY:1.2997,skewX:-2.5897,skewY:-3.3952,x:911.15,y:441.2},0).wait(1).to({scaleX:1.2427,scaleY:1.3018,skewX:-2.6006,skewY:-3.4094,x:908.6,y:441.6},0).wait(1).to({scaleX:1.2448,scaleY:1.3038,skewX:-2.6115,skewY:-3.4237,x:906,y:442.05},0).wait(1).to({scaleX:1.2468,scaleY:1.3059,skewX:-2.6223,skewY:-3.438,x:903.35,y:442.5},0).wait(1).to({scaleX:1.2488,scaleY:1.3079,skewX:-2.6332,skewY:-3.4522,x:900.6,y:442.9},0).wait(1).to({scaleX:1.2509,scaleY:1.31,skewX:-2.6441,skewY:-3.4665,x:897.9,y:443.35},0).wait(1).to({scaleX:1.2529,scaleY:1.312,skewX:-2.655,skewY:-3.4808,x:895.15,y:443.8},0).wait(1).to({scaleX:1.2549,scaleY:1.3141,skewX:-2.6659,skewY:-3.495,x:892.3,y:444.25},0).wait(1).to({scaleX:1.257,scaleY:1.3161,skewX:-2.6767,skewY:-3.5093,x:889.45,y:444.7},0).wait(1).to({scaleX:1.259,scaleY:1.3182,skewX:-2.6876,skewY:-3.5236,x:886.55,y:445.15},0).wait(1).to({scaleX:1.2611,scaleY:1.3202,skewX:-2.6985,skewY:-3.5378,x:883.55,y:445.6},0).wait(1).to({scaleX:1.2631,scaleY:1.3223,skewX:-2.7094,skewY:-3.5521,x:880.55,y:446.05},0).wait(1).to({scaleX:1.2651,scaleY:1.3243,skewX:-2.7203,skewY:-3.5664,x:877.45,y:446.55},0).wait(1).to({scaleX:1.2672,scaleY:1.3264,skewX:-2.7312,skewY:-3.5806,x:874.3,y:447},0).wait(1).to({scaleX:1.2692,scaleY:1.3284,skewX:-2.742,skewY:-3.5949,x:871,y:447.5},0).wait(1).to({scaleX:1.2712,scaleY:1.3305,skewX:-2.7529,skewY:-3.6092,x:867.7,y:448},0).wait(1).to({scaleX:1.2733,scaleY:1.3325,skewX:-2.7638,skewY:-3.6234,x:864.3,y:448.5},0).wait(1).to({scaleX:1.2753,scaleY:1.3346,skewX:-2.7747,skewY:-3.6377,x:860.85,y:449},0).wait(1).to({scaleX:1.2774,scaleY:1.3366,skewX:-2.7856,skewY:-3.652,x:857.3,y:449.55},0).wait(1).to({scaleX:1.2794,scaleY:1.3387,skewX:-2.7964,skewY:-3.6662,x:853.6,y:450.05},0).wait(1).to({scaleX:1.2815,scaleY:1.3407,skewX:-2.8073,skewY:-3.6805,x:849.85,y:450.6},0).wait(1).to({scaleX:1.2835,scaleY:1.3428,skewX:-2.8182,skewY:-3.6948,x:845.95,y:451.2},0).wait(1).to({scaleX:1.2855,scaleY:1.3448,skewX:-2.8291,skewY:-3.709,x:841.95,y:451.75},0).wait(1).to({scaleX:1.2876,scaleY:1.3469,skewX:-2.84,skewY:-3.7233,x:837.8,y:452.35},0).wait(1).to({scaleX:1.2896,scaleY:1.3489,skewX:-2.8508,skewY:-3.7375,x:833.45,y:452.95},0).wait(1).to({scaleX:1.2916,scaleY:1.351,skewX:-2.8617,skewY:-3.7518,x:829,y:453.6},0).wait(1).to({scaleX:1.2937,scaleY:1.353,skewX:-2.8726,skewY:-3.7661,x:824.35,y:454.25},0).wait(1).to({scaleX:1.2957,scaleY:1.3551,skewX:-2.8835,skewY:-3.7803,x:819.45,y:454.9},0).wait(1).to({scaleX:1.2978,scaleY:1.3571,skewX:-2.8944,skewY:-3.7946,x:814.35,y:455.65},0).wait(1).to({scaleX:1.2998,scaleY:1.3592,skewX:-2.9053,skewY:-3.8089,x:808.9,y:456.4},0).wait(1).to({scaleX:1.3018,scaleY:1.3612,skewX:-2.9161,skewY:-3.8231,x:803.15,y:457.25},0).wait(1).to({scaleX:1.3039,scaleY:1.3633,skewX:-2.927,skewY:-3.8374,x:797,y:458.05},0).wait(1).to({scaleX:1.3059,scaleY:1.3653,skewX:-2.9379,skewY:-3.8517,x:790.3,y:459.05},0).wait(1).to({scaleX:1.308,scaleY:1.3674,skewX:-2.9488,skewY:-3.8659,x:782.95,y:460.05},0).wait(1).to({scaleX:1.31,scaleY:1.3694,skewX:-2.9597,skewY:-3.8802,x:774.65,y:461.2},0).wait(1).to({scaleX:1.312,scaleY:1.3715,skewX:-2.9705,skewY:-3.8945,x:765.15,y:462.55},0).wait(1).to({scaleX:1.3141,scaleY:1.3735,skewX:-2.9814,skewY:-3.9087,x:753.35,y:464.2},0).wait(1).to({scaleX:1.3161,scaleY:1.3756,skewX:-2.9923,skewY:-3.923,x:736.35,y:466.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.ladywood_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [626];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_626 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(626).call(this.frame_626).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(484.1,406.9,0.8877,0.8877,0,0,0,0.3,0.3);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(81).to({regX:0,regY:0,scaleX:0.8891,scaleY:0.8891,x:483.8496,y:406.6497},0).wait(1).to({scaleX:0.8904,scaleY:0.8904,x:483.8492,y:406.6493},0).wait(1).to({scaleX:0.8917,scaleY:0.8917,x:483.8488,y:406.649},0).wait(1).to({scaleX:0.8931,scaleY:0.8931,x:483.8484,y:406.6487},0).wait(1).to({scaleX:0.8944,scaleY:0.8944,x:483.848,y:406.6483},0).wait(1).to({scaleX:0.8957,scaleY:0.8957,x:483.8476,y:406.648},0).wait(1).to({scaleX:0.8971,scaleY:0.8971,x:483.8472,y:406.6477},0).wait(1).to({scaleX:0.8984,scaleY:0.8984,x:483.8468,y:406.6473},0).wait(1).to({scaleX:0.8997,scaleY:0.8997,x:483.8464,y:406.647},0).wait(1).to({scaleX:0.9011,scaleY:0.9011,x:483.846,y:406.6467},0).wait(1).to({scaleX:0.9024,scaleY:0.9024,x:483.8456,y:406.6463},0).wait(1).to({scaleX:0.9038,scaleY:0.9038,x:483.8452,y:406.646},0).wait(1).to({scaleX:0.9051,scaleY:0.9051,x:483.8448,y:406.6457},0).wait(1).to({scaleX:0.9064,scaleY:0.9064,x:483.8444,y:406.6453},0).wait(1).to({scaleX:0.9078,scaleY:0.9078,x:483.844,y:406.645},0).wait(1).to({scaleX:0.9091,scaleY:0.9091,x:483.8436,y:406.6447},0).wait(1).to({scaleX:0.9104,scaleY:0.9104,x:483.8432,y:406.6443},0).wait(1).to({scaleX:0.9118,scaleY:0.9118,x:483.8428,y:406.644},0).wait(1).to({scaleX:0.9131,scaleY:0.9131,x:483.8424,y:406.6437},0).wait(1).to({scaleX:0.9144,scaleY:0.9144,x:483.842,y:406.6433},0).wait(1).to({scaleX:0.9158,scaleY:0.9158,x:483.8416,y:406.643},0).wait(1).to({scaleX:0.9171,scaleY:0.9171,x:483.8412,y:406.6427},0).wait(1).to({scaleX:0.9184,scaleY:0.9184,x:483.8408,y:406.6423},0).wait(1).to({scaleX:0.9198,scaleY:0.9198,x:483.8404,y:406.642},0).wait(1).to({scaleX:0.9211,scaleY:0.9211,x:483.84,y:406.6417},0).wait(1).to({scaleX:0.9224,scaleY:0.9224,x:483.8396,y:406.6413},0).wait(1).to({scaleX:0.9238,scaleY:0.9238,x:483.8392,y:406.641},0).wait(1).to({scaleX:0.9251,scaleY:0.9251,x:483.8388,y:406.6407},0).wait(1).to({scaleX:0.9265,scaleY:0.9265,x:483.8384,y:406.6403},0).wait(1).to({scaleX:0.9278,scaleY:0.9278,x:483.838,y:406.64},0).wait(1).to({scaleX:0.9291,scaleY:0.9291,x:483.8376,y:406.6397},0).wait(1).to({scaleX:0.9305,scaleY:0.9305,x:483.8372,y:406.6393},0).wait(1).to({scaleX:0.9318,scaleY:0.9318,x:483.8368,y:406.639},0).wait(1).to({scaleX:0.9331,scaleY:0.9331,x:483.8364,y:406.6386},0).wait(1).to({scaleX:0.9345,scaleY:0.9345,x:483.836,y:406.6383},0).wait(1).to({scaleX:0.9358,scaleY:0.9358,x:483.8356,y:406.638},0).wait(1).to({scaleX:0.9371,scaleY:0.9371,x:483.8352,y:406.6376},0).wait(1).to({scaleX:0.9385,scaleY:0.9385,x:483.8348,y:406.6373},0).wait(1).to({scaleX:0.9398,scaleY:0.9398,x:483.8344,y:406.637},0).wait(1).to({scaleX:0.9411,scaleY:0.9411,x:483.834,y:406.6366},0).wait(1).to({scaleX:0.9425,scaleY:0.9425,x:483.8336,y:406.6363},0).wait(1).to({scaleX:0.9438,scaleY:0.9438,x:483.8332,y:406.636},0).wait(1).to({scaleX:0.9451,scaleY:0.9451,x:483.8328,y:406.6356},0).wait(1).to({scaleX:0.9465,scaleY:0.9465,x:483.8324,y:406.6353},0).wait(1).to({scaleX:0.9478,scaleY:0.9478,x:483.832,y:406.635},0).wait(1).to({scaleX:0.9492,scaleY:0.9492,x:483.8316,y:406.6346},0).wait(1).to({scaleX:0.9505,scaleY:0.9505,x:483.8312,y:406.6343},0).wait(1).to({scaleX:0.9518,scaleY:0.9518,x:483.8308,y:406.634},0).wait(1).to({scaleX:0.9532,scaleY:0.9532,x:483.8304,y:406.6336},0).wait(1).to({scaleX:0.9545,scaleY:0.9545,x:483.83,y:406.6333},0).wait(1).to({scaleX:0.9558,scaleY:0.9558,x:483.8296,y:406.633},0).wait(1).to({scaleX:0.9572,scaleY:0.9572,x:483.8292,y:406.6326},0).wait(1).to({scaleX:0.9585,scaleY:0.9585,x:483.8288,y:406.6323},0).wait(1).to({scaleX:0.9598,scaleY:0.9598,x:483.8284,y:406.632},0).wait(1).to({scaleX:0.9612,scaleY:0.9612,x:483.828,y:406.6316},0).wait(1).to({scaleX:0.9625,scaleY:0.9625,x:483.8276,y:406.6313},0).wait(1).to({scaleX:0.9638,scaleY:0.9638,x:483.8272,y:406.631},0).wait(1).to({scaleX:0.9652,scaleY:0.9652,x:483.8268,y:406.6306},0).wait(1).to({scaleX:0.9665,scaleY:0.9665,x:483.8264,y:406.6303},0).wait(1).to({scaleX:0.9678,scaleY:0.9678,x:483.826,y:406.63},0).wait(1).to({scaleX:0.9692,scaleY:0.9692,x:483.8256,y:406.6296},0).wait(1).to({scaleX:0.9705,scaleY:0.9705,x:483.8252,y:406.6293},0).wait(1).to({scaleX:0.9719,scaleY:0.9719,x:483.8248,y:406.629},0).wait(1).to({scaleX:0.9732,scaleY:0.9732,x:483.8244,y:406.6286},0).wait(1).to({scaleX:0.9745,scaleY:0.9745,x:483.824,y:406.6283},0).wait(1).to({scaleX:0.9759,scaleY:0.9759,x:483.8236,y:406.628},0).wait(1).to({scaleX:0.9772,scaleY:0.9772,x:483.8232,y:406.6276},0).wait(1).to({scaleX:0.9785,scaleY:0.9785,x:483.8228,y:406.6273},0).wait(1).to({scaleX:0.9799,scaleY:0.9799,x:483.8224,y:406.627},0).wait(1).to({scaleX:0.9812,scaleY:0.9812,x:483.822,y:406.6266},0).wait(1).to({scaleX:0.9825,scaleY:0.9825,x:483.8216,y:406.6263},0).wait(1).to({scaleX:0.9839,scaleY:0.9839,x:483.8212,y:406.626},0).wait(1).to({scaleX:0.9852,scaleY:0.9852,x:483.8208,y:406.6256},0).wait(1).to({scaleX:0.9865,scaleY:0.9865,x:483.8204,y:406.6253},0).wait(1).to({scaleX:0.9879,scaleY:0.9879,x:483.82,y:406.625},0).wait(1).to({scaleX:0.9892,scaleY:0.9892,x:483.8196,y:406.6246},0).wait(1).to({scaleX:0.9906,scaleY:0.9906,x:483.8192,y:406.6243},0).wait(1).to({scaleX:0.9919,scaleY:0.9919,x:483.8188,y:406.624},0).wait(1).to({scaleX:0.9932,scaleY:0.9932,x:483.8184,y:406.6236},0).wait(1).to({scaleX:0.9946,scaleY:0.9946,x:483.818,y:406.6233},0).wait(1).to({scaleX:0.9959,scaleY:0.9959,x:483.8175,y:406.623},0).wait(1).to({scaleX:0.9972,scaleY:0.9972,x:483.8171,y:406.6226},0).wait(1).to({scaleX:0.9986,scaleY:0.9986,x:483.8167,y:406.6223},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,x:483.8163,y:406.622},0).wait(1).to({scaleX:1.0012,scaleY:1.0012,x:483.8159,y:406.6216},0).wait(1).to({scaleX:1.0026,scaleY:1.0026,x:483.8155,y:406.6213},0).wait(1).to({scaleX:1.0039,scaleY:1.0039,x:483.8151,y:406.621},0).wait(1).to({scaleX:1.0052,scaleY:1.0052,x:483.8147,y:406.6206},0).wait(1).to({scaleX:1.0066,scaleY:1.0066,x:483.8143,y:406.6203},0).wait(1).to({scaleX:1.0079,scaleY:1.0079,x:483.8139,y:406.62},0).wait(1).to({scaleX:1.0092,scaleY:1.0092,x:483.8135,y:406.6196},0).wait(1).to({scaleX:1.0106,scaleY:1.0106,x:483.8131,y:406.6193},0).wait(1).to({scaleX:1.0119,scaleY:1.0119,x:483.8127,y:406.619},0).wait(1).to({scaleX:1.0133,scaleY:1.0133,x:483.8123,y:406.6186},0).wait(1).to({scaleX:1.0146,scaleY:1.0146,x:483.8119,y:406.6183},0).wait(1).to({scaleX:1.0159,scaleY:1.0159,x:483.8115,y:406.618},0).wait(1).to({scaleX:1.0173,scaleY:1.0173,x:483.8111,y:406.6176},0).wait(1).to({scaleX:1.0186,scaleY:1.0186,x:483.8107,y:406.6173},0).wait(1).to({scaleX:1.0199,scaleY:1.0199,x:483.8103,y:406.6169},0).wait(1).to({scaleX:1.0213,scaleY:1.0213,x:483.8099,y:406.6166},0).wait(1).to({scaleX:1.0226,scaleY:1.0226,x:483.8095,y:406.6163},0).wait(1).to({scaleX:1.0239,scaleY:1.0239,x:483.8091,y:406.6159},0).wait(1).to({scaleX:1.0253,scaleY:1.0253,x:483.8087,y:406.6156},0).wait(1).to({scaleX:1.0266,scaleY:1.0266,x:483.8083,y:406.6153},0).wait(1).to({scaleX:1.0279,scaleY:1.0279,x:483.8079,y:406.6149},0).wait(1).to({scaleX:1.0293,scaleY:1.0293,x:483.8075,y:406.6146},0).wait(1).to({scaleX:1.0306,scaleY:1.0306,x:483.8071,y:406.6143},0).wait(1).to({scaleX:1.0319,scaleY:1.0319,x:483.8067,y:406.6139},0).wait(1).to({scaleX:1.0333,scaleY:1.0333,x:483.8063,y:406.6136},0).wait(1).to({scaleX:1.0346,scaleY:1.0346,x:483.8059,y:406.6133},0).wait(1).to({scaleX:1.036,scaleY:1.036,x:483.8055,y:406.6129},0).wait(1).to({scaleX:1.0373,scaleY:1.0373,x:483.8051,y:406.6126},0).wait(1).to({scaleX:1.0386,scaleY:1.0386,x:483.8047,y:406.6123},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:483.8043,y:406.6119},0).wait(1).to({scaleX:1.0413,scaleY:1.0413,x:483.8039,y:406.6116},0).wait(1).to({scaleX:1.0426,scaleY:1.0426,x:483.8035,y:406.6113},0).wait(1).to({scaleX:1.044,scaleY:1.044,x:483.8031,y:406.6109},0).wait(1).to({scaleX:1.0453,scaleY:1.0453,x:483.8027,y:406.6106},0).wait(1).to({scaleX:1.0466,scaleY:1.0466,x:483.8023,y:406.6103},0).wait(1).to({scaleX:1.048,scaleY:1.048,x:483.8019,y:406.6099},0).wait(1).to({scaleX:1.0493,scaleY:1.0493,x:483.8015,y:406.6096},0).wait(1).to({scaleX:1.0506,scaleY:1.0506,x:483.8011,y:406.6093},0).wait(1).to({scaleX:1.052,scaleY:1.052,x:483.8007,y:406.6089},0).wait(1).to({scaleX:1.0533,scaleY:1.0533,x:483.8003,y:406.6086},0).wait(1).to({scaleX:1.0546,scaleY:1.0546,x:483.7999,y:406.6083},0).wait(1).to({scaleX:1.056,scaleY:1.056,x:483.7995,y:406.6079},0).wait(1).to({scaleX:1.0573,scaleY:1.0573,x:483.7991,y:406.6076},0).wait(1).to({scaleX:1.0587,scaleY:1.0587,x:483.7987,y:406.6073},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:483.7983,y:406.6069},0).wait(1).to({scaleX:1.0613,scaleY:1.0613,x:483.7979,y:406.6066},0).wait(1).to({scaleX:1.0627,scaleY:1.0627,x:483.7975,y:406.6063},0).wait(1).to({scaleX:1.064,scaleY:1.064,x:483.7971,y:406.6059},0).wait(1).to({scaleX:1.0653,scaleY:1.0653,x:483.7967,y:406.6056},0).wait(1).to({scaleX:1.0667,scaleY:1.0667,x:483.7963,y:406.6053},0).wait(1).to({scaleX:1.068,scaleY:1.068,x:483.7959,y:406.6049},0).wait(1).to({scaleX:1.0693,scaleY:1.0693,x:483.7955,y:406.6046},0).wait(1).to({scaleX:1.0707,scaleY:1.0707,x:483.7951,y:406.6043},0).wait(1).to({scaleX:1.072,scaleY:1.072,x:483.7947,y:406.6039},0).wait(1).to({scaleX:1.0733,scaleY:1.0733,x:483.7943,y:406.6036},0).wait(1).to({scaleX:1.0747,scaleY:1.0747,x:483.7939,y:406.6033},0).wait(1).to({scaleX:1.076,scaleY:1.076,x:483.7935,y:406.6029},0).wait(1).to({scaleX:1.0774,scaleY:1.0774,x:483.7931,y:406.6026},0).wait(1).to({scaleX:1.0787,scaleY:1.0787,x:483.7927,y:406.6023},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:483.7923,y:406.6019},0).wait(1).to({scaleX:1.0814,scaleY:1.0814,x:483.7919,y:406.6016},0).wait(1).to({scaleX:1.0827,scaleY:1.0827,x:483.7915,y:406.6013},0).wait(1).to({scaleX:1.084,scaleY:1.084,x:483.7911,y:406.6009},0).wait(1).to({scaleX:1.0854,scaleY:1.0854,x:483.7907,y:406.6006},0).wait(1).to({scaleX:1.0867,scaleY:1.0867,x:483.7903,y:406.6003},0).wait(1).to({scaleX:1.088,scaleY:1.088,x:483.7899,y:406.5999},0).wait(1).to({scaleX:1.0894,scaleY:1.0894,x:483.7895,y:406.5996},0).wait(1).to({scaleX:1.0907,scaleY:1.0907,x:483.7891,y:406.5993},0).wait(1).to({scaleX:1.092,scaleY:1.092,x:483.7887,y:406.5989},0).wait(1).to({scaleX:1.0934,scaleY:1.0934,x:483.7883,y:406.5986},0).wait(1).to({scaleX:1.0947,scaleY:1.0947,x:483.7879,y:406.5983},0).wait(1).to({scaleX:1.096,scaleY:1.096,x:483.7875,y:406.5979},0).wait(1).to({scaleX:1.0974,scaleY:1.0974,x:483.7871,y:406.5976},0).wait(1).to({scaleX:1.0987,scaleY:1.0987,x:483.7867,y:406.5973},0).wait(1).to({scaleX:1.1001,scaleY:1.1001,x:483.7863,y:406.5969},0).wait(1).to({scaleX:1.1014,scaleY:1.1014,x:483.7859,y:406.5966},0).wait(1).to({scaleX:1.1027,scaleY:1.1027,x:483.7855,y:406.5963},0).wait(1).to({scaleX:1.1041,scaleY:1.1041,x:483.7851,y:406.5959},0).wait(1).to({scaleX:1.1054,scaleY:1.1054,x:483.7847,y:406.5956},0).wait(1).to({scaleX:1.1067,scaleY:1.1067,x:483.7843,y:406.5952},0).wait(1).to({scaleX:1.1081,scaleY:1.1081,x:483.7839,y:406.5949},0).wait(1).to({scaleX:1.1094,scaleY:1.1094,x:483.7835,y:406.5946},0).wait(1).to({scaleX:1.1107,scaleY:1.1107,x:483.7831,y:406.5942},0).wait(1).to({scaleX:1.1121,scaleY:1.1121,x:483.7827,y:406.5939},0).wait(1).to({scaleX:1.1134,scaleY:1.1134,x:483.7823,y:406.5936},0).wait(1).to({scaleX:1.1147,scaleY:1.1147,x:483.7819,y:406.5932},0).wait(1).to({scaleX:1.1161,scaleY:1.1161,x:483.7815,y:406.5929},0).wait(1).to({scaleX:1.1174,scaleY:1.1174,x:483.7811,y:406.5926},0).wait(1).to({scaleX:1.1187,scaleY:1.1187,x:483.7807,y:406.5922},0).wait(1).to({scaleX:1.1201,scaleY:1.1201,x:483.7803,y:406.5919},0).wait(1).to({scaleX:1.1214,scaleY:1.1214,x:483.7799,y:406.5916},0).wait(1).to({scaleX:1.1228,scaleY:1.1228,x:483.7795,y:406.5912},0).wait(1).to({scaleX:1.1241,scaleY:1.1241,x:483.7791,y:406.5909},0).wait(1).to({scaleX:1.1254,scaleY:1.1254,x:483.7787,y:406.5906},0).wait(1).to({scaleX:1.1268,scaleY:1.1268,x:483.7783,y:406.5902},0).wait(1).to({scaleX:1.1281,scaleY:1.1281,x:483.7779,y:406.5899},0).wait(1).to({scaleX:1.1294,scaleY:1.1294,x:483.7775,y:406.5896},0).wait(1).to({scaleX:1.1308,scaleY:1.1308,x:483.7771,y:406.5892},0).wait(1).to({scaleX:1.1321,scaleY:1.1321,x:483.7767,y:406.5889},0).wait(1).to({scaleX:1.1334,scaleY:1.1334,x:483.7763,y:406.5886},0).wait(1).to({scaleX:1.1348,scaleY:1.1348,x:483.7759,y:406.5882},0).wait(1).to({scaleX:1.1361,scaleY:1.1361,x:483.7755,y:406.5879},0).wait(1).to({scaleX:1.1374,scaleY:1.1374,x:483.7751,y:406.5876},0).wait(1).to({scaleX:1.1388,scaleY:1.1388,x:483.7747,y:406.5872},0).wait(1).to({scaleX:1.1401,scaleY:1.1401,x:483.7743,y:406.5869},0).wait(1).to({scaleX:1.1415,scaleY:1.1415,x:483.7739,y:406.5866},0).wait(1).to({scaleX:1.1428,scaleY:1.1428,x:483.7735,y:406.5862},0).wait(1).to({scaleX:1.1441,scaleY:1.1441,x:483.7731,y:406.5859},0).wait(1).to({scaleX:1.1455,scaleY:1.1455,x:483.7727,y:406.5856},0).wait(1).to({scaleX:1.1468,scaleY:1.1468,x:483.7723,y:406.5852},0).wait(1).to({scaleX:1.1481,scaleY:1.1481,x:483.7719,y:406.5849},0).wait(1).to({scaleX:1.1495,scaleY:1.1495,x:483.7715,y:406.5846},0).wait(1).to({scaleX:1.1508,scaleY:1.1508,x:483.7711,y:406.5842},0).wait(1).to({scaleX:1.1521,scaleY:1.1521,x:483.7707,y:406.5839},0).wait(1).to({scaleX:1.1535,scaleY:1.1535,x:483.7703,y:406.5836},0).wait(1).to({scaleX:1.1548,scaleY:1.1548,x:483.7699,y:406.5832},0).wait(1).to({scaleX:1.1561,scaleY:1.1561,x:483.7695,y:406.5829},0).wait(1).to({scaleX:1.1575,scaleY:1.1575,x:483.7691,y:406.5826},0).wait(1).to({scaleX:1.1588,scaleY:1.1588,x:483.7687,y:406.5822},0).wait(1).to({scaleX:1.1601,scaleY:1.1601,x:483.7683,y:406.5819},0).wait(1).to({scaleX:1.1615,scaleY:1.1615,x:483.7679,y:406.5816},0).wait(1).to({scaleX:1.1628,scaleY:1.1628,x:483.7675,y:406.5812},0).wait(1).to({scaleX:1.1642,scaleY:1.1642,x:483.7671,y:406.5809},0).wait(1).to({scaleX:1.1655,scaleY:1.1655,x:483.7667,y:406.5806},0).wait(1).to({scaleX:1.1668,scaleY:1.1668,x:483.7663,y:406.5802},0).wait(1).to({scaleX:1.1682,scaleY:1.1682,x:483.7659,y:406.5799},0).wait(1).to({scaleX:1.1695,scaleY:1.1695,x:483.7655,y:406.5796},0).wait(1).to({scaleX:1.1708,scaleY:1.1708,x:483.7651,y:406.5792},0).wait(1).to({scaleX:1.1722,scaleY:1.1722,x:483.7647,y:406.5789},0).wait(1).to({scaleX:1.1735,scaleY:1.1735,x:483.7643,y:406.5786},0).wait(1).to({scaleX:1.1748,scaleY:1.1748,x:483.7639,y:406.5782},0).wait(1).to({scaleX:1.1762,scaleY:1.1762,x:483.7635,y:406.5779},0).wait(1).to({scaleX:1.1775,scaleY:1.1775,x:483.7631,y:406.5776},0).wait(1).to({scaleX:1.1788,scaleY:1.1788,x:483.7627,y:406.5772},0).wait(1).to({scaleX:1.1802,scaleY:1.1802,x:483.7623,y:406.5769},0).wait(1).to({scaleX:1.1815,scaleY:1.1815,x:483.7619,y:406.5766},0).wait(1).to({scaleX:1.1828,scaleY:1.1828,x:483.7615,y:406.5762},0).wait(1).to({scaleX:1.1842,scaleY:1.1842,x:483.7611,y:406.5759},0).wait(1).to({scaleX:1.1855,scaleY:1.1855,x:483.7607,y:406.5756},0).wait(1).to({scaleX:1.1869,scaleY:1.1869,x:483.7603,y:406.5752},0).wait(1).to({scaleX:1.1882,scaleY:1.1882,x:483.7599,y:406.5749},0).wait(1).to({scaleX:1.1895,scaleY:1.1895,x:483.7595,y:406.5746},0).wait(1).to({scaleX:1.1909,scaleY:1.1909,x:483.7591,y:406.5742},0).wait(1).to({scaleX:1.1922,scaleY:1.1922,x:483.7587,y:406.5739},0).wait(1).to({scaleX:1.1935,scaleY:1.1935,x:483.7583,y:406.5735},0).wait(1).to({scaleX:1.1949,scaleY:1.1949,x:483.7579,y:406.5732},0).wait(1).to({scaleX:1.1962,scaleY:1.1962,x:483.7575,y:406.5729},0).wait(1).to({scaleX:1.1975,scaleY:1.1975,x:483.7571,y:406.5725},0).wait(1).to({scaleX:1.1989,scaleY:1.1989,x:483.7567,y:406.5722},0).wait(1).to({scaleX:1.2002,scaleY:1.2002,x:483.7563,y:406.5719},0).wait(1).to({scaleX:1.2015,scaleY:1.2015,x:483.7559,y:406.5715},0).wait(1).to({scaleX:1.2029,scaleY:1.2029,x:483.7555,y:406.5712},0).wait(1).to({scaleX:1.2042,scaleY:1.2042,x:483.7551,y:406.5709},0).wait(1).to({scaleX:1.2055,scaleY:1.2055,x:483.7547,y:406.5705},0).wait(1).to({scaleX:1.2069,scaleY:1.2069,x:483.7543,y:406.5702},0).wait(1).to({scaleX:1.2082,scaleY:1.2082,x:483.7539,y:406.5699},0).wait(2).to({regX:0.2,regY:0.4,scaleX:0.5275,scaleY:0.5275,x:543.85,y:310.7,visible:true},0).wait(54).to({regX:0.3,regY:0.3,scaleX:1.2082,scaleY:1.2082,x:484.1,y:406.9,visible:false},0).wait(120).to({regX:1,regY:0.8,scaleX:0.3977,scaleY:0.3977,x:539.65,y:577.75},0).wait(12).to({regX:1.2,scaleX:0.4737,scaleY:0.4737,x:460.95,y:499},0).wait(12).to({regX:1.4,regY:1.1,scaleX:0.5115,scaleY:0.5115,x:287.05,y:306.3},0).wait(5).to({regX:1.8,regY:1.2,scaleX:0.784,scaleY:0.784,x:240.35,y:-81.7},0).wait(9).to({regX:1.9,regY:1.1,x:310.55,y:-653.65},0).wait(7).to({regX:2,regY:1,scaleX:0.7839,scaleY:0.7839,x:260.4,y:-332.55},0).wait(6).to({x:270.35,y:-31.5},0).wait(7).to({regX:1.4,regY:1.2,scaleX:1.2015,scaleY:1.2015,x:446.8,y:432.05},0).wait(31).to({regX:0.3,regY:0.3,scaleX:1.2082,scaleY:1.2082,x:484.1,y:406.9},0).wait(42));

	// idia_obj_
	this.idia = new lib.Scene_1_idia();
	this.idia.name = "idia";
	this.idia.setTransform(-0.05,-0.05,1.1265,1.1265,0,0,0,-84.3,87);
	this.idia.depth = 0;
	this.idia.isAttachedToCamera = 0
	this.idia.isAttachedToMask = 0
	this.idia.layerDepth = 0
	this.idia.layerIndex = 0
	this.idia.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.idia).wait(384).to({regX:-289.4,regY:-28.4,scaleX:0.8277,scaleY:0.8277,x:0},0).to({_off:true},36).wait(207));

	// lady_mouth_obj_
	this.lady_mouth = new lib.Scene_1_lady_mouth();
	this.lady_mouth.name = "lady_mouth";
	this.lady_mouth.setTransform(-0.05,-0.05,1.1265,1.1265,0,0,0,-84.3,87);
	this.lady_mouth.depth = 0;
	this.lady_mouth.isAttachedToCamera = 0
	this.lady_mouth.isAttachedToMask = 0
	this.lady_mouth.layerDepth = 0
	this.lady_mouth.layerIndex = 1
	this.lady_mouth.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.lady_mouth).wait(376).to({regX:-289.4,regY:-28.4,scaleX:0.8277,scaleY:0.8277,x:0},0).wait(122).to({regX:284.7,regY:434.3,scaleX:2.5145,scaleY:2.5145,x:0.05,y:0.15},0).wait(56).to({regX:-323.8,regY:-1.9,scaleX:0.8323,scaleY:0.8323,x:0,y:-0.05},0).wait(31).to({regX:-289.4,regY:-28.4,scaleX:0.8277,scaleY:0.8277},0).wait(3).to({_off:true},38).wait(1));

	// lady_blink_copy_obj_
	this.lady_blink_copy = new lib.Scene_1_lady_blink_copy();
	this.lady_blink_copy.name = "lady_blink_copy";
	this.lady_blink_copy.setTransform(-0.05,-0.05,1.1265,1.1265,0,0,0,-84.3,87);
	this.lady_blink_copy.depth = 0;
	this.lady_blink_copy.isAttachedToCamera = 0
	this.lady_blink_copy.isAttachedToMask = 0
	this.lady_blink_copy.layerDepth = 0
	this.lady_blink_copy.layerIndex = 2
	this.lady_blink_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.lady_blink_copy).wait(276).to({regX:-251.8,regY:-7.2,scaleX:0.87,scaleY:0.87},0).wait(50).to({regX:206.2,regY:120.6,scaleX:1.8958,scaleY:1.8958,x:0.1,y:0.05},0).wait(18).to({_off:true},66).wait(217));

	// eye_move_lady_obj_
	this.eye_move_lady = new lib.Scene_1_eye_move_lady();
	this.eye_move_lady.name = "eye_move_lady";
	this.eye_move_lady.setTransform(-0.05,-0.05,1.1265,1.1265,0,0,0,-84.3,87);
	this.eye_move_lady.depth = 0;
	this.eye_move_lady.isAttachedToCamera = 0
	this.eye_move_lady.isAttachedToMask = 0
	this.eye_move_lady.layerDepth = 0
	this.eye_move_lady.layerIndex = 3
	this.eye_move_lady.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.eye_move_lady).wait(276).to({regX:-251.8,regY:-7.2,scaleX:0.87,scaleY:0.87},0).wait(5).to({regX:-256,regY:-9.6,scaleX:0.865,scaleY:0.865,y:0},0).wait(9).to({regX:-263.6,regY:-13.9,scaleX:0.8561,scaleY:0.8561,x:0.05},0).wait(9).to({regX:-271.4,regY:-18.3,scaleX:0.8473,scaleY:0.8473,x:0,y:-0.05},0).wait(9).to({regX:-279.1,regY:-22.6,scaleX:0.8388,scaleY:0.8388,x:-0.05},0).wait(9).to({regX:-286.8,regY:-26.9,scaleX:0.8304,scaleY:0.8304,x:0},0).wait(9).to({regX:206.2,regY:120.6,scaleX:1.8958,scaleY:1.8958,x:0.1,y:0.05},0).to({_off:true},50).wait(251));

	// lady_eyeW_obj_
	this.lady_eyeW = new lib.Scene_1_lady_eyeW();
	this.lady_eyeW.name = "lady_eyeW";
	this.lady_eyeW.setTransform(-0.05,-0.05,1.1265,1.1265,0,0,0,-84.3,87);
	this.lady_eyeW.depth = 0;
	this.lady_eyeW.isAttachedToCamera = 0
	this.lady_eyeW.isAttachedToMask = 0
	this.lady_eyeW.layerDepth = 0
	this.lady_eyeW.layerIndex = 4
	this.lady_eyeW.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.lady_eyeW).wait(376).to({regX:-289.4,regY:-28.4,scaleX:0.8277,scaleY:0.8277,x:0},0).wait(122).to({regX:284.7,regY:434.3,scaleX:2.5145,scaleY:2.5145,x:0.05,y:0.15},0).wait(11).to({regX:157.3,regY:328.1,scaleX:2.1112,scaleY:2.1112,x:0.15},0).wait(45).to({regX:-323.8,regY:-1.9,scaleX:0.8323,scaleY:0.8323,x:0,y:-0.05},0).wait(5).to({_off:true},67).wait(1));

	// mask_hands (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_479 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_480 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_481 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_482 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_483 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_484 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_485 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_486 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_487 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_488 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_489 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_490 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_491 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_492 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_493 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_494 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_495 = new cjs.Graphics().p("AxdLaQkYkYAAmMQAAmMEYkXQEXkYGMAAQGMAAEXEYQEYEXAAGMQAAGMkYEYQkXEXmMAAQmMAAkXkXgAVZvtIAAgDIAdAAIgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBIACACg");
	var mask_graphics_496 = new cjs.Graphics().p("Eg1FAioQtStSAAyzQAAyzNStSQNRtSSzAAQSzAANRNSQNTNSAASzQAASztTNSQtRNSyzABQyzgBtRtSgEBBAgvuIAAgMIBYAAIgDADQgCAGgHgDIAEAGg");
	var mask_graphics_497 = new cjs.Graphics().p("Eg1FAioQtStSAAyzQAAyzNStSQNRtSSzAAQSzAANRNSQNTNSAASzQAASztTNSQtRNSyzABQyzgBtRtSgEBBAgvuIAAgMIBYAAIgDADQgCAGgHgDIAEAGg");
	var mask_graphics_498 = new cjs.Graphics().p("ExZqLU0UnM7kr1AAAmpAUAAAmozHM7kr2UHNFksPKMtAAAUKMeAAAHM8EsPUHNEEr2AAAGozUAAAGpAnNEEr1UnM7EsGqMfAAAUqMtAAAnNFksGg");
	var mask_graphics_499 = new cjs.Graphics().p("ExZqLU0UnM7kr1AAAmpAUAAAmozHM7kr2UHNFksPKMtAAAUKMeAAAHM8EsPUHNEEr2AAAGozUAAAGpAnNEEr1UnM7EsGqMfAAAUqMtAAAnNFksGg");
	var mask_graphics_500 = new cjs.Graphics().p("ExZqLU0UnM7kr1AAAmpAUAAAmozHM7kr2UHNFksPKMtAAAUKMeAAAHM8EsPUHNEEr2AAAGozUAAAGpAnNEEr1UnM7EsGqMfAAAUqMtAAAnNFksGg");
	var mask_graphics_501 = new cjs.Graphics().p("ExZqLU0UnM7kr1AAAmpAUAAAmozHM7kr2UHNFksPKMtAAAUKMeAAAHM8EsPUHNEEr2AAAGozUAAAGpAnNEEr1UnM7EsGqMfAAAUqMtAAAnNFksGg");
	var mask_graphics_502 = new cjs.Graphics().p("ExZqLU0UnM7kr1AAAmpAUAAAmozHM7kr2UHNFksPKMtAAAUKMeAAAHM8EsPUHNEEr2AAAGozUAAAGpAnNEEr1UnM7EsGqMfAAAUqMtAAAnNFksGg");
	var mask_graphics_503 = new cjs.Graphics().p("ExZqLU0UnM7kr1AAAmpAUAAAmozHM7kr2UHNFksPKMtAAAUKMeAAAHM8EsPUHNEEr2AAAGozUAAAGpAnNEEr1UnM7EsGqMfAAAUqMtAAAnNFksGg");
	var mask_graphics_504 = new cjs.Graphics().p("ExZqLU0UnM7kr1AAAmpAUAAAmozHM7kr2UHNFksPKMtAAAUKMeAAAHM8EsPUHNEEr2AAAGozUAAAGpAnNEEr1UnM7EsGqMfAAAUqMtAAAnNFksGg");
	var mask_graphics_505 = new cjs.Graphics().p("ExZqLU0UnM7kr1AAAmpAUAAAmozHM7kr2UHNFksPKMtAAAUKMeAAAHM8EsPUHNEEr2AAAGozUAAAGpAnNEEr1UnM7EsGqMfAAAUqMtAAAnNFksGg");
	var mask_graphics_506 = new cjs.Graphics().p("ExZqLU0UnM7kr1AAAmpAUAAAmozHM7kr2UHNFksPKMtAAAUKMeAAAHM8EsPUHNEEr2AAAGozUAAAGpAnNEEr1UnM7EsGqMfAAAUqMtAAAnNFksGg");
	var mask_graphics_507 = new cjs.Graphics().p("ExZqLU0UnM7kr1AAAmpAUAAAmozHM7kr2UHNFksPKMtAAAUKMeAAAHM8EsPUHNEEr2AAAGozUAAAGpAnNEEr1UnM7EsGqMfAAAUqMtAAAnNFksGg");
	var mask_graphics_508 = new cjs.Graphics().p("EunBJgkUmDAj7wAAAlk1UAAAlkqGDAj7xUGDHj8EIkBAAAUIj1AAAGC/D8EUGDHD7xAAAFkqUAAAFk1mDHD7wUmC/D79oj1AAAUokBAAAmDHj79g");
	var mask_graphics_509 = new cjs.Graphics().p("EC5mC0mUgdxgoTAAAg4+UAAAg46AdxgoWUAdygoSAqIAAAUAqIAAAAdxAoSUAdyAoWAAAA46UAAAA4+gdyAoTUgdxAoSgqIAAAUgqIAAAgdygoSgEBeAgghUgToggRAAAgtvUAAAgtuAToggWUATtggSAbyAAAUAbzAAAAToAgSUATtAgWAAAAtuUAAAAtvgTtAgRUgToAgWgbzAAAUgbyAAAgTtggWg");
	var mask_graphics_510 = new cjs.Graphics().p("EgfKC0mUgdygoTAAAg49UAAAg46AdygoXUAdxgoSAqHAAAUAqIAAAAdxAoSUAdzAoXgABA46UAAAA49gdyAoTUgdxAoSgqIAAAUgqHAAAgdxgoSgEh6wgghUgToggRAAAgtvUAAAgtuAToggWUATsggSAbzAAAUAbyAAAAToAgSUATtAgWAAAAtuUAAAAtvgTtAgRUgToAgWgbyAAAUgbzAAAgTsggWg");
	var mask_graphics_511 = new cjs.Graphics().p("EgfKC0mUgdygoTAAAg49UAAAg46AdygoXUAdxgoSAqHAAAUAqIAAAAdxAoSUAdzAoXgABA46UAAAA49gdyAoTUgdxAoSgqIAAAUgqHAAAgdxgoSgEh6wgghUgToggRAAAgtvUAAAgtuAToggWUATsggSAbzAAAUAbyAAAAToAgSUATtAgWAAAAtuUAAAAtvgTtAgRUgToAgWgbyAAAUgbzAAAgTsggWg");
	var mask_graphics_512 = new cjs.Graphics().p("EgfKC0mUgdygoTAAAg49UAAAg46AdygoXUAdxgoSAqHAAAUAqIAAAAdxAoSUAdzAoXgABA46UAAAA49gdyAoTUgdxAoSgqIAAAUgqHAAAgdxgoSgEh6wgghUgToggRAAAgtvUAAAgtuAToggWUATsggSAbzAAAUAbyAAAAToAgSUATtAgWAAAAtuUAAAAtvgTtAgRUgToAgWgbyAAAUgbzAAAgTsggWg");
	var mask_graphics_513 = new cjs.Graphics().p("EgfKC0mUgdygoTAAAg49UAAAg46AdygoXUAdxgoSAqHAAAUAqIAAAAdxAoSUAdzAoXgABA46UAAAA49gdyAoTUgdxAoSgqIAAAUgqHAAAgdxgoSgEh6wgghUgToggRAAAgtvUAAAgtuAToggWUATsggSAbzAAAUAbyAAAAToAgSUATtAgWAAAAtuUAAAAtvgTtAgRUgToAgWgbyAAAUgbzAAAgTsggWg");
	var mask_graphics_514 = new cjs.Graphics().p("EgfKC0mUgdygoTAAAg49UAAAg46AdygoXUAdxgoSAqHAAAUAqIAAAAdxAoSUAdzAoXgABA46UAAAA49gdyAoTUgdxAoSgqIAAAUgqHAAAgdxgoSgEh6wgghUgToggRAAAgtvUAAAgtuAToggWUATsggSAbzAAAUAbyAAAAToAgSUATtAgWAAAAtuUAAAAtvgTtAgRUgToAgWgbyAAAUgbzAAAgTsggWg");
	var mask_graphics_515 = new cjs.Graphics().p("EgfKC0mUgdygoTAAAg49UAAAg46AdygoXUAdxgoSAqHAAAUAqIAAAAdxAoSUAdzAoXgABA46UAAAA49gdyAoTUgdxAoSgqIAAAUgqHAAAgdxgoSgEh6wgghUgToggRAAAgtvUAAAgtuAToggWUATsggSAbzAAAUAbyAAAAToAgSUATtAgWAAAAtuUAAAAtvgTtAgRUgToAgWgbyAAAUgbzAAAgTsggWg");
	var mask_graphics_516 = new cjs.Graphics().p("EgfKC0mUgdygoTAAAg49UAAAg46AdygoXUAdxgoSAqHAAAUAqIAAAAdxAoSUAdzAoXgABA46UAAAA49gdyAoTUgdxAoSgqIAAAUgqHAAAgdxgoSgEh6wgghUgToggRAAAgtvUAAAgtuAToggWUATsggSAbzAAAUAbyAAAAToAgSUATtAgWAAAAtuUAAAAtvgTtAgRUgToAgWgbyAAAUgbzAAAgTsggWg");
	var mask_graphics_517 = new cjs.Graphics().p("EgfKC0mUgdygoTAAAg49UAAAg46AdygoXUAdxgoSAqHAAAUAqIAAAAdxAoSUAdzAoXgABA46UAAAA49gdyAoTUgdxAoSgqIAAAUgqHAAAgdxgoSgEh6wgghUgToggRAAAgtvUAAAgtuAToggWUATsggSAbzAAAUAbyAAAAToAgSUATtAgWAAAAtuUAAAAtvgTtAgRUgToAgWgbyAAAUgbzAAAgTsggWg");
	var mask_graphics_518 = new cjs.Graphics().p("EgfKC0mUgdygoTAAAg49UAAAg46AdygoXUAdxgoSAqHAAAUAqIAAAAdxAoSUAdzAoXgABA46UAAAA49gdyAoTUgdxAoSgqIAAAUgqHAAAgdxgoSgEh6wgghUgToggRAAAgtvUAAAgtuAToggWUATsggSAbzAAAUAbyAAAAToAgSUATtAgWAAAAtuUAAAAtvgTtAgRUgToAgWgbyAAAUgbzAAAgTsggWg");
	var mask_graphics_519 = new cjs.Graphics().p("EgYmCaQUgdxgoTAAAg4+QAA4uFp1lQvXPf3CKmQ3AKgyepyUgSmgJ2gBnhOvUgBshOyATpggXUATtggSAbyAAAUAbzAAAATpAgSUATrAgXAAAAtuQAAUcj6RzUAcYgioAnBAAAUAqJAAAAdxAoRUAdyAoYAAAA45UAAAA4+gdyAoTUgdxAoSgqJAAAUgqGAAAgdwgoSg");
	var mask_graphics_520 = new cjs.Graphics().p("EgWyCO2UgbkglVAAAg0wQAA25FOz/QuOOW1VJzQ1UJvxFpEUgRPgJHgBfhI6UgBlhI+ASNgd9QSQ96ZuABQZvgBSMd6UASPAd9AAAAqWQAAS8joQeUAaRggEAkJAAAUAnCAAAAbkAlSUAblAlaAAAA0rUAAAA0wgblAlVUgbkAlUgnCAAAUgm/AAAgbjglUg");
	var mask_graphics_521 = new cjs.Graphics().p("EgWyCO2UgbkglVAAAg0wQAA25FOz/QuOOW1VJzQ1UJvxFpEUgRPgJHgBfhI6UgBlhI+ASNgd9QSQ96ZuABQZvgBSMd6UASPAd9AAAAqWQAAS8joQeUAaRggEAkJAAAUAnCAAAAbkAlSUAblAlaAAAA0rUAAAA0wgblAlVUgbkAlUgnCAAAUgm/AAAgbjglUg");
	var mask_graphics_522 = new cjs.Graphics().p("EgWyCO2UgbkglVAAAg0wQAA25FOz/QuOOW1VJzQ1UJvxFpEUgRPgJHgBfhI6UgBlhI+ASNgd9QSQ96ZuABQZvgBSMd6UASPAd9AAAAqWQAAS8joQeUAaRggEAkJAAAUAnCAAAAbkAlSUAblAlaAAAA0rUAAAA0wgblAlVUgbkAlUgnCAAAUgm/AAAgbjglUg");
	var mask_graphics_523 = new cjs.Graphics().p("EgWyCO2UgbkglVAAAg0wQAA25FOz/QuOOW1VJzQ1UJvxFpEUgRPgJHgBfhI6UgBlhI+ASNgd9QSQ96ZuABQZvgBSMd6UASPAd9AAAAqWQAAS8joQeUAaRggEAkJAAAUAnCAAAAbkAlSUAblAlaAAAA0rUAAAA0wgblAlVUgbkAlUgnCAAAUgm/AAAgbjglUg");
	var mask_graphics_524 = new cjs.Graphics().p("EgWyCO2UgbkglVAAAg0wQAA25FOz/QuOOW1VJzQ1UJvxFpEUgRPgJHgBfhI6UgBlhI+ASNgd9QSQ96ZuABQZvgBSMd6UASPAd9AAAAqWQAAS8joQeUAaRggEAkJAAAUAnCAAAAbkAlSUAblAlaAAAA0rUAAAA0wgblAlVUgbkAlUgnCAAAUgm/AAAgbjglUg");
	var mask_graphics_525 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF9gA+gvjUgBBgvnAL3gTjQL7zgQyAAQQyAAL4TgQL5TjAAboQAAMWiYKwQRJ06XlAAQZdAASAYVUAR/AYYAAAAiYUAAAAibgR/AYWQyAYW5dAAQ5cAAx+4Wg");
	var mask_graphics_526 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF9gA+gvjUgBBgvnAL3gTjQL7zgQyAAQQyAAL4TgQL5TjAAboQAAMWiYKwQRJ06XlAAQZdAASAYVUAR/AYYAAAAiYUAAAAibgR/AYWQyAYW5dAAQ5cAAx+4Wg");
	var mask_graphics_527 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF9gA+gvjUgBBgvnAL3gTjQL7zgQyAAQQyAAL4TgQL5TjAAboQAAMWiYKwQRJ06XlAAQZdAASAYVUAR/AYYAAAAiYUAAAAibgR/AYWQyAYW5dAAQ5cAAx+4Wg");
	var mask_graphics_528 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF9gA+gvjUgBBgvnAL3gTjQL7zgQyAAQQyAAL4TgQL5TjAAboQAAMWiYKwQRJ06XlAAQZdAASAYVUAR/AYYAAAAiYUAAAAibgR/AYWQyAYW5dAAQ5cAAx+4Wg");
	var mask_graphics_529 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF9gA+gvjUgBBgvnAL3gTjQL7zgQyAAQQyAAL4TgQL5TjAAboQAAMWiYKwQRJ06XlAAQZdAASAYVUAR/AYYAAAAiYUAAAAibgR/AYWQyAYW5dAAQ5cAAx+4Wg");
	var mask_graphics_530 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF9gA+gvjUgBBgvnAL3gTjQL7zgQyAAQQyAAL4TgQL5TjAAboQAAMWiYKwQRJ06XlAAQZdAASAYVUAR/AYYAAAAiYUAAAAibgR/AYWQyAYW5dAAQ5cAAx+4Wg");
	var mask_graphics_531 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF9gA+gvjUgBBgvnAL3gTjQL7zgQyAAQQyAAL4TgQL5TjAAboQAAMWiYKwQRJ06XlAAQZdAASAYVUAR/AYYAAAAiYUAAAAibgR/AYWQyAYW5dAAQ5cAAx+4Wg");
	var mask_graphics_532 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF9gA+gvjUgBBgvnAL3gTjQL7zgQyAAQQyAAL4TgQL5TjAAboQAAMWiYKwQRJ06XlAAQZdAASAYVUAR/AYYAAAAiYUAAAAibgR/AYWQyAYW5dAAQ5cAAx+4Wg");
	var mask_graphics_533 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF9gA+gvjUgBBgvnAL3gTjQL7zgQyAAQQyAAL4TgQL5TjAAboQAAMWiYKwQRJ06XlAAQZdAASAYVUAR/AYYAAAAiYUAAAAibgR/AYWQyAYW5dAAQ5cAAx+4Wg");
	var mask_graphics_534 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF8gA+gvkUgBBgvnAL3gTjQL6zhQzABQQygBL4ThQL5TjAAboQAAMXiXKvQRI06XlAAQZeAAR/YUUAR/AYZAAAAiYUAAAAibgR/AYWQx/YX5egBQ5bABx/4Xg");
	var mask_graphics_535 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF8gA+gvkUgBBgvnAL3gTjQL6zhQzABQQygBL4ThQL5TjAAboQAAMXiXKvQRI06XlAAQZeAAR/YUUAR/AYZAAAAiYUAAAAibgR/AYWQx/YX5egBQ5bABx/4Xg");
	var mask_graphics_536 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF8gA+gvkUgBBgvnAL3gTjQL6zhQzABQQygBL4ThQL5TjAAboQAAMXiXKvQRI06XlAAQZeAAR/YUUAR/AYZAAAAiYUAAAAibgR/AYWQx/YX5egBQ5bABx/4Xg");
	var mask_graphics_537 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF8gA+gvkUgBBgvnAL3gTjQL6zhQzABQQygBL4ThQL5TjAAboQAAMXiXKvQRI06XlAAQZeAAR/YUUAR/AYZAAAAiYUAAAAibgR/AYWQx/YX5egBQ5bABx/4Xg");
	var mask_graphics_538 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF8gA+gvkUgBBgvnAL3gTjQL6zhQzABQQygBL4ThQL5TjAAboQAAMXiXKvQRI06XlAAQZeAAR/YUUAR/AYZAAAAiYUAAAAibgR/AYWQx/YX5egBQ5bABx/4Xg");
	var mask_graphics_539 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF8gA+gvkUgBBgvnAL3gTjQL6zhQzABQQygBL4ThQL5TjAAboQAAMXiXKvQRI06XlAAQZeAAR/YUUAR/AYZAAAAiYUAAAAibgR/AYWQx/YX5egBQ5bABx/4Xg");
	var mask_graphics_540 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrJl6UgLQgF8gA+gvkUgBBgvnAL3gTjQL6zhQzABQQygBL4ThQL5TjAAboQAAMXiXKvQRI06XlAAQZeAAR/YUUAR/AYZAAAAiYUAAAAibgR/AYWQx/YX5egBQ5bABx/4Xg");
	var mask_graphics_541 = new cjs.Graphics().p("EgO3BdNUgR/gYWAAAgicQAAu7DatDQpSJXt6GZQt6GWrKl6UgLPgF8gA+gvkUgBCgvnAL4gTkQL6zfQygBQQzABL4TfQL4TkAAboQAAMXiXKwQRJ07XlgBQZeABR/YUUAR/AYaAAAAiXUAAAAicgR/AYWQx/YV5eAAQ5cAAx+4Vg");
	var mask_graphics_542 = new cjs.Graphics().p("EgO3BdNUgR/gYWAAAgicQAAu7DatDQpSJXt6GZQt6GWrKl6UgLPgF8gA+gvkUgBCgvnAL4gTkQL6zfQygBQQzABL4TfQL4TkAAboQAAMXiXKwQRJ07XlgBQZeABR/YUUAR/AYaAAAAiXUAAAAicgR/AYWQx/YV5eAAQ5cAAx+4Vg");
	var mask_graphics_543 = new cjs.Graphics().p("EgO3BdNUgR/gYWAAAgicQAAu7DatDQpSJXt6GZQt6GWrKl6UgLPgF8gA+gvkUgBCgvnAL4gTkQL6zfQygBQQzABL4TfQL4TkAAboQAAMXiXKwQRJ07XlgBQZeABR/YUUAR/AYaAAAAiXUAAAAicgR/AYWQx/YV5eAAQ5cAAx+4Vg");
	var mask_graphics_544 = new cjs.Graphics().p("EgO3BdNUgR/gYWAAAgicQAAu7DatDQpSJXt6GZQt6GWrKl6UgLPgF8gA+gvkUgBCgvnAL4gTkQL6zfQygBQQzABL4TfQL4TkAAboQAAMXiXKwQRJ07XlgBQZeABR/YUUAR/AYaAAAAiXUAAAAicgR/AYWQx/YV5eAAQ5cAAx+4Vg");
	var mask_graphics_545 = new cjs.Graphics().p("EgO3BdNUgR/gYWAAAgicQAAu7DatDQpSJXt6GZQt6GWrKl6UgLPgF8gA+gvkUgBCgvnAL4gTkQL6zfQygBQQzABL4TfQL4TkAAboQAAMXiXKwQRJ07XlgBQZeABR/YUUAR/AYaAAAAiXUAAAAicgR/AYWQx/YV5eAAQ5cAAx+4Vg");
	var mask_graphics_546 = new cjs.Graphics().p("EgO3BdNUgR/gYWAAAgicQAAu7DatDQpSJXt6GZQt6GWrKl6UgLPgF8gA+gvkUgBCgvnAL4gTkQL6zfQygBQQzABL4TfQL4TkAAboQAAMXiXKwQRJ07XlgBQZeABR/YUUAR/AYaAAAAiXUAAAAicgR/AYWQx/YV5eAAQ5cAAx+4Vg");
	var mask_graphics_547 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrKl6UgLPgF9gA+gvjUgBCgvnAL4gTkQL6zgQyAAQQzAAL4TgQL5TkAAboQAAMWiYKwQRJ07XlAAQZeAAR/YVUAR/AYZAAAAiYUAAAAibgR/AYWQx/YX5eAAQ5cAAx+4Xg");
	var mask_graphics_548 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrKl6UgLPgF9gA+gvjUgBCgvnAL4gTkQL6zgQyAAQQzAAL4TgQL5TkAAboQAAMWiYKwQRJ07XlAAQZeAAR/YVUAR/AYZAAAAiYUAAAAibgR/AYWQx/YX5eAAQ5cAAx+4Xg");
	var mask_graphics_549 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrKl6UgLPgF9gA+gvjUgBCgvnAL4gTkQL6zgQyAAQQzAAL4TgQL5TkAAboQAAMWiYKwQRJ07XlAAQZeAAR/YVUAR/AYZAAAAiYUAAAAibgR/AYWQx/YX5eAAQ5cAAx+4Xg");
	var mask_graphics_550 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrKl6UgLPgF9gA+gvjUgBCgvnAL4gTkQL6zgQyAAQQzAAL4TgQL5TkAAboQAAMWiYKwQRJ07XlAAQZeAAR/YVUAR/AYZAAAAiYUAAAAibgR/AYWQx/YX5eAAQ5cAAx+4Xg");
	var mask_graphics_551 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrKl6UgLPgF9gA+gvjUgBCgvnAL4gTkQL6zgQyAAQQzAAL4TgQL5TkAAboQAAMWiYKwQRJ07XlAAQZeAAR/YVUAR/AYZAAAAiYUAAAAibgR/AYWQx/YX5eAAQ5cAAx+4Xg");
	var mask_graphics_552 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrKl6UgLPgF9gA+gvjUgBCgvnAL4gTkQL6zgQyAAQQzAAL4TgQL5TkAAboQAAMWiYKwQRJ07XlAAQZeAAR/YVUAR/AYZAAAAiYUAAAAibgR/AYWQx/YX5eAAQ5cAAx+4Xg");
	var mask_graphics_553 = new cjs.Graphics().p("EgO3BdMUgR/gYWAAAgibQAAu7DatDQpSJXt6GZQt6GWrKl6UgLPgF9gA+gvjUgBCgvnAL4gTkQL6zgQyAAQQzAAL4TgQL5TkAAboQAAMWiYKwQRJ07XlAAQZeAAR/YVUAR/AYZAAAAiYUAAAAibgR/AYWQx/YX5eAAQ5cAAx+4Xg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(479).to({graphics:mask_graphics_479,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_480,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_481,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_482,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_483,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_484,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_485,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_486,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_487,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_488,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_489,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_490,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_491,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_492,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_493,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_494,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_495,x:1034.525,y:316.375}).wait(1).to({graphics:mask_graphics_496,x:1699.275,y:-202}).wait(1).to({graphics:mask_graphics_497,x:1699.275,y:-202}).wait(1).to({graphics:mask_graphics_498,x:22706.75,y:-22239.75}).wait(1).to({graphics:mask_graphics_499,x:22706.75,y:-22239.75}).wait(1).to({graphics:mask_graphics_500,x:22706.75,y:-22239.75}).wait(1).to({graphics:mask_graphics_501,x:22706.75,y:-22239.75}).wait(1).to({graphics:mask_graphics_502,x:22706.75,y:-22239.75}).wait(1).to({graphics:mask_graphics_503,x:22706.75,y:-22239.75}).wait(1).to({graphics:mask_graphics_504,x:22706.75,y:-22239.75}).wait(1).to({graphics:mask_graphics_505,x:22706.75,y:-22239.75}).wait(1).to({graphics:mask_graphics_506,x:22706.75,y:-22239.75}).wait(1).to({graphics:mask_graphics_507,x:22706.75,y:-22239.75}).wait(1).to({graphics:mask_graphics_508,x:19333.725,y:-18448.35}).wait(1).to({graphics:mask_graphics_509,x:2298.6757,y:-1079.6649}).wait(1).to({graphics:mask_graphics_510,x:3686,y:-1079.7}).wait(1).to({graphics:mask_graphics_511,x:3686,y:-1079.7}).wait(1).to({graphics:mask_graphics_512,x:3686,y:-1079.7}).wait(1).to({graphics:mask_graphics_513,x:3686,y:-1079.7}).wait(1).to({graphics:mask_graphics_514,x:3686,y:-1079.7}).wait(1).to({graphics:mask_graphics_515,x:3686,y:-1079.7}).wait(1).to({graphics:mask_graphics_516,x:3686,y:-1079.7}).wait(1).to({graphics:mask_graphics_517,x:3686,y:-1079.7}).wait(1).to({graphics:mask_graphics_518,x:3686,y:-1079.7}).wait(1).to({graphics:mask_graphics_519,x:3644.0939,y:-911.025}).wait(1).to({graphics:mask_graphics_520,x:3762.172,y:-440}).wait(1).to({graphics:mask_graphics_521,x:3762.172,y:-440}).wait(1).to({graphics:mask_graphics_522,x:3762.172,y:-440}).wait(1).to({graphics:mask_graphics_523,x:3762.172,y:-440}).wait(1).to({graphics:mask_graphics_524,x:3762.172,y:-440}).wait(1).to({graphics:mask_graphics_525,x:2737.315,y:333.375}).wait(1).to({graphics:mask_graphics_526,x:2737.315,y:333.375}).wait(1).to({graphics:mask_graphics_527,x:2737.315,y:333.375}).wait(1).to({graphics:mask_graphics_528,x:2737.315,y:333.375}).wait(1).to({graphics:mask_graphics_529,x:2737.315,y:333.375}).wait(1).to({graphics:mask_graphics_530,x:2737.315,y:333.375}).wait(1).to({graphics:mask_graphics_531,x:2737.315,y:333.375}).wait(1).to({graphics:mask_graphics_532,x:2737.315,y:333.375}).wait(1).to({graphics:mask_graphics_533,x:2737.315,y:333.375}).wait(1).to({graphics:mask_graphics_534,x:2648.04,y:1062.8}).wait(1).to({graphics:mask_graphics_535,x:2648.04,y:1062.8}).wait(1).to({graphics:mask_graphics_536,x:2648.04,y:1062.8}).wait(1).to({graphics:mask_graphics_537,x:2648.04,y:1062.8}).wait(1).to({graphics:mask_graphics_538,x:2648.04,y:1062.8}).wait(1).to({graphics:mask_graphics_539,x:2648.04,y:1062.8}).wait(1).to({graphics:mask_graphics_540,x:2648.04,y:1062.8}).wait(1).to({graphics:mask_graphics_541,x:2712.1363,y:653.2}).wait(1).to({graphics:mask_graphics_542,x:2712.1363,y:653.2}).wait(1).to({graphics:mask_graphics_543,x:2712.1363,y:653.2}).wait(1).to({graphics:mask_graphics_544,x:2712.1363,y:653.2}).wait(1).to({graphics:mask_graphics_545,x:2712.1363,y:653.2}).wait(1).to({graphics:mask_graphics_546,x:2712.1363,y:653.2}).wait(1).to({graphics:mask_graphics_547,x:2699.4862,y:269.175}).wait(1).to({graphics:mask_graphics_548,x:2699.4862,y:269.175}).wait(1).to({graphics:mask_graphics_549,x:2699.4862,y:269.175}).wait(1).to({graphics:mask_graphics_550,x:2699.4862,y:269.175}).wait(1).to({graphics:mask_graphics_551,x:2699.4862,y:269.175}).wait(1).to({graphics:mask_graphics_552,x:2699.4862,y:269.175}).wait(1).to({graphics:mask_graphics_553,x:2699.4862,y:269.175}).wait(1).to({graphics:null,x:0,y:0}).wait(73));

	// lady_heand_obj_
	this.lady_heand = new lib.Scene_1_lady_heand();
	this.lady_heand.name = "lady_heand";
	this.lady_heand.setTransform(-0.05,-0.05,1.1265,1.1265,0,0,0,-84.3,87);
	this.lady_heand.depth = 0;
	this.lady_heand.isAttachedToCamera = 0
	this.lady_heand.isAttachedToMask = 0
	this.lady_heand.layerDepth = 0
	this.lady_heand.layerIndex = 5
	this.lady_heand.maskLayerName = 0

	var maskedShapeInstanceList = [this.lady_heand];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.lady_heand).wait(376).to({regX:-289.4,regY:-28.4,scaleX:0.8277,scaleY:0.8277,x:0},0).wait(122).to({regX:284.7,regY:434.3,scaleX:2.5145,scaleY:2.5145,x:0.05,y:0.15},0).wait(11).to({regX:157.3,regY:328.1,scaleX:2.1112,scaleY:2.1112,x:0.15},0).wait(45).to({regX:-323.8,regY:-1.9,scaleX:0.8323,scaleY:0.8323,x:0,y:-0.05},0).to({_off:true},72).wait(1));

	// mask_leg (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_484 = new cjs.Graphics().p("AluFvQiZiXAAjYQAAjWCZiYQCYiZDWAAQDXAACYCZQCZCYAADWQAADYiZCXQiYCZjXAAQjWAAiYiZg");
	var mask_1_graphics_485 = new cjs.Graphics().p("AluFvQiZiXAAjYQAAjWCZiYQCYiZDWAAQDXAACYCZQCZCYAADWQAADYiZCXQiYCZjXAAQjWAAiYiZg");
	var mask_1_graphics_486 = new cjs.Graphics().p("AluFvQiZiXAAjYQAAjWCZiYQCYiZDWAAQDXAACYCZQCZCYAADWQAADYiZCXQiYCZjXAAQjWAAiYiZg");
	var mask_1_graphics_487 = new cjs.Graphics().p("AluFvQiZiXAAjYQAAjWCZiYQCYiZDWAAQDXAACYCZQCZCYAADWQAADYiZCXQiYCZjXAAQjWAAiYiZg");
	var mask_1_graphics_488 = new cjs.Graphics().p("A0hNPIAArSIMxAAIAACxIC+AAIAADXQgFADgDAAQhFALg7AsQg5AogkA7QgpA+ghBvgAUHsrIAAAAIAAABgAUHs5IABAAIgBABgAUItBIAHAAIgHACIAAgCgAUhtOIABAAIAAADIgBgDg");
	var mask_1_graphics_489 = new cjs.Graphics().p("A0hNPIAArSIMxAAIAACxIC+AAIAADXQgFADgDAAQhFALg7AsQg5AogkA7QgpA+ghBvgAUHsrIAAAAIAAABgAUHs5IABAAIgBABgAUItBIAHAAIgHACIAAgCgAUhtOIABAAIAAADIgBgDg");
	var mask_1_graphics_490 = new cjs.Graphics().p("A0hNPIAArSIMxAAIAACxIC+AAIAADXQgFADgDAAQhFALg7AsQg5AogkA7QgpA+ghBvgAUHsrIAAAAIAAABgAUHs5IABAAIgBABgAUItBIAHAAIgHACIAAgCgAUhtOIABAAIAAADIgBgDg");
	var mask_1_graphics_491 = new cjs.Graphics().p("A0hNPIAArSIMxAAIAACxIC+AAIAADXQgFADgDAAQhFALg7AsQg5AogkA7QgpA+ghBvgAUHsrIAAAAIAAABgAUHs5IABAAIgBABgAUItBIAHAAIgHACIAAgCgAUhtOIABAAIAAADIgBgDg");
	var mask_1_graphics_492 = new cjs.Graphics().p("A0hNPIAArSIMxAAIAACxIC+AAIAADXQgFADgDAAQhFALg7AsQg5AogkA7QgpA+ghBvgAUHsrIAAAAIAAABgAUHs5IABAAIgBABgAUItBIAHAAIgHACIAAgCgAUhtOIABAAIAAADIgBgDg");
	var mask_1_graphics_493 = new cjs.Graphics().p("A0hNPIAArSIMxAAIAACxIC+AAIAADXQgFADgDAAQhFALg7AsQg5AogkA7QgpA+ghBvgAUHsrIAAAAIAAABgAUHs5IABAAIgBABgAUItBIAHAAIgHACIAAgCgAUhtOIABAAIAAADIgBgDg");
	var mask_1_graphics_494 = new cjs.Graphics().p("A0hNPIAArSIMxAAIAACxIC+AAIAADXQgFADgDAAQhFALg7AsQg5AogkA7QgpA+ghBvgAUHsrIAAAAIAAABgAUHs5IABAAIgBABgAUItBIAHAAIgHACIAAgCgAUhtOIABAAIAAADIgBgDg");
	var mask_1_graphics_495 = new cjs.Graphics().p("A0hNPIAArSIMxAAIAACxIC+AAIAADXQgFADgDAAQhFALg7AsQg5AogkA7QgpA+ghBvgAUHsrIAAAAIAAABgAUHs5IABAAIgBABgAUItBIAHAAIgHACIAAgCgAUhtOIABAAIAAADIgBgDg");
	var mask_1_graphics_496 = new cjs.Graphics().p("Eg+WAoLMAAAgiPMAmyAAAIAAIbIJAAAIAAKNQgQAHgHAAQjTAjizCEQisB7htCzQh9C7hmFQgEA9FgmiIADAAIgDACgEA9FgnNIAFAAQgCAAgDADgEA9KgnlIASAAIgSAFIAAgFgEA+UgoLIADAAIgBAHIgCgHg");
	var mask_1_graphics_497 = new cjs.Graphics().p("Eg+WAoLMAAAgiPMAmyAAAIAAIbIJAAAIAAKNQgQAHgHAAQjTAjizCEQisB7htCzQh9C7hmFQgEA9FgmiIADAAIgDACgEA9FgnNIAFAAQgCAAgDADgEA9KgnlIASAAIgSAFIAAgFgEA+UgoLIADAAIgBAHIgCgHg");
	var mask_1_graphics_498 = new cjs.Graphics().p("Ef//f//MAAAhwbM///AAAMAAA///IP/FlUKTjATpFurg7AUBlegV3AnIgXwQTpqRTxzaMAhqAAAUAZ7gZWAdGgxUUAxsgTnA7ogoBMOSJoszUCV7hY0A6yg7BID9mMMcusqP+MHbsf//MVguAAAMAAAf//gE///AuVUgpGgbOAAAgmeUAAAgmiApGgbLQOSpbuSsjQpskvWJ2YUAV/gWfAEsgwVUAElgwJAFGgH9QDBzLD3AAQCUAACIG4QFfjoF/AAQMaAAKFPRQOhwgSOAAQRCAAN8OSQTIocWGAAUAw1AAAAiaAodUAihAoqAAAA5WUAAAA5TgihAoeQz4Xg4nJ8QnNb8/6VGUgpGAbOg6SAAAUg6KAAAgpGgbOgEf//9xPUDpagTvDumgGPUgstAGPg7nAEFMkCoAJXUgj5AAAgTxAGTgEf///qNQFMGVEHEBIaALgUg3DAAAgr9AEHgEf/////QTypSPhmoQAAP65NdrUgdsAEHgreAFWgEf/////IllFvQ59J73gFlgEf/////IPqtaMBfDgdsUhRnAxdgwtAXtQJcuaKLvqgEf/////MBW1ggaQ0/Ia2uOGQtMJ6wgKWQpVqWkHAAg");
	var mask_1_graphics_499 = new cjs.Graphics().p("Ef//f//MAAAhwbM///AAAMAAA///IP/FlUKTjATpFurg7AUBlegV3AnIgXwQTpqRTxzaMAhqAAAUAZ7gZWAdGgxUUAxsgTnA7ogoBMOSJoszUCV7hY0A6yg7BID9mMMcusqP+MHbsf//MVguAAAMAAAf//gE///AuVUgpGgbOAAAgmeUAAAgmiApGgbLQOSpbuSsjQpskvWJ2YUAV/gWfAEsgwVUAElgwJAFGgH9QDBzLD3AAQCUAACIG4QFfjoF/AAQMaAAKFPRQOhwgSOAAQRCAAN8OSQTIocWGAAUAw1AAAAiaAodUAihAoqAAAA5WUAAAA5TgihAoeQz4Xg4nJ8QnNb8/6VGUgpGAbOg6SAAAUg6KAAAgpGgbOgEf//9xPUDpagTvDumgGPUgstAGPg7nAEFMkCoAJXUgj5AAAgTxAGTgEf///qNQFMGVEHEBIaALgUg3DAAAgr9AEHgEf/////QTypSPhmoQAAP65NdrUgdsAEHgreAFWgEf/////IllFvQ59J73gFlgEf/////IPqtaMBfDgdsUhRnAxdgwtAXtQJcuaKLvqgEf/////MBW1ggaQ0/Ia2uOGQtMJ6wgKWQpVqWkHAAg");
	var mask_1_graphics_500 = new cjs.Graphics().p("Ef//f//MAAAhwbM///AAAMAAA///IP/FlUKTjATpFurg7AUBlegV3AnIgXwQTpqRTxzaMAhqAAAUAZ7gZWAdGgxUUAxsgTnA7ogoBMOSJoszUCV7hY0A6yg7BID9mMMcusqP+MHbsf//MVguAAAMAAAf//gE///AuVUgpGgbOAAAgmeUAAAgmiApGgbLQOSpbuSsjQpskvWJ2YUAV/gWfAEsgwVUAElgwJAFGgH9QDBzLD3AAQCUAACIG4QFfjoF/AAQMaAAKFPRQOhwgSOAAQRCAAN8OSQTIocWGAAUAw1AAAAiaAodUAihAoqAAAA5WUAAAA5TgihAoeQz4Xg4nJ8QnNb8/6VGUgpGAbOg6SAAAUg6KAAAgpGgbOgEf//9xPUDpagTvDumgGPUgstAGPg7nAEFMkCoAJXUgj5AAAgTxAGTgEf///qNQFMGVEHEBIaALgUg3DAAAgr9AEHgEf/////QTypSPhmoQAAP65NdrUgdsAEHgreAFWgEf/////IllFvQ59J73gFlgEf/////IPqtaMBfDgdsUhRnAxdgwtAXtQJcuaKLvqgEf/////MBW1ggaQ0/Ia2uOGQtMJ6wgKWQpVqWkHAAg");
	var mask_1_graphics_501 = new cjs.Graphics().p("Ef//f//MAAAhwbM///AAAMAAA///IP/FlUKTjATpFurg7AUBlegV3AnIgXwQTpqRTxzaMAhqAAAUAZ7gZWAdGgxUUAxsgTnA7ogoBMOSJoszUCV7hY0A6yg7BID9mMMcusqP+MHbsf//MVguAAAMAAAf//gE///AuVUgpGgbOAAAgmeUAAAgmiApGgbLQOSpbuSsjQpskvWJ2YUAV/gWfAEsgwVUAElgwJAFGgH9QDBzLD3AAQCUAACIG4QFfjoF/AAQMaAAKFPRQOhwgSOAAQRCAAN8OSQTIocWGAAUAw1AAAAiaAodUAihAoqAAAA5WUAAAA5TgihAoeQz4Xg4nJ8QnNb8/6VGUgpGAbOg6SAAAUg6KAAAgpGgbOgEf//9xPUDpagTvDumgGPUgstAGPg7nAEFMkCoAJXUgj5AAAgTxAGTgEf///qNQFMGVEHEBIaALgUg3DAAAgr9AEHgEf/////QTypSPhmoQAAP65NdrUgdsAEHgreAFWgEf/////IllFvQ59J73gFlgEf/////IPqtaMBfDgdsUhRnAxdgwtAXtQJcuaKLvqgEf/////MBW1ggaQ0/Ia2uOGQtMJ6wgKWQpVqWkHAAg");
	var mask_1_graphics_502 = new cjs.Graphics().p("Ef//f//U4xszgAAp59DjUAm/9MUNllsZ+UNeRsb0AxdgJ9UAzxgKRFyxAQgUF15AJVFyogPkUFvpgTvBoWgOCUBtUgP6Da+gTtUCPmghsDHnhukUF9ti7ED8BhfAUCqhg7oHrpnJ2UHlSnIUDLThFEUDN2hOogL0hLQUYEDOvuVehSw+UYECU8cAAAboGUAAAbmy4vaTgAU4sCTiU///AAAU///AAA4wKziUgE///f//Q4gwpwgy4QBFgJChgKQC4gGBugaQCvglGkkHQG3kQOJlFQIGiuC+gpQGkhPBCgXQA7gYBZglQBZgmB4g0QA2gQCCgZQA6gJAtgJQAtgJAggLQBZggENjHQCXhpEgiIQFMiUByg/QDmiSCFjNQCXjngojnQgfi3iQh/QiOh/i2gPQh/gKk1BaQmVBojCBPQjdBelODuQjACIiFBYQiFBXhKAoQjmBuk3BvI1oIGQr0ESo+DKQo/DKmJCEUgX0gipAAAgpZUAAAhJ6BMhg0QUBMng0UBsVAAAUBsSAAABMhA0UUBMrA0QAAABJ6UAAABKDhMrA0UUhMhA0QhsSAAAUhsVAAAhMng0QgE///f//QiIAGh1BPQhyBSg1B/QgQAgggBeQgZBPgWAqQgpBPh4CIQgfA0gmB5QgaAwhoCXQhVB/gRBYQgRA2AIBfQAAAzAJBeIgwEHQgPBkAAGAQAAEWAWBYQAwDICxB0QCtB4DIgZQC9gPDni+QDnjIAgi4IAAk1QAAiUA4jRIBWmVQApjXAAgwIAWj8IBZj3QBekmitjgQinjfkAAAQgbAAgcACgElAI///UAPgn07izdkDMUixykAwAAAkpoUAAAkqNDPejVAUDVgjRsEpsAAAUEqnAAADBDDLUUC+IDLXAJWEchUAKUEatojhML2UlMGHdnh8fAACUhPwAABAFfjEBg");
	var mask_1_graphics_503 = new cjs.Graphics().p("Ef//f//U4xszgAAp59DjUAm/9MUNllsZ+UNeRsb0AxdgJ9UAzxgKRFyxAQgUF15AJVFyogPkUFvpgTvBoWgOCUBtUgP6Da+gTtUCPmghsDHnhukUF9ti7ED8BhfAUCqhg7oHrpnJ2UHlSnIUDLThFEUDN2hOogL0hLQUYEDOvuVehSw+UYECU8cAAAboGUAAAbmy4vaTgAU4sCTiU///AAAU///AAA4wKziUgE///f//Q4gwpwgy4QBFgJChgKQC4gGBugaQCvglGkkHQG3kQOJlFQIGiuC+gpQGkhPBCgXQA7gYBZglQBZgmB4g0QA2gQCCgZQA6gJAtgJQAtgJAggLQBZggENjHQCXhpEgiIQFMiUByg/QDmiSCFjNQCXjngojnQgfi3iQh/QiOh/i2gPQh/gKk1BaQmVBojCBPQjdBelODuQjACIiFBYQiFBXhKAoQjmBuk3BvI1oIGQr0ESo+DKQo/DKmJCEUgX0gipAAAgpZUAAAhJ6BMhg0QUBMng0UBsVAAAUBsSAAABMhA0UUBMrA0QAAABJ6UAAABKDhMrA0UUhMhA0QhsSAAAUhsVAAAhMng0QgE///f//QiIAGh1BPQhyBSg1B/QgQAgggBeQgZBPgWAqQgpBPh4CIQgfA0gmB5QgaAwhoCXQhVB/gRBYQgRA2AIBfQAAAzAJBeIgwEHQgPBkAAGAQAAEWAWBYQAwDICxB0QCtB4DIgZQC9gPDni+QDnjIAgi4IAAk1QAAiUA4jRIBWmVQApjXAAgwIAWj8IBZj3QBekmitjgQinjfkAAAQgbAAgcACgElAI///UAPgn07izdkDMUixykAwAAAkpoUAAAkqNDPejVAUDVgjRsEpsAAAUEqnAAADBDDLUUC+IDLXAJWEchUAKUEatojhML2UlMGHdnh8fAACUhPwAABAFfjEBg");
	var mask_1_graphics_504 = new cjs.Graphics().p("Ef//f//U4xszgAAp59DjUAm/9MUNllsZ+UNeRsb0AxdgJ9UAzxgKRFyxAQgUF15AJVFyogPkUFvpgTvBoWgOCUBtUgP6Da+gTtUCPmghsDHnhukUF9ti7ED8BhfAUCqhg7oHrpnJ2UHlSnIUDLThFEUDN2hOogL0hLQUYEDOvuVehSw+UYECU8cAAAboGUAAAbmy4vaTgAU4sCTiU///AAAU///AAA4wKziUgE///f//Q4gwpwgy4QBFgJChgKQC4gGBugaQCvglGkkHQG3kQOJlFQIGiuC+gpQGkhPBCgXQA7gYBZglQBZgmB4g0QA2gQCCgZQA6gJAtgJQAtgJAggLQBZggENjHQCXhpEgiIQFMiUByg/QDmiSCFjNQCXjngojnQgfi3iQh/QiOh/i2gPQh/gKk1BaQmVBojCBPQjdBelODuQjACIiFBYQiFBXhKAoQjmBuk3BvI1oIGQr0ESo+DKQo/DKmJCEUgX0gipAAAgpZUAAAhJ6BMhg0QUBMng0UBsVAAAUBsSAAABMhA0UUBMrA0QAAABJ6UAAABKDhMrA0UUhMhA0QhsSAAAUhsVAAAhMng0QgE///f//QiIAGh1BPQhyBSg1B/QgQAgggBeQgZBPgWAqQgpBPh4CIQgfA0gmB5QgaAwhoCXQhVB/gRBYQgRA2AIBfQAAAzAJBeIgwEHQgPBkAAGAQAAEWAWBYQAwDICxB0QCtB4DIgZQC9gPDni+QDnjIAgi4IAAk1QAAiUA4jRIBWmVQApjXAAgwIAWj8IBZj3QBekmitjgQinjfkAAAQgbAAgcACgElAI///UAPgn07izdkDMUixykAwAAAkpoUAAAkqNDPejVAUDVgjRsEpsAAAUEqnAAADBDDLUUC+IDLXAJWEchUAKUEatojhML2UlMGHdnh8fAACUhPwAABAFfjEBg");
	var mask_1_graphics_505 = new cjs.Graphics().p("Ef//f//U4xszgAAp59DjUAm/9MUNllsZ+UNeRsb0AxdgJ9UAzxgKRFyxAQgUF15AJVFyogPkUFvpgTvBoWgOCUBtUgP6Da+gTtUCPmghsDHnhukUF9ti7ED8BhfAUCqhg7oHrpnJ2UHlSnIUDLThFEUDN2hOogL0hLQUYEDOvuVehSw+UYECU8cAAAboGUAAAbmy4vaTgAU4sCTiU///AAAU///AAA4wKziUgE///f//Q4gwpwgy4QBFgJChgKQC4gGBugaQCvglGkkHQG3kQOJlFQIGiuC+gpQGkhPBCgXQA7gYBZglQBZgmB4g0QA2gQCCgZQA6gJAtgJQAtgJAggLQBZggENjHQCXhpEgiIQFMiUByg/QDmiSCFjNQCXjngojnQgfi3iQh/QiOh/i2gPQh/gKk1BaQmVBojCBPQjdBelODuQjACIiFBYQiFBXhKAoQjmBuk3BvI1oIGQr0ESo+DKQo/DKmJCEUgX0gipAAAgpZUAAAhJ6BMhg0QUBMng0UBsVAAAUBsSAAABMhA0UUBMrA0QAAABJ6UAAABKDhMrA0UUhMhA0QhsSAAAUhsVAAAhMng0QgE///f//QiIAGh1BPQhyBSg1B/QgQAgggBeQgZBPgWAqQgpBPh4CIQgfA0gmB5QgaAwhoCXQhVB/gRBYQgRA2AIBfQAAAzAJBeIgwEHQgPBkAAGAQAAEWAWBYQAwDICxB0QCtB4DIgZQC9gPDni+QDnjIAgi4IAAk1QAAiUA4jRIBWmVQApjXAAgwIAWj8IBZj3QBekmitjgQinjfkAAAQgbAAgcACgElAI///UAPgn07izdkDMUixykAwAAAkpoUAAAkqNDPejVAUDVgjRsEpsAAAUEqnAAADBDDLUUC+IDLXAJWEchUAKUEatojhML2UlMGHdnh8fAACUhPwAABAFfjEBg");
	var mask_1_graphics_506 = new cjs.Graphics().p("Ef//f//U4xszgAAp59DjUAm/9MUNllsZ+UNeRsb0AxdgJ9UAzxgKRFyxAQgUF15AJVFyogPkUFvpgTvBoWgOCUBtUgP6Da+gTtUCPmghsDHnhukUF9ti7ED8BhfAUCqhg7oHrpnJ2UHlSnIUDLThFEUDN2hOogL0hLQUYEDOvuVehSw+UYECU8cAAAboGUAAAbmy4vaTgAU4sCTiU///AAAU///AAA4wKziUgE///f//Q4gwpwgy4QBFgJChgKQC4gGBugaQCvglGkkHQG3kQOJlFQIGiuC+gpQGkhPBCgXQA7gYBZglQBZgmB4g0QA2gQCCgZQA6gJAtgJQAtgJAggLQBZggENjHQCXhpEgiIQFMiUByg/QDmiSCFjNQCXjngojnQgfi3iQh/QiOh/i2gPQh/gKk1BaQmVBojCBPQjdBelODuQjACIiFBYQiFBXhKAoQjmBuk3BvI1oIGQr0ESo+DKQo/DKmJCEUgX0gipAAAgpZUAAAhJ6BMhg0QUBMng0UBsVAAAUBsSAAABMhA0UUBMrA0QAAABJ6UAAABKDhMrA0UUhMhA0QhsSAAAUhsVAAAhMng0QgE///f//QiIAGh1BPQhyBSg1B/QgQAgggBeQgZBPgWAqQgpBPh4CIQgfA0gmB5QgaAwhoCXQhVB/gRBYQgRA2AIBfQAAAzAJBeIgwEHQgPBkAAGAQAAEWAWBYQAwDICxB0QCtB4DIgZQC9gPDni+QDnjIAgi4IAAk1QAAiUA4jRIBWmVQApjXAAgwIAWj8IBZj3QBekmitjgQinjfkAAAQgbAAgcACgElAI///UAPgn07izdkDMUixykAwAAAkpoUAAAkqNDPejVAUDVgjRsEpsAAAUEqnAAADBDDLUUC+IDLXAJWEchUAKUEatojhML2UlMGHdnh8fAACUhPwAABAFfjEBg");
	var mask_1_graphics_507 = new cjs.Graphics().p("Ef//f//U4xszgAAp59DjUAm/9MUNllsZ+UNeRsb0AxdgJ9UAzxgKRFyxAQgUF15AJVFyogPkUFvpgTvBoWgOCUBtUgP6Da+gTtUCPmghsDHnhukUF9ti7ED8BhfAUCqhg7oHrpnJ2UHlSnIUDLThFEUDN2hOogL0hLQUYEDOvuVehSw+UYECU8cAAAboGUAAAbmy4vaTgAU4sCTiU///AAAU///AAA4wKziUgE///f//Q4gwpwgy4QBFgJChgKQC4gGBugaQCvglGkkHQG3kQOJlFQIGiuC+gpQGkhPBCgXQA7gYBZglQBZgmB4g0QA2gQCCgZQA6gJAtgJQAtgJAggLQBZggENjHQCXhpEgiIQFMiUByg/QDmiSCFjNQCXjngojnQgfi3iQh/QiOh/i2gPQh/gKk1BaQmVBojCBPQjdBelODuQjACIiFBYQiFBXhKAoQjmBuk3BvI1oIGQr0ESo+DKQo/DKmJCEUgX0gipAAAgpZUAAAhJ6BMhg0QUBMng0UBsVAAAUBsSAAABMhA0UUBMrA0QAAABJ6UAAABKDhMrA0UUhMhA0QhsSAAAUhsVAAAhMng0QgE///f//QiIAGh1BPQhyBSg1B/QgQAgggBeQgZBPgWAqQgpBPh4CIQgfA0gmB5QgaAwhoCXQhVB/gRBYQgRA2AIBfQAAAzAJBeIgwEHQgPBkAAGAQAAEWAWBYQAwDICxB0QCtB4DIgZQC9gPDni+QDnjIAgi4IAAk1QAAiUA4jRIBWmVQApjXAAgwIAWj8IBZj3QBekmitjgQinjfkAAAQgbAAgcACgElAI///UAPgn07izdkDMUixykAwAAAkpoUAAAkqNDPejVAUDVgjRsEpsAAAUEqnAAADBDDLUUC+IDLXAJWEchUAKUEatojhML2UlMGHdnh8fAACUhPwAABAFfjEBg");
	var mask_1_graphics_508 = new cjs.Graphics().p("EftDf//U0zWwX1AjL4ZSUAgu4gpLaHqanULT9qcLAphgIWUAregIoE3TAN3UE57AH1E3LgNEUE0sgQlBXmgLxUBbygNXC32gQjUB4kgcSCnmhc1UFAeidEDTnhPxUCPKgyDGczmAbUGXcl/ICqsg5/UCs1hCBgJ7g/LUUNCMYWSCDPwWUUNBRlbAAAXMgUAAAXLZ0xcQX1U0unQZx9X9AAAU9TJAAA0yEwZxgE///OUeQ0kt+t3v2QA6gICIgIQCagGBdgVQCSgfFhjdQFxjkL3kRQDahJCUgtQCVgtBQgSQFghCA4gTQBignDKhYQAtgOBtgVQBigOA1gSQBLgaDiioQB+hXDyhyQEXh9Bgg1QDBh6BwisQB/jCgijDQgbiZh4hqQh3hriZgNQhrgIkDBLQlUBXijBDQi6BPkZDIQlBDkh9BCQjBBdkFBdIyKGzQz1HLqVDdUgT/gdFAAAgiwUAAAg+EBAPgr4UBAVgr7Ba9AAAUBa6AAABAQAr7UBAYAr4AAAA+EUAAAA+KhAYAr7UhAQAr4ha6AAAUha9AAAhAVgr4gE///LsDQhyAGhiBCQhgBFgtBqQgNAbgbBPQgVBCgTAjQgiBDhlByQgaAsggBmQgVAohYB+QhHBrgOBKQgOAtAGBQQAAArAIBPIgoDcQgNBVAAFCQAADpASBKQAoCoCVBiQCSBkCngVQCfgMDCigQDCioAbiaIAAkEQAAh8AvivIBIlUQAji1AAgoIASjUIBLjPQBPj3iSi8QiMi8jYAAQgWAAgXACgE//////UgLyjhgBTHk8fUBPrk/+FyCk54UF31kz2KanjJMUKn7i+oI/kAT6UJCRAmSCOWDyDUCNFDtWl55E5FUlzEE4G2zQHWqUvbbE7dlFUAABUic6AABgCzhJag");
	var mask_1_graphics_509 = new cjs.Graphics().p("Eh6tB6nUgyxgyyAAAhH4UAAAhH2Ayxgy0UAy4gyxBH1AAAUBH5AAAAy0AyxUAyyAy0AAABH5UAAABH1gyyAyyUgy0Ay4hH5AAAUhH1AAAgy4gy4gEgNJBwWQihAqhFBqQhRCAA9ChQA6CbCMBQQCuBmGnAAMA1lgAWQELAAChggQDog0B/iPQBqh0AiiwQAYilgqipQhDjyj+lPQh2iYg3hQQheiHg2hyQhZkHhMhwQhAhkjoi3QjTilhCiIQhCiIALjTQAXj1AEh8QAQjKhRihQhZi7ipgYQiYgWiDB6Qh7BrgzCqQgdBkgiDdQgfDPglBqQhkD1j0CqQjjCcklA4QjcArlKAAQlwgGi6AAQlpAAilB8QhyBUggCRQggCcBeBdQBeBeECAMIOMAqQJwAaFBhQQD1g4DAh/QDTiMBujLQDPByDEFgQDoGrBvByIEJEHQCAChgvCQMg6igAqQi/AAhoAegEg22hhLQg8AJghAJQiIAvgUC9QgIA8AIBaIAOCSQAPDhhtDUQhnDVjCB+Qg4Amh1BDQheA8gmBMQgiBCAABsQgEA+gEB5QgOBkg6DEQgeCpBEBgQBVBnD2AUQB2AIA3gYQBygqA4jLQBCj4A0g+QAqgrBHgqQBVguAjgeQCKhYBnjFQBpi9AfjKQAiivAAmnQAAkkgwh3QgqhmhQhCQhVhGhmAAQgUAig0ANg");
	var mask_1_graphics_510 = new cjs.Graphics().p("Eh6tB6nUgyxgyyAAAhH4UAAAhH2Ayxgy0UAy4gyxBH1AAAUBH5AAAAy0AyxUAyyAy0AAABH5UAAABH1gyyAyyUgy0Ay4hH5AAAUhH1AAAgy4gy4gEgNJBwWQihAqhFBqQhRCAA9ChQA6CbCMBQQCuBmGnAAMA1lgAWQELAAChggQDog0B/iPQBqh0AiiwQAYilgqipQhDjyj+lPQh2iYg3hQQheiHg2hyQhZkHhMhwQhAhkjoi3QjTilhCiIQhCiIALjTQAXj1AEh8QAQjKhRihQhZi7ipgYQiYgWiDB6Qh7BrgzCqQgdBkgiDdQgfDPglBqQhkD1j0CqQjjCcklA4QjcArlKAAQlwgGi6AAQlpAAilB8QhyBUggCRQggCcBeBdQBeBeECAMIOMAqQJwAaFBhQQD1g4DAh/QDTiMBujLQDPByDEFgQDoGrBvByIEJEHQCAChgvCQMg6igAqQi/AAhoAegEg22hhLQg8AJghAJQiIAvgUC9QgIA8AIBaIAOCSQAPDhhtDUQhnDVjCB+Qg4Amh1BDQheA8gmBMQgiBCAABsQgEA+gEB5QgOBkg6DEQgeCpBEBgQBVBnD2AUQB2AIA3gYQBygqA4jLQBCj4A0g+QAqgrBHgqQBVguAjgeQCKhYBnjFQBpi9AfjKQAiivAAmnQAAkkgwh3QgqhmhQhCQhVhGhmAAQgUAig0ANg");
	var mask_1_graphics_511 = new cjs.Graphics().p("Eh6tB6nUgyxgyyAAAhH4UAAAhH2Ayxgy0UAy4gyxBH1AAAUBH5AAAAy0AyxUAyyAy0AAABH5UAAABH1gyyAyyUgy0Ay4hH5AAAUhH1AAAgy4gy4gEgNJBwWQihAqhFBqQhRCAA9ChQA6CbCMBQQCuBmGnAAMA1lgAWQELAAChggQDog0B/iPQBqh0AiiwQAYilgqipQhDjyj+lPQh2iYg3hQQheiHg2hyQhZkHhMhwQhAhkjoi3QjTilhCiIQhCiIALjTQAXj1AEh8QAQjKhRihQhZi7ipgYQiYgWiDB6Qh7BrgzCqQgdBkgiDdQgfDPglBqQhkD1j0CqQjjCcklA4QjcArlKAAQlwgGi6AAQlpAAilB8QhyBUggCRQggCcBeBdQBeBeECAMIOMAqQJwAaFBhQQD1g4DAh/QDTiMBujLQDPByDEFgQDoGrBvByIEJEHQCAChgvCQMg6igAqQi/AAhoAegEg22hhLQg8AJghAJQiIAvgUC9QgIA8AIBaIAOCSQAPDhhtDUQhnDVjCB+Qg4Amh1BDQheA8gmBMQgiBCAABsQgEA+gEB5QgOBkg6DEQgeCpBEBgQBVBnD2AUQB2AIA3gYQBygqA4jLQBCj4A0g+QAqgrBHgqQBVguAjgeQCKhYBnjFQBpi9AfjKQAiivAAmnQAAkkgwh3QgqhmhQhCQhVhGhmAAQgUAig0ANg");
	var mask_1_graphics_512 = new cjs.Graphics().p("Eh6tB6nUgyxgyyAAAhH4UAAAhH2Ayxgy0UAy4gyxBH1AAAUBH5AAAAy0AyxUAyyAy0AAABH5UAAABH1gyyAyyUgy0Ay4hH5AAAUhH1AAAgy4gy4gEgNJBwWQihAqhFBqQhRCAA9ChQA6CbCMBQQCuBmGnAAMA1lgAWQELAAChggQDog0B/iPQBqh0AiiwQAYilgqipQhDjyj+lPQh2iYg3hQQheiHg2hyQhZkHhMhwQhAhkjoi3QjTilhCiIQhCiIALjTQAXj1AEh8QAQjKhRihQhZi7ipgYQiYgWiDB6Qh7BrgzCqQgdBkgiDdQgfDPglBqQhkD1j0CqQjjCcklA4QjcArlKAAQlwgGi6AAQlpAAilB8QhyBUggCRQggCcBeBdQBeBeECAMIOMAqQJwAaFBhQQD1g4DAh/QDTiMBujLQDPByDEFgQDoGrBvByIEJEHQCAChgvCQMg6igAqQi/AAhoAegEg22hhLQg8AJghAJQiIAvgUC9QgIA8AIBaIAOCSQAPDhhtDUQhnDVjCB+Qg4Amh1BDQheA8gmBMQgiBCAABsQgEA+gEB5QgOBkg6DEQgeCpBEBgQBVBnD2AUQB2AIA3gYQBygqA4jLQBCj4A0g+QAqgrBHgqQBVguAjgeQCKhYBnjFQBpi9AfjKQAiivAAmnQAAkkgwh3QgqhmhQhCQhVhGhmAAQgUAig0ANg");
	var mask_1_graphics_513 = new cjs.Graphics().p("Eh6tB6nUgyxgyyAAAhH4UAAAhH2Ayxgy0UAy4gyxBH1AAAUBH5AAAAy0AyxUAyyAy0AAABH5UAAABH1gyyAyyUgy0Ay4hH5AAAUhH1AAAgy4gy4gEgNJBwWQihAqhFBqQhRCAA9ChQA6CbCMBQQCuBmGnAAMA1lgAWQELAAChggQDog0B/iPQBqh0AiiwQAYilgqipQhDjyj+lPQh2iYg3hQQheiHg2hyQhZkHhMhwQhAhkjoi3QjTilhCiIQhCiIALjTQAXj1AEh8QAQjKhRihQhZi7ipgYQiYgWiDB6Qh7BrgzCqQgdBkgiDdQgfDPglBqQhkD1j0CqQjjCcklA4QjcArlKAAQlwgGi6AAQlpAAilB8QhyBUggCRQggCcBeBdQBeBeECAMIOMAqQJwAaFBhQQD1g4DAh/QDTiMBujLQDPByDEFgQDoGrBvByIEJEHQCAChgvCQMg6igAqQi/AAhoAegEg22hhLQg8AJghAJQiIAvgUC9QgIA8AIBaIAOCSQAPDhhtDUQhnDVjCB+Qg4Amh1BDQheA8gmBMQgiBCAABsQgEA+gEB5QgOBkg6DEQgeCpBEBgQBVBnD2AUQB2AIA3gYQBygqA4jLQBCj4A0g+QAqgrBHgqQBVguAjgeQCKhYBnjFQBpi9AfjKQAiivAAmnQAAkkgwh3QgqhmhQhCQhVhGhmAAQgUAig0ANg");
	var mask_1_graphics_514 = new cjs.Graphics().p("Eh6tB6nUgyxgyyAAAhH4UAAAhH2Ayxgy0UAy4gyxBH1AAAUBH5AAAAy0AyxUAyyAy0AAABH5UAAABH1gyyAyyUgy0Ay4hH5AAAUhH1AAAgy4gy4gEgNJBwWQihAqhFBqQhRCAA9ChQA6CbCMBQQCuBmGnAAMA1lgAWQELAAChggQDog0B/iPQBqh0AiiwQAYilgqipQhDjyj+lPQh2iYg3hQQheiHg2hyQhZkHhMhwQhAhkjoi3QjTilhCiIQhCiIALjTQAXj1AEh8QAQjKhRihQhZi7ipgYQiYgWiDB6Qh7BrgzCqQgdBkgiDdQgfDPglBqQhkD1j0CqQjjCcklA4QjcArlKAAQlwgGi6AAQlpAAilB8QhyBUggCRQggCcBeBdQBeBeECAMIOMAqQJwAaFBhQQD1g4DAh/QDTiMBujLQDPByDEFgQDoGrBvByIEJEHQCAChgvCQMg6igAqQi/AAhoAegEg22hhLQg8AJghAJQiIAvgUC9QgIA8AIBaIAOCSQAPDhhtDUQhnDVjCB+Qg4Amh1BDQheA8gmBMQgiBCAABsQgEA+gEB5QgOBkg6DEQgeCpBEBgQBVBnD2AUQB2AIA3gYQBygqA4jLQBCj4A0g+QAqgrBHgqQBVguAjgeQCKhYBnjFQBpi9AfjKQAiivAAmnQAAkkgwh3QgqhmhQhCQhVhGhmAAQgUAig0ANg");
	var mask_1_graphics_515 = new cjs.Graphics().p("Eh6tB6nUgyxgyyAAAhH4UAAAhH2Ayxgy0UAy4gyxBH1AAAUBH5AAAAy0AyxUAyyAy0AAABH5UAAABH1gyyAyyUgy0Ay4hH5AAAUhH1AAAgy4gy4gEgNJBwWQihAqhFBqQhRCAA9ChQA6CbCMBQQCuBmGnAAMA1lgAWQELAAChggQDog0B/iPQBqh0AiiwQAYilgqipQhDjyj+lPQh2iYg3hQQheiHg2hyQhZkHhMhwQhAhkjoi3QjTilhCiIQhCiIALjTQAXj1AEh8QAQjKhRihQhZi7ipgYQiYgWiDB6Qh7BrgzCqQgdBkgiDdQgfDPglBqQhkD1j0CqQjjCcklA4QjcArlKAAQlwgGi6AAQlpAAilB8QhyBUggCRQggCcBeBdQBeBeECAMIOMAqQJwAaFBhQQD1g4DAh/QDTiMBujLQDPByDEFgQDoGrBvByIEJEHQCAChgvCQMg6igAqQi/AAhoAegEg22hhLQg8AJghAJQiIAvgUC9QgIA8AIBaIAOCSQAPDhhtDUQhnDVjCB+Qg4Amh1BDQheA8gmBMQgiBCAABsQgEA+gEB5QgOBkg6DEQgeCpBEBgQBVBnD2AUQB2AIA3gYQBygqA4jLQBCj4A0g+QAqgrBHgqQBVguAjgeQCKhYBnjFQBpi9AfjKQAiivAAmnQAAkkgwh3QgqhmhQhCQhVhGhmAAQgUAig0ANg");
	var mask_1_graphics_516 = new cjs.Graphics().p("Eh6tB6nUgyxgyyAAAhH4UAAAhH2Ayxgy0UAy4gyxBH1AAAUBH5AAAAy0AyxUAyyAy0AAABH5UAAABH1gyyAyyUgy0Ay4hH5AAAUhH1AAAgy4gy4gEgNJBwWQihAqhFBqQhRCAA9ChQA6CbCMBQQCuBmGnAAMA1lgAWQELAAChggQDog0B/iPQBqh0AiiwQAYilgqipQhDjyj+lPQh2iYg3hQQheiHg2hyQhZkHhMhwQhAhkjoi3QjTilhCiIQhCiIALjTQAXj1AEh8QAQjKhRihQhZi7ipgYQiYgWiDB6Qh7BrgzCqQgdBkgiDdQgfDPglBqQhkD1j0CqQjjCcklA4QjcArlKAAQlwgGi6AAQlpAAilB8QhyBUggCRQggCcBeBdQBeBeECAMIOMAqQJwAaFBhQQD1g4DAh/QDTiMBujLQDPByDEFgQDoGrBvByIEJEHQCAChgvCQMg6igAqQi/AAhoAegEg22hhLQg8AJghAJQiIAvgUC9QgIA8AIBaIAOCSQAPDhhtDUQhnDVjCB+Qg4Amh1BDQheA8gmBMQgiBCAABsQgEA+gEB5QgOBkg6DEQgeCpBEBgQBVBnD2AUQB2AIA3gYQBygqA4jLQBCj4A0g+QAqgrBHgqQBVguAjgeQCKhYBnjFQBpi9AfjKQAiivAAmnQAAkkgwh3QgqhmhQhCQhVhGhmAAQgUAig0ANg");
	var mask_1_graphics_517 = new cjs.Graphics().p("Eh6tB6nUgyxgyyAAAhH4UAAAhH2Ayxgy0UAy4gyxBH1AAAUBH5AAAAy0AyxUAyyAy0AAABH5UAAABH1gyyAyyUgy0Ay4hH5AAAUhH1AAAgy4gy4gEgNJBwWQihAqhFBqQhRCAA9ChQA6CbCMBQQCuBmGnAAMA1lgAWQELAAChggQDog0B/iPQBqh0AiiwQAYilgqipQhDjyj+lPQh2iYg3hQQheiHg2hyQhZkHhMhwQhAhkjoi3QjTilhCiIQhCiIALjTQAXj1AEh8QAQjKhRihQhZi7ipgYQiYgWiDB6Qh7BrgzCqQgdBkgiDdQgfDPglBqQhkD1j0CqQjjCcklA4QjcArlKAAQlwgGi6AAQlpAAilB8QhyBUggCRQggCcBeBdQBeBeECAMIOMAqQJwAaFBhQQD1g4DAh/QDTiMBujLQDPByDEFgQDoGrBvByIEJEHQCAChgvCQMg6igAqQi/AAhoAegEg22hhLQg8AJghAJQiIAvgUC9QgIA8AIBaIAOCSQAPDhhtDUQhnDVjCB+Qg4Amh1BDQheA8gmBMQgiBCAABsQgEA+gEB5QgOBkg6DEQgeCpBEBgQBVBnD2AUQB2AIA3gYQBygqA4jLQBCj4A0g+QAqgrBHgqQBVguAjgeQCKhYBnjFQBpi9AfjKQAiivAAmnQAAkkgwh3QgqhmhQhCQhVhGhmAAQgUAig0ANg");
	var mask_1_graphics_518 = new cjs.Graphics().p("Eh6tB6nUgyxgyyAAAhH4UAAAhH2Ayxgy0UAy4gyxBH1AAAUBH5AAAAy0AyxUAyyAy0AAABH5UAAABH1gyyAyyUgy0Ay4hH5AAAUhH1AAAgy4gy4gEgNJBwWQihAqhFBqQhRCAA9ChQA6CbCMBQQCuBmGnAAMA1lgAWQELAAChggQDog0B/iPQBqh0AiiwQAYilgqipQhDjyj+lPQh2iYg3hQQheiHg2hyQhZkHhMhwQhAhkjoi3QjTilhCiIQhCiIALjTQAXj1AEh8QAQjKhRihQhZi7ipgYQiYgWiDB6Qh7BrgzCqQgdBkgiDdQgfDPglBqQhkD1j0CqQjjCcklA4QjcArlKAAQlwgGi6AAQlpAAilB8QhyBUggCRQggCcBeBdQBeBeECAMIOMAqQJwAaFBhQQD1g4DAh/QDTiMBujLQDPByDEFgQDoGrBvByIEJEHQCAChgvCQMg6igAqQi/AAhoAegEg22hhLQg8AJghAJQiIAvgUC9QgIA8AIBaIAOCSQAPDhhtDUQhnDVjCB+Qg4Amh1BDQheA8gmBMQgiBCAABsQgEA+gEB5QgOBkg6DEQgeCpBEBgQBVBnD2AUQB2AIA3gYQBygqA4jLQBCj4A0g+QAqgrBHgqQBVguAjgeQCKhYBnjFQBpi9AfjKQAiivAAmnQAAkkgwh3QgqhmhQhCQhVhGhmAAQgUAig0ANg");
	var mask_1_graphics_519 = new cjs.Graphics().p("Eh6tB6nUgyxgyyAAAhH4UAAAhH2Ayxgy0UAy4gyxBH1AAAUBH5AAAAy0AyxUAyyAy0AAABH5UAAABH1gyyAyyUgy0Ay4hH5AAAUhH1AAAgy4gy4gEgNJBwWQihAqhFBqQhRCAA9ChQA6CbCMBQQCuBmGnAAMA1lgAWQELAAChggQDog0B/iPQBqh0AiiwQAYilgqipQhDjyj+lPQh2iYg3hQQheiHg2hyQhZkHhMhwQhAhkjoi3QjTilhCiIQhCiIALjTQAXj1AEh8QAQjKhRihQhZi7ipgYQiYgWiDB6Qh7BrgzCqQgdBkgiDdQgfDPglBqQhkD1j0CqQjjCcklA4QjcArlKAAQlwgGi6AAQlpAAilB8QhyBUggCRQggCcBeBdQBeBeECAMIOMAqQJwAaFBhQQD1g4DAh/QDTiMBujLQDPByDEFgQDoGrBvByIEJEHQCAChgvCQMg6igAqQi/AAhoAegEg22hhLQg8AJghAJQiIAvgUC9QgIA8AIBaIAOCSQAPDhhtDUQhnDVjCB+Qg4Amh1BDQheA8gmBMQgiBCAABsQgEA+gEB5QgOBkg6DEQgeCpBEBgQBVBnD2AUQB2AIA3gYQBygqA4jLQBCj4A0g+QAqgrBHgqQBVguAjgeQCKhYBnjFQBpi9AfjKQAiivAAmnQAAkkgwh3QgqhmhQhCQhVhGhmAAQgUAig0ANg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(484).to({graphics:mask_1_graphics_484,x:994.625,y:423.725}).wait(1).to({graphics:mask_1_graphics_485,x:994.625,y:423.725}).wait(1).to({graphics:mask_1_graphics_486,x:994.625,y:423.725}).wait(1).to({graphics:mask_1_graphics_487,x:994.625,y:423.725}).wait(1).to({graphics:mask_1_graphics_488,x:1093.45,y:363.525}).wait(1).to({graphics:mask_1_graphics_489,x:1093.45,y:363.525}).wait(1).to({graphics:mask_1_graphics_490,x:1093.45,y:363.525}).wait(1).to({graphics:mask_1_graphics_491,x:1093.45,y:363.525}).wait(1).to({graphics:mask_1_graphics_492,x:1093.45,y:363.525}).wait(1).to({graphics:mask_1_graphics_493,x:1093.45,y:363.525}).wait(1).to({graphics:mask_1_graphics_494,x:1093.45,y:363.525}).wait(1).to({graphics:mask_1_graphics_495,x:1093.45,y:363.525}).wait(1).to({graphics:mask_1_graphics_496,x:1878.3,y:-58.75}).wait(1).to({graphics:mask_1_graphics_497,x:1878.3,y:-58.75}).wait(1).to({graphics:mask_1_graphics_498,x:73907.225,y:-54.225}).wait(1).to({graphics:mask_1_graphics_499,x:73907.225,y:-54.225}).wait(1).to({graphics:mask_1_graphics_500,x:73907.225,y:-54.225}).wait(1).to({graphics:mask_1_graphics_501,x:73907.225,y:-54.225}).wait(1).to({graphics:mask_1_graphics_502,x:75606.025,y:-19514.975}).wait(1).to({graphics:mask_1_graphics_503,x:75606.025,y:-19514.975}).wait(1).to({graphics:mask_1_graphics_504,x:75606.025,y:-19514.975}).wait(1).to({graphics:mask_1_graphics_505,x:75606.025,y:-19514.975}).wait(1).to({graphics:mask_1_graphics_506,x:75606.025,y:-19514.975}).wait(1).to({graphics:mask_1_graphics_507,x:75606.025,y:-19514.975}).wait(1).to({graphics:mask_1_graphics_508,x:63748.125,y:-5614.5732}).wait(1).to({graphics:mask_1_graphics_509,x:3377.825,y:898.025}).wait(1).to({graphics:mask_1_graphics_510,x:3377.825,y:898.025}).wait(1).to({graphics:mask_1_graphics_511,x:3377.825,y:898.025}).wait(1).to({graphics:mask_1_graphics_512,x:3377.825,y:898.025}).wait(1).to({graphics:mask_1_graphics_513,x:3377.825,y:898.025}).wait(1).to({graphics:mask_1_graphics_514,x:3377.825,y:898.025}).wait(1).to({graphics:mask_1_graphics_515,x:3377.825,y:898.025}).wait(1).to({graphics:mask_1_graphics_516,x:3377.825,y:898.025}).wait(1).to({graphics:mask_1_graphics_517,x:3377.825,y:898.025}).wait(1).to({graphics:mask_1_graphics_518,x:3377.825,y:898.025}).wait(1).to({graphics:mask_1_graphics_519,x:3377.825,y:898.025}).wait(1).to({graphics:null,x:0,y:0}).wait(107));

	// lady_legs_obj_
	this.lady_legs = new lib.Scene_1_lady_legs();
	this.lady_legs.name = "lady_legs";
	this.lady_legs.setTransform(-0.05,-0.05,1.1265,1.1265,0,0,0,-84.3,87);
	this.lady_legs.depth = 0;
	this.lady_legs.isAttachedToCamera = 0
	this.lady_legs.isAttachedToMask = 0
	this.lady_legs.layerDepth = 0
	this.lady_legs.layerIndex = 6
	this.lady_legs.maskLayerName = 0

	var maskedShapeInstanceList = [this.lady_legs];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.lady_legs).wait(376).to({regX:-289.4,regY:-28.4,scaleX:0.8277,scaleY:0.8277,x:0},0).wait(122).to({regX:284.7,regY:434.3,scaleX:2.5145,scaleY:2.5145,x:0.05,y:0.15},0).wait(11).to({regX:157.3,regY:328.1,scaleX:2.1112,scaleY:2.1112,x:0.15},0).wait(1).to({regX:688.1,regY:636.6,scaleX:1,scaleY:1,x:530.9,y:308.6},0).wait(5).to({regX:157.3,regY:328.1,scaleX:2.1112,scaleY:2.1112,x:0.15,y:0.15},0).wait(1).to({regX:688.1,regY:636.6,scaleX:1,scaleY:1,x:530.9,y:308.6},0).wait(38).to({regX:-323.8,regY:-1.9,scaleX:0.8323,scaleY:0.8323,x:0,y:-0.05},0).to({_off:true},72).wait(1));

	// lady_body_obj_
	this.lady_body = new lib.Scene_1_lady_body();
	this.lady_body.name = "lady_body";
	this.lady_body.setTransform(-0.05,-0.05,1.1265,1.1265,0,0,0,-84.3,87);
	this.lady_body.depth = 0;
	this.lady_body.isAttachedToCamera = 0
	this.lady_body.isAttachedToMask = 0
	this.lady_body.layerDepth = 0
	this.lady_body.layerIndex = 7
	this.lady_body.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.lady_body).wait(376).to({regX:-289.4,regY:-28.4,scaleX:0.8277,scaleY:0.8277,x:0},0).wait(122).to({regX:284.7,regY:434.3,scaleX:2.5145,scaleY:2.5145,x:0.05,y:0.15},0).wait(11).to({regX:157.3,regY:328.1,scaleX:2.1112,scaleY:2.1112,x:0.15},0).wait(45).to({regX:-323.8,regY:-1.9,scaleX:0.8323,scaleY:0.8323,x:0,y:-0.05},0).to({_off:true},72).wait(1));

	// mask_haed (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_554 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_555 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_556 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_557 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_558 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_559 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_560 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_561 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_562 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_563 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_564 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_565 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_566 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_567 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_568 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_569 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_570 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_571 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_572 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_573 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_574 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_575 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_576 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_577 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_578 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_579 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_580 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_581 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_582 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_583 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_584 = new cjs.Graphics().p("EBl0AJ1IikhtQhag+BLgzQASgNBEgOQA/gMBagLQDJgZCMAEQBrADAWgRIAEgDIACgBIAQAOQAhAZgOAwQgNArgvAuQhXBXhJAwQhIAwhnAAQhoAAhIgwg");
	var mask_2_graphics_585 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_586 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_587 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_588 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_589 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_590 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_591 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_592 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_593 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_594 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_595 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_596 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_597 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_598 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_599 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_600 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_601 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_602 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_603 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_604 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_605 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_606 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_607 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_608 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_609 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_610 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_611 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_612 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_613 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_614 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_615 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_616 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_617 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_618 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_619 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_620 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_621 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_622 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_623 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_624 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_625 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");
	var mask_2_graphics_626 = new cjs.Graphics().p("EBjBALfIiihtQhag9BKgzQASgMBEgOQA+gNBbgLQDIgYCKAEQBrADAWgRIAEgEIACAAIAQANQAgAagOAvQgNArguAuQhWBXhJAvQhIAwhnAAQhmAAhJgwg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(554).to({graphics:mask_2_graphics_554,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_555,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_556,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_557,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_558,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_559,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_560,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_561,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_562,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_563,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_564,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_565,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_566,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_567,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_568,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_569,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_570,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_571,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_572,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_573,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_574,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_575,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_576,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_577,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_578,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_579,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_580,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_581,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_582,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_583,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_584,x:709.097,y:67.7363}).wait(1).to({graphics:mask_2_graphics_585,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_586,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_587,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_588,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_589,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_590,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_591,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_592,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_593,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_594,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_595,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_596,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_597,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_598,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_599,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_600,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_601,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_602,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_603,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_604,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_605,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_606,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_607,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_608,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_609,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_610,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_611,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_612,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_613,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_614,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_615,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_616,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_617,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_618,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_619,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_620,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_621,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_622,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_623,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_624,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_625,x:690.9339,y:78.3152}).wait(1).to({graphics:mask_2_graphics_626,x:690.9339,y:78.3152}).wait(1));

	// lady_head_obj_
	this.lady_head = new lib.Scene_1_lady_head();
	this.lady_head.name = "lady_head";
	this.lady_head.setTransform(-0.05,-0.05,1.1265,1.1265,0,0,0,-84.3,87);
	this.lady_head.depth = 0;
	this.lady_head.isAttachedToCamera = 0
	this.lady_head.isAttachedToMask = 0
	this.lady_head.layerDepth = 0
	this.lady_head.layerIndex = 8
	this.lady_head.maskLayerName = 0

	var maskedShapeInstanceList = [this.lady_head];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.lady_head).wait(376).to({regX:-289.4,regY:-28.4,scaleX:0.8277,scaleY:0.8277,x:0},0).wait(122).to({regX:284.7,regY:434.3,scaleX:2.5145,scaleY:2.5145,x:0.05,y:0.15},0).wait(11).to({regX:157.3,regY:328.1,scaleX:2.1112,scaleY:2.1112,x:0.15},0).wait(45).to({regX:-323.8,regY:-1.9,scaleX:0.8323,scaleY:0.8323,x:0,y:-0.05},0).to({_off:true},72).wait(1));

	// ladylegstand_obj_
	this.ladylegstand = new lib.Scene_1_ladylegstand();
	this.ladylegstand.name = "ladylegstand";
	this.ladylegstand.setTransform(-0.05,-0.05,1.1265,1.1265,0,0,0,-84.3,87);
	this.ladylegstand.depth = 0;
	this.ladylegstand.isAttachedToCamera = 0
	this.ladylegstand.isAttachedToMask = 0
	this.ladylegstand.layerDepth = 0
	this.ladylegstand.layerIndex = 9
	this.ladylegstand.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ladylegstand).wait(276).to({regX:-251.8,regY:-7.2,scaleX:0.87,scaleY:0.87},0).wait(5).to({regX:-256,regY:-9.6,scaleX:0.865,scaleY:0.865,y:0},0).wait(15).to({regX:-268.8,regY:-16.8,scaleX:0.8502,scaleY:0.8502,x:0,y:-0.05},0).wait(18).to({regX:-284.2,regY:-25.4,scaleX:0.8332,scaleY:0.8332,y:0.05},0).wait(7).to({regX:-289.3,regY:-28.4,scaleX:0.8277,scaleY:0.8277,y:-0.05},0).wait(55).to({regX:-289.4},0).wait(178).to({regX:-323.8,regY:-1.9,scaleX:0.8323,scaleY:0.8323},0).to({_off:true},45).wait(28));

	// lady_walking_obj_
	this.lady_walking = new lib.Scene_1_lady_walking();
	this.lady_walking.name = "lady_walking";
	this.lady_walking.setTransform(1210.65,152.6,1.1265,1.1265,0,0,0,990.5,222.5);
	this.lady_walking.depth = 0;
	this.lady_walking.isAttachedToCamera = 0
	this.lady_walking.isAttachedToMask = 0
	this.lady_walking.layerDepth = 0
	this.lady_walking.layerIndex = 10
	this.lady_walking.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.lady_walking).wait(1).to({regX:937.5,regY:366.5,scaleX:1,scaleY:1,x:1157.65,y:296.6},0).wait(274).to({_off:true},1).wait(351));

	// plata_blink_obj_
	this.plata_blink = new lib.Scene_1_plata_blink();
	this.plata_blink.name = "plata_blink";
	this.plata_blink.setTransform(405,329.3,1.1265,1.1265,0,0,0,275.3,379.4);
	this.plata_blink.depth = 0;
	this.plata_blink.isAttachedToCamera = 0
	this.plata_blink.isAttachedToMask = 0
	this.plata_blink.layerDepth = 0
	this.plata_blink.layerIndex = 11
	this.plata_blink.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.plata_blink).wait(84).to({regX:274.1,regY:379.2,scaleX:1.1198,scaleY:1.1198},0).wait(25).to({regX:266.3,regY:378.2,scaleX:1.0794,scaleY:1.0794,x:405.05,y:329.35},0).wait(30).to({regX:256.9,regY:376.9,scaleX:1.0347,scaleY:1.0347,y:329.3},0).wait(157).to({regX:207.6,regY:370.6,scaleX:0.8502,scaleY:0.8502,y:329.35},0).wait(28).to({regX:419.8,regY:294.3,scaleX:1.8958,scaleY:1.8958},0).wait(29).to({_off:true},29).wait(245));

	// plata_eye_obj_
	this.plata_eye = new lib.Scene_1_plata_eye();
	this.plata_eye.name = "plata_eye";
	this.plata_eye.setTransform(420.55,349.25,1.1265,1.1265,0,0,0,289.1,397.1);
	this.plata_eye.depth = 0;
	this.plata_eye.isAttachedToCamera = 0
	this.plata_eye.isAttachedToMask = 0
	this.plata_eye.layerDepth = 0
	this.plata_eye.layerIndex = 12
	this.plata_eye.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.plata_eye).wait(84).to({regX:287.9,regY:396.9,scaleX:1.1198,scaleY:1.1198,x:420.45,y:349.15},0).wait(8).to({regX:285.6,scaleX:1.1065,scaleY:1.1065,x:420.5,y:349.25},0).wait(9).to({regX:282.9,regY:396.7,scaleX:1.092,scaleY:1.092,y:349.2},0).wait(8).to({regX:280.6,regY:396.6,scaleX:1.0794,scaleY:1.0794},0).wait(30).to({regX:271.9,regY:396.1,scaleX:1.0347,scaleY:1.0347,x:420.6},0).wait(3).to({regX:270.9,scaleX:1.0304,scaleY:1.0304,x:420.5},0).wait(4).to({regX:269.8,scaleX:1.0248,scaleY:1.0248,x:420.55,y:349.25},0).wait(34).to({regX:259.8,regY:395.6,scaleX:0.9792,scaleY:0.9792,x:420.5},0).wait(173).to({regX:427.9,regY:304.8,scaleX:1.8958,scaleY:1.8958,x:420.4},0).wait(82).to({regX:218.6,regY:393.6,scaleX:0.8277,scaleY:0.8277,x:420.5},0).wait(74).to({regX:356.4,regY:493.4,scaleX:2.1112,scaleY:2.1112,y:349.1},0).wait(14).to({regX:174.1,regY:300.2,scaleX:1.9551,scaleY:1.9551,x:420.55,y:349.2},0).wait(7).to({regX:67,regY:-91,scaleX:1.2755,scaleY:1.2755,y:349.3},0).wait(7).to({regX:137.1,regY:-662.9,scaleX:1.2756,scaleY:1.2756,x:420.6,y:349.2},0).wait(4).to({regX:86.8,regY:-341.8,x:420.45},0).wait(6).to({regX:96.8,regY:-40.7,x:420.55,y:349.25},0).wait(1).to({regX:481.7,regY:-168.6,scaleX:1,scaleY:1,x:805.4,y:221.3},0).wait(6).to({regX:181.4,regY:417.7,scaleX:0.8323,scaleY:0.8323,x:420.5,y:349.2},0).to({_off:true},72).wait(1));

	// plata_obj_
	this.plata = new lib.Scene_1_plata();
	this.plata.name = "plata";
	this.plata.setTransform(423.35,441.5,1.1265,1.1265,0,0,0,291.6,479);
	this.plata.depth = 0;
	this.plata.isAttachedToCamera = 0
	this.plata.isAttachedToMask = 0
	this.plata.layerDepth = 0
	this.plata.layerIndex = 13
	this.plata.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.plata).wait(435).to({regX:222.2,regY:505.1,scaleX:0.8277,scaleY:0.8277,x:423.45},0).wait(74).to({regX:357.8,regY:537.1,scaleX:2.1112,scaleY:2.1112,y:441.35},0).wait(10).to({regX:554.8,regY:-99.1,scaleX:1,scaleY:1,x:620.4,y:-194.75},0).wait(35).to({regX:184.9,regY:528.6,scaleX:0.8323,scaleY:0.8323,x:423.4,y:441.5},0).wait(1).to({regX:554.8,regY:-99.1,scaleX:1,scaleY:1,x:793.25,y:-186.15},0).wait(70).to({_off:true},1).wait(1));

	// tree_obj_
	this.tree = new lib.Scene_1_tree();
	this.tree.name = "tree";
	this.tree.setTransform(183,-347.8,1.1265,1.1265,0,0,0,78.2,-221.7);
	this.tree.depth = 0;
	this.tree.isAttachedToCamera = 0
	this.tree.isAttachedToMask = 0
	this.tree.layerDepth = 0
	this.tree.layerIndex = 14
	this.tree.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tree).wait(112).to({regX:58.8,regY:-252,scaleX:1.0748,scaleY:1.0748,x:183.05,y:-347.85},0).to({_off:true},514).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(51.5,-1012,1233.4,1876.4);
// library properties:
lib.properties = {
	id: 'B529EEA03111EB469AD8207FC85C9384',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#B9B9B9",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_2.png?1598913040274", id:"CachedBmp_2"},
		{src:"images/CachedBmp_1.png?1598913040274", id:"CachedBmp_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B529EEA03111EB469AD8207FC85C9384'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;