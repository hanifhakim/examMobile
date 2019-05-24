import React, { Component } from 'react';
import { View, TextInput, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux'

import { addEmploy, createData } from '../../store/actions/index'
import {Fire} from '../../firebase/index'

import imageBackground from '../../assets/react-native-wide.png'
import imageBackgroundWorld from '../../assets/world-map.jpg'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import PlaceInput from '../../components/PlaceInput/PlaceInput'

class InputDataScreen extends Component {
    state = {
        nama:'',
        usia:'',
        jabatan:'',
        error:''
    }

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


    placeAddedHandler = () => {
        var employee = Fire.database().ref('employee')
        if(this.state.nama.trim() !== '' && this.state.usia.trim() !== '' && this.state.jabatan.trim() !== '' ){
            // input data ke firebase
            employee.push({
                nama: this.state.nama,
                usia: this.state.usia,
                jabatan: this.state.jabatan
            }).then(res => {
                // ambil semua data di firebase, lempar ke redux
                employee.once('value', this.props.onCreateData, (err)=>{console.log(err)})
                this.setState({error: 'Add Success'})
                setTimeout(() => {
                    this.setState({error: null})
                }, 2000);
            })
        }
        else {
            this.setState({error: 'Harap isi semua kolom'})
            setTimeout(() => {
                this.setState({error: null})
            }, 2000);
        }
    }

    render () {
        // console.log(this.state.nama);
        // console.log(this.state.usia);
        // console.log(this.state.jabatan);
        let errMessage = null
        if(this.state.error){
            errMessage = (
                <Text>{this.state.error}</Text>
            )
        }
        
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Input Data Karyawan</HeadingText>
                    </MainText>
                    <DefaultInput
                       placeholder='Nama'
                        onChangeText = {(val)=>{this.setState({nama:val})}}
                    />
                    <DefaultInput
                         placeholder='Usia'
                        onChangeText = {(val)=>{this.setState({usia: val})}}
                    />
                    <DefaultInput
                         placeholder='Jabatan'
                        onChangeText = {(val)=>{this.setState({jabatan: val})}}
                    />
                    <Button title='INPUT' onPress={this.placeAddedHandler}/>
                    {errMessage}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 150
    },
    button: {
        margin: 8
    },
    previewImage: {
        width: '100%',
        height: '100%'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onAddEmploy: placeName => dispatch(addEmploy(placeName)),
        onCreateData: items => dispatch(createData(items))
    }
}

export default connect(null, mapDispatchToProps)(InputDataScreen)