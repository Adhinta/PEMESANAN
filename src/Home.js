import React from 'react';
import { StyleSheet,
 Text, 
 Button,
 TouchableOpacity,
 View, 
 ImageBackground,
 StatusBar,
 Image
} from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
const home = require('./img/home.png');
const custemer = require('./img/data.png');
const tambah = require('./img/pesan.png');

class HomeScreen extends React.Component {
	static navigationOptions = {
    header: null
 };
	render() {
		return (
			<ImageBackground
          source={require('./img/c.jpg')}
          style={styles.container}>
            <View style={styles.containerMain}>
              <StatusBar
                backgroundColor="#AD1457"
                barStyle="light-content"
              />
              <Text style={styles.title}> Restaurant Pratama</Text>
              
              
          
       		     <Text style={{ textAlign: 'center', padding: 30, fontSize: 25, color: '#ffff', justifyContent: 'center'}} >Selamat Datang</Text>
       		      <Text style={{ textAlign: 'center', padding: 30, fontSize: 25, color: '#ffff', justifyContent: 'center'}} >Terima Kasih telah menggunakan aplikasi Pemesanan Makanan di Restaurant Pratama, gunakan menu dengan menekan icon aplikasi di pojok kanan bawah untuk memesan makanan yang tersedia</Text>
       		       
        
           
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
    backgroundColor: '#BDBDBD)',
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
  }
});

export default HomeScreen;
