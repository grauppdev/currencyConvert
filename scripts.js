const button = document.querySelector('button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 200000

const convertValues = () => {

    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById ('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
    {
        style:'currency',
        currency: 'BRL'
    }).format(inputReal)

    if(select.value === 'US$ Dólar americano'){
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
        {
            style:'currency',
            currency: 'USD'
        }).format(inputReal/dolar)

    }

    if(select.value === '€ Euro'){
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
        {
            style:'currency',
            currency: 'EUR'
        }).format(inputReal/euro)
    }
    if(select.value === 'Bitcoin'){
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
        {
            style:'currency',
            currency: 'BTC'
        }).format(inputReal/bitcoin)
    }

    }

    changecurrency = () => {
        const img = document.getElementById ("image-state")
        const currencyName = document.getElementById ("currency-name")

        if (select.value === 'US$ Dólar americano') {
            currencyName.innerHTML = "Dólar Americano"
            img.src = "./assets/eua.png"
        }

        if (select.value === '€ Euro') {
            currencyName.innerHTML = "Euro"
            img.src = "./assets/euro.png"
        }

        if (select.value === 'Bitcoin') {
            currencyName.innerHTML = "Bitcoin"
            img.src = "./assets/bitcoin.png"
        }

    convertValues()


    }


button.addEventListener('click', convertValues)
select.addEventListener('change', changecurrency)