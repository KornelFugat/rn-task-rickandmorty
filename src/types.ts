export interface CharacterCardProps {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    onLikePress?: () => void;
}

export interface CharacterCardProps {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    gender?: string;
    origin?: string;
    onLikePress?: () => void;
}

export interface FilterModalProps {
    visible: boolean;
    onClose: () => void;
    onApply: (filters: { status: string; species: string }) => void;
}

export interface CheckboxProps {
    label: string;
    isChecked: boolean;
    onPress: () => void;
}

export interface FilterButtonProps {
    isOpen: boolean;
    onPress: () => void;
}

export interface SearchBarProps {
    value: string;
    onChange: (text: string) => void;
    onClear: () => void;
    placeholder?: string;
}