// libraries
import { StyleSheet } from 'react-native';

// js
import colors from '../../utils/colors';

const styles = StyleSheet.create({
    header: {
        height: '10%'
    },
    container: (backgroundColor: String) => ({
        flex: 1,
        backgroundColor,
    }),
    scrollViewContainer: {
        marginTop: -12,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems:'center',
        
    },
    pokemonDetails: {
        paddingTop: 12,
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pokemonInfoContainer: {
        backgroundColor: colors.white,
        flex: 1,
        height: '100%',
        width: '100%',
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        flex: 1,
        marginVertical: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    image: {
        width: 175,
        height: 175,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        marginRight: 10,
        textAlign: 'center'
    },
    idText: {
        color: colors.darkGrey,
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 8,
    },
    name: {
        color: colors.white,
        fontSize: 24,
        fontWeight: 'bold'
    },
    infoName: {
        color: colors.darkBlue,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'normal',
    },
    divider: {
        marginBottom: 10,
        width: 300,
        height: 1
    },
    typesListContainer: {
        marginTop: 10,
        marginBottom: -10,
        width: '100%',
        flexDirection: 'row',
    },
    abilityName: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'normal',
        marginVertical: 5
    },
    inlineDivider: {
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 16
    },
    statsContainer: {
        width: '100%',
        flexDirection: 'column'
    },
    statListContainer: {
        marginHorizontal: 55
    },
    statContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    statName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5
    },
    statValue: {
        fontSize: 16,
        fontWeight: 'normal',
        marginVertical: 5
    },
    centerRow: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    emptyContainer: {
        height: 70,
    },
})

export default styles;