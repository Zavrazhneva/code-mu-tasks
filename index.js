function mathCalc1() {
    const inputs = [...document.querySelectorAll(' input')];
    const span = document.querySelector('#result');

    inputs.forEach(element => {
        element.addEventListener('change', onChangeInput)
    })

    function onChangeInput() {
        const inputsValue = inputs.map((input) => {
            return input.value;
        });
        const [a,b,c] = inputsValue;

        const isEmpty = inputsValue.some((element) => element === '');
        if(isEmpty) {
            span.innerHTML ='change number';
            return;
        }
        if(a!==0) {
            const D = (b**2) -4*a*c;
            if(D < 0) {
                span.innerHTML ='Корней нет';
                return;
            }
            if(D===0) {
                const x = (-b + Math.sqrt(D) ) / 2*a;
                span.innerHTML = x;
            }
            if(D > 0) {
                const x = (-b + Math.sqrt(D) ) / 2*a;
                const x2 = (-b - Math.sqrt(D) ) / 2*a;
                span.innerHTML = `${x} ${x2}`;
            }
        }
        else {
            span.innerHTML ='a == 0';
        }
    }
}
mathCalc1();

//prettier