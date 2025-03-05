#!/bin/bash

# Obtener la fecha actual en formato YYYYMMDD
FECHA=$(date +"%Y%m%d")

LOGFILE="/home/rodri/scripts/log_descarga.log"

# Función para crear el archivo de log si no existe
init_log() {
    if [ ! -f "$LOGFILE" ]; then
        touch "$LOGFILE"
    fi
}

log() {
    echo "$(date "+%Y-%m-%d %H:%M:%S") [INFO] $1" | tee -a "$LOGFILE"
}

log_error() {
    echo "$(date "+%Y-%m-%d %H:%M:%S") [ERROR] $1" | tee -a "$LOGFILE" >&2
}

# Inicializar el archivo de log
init_log

log "Inicio del script de descarga de archivos."
START_TIME=$(date +%s)

# Configuración del servidor FTP
FTP_HOST="192.168.4.242"
FTP_USER="ftpuser"
FTP_PASS="ftpuser"
FTP_DIR="archivos"  # Ojo: no poner '/' si está dentro del chroot

# Directorio local donde se guardarán los archivos descargados
LOCAL_DIR="/home/rodri/scripts/descargas"


# Crear el directorio local si no existe
mkdir -p "$LOCAL_DIR"

# Archivo temporal para almacenar la lista de archivos en el servidor FTP
TEMP_FILE=$(mktemp)

# Conectar al servidor FTP y listar los archivos
ftp -inv $FTP_HOST <<EOF > "$TEMP_FILE"
user $FTP_USER $FTP_PASS
cd $FTP_DIR
ls
bye
EOF

# Filtrar los archivos que coinciden con el patrón y descargarlos
FILES_TO_DOWNLOAD=$(grep "archivo-$FECHA-.*\.txt" "$TEMP_FILE" | awk '{print $9}')

if [ -z "$FILES_TO_DOWNLOAD" ]; then
    log "No hay archivos para descargar.
    "
    rm "$TEMP_FILE"
    exit 1
fi

log "Archivos a descargar:
$(for file in $FILES_TO_DOWNLOAD; do echo "  $file"; done)"

# Descargar los archivos dentro de la misma sesión FTP
ftp -inv $FTP_HOST <<EOF
user $FTP_USER $FTP_PASS
cd $FTP_DIR
lcd $LOCAL_DIR
$(for file in $FILES_TO_DOWNLOAD; do echo "get $file"; done)
bye
EOF

log "Todos los archivos han sido descargados del servidor FTP."

rm "$TEMP_FILE"

END_TIME=$(date +%s)
ELAPSED_TIME=$((END_TIME - START_TIME))
log "Tiempo total de ejecución: ${ELAPSED_TIME} segundos."
log "Fin del script.
"
