import React, { Component } from 'react'
import {View, Image, Text, Button, StyleSheet} from 'react-native'
import { connect } from 'react-redux'

import {Fire} from '../../firebase/index'

import { deleteEmploy } from '../../store/actions/index'

class KaryawanDetail extends Component {
    placeDeletedHandler = () => {
        var employee = Fire.database().ref('employee')
        employee.child(this.props.selectedEmploy.key).remove()
        this.props.onDeleteEmploy(this.props.selectedEmploy.key)
        this.props.navigator.pop()
    }

    render() {
        return(
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.placeImage}
                        source={this.props.selectedEmploy.image}
                    />
                    {/* <Text style={styles.placeName}>{this.props.selectedEmploy.value}</Text> */}
                    <Text style={styles.placeName}>Nama: {this.props.nama}</Text>
                    <Text style={styles.placeName}>Usia: {this.props.usia}</Text>
                    <Text style={styles.placeName}>Jabatan: {this.props.jabatan}</Text>
                </View>
                <Button title='Delete' color='red' onPress={this.placeDeletedHandler}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        padding: 22
    },
    placeImage: {
        width: '100%',
        height: 220
    },
    placeName : {
        fontWeight: 'bold',
        fontSize : 28,
        textAlign :'center'
    },
    button : {
        margin: 10
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onDeleteEmploy: (key) => dispatch(deleteEmploy(key))
    }
}

export default connect(null, mapDispatchToProps)(KaryawanDetail)