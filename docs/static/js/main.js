(()=>{
    const festival = {
        initialise(){
            this.cacheElements();
            this.buildUI();
            this.registerListeners();
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
            this.$day = document.querySelector('.nav__dates__main');
            this.$fullday = document.querySelector('.menu--hidden__dates__list');
            this.$banner = document.querySelector('.nav__banner');
            this.$largeDay = document.querySelector('.nav--side__dates')
            
        },
        buildUI(){
            var that = this;
            if (this.$day) {this.$day.innerHTML = this.getDates(1)};
            if (this.$largeDay) {this.$largeDay.innerHTML = this.getDates(2)};
            this.$fullday.innerHTML = this.getDates(3);
            this.$banner.style.backgroundImage = `url(${this.getBanner()})`;
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
        },
        getDates(sace) {
            let tempStr = ""
            days.forEach(el => {d = new Date(el);          /* }) einde  */
            switch (d.getDay()) {
                case 0:
                    day = (sace == 1 || sace == 2) ? 'Zo' : 'Zondag';
                    break;
                case 1:
                    day = (sace == 1 || sace == 2) ? 'Ma' : 'Maandag';
                    break;
                case 2:
                    day = (sace == 1 || sace == 2) ? 'Di' : 'Dinsdag';
                    break;
                case 3:
                    day = (sace == 1 || sace == 2) ? 'Wo' : 'Woensdag';
                    break;
                case 4:
                    day = (sace == 1 || sace == 2) ? 'Do' : 'Donderdag';
                    break;
                case 5:
                    day = (sace == 1 || sace == 2) ? 'Vr' : 'Vrijdag';
                    break;
                case 6:
                    day = (sace == 1 || sace == 2) ? 'Za' : 'Zaterdag';
                  };
            switch (d.getMonth()) {
                case 0:
                    month = (sace == 1 || sace == 2) ? 'Jan' : 'Januari';
                    break;
                case 1:
                    month = (sace == 1 || sace == 2) ? 'Feb' : 'Februari';
                    break;
                case 2:
                    month = (sace == 1 || sace == 2) ? 'Mar' : 'March';
                    break;
                case 3:
                    month = (sace == 1 || sace == 2) ? 'Apr' : 'April';
                    break;
                case 4:
                    month = 'May';
                    break;
                case 5:
                    month = (sace == 1 || sace == 2) ? 'Jun' : 'June'
                    break;
                case 6:
                    month = (sace == 1 || sace == 2) ? 'Jul' : 'Juli'
                    break;
                case 7:
                    month = (sace == 1 || sace == 2) ? 'Aug' : 'Augustus'
                    break;
                case 8:
                    month = (sace == 1 || sace == 2) ? 'Sep' : 'September'
                    break;
                case 9:
                    month = (sace == 1 || sace == 2) ? 'Oct' : 'October'
                    break;
                case 10:
                    month = (sace == 1 || sace == 2) ? 'Nov' : 'November'
                    break;
                case 11:
                    month = (sace == 1 || sace == 2) ? 'Dec' : 'December'
                    break;
                  }
            if (sace !== 3) {tempStr += `<a class=${sace == 2 ? "nav__date__link" : "date__link"} href="./programma.html?day=${d.getDate()}"><div id=${d.getDate()} class=${sace == 1 ? "nav__date" : "nav--side__date"}><p class="nav__date__text">${day}<br/><span class="nav__date__span">${d.getDate()} ${month}</span></p></div></a>`}
            else {tempStr += `<li class="nav__menu__text menu--hidden__dates__listitem"><a class="nav__hidden__date" href="./programma.html?day=${d.getDate()}">${day} ${d.getDate()} ${month}</a></li>`}})
            return tempStr;
            },
            getBanner() {
                num = Math.floor(Math.random() * Math.floor(9))
                return banner[num];
            },
    };
    festival.initialise();
})();