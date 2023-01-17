//Promise (resolve, reject)

let developers = [
    { name: 'Ilim', age: 24, salary: 50000, level: 'middle' },
    { name: 'Kadyrbu', age: 22, salary: 40000, level: 'middle' },
    { name: 'Aisuluu', age: 18, salary: 30000, level: 'junior' },
    { name: 'Tankulu', age: 18, salary: 30000, level: 'junior' }
]
const button = document.querySelector('button')
const olTag = document.querySelector('ol')
const spinner = document.querySelector('#spinner')
const er = document.querySelector("#error")

function getDevelopers(isData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isData) {
                resolve(developers)
            } else {
                reject('Bizdin ERROR')

            }
        }, 2000)
    })
}

button.onclick = () => {
    spinner.style.display = 'block'
    getDevelopers(false)
        .then((mass) => {
            console.log(mass)
            renderDevs(mass)
        })

        .catch((err) => { console.error(err)
            er.style.display = "block" })
        .finally(() => {
            spinner.style.display = 'none'
            console.log('End')
        })

}

function renderDevs(devs) {
    for (const dev of devs) {
        olTag.innerHTML += `
        <li> Name: ${dev.name} 
            <h6> Salary ${dev.salary} $ USD</h6>
            <span> Level: <i> ${dev.level} </i> </span>
        </li>
        `
    }
}

console.log(
    developers.map((dev) => {
        if (dev.age <= 18) {
            console.log(dev.salary += 5000);
            console.log(developers);
        }
    })
);


