import { ADD_EMPLOY, DELETE_EMPLOY, CREATE_DATA } from './actionTypes'

export const addEmploy = name => {
    return {
        type: ADD_EMPLOY,
        name: name
    }
}

export const deleteEmploy = (key) => {
    return {
        type: DELETE_EMPLOY,
        itemKey: key
    }
}

export const createData = (items) => {
    var arrData = []
        var rawData = items.val()

        Object.keys(rawData).forEach(id => {
            arrData.push({
                key: id,
                nama: rawData[id].nama,
                usia: rawData[id].usia,
                jabatan: rawData[id].jabatan,
                image: {
                    uri: "https://freerangestock.com/sample/78746/halloween-cat-icon-means-trick-or-treat-and-autumn.jpg"
                }
            })
        })

    return {
        type: CREATE_DATA,
        payload: arrData
    }
}





















