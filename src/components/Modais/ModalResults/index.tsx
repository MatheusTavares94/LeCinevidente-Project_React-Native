import React, { useEffect } from 'react';
import { View, Modal, Image, ModalProps, TouchableOpacity, ScrollView } from "react-native";
import { styles } from './styles'

import CloseIcon from "../../../assets/icons/closeIcon.png"

interface ModalResultsProps extends ModalProps {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    index: number;
}

export const ModalResults = ({ modal, setModal, index, ...rest }: ModalResultsProps) => {

    useEffect(() => {
        console.log(index);
    }, [])

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                setModal(!modal)
            }}
            {...rest}
        >
            <TouchableOpacity style={styles.modal}>
                <View style={styles.modalContainer}>
                    <View style={{ flexDirection: "row", alignContent: "flex-end", width: "100%" }}>
                        <TouchableOpacity
                            style={{ width: "8%", position: "absolute", right: 0 }}
                            onPress={() => setModal(false)}>
                            <Image style={styles.closeIcon} source={CloseIcon} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>

                    </ScrollView>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}