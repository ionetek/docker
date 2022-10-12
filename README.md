Docker commands
-----
Версия docker:

    docker version
Список всех контейнеров:

    docker ps -a
Список запущенных контейнеров:

    docker ps
Список образов на компьютере:

    docker images
Создание и запуск контейнера:

    docker run image_name
Создание и запуск контейнера с ключами -i -t (interactive terminal). После этого мы будем находиться:

    docker run -it image_name
Запуск контейнера в фоновом режие:

    docker run -d image_name
Запуск контейнра в фоновом режиме с указанием имени:

    docker run -d --name my_nginx nginx
Коннект 80 порта контейнера с портом 8080:

    docker run -p 8080:80 nginx
--rm автоматически удаляет контейнер после остановки
:

    docker run --rm image_name
Остановить контейнер с ID 5332f5159980:

    docker stop 5332f5159980
Скачивание образа с docker hub:

    docker pull hello-world
Скачивание образа с docker hub с указанием версии:

    docker pull hello-world:latest
Удаление контейнера по id или имени
:

    docker rm 5964b70b0c06
    docker container_name
Список файлов и папок:

    ls
Список файлов и папок + скрытые:

    ls -la
Удалить все контейнеры. в т.ч. остановленные:

    docker container prune
Показать данные контейнера. Например там есть IPAddress:

    docker container inspect 5332f5159980
Получить только записи, где есть ip адрес:

    docker container inspect 5332f5159980 | grep IPAddress
Запуск дополнительного процесса в контейнере. exec - выполняет команду в запущенном контейнере, -it - опция подключения интерактивного терминала, bash - название процесса:

    docker exec -it 5332f5159980 bash
Перейти в папку html в запущенном контейнере nginx:

    cd /usr/share/nginx/html
Прочесть и вывести содержимое файла:

    cat index.html
Показать пути к текущей папке:

    echo ${PWD}
Запуск контейнера с подменой томов (мэппингом томов) и мэппингом портов в фоновом режим:

    docker run -v ${PWD}:/usr/share/nginx/html -d -p 8080:80 nginx
Разбиение команды на строки:

    docker run \
    -v ${PWD}:/usr/share/nginx/html \
    -d \
    -p 8080:80 \
    nginx
Создание docker образа, где "." - путь к Dockerfile с инструкцией:

    docker build .
Создание docker образа, с указнием имени образа и версии припомощи флага -t:

    docker build . -t my_calendar:1.1
Создание docker образа, с указнием имени образа и версии припомощи флага -t:

    docker build . -t my_calendar:1.1
Docker compose commands
-----
Билд и запуск Docker compose:

    docker-compose up -build
Запуск Docker compose:

    docker-compose up