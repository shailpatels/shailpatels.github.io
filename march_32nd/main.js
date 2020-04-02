window.onload = function(){
	let tgt = document.createElement('canvas');
	tgt.id = 'duck-runner'
	tgt.style = "position:fixed;left:50%;margin-left:-300px;border:solid 2px black;";
	tgt.height = '500';
	tgt.width = '600';

	tgt.focus();

	document.body.appendChild(tgt);

	let canvas = document.getElementById('duck-runner');
	let context = canvas.getContext('2d');

	let image = document.getElementById('source');
	flip(0,250);
	function flip(x_,y_){
		context.save();	
		context.translate(100, 0);
		context.scale(-1, 1);
  		context.drawImage(image, x_,y_, 50,50);
  		context.restore();
	}
	
	let x = 0;
	let y = 250;
	let dx = 0;
	let dy = 0;
	let started = false;

	//0
	//---250  
	//

	let max_height = 150;
	let gravity = .5; //[.1,INF)

	function onGround(){
		return Math.round(y) == 250;
	}

	function belowGround(){
		return !onGround() && Math.round(y) >= 250;
	}

	function aboveGround(){
		return !onGround() && y >= 0 && y < 250;
	}

	function drawRect(x_,y_,w,h){
		context.beginPath();
		context.rect(x_, y_, w, h);
		context.stroke();
	}

	function drawLine(x1,y1,x2,y2){
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.stroke();
	}


	let slow_down = 50;
	let score = 0 * slow_down;
	let max_score = 100 * slow_down;
	let DEBUG = false;

	function keyListener(e){
		if( (e.keyCode == 32 || e.keyCode == 38) && onGround() ){
			dy = -11;

			if (!started){
				started = true;
				var pid = window.requestAnimationFrame(draw);
			}
		}

		if((e.keyCode == 40 || e.keyCode == 83) && onGround()){
			dy = 11;
		}
	}

	window.addEventListener('keydown', keyListener, false);

	function drawEnemy(e){
		context.drawImage(e['image'],e['x'],e['y'],e['w'],e['h']);
		if (DEBUG)
			drawRect(e['x'],e['y'],e['w'],e['h']);
	}


	let types = [{'w' : 50, 'h' : 50, 'image' : document.getElementById('b1'),'y' : 250},
				 {'w' : 100, 'h' : 95,'image' : document.getElementById('b2'),'y' : 190},
				 {'w' : 110, 'h' : 150,'image' : document.getElementById('b3'),'y' : 125},
				 {'w' : 60, 'h' : 70,'image' : document.getElementById('b4'),'y' : 250},
				 {'w' : 65, 'h' : 60,'image' : document.getElementById('b5'),'y' : 320},
				 {'w' : 70, 'h' : 70,'image' : document.getElementById('b6'),'y' : 240}
				];

	function createEnemy(){
		let enemy = {'x' : 700, 'y' : 250, 'h' : 100, 'w' : 100, 'speed' : 5 };

		if ( (score/slow_down) >= 20 ){
			enemy['speed'] = 6;
			DIST = 310;
		}

		if ( (score/slow_down) >= 40 ){
			enemy['speed'] = 6;
			DIST = 325;
		}

		if ( (score/slow_down) >= 60 ){
			enemy['speed'] = 7;
			DIST = 350;
		}

		let e = types[Math.floor(Math.random()* types.length)];

		//e = types[5];
		enemy['w'] = e['w'];
		enemy['h'] = e['h'];
		enemy['y'] = e['y'];
		enemy['image'] = e['image'];
		blocks.push( enemy );
	}

	var blocks = [];

	let duck_top = 0, 
	    duck_bot = 0, 
	    duck_right = 0;

	let duck_w = 50;
	let duck_h = 50;
	function isHit( e ){

		//duck
		let l1 = [50,y];
		let r1 = [100,50+y];

		let l2 = [e['x'], e['y']];
		let r2 = [e['x'] + e['w'], e['y'] + e['h']];
		if (DEBUG){
			drawRect( e['x'],e['y'],1,1 );
			drawRect( e['x'] + e['w'], e['y'] + e['h'],1,1);
		}

	    // If one rectangle is on left side of other 
    	if (l1[0] > r2[0] || l2[0] > r1[0]) 
        	return false; 
  
   		 // If one rectangle is above other 
    	if (l1[1] > r2[1] || l2[1] > r1[1]) 
        	return false; 

        return true;
	}

	function drawOcean(){
		context.fillStyle = "#00FFFF";
		context.fillRect(0,260, 600, 60);

		context.fillStyle = "#F0F8FF";
		context.fillRect(0,0, 600, 260);

		context.fillStyle = "#FFD700";
		context.beginPath();
		context.arc(100 + (Math.round(score/slow_down)), 75, 50, 0, 2 * Math.PI);
		context.fill();


		var grd = context.createLinearGradient(0, 250, 0, 600);
		grd.addColorStop(1, "#6495ED");
		grd.addColorStop(0, "#00FFFF");

		// Fill with gradient
		context.fillStyle = grd;

		context.fillRect(0,320, 600, 600);

		context.fillStyle = "black";
	}

	let DIST = 300;
	let HIT = false;
	function draw(){
		if ( (score/slow_down) >= 50){
			document.getElementById("score").className = "badge yellow";
		}

		if ( blocks.length < 3 ){
			let close = false;
			for(var b of blocks){
				if(b['x'] >= DIST)
					close = true;
			}

			if (!close)
				createEnemy();
		}

		score ++;

		if( score > max_score){
			document.getElementById("score").className = "badge green";
		}

		context.clearRect(0,0,600,500);
		//console.log(Math.round(y), dy, score);
				drawOcean();

		duck_top = 250 + (y-250);
		duck_bot = 300 + (y-250);
		duck_right = 100;
		if ( DEBUG ){
			drawLine(0,duck_bot,600,duck_bot);
			drawLine(duck_right,0,duck_right,500);
			drawLine(0,duck_top,600,duck_top);
		}

		if (score > max_score){
			window.cancelAnimationFrame(pid);
			addConfetti();
			return;
		}

		y += dy;

		// context.strokeStyle = "blue";
		// drawRect(0,260,600,260);
		context.strokeStyle = "black";

		for ( var b of blocks){
			b['x'] -= b['speed'];
			drawEnemy(b);
			if ( isHit(b) ){
				dy = 15;
				HIT = true;
			}
		}

		flip(x,y);	

		if ( DEBUG ){
			drawRect(50,y,1,1);
			drawRect(100,y+50,1,1)
		}
	
		if ( !HIT ){
		if (!onGround() && aboveGround())
			dy += gravity;

		if (onGround())
			dy = 0;
		
		if (!onGround() && belowGround())
			dy -= gravity;
		}

		
		for (var i = 0; i < blocks.length; i++){
			if ( blocks[i]['x'] < -100 ){
				blocks.splice(i,1);
			}
		}

		pid = window.requestAnimationFrame(draw);

		if (!HIT){
		let s_tmp = Math.round( score/slow_down );
		document.getElementById("score").innerHTML = s_tmp;
		}
	}

}