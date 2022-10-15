const cityUrl = "http://zomatoajulypi.herokuapp.com/location"
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

const getCity = async() => {
    let response = await fetch(cityUrl,{method:"GET"})
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option') //<option></option>
        let text = document.createTextNode(item.state) // Delhi
        element.appendChild(text) //<option>Delhi</option>
        element.value = item.state_id //<option value="1">Delhi</option>
        document.getElementById('city').appendChild(element)
        //<select><option value="1">Delhi</option></select>
    })
}

const getRest = async() => {
    let cityId = document.getElementById('city').value;
    let rest = document.getElementById('restaurants');
    while(rest.length > 0){
        rest.remove(0)
    }
    let response = await fetch(`${restUrl}${cityId}`,{method:"GET"})
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option')
        let text = document.createTextNode(`${item.restaurant_name} | ${item.address}`)
        element.appendChild(text)
        rest.appendChild(element)
    })
}

//es5
// function getCity(){
//     fetch(cityUrl,{method:"GET"})
//     .then((res) => res.json())
//     .then((data) => {
//         data.map((item) => {
//             let element = document.createElement('option') //<option></option>
//             let text = document.createTextNode(item.state) // Delhi
//             element.appendChild(text) //<option>Delhi</option>
//             element.value = item.state_id //<option value="1">Delhi</option>
//             document.getElementById('city').appendChild(element)
//             //<select><option value="1">Delhi</option></select>
//         })
//     })
// }


//es6
// async function getCity(){
//     let response = await fetch(cityUrl,{method:"GET"})
//     let data = await response.json()
//     data.map((item) => {
//         let element = document.createElement('option') //<option></option>
//         let text = document.createTextNode(item.state) // Delhi
//         element.appendChild(text) //<option>Delhi</option>
//         element.value = item.state_id //<option value="1">Delhi</option>
//         document.getElementById('city').appendChild(element)
//         //<select><option value="1">Delhi</option></select>
//     })
// }