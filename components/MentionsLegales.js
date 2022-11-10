import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Top from './Top'

export default class MentionsLegales extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Top />

        <View style={styles.scroll}>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Text style={styles.text}>Les mentions légales :</Text>
            <Text style={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat est velit egestas dui id ornare arcu odio ut. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Nulla facilisi nullam vehicula ipsum a arcu. Duis ut diam quam nulla porttitor massa id neque. Et molestie ac feugiat sed lectus. Lorem mollis aliquam ut porttitor. Amet aliquam id diam maecenas. Duis tristique sollicitudin nibh sit amet commodo nulla. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Sit amet aliquam id diam maecenas. Volutpat diam ut venenatis tellus in. Tristique nulla aliquet enim tortor. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Cursus in hac habitasse platea dictumst quisque sagittis purus.</Text>
            <Text style={styles.text2}>Maecenas volutpat blandit aliquam etiam erat. Tempor commodo ullamcorper a lacus vestibulum. Morbi tristique senectus et netus et malesuada fames ac turpis. Massa enim nec dui nunc. Facilisi cras fermentum odio eu feugiat. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Laoreet id donec ultrices tincidunt. Lacus sed viverra tellus in hac habitasse. Vitae nunc sed velit dignissim sodales ut eu sem integer. Feugiat pretium nibh ipsum consequat nisl vel. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Senectus et netus et malesuada fames ac turpis. Ullamcorper sit amet risus nullam. Aliquet enim tortor at auctor urna. Mauris ultrices eros in cursus turpis massa tincidunt dui. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Sed cras ornare arcu dui.</Text>
            <Text style={styles.text2}>Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Gravida neque convallis a cras semper auctor. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Ut lectus arcu bibendum at varius vel pharetra vel. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Dignissim convallis aenean et tortor at risus viverra. Non sodales neque sodales ut etiam. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Sit amet est placerat in egestas.</Text>
            <Text style={styles.text2}>Habitasse platea dictumst vestibulum rhoncus est pellentesque. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Proin fermentum leo vel orci. Placerat in egestas erat imperdiet sed euismod nisi. Massa id neque aliquam vestibulum morbi. Libero enim sed faucibus turpis in eu mi. Venenatis cras sed felis eget. Vulputate odio ut enim blandit. Ultricies integer quis auctor elit. Integer enim neque volutpat ac. Duis convallis convallis tellus id interdum velit laoreet id donec.</Text>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  text2: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  scrollView: {
    top: '15%',
    backgroundColor: 'whitesmoke',
  },
  scroll:{
    height: "80%",
  }
})