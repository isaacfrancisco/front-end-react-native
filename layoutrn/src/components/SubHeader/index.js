import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Button from '../Button';

export class SubHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://image.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg',
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Isaac Francisco</Text>
          <Text style={styles.bio}>Estudante</Text>

          <View style={styles.buttonContainer}>
            <Button style={styles.firstButton}>Mensagem</Button>
            <Button type="outline">Seguir</Button>
          </View>
        </View>
      </View>
    );
  }
}

export default SubHeader;
