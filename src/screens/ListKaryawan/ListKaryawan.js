import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'

import { createData } from '../../store/actions/index'
import {Fire} from '../../firebase/index'

import PlaceList from '../../components/PlaceList/PlaceList'

class ListKaryawan extends Component {
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === 'NavBarButtonPress'){
            if (event.id === 'sideDrawerToggle'){
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
    }
    componentDidMount = () => {
        var employee = Fire.database().ref('employee')
        employee.once('value', this.props.onCreateData, (err)=>{console.log(err);
        })

    }

    itemSelectedHandler = (key) => {
        // selPlace = {value, key, image}
        const selEmploy = this.props.employ.find(item => {
            return item.key == key
        })
        this.props.navigator.push({
            screen: 'jc8reactnative.KaryawanDetailScreen',
            title: selEmploy.nama,
            passProps: {
                selectedEmploy: selEmploy,
                nama: selEmploy.nama,
                usia: selEmploy.usia,
                jabatan: selEmploy.jabatan
            }
        })
    }

    render () {
        return (
            <View>
                <PlaceList 
                    places ={this.props.employ}
                    onItemSelected={this.itemSelectedHandler}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        employ: state.employ.employ
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCreateData: items => dispatch(createData(items))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListKaryawan);