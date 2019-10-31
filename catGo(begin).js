function main(){
	get_nearest();
	goto_win();
}
function go_out()
{
// addx0 = [1,0,-1,-1,-1,0];
// addy0 = [0,1,1,0,-1,-1];
// addx1 = [1,1,0,-1,0,1];
// addy1 = [0,1,1,0,-1,-1];

   var _loc1_ ;
   var _loc5_ = catx;
   var _loc4_ = caty;
   
   _loc1_ = 0;
   
   while(_loc1_ < 6){
      var _loc3_ = !(_loc4_ % 2)?_loc5_ + addx0[_loc1_]:_loc5_ + addx1[_loc1_];
      var _loc2_ = _loc4_ + addy0[_loc1_];
      if(cel[_loc2_][_loc3_].stat == 0)
      {
         catx = _loc3_;
         caty = _loc2_;
         catdir = _loc1_;
         return 1;
      }
      _loc1_ = _loc1_ + 1;
   }
   return 0;
}
function goto_win()
{
	var _loc5_ = catx;
	var _loc4_ = caty;
	var _loc1_ = 0;
	
	while(_loc1_ < 6){
	//_loc3_=偶數列？欄+addx0[_loc1_] :欄+_loc5_ + addx1[_loc1_]
	var _loc3_ = !(_loc4_ % 2)?_loc5_ + addx0[_loc1_]:_loc5_ + addx1[_loc1_];
	var _loc2_ = _loc4_ + addy0[_loc1_];
	
	if(cel[_loc2_][_loc3_].stat == 1){
         if(cel[_loc2_][_loc3_].win)
         {
            catx = _loc3_;
            caty = _loc2_;
            catdir = _loc1_;
            return 1;
         }
      }
      _loc1_ = _loc1_ + 1;
   }
   return 0;
}
function get_nearest(){
	var _loc2_ = undefined;
	var _loc6_ = undefined;
	var _loc1_ = undefined;
	var _loc3_ = undefined;
	var _loc11_ = undefined;

	cel[caty][catx].po = 0;
	lx[0] = catx;
	ly[0] = caty;
	
	var _loc12_ = 1;
	var _loc7_ = 999;
	po = 1;
	while(po < 200){
		_loc3_ = 0;
		_loc2_ = 0;
		while(_loc2_ < _loc12_){
			var _loc5_ = lx[_loc2_];
			var _loc4_ = ly[_loc2_];
			_loc1_ = 0;
			
			while(_loc1_ < 6){
				var _loc9_ = !(_loc4_ % 2)?_loc5_ + addx0[_loc1_]:_loc5_ + addx1[_loc1_];
				var _loc8_ = _loc4_ + addy0[_loc1_];
				
				if(cel[_loc8_][_loc9_].stat == 1){
					if(cel[_loc8_][_loc9_].po < 0){
						cel[_loc8_][_loc9_].po = po;
						lx2[_loc3_] = _loc9_;
						ly2[_loc3_] = _loc8_;
						_loc3_ = _loc3_ + 1;
						
						if(cel[_loc8_][_loc9_].win && po < _loc7_){
							_loc7_ = po;
						}
					}
				}
				_loc1_ = _loc1_ + 1;
			}
		_loc2_ = _loc2_ + 1;
		}
	
		if(_loc3_ == 0){
			break;
		}
      _loc2_ = 0;
      while(_loc2_ < _loc3_)
      {
         lx[_loc2_] = lx2[_loc2_];
         ly[_loc2_] = ly2[_loc2_];
         _loc2_ = _loc2_ + 1;
      }
      _loc12_ = _loc3_;
      po++;
   }
   if(_loc7_ == 999)
   {
      return 0;
   }
   _loc3_ = 0;
   _loc2_ = 0;
   while(_loc2_ < ymax)
   {
      _loc6_ = 0;
      while(_loc6_ < xmax)
      {
         if(cel[_loc2_][_loc6_].po == _loc7_ && cel[_loc2_][_loc6_].win)
         {
            lx[_loc3_] = _loc6_;
            ly[_loc3_] = _loc2_;
            _loc3_ = _loc3_ + 1;
         }
         _loc6_ = _loc6_ + 1;
      }
      _loc2_ = _loc2_ + 1;
   }
   if(_loc3_ == 0)
   {
      return 0;
   }
   _loc11_ = Math.floor(Math.random() * _loc3_);
   _loc5_ = lx[_loc11_];
   _loc4_ = ly[_loc11_];
   var _loc10_ = 0;
   while(_loc10_ < 200)
   {
      _loc3_ = 0;
      _loc1_ = 0;
      while(_loc1_ < 6)
      {
         _loc9_ = !(_loc4_ % 2)?_loc5_ + addx0[_loc1_]:_loc5_ + addx1[_loc1_];
         _loc8_ = _loc4_ + addy0[_loc1_];
         if(cel[_loc8_][_loc9_].stat == 1)
         {
            if(cel[_loc8_][_loc9_].po < cel[_loc4_][_loc5_].po)
            {
               lx[_loc3_] = _loc9_;
               ly[_loc3_] = _loc8_;
               ld[_loc3_] = _loc1_;
               _loc3_ = _loc3_ + 1;
            }
         }
         _loc1_ = _loc1_ + 1;
      }
      if(_loc3_ == 0)
      {
         return 0;
      }
      _loc11_ = Math.floor(Math.random() * _loc3_);
      _loc5_ = lx[_loc11_];
      _loc4_ = ly[_loc11_];
      if(cel[_loc4_][_loc5_].po == 1)
      {
         catx = _loc5_;
         caty = _loc4_;
         catdir = 0;
         _loc1_ = 0;
         while(_loc1_ < 6)
         {
            _loc9_ = !(_loc4_ % 2)?_loc5_ + addx0[_loc1_]:_loc5_ + addx1[_loc1_];
            _loc8_ = _loc4_ + addy0[_loc1_];
            if(cel[_loc8_][_loc9_].po == 0)
            {
               catdir = (_loc1_ + 3) % 6;
            }
            _loc1_ = _loc1_ + 1;
         }
         return 1;
      }
      _loc10_ = _loc10_ + 1;
   }
   return 0;
}

function rand_move(){
	var _loc6_ = catx;
	var _loc5_ = caty;
	var _loc2_ = 0;
	var _loc1_ = 0;
	
	//stat={ 0:out ,1:empty ,2:chess }
	//mc={ 2:cat ,3:empty , 4:chess ,default:["_visible"=false]}
	//貓咪先走獲勝條件
	while(_loc1_ < 6){
		var _loc4_ = !(_loc5_ % 2)?_loc6_ + addx0[_loc1_]:_loc6_ + addx1[_loc1_];
		var _loc3_ = _loc5_ + addy0[_loc1_];
		
		if(cel[_loc3_][_loc4_].stat == 1){
			lx[_loc2_] = _loc4_;
			ly[_loc2_] = _loc3_;
			ld[_loc2_] = _loc1_;
			_loc2_ = _loc2_ + 1;
		}
		_loc1_ = _loc1_ + 1;
	}
	
	//cat no land can walk
	if(_loc2_ == 0){
		return 0;
	}
	
	var _loc7_ = Math.floor(Math.random() * _loc2_);
	catx = lx[_loc7_];
	caty = ly[_loc7_];
	catdir = ld[_loc7_];
	
	//cat go
	return 1;
}

//scripts\DefineSprite_33\frame_1\DoAction.as
function cat_position(){
	mc = eval("mcCelLayer.mc_" + caty + "_" + catx);
	mcCat._x = mc._x;
	mcCat._y = mc._y;
	mcCat._visible = true;
}

//READ ME
//stat={ 0:out ,1:empty ,2:chess }
//mc={ 2:cat ,3:empty , 4:chess ,default:["_visible"=false]}
function all_disable(){
	var i;
	var j;
	i = 0;
	while(i < ymax){
	j = 0;
		while(j < xmax{
			if(cel[i][j].stat == 1){
				var mc = eval("mcCelLayer.mc_" + i + "_" + j);
				mc.gotoAndStop(2);
			}
			j++;
		}
		i++;
	}
}
//add "mc" animation to map
function all_enable(){
   var i;
   var j;
   i = 0;
   while(i < ymax){
      j = 0;
      while(j < xmax){
		var mc = eval("mcCelLayer.mc_" + i + "_" + j);
		
		//stat={ 0:out ,1:empty ,2:chess }
		//mc={ 2:cat ,3:empty , 4:chess ,default:["_visible"=false]}
		if(cel[i][j].stat == 1){
			if(j == catx && i == caty){
				mc.gotoAndStop(2);
			}
			else{
				mc.gotoAndStop(3);
			}
			
			mc._visible = true;
		}
		
		if(cel[i][j].stat == 2){
			mc.gotoAndStop(4);
			mc._visible = true;
		}
		j++;
      }
      i++;
   }
}

addx0 = [1,0,-1,-1,-1,0];
addy0 = [0,1,1,0,-1,-1];
addx1 = [1,1,0,-1,0,1];
addy1 = [0,1,1,0,-1,-1];
xmax = 15;
ymax = 15;
cel = new Array();
i = 0;

//create map 2D array(15x15)
//set map as 0
while(i < ymax)
{
	cel[i] = new Array();
	j = 0;
	
	while(j < xmax)
	{
		cel[i][j] = new Object();
		cel[i][j].stat = 0;
		cel[i][j].win = 0;
		j++;
	}
	i++;
}

//cat init map middle
catx = Math.floor(xmax / 2);
caty = Math.floor(ymax / 2);
cel[caty][catx].stat = 1;
lx = new Array();
ly = new Array();
ld = new Array();
lx[0] = catx;
ly[0] = caty;
lmax = 1;
lx2 = new Array();
ly2 = new Array();
i = 2;

//set map 2D array(11x11) as chess
//position is 2~13
while(i < ymax - 2)
{
   j = 2;
   while(j < xmax - 2)
   {
      cel[i][j].stat = 1;//empty
      j++;
   }
   i++;
}

//set random map as chess 
loop = 0;//chess number 
while(loop < 20)
{
   rx = Math.floor(Math.random() * xmax);
   ry = Math.floor(Math.random() * ymax);
   if(rx != catx && ry != caty)
   {
      if(cel[ry][rx].stat == 1)//empty
      {
         cel[ry][rx].stat = 2;//chess
      }
   }
   loop++;
}

/*if(chess neighber polygon is empty){
*set cel.win=1;	
*}
*/
i = 0;
while(i < ymax){
	j = 0;
	while(j < xmax{
		if(cel[i][j].stat == 1){
			k = 0;
			while(k < 6){
				//even row? column+ addx0[k]: column + addx1[k];
				var nx = !(i % 2)?j + addx0[k]:j + addx1[k];
				var ny = i + addy0[k];
				
				if(cel[ny][nx].stat == 0){
					cel[i][j].win = 1;
				}
				k++;
			}
		}
		j++;
	}
	i++;
}

w = 34;
h = 26;
opx = (- xmax - 1) * w / 2;
opy = (- ymax - 1) * h / 2;
c = 0;
i = 0;
//README
while(i < ymax)
{
   j = 0;
   while(j < xmax)
   {
      mcName = "mc_" + i + "_" + j;
      mcCelLayer.attachMovie("mcCelOrg",mcName,c);
      mc = eval("mcCelLayer." + mcName);
      mc._x = opx + j * w;
      if(i % 2)
      {
         mc._x = mc._x + w / 4;
      }
      else
      {
         mc._x = mc._x - w / 4;
      }
      mc._y = opy + i * h;
      mc._visible = false;
      c++;
      j++;
   }
   i++;
}