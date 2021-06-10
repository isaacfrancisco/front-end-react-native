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
            URL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fst.depositphotos.com%2F1780879%2F3816%2Fi%2F600%2Fdepositphotos_38166573-stock-photo-trees-with-sunbeams.jpg&imgrefurl=https%3A%2F%2Fpt.depositphotos.com%2Fstock-photos%2Fimagem-de-floresta.html&tbnid=h8F_IkS0y_t2rM&vet=12ahUKEwjRwqXsnI7xAhWqhJUCHeSMDy8QMygCegUIARDUAQ..i&docid=Xzzc0dqbv4Dn9M&w=600&h=450&q=imagem&ved=2ahUKEwjRwqXsnI7xAhWqhJUCHeSMDy8QMygCegUIARDUAQ',
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Isaac Francisco</Text>
          <Text style={styles.bio}>Estudante</Text>

          <View style={styles.buttonContainer}>
            <Button>Mensagem</Button>
            <Button>Seguir</Button>
          </View>
        </View>
      </View>
    );
  }
}

export default SubHeader;
