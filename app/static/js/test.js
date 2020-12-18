(()=>{
    const prog = {
        initialise(){
            this.cacheElements();
            this.buildUI();
            this.registerListeners();
        },
        cacheElements(){
            this.$filterSection = document.querySelector('.prog__sifted__cat');
        },
        buildUI(){
            var that = this;
            this.$filterSection.innerHTML = this.generateHTMLForFilterSection()
        },
        registerListeners(){
            var that = this;
        },
        generateHTMLForFilterSection() {
            let tempStr = "";
            shuffledArray = this.randomizer(performances);
            for (i = 0; i < (performances.length) ; i++) {
                n = shuffledArray[i];
                tempStr += `<a href="#" class="article__link top__article__link"><article class="top__article"><figure class="article__figure top__article__figure"><div class="article__container top__article__container"><img class="article__image top__article__image" src=${this.placeHolder(n, "photo")} alt="event_image"/></div><figcaption class="top__article__figcaption">${this.placeHolder(n, "date")}&nbsp;&nbsp;<span class="top__article__figcap__span">${this.placeHolder(n, "time")}</span></figcaption></figure><div class="article__titles"><h1 class="top__article__title">${this.placeHolder(n, "title")}</h1><h2 class="top__article__subtitle">${this.placeHolder(n, "subtitle")}</h2></div></article></a>`
            }
            return tempStr;
        },
        placeHolder(index, prop) {
            if (prop == "photo") {
                if (performances[index][prop]) {return performances[index][prop]
                } else {return pH[index]}
            } else {
                if (performances[index][prop]) {return performances[index][prop]
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
};
    prog.initialise();
})();