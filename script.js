function pintar() {
    let html = ''
    const container = document.querySelector('.container')
    let apostar = document.querySelector('#apostar').value || 5
    let ganar = document.querySelector('#ganar').value || 50

    for (let j = 1; j <= 25; j++) {
        if (j == 1) {
            html += `
                <div class="row border-bottom fw-bold">
                    <div class="col"></div>
                    <div class="col">1.3</div>
                    <div class="col">1.4</div>
                    <div class="col">1.5</div>
                    <div class="col">1.6</div>
                    <div class="col">1.7</div>
                    <div class="col">1.8</div>
                    <div class="col">1.9</div>
                    <div class="col">2.0</div>
                    <div class="col">2.1</div>
                    <div class="col">2.2</div>
                    <div class="col">2.3</div>
                    <div class="col">2.4</div>
                    <div class="col">2.5</div>
                </div>`
        }
        html += `<div class="row border-bottom ${j % 2 == 0 ? 'bg-info text-dark' : ''}">`
        for (let i = 1.3; i <= 2.5; i = (i * 10 + 1) / 10) {
            if (i == 1.3) {
                html += `<div class="col fw-bold">${j}</div>`
            }
            let cuota = i ** j * apostar * 1000
            let valor = cuota > 1000000 ? Math.floor(cuota / 1000000) : 0
            valor = valor <= ganar ? valor : 0
            if (valor > 0) {
                html += `<div class="col">${valor}</div>`
            } else {
                html += `<div class="col"></div>`
            }
        }
        html += '</div>'
    }

    container.innerHTML = html
}

pintar()
