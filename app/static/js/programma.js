const EVENTS_URL = "https://www.pgm.gent/data/gentsefeesten/events_500.json";
const CATEGORY_URL = "https://www.pgm.gent/data/gentsefeesten/categories.json";

(()=>{
    const prog = {
        initialise(){
            this.fetchCategories();
            this.cacheElements();
            this.buildUI();
            this.registerListeners();
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
            this.$programDisp = document.querySelector('.prog__sifted')
            this.$categories = document.querySelector('.prog__filter__categories');
            this.$selectedDay = document.querySelectorAll('.nav__date')
        },
        buildUI(){
            this.$top.innerHTML = this.generateHTMLForTop();
            Array.from(this.$selectedDay).forEach(el =>  {if (el.getAttribute('id') === this.getURLDay()) {el.setAttribute('id', 'selected')}})
            //Array for hidden dates, don't forget!!
        
        },
        registerListeners(){
            var that = this;
            this.$tagIcon.addEventListener('click', function() {
                this.style.background = "black"; that.$mapIcon.style.background = "white";  that.$timeIcon.style.background = "white"; that.$balloonIcon.style.background = "white"; that.$mapImage.setAttribute('fill', 'black'); that.$timeImage.setAttribute('fill', 'black'); that.$balloonImage.setAttribute('fill', 'black'); that.$tagImage.setAttribute('fill', 'white'); that.$tagText.style.color = "white"; that.$mapText.style.color  = "inherit"; that.$timeText.style.color  = "inherit"; that.$balloonText.style.color  = "inherit"; that.populateHTML("categories")
            })
            this.$mapIcon.addEventListener('click', function() {
                this.style.background = "black"; that.$tagIcon.style.background = "white";  that.$timeIcon.style.background = "white"; that.$balloonIcon.style.background = "white"; that.$tagImage.setAttribute('fill', 'black'); that.$timeImage.setAttribute('fill', 'black'); that.$balloonImage.setAttribute('fill', 'black'); that.$mapImage.setAttribute('fill', 'white'); that.$mapText.style.color  = "white"; that.$tagText.style.color  = "inherit"; that.$timeText.style.color  = "inherit"; that.$balloonText.style.color  = "inherit"; that.populateHTML("organizer")
            })
            this.$timeIcon.addEventListener('click', function() {
                this.style.background = "black"; that.$mapIcon.style.background = "white";  that.$tagIcon.style.background = "white"; that.$balloonIcon.style.background = "white"; that.$mapImage.setAttribute('fill', 'black'); that.$tagImage.setAttribute('fill', 'black'); that.$balloonImage.setAttribute('fill', 'black'); that.$timeImage.setAttribute('fill', 'white'); that.$timeText.style.color  = "white"; that.$mapText.style.color  = "inherit"; that.$tagText.style.color  = "inherit"; that.$balloonText.style.color  = "inherit"; that.populateHTML("start");
            })
            this.$balloonIcon.addEventListener('click', function() {
                this.style.background = "black"; that.$mapIcon.style.background = "white";  that.$timeIcon.style.background = "white"; that.$tagIcon.style.background = "white"; that.$mapImage.setAttribute('fill', 'black'); that.$timeImage.setAttribute('fill', 'black'); that.$tagImage.setAttribute('fill', 'black'); that.$balloonImage.setAttribute('fill', 'white'); that.$balloonText.style.color  = "white"; that.$mapText.style.color  = "inherit"; that.$timeText.style.color  = "inherit"; that.$tagText.style.color  = "inherit"; that.populateHTML("child");
            })
            this.$gridIcon.addEventListener('click', function() {
                this.style.background = "black"; that.$listIcon.style.background = "white"; that.$listImage.setAttribute('fill', 'black'); that.$gridImage.setAttribute('fill', 'white'); Array.from(that.$filteredGrid).forEach(el => {el.style.display = "flex"}); Array.from(that.$filteredList).forEach(el => {el.style.display = "none"}); that.counter(0);
            })
            this.$listIcon.addEventListener('click', function() {
                this.style.background = "black"; that.$gridIcon.style.background = "white"; that.$gridImage.setAttribute('fill', 'black'); that.$listImage.setAttribute('fill', 'white'); Array.from(that.$filteredGrid).forEach(el => {el.style.display = "none"}); Array.from(that.$filteredList).forEach(el => {el.style.display = "block"}); that.counter(1);
            })
        },
        generateHTMLForTop() {
            let tempStr = "";
            shuffledArray = this.randomizer(carr__prog);
            for (i = 0; i < 3; i++) {
                n = shuffledArray[i];
                tempStr += `<a href="#" class="article__link top__article__link"><article class="top__article"><figure class="article__figure"><div class="article__container top__article__container"><img class="article__image" src=${this.placeHolder(n, "photo")} alt="event_image"/></div><figcaption class="top__article__figcaption">${this.placeHolder(n, "date")}&nbsp;&nbsp;<span class="top__article__figcap__span">${this.placeHolder(n, "time")}</span></figcaption></figure><div class="article__titles"><h1 class="top__article__title">${this.placeHolder(n, "title")}</h1><h2 class="top__article__subtitle">${this.placeHolder(n, "subtitle")}</h2></div></article></a>`
            }
            return tempStr;
        },
        placeHolder(index, prop) {
            if (prop == "photo") {
                if (carr__prog[index][prop]) {return carr__prog[index][prop]
                } else {return pH[index]}
            } else {
                if (carr__prog[index][prop]) {return carr__prog[index][prop]
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
        fetchCategories(){
            fetch(CATEGORY_URL)
            .then((response)=> response.json())
            .then((json) => {
                this.categories = json;
                this.fetchEvents();
            })
            .catch((e) => console.log(e));
        },
        fetchEvents(){
            fetch(EVENTS_URL)
            .then((response) => response.json())
            .then((json) => {
                this.events = json;
                this.populateHTML();
            })
            .catch((e) => console.log(e));
        },
        populateHTML(filter = "categories") {
            if (filter == "start") {this.getUniqueList(this.events, "start");}
            else if (filter == "organizer") {this.getUniqueList(this.events, "organizer");}
            else if (filter == "child") {this.filterEvents(this.categories, this.events, "child");}
            else {this.filterEvents(this.categories, this.events, "category")}
        },
        getUniqueList(arr, key) {
            const list = new Set();
            arr.forEach(el => {
                list.add(el[key]);
                    });
            
            filteredArray = Array.from(list);  
            filteredArray.sort((event1, event2) => {return event1.localeCompare(event2)})      
            this.filterEvents(filteredArray, arr, key);        
        },
        filterEvents(arrSmall, arrLarge, key) {
            let tempStrColOne = "";
            let tempStrColTwo = "";
            let index = 0;
            const html = arrSmall.map((filter) => {
                const filteredEvents = arrLarge.filter((event) => {if (event.day == this.getURLDay()) {if (key == "child") {return event.category.indexOf("Kinder- en jeugdprogramma's") > -1 && filter == "Kinder- en jeugdprogramma's"}
                    else {return event[key].indexOf(filter) > -1}}})

                    filteredEvents.sort((event1, event2) => {
                        return event1.start.localeCompare(event2.start);
                    })

                    const gridItems = filteredEvents.map((event) => {
                    return `<a href="./detail.html?day=${event.day}&slug=${event.slug}" class="article__link top__article__link grid__link"><article class="top__article"><figure class="article__figure"><div class="article__container top__article__container"><img class="article__image" src=${event.image ? event.image.full: pH[0]} alt="event_image"/></div><figcaption class="top__article__figcaption">&nbsp;${event.start ? event.start : ''} u.<span class="top__article__figcap__span"></span></figcaption></figure><div class="article__titles"><h1 class="top__article__title">${event.title ? event.title : ''}</h1><h2 class="top__article__subtitle">${event.location ? event.location : ''}</h2></div></article></a>`
                }).join('')

                    const listItems = filteredEvents.map((event) => {
                    return `<a href="./detail.html?day=${event.day}&slug=${event.slug}" class="list__link"><div class="prog__sifted__listed__wrapper"><div class="prog__sifted__listed__container"><div class="prog__sifted__start"><p class="listed__time__text">${event.start ? event.start : ''}</p><p class="listed__event__text">${event.title ? event.title : ''}</p></div><p class="listed__place__text">${event.location ? event.location : ''}</p></div></div></a>`
                }).join('');  


                if (filteredEvents.length > 0 ) {index++; if (index%2) {tempStrColOne += `<li class="filter__cat"><a href="#${filter}" class="filter__cat__link">${filter}</a></li>`} else {tempStrColTwo += `<li class="filter__cat"><a href="#${filter}" class="filter__cat__link">${filter}</a></li>`}; return `<div class="prog__sifted__wrapper"><div class="prog__sifted__header"><h3 class="prog__sifted__title" id="${filter}">${filter}</h3><a href="#top" class="to__top"><img class="to__top__icon" src="./media/chevron-arrow-down--bl.svg" alt="arrow--up" /></a></div><section class="section--top prog__sifted__cat prog__sifted__grid">${gridItems}</section><section class="section--top prog__sifted__cat prog__sifted__list">${listItems}</section></div>`
            }}).join('')
            this.$programDisp.innerHTML = html;
            this.$categories.innerHTML = `<ul class="prog__filter__categories__list prog__filter__cat__list prog__filter__categories__list--one">${tempStrColOne}</ul><ul class="prog__filter__categories__list prog__filter__cat__list prog__filter__categories__list--two">${tempStrColTwo}</ul>`
            this.$filteredList = document.querySelectorAll('.prog__sifted__list');
            this.$filteredGrid = document.querySelectorAll('.prog__sifted__grid');
            if (this.x) {Array.from(this.$filteredGrid).forEach(el => {el.style.display = "none"}); Array.from(this.$filteredList).forEach(el => {el.style.display = "block"})} else {Array.from(this.$filteredGrid).forEach(el => {el.style.display = "flex"}); Array.from(this.$filteredList).forEach(el => {el.style.display = "none"})};
        }, 
        getURLDay() {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const urlDay = params.get('day');
            if (urlDay !== null) {return urlDay};
        },
        counter(num) {
            if (num) {this.x = 1} else {this.x = 0}
        },

};
    prog.initialise();
})();