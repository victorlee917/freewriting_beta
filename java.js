
////////////////// 메인 부분 데이나잇

var Body = {
  setColor:function (color){
    document.querySelector('.title').style.color =
    color;
    document.querySelector('.quote').style.color =
    color;
  },
  setBackgroundcolor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function nightDayHandler(self){
    if(self.alt === "night_mode"){
      Body.setBackgroundcolor('#212122');
      Body.setColor('white');
      self.alt = "day_mode";
      self.src = "sun.png";
      document.querySelector('.quote').style.fontWeight="100";
      document.querySelector('.beta').style.color="#FFFFC2";
      document.querySelector('.aboutfw').style.color="#FFFFC2";
      document.querySelector('.min3').style.backgroundColor="#FDFD96";
      document.querySelector('.min5').style.backgroundColor="#FFEF00";
      document.querySelector('.min10').style.backgroundColor="#FEDF00";
      localStorage.setItem('state', 'night')

    }
    else{
      Body.setBackgroundcolor('white');
      Body.setColor('black');
      self.alt = "night_mode";
      self.src = "sleep-mode.png";
      document.querySelector('.quote').style.fontWeight="400";
      document.querySelector('.beta').style.color="#29AB87";
      document.querySelector('.aboutfw').style.color="#29AB87";
      document.querySelector('.min3').style.backgroundColor="#DCF8C6";
      document.querySelector('.min5').style.backgroundColor="#25D366";
      document.querySelector('.min10').style.backgroundColor="#128C7E";
      localStorage.setItem('state', 'day')
    }
    }

////////////////// 소개 부분 데이나 ///

var Body2 = {
  setColor2:function (color){
    document.querySelector('.p1').style.color =
    color;
  },
  setBackgroundcolor2:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function nightDayHandlerr(self){
    if(self.alt === "night_mode"){
      Body2.setBackgroundcolor2('#212122');
      Body2.setColor2('#d3d3d3');
      self.alt = "day_mode";
      self.src = "sun.png";
      document.querySelector('.title2').style.color = "#f2f2f2";
      document.querySelector('.p1').style.fontWeight="100";
      document.querySelector('.important').style.fontWeight="600";
      document.querySelector('.important').style.color="#FFFFC2";
      document.querySelector('.back').style.color="white";
      localStorage.setItem('state', 'night')

    }
    else{
      Body2.setBackgroundcolor2('white');
      Body2.setColor2('black');
      self.alt = "night_mode";
      self.src = "sleep-mode.png";
      document.querySelector('.title2').style.color = "black";
      document.querySelector('.p1').style.fontWeight="300";
      document.querySelector('.important').style.fontWeight="700";
      document.querySelector('.important').style.color="#29AB87";
      document.querySelector('.back').style.color="black";
      localStorage.setItem('state', 'day')
    }
    }

/////////////////// 텍스트 부분 데이나잇 ///

var Body3 = {
  setColor2:function (color){
    document.querySelector('.boxT').style.color =
    color;
  },
  setBackgroundcolor2:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function nightDayHandlerrr(self){
    if(self.alt === "night_mode"){
      Body3.setBackgroundcolor2('#212122');
      Body3.setColor2('white');
      self.alt = "day_mode" ;
      self.src = "sun.png";
      document.querySelector('.boxT').style.caretColor="#FFFFC2";
      document.querySelector('.left_sec').style.color="#FFFFC2";
      document.querySelector('.boxT').focus()
      localStorage.setItem('state', 'night')
    }
    else{
      Body3.setBackgroundcolor2('white');
      Body3.setColor2('black');
      self.alt = "night_mode";
      self.src = "sleep-mode.png";
      document.querySelector('.boxT').style.caretColor="#29AB87";
      document.querySelector('.left_sec').style.color="#29AB87";
      document.querySelector('.boxT').focus()
      localStorage.setItem('state', 'day')
    }
    }

/////////////////// 기타 ///

array3 = function() {
  localStorage.setItem('min', '3')
}

array5 = function() {
  localStorage.setItem('min', '5')
}

array10 = function() {
  localStorage.setItem('min', '7')
}


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var repeat = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            document.querySelector(".left_sec").style.opacity = "0";
            document.querySelector(".left_time").textContent = "완료! 더 쓰고 싶다면 더 써도 좋아요!";
            clearInterval(repeat);
        }
    }, 1000);
}

starter = function() {
  // $('.boxT').attr('placeholder','멈추지 말고 쓰세요!');
  $('html').bind('keydown', function(e){if(e.keyCode == 8 | e.keyCode == 46){return false;}});

  if (document.querySelector('.left_sec').style.opacity == "0.5"){
    display = document.querySelector('.left_sec');
    startTimer(localStorage.getItem('min')*60,display);
    var leftsec = document.querySelector('.left_sec');
    leftsec.style.opacity = 1;
}}
