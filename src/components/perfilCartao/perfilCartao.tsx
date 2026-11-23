import { Text, View } from "react-native";

import { useState } from "react";

import Cartao from "../cartao/cartao";
import Cabecalho from "../cabecalho/cabecalho";
import Botao from "../botao/botao";

import { styles } from './styles';

export default function PerfilCartao({ name, position, color, bio }: any) {
    const [curtidas, setCurtidas] = useState(0);
    const [seguir, setSeguir] = useState(false);
    const [mostrarBio, setMostrarBio] = useState(false);

    return (
        <Cartao>
            <Cabecalho name={name} position={position} color={color} />

            {mostrarBio && <Text style={styles.bio} >{bio}</Text>}

            <Text style={styles.contadorCurtidas} >❤️ {curtidas} curtidas</Text>

            <View style={styles.linhaBotoes} >
                <Botao text="Curtir" onPress={() => setCurtidas(curtidas + 1)} />

                <Botao
                    text={seguir ? 'Seguindo ✓' : 'Seguir'}
                    active={seguir}
                    onPress={() => setSeguir(!seguir)} />
                <Botao
                    text={mostrarBio ? 'Ocultar bio' : 'Ver bio'}
                    onPress={() => setMostrarBio(!mostrarBio)}
                />

            </View>

        </Cartao>
    );
}