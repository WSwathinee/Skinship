import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MoreScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Coming Soon</Text>
        
      </View>
    );
};
{/*class PieChartExample extends React.PureComponent {
  render() {
      const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

      const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

      const pieData = data
          .filter((value) => value > 0)
          .map((value, index) => ({
              value,
              svg: {
                  fill: randomColor(),
                  onPress: () => console.log('press', index),
              },
              key: `pie-${index}`,
          }))

      return <PieChart style={{ height: 200 }} data={pieData} />
  }
}

export default PieChartExample;

const styles = StyleSheet.create({
container: {
  flex: 1, 
  alignItems: 'center', 
  justifyContent: 'center'
},
});*/}

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});