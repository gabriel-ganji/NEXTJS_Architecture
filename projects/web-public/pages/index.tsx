import React from "react";
import { sum } from "@alura/utils/math/sum";
import { Text } from "@alura/design-system/components/Text";

export default function HomeScreen() {
    return (
        <main>
            <Text tag="h1">Home</Text>
            <Text tag="p">Importando módulo local: sum: {sum(2, 2)} e Text</Text>
        </main>
    )
}
