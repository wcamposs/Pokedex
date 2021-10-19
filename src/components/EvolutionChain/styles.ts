import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
        marginHorizontal: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    evolutionInnerContainer: (backgroundColor) => ({
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    }),
    evolutionRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    evolutionImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 12,
    },
    evolutionPokemonTitle: {
        marginTop: 12,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'capitalize',
    },
    evolutionImage: {
        margin: -48,
        width: 175,
        height: 175,
    },
    separatorContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    evolutionLevelText: {
        marginBottom: 8,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
    },
    divider: {
        marginHorizontal: 8,
        marginBottom: 10,
        width: 80,
        height: 1,
        borderWidth: 2,
    },
});

export default styles;
