(()=>{
    const festival = {
        x: -1,
        y: 0,
        initialise(){
            this.cacheElements();
            this.buildUI();
            this.registerListeners();
            this.intervalPhotos();
            this.intervalTweets();
        },
        cacheElements(){
            this.$menu = document.querySelector('.menu');
            this.$hidden = document.querySelector('.menu--hidden');
            this.$close = document.querySelector('.menu--hidden__close');
            this.$lang = document.querySelector('.nav__lang__arrow');
            this.$arrow = document.querySelector('.nav__lang__arrow__container')
            this.$showLangs = document.querySelector('.nav__lang__list--hidden');
            this.$program = document.querySelector('.menu--hidden__programma');
            this.$dates = document.querySelector('.nav__menu__icon--right');
            this.$showDates = document.querySelector('.menu--hidden__dates');
            this.$day = document.querySelectorAll('.nav__date__text');
            this.$fullday = document.querySelectorAll('.nav__hidden__date');
            this.$banner = document.querySelector('.nav__banner');
            this.$popup = document.querySelector('.cookies');
            this.$cookies = document.querySelector('.cookies__allow');
            this.$top = document.querySelector('.section--top');
            this.$topProg = document.querySelector('.program__section--top')
            this.$carleft = document.querySelector('.carrousel__nav__button__left');
            this.$carright = document.querySelector('.carrousel__nav__button__right');
            this.$carr = document.querySelector('.carrousel__images__container');
            this.$carrnumber = document.querySelector('.carrousel__number');
            this.$carrone = document.querySelector('.image__one');
            this.$carrtwo = document.querySelector('.image__two');
            this.$tweetone = document.querySelector('.twitter__nav__button__one');
            this.$tweettwo = document.querySelector('.twitter__nav__button__two');
            this.$tweetthree = document.querySelector('.twitter__nav__button__three');
            this.$tweet = document.querySelector('.bottom__twitter__tweet');
            
        },
        buildUI(){
            var that = this;
            Array.from(this.$day).forEach((el, index) => {i = index%10; el.innerHTML = that.getDates(i, 1)})
            Array.from(this.$fullday).forEach((el, index) => {i = index%10; el.innerHTML = that.getDates(i, 2)})
            this.$banner.style.backgroundImage = `url(${this.getBanner()})`;
            this.$top.innerHTML = this.generateHTMLForTop();
            this.$topProg.innerHTML = this.generateHTMLForTop();
        },
        registerListeners(){
            var that = this;
            this.$menu.addEventListener('click', function() {that.$hidden.style.display = "block"});
            this.$close.addEventListener('click', function() {that.$hidden.style.display = "none"});
            this.$lang.addEventListener('click', function () {
                if (that.$showLangs.style.display == "block") {that.$showLangs.style.display = "none"; that.$arrow.style.transform = "rotate(360deg)"} else {that.$showLangs.style.display = "block"; that.$arrow.style.transform = "rotate(180deg)"}
            });
            this.$program.addEventListener('click', function () {
                if (that.$showDates.style.display == "block") {that.$showDates.style.display = "none"; that.$dates.style.transform = "rotate(360deg)"} else {that.$showDates.style.display = "block"; that.$dates.style.transform = "rotate(180deg)"}
            });
            this.$cookies.addEventListener('click', function() {that.$popup.style.display = "none"});
            this.$carright.addEventListener('click', function() { (that.y++); clearInterval(that.reset); that.intervalPhotos(); if (that.y > 0) {that.$carrone.src = `${photos[that.y%10]}`; that.$carrtwo.src = `${photos[((that.y + 1)%10)]}`} else {that.$carrone.src = `${photos[(10 + (that.y)%10)%10]}`; that.$carrtwo.src = `${photos[(11 + ((that.y)%10))%10]}`}; that.$carr.animate([{ transform: 'translateX(-100%)' }, {transform: 'translateX(0)'}], {duration: 1000, fill: 'forwards', direction: 'reverse'}); if (that.y < 0) {if ((that.y)%10) {that.$carrnumber.innerHTML = (11 + (that.y)%10)} else {that.$carrnumber.innerHTML = (1 + (that.y)%10)}} else {if ((that.y + 1)%10) {that.$carrnumber.innerHTML = (that.y + 1)%10} else {that.$carrnumber.innerHTML = ((that.y + 1)%10)+10}}});
            this.$carleft.addEventListener('click', function() { clearInterval(that.reset); that.intervalPhotos(); if (that.y > 0) {that.$carrone.src = `${photos[that.y%10]}`; that.$carrtwo.src = `${photos[((that.y + 1)%10)]}`} else {that.$carrone.src = `${photos[(10 + (that.y)%10)%10]}`; that.$carrtwo.src = `${photos[(11 + ((that.y)%10))%10]}`}; that.$carr.animate([{ transform: 'translateX(-100%)' }, { transform: 'translateX(0)'}], {duration: 1000, fill: 'forwards',});(that.y--); if (that.y < 0) {if ((that.y)%10) {that.$carrnumber.innerHTML = (11 + (that.y)%10)} else {that.$carrnumber.innerHTML = (1 + (that.y)%10)}} else {if ((that.y + 1)%10) {that.$carrnumber.innerHTML = (that.y + 1)%10} else {that.$carrnumber.innerHTML = ((that.y + 1)%10)+10}}});
            this.$tweetone.addEventListener('click', function() {that.x = 0; console.log(`click: ${that.x}`); clearInterval(that.restart); that.intervalTweets(); that.$tweet.innerHTML = `<p class="bottom__maintweet">${tweets[0].maintweet}<span class="bottom__tweetinfo">${tweets[0].hashtags}</span></p>
            <p class="bottom__tweeter"><span class="bottom__tweetinfo">${tweets[0].tweetname}</span>${tweets[0].tweettime}</p>`; this.style.background = "black"; that.$tweettwo.style.background = "#e9e9e9"; that.$tweetthree.style.background = "#e9e9e9";});
            this.$tweettwo.addEventListener('click', function() {that.x = 1; console.log(`click: ${that.x}`); clearInterval(that.restart); that.intervalTweets(); that.$tweet.innerHTML = `<p class="bottom__maintweet">${tweets[1].maintweet}<span class="bottom__tweetinfo">${tweets[1].hashtags}</span></p>
            <p class="bottom__tweeter"><span class="bottom__tweetinfo">${tweets[1].tweetname}</span>${tweets[1].tweettime}</p>`;this.style.background = "black"; that.$tweetone.style.background = "#e9e9e9"; that.$tweetthree.style.background = "#e9e9e9";});
            this.$tweetthree.addEventListener('click', function() {that.x = 2; console.log(`click: ${that.x}`); clearInterval(that.restart); that.intervalTweets(); that.$tweet.innerHTML = `<p class="bottom__maintweet">${tweets[2].maintweet}<span class="bottom__tweetinfo">${tweets[2].hashtags}</span></p>
            <p class="bottom__tweeter"><span class="bottom__tweetinfo">${tweets[2].tweetname}</span>${tweets[2].tweettime}</p>`;this.style.background = "black"; that.$tweetone.style.background = "#e9e9e9"; that.$tweettwo.style.background = "#e9e9e9";});
        },
        getDates(index, sace) {
            var d = new Date(days[index])
            switch (d.getDay()) {
                case 0:
                    if (sace == 1) {day = 'Zo'}
                    else {day = 'Zondag'};
                    break;
                case 1:
                    if (sace == 1) {day = 'Ma'}
                    else {day = 'Maandag'};
                    break;
                case 2:
                    if (sace == 1) {day = 'Di'}
                    else {day = 'Dinsdag'};
                    break;
                case 3:
                    if (sace == 1) {day = 'Wo'}
                    else {day = 'Woensdag'};
                    break;
                case 4:
                    if (sace == 1) {day = 'Do'}
                    else {day = 'Donderdag'};
                    break;
                case 5:
                    if (sace == 1) {day = 'Vr'}
                    else {day = 'Vrijdag'};
                    break;
                case 6:
                    if (sace == 1) {day = 'Za'}
                    else {day = 'Zaterdag'};
                  };
            switch (d.getMonth()) {
                case 0:
                    if (sace == 1) {month = 'Jan'}
                    else {month = 'Januari'};
                    break;
                case 1:
                    if (sace == 1) {month = 'Feb'}
                    else {month = 'Februari'};
                    break;
                case 2:
                    if (sace == 1) {month = 'Mar'}
                    else {month = 'Maart'};
                    break;
                case 3:
                    if (sace == 1) {month = 'Apr'}
                    else {month = 'April'};
                    break;
                case 4:
                    if (sace == 1) {month = 'Mei'}
                    else {month = 'Mei'};
                    break;
                case 5:
                    if (sace == 1) {month = 'Jun'}
                    else {month = 'Juni'};
                    break;
                case 6:
                    if (sace == 1) {month = 'Jul'}
                    else {month = 'Juli'};
                    break;
                case 7:
                    if (sace == 1) {month = 'Aug'}
                    else {month = 'Augustus'};
                    break;
                case 8:
                    if (sace == 1) {month = 'Sep'}
                    else {month = 'September'};
                    break;
                case 9:
                    if (sace == 1) {month = 'Okt'}
                    else {month = 'Oktober'};
                    break;
                case 10:
                    if (sace == 1) {month = 'Nov'}
                    else {month = 'November'};
                    break;
                case 11:
                    if (sace == 1) {month = 'Dec'}
                    else {month = 'December'};
                    break;
                  }
            if (sace == 1) {return `${day}<br/><span class="nav__date__span">${d.getDate()} ${month}</span>`}
            else {return `${day} ${d.getDate()} ${month}`}
            },
            getBanner() {
                num = Math.floor(Math.random() * Math.floor(9))
                return banner[num];
            },
            generateHTMLForTop() {
                let tempStr = "";
                shuffledArray = this.randomizer(carr);
                for (i = 0; i < 3; i++) {
                    n = shuffledArray[i];
                    tempStr += `<a href="#" class="article__link top__article__link"><article class="top__article"><figure class="article__figure top__article__figure"><div class="article__container top__article__container"><img class="article__image top__article__image" src=${this.placeHolder(n, "photo")} alt="event_image"/></div><figcaption class="top__article__figcaption">${this.placeHolder(n, "date")}&nbsp;&nbsp;<span class="top__article__figcap__span">${this.placeHolder(n, "time")}</span></figcaption></figure><div class="article__titles"><h1 class="top__article__title">${this.placeHolder(n, "title")}</h1><h2 class="top__article__subtitle">${this.placeHolder(n, "subtitle")}</h2></div></article></a>`
                }
                return tempStr;
            },
            placeHolder(index, prop) {
                if (prop == "photo") {
                    if (carr[index][prop]) {return carr[index][prop]
                    } else {return pH[index]}
                } else {
                    if (carr[index][prop]) {return carr[index][prop]
                    } else {return ""};
                }
            },
            randomizer(array) {
                var i = array.length;
                arr = [];
            
                while (i--) {
                    arr.push(i);
                }
    
                arr.sort(() => Math.random() - 0.5)
                return arr
            },
            intervalPhotos () {
                var that = this;
                this.reset = setInterval(function() {(that.y++); if (that.y > 0) {that.$carrone.src = `${photos[that.y%10]}`; that.$carrtwo.src = `${photos[((that.y + 1)%10)]}`} else {that.$carrone.src = `${photos[(10 + (that.y)%10)%10]}`; that.$carrtwo.src = `${photos[(11 + ((that.y)%10))%10]}`}; that.$carr.animate([{ transform: 'translateX(-100%)' }, {transform: 'translateX(0)'}], {duration: 1000, fill: 'forwards', direction: 'reverse'}); if (that.y < 0) {if ((that.y)%10) {that.$carrnumber.innerHTML = (11 + (that.y)%10)} else {that.$carrnumber.innerHTML = (1 + (that.y)%10)}} else {if ((that.y + 1)%10) {that.$carrnumber.innerHTML = (that.y + 1)%10} else {that.$carrnumber.innerHTML = ((that.y + 1)%10)+10}}}, 5000)
            },
            intervalTweets() {
                var that = this;
                this.restart = setInterval(function() {
                    console.log(`time: ${that.x}`); (that.x++); that.$tweet.innerHTML = `<p class="bottom__maintweet">${tweets[(that.x)%3].maintweet}<span class="bottom__tweetinfo">${tweets[(that.x)%3].hashtags}</span></p>
                    <p class="bottom__tweeter"><span class="bottom__tweetinfo">${tweets[(that.x)%3].tweetname}</span>${tweets[(that.x)%3].tweettime}</p>`; if (((that.x)% 3) == 0) {that.$tweetone.style.background = "black"; that.$tweettwo.style.background = "#e9e9e9"; that.$tweetthree.style.background = "#e9e9e9"}; if (((that.x)% 3) == 1) {that.$tweettwo.style.background = "black"; that.$tweetone.style.background = "#e9e9e9"; that.$tweetthree.style.background = "#e9e9e9"}; if (((that.x)% 3) == 2) {that.$tweetthree.style.background = "black"; that.$tweettwo.style.background = "#e9e9e9"; that.$tweetone.style.background = "#e9e9e9"}; 
                }, 7000)
            }
    };
    festival.initialise();
})();