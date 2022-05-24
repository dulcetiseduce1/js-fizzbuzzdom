const container = document.querySelector('.container');

for (let i = 1; i < 100; i++) {
    const element = document.createElement('div');
    switch (true) {
        case (i % 3 == 0 && i % 5 == 0):
            element.append('fizzbuzz');
            element.classList.add('square-fizzbuzz');
            container.append(element);
            console.log('fizzbuzz');
            break;
        case (i % 3 == 0):
            element.append('fizz');
            element.classList.add('square-fizz');
            container.append(element);
            console.log('fizz');
            break;
        case (i % 5 == 0):
            element.append('buzz');
            element.classList.add('square-buzz');
            container.append(element);
            console.log('buzz');
            break;
        default:
            element.append(i);
            element.classList.add('square-number');
            container.append(element);
            console.log(i);
            break;
    }
}