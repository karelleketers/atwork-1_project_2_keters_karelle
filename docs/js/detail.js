const EVENTS_URL = "https://www.pgm.gent/data/gentsefeesten/events_500.json";

(()=>{
    const prog = {
        initialise(){
            this.cacheElements();
            this.buildUI();
            this.fetchEvents();
        },
        cacheElements(){
            this.$selectedDay = document.querySelectorAll('.nav__date');
            console.log(this.$selectedDay);
            this.$section = document.querySelector('.detail')
        },
        buildUI(){
            Array.from(this.$selectedDay).forEach(el =>  {if (el.getAttribute('id') === this.getURLDay()) {el.setAttribute('id', 'selected')}})
            //Array for hidden dates, don't forget!!
        
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
        populateHTML() {
            const det = this.events.find((event) => {return event.day == this.getURLDay('day') && event.slug == this.getURLDay('slug')})
            let tempStr = '';
            let details = '';
            det.category.map((cat) => {tempStr += `<li class="detail__listitem">
                    <a href="#" class="detail__link">
                            <p class="detail__listitem__text">${cat}</p>
                            <div class="detail__link__hover"></div>
                    </a>
                </li>`}).join('')

                details = `<div class="detail__info__header__top">
                    <h3 class="detail__title">${det.title ? det.title : ''}</h3>
                    <a href ="#" class="detail__location">
                        <figure class="detail__location__figure">
                            <img class="detail__location__icon" src="./media/marker.svg" alt="map icon"/>
                        </figure>
                        <p class="detail__location__text">${det.location ? det.location : ''}</p>
                    </a>
                    <h4 class="detail__datetime">${det.day_of_week ? det.day_of_week : ''} ${det.day ? det.day : ''} juli - ${det.start ? det.start : ''} u. > ${det.end ? det.end : ''} u.</h4> 
                </div>
                <div class="multimedia">
                    <figure class="multimedia__figure">
                        <img class="multimedia__image" src=${det.image ? det.image.full : pH[0]} alt="name"/>
                    </figure>
                </div>
                <div class="detail__info detail__info__side">
                    <p class="detail__text">${det.description ? det.description : ''}</p>
                    <div class="detail__moreinfo__wrapper">
                        <div class="detail__moreinfo">
                            <div class="detail__more">
                                <p class="detail__key detail__key__website">Website:</p>
                                <div class="detail__object detail__link__container">
                                    <a href="#" class="detail__link">
                                        <p class="website__text">${det.url ? det.url : 'website.be'}<span class="detail__figure"><img class="detail__icon" src="./media/external-link.svg" alt="link icon"></span></p>
                                        <div class="detail__link__hover"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="detail__more">
                                <p class="detail__key detail__key__organizer">Organisator:</p>
                                <div class="detail__object">
                                    <a href="#" class="detail__link">
                                        <p class="organizer__text">${det.organizer ? det.organizer : ''}</p>
                                        <div class="detail__link__hover"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="detail__more">
                                <p class="detail__key detail__key__categories">Categoriëen:</p>
                                <ul class="detail__object detail__list">${tempStr}</ul>
                            </div>
                            <div class="detail__more">
                                <p class="detail__key detail__key__price">Prijs:</p>
                                <div class="detail__object">
                                        <p class="price__text detail__moreinfo__price">€5</p>
                                </div>
                            </div>
                            <div class="detail__logos">
                                <div class="detail__accesibility">
                                    ${det.wheelchair__accessible ? `<figure class='detail__accessibility__figure'>
                                    <img class='detail__accesibility__image' src='media/wheelchair.svg' alt='wheelchair icon' />
                                </figure>` : ''}
                                </div>
                                <div class="detail__socials">
                                    <button class="detail__social__button detail__social__button__twitter">
                                        <svg class="detail__social__icon twitter__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                            <path class="detail__social__icon twitter__icon" d="M12.973 24c7.17 0 11.093-5.77 11.093-10.773 0-0.164-0.003-0.328-0.013-0.49 0.765-0.54 1.411-1.19 1.93-1.935l0.017-0.025c-0.653 0.288-1.41 0.498-2.202 0.591l-0.038 0.004c0.801-0.468 1.407-1.197 1.706-2.068l0.008-0.027c-0.714 0.419-1.544 0.739-2.427 0.912l-0.050 0.008c-1.473-1.526-3.942-1.603-5.512-0.172-0.755 0.684-1.228 1.668-1.232 2.761v0.001c0 0.29 0.035 0.58 0.103 0.863-3.134-0.153-6.055-1.59-8.036-3.956-1.032 1.73-0.504 3.942 1.208 5.054-0.65-0.019-1.255-0.192-1.787-0.483l0.021 0.010v0.048c0 1.802 1.307 3.355 3.125 3.712-0.308 0.085-0.662 0.133-1.027 0.133-0.259 0-0.513-0.025-0.758-0.071l0.025 0.004c0.512 1.541 1.975 2.598 3.642 2.63-1.321 1.011-2.996 1.62-4.814 1.62-0.009 0-0.018 0-0.027-0h0.001c-0.31 0-0.62-0.017-0.929-0.053 1.69 1.068 3.747 1.702 5.953 1.702 0.007 0 0.014 0 0.022-0h-0.001"></path>
                                        </svg>
                                    </button>
                                    <button class="detail__social__button detail__social__button__facebook">
                                        <svg class="detail__social__icon facebook__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                            <path class="detail__social__icon facebook__icon" d="M17.49 25v-8.21h2.95l0.44-3.2h-3.39v-2.043c0-0.927 0.276-1.558 1.697-1.558l1.813-0.001v-2.862c-0.766-0.080-1.655-0.126-2.555-0.126-0.030 0-0.061 0-0.091 0h0.005c-2.614 0-4.403 1.491-4.403 4.23v2.36h-2.956v3.2h2.956v8.21h3.535z"></path>
                                        </svg>
                                    </button>
                                    <button class="detail__social__button detail__social__button__pinterest">
                                        <svg class="detail__social__icon pinterest__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                            <path class="detail__social__icon pinterest__icon" d="M8.625 13.486c0 1.396 0.614 3.464 2.234 3.911 0.057 0 0.112 0.057 0.224 0.057 0.392 0 0.615-1.006 0.615-1.286 0-0.335-0.895-1.062-0.895-2.402 0-2.906 2.347-4.917 5.42-4.917 2.627 0 4.582 1.397 4.582 3.911 0 1.9-0.838 5.475-3.464 5.475-0.95 0-1.788-0.67-1.788-1.563 0-1.341 1.006-2.682 1.006-4.079 0-0.838-0.503-1.564-1.509-1.564-1.341 0-2.124 1.396-2.124 2.458 0 0.614 0.057 1.285 0.392 1.844-0.559 2.124-1.62 5.308-1.62 7.487 0 0.671 0.111 1.341 0.167 2.012v0.112l0.168-0.056c1.956-2.459 1.844-2.962 2.738-6.203 0.447 0.838 1.676 1.285 2.682 1.285 4.079 0 5.923-3.688 5.923-7.040 0-3.52-3.297-5.867-6.929-5.867-3.911-0.001-7.822 2.458-7.822 6.425z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="means">
                            <div class="means__container means__container__reservation">
                                <h5 class="bottom__title">Reservatie</h5>
                                <p>Website ${det.organizer ? det.organizer : ''}</p>
                                <p>Dok Noord 4F/202</p>
                                <p>9000 Gent</p>
                                <div class="detail__link__container">
                                    <a href="#" class="detail__link">
                                        <p class="detail__text--bottom">09 000 00 00<span class="detail__figure"><img class="detail__icon" src="./media/phone.svg" alt="phone icon"></span></p>
                                        <div class="detail__link__hover"></div>
                                    </a>
                                </div>
                                <div class="detail__link__container">
                                    <a href="#" class="detail__link">
                                        <p class="detail__text--bottom">email@email.be<span class="detail__figure"><img class="detail__icon" src="./media/envelope.svg" alt="mail icon"></span></p>
                                        <div class="detail__link__hover"></div>
                                    </a>
                                </div>
                                <div class="detail__link__container">
                                    <a href="#" class="detail__link">
                                        <p class="detail__text--bottom">${det.url ? det.url : 'website.be' }<span class="detail__figure"><img class="detail__icon" src="./media/external-link.svg" alt="link icon"></span></p>
                                        <div class="detail__link__hover"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="means__container means__container__poi">
                                <h5 class="bottom__title">Informatiepunt</h5>
                                <p>${det.organizer ? det.organizer : ''}</p>
                                <div class="detail__link__container">
                                    <a href="#" class="detail__link">
                                        <p class="detail__text--bottom">${det.url ? det.url : 'website.be'}<span class="detail__figure"><img class="detail__icon" src="./media/external-link.svg" alt="link icon"></span></p>
                                        <div class="detail__link__hover"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`

            this.$section.innerHTML = details 
        }, 
        getURLDay(type = 'day') {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const urlDay = params.get('day');
            const urlSlug = params.get('slug');
            if (type == 'day') {if (urlDay !== null) {return urlDay}}
            else {if (type == 'slug') {if (urlSlug !== null) {return urlSlug}}};
        },
};
    prog.initialise();
})();