const GENTSE_FEESTEN_API = 'https://www.pgm.gent/data/gentsefeesten/events_500.json';

(()=>{
    const prog = {
        initialise(){
            this.cacheElements();
            this.buildUI();
            this.registerListeners();
            this.getDataForGrid();
        },
        cacheElements(){
            this.$top = document.querySelector('.program__section--top');
            this.$tagIcon = document.querySelector('.js__tag__button');
            this.$tagImage = document.querySelector('.js__tag__image');
            this.$tagText = document.querySelector('.filter__text__tag');
            this.$mapIcon = document.querySelector('.js__map__button');
            this.$mapImage = document.querySelector('.js__map__image');
            this.$mapText = document.querySelector('.filter__text__map');
            this.$timeIcon =  document.querySelector('.js__time__button');
            this.$timeImage = document.querySelector('.js__time__image');
            this.$timeText = document.querySelector('.filter__text__time');
            this.$balloonIcon = document.querySelector('.js__balloon__button');
            this.$balloonImage = document.querySelector('.js__balloon__image');
            this.$balloonText = document.querySelector('.filter__text__balloon');
            this.$gridIcon = document.querySelector('.js__toggle__grid');
            this.$gridImage = document.querySelector('.js__toggle__grid__image');
            this.$listIcon = document.querySelector('.js__toggle__list');
            this.$listImage = document.querySelector('.js__toggle__list__image');
            /* this.$filterSection = document.querySelector('.prog__sifted__cat'); */
            this.$catFilter = document.querySelector('.prog__filter__cat__list');
            this.$timesFilter = document.querySelector('.prog__filter__times__list');
            this.$mapFilter = document.querySelector('.prog__filter__map__list');
            this.$balloonFilter = document.querySelector('.prog__filter__balloon__list');
            this.$showGrid = document.querySelector('.prog__sifted__cat');
            this.$showList = document.querySelector('.prog__sifted__listed');
            this.$list = document.querySelector('.prog__sifted__listed');
/*             this.$cat = document.querySelectorAll('.filter__button');
            this.$catimg = document.querySelectorAll('.filter__thrucat__image'); */
        },
        buildUI(){
            var that = this;
            this.$top.innerHTML = this.generateHTMLForTop();
            /* this.$filterSection.innerHTML = this.generateHTMLForFilterSection(); */

        },
        registerListeners(){
            var that = this;
            this.$tagIcon.addEventListener('click', function() {
                this.style.background = "black"; that.$mapIcon.style.background = "white";  that.$timeIcon.style.background = "white"; that.$balloonIcon.style.background = "white"; that.$mapImage.setAttribute('fill', 'black'); that.$timeImage.setAttribute('fill', 'black'); that.$balloonImage.setAttribute('fill', 'black'); that.$tagImage.setAttribute('fill', 'white'); that.$tagText.style.color = "white"; that.$mapText.style.color  = "inherit"; that.$timeText.style.color  = "inherit"; that.$balloonText.style.color  = "inherit"; that.$timesFilter.style.display = "none"; that.$catFilter.style.display = "flex"; that.$mapFilter.style.display = "none"; that.$balloonFilter.style.display = "none"
            })
            this.$mapIcon.addEventListener('click', function() {
                this.style.background = "black"; that.$tagIcon.style.background = "white";  that.$timeIcon.style.background = "white"; that.$balloonIcon.style.background = "white"; that.$tagImage.setAttribute('fill', 'black'); that.$timeImage.setAttribute('fill', 'black'); that.$balloonImage.setAttribute('fill', 'black'); that.$mapImage.setAttribute('fill', 'white'); that.$mapText.style.color  = "white"; that.$tagText.style.color  = "inherit"; that.$timeText.style.color  = "inherit"; that.$balloonText.style.color  = "inherit"; that.$timesFilter.style.display = "none"; that.$catFilter.style.display = "none"; that.$mapFilter.style.display = "flex"; that.$balloonFilter.style.display = "none"
            })
            this.$timeIcon.addEventListener('click', function() {
                this.style.background = "black"; that.$mapIcon.style.background = "white";  that.$tagIcon.style.background = "white"; that.$balloonIcon.style.background = "white"; that.$mapImage.setAttribute('fill', 'black'); that.$tagImage.setAttribute('fill', 'black'); that.$balloonImage.setAttribute('fill', 'black'); that.$timeImage.setAttribute('fill', 'white'); that.$timeText.style.color  = "white"; that.$mapText.style.color  = "inherit"; that.$tagText.style.color  = "inherit"; that.$balloonText.style.color  = "inherit"; that.$catFilter.style.display = "none"; that.$timesFilter.style.display = "flex"; that.$mapFilter.style.display = "none"; that.$balloonFilter.style.display = "none"
            })
            this.$balloonIcon.addEventListener('click', function() {
                this.style.background = "black"; that.$mapIcon.style.background = "white";  that.$timeIcon.style.background = "white"; that.$tagIcon.style.background = "white"; that.$mapImage.setAttribute('fill', 'black'); that.$timeImage.setAttribute('fill', 'black'); that.$tagImage.setAttribute('fill', 'black'); that.$balloonImage.setAttribute('fill', 'white'); that.$balloonText.style.color  = "white"; that.$mapText.style.color  = "inherit"; that.$timeText.style.color  = "inherit"; that.$tagText.style.color  = "inherit"; that.$catFilter.style.display = "none"; that.$timesFilter.style.display = "none"; that.$mapFilter.style.display = "none"; that.$balloonFilter.style.display = "flex"
            })
            this.$gridIcon.addEventListener('click', function() {
                this.style.background = "black"; that.$listIcon.style.background = "white"; that.$listImage.setAttribute('fill', 'black'); that.$gridImage.setAttribute('fill', 'white'); that.$showGrid.style.display = "flex"; that.$showList.style.display = "none";
            })
            this.$listIcon.addEventListener('click', function() {
                this.style.background = "black"; that.$gridIcon.style.background = "white"; that.$gridImage.setAttribute('fill', 'black'); that.$listImage.setAttribute('fill', 'white'); that.$showGrid.style.display = "none"; that.$showList.style.display = "block";
            })
        },
        generateHTMLForTop() {
            let tempStr = "";
            shuffledArray = this.randomizer(carr__prog);
            for (i = 0; i < 3; i++) {
                n = shuffledArray[i];
                tempStr += `<a href="#" class="article__link top__article__link"><article class="top__article"><figure class="article__figure top__article__figure"><div class="article__container top__article__container"><img class="article__image top__article__image" src=${this.placeHolder(n, "photo")} alt="event_image"/></div><figcaption class="top__article__figcaption">${this.placeHolder(n, "date")}&nbsp;&nbsp;<span class="top__article__figcap__span">${this.placeHolder(n, "time")}</span></figcaption></figure><div class="article__titles"><h1 class="top__article__title">${this.placeHolder(n, "title")}</h1><h2 class="top__article__subtitle">${this.placeHolder(n, "subtitle")}</h2></div></article></a>`
            }
            return tempStr;
        },
/*         generateHTMLForFilterSection() {
            let tempStr = "";
            shuffledArray = this.randomizer(performances);
            for (i = 0; i < (performances.length) ; i++) {
                n = shuffledArray[i];
                tempStr += `<a href="./detail.html" class="article__link top__article__link"><article class="top__article"><figure class="article__figure top__article__figure"><div class="article__container top__article__container"><img class="article__image top__article__image" src=${this.placeHolding(n, "photo")} alt="event_image"/></div><figcaption class="top__article__figcaption">${this.placeHolding(n, "date")}&nbsp;&nbsp;<span class="top__article__figcap__span">${this.placeHolding(n, "time")}</span></figcaption></figure><div class="article__titles"><h1 class="top__article__title">${this.placeHolding(n, "title")}</h1><h2 class="top__article__subtitle">${this.placeHolding(n, "subtitle")}</h2></div></article></a>`
            }
            return tempStr;
        }, */
        placeHolder(index, prop) {
            if (prop == "photo") {
                if (carr__prog[index][prop]) {return carr__prog[index][prop]
                } else {return pH[index]}
            } else {
                if (carr__prog[index][prop]) {return carr__prog[index][prop]
                } else {return ""};
            }
        },
/*         placeHolding (index, prop) {
            if (prop == "photo") {
                if (performances[index][prop]) {return performances[index][prop]
                } else {return pH[index]}
            } else {
                if (performances[index][prop]) {return performances[index][prop]
                } else {return ""};
            }
        }, */
        randomizer(array) {
            var i = array.length;
            arr = [];
        
            while (i--) {
                arr.push(i);
            }

            arr.sort(() => Math.random() - 0.5)
            return arr
        },
       /*  generateHTMLForListSection() {
            let tempStr = "";
            for (i = 0; i < (performances.length) ; i++) {
                tempStr += `<a href="./detail.html" class="list__link"><div class="prog__sifted__listed__wrapper"><div class="prog__sifted__listed__container"><div class="prog__sifted__start"><p class="listed__time__text">${performances[i].date}</p><p class="listed__event__text">${performances[i].title}</p></div><p class="listed__place__text">${performances[i].subtitle}</p></div></div></a>`    
            }
            return tempStr;
        }, */
        getDataForGrid(){
            getJSON(GENTSE_FEESTEN_API, 
                (data) => {
                    let tempStr = '';
                    data.forEach((event, index) => {
                        pass = false;
                        event.category.forEach(el => {if (el == 'Circus') {pass=true}})
                        if (event.image && pass) {/* event.category.forEach(el => {if (el == 'Circus') { */ /* console.log(`category: ${event.category[0]}`); */ /* console.log(`eentje: ${event.image.thumb}`); */ /* console.log(index) */
                            tempStr += `<a href="./detail.html" class="article__link top__article__link"><article class="top__article"><figure class="article__figure top__article__figure"><div class="article__container top__article__container"><img class="article__image top__article__image" src=${event.image.full} alt="event_image"/></div><figcaption class="top__article__figcaption">${event.start}&nbsp;&nbsp;<span class="top__article__figcap__span"></span></figcaption></figure><div class="article__titles"><h1 class="top__article__title">${event.title}</h1><h2 class="top__article__subtitle">${event.location}</h2></div></article></a>`
                        /* }}); */}});
                this.$showGrid.innerHTML = tempStr;      
            },
            (error) => {
                console.log(error);
            });
        }
};
    prog.initialise();
})();