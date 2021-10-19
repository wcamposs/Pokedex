import { normalize } from 'react-native-elements';

export const fontFamily = {
    // regular: 'FrancoisOne_400Regular',
};

export const fontSize = {
    detail: normalize(6),
    badge: normalize(8),
    small: normalize(10),
    normal: normalize(12),
    medium: normalize(13),
    big: normalize(14),
    title: normalize(16),
    custom: (size: number) => normalize(size),
    // specific
    tag: 10,
};