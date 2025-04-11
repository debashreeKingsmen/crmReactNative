import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { BarChart } from 'react-native-chart-kit';

const LineChart = () => {
  const [direction, setDirection] = useState('daily');

  // data for daily and weekly
  const chartData = {
    daily: {
      labels: ['Java', 'JS', 'Python', 'C', 'DSA', 'Node'],
      datasets: [{ data: [20, 30, 40, 50, 60, 87] }],
      backgroundGradientFrom: '#003f5c',
      backgroundGradientTo: '#ffa600',
    },
    weekly: {
      labels: ['React', 'Angular', 'Vue', 'Next', 'Kotlin', 'Go'],
      datasets: [{ data: [50, 40, 30, 20, 70, 90] }],
      backgroundGradientFrom: '#1f4037',
      backgroundGradientTo: '#99f2c8',
    },
  };

  return (
    <PreviewLayout
      label="Click"
      selectedValue={direction}
      values={['daily', 'weekly']}
      setSelectedValue={setDirection}
    >
      
      <View style={{ flex: 1 }}>
        <BarChart
          data={chartData[direction]}
          width={Dimensions.get('window').width - 20}
          height={250}
          chartConfig={{
            backgroundGradientFrom: chartData[direction].backgroundGradientFrom,
            backgroundGradientTo: chartData[direction].backgroundGradientTo,
            color: (opacity) => 'rgba(255, 255, 255, 1)',
            strokeWidth: 2,
            barPercentage: 0.5,
            useShadowColorFromDataset: false,
          }}
          style={{
            borderRadius: 10,
            alignSelf: 'center',
          }}
        />
      </View>
    </PreviewLayout>
  );
};

export default LineChart;

const PreviewLayout = ({ label, children, values, selectedValue, setSelectedValue }) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[styles.buttonLabel, selectedValue === value && styles.selectedLabel]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});
