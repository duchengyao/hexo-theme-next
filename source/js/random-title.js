  //随机显示TITLE
  var til = new Array(5);
  til[0] = "Why the fuck are you looking at me?"
  til[1] = "他刚干完无耻勾当，转身就夹紧双腿装处女，一脸冰清玉洁相，然后指责我们这些丫鬟不好好做人，拿着主子的钱跑出去当婊子"
  til[2] = "谄媚者还不如奴才"
  til[3] = "We are Anonymous"
  til[4] = "What we've got here is failure to communicate."
  til[5] = "And the wars go on with brainwashed pride "
  til[6] = "I went numb when I learned to see."
  til[7] = "It feeds the rich while it buries the poor"
  til[8] = "我完全不能理解，別人為了相互接近而顯露的笑容"
  til[9] = "We are Legion"
  til[10] = "We do not forgive"
  til[11] = "We do not forget"
  til[12] = "Expect us."
  til[13] = "for the love of God and our human rights"
  til[14] = "人们去旅行应该是为了获得安慰与力量，受到陌生世界的治愈"
  til[15] = "许多人的所谓爱，表面上是非常刚强、坚韧，事实上却是异常地懦弱、柔萎；吹了气的勇气，不过是一层糖衣"
  til[16] = "你是我温暖的手套，冰冷的啤酒，带着太阳光气息的衬衫，日复一日的梦想"
  til[17] = "在这条没有行人的路上，永远年轻，永远的热泪盈眶"
  til[18] = "平静，孤独，快乐，幸福"
  til[19] = "你之所以看不见黑暗，是因为有人拼命把它挡在你看不见的地方"
  til[20] = "酷炫的产品，碉堡的创始人外加模棱两可的技术"
  til[21] = "在虚荣与寂寞的海，他们一天没靠岸，就一天不会停止这场起伏不息的潮汐 "
  til[22] = "不知道为什么，我就想一事无成"
  til[23] = "少踩效果器，多弹些音符"
  til[24] = "这样一个冰冷的早晨，谁会把一个孩子说的话当真"
  til[25] = "What have we become, just look what we have done."
  til[26] = "纪念每一个有梦的日子"
  til[27] = "世界在旅程的尽头终结"
  til[28] = "扯着喉咙拼命的嘶吼着又苦涩的压抑着"
  til[29] = "微笑吧，就像我们说好的那样"
 
  var indextitle = Math.floor(Math.random() * til.length);      //获取一个随机整数
  onload=function chaTitle() {
      var curTitle=til[indextitle];                             //获取数组中的指定项
      window.document.title+=" - "+curTitle;                  //更改当前页的标题
  }