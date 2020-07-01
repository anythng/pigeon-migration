FROM postgres:11

ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD mylocalpassword
ENV POSTGRES_DB anythng

VOLUME [ "/tmp/postgres", "/var/lib/postgressql/data" ]

COPY init.sql /docker-entrypoint-initdb.d/
RUN chmod a+r /docker-entrypoint-initdb.d/*
