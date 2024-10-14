const text = "HAPPYYYY 4th MONTHHH OF OURRR 2ND YEAR JOURNEYY OF BEINGGG TOGETHER MYYYYY WIFEYYYY 🥹🫂 anddd moreeee yearrsss too goo myyy lifeee partnerrr 😋💪♾️ firsttt of all i wannnaaa thankkkk youuuu shooooo muchhhhhhhhhhhh meraaaa chotuuuuu shaaaaaaa munnaaaaaa forrr beingg withhh meee forrr makesss meee theee mosttt happiest andd thee speciall personnn onnn earthhh 🫠🫶❤️‍🩹 forrr realll i ammm veryyyyyyyy muchhhhhh blessed youuu haveee youuu byyy myyy sideee myyy small littleeee babyyyyyy 💋🫂 i wannaaa tell youuu that youuu aree soooo muchhh special tooo mee mekoooo pataaa haii meraa munnaaaaaa maiii harrr baaar yehiii boltaaa lekinnnn yawwwrrrrr sachiiii  nothing is more important than youuu even myy life is not important than youuu youuu are myyy someone special 🥹🫂🫵 kabhiiii kissiii keee saaath mekoooo aesaa feeel nhhh huwaaa jooo aaapkeyyy saaath feeel hotaa meraa munnaaaaaa wooo sukooon wooo comfortttt omgggggg forrr reaallll youuuu completesss myyy lifeee myyyyy babyyyyyy 🤍✨ I LOVEEEEEEEE YOUUUUUUUUU MOREEEEE THANNNN YOUUUUU EVERRRR THINKSSSS MYYYYY SWEETIEE 😭🫂♾️ mekoooo nawwwww meraaaa munnaaaaaa aaapkii harrr khushiii keee peeechayy kaa raaaz bannaa haii apkaaa sukooon bannna haii maiii harrr jaghaaaa harrr cheez maii apneyyy bacheyyy saaaath hooon jahaaaaan merayyyy munneyyyy kooo koiii support noiii kareygaaaa maii karlungaa jahannn merayyyy kaaaa koiii saaath noiii degaa wahannn maii dungaaa meraaa munnaaaaaa merayyyy shoulders hainnn apkeyyy liyeeee hii hainn os parrr sarr rhakk kee khoob roo sakhtaaa haii pooriii duniyaaa ki shikayat karaaa kareinn merayyy shaii meraaa munnaaaaaa balkeee mekoooo bhhh meriii galtiii batayaaa kareinnnn meriii jaaaaaaaaan 🥹🫂😋🤌 yehhhh kabeer adhruuu haiii aaapkeyyy bagairrr iskooo aapkeyy saaath orrr aapkeyy pyaaar kii bhutttt zarurattttt haiii meraaa munnaaaaaa 🥺🫂🤌 i wannaaa hold youuu tightly and cryy soo harddd harddd right nowww meraaa bachaaaa 😭🫂❤️‍🩹 i want to stays up all night talkingg with youuu because youu are one i can sacrifice myyy sleep 🥹🫂🫵🫶 i wannaaa fall for youuu again again because myyy lovee for youuu is neverr gonnaaa enddd upp its alwayss increasing moree than moreee than day by day 😘❤️‍🩹♾️ i wantt too protect youuu from all the badd thingss in this world meraaa chotuuuuu shaaaaaaa bachaaaa i wantt youuuu in everyyy condition i onlyyy wants youuuu meraaa bachaaaa 😘🫂🫵🔐💍👉👈  i wanttt youu to stay with mee forever when ever i do something wrong just yell at mee butt don't be stop talking with mee meraa bachaaaa i wantt youu too be successful and happyyy in yourrr lifeee 🥹🫂💪🥰 i always make dua to Allah that make youuu successful and all your problems could disappear and makes youu happyy because seeing youu happyy makess me happyyy myyy januuuuuuu🥹🫂😋👉👈 i want youu to stay with mee at myy worst because youuu are soooo muchhh special too mee youuu are the real inspiration tooo mee i want ussss to being together till our last breath we make ourr bound moree stronger byy marrying each other in Sha Allah in sha Allah 🥹🫂🫠👉👈🔐💍 myyyy babyyyyyy i wannaaa beee yourrrr lasttt theee lasttt boyyyy youuu everrr loveee theee lasttt boyyy youuu everrr huggg orrr kissesss orr dooo thosee thingss 💋🫂🥹🫣👉👈 because youuuu areee onlyyyy girlll i wanttt innn myyy lifeee theee onlyyy girlll i everr loveeee i knowww weee areee too younggg nowww butttt youuu are theee onlyyy girlll i wannaaa beee marryyy withhh anddd haveee kidss 👉👈🫠 because youuu areee perfect girlll forr meee thee wayyy youuu areee thee wayyy youuu makess meee happyyy byyy justtt talkinggggg withhh youuu orr beinggg withhh youuu myyy wholeee freakinggg dayyy becomesss sooo myyy betterrr anddd fulll happiness thattt i can't evennn telll byyy worddss ❤️‍🩹🫶 youuuuu areeee myyyy better half I LOVEEEEE YOUUUUU WITHOUT ANYYY REASONSS MYYYYY BABYYYYY 😘🫂🤌 onceeee aaa veryyyyyyyy veryyyyyyyy happiiiii 2nd monthh of ourrr beinggg together 2nd year journey i wanttt ussssssss to staysss together forever anddd everrr ♾️🔐💍💪 ";

const paragraph = text.split("");
let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    document.querySelector(".textCont").textContent += arr[i];
    i++;
    setTimeout(() => {
      dashOut(arr);
    }, interval(arr[i - 1]) + 90); // Added 100 ms to the existing interval
  }
}

function interval(letter) {
  if (letter === ";" || letter === "." || letter === ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
