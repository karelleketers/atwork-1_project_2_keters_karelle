(()=>{
    const festival = {
        initialise(){
            this.cacheElements();
            this.buildUI();
            this.registerListeners();
        },
        cacheElements(){
            this.$day = document.querySelectorAll('.nav__date__text');
        },
        buildUI(){
            var that = this;
            Array.from(this.$day).forEach((el, index) => {i = index%10; el.innerHTML = that.getDates(i, 1)})
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
        };
        festival.initialise();
    })();