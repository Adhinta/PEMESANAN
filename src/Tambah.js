import React from 'react';
import { StyleSheet,
 Text, 
 Button,
 TouchableOpacity,
 View, 
 ImageBackground,
 StatusBar,
 Image,
 TextInput,
 ScrollView,
 Alert, ActivityIndicator
} from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
const home = require('./img/home.png');
const custemer = require('./img/data.png');
const tambah = require('./img/pesan.png');
class TambahScreen extends React.Component {
  static navigationOptions = {
    header: null
 };
  
  constructor()
    {
        super();
        this.state = {
          nama: '',
          nomor: '',
          jenis_makanan: '',
          jumlah: '',
         notlpn: '',
          ActivityIndicator_Loading: false,
        }
    }
    submitData = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://a1615051069.000webhostapp.com//PM/latihan6/kirimData.php',
            {
                method: 'POST',
                headers:
                {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nama : this.state.nama,
                  alamat : this.state.alamat,
                  jenis_makanan : this.state.jenis_makanan,
                  jumlah : this.state.jumlah,
                 notlpn : this.state.notlpn,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                Alert.alert('SUCESS', responseJsonFromServer);
                this.setState(
                {
                  nama: '',
                  alamat: '',
                  jenis_makanan: '',
                  jumlah: '',
                  notlpn: '',
                  ActivityIndicator_Loading : false
                });

            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }


  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator color='#FFFFFF' size='large'/>
        </View>
      );
    }

    return(
      <ImageBackground
          source={require('./img/c.jpg')}
          style={styles.container}>
            <View style={styles.containerMain}>
              <StatusBar
                backgroundColor="#AD1457"
                barStyle="light-content"
              />
              <Text style={styles.title}>Restaurant Pratama</Text>
              <Text style={styles.subTitle}>Pesanan</Text>
              <View style={{ backgroundColor: 'rgba(255,255,255, .4)', marginTop: 15 }}>
              <ScrollView>
               <Text style={styles.judul} >Nama Pemesan:</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Nama Pemesan"
                  onChangeText = {(TextInputText) => this.setState({ nama: TextInputText })}
                  value={this.state.nama}
              />
              <Text style={styles.judul} > Alamat Pemesan:</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Alamat Pemesan"
                  onChangeText = {(TextInputText) => this.setState({ alamat: TextInputText })}
                  value={this.state.alamat}
              />
              <Text style={styles.judul} >Jenis Makanan yang di Pesan :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Jenis Makanan yang di Pesan"
                  onChangeText = {(TextInputText) => this.setState({ jenis_makanan: TextInputText })}
                  value={this.state.jenis_makanan}
              />
              <Text style={styles.judul} >Jumlah Makanan  yang di Pesanan:</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan Jumlah Makanan yang di Pesanan"
                  onChangeText = {(TextInputText) => this.setState({ jumlah: TextInputText })}
                  value={this.state.JK}
              />
              <Text style={styles.judul} >No Telp:</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukan No Telp"
                  onChangeText = {(TextInputText) => this.setState({ NoHP: TextInputText })}
                  value={this.state.notlpn}
              />
              </ScrollView>
              </View>
              <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.button}
                  onPress={this.submitData}>
                <Text style={{ fontSize: 20, color: '#fff',fontWeight: 'bold' }}>
              Klik Pesan</Text>
              </TouchableOpacity>
              </View>

            </View>
            <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Image source={home} style={styles.menuIcon} />
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('CustemerScreen')}>
          <Image source={custemer} style={styles.menuIcon} />
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.navigate('TambahScreen')}>
            <Image source={tambah} style={styles.menuIcon} />
          </TouchableOpacity>

        </View>
          </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  containerMain: {
    flex: 1,
    
  },
  title: {
    
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    paddingBottom: 5,
    textAlign: 'center',
    backgroundColor: '616161'
  },
  subTitle: {
    backgroundColor: '616161',
    color: '#000',
    fontSize: 14,
    paddingBottom: 12,
    textAlign: 'center',
  },
  menuContainer: {
    backgroundColor: 'rgb(66, 244, 244)',
    paddingVertical: 12,
    flexDirection: 'row',
    flex: 0.07,

  },
  menu:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1 
  },
  menuIcon:{
    tintColor: '#000',
    height: 40,
    width: 40,
  },
  menuIconSelected:{
    color: '#00BCD4',
    textAlign: 'center'
  },
  isian: {
    //backgroundColor: 'rgba(255,255,255, .6)',
    width: '100%',
    padding: 10,
    fontSize: 15,
    color: '#000'
  },
  judul: {
    padding: 1, 
    fontSize: 20, 
    color: '#000', 
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    height: 35,
    width: 150,
    backgroundColor: '#01579b',
    alignItems: 'center',
    borderRadius: 12,
    margin: 10, 
    justifyContent: 'center',
  }
});

export default TambahScreen;
