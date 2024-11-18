import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Checkbox from '../Checkbox/Checkbox';
import { styles } from './CharactersFilter.styled';
import FilterModalProps from '../../types'

const CharactersFilter: React.FC<FilterModalProps> = ({ visible, onClose, onApply }) => {
    const [selectedFilters, setSelectedFilters] = useState({
        status: '',
        species: '',
    });
    const handleToggleFilter = (type: 'status' | 'species', value: string) => {
        setSelectedFilters((prev) => ({
            ...prev,
            [type]: prev[type] === value ? '' : value,
        }));
    };
    const handleReset = () => {
        setSelectedFilters({ status: '', species: '' });
    };
    const handleApply = () => {
        onApply(selectedFilters);
        onClose();
    };

    return (
        <Modal visible={visible} transparent>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>STATUS</Text>
                        {['Alive', 'Dead', 'Unknown'].map((status) => (
                            <Checkbox
                                key={status}
                                label={status}
                                isChecked={selectedFilters.status === status}
                                onPress={() => handleToggleFilter('status', status)}
                            />
                        ))}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>SPECIES</Text>
                        {['Human', 'Humanoid', 'Alien'].map((species) => (
                            <Checkbox
                            key={species}
                            label={species}
                            isChecked={selectedFilters.species === species}
                            onPress={() => handleToggleFilter('species', species)}
                            />
                        ))}
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                            <Text style={styles.resetButtonText}>RESET</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
                            <Text style={styles.applyButtonText}>APPLY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
    };

export default CharactersFilter;