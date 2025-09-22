import {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { OptionButton } from './OptionButton';

export function RadioButtonGroup({ options, initialValue, setSelectedValue }) {
    const [ selectedOption, setSelectedOption ] = useState(null);

    useEffect(() => {
        setSelectedOption(initialValue);
    }, [initialValue]);

    return (
        <View style={styles.container}>
            {options.map((option) => (
                <OptionButton
                    key={option.value}
                    label={option.label}
                    icon={option.icon}
                    selected={selectedOption}
                    value={option.value}
                    onPress={setSelectedOption}
                    setValue={setSelectedValue}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8
    }
});
