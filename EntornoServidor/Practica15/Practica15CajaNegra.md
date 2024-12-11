# Práctica 15 - Plan de pruebas de caja negra

## DNI

| Clase de equivalencia **DNI** | Valor límite           | Valor válido | Valor no válido |
|-------------------------------|------------------------|--------------|-----------------|
| CE1 - Longitud                | 8                      | 45615113     | 65464           |
| CE2 - Dígitos                 | >00000000 / <=99999999 | 12345678     | 00000000        |
| CE3 - Caracteres              | [0-9]                  | 45616547     | 0A1B3C4D        |

## Nombre

| Clase de equivalencia **Nombre** | Valor límite   | Valor válido                     | Valor no válido |
|----------------------------------|----------------|----------------------------------|-----------------|
| CE4 - Longitud                   | 12             | "Constantino Sebastián Ruiz"     | "Juan"          |
| CE5 - Caracteres                 | [a-zA-Z] [0-9] | "María Fernanda 1985 López 23"   | "Juan###"       |

## Ingresos

| Clase de equivalencia **Ingresos** | Valor límite        | Valor válido | Valor no válido |
|-----------------------------           -------|---------------------|--------------|-----------------|
| CE6 - Longitud                     | 6                   | 150000       | 15000           |
| CE7 - Dígitos                      | <=000000 / >=999999 | 049787       | -589874         |
| CE8 - Caracteres                   | [0-9]               | 123456       | 19AAD5          |
| CEv1 - Cantidad                    | <012000             | 011999       | 012001          |
| CEv2 - Cantidad                    | >012000             | 020000       | 011900          |

## Personas a cargocenari

| Clase de equivalencia **Personas a cargo** | Valor límite | Valor válido | Valor no válido |
|--------------------------------------------|--------------|--------------|-----------------|
| CE9 - Longitud                             | 2            | 3            | 354             |
| CE10 - Dígitos                             | <=0 / 99>=   | 12           | -1              |
| CE11 - Caracteres                          | [0-9]        | 6            | 1A              |
| CEv3 - Cantidad                            | >2           | 9            | 1               |
| CEv4 - Cantidad                            | <=2          | 1            | 3               |

---

## Pruebas

| Casos de Prueba | Escenario                  | Entrada                                            | Salida esperada |
|-----------------|----------------------------|----------------------------------------------------|-----------------|
| CP1             | DNI + Nombre + CEv1 + CEv3 | 45616547 + Constantino Sebastián Ruiz + 011999 + 4 | P1              |
| CP2             | DNI + Nombre + CEv1 + CEv4 | 12345678 + María Fernanda 1985 López 2345 + 020000 + 9 | P1          |
