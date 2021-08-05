(()=>{
    const index = {
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
            this.$popup = document.querySelector('.cookies');
            this.$cookies = document.querySelector('.cookies__allow');
            this.$top = document.querySelector('.index__section--top');
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
            this.$top.innerHTML = this.generateHTMLForTop()
            
        },
        registerListeners(){
            var that = this;
            /* this.$cookies.addEventListener('click', function() {that.$popup.style.display = "none"}); */
            this.$carright.addEventListener('click', function() { (that.y++); clearInterval(that.reset); that.intervalPhotos(); if (that.y > 0) {that.$carrone.src = `${photos[that.y%10]}`; that.$carrtwo.src = `${photos[((that.y + 1)%10)]}`} else {that.$carrone.src = `${photos[(10 + (that.y)%10)%10]}`; that.$carrtwo.src = `${photos[(11 + ((that.y)%10))%10]}`}; that.$carr.animate([{ transform: 'translateX(-100%)' }, {transform: 'translateX(0)'}], {duration: 1000, fill: 'forwards', direction: 'reverse'}); if (that.y < 0) {if ((that.y)%10) {that.$carrnumber.innerHTML = (11 + (that.y)%10)} else {that.$carrnumber.innerHTML = (1 + (that.y)%10)}} else {if ((that.y + 1)%10) {that.$carrnumber.innerHTML = (that.y + 1)%10} else {that.$carrnumber.innerHTML = ((that.y + 1)%10)+10}}});
            this.$carleft.addEventListener('click', function() { clearInterval(that.reset); that.intervalPhotos(); if (that.y > 0) {that.$carrone.src = `${photos[that.y%10]}`; that.$carrtwo.src = `${photos[((that.y + 1)%10)]}`} else {that.$carrone.src = `${photos[(10 + (that.y)%10)%10]}`; that.$carrtwo.src = `${photos[(11 + ((that.y)%10))%10]}`}; that.$carr.animate([{ transform: 'translateX(-100%)' }, { transform: 'translateX(0)'}], {duration: 1000, fill: 'forwards',});(that.y--); if (that.y < 0) {if ((that.y)%10) {that.$carrnumber.innerHTML = (11 + (that.y)%10)} else {that.$carrnumber.innerHTML = (1 + (that.y)%10)}} else {if ((that.y + 1)%10) {that.$carrnumber.innerHTML = (that.y + 1)%10} else {that.$carrnumber.innerHTML = ((that.y + 1)%10)+10}}});
            this.$tweetone.addEventListener('click', function() {that.x = 0; clearInterval(that.restart); that.intervalTweets(); that.$tweet.innerHTML = `<p class="bottom__maintweet">${tweets[0].maintweet}<span class="bottom__tweetinfo">${tweets[0].hashtags}</span></p><p class="bottom__tweeter"><span class="bottom__tweetinfo">${tweets[0].tweetname}</span>${tweets[0].tweettime}</p>`; this.style.background = "black"; that.$tweettwo.style.background = "#e9e9e9"; that.$tweetthree.style.background = "#e9e9e9";});
            this.$tweettwo.addEventListener('click', function() {that.x = 1; clearInterval(that.restart); that.intervalTweets(); that.$tweet.innerHTML = `<p class="bottom__maintweet">${tweets[1].maintweet}<span class="bottom__tweetinfo">${tweets[1].hashtags}</span></p><p class="bottom__tweeter"><span class="bottom__tweetinfo">${tweets[1].tweetname}</span>${tweets[1].tweettime}</p>`;this.style.background = "black"; that.$tweetone.style.background = "#e9e9e9"; that.$tweetthree.style.background = "#e9e9e9";});
            this.$tweetthree.addEventListener('click', function() {that.x = 2; clearInterval(that.restart); that.intervalTweets(); that.$tweet.innerHTML = `<p class="bottom__maintweet">${tweets[2].maintweet}<span class="bottom__tweetinfo">${tweets[2].hashtags}</span></p><p class="bottom__tweeter"><span class="bottom__tweetinfo">${tweets[2].tweetname}</span>${tweets[2].tweettime}</p>`;this.style.background = "black"; that.$tweetone.style.background = "#e9e9e9"; that.$tweettwo.style.background = "#e9e9e9";});
        },
        generateHTMLForTop() {
            let tempStr = "";
            shuffledArray = this.randomizer(carr);
            for (i = 0; i < 3; i++) {
                n = shuffledArray[i];
                tempStr += `<a href="#" class="article__link top__article__link"><article class="top__article"><figure class="article__figure"><div class="article__container top__article__container"><img class="article__image" src=${this.placeHolder(n, "photo")} alt="event_image"/></div><figcaption class="top__article__figcaption">${this.placeHolder(n, "date")}&nbsp;&nbsp;<span class="top__article__figcap__span">${this.placeHolder(n, "time")}</span></figcaption></figure><div class="article__titles"><h1 class="top__article__title">${this.placeHolder(n, "title")}</h1><h2 class="top__article__subtitle">${this.placeHolder(n, "subtitle")}</h2></div></article></a>`
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
            this.restart = setInterval(function() {(that.x++); that.$tweet.innerHTML = `<p class="bottom__maintweet">${tweets[(that.x)%3].maintweet}<span class="bottom__tweetinfo">${tweets[(that.x)%3].hashtags}</span></p><p class="bottom__tweeter"><span class="bottom__tweetinfo">${tweets[(that.x)%3].tweetname}</span>${tweets[(that.x)%3].tweettime}</p>`; if (((that.x)% 3) == 0) {that.$tweetone.style.background = "black"; that.$tweettwo.style.background = "#e9e9e9"; that.$tweetthree.style.background = "#e9e9e9"}; if (((that.x)% 3) == 1) {that.$tweettwo.style.background = "black"; that.$tweetone.style.background = "#e9e9e9"; that.$tweetthree.style.background = "#e9e9e9"}; if (((that.x)% 3) == 2) {that.$tweetthree.style.background = "black"; that.$tweettwo.style.background = "#e9e9e9"; that.$tweetone.style.background = "#e9e9e9"};}, 7000)
        },   
    };
    index.initialise();
})();