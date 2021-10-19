// libraries
import { StyleSheet } from 'react-native';

// js
import colors from '../../utils/colors';

const styles = StyleSheet.create({
    container: (backgroundColor: String) => ({
        backgroundColor,

        borderWidth: 1,
        borderColor: backgroundColor,
        borderRadius: 16,
        marginVertical: 8,
        marginHorizontal: 12,
        overflow: 'hidden',
        alignItems: 'flex-start',

        //card shadow
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 7,
    }),
    containerRow: {
        flexDirection: 'row',
    },
    imageContainer: {
        marginLeft: 20,
        maxHeight: 100,
        maxWidth: 100,
    },
    image: {
        width: 100,
        height: 100,
    },
    infoContainer: {
        marginLeft: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    typesContainerRow: {
        flexDirection: 'row',
        marginTop: 12,
    },
    idContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginHorizontal: 12,
        marginVertical: 4,
    },
    idText: {
        color: colors.darkGrey,
        fontSize: 24,
        fontWeight: 'bold',
    },
})

export default styles;