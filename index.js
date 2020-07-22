function mathCalc1() {
    const form = document.querySelector('.form1');
    const [a, b, c ] = document.querySelectorAll('.form1 input');
    const span = document.querySelector('#result');

    form.addEventListener('submit', (event)=> {
        event.preventDefault();
        if(+a.value!==0) {
            const D = (b.value**2) -4*a.value*c.value;
            if(D < 0) {
                span.innerHTML ='Корней нет';
                return;
            }
            if(D===0) {
                const x = (-b.value + Math.sqrt(D) ) / 2*a.value;
                span.innerHTML = x;
            }
            if(D > 0) {
                const x = (-b.value + Math.sqrt(D) ) / 2*a.value;
                const x2 = (-b.value - Math.sqrt(D) ) / 2*a.value;
                span.innerHTML = `${x} ${x2}`;
            }
        }
        else {
            span.innerHTML ='a == 0';
        }
    })
}
mathCalc1();
