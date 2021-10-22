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
        marginBottom: 12,
    },
    // image container
    evolutionImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    evolutionPokemonTitle: {
        marginTop: 20,
        marginBottom: 28,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'capitalize',
    },
    imageContainer: {
        marginBottom: 28,
        marginHorizontal: 16,
    },
    evolutionImage: {
        margin: -40,
        width: 150,
        height: 150,
    },
    separatorContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 12,
    },
    evolutionLevelText: {
        marginTop: 20,
        marginBottom: 8,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '700',
    },
    divider: {
        marginHorizontal: 8,
        marginBottom: 10,
        width: 50,
        height: 1,
        borderWidth: 2,
    },
    emptyContainer: {
        marginVertical: 20,
    },
});

export default styles;
