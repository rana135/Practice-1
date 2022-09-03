let users = [
    {
        "id": 1,
        "photoUrl": "http://placehold.it/32x32",
        "age": 31,
        "name": "Rachelle Alford",
        "gender": "female",
        "email": "rachellealford@concility.com",
        "contact": "+1 (993) 495-2453",
        "address": "277 Beard Street, Fairview, Indiana, 8616"
    },
    {
        "id": 2,
        "photoUrl": "http://placehold.it/32x32",
        "age": 29,
        "name": "Alba Sargent",
        "gender": "female",
        "email": "albasargent@concility.com",
        "contact": "+1 (800) 541-3229",
        "address": "317 Lewis Avenue, Harrison, Massachusetts, 9841"
    },
    {
        "id": 3,
        "photoUrl": "http://placehold.it/32x32",
        "age": 25,
        "name": "Pope Bartlett",
        "gender": "male",
        "email": "popebartlett@concility.com",
        "contact": "+1 (862) 443-3309",
        "address": "465 Sutton Street, Nutrioso, Virgin Islands, 7224"
    },
    {
        "id": 4,
        "photoUrl": "http://placehold.it/32x32",
        "age": 40,
        "name": "Charity Donovan",
        "gender": "female",
        "email": "charitydonovan@concility.com",
        "contact": "+1 (800) 571-3573",
        "address": "333 Wolf Place, Laurelton, Pennsylvania, 6183"
    },
    {
        "id": 5,
        "photoUrl": "http://placehold.it/32x32",
        "age": 30,
        "name": "Andrews Mclaughlin",
        "gender": "male",
        "email": "andrewsmclaughlin@concility.com",
        "contact": "+1 (892) 537-2638",
        "address": "860 Independence Avenue, Dowling, Washington, 3505"
    },
    {
        "id": 6,
        "photoUrl": "http://placehold.it/32x32",
        "age": 39,
        "name": "Brooks Beck",
        "gender": "male",
        "email": "brooksbeck@concility.com",
        "contact": "+1 (872) 572-2997",
        "address": "567 Central Avenue, Clarksburg, South Carolina, 7995"
    }
]

module.exports.getAllUsers = async (req, res) => {
    const { limit, page } = req.query
    res.send(users.slice(0, limit))
}

module.exports.addUser = async (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.send("post a users successfully")
}

module.exports.updateUser = async (req, res) => {
    const { id } = req.params
    const data = req.body
    const filter = { id: id }
    const newData = users.find(user => user.id === Number(id))
    // newData.push(data)

    // newData.id = id
    newData.name = req.body.name
    newData.gender = req.body.gender
    newData.contact = req.body.contact
    newData.address = req.body.address
    newData.photoUrl = req.body.photoUrl

    res.send(newData)
}

module.exports.deleteUser = async (req, res) => {
    const {id} = req.params;
    console.log(id)
    users = users.filter(user => user.id !== Number(id))
    res.send(users)
}






// module.exports.userDetails = async (req, res) => {
//     const { id } = req.params;
//     // console.log(id)
//     const foundUser = users.find(user => user.id == id)
//     res.send(foundUser)
// }




