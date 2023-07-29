import React from 'react';
import { SafeAreaView, StatusBar, FlatList} from 'react-native';
import { Text } from 'react-native';
import Item from './Item';

const servicos = [
    {
        id:1,
        nome: 'Banho',
        preco: 79.90,
        descricao: 'NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos.'
    },
    {
        id:2,
        nome: 'Vacina V4',
        preco: 89.90,
        descricao: 'Uma dose da vacina V4. Seu gato precisa de duas.'
    },
    {
        id:3,
        nome: 'Vacina Antirrábica',
        preco: 99.90,
        descricao: 'Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.'
    },
    {
        id:4,
        nome: 'Vacina Giárdia',
        preco: 109.90,
        descricao: 'Uma dose da vacina Giárdia. São necessárias duas doses.'
    },
    {
        id:5,
        nome: 'Vacina Gripe Felina',
        preco: 119.90,
        descricao: 'Uma dose da vacina Gripe Felina. São necessárias duas doses.'
    },
    {
        id:6,
        nome: 'Vacina Leucemia',
        preco: 129.90,
        descricao: 'Uma dose da vacina Leucemia Felina. São necessárias duas doses.'
    },
    {
        id:7,
        nome: 'Vacina V3',
        preco: 139.90,
        descricao: 'Uma dose da vacina V3. São necessárias duas doses.'
    },
    {
        id:8,
        nome: 'Vacina V4',
        preco: 149.90,
        descricao: 'Uma dose da vacina V4. São necessárias duas doses.'
    }

]

export default function Servicos() {
    return <SafeAreaView>
        <StatusBar />
        <Text>Servicos</Text>
        <FlatList
            data={servicos}
            renderItem={({item}) => <Item {...item} />}
            keyExtractor={({id}) => String(id)}
        />
    </SafeAreaView>
}

