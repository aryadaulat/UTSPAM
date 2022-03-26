import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Kapal} from '../../Assets';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      selectedLanguage:'Test',
    };
  }
  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={{color: 'black'}}>Beranda</Text>
          <Text style={styles.text}> Home</Text>
          <TextInput
            placeholder="Nomor Telepon"
            style={styles.TextInput}
            value={this.state.nama}
            onChangeText={text => this.onChangeText('nama', text)}
            color="black"
            placeholderTextColor="lightgrey"
          />
          <View style={{flexDirection: 'row',}}>
            <Image source={Kapal} style={{height: 50, width: 50}} />
						
						<Picker
						themeVariant='dark'
						style={styles.picker}
						selectedValue={this.state.selectedLanguage}
						onValueChange={(itemValue, itemIndex) =>
							this.setState({
								selectedLanguage: itemValue
							})
						}>
						<Picker.Item label='Java' value='java' />
						<Picker.Item label='JavaScript' value='js' />
					</Picker>
            
          </View>
					<View style={{backgroundColor:'black'}}>
					
					</View>
        </View>
        <View style={styles.bottom}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    flex: 0.5,
    // backgroundColor: 'red',
  },
  bottom: {
    flex: 0.5,
    // backgroundColor:'yellow'
  },
  text: {
    color: 'black',
		fontFamily:'Hurricane-Regular'
  },
  TextInput: {
    padding: 10,
    paddingHorizontal: 80,
    marginBottom: 1,
    // backgroundColor:'white',
    borderColor: 'black',
    borderBottomWidth: 3,
  },
	picker: {
		// fontWeight:'bold',
		// backgroundColor:'red',
		paddingHorizontal:150
	}
});
// style={{color:'black'}}
