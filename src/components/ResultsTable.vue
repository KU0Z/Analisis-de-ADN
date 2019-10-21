<template>
    <v-container fluid>
        <v-data-iterator hide-default-footer no-data-text="">
            <template v-slot:header>
                <v-toolbar class="mb-2" color="#6200ea" dark flat>
                    <v-spacer></v-spacer>
                    <v-toolbar-title>Resultados</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
            </template>
        </v-data-iterator>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">Parentesco</th>
                            <th class="text-left">Porcentaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key="Resultado">
                            <td>Hermanos</td>
                            <td>65.48%</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        <v-data-iterator hide-default-footer no-data-text="">
            <template  v-slot:header>
                <v-toolbar class="mt-2" color="#6200ea" dark flat>
                    <v-btn color = "#3b1070" style='box-shadow: 5px 3px #20004d'>Compartir en Facebook</v-btn>
                    <v-spacer></v-spacer>
                    <v-toolbar-title>Análisis de ADN - ¿Somos familia?</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn color = "#3b1070" style='box-shadow: 5px 3px #20004d'>Enviar a mi correo</v-btn>
                </v-toolbar>
            </template>
        </v-data-iterator>
  </v-container>
</template>
